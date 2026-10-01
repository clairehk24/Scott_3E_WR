/* ============================================================
   SCENARIO ENGINE
   Shared by all 10 branching scenarios. Each scenario page loads
   its own data file (scenario-data/scenario-N.js), which defines
   window.SCENARIO_DATA, then calls initScenario(window.SCENARIO_DATA).

   Fix a bug or change the interaction here once — it applies to
   all 10 scenarios. Content changes belong in the data files only.
   ============================================================ */

function initScenario(decisions) {
  let current = 0;
  const answers = [];
  const branching = decisions.some(d => d.choices.some(c => Object.hasOwn(c, 'next')));
  const canContinue = choice => choice.tier === 'good' || choice.tier === 'branch';
  const nextDecision = (choice, index) => Object.hasOwn(choice, 'next')
    ? (choice.next === null ? decisions.length : choice.next)
    : index + 1;
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

  // Escape source text first; only controlled emphasis markers become markup.
  function inline(text) {
    return ph(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]\n]+)\]\((https:\/\/[^\s<>"()]+)\)/g, '<a href="$2">$1</a>');
  }

  function paragraphs(text) {
    return String(text).split(/\n\s*\n/).map(part => {
      if (part.startsWith('- ')) {
        const items = part.split('\n').map(item => '<li>' + inline(item.slice(2)) + '</li>');
        return '<ul>' + items.join('') + '</ul>';
      }
      return '<p>' + inline(part) + '</p>';
    }).join('');
  }

  function updateStepper() {
    segments.forEach((seg, i) => {
      seg.style.width = (branching ? answers.some(a => a.decision === i) : i < current)
        ? '100%' : (i === current ? '100%' : '0%');
    });
    stepperLabel.textContent = current < decisions.length
      ? (branching ? `Decision ${answers.length + 1}` : `Decision ${current + 1} of ${decisions.length}`)
      : `Summary`;
  }

  function renderDecision(index) {
    const d = decisions[index];
    let externalLinkRequired = Boolean(d.requireExternalLinkClick && d.externalLink);
    const vitalsHtml = d.vitals.map(v => `<p>${inline(v)}</p>`).join('');
    const externalLinkHtml = d.externalLink ? `
      <div class="external-resource">
        <a class="btn btn-secondary" href="${ph(d.externalLink.href)}" target="_blank" rel="noopener noreferrer">
          ${ph(d.externalLink.label)}
          <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    ` : '';
    const displayedChoices = d.choices.map((choice, index) => ({ choice, index }));
    if (Number(scenarioMatch?.[1]) === 10) {
      for (let i = displayedChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [displayedChoices[i], displayedChoices[j]] = [displayedChoices[j], displayedChoices[i]];
      }
    }
    const choicesHtml = displayedChoices.map(({ choice: c, index: i }) => `
      <label class="choice-card${externalLinkRequired ? ' disabled' : ''}" data-index="${i}"${c.tooltip ? ` title="${ph(c.tooltip)}"` : ''}>
        <input type="radio" name="choice" value="${i}" aria-labelledby="choice-text-${i}" aria-describedby="choice-sub-${i}${externalLinkRequired ? ' choiceHelp' : ''}" ${externalLinkRequired ? 'disabled' : ''}>
        <div class="row">
          <div class="box"></div>
          <div class="txt">
            <strong id="choice-text-${i}">${inline(c.text)}</strong>
            <span id="choice-sub-${i}">${inline(c.sub)}</span>
          </div>
        </div>
      </label>
    `).join('');

    body.innerHTML = `
      <div class="vignette">
        <div class="kicker">${d.kicker}</div>
        ${d.context ? paragraphs(d.context) : ''}
        ${paragraphs(d.vignette)}
        ${d.extract ? `<blockquote>${paragraphs(d.extract)}</blockquote>` : ''}
        <div class="vitals">${vitalsHtml}</div>
      </div>

      <p class="decision-prompt" id="decisionPrompt">${ph(d.prompt)}</p>

      ${externalLinkHtml}

      ${externalLinkRequired ? '<p id="choiceHelp">Choices are unavailable until you open the self-assessment link above.</p>' : ''}
      <div class="choice-list" id="choiceList" role="radiogroup" aria-labelledby="decisionPrompt">${choicesHtml}</div>

      <div class="scenario-actions decision-actions">
        <a href="branching-scenarios.html" class="btn btn-primary decision-home">Back to Scenarios Home</a>
        <button type="button" class="btn btn-primary" id="submitBtn" disabled>
          Submit Decision
          <span class="btn-arrow"><svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
        </button>
      </div>

      <div class="sr-only" id="feedbackStatus" role="status" aria-atomic="true"></div>
      <div class="feedback-bar" id="feedbackBar">
        <div class="verdict" id="feedbackVerdict"></div>
        <p id="feedbackText"></p>
        <div class="continue-row">
          <button type="button" class="btn btn-secondary" id="tryAgainBtn" style="display:none">Try again</button>
          <button type="button" class="btn btn-secondary" id="continueBtn">
            ${index === decisions.length - 1 ? 'See summary' : 'Continue'}
            <span class="btn-arrow"><svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </button>
        </div>
      </div>
    `;

    const pageNav = document.querySelector('.page-nav');
    if (pageNav) pageNav.style.display = 'none';

    // Start each choice page at its scenario, including after a long decision.
    const vignette = body.querySelector('.vignette');
    vignette.tabIndex = -1;
    vignette.focus({ preventScroll: true });
    vignette.scrollIntoView({ block: 'start' });

    const cards = Array.from(body.querySelectorAll('.choice-card'));
    const submitBtn = document.getElementById('submitBtn');
    const feedbackBar = document.getElementById('feedbackBar');
    const feedbackVerdict = document.getElementById('feedbackVerdict');
    const feedbackText = document.getElementById('feedbackText');
    const continueBtn = document.getElementById('continueBtn');
    const tryAgainBtn = document.getElementById('tryAgainBtn');
    let submitted = false;

    if (externalLinkRequired) {
      body.querySelector('.external-resource a').addEventListener('click', () => {
        externalLinkRequired = false;
        document.getElementById('choiceHelp').textContent = 'Choices are now available. Complete the assessment before continuing.';
        cards.forEach(card => {
          card.classList.remove('disabled');
          card.querySelector('input').disabled = false;
        });
      }, { once: true });
    }

    cards.forEach(card => {
      card.querySelector('input').addEventListener('change', () => {
        if (submitted || externalLinkRequired) return;
        submitBtn.disabled = false;
      });
    });

    submitBtn.addEventListener('click', () => {
      if (submitted || externalLinkRequired) return;
      const picked = body.querySelector('input[name="choice"]:checked');
      if (!picked) return;
      submitted = true;
      const choiceIndex = Number(picked.value);
      const choice = d.choices[choiceIndex];

      cards.forEach(card => {
        card.classList.add('disabled');
        card.querySelector('input').disabled = true;
        if (Number(card.querySelector('input').value) === choiceIndex) {
          card.classList.add(choice.tier === 'good' ? 'picked-good' : 'picked-caution');
        }
      });

      feedbackVerdict.textContent = choice.tier === 'branch' ? 'What happens next' : (choice.tier === 'good' ? 'Solid call.' : 'Worth reconsidering.');
      feedbackText.innerHTML = inline(choice.feedback);
      feedbackBar.className = 'feedback-bar show ' + (choice.tier === 'branch' ? 'branch' : (choice.tier === 'good' ? 'good' : 'caution'));

      submitBtn.style.display = 'none';
      feedbackBar.after(body.querySelector('.decision-actions'));
      tryAgainBtn.style.display = canContinue(choice) ? 'none' : '';
      continueBtn.style.display = canContinue(choice) ? '' : 'none';
      continueBtn.firstChild.textContent = nextDecision(choice, index) === decisions.length ? 'See summary ' : 'Continue ';
      (canContinue(choice) ? continueBtn : tryAgainBtn).focus();
      document.getElementById('feedbackStatus').textContent = feedbackVerdict.textContent + ' ' + feedbackText.textContent;
      answers.push({ decision: index, choiceIndex, tier: choice.tier, choiceText: choice.text });
      if (nextDecision(choice, index) === decisions.length && canContinue(choice)) markScenarioComplete();
    });

    tryAgainBtn.addEventListener('click', () => {
      if (!submitted || canContinue(answers[answers.length - 1])) return;
      answers.pop();
      renderDecision(index);
    });

    continueBtn.addEventListener('click', () => {
      const answer = answers[answers.length - 1];
      if (!submitted || !canContinue(answer)) return;
      current = nextDecision(d.choices[answer.choiceIndex], index);
      updateStepper();
      if (current < decisions.length) {
        renderDecision(current);
      } else {
        renderRecap();
      }
    });
  }

  function renderRecap() {
    const scenarioNumber = scenarioMatch ? Number(scenarioMatch[1]) : 0;
    const useReflectionSummary = scenarioNumber >= 1 && scenarioNumber <= 10;
    const recapHeading = useReflectionSummary
      ? ''
      : '<h2 class="section-title" style="font-size:28px; margin-bottom:18px;">Path summary</h2>';
    const reflection = window.SCENARIO_REFLECTION;
    const reflectionHtml = reflection ? `
      <section class="vignette">
        <h2 class="section-title">${ph(reflection.title)}</h2>
        ${paragraphs(reflection.intro)}
        ${reflection.sections.map(section => `
          <h3>${ph(section.title)}</h3>
          ${paragraphs(section.body)}
        `).join('')}
      </section>
    ` : '';
    const rows = answers.map((a, i) => `
      <div class="recap-row">
        <div class="dot ${a.tier === 'good' ? 'good' : 'caution'}"></div>
        <div class="label">
          <span class="step">DECISION ${i + 1}</span>
          ${ph(a.choiceText)}
        </div>
        ${a.tier === 'good'
          ? '<span class="recap-check" role="img" aria-label="Recommended">&#10003;</span>'
          : `<span class="tag">${a.tier === 'branch' ? 'Explored' : 'Caution'}</span>`}
      </div>
    `).join('');

    body.innerHTML = `
      ${recapHeading}
      ${useReflectionSummary ? '' : rows}
      ${reflectionHtml}
      <div class="recap-actions">
        <a href="branching-scenarios.html" class="btn btn-primary">
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>
          All Scenarios
        </a>
        <button type="button" id="retryLink" class="btn btn-secondary">
          Retry Scenario
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>
        </button>
      </div>
    `;

    const pageNav = document.querySelector('.page-nav');
    const homeButton = pageNav && pageNav.querySelector('a');
    if (homeButton) {
      homeButton.classList.add('recap-home');
      body.querySelector('.recap-actions > a').replaceWith(homeButton);
      pageNav.remove();
    }

    const summaryFocus = body.querySelector('h2') || body;
    summaryFocus.tabIndex = -1;
    summaryFocus.focus();

    document.getElementById('retryLink').addEventListener('click', (e) => {
      e.preventDefault();
      location.reload();
    });
  }

  if (decisions[0].standaloneIntro) {
    const intro = decisions[0];
    stepper.style.display = 'none';
    stepperLabel.textContent = 'Scenario introduction';
    body.innerHTML = `
      <div class="vignette">
        <div class="kicker">Introduction</div>
        ${paragraphs(intro.introText || intro.vignette)}
        <div class="vitals">${intro.vitals.map(v => `<p>${inline(v)}</p>`).join('')}</div>
      </div>
      <div class="scenario-actions">
        <button type="button" class="btn btn-primary" id="startScenarioBtn">Continue to first decision</button>
      </div>
    `;
    document.getElementById('startScenarioBtn').addEventListener('click', () => {
      stepper.style.display = '';
      updateStepper();
      renderDecision(current);
    });
  } else {
    updateStepper();
    renderDecision(current);
  }
}
