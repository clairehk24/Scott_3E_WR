# Branching Scenarios — Contemporary Leadership in Sport Organizations

This package is scoped to **branching scenarios only**. It's meant to be merged into a main site owned by someone else (the "Web Resource" landing page comp) — it is not a standalone deliverable.

## What's in here

| File / folder | What it is |
|---|---|
| `branching-scenarios.html` | Hub page — one card per scenario (10 total) |
| `scenario-1.html` … `scenario-10.html` | The 10 individual branching scenario pages |
| `scenario-engine.js` | Shared interaction logic (stepper, choices, feedback, recap) for all 10 |
| `scenario-data/scenario-N-data.js` | Content only for scenario N — 3 decisions each |
| `styles.css` | Design tokens + layout — currently my best-guess read of the author's screenshot, **not confirmed real values** (see below) |
| `index.html` | A local preview shell only — see note below, likely gets discarded once your code is merged into the real main page |

**Not included** (someone else's responsibility): case studies, assessments, and everything under those — those files, `assessment-engine.js`, and `assessment-data/` were removed from this package.

## About index.html

This is a convenience file for previewing your work in context while you build — it is **not** the real main page. It has its own topbar/footer that will very likely conflict with or duplicate whatever the actual main page provides once your code is merged in. Two of its three resource cards (Case Studies, Assessments) are intentionally grayed out and inert — they represent teammates' sections, not yours, and don't link anywhere.

When you hand this off, `index.html` (and its topbar/footer markup in `branching-scenarios.html`/`scenario-N.html`) is the part most likely to get thrown away or replaced by whoever owns the real integration — keep that in mind rather than treating it as permanent.

## ⚠️ Colors and fonts are still unverified

Everything in `styles.css` — navy, crimson, sky, cream, gold, and the Baloo 2 / Inter font choices — was read off a screenshot of the author's comp, not a real exported style guide. You said you'd rather keep these guesses for now rather than chase down real values immediately. When real tokens are available (from whoever owns the main page), only the `:root` block at the top of `styles.css` needs to change — nothing else in this package depends on the literal color/font values.

## What's still placeholder

Chapter/scenario titles, vignette text, decision prompts, choice text, and feedback are all `[bracketed placeholders]` — no real scenario content yet. The shape (3 decisions per scenario, `tier: "good"|"caution"` per choice) is locked in and shouldn't change without also updating `scenario-engine.js`.
