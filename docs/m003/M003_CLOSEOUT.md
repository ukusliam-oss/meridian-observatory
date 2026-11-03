# M-003 closeout

Written 2026-11-03 for M-003D, against production `4da9686`.

M-003 measured the site's quality. It fixed nothing in the site.

## Decision

**M-003: COMPLETE, with documented defects.**

The four packages delivered the evidence they set out to collect. The defects they found are recorded with severity and confidence and carried into Phase 2 (`PHASE2_PRIORITISED_BACKLOG.md`).

This closeout does **not** claim:

- that the site is complete;
- that it is accessible;
- that it conforms to WCAG 2.2 AA;
- that it is fast for students on their own devices.

## Completed

| Package | Delivered | Production |
|---|---|---|
| M-003A browser and visual baseline | `tests/browser/`: 140 Chromium tests, 46 screenshot baselines, README | M4 `1dbd0ae` (PRs #14, #15) |
| M-003B performance baseline | `tests/browser/perf/`: Lighthouse runner, Meridian timers, `REPORT.md`, results | M5 `ad3af03` (PRs #16, #17) |
| M-003C accessibility and usability audit | `tests/browser/a11y/`: axe scans, keyboard, reflow, contrast and motion checks, `AUDIT.md`, results | M6 `4da9686` (PRs #18, #19) |
| M-003D synthesis | This folder: assessment, backlog, blueprint, closeout | This Draft PR |

Each release left the application byte for byte unchanged: 54 of 54 application files, checked after M5 and M6.

## Incomplete or not run

These are listed so that no one reads them as passed:

- **Assistive technology:** VoiceOver, NVDA, TalkBack.
- **Browsers:** Safari, Firefox; any browser other than Chromium 156.
- **Physical devices:** phones, tablets, Windows or low-end machines. All figures come from one Apple M5.
- **The school network.**
- **Display settings:** browser text zoom, forced colours, flash analysis.
- **Field performance data:** CrUX was not available, and no real-user monitoring exists.
- **Input latency:** INP was not measured. The synthetic click durations are not INP.
- **GPU time per frame** under the perf suite, which is the B-6 hypothesis.
- **Light-theme screenshots of chapters:** chapters are dark by design.
- **A user study** or any measure of learning effect.

## Local-only tests

The M-003A, M-003B and M-003C suites run only on a developer Mac (`tests/browser/`, macOS screenshots, Apple GPU). GitHub Actions runs `meridian-check` (`npm run check`) and nothing else.

WP-12 proposes an optional CI job. Required checks stay unchanged unless the user decides otherwise.

## Unresolved accessibility failures

None of these is fixed. Each is mapped to a Phase 2 package.

| Finding | Severity | Confidence | Package |
|---|---|---|---|
| A11Y-01 Paper 2 sources not keyboard-readable at desktop widths | Critical | Confirmed | WP-01 |
| A11Y-02 Scene menu 111–167 Tab presses away | High | Confirmed impact; criterion mapping needs review | WP-02 |
| A11Y-03 Focus lost after entry and after a jump | Medium | Confirmed | WP-02 |
| A11Y-04 Unlit chain and cascade steps 1.49–2.93:1 | Medium | Confirmed | WP-04 |
| A11Y-05 Quiz hint 1.58–1.99:1 | Medium | Confirmed | WP-04 |
| A11Y-06 KQ6 title cut at 320 and 360 px | Medium | Confirmed | WP-03 |
| A11Y-07 Text-spacing overflow | Medium | Probable | WP-03 |
| A11Y-08 51 invisible Tab stops on phone-width hubs | Medium | Confirmed | WP-02 |
| A11Y-09 Examinable map and section values without text | Medium | Probable; needs subject review | WP-07 |
| A11Y-10, 11, 14 | Low | Confirmed | WP-11 |
| A11Y-12 Decorative motion with no pause | Low | Probable | WP-04 |
| A11Y-13, 15 | Low | Needs verification | WP-10, then WP-11 |

## Synthetic performance findings

These were measured in the lab, by Lighthouse simulation or locally, not in the field.

| Finding | Measure | Package |
|---|---|---|
| B-1 start-up main thread | Geography TBT 1,297 ms, KQ6 819 ms (Lighthouse mobile, deployed, medians) | WP-06 |
| B-2 layout shift | Paper 2 CLS 0.462 and Economics 0.596 (desktop, 3/3 runs) | WP-03 |
| B-3 destination map late | Scene Ready 2.6–3.1 s against a camera stop of about 1.1 s (local) | WP-05 |
| B-4 slow line | Geography gate 14.3 s at 1.6 Mbit/s, local without gzip (overstated) | WP-08 |
| B-5 home opening | 7.8 s first visit, by design and skippable | Not scheduled |
| B-6 GPU texture churn | Hypothesis | Measured within WP-05 |

## Live delivery incidents

These are operational risks, not code regressions.

- One HTTP 503 on `assets/data/geo/dem/merapi.png` from GitHub Pages. Five later fetches returned 200 and matched byte for byte.
- One run where cross-sections were not all drawn within the test's wait, at about 40 KB/s.

Both cost a student a working map. WP-08 adds a retry and a loading state.

## Open uncertainties

- **One unexplained M-003A run of 139/140,** on the M-003C feature branch. Five later runs passed 140/140. The test was not identified. WP-12 keeps failing reports from now on.
- **The earlier report of a reload landing on the wrong scene** did not reproduce in M-003C. WP-10 checks it in Safari and on a phone.
- **A11Y-02's WCAG mapping** needs an expert's review; its usability impact stands.

## Readiness for Phase 2

Phase 2 can start:

- **Baselines:** there is a stored baseline for every gate in `PHASE2_EXECUTION_BLUEPRINT.md` §3, covering functional behaviour, screenshots, performance and accessibility.
- **First three packages:**
  - each is bounded to named files;
  - each has tests that show success, using existing rows plus one new keyboard row;
  - none needs a new dependency.
- **Preserved fixes:**
  - the Phase 0 fixes have guards in the functional `states` tests and the perf idle rows;
  - a regression there blocks a package (gate G4).

**Not ready:**

- WP-07 waits on a subject teacher's review.
- WP-10 waits on the user's devices.
