# Proofing corrections

Applied from Scott3E_WR_Proofing_Report_25-Sep.xlsx to this local repository. Existing accessibility changes were preserved.

## Source material

- Chapters 1, 8, 9, and 10: supplied CLSO3E_HKP manuscripts in the Ch 1 8 9 10 folder.
- Chapters 2–7: supplied Scott2E_Learning Content Storyline projects in the Ch 2-7 Storylines folder. These are second-edition sources; the proofing report takes precedence for explicit third-edition title and wording changes.
- Editorial directions in the source documents were treated as source context; the requested proofing findings define the changes.

## Report finding disposition

| Finding numbers | Changes / verification |
| --- | --- |
| 26 | Rendered the existing Leadership Circle extract as a blockquote. The text was already in the data but omitted by the renderer. |
| 27, 36, 51, 63 | Updated the hub and scenario titles to the report's wording, including Leading in chapter 10. |
| 28 | Shared action now reads Submit Decision. |
| 29–35, 56–58 | These were informational metadata, not controls with missing actions. Removed the button-like presentation; chapter 8 behavior notes now use manuscript italics. |
| 37, 48–50, 53, 60 | Applied sport / sport betting, downhill to, help, and Midproject edits. The reported meeting-that form was not present in this local version. |
| 38 | JAMA Pediatrics now renders in italics inside the choice text. |
| 39, 43, 45, 47, 66 | Expanded NCAA, NFL, general managers (GMs), and artificial intelligence (AI) at the relevant first occurrences. The GMs expansion precedes the original quotation, preserving the quotation's wording. |
| 40 | Restored chapter 2 introduction from the Storyline source. The supplied scenario-one source passages, including its final text box about notifying the coach and state-law requirements, were already included in the local vignette. No missing passage was invented. |
| 41, 42 | Restored chapter 3 and chapter 5 introductions from the supplied Storyline projects. |
| 44 | Restored chapter 6 introduction; compared its first scenario with the source and restored the four-item list and separate reference paragraph. |
| 46 | Updated both chapter 6 references to the user-supplied Wilde citation in Kenosha News, April 26, 2021, with the supplied clickable article URL and italic publication name. This supersedes the earlier citation-only treatment of the unavailable Monterey County Weekly link. The replacement URL was supplied by the user; live availability was not independently verified. |
| 52, 64, 65 | Restored bold Role / Organization / Purpose / Context labels and separate context paragraphs. Phoenix United's board concern is a separate paragraph. |
| 54, 55, 59, 61, 67–69 | Restored source paragraph breaks and emphasis in chapters 8–10, including Outcome labels and the two bold leadership-principle phrases. Also preserved the manuscripts' italicized reflection principles. |
| 62 | Chapter 10 choices now shuffle when a decision is rendered, including retries. Original choice IDs are preserved so feedback, selection highlighting, and progression remain associated with the correct choice. Random order can legitimately repeat. |

## Verification

- All ten scenarios completed a keyboard-driven path in installed Chrome via Playwright: 43 decisions total.
- Exercised a caution/retry at each encountered decision offering a caution choice, then checked successful feedback and progression.
- Tested all six three-choice permutations in chapter 10, checking every answer's feedback and selected-card highlighting (18 answer checks).
- Verified four restored introductions, the Leadership Circle extract, journal italics, chapter 6 bullets, updated hub titles, and chapter 8/10 reflection formatting.
- Tested 390px layouts for all ten scenario first decisions without horizontal overflow; visually reviewed chapter 10 mobile and chapter 8 desktop.
- No browser JavaScript errors; JavaScript syntax and Git whitespace checks passed.

This is targeted proofing verification, not exhaustive branch coverage or a substitute for the Firefox/NVDA checks recorded in [ACCESSIBILITY-NOTES.md](ACCESSIBILITY-NOTES.md). No changes were pushed or published.

The Firefox/NVDA follow-up was attempted September 28, 2026, after NVDA was installed and the user dismissed its startup dialog. Firefox opened, but Computer Use stopped because its browser URL policy enforcement does not yet support Firefox. No Firefox/NVDA results were obtained; the screen-reader and Firefox dialog checks remain pending manual verification. This automation limitation does not establish an accessibility defect or a passing result.

## Handoff

Include the updated hub, all ten scenario HTML pages, scenario-engine.js, styles.css, and the entire scenario-data folder. The report work changed data files for chapters 2, 3, 5, 6, 7, 8, 9, and 10. Chapter 1's restored extract is handled by the shared renderer. Keep these notes with the handoff so the replacement reference for finding 46 is documented.
