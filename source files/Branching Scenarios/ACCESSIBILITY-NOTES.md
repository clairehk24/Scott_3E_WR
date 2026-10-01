# Accessibility fixes and handoff checks

Updated September 29, 2026, from the supplied Scott3E audit workbook. Changes apply to this repository's branching scenario package.

## Findings addressed

| Audit issue | Local change |
| --- | --- |
| 01 | Hub card headings now use h2 below the page h1. |
| 02 | Native radio inputs are visible and keyboard accessible; change events enable Submit without advancing the decision. Applies to all ten scenarios. |
| 11 | Completed cards include visible, accessible Completed text; removed opacity reduction. |
| 12 | Removed click handlers from labels; native disabled radios expose unavailable state. Added visible prerequisite instructions and an update when choices become available. |
| 13 | Breadcrumbs use a named navigation landmark, list items, separate links, and aria-current for the current page. NVDA behavior still needs manual review. |
| 15, 16, 18 | Darkened muted text and numbers; preserved full contrast on completed cards. Local measured ratios: muted text on cream 5.94:1; numbers on white 5.86:1. |
| 21 | Replaced browser confirmation with a native modal dialog, Cancel initial focus, Escape dismissal, and return focus to Reset. Firefox-specific verification remains pending. |
| 29 | Added a pre-existing status region for feedback and focus on the next available action. Summary heading receives focus after navigation. |

Issue 14 concerns the external assessment provider's page title. Issue 30 concerns the integrated main site's copyright view, absent from this scenario package. Neither is changed here. The supplied summary reports 30 defects, but its detail sheet contains only 12 populated issue records; this work does not certify all 30 as resolved.

## Verification performed

- Installed Chrome, headless Playwright, served locally over HTTP.
- One successful keyboard-driven path through every scenario (43 decisions total), including saved completion and summary focus.
- First-decision caution/retry handling wherever that decision offered a caution choice.
- Scenario 1 disabled prerequisite gate and unlocking, without navigating to the external service.
- Native radio Tab entry, arrow-key selection, and Space selection.
- Hub heading levels, ten completion labels, reset confirmation/cancel, Escape, tab containment, clearing completion, and restored focus.
- No JavaScript page errors during these checks.
- Desktop hub and mobile scenario visual review; no horizontal overflow on tested 390px hub/scenario layouts.
- Git whitespace checks.

## Firefox/NVDA check attempted September 28, 2026

NVDA is installed and running. The user dismissed its initial Usage Data Collection dialog, and Firefox was launched for the pending checks. Computer Use then stopped because browser URL policy enforcement is not yet supported for Firefox in the current automation environment.

No Firefox/NVDA accessibility results were obtained. Breadcrumb announcements, radio names and unavailable states, automatic caution/success feedback announcements, and Firefox Reset dialog keyboard behavior remain unverified. This is an automation limitation, not an observed failure of the accessibility fixes. The Chrome verification above remains separate from these pending checks.

## Workbook recheck September 29, 2026

Compared the current local files with `Scott3E_WR_Accessibility_Audit report.xlsx`, sheet `2 - All Issues`. The 12 populated issue records are listed below; their workbook Verified cells still say Pending. The summary reports 30 defects, but the other 18 detailed records are absent. The workbook was not modified, and its linked published site and screenshot URLs were not retested.

| Issue / workbook row | Current evidence and disposition |
| --- | --- |
| 01 / 2 | All ten hub card titles use h2 below the page h1. Local heading correction confirmed. |
| 02 / 3 | All ten scenarios expose visible, named native radios. First-decision Space/arrow selection enables Submit without showing feedback prematurely. Local regression passed. |
| 11 / 12 | Seeded completion state displays ten Completed labels. Confirming Reset removes the labels; Escape preserves them. Local regression passed. |
| 12 / 13 | Scenario 1 radios are disabled before opening the assessment link and enabled afterward; names and prerequisite instructions are present. The test prevented external navigation. NVDA unavailable-state speech remains unverified. |
| 13 / 14 | All ten pages have a named breadcrumb navigation region, two separate links, and an aria-current page item. NVDA arrow-key announcements remain unverified. |
| 14 / 15 | The reported title belongs to the external Leadership Circle signup page. Outside this package; still unresolved here. |
| 15 / 16 | Summary/stepper text uses #595D61 on #F6F2E7. The previously measured 5.94:1 color pair remains in the stylesheet. |
| 16 / 17 | Breadcrumb text and links use the same corrected color pair. Destination-site styling still needs verification. |
| 18 / 19 | Hub numbers use #62665E on white, the previously measured 5.86:1 pair. Completed cards do not reduce opacity. |
| 21 / 22 | Native modal opens with Cancel focused. Shift+Tab from Cancel reaches Reset; Escape and confirmation restore focus to the opener. However, Tab from the final button reports BODY as the active element instead of immediately wrapping to Cancel in headless Chrome. This does not establish that background page controls are reachable, but strict in-dialog cycling is not verified. Keep this issue open for follow-up and Firefox testing. |
| 29 / 30 | The pre-existing role=status, aria-atomic region receives verdict and feedback text. Sixteen first-decision submissions across ten scenarios covered successful/branch feedback and six caution/retry cases; focus moves to Continue or Try again. Actual screen-reader announcements remain unverified. |
| 30 / 31 | The reported integrated copyright view is absent from this package. Outside this package; still unresolved here. |

These new checks used installed Chrome through headless Playwright and an isolated browser context. They covered first decisions, not full paths or every branch, and produced no JavaScript page errors. The dialog observation qualifies the earlier tab-containment result above. No application code was changed during this recheck.

## Reset dialog follow-up fix September 29, 2026

Added explicit Tab boundary handling to the Reset dialog in branching-scenarios.html. Tab from Reset now focuses Cancel, and Shift+Tab from Cancel focuses Reset. Other keys retain native dialog behavior.

The updated Chrome regression passed three repeated forward/backward cycles, Escape dismissal with completion preserved, Reset confirmation with completion cleared, and return focus to the opener. The ten-scenario first-decision checks also passed with no JavaScript page errors. This resolves the Chrome Tab-wrap observation above; Firefox/NVDA verification of issue 21 remains pending.

## Before final handoff

1. In Firefox with NVDA, check individual breadcrumb links and radio names/unavailable state. Submit both a caution and a successful decision; confirm feedback is spoken automatically.
2. Verify the Reset dialog Tab-wrap fix in Firefox: open Reset, cycle Tab and Shift+Tab, cancel with Escape, and confirm focus returns to Reset. Repeat with confirmation.
3. Recheck after integration with the destination site's actual CSS and navigation; its styles may override these fixes. These checks are targeted regression coverage, not full WCAG certification or exhaustive branch coverage.

## Files to include

Send branching-scenarios.html, scenario-1.html through scenario-10.html, scenario-engine.js, styles.css, and the existing scenario-data folder. Preserve the native inputs, status region, breadcrumb semantics, and dialog behavior during integration. The local index.html remains a preview shell. No repository was published or pushed by this change.
