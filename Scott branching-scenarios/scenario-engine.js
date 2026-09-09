/* ============================================================
   SCENARIO ENGINE
   Shared by all 8 branching scenarios. Each scenario page loads
   its own data file (scenario-data/scenario-N.js), which defines
   window.SCENARIO_DATA, then calls initScenario(window.SCENARIO_DATA).

   Fix a bug or change the interaction here once — it applies to
   all 8 scenarios. Content changes belong in the data files only.
   ============================================================ */

function initScenario(decisions) {
  let current = 0;
  const answers = [];
  const scenarioMatch = location.pathname.match(/scenario-(\d+)\.html$/i);

  function markScenarioComplete() {
    if (!scenarioMatch) return;
    try {
      localStorage.setItem(`clso:scenario:${scenarioMatch[1]}:completed`, 'true');
    } catch (error) {
      // The activity still works if browser storage is unavailable.
    }
  }

  const body = document.getElementById('scenarioBody');
  const stepperLabel = document.getElementById('stepperLabel');
  const stepper = document.getElementById('stepper');
  stepper.innerHTML = decisions.map(() => '<div class="seg"><div class="fill"></div></div>').join('');
  const segments = document.querySelectorAll('#stepper .seg .fill');

  function ph(text) {
    return String(text)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function updateStepper() {
    segments.forEach((seg, i) => {
      seg.style.width = i < current ? '100%' : (i === current ? '50%' : '0%');
    });
    stepperLabel.textContent = current < decisions.length
      ? `Decision ${current + 1} of ${decisions.length}`
      : `Summary`;
  }

  function renderDecision(index) {
    const d = decisions[index];
    const vitalsHtml = d.vitals.map(v => `<span>${v}</span>`).join('');
    const choicesHtml = d.choices.map((c, i) => `
      <label class="choice-card" data-index="${i}">
        <input type="radio" name="choice" value="${i}">
        <div class="row">
          <div class="box"></div>
          <div class="txt">
            <strong>${ph(c.text)}</strong>
            <span>${c.sub}</span>
          </div>
        </div>
      </label>
    `).join('');

    body.innerHTML = `
      <div class="vignette">
        <div class="kicker">${d.kicker}</div>
        <p>${ph(d.vignette)}</p>
        <div class="vitals">${vitalsHtml}</div>
      </div>

      <p class="decision-prompt">${ph(d.prompt)}</p>

      <div class="choice-list" id="choiceList">${choicesHtml}</div>

      <div class="scenario-actions">
        <button type="button" class="btn btn-primary" id="submitBtn" disabled>
          Submit decision
          <span class="btn-arrow"><svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
        </button>
      </div>

      <div class="feedback-bar" id="feedbackBar">
        <div class="verdict" id="feedbackVerdict"></div>
        <p id="feedbackText"></p>
        <div class="continue-row">
          <button type="button" class="btn btn-secondary" id="continueBtn">
            ${index === decisions.length - 1 ? 'See summary' : 'Continue'}
            <span class="btn-arrow"><svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </button>
        </div>
      </div>
    `;

    const cards = Array.from(body.querySelectorAll('.choice-card'));
    const submitBtn = document.getElementById('submitBtn');
    const feedbackBar = document.getElementById('feedbackBar');
    const feedbackVerdict = document.getElementById('feedbackVerdict');
    const feedbackText = document.getElementById('feedbackText');
    const continueBtn = document.getElementById('continueBtn');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.querySelector('input').checked = true;
        submitBtn.disabled = false;
      });
    });

    submitBtn.addEventListener('click', () => {
      const picked = body.querySelector('input[name="choice"]:checked');
      if (!picked) return;
      const choiceIndex = Number(picked.value);
      const choice = d.choices[choiceIndex];

      cards.forEach((card, i) => {
        card.classList.add('disabled');
        card.querySelector('input').disabled = true;
        if (i === choiceIndex) {
          card.classList.add(choice.tier === 'good' ? 'picked-good' : 'picked-caution');
        }
      });

      feedbackVerdict.textContent = choice.tier === 'good' ? 'Solid call.' : 'Worth reconsidering.';
      feedbackText.textContent = choice.feedback;
      feedbackBar.className = 'feedback-bar show ' + (choice.tier === 'good' ? 'good' : 'caution');

      submitBtn.style.display = 'none';
      answers.push({ decision: index, choiceIndex, tier: choice.tier, choiceText: choice.text });
      if (index === decisions.length - 1) markScenarioComplete();
    });

    continueBtn.addEventListener('click', () => {
      current++;
      updateStepper();
      if (current < decisions.length) {
        renderDecision(current);
      } else {
        renderRecap();
      }
    });
  }

  function renderRecap() {
    const goodCount = answers.filter(a => a.tier === 'good').length;
    const rows = answers.map(a => `
      <div class="recap-row">
        <div class="dot ${a.tier === 'good' ? 'good' : 'caution'}"></div>
        <div class="label">
          <span class="step">DECISION ${a.decision + 1}</span>
          ${ph(a.choiceText)}
        </div>
        <span class="tag ${a.tier === 'good' ? 'done' : ''}">${a.tier === 'good' ? 'Recommended' : 'Caution'}</span>
      </div>
    `).join('');

    body.innerHTML = `
      <h2 class="section-title" style="font-size:28px; margin-bottom:18px;">Path summary</h2>
      ${rows}
      <div class="recap-summary">
        <div class="score">${goodCount} / ${decisions.length}</div>
        <p style="color:var(--text-muted); margin-top:6px;">recommended decisions made along this path.</p>
      </div>
      <div class="chapter-nav">
        <a href="branching-scenarios.html" style="display:inline-flex;align-items:center;gap:6px;">
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>
          Back to all scenarios
        </a>
        <a href="#" id="retryLink" style="display:inline-flex;align-items:center;gap:6px;">
          Retry Scenario
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>
        </a>
      </div>
    `;

    document.getElementById('retryLink').addEventListener('click', (e) => {
      e.preventDefault();
      location.reload();
    });
  }

  updateStepper();
  renderDecision(current);
}
