# Phase 2 prioritised backlog

Written 2026-11-03 for M-003D. The evidence behind every item is in `M003_QUALITY_ASSESSMENT.md` and in the
reports it cites. Finding IDs (A11Y-nn, B-n, U-nn) are those of `tests/browser/a11y/AUDIT.md` and
`tests/browser/perf/REPORT.md`.

## How items are ranked

In order of weight:

1. **Access to essential learning functions:** reading sources, reaching scenes, reading examinable values.
2. **Severity and impact.**
3. **Breadth:** every visit, a common setting (phones, keyboard), or an edge case.
4. **Confidence:** confirmed, probable, or needs verification. Items that need verification are verified first, not fixed first.
5. **Educational or visual benefit.**
6. **Cost and regression risk.** This breaks ties only.

**Effort bands:**

- **S**: up to about a day.
- **M**: up to about a week.
- **L**: more than a week, or a design question first.

Uncertainty is stated beside each band.

## Ranked list

| Rank | ID | Package | Workstream | Required? | Effort | Findings |
|---|---|---|---|---|---|---|
| 1 | WP-01 | Paper 2 sources by keyboard | A | **Required** | S, low uncertainty | A11Y-01 |
| 2 | WP-02 | Chapter keyboard route and focus | A | **Required** | S–M, low | A11Y-02, 03, 08 |
| 3 | WP-03 | Stable layout and fitting display type | B + C | **Required** | M, medium | B-2, A11Y-06, 07 |
| 4 | WP-04 | Night Observatory legibility system | C | **Required** | M, medium | A11Y-04, 05, 12; design system |
| 5 | WP-05 | Destination map ready on arrival | B | **Required** | M, medium-high | B-3, U-01 (B-6 measured, not fixed) |
| 6 | WP-07 | Readable values for examinable maps | D | **Required** (content needs teacher review) | M, high | A11Y-09 |
| 7 | WP-06 | Lighter chapter start-up | B | **Required** | M–L, high | B-1 |
| 8 | WP-08 | Delivery resilience on poor lines | B | **Required** | M, medium | B-4, live 503, slow-line cross-sections |
| 9 | WP-10 | Validation on real devices and assistive technology | V | **Required before any claim** | M, depends on device access | NOT RUN items |
| 10 | WP-11 | Semantic and small-target fixes | A | Optional | S, low | A11Y-10, 11, 13, 14, 15; 404 path |
| 11 | WP-12 | Test evidence hardening | F | Optional | S, low | 139/140, live probes |
| 12 | WP-09 | Study routes and mode groundwork | D | Optional | L, design first | U-04; exam-link layer |

Execution order follows the rank, except:

- **WP-10** runs alongside the others, starting once WP-01 to WP-03 are released.
- **WP-07** starts its subject review early, because it waits on teachers.

## Packages

Each package lists:

- problem
- evidence
- goal
- scope (in / out)
- files
- dependencies
- effort
- risks
- acceptance criteria
- regression coverage
- deliverables
- stop condition

WP-01 to WP-03 are worked out in full in `PHASE2_EXECUTION_BLUEPRINT.md` §4.

### WP-01 Paper 2 sources by keyboard (Required)

- **Problem:** wider than 900 px, Sources A–F sit in a sticky panel that scrolls on its own and cannot take focus. A keyboard user reads about a fifth of them.
- **Evidence:** A11Y-01 (`AUDIT.md`): axe `scrollable-region-focusable`; arrow keys and Page Down left the panel's `scrollTop` at 0.
- **Goal:** every source is readable by keyboard at every width, with no change to the mouse experience.
- **Scope:**
  - **In:** the sources panel's focusability, name and focus style; links from questions to their sources.
  - **Out:** Paper 2 layout, content, CLS (WP-03).
- **Files:**
  - `assets/js/paper2.js`
  - `assets/css/chapter.css` (`.p2-sources`, about line 335)
  - a new keyboard row in `tests/browser/specs/a11y.spec.mjs`
- **Dependencies:** none.
- **Effort:** S, low uncertainty.
- **Risks:** a focus ring on a tall panel may look heavy; screenshot baselines of Paper 2 may change.
- **Acceptance criteria:**
  - axe clear of `scrollable-region-focusable`;
  - keyboard reaches and scrolls to Source F at 1440 px;
  - 390 px is unchanged.
- **Regression coverage:** M-003A 140/140 and `npm run a11y`.
- **Deliverables:** code change, test rows, an `AUDIT.md` status note.
- **Stop condition:** criteria met, or the panel's design must change (then stop and ask).

### WP-02 Chapter keyboard route and focus (Required)

- **Problem:**
  - The scene menu is 111–167 Tab presses into a chapter.
  - Focus falls to `<body>` after the entry gate and after a scene jump.
  - On phones, 51 invisible chips in collapsed topics stay in the Tab order.
- **Evidence:** A11Y-02, A11Y-03, A11Y-08 (`AUDIT.md`; `keyboard-chapter` and `tab` rows).
- **Goal:**
  - the scene menu within 10 key presses of the top;
  - focus always on a visible element in the destination;
  - no invisible Tab stops.
- **Scope:**
  - **In:** a second skip link, focus placement in `chapter.js`, collapsed topics made unfocusable.
  - **Out:** the menu's design, the order of scenes, the pill's look.
- **Files:**
  - `history/kq6.html`, `economics/macro-policy.html`, `geography/tectonics.html` and the engine-test pages (skip links)
  - `assets/js/chapter.js` (gate, `goTo`, menu click)
  - `assets/js/ui.js` (topics, about line 124)
  - `assets/css/site.css` (`.skip`, `.topic__body`)
- **Dependencies:** none; can share a release with WP-01.
- **Effort:** S–M, low uncertainty.
- **Risks:**
  - Moving focus can scroll the page and fight Lenis (use `preventScroll`).
  - Screen-reader behaviour is unverified until WP-10.
- **Acceptance criteria:**
  - `menuTabs` ≤ 10;
  - `focusAfterEnter` and `focusAfterChoice` are a visible element inside the destination scene;
  - no `tab` row entry with `fully: true` at 390 px.
- **Regression coverage:** the M-003A journeys (menu jumps, PageDown) and the states.
- **Deliverables:** code, test rows, `AUDIT.md` notes.
- **Stop condition:** criteria met with no change to scroll behaviour.

### WP-03 Stable layout and fitting display type (Required)

- **Problem:**
  - Paper 2 and the Economics chapter shift as they render: CLS 0.46–0.60 on desktop, 3 of 3 runs.
  - Part titles overflow at 320 px and under text spacing.
- **Evidence:**
  - B-2 (`REPORT.md`, `lighthouse-deployed.json`)
  - A11Y-06, A11Y-07 (`reflow`, `text-spacing` rows)
  - the KQ6 360 px expected failure
- **Goal:**
  - nothing moves once shown;
  - display type that fits the screen it is on, as part of the Night Observatory type scale.
- **Scope:**
  - **In:** space reserved before render (Paper 2 sources and parts, footer; policy-lab gauges), part-title sizing and wrapping.
  - **Out:** new typefaces, content.
- **Files:**
  - `assets/css/chapter.css` (`.part__title` about lines 70 and 299, `.p2-*`)
  - `assets/css/policy-lab.css` (`.plab__aim`, about line 58)
  - `assets/js/paper2.js`, `assets/js/policy-lab.js` (only if markup must carry sizes)
- **Dependencies:** none. WP-04 builds on its type scale.
- **Effort:** M, medium uncertainty: Lighthouse CLS varies between runs.
- **Risks:**
  - Display titles are part of the identity, so wrapping must be designed, not merely allowed.
  - Baselines change.
- **Acceptance criteria:**
  - Lighthouse CLS < 0.1 on Paper 2 and the Economics chapter, both presets, 3 of 3 runs;
  - `overflowPx` = 0 at 320 px and under text spacing;
  - the KQ6 360 px test passes (`test.fail` removed).
- **Regression coverage:** screenshot review of every changed baseline, and M-003A.
- **Deliverables:** code, updated baselines with before/after pairs in the PR, a Lighthouse rerun of the two pages.
- **Stop condition:** criteria met, or wrapping would break a title's meaning (then ask).

### WP-04 Night Observatory legibility system (Required)

- **Problem:**
  - Chain and cascade steps wait at 1.49–2.93:1 until the scroll reaches them.
  - The quiz hint sits at 1.6–2.0:1.
  - Decorative loops (`cue`, `inst-sweep`) cannot be paused.
  - The design rules live only in `CLAUDE.md` prose.
- **Evidence:** A11Y-04, A11Y-05, A11Y-12; quality assessment §3A.
- **Goal:**
  - a written design system (`docs/DESIGN.md`) for type scale, colour roles and contrast floors, surfaces and glass, depth, motion and states;
  - "unlit" states redesigned to stay readable: a step not yet reached is quieter in light and position, never below 4.5:1;
  - decorative loops that stop.
- **Scope:**
  - **In:** tokens in `site.css`, the chain, cascade and quiz-hint styles, a pause rule for decorative loops, `docs/DESIGN.md`.
  - **Out:** new fonts, a palette change, the globe's shaders, History's colour decision (still open in `CLAUDE.md`).
- **Files:**
  - `assets/css/site.css` (tokens, `.faint`, `@keyframes cue`, `inst-sweep`)
  - `assets/css/chapter.css` (`.chain2`, `.cascade`)
  - `assets/js/ui.js` (quiz foot, about line 424)
  - new `docs/DESIGN.md`
- **Dependencies:** after WP-03 (type scale).
- **Effort:** M, medium uncertainty (design iterations).
- **Risks:**
  - Losing the "lighting up as you read" effect: keep it, raise its floor.
  - Light-theme regressions.
- **Acceptance criteria:**
  - axe `color-contrast` clear on chain, cascade and quiz in every state;
  - `tools/contrast.js` 0 failures, both themes;
  - decorative loops stop after 5 s or on a control;
  - no new token outside the document.
- **Regression coverage:** both-theme screenshots, M-003A visual.
- **Deliverables:** code, `docs/DESIGN.md`, before/after images.
- **Stop condition:** criteria met and the user accepts the look.

### WP-05 Destination map ready on arrival (Required)

- **Problem:** after a menu jump the camera stops about 1.1 s in, but the destination's map and relief arrive 1.5–2 s later. The previous scene's map is on screen meanwhile.
- **Evidence:** B-3 (`REPORT.md`, jump rows, overhead runs); U-01.
- **Goal:** the destination is painted while the camera flies.
- **Scope:**
  - **In:** a paint request for the target at `goTo`; priority for the target over neighbours; measuring GPU upload (B-6).
  - **Out:** the camera path, terrain levels, Phase 0's request rules.
- **Files:**
  - `assets/js/chapter.js` (`goTo`, about line 438)
  - `src/world/engine.js` (`prepare`, priority queue) → `npm run world`
- **Dependencies:** none, but after WP-02, which touches `goTo`.
- **Effort:** M, medium-high uncertainty: it competes with flight frames.
- **Risks:**
  - Frame drops during the flight.
  - Phase 0 invariants (no extra tiles, nothing at rest).
- **Acceptance criteria:**
  - Scene Ready − camera stop < 300 ms on KQ6 scene 14 and Geography scene 15 (local, 3 runs);
  - flight frames no worse than baseline p95;
  - idle work and request counts unchanged.
- **Regression coverage:** `npm run perf` jump and idle rows, the M-003A states.
- **Deliverables:** code, perf rows, a `REPORT.md` addendum.
- **Stop condition:** criteria met, or the flight drops frames (then stop and report).

### WP-06 Lighter chapter start-up (Required)

- **Problem:** chapter start-up runs long main-thread tasks: Geography TBT 1.3 s and a 1.73 s `world.js` task under 4× CPU; KQ6 0.8 s.
- **Evidence:** B-1 (`REPORT.md`, `lighthouse-deployed.json`).
- **Goal:** start-up work split or moved off the main thread.
- **Scope:**
  - **In:** profiling, then splitting work: data parsing, geometry, the first paint, the first-scene textures.
  - **Out:** visual changes, loader design.
- **Files:**
  - `src/world/engine.js`, `src/world/layers.js`, `src/world/paint-worker.js` → `npm run world`
  - `assets/js/chapter.js`
- **Dependencies:** a profile first (the first day is measurement only).
- **Effort:** M–L, high uncertainty until the profile is read.
- **Risks:** a later first frame; worker transfer costs.
- **Acceptance criteria:**
  - Geography Lighthouse mobile TBT < 600 ms (from 1,297), 3 of 3;
  - KQ6 TBT no worse;
  - Chapter Ready no worse locally.
- **Regression coverage:** M-003A, `npm run perf`, Lighthouse on the three chapters.
- **Deliverables:** the profile summary, code, numbers.
- **Stop condition:** the target is met, or the profile shows the cost is GPU or driver-bound (then report and re-scope).

### WP-07 Readable values for examinable maps (Required; content needs teacher review)

- **Problem:** values shown only as colour, needle height or section height have no text equivalent. Some may be examinable.
- **Evidence:** A11Y-09 (probable; `scene-text` rows show panels carry 146–177 words of argument but not the map's values).
- **Goal:**
  - each scene whose map carries examinable values offers them as text: a compact table or list beside the panel;
  - a design that also serves the future Reference mode.
- **Scope:**
  - **In:** a list of scenes and values agreed with subject teachers; one rendering for data maps, spikes and sections.
  - **Out:** new data, new scenes.
- **Files:**
  - `assets/js/chapter.js` (panel rendering)
  - `assets/css/chapter.css`
  - `assets/js/data/economics/macro-policy.js`, `assets/js/data/geography/tectonics.js` (flags only)
- **Dependencies:** teacher review of which values are examinable (ask the user to arrange it).
- **Effort:** M, high uncertainty (the review).
- **Risks:** panel length on phones; contradicting the map if values are not read from the same source.
- **Acceptance criteria:**
  - every flagged scene shows its values as text read from the same data as the map;
  - `check-econ` and `check-geo` pass;
  - the panel fits at 390 px.
- **Regression coverage:** M-003A, screenshots of the changed scenes.
- **Deliverables:** the scene list, code, reviewer sign-off noted in the PR.
- **Stop condition:** the reviewed list is covered.

### WP-08 Delivery resilience on poor lines (Required)

- **Problem:**
  - One live `merapi.png` request returned HTTP 503: no heights, and the relief stays flat until reload.
  - At about 40 KB/s, cross-sections stayed undrawn for a long time with no sign of progress.
  - Slow-line chapter readiness was 14.3 s (overstated locally).
- **Evidence:** B-4; M6 closeout smoke runs (quality assessment §2).
- **Goal:**
  - a failed DEM or tile is retried with back-off;
  - a section that is still loading says so;
  - the slow-line gate is measured against Pages with compression.
- **Scope:**
  - **In:** retry policy in the engine's fetches, a "loading heights" state in the section panel, one measurement on Pages.
  - **Out:** CDN changes (none allowed), new data formats.
- **Files:**
  - `src/world/engine.js` (`heights()`, `terrainOf`) → `npm run world`
  - `assets/js/chapter.js` (section panel)
- **Dependencies:** none.
- **Effort:** M, medium uncertainty.
- **Risks:** retries multiplying traffic (cap them; no retry on 404).
- **Acceptance criteria:**
  - with a forced 503 on the first DEM request, heights arrive on retry, tested with route interception in a perf or state row;
  - the section shows a loading state within 300 ms of the scene's hold;
  - idle and request counts unchanged when nothing fails.
- **Regression coverage:** M-003A states (heights), `npm run perf`.
- **Deliverables:** code, a test row, a measurement note.
- **Stop condition:** criteria met.

### WP-09 Study routes and mode groundwork (Optional)

- **Problem:**
  - No route links subjects or leads from a chapter to its exam room (U-04).
  - The planned exam-link layer has no data field.
  - Future Observatory, Revision, Exam and Reference modes have no shared contract.
- **Evidence:** U-04; `CLAUDE.md` ("Scenes have no field yet for the plan's exam link layer").
- **Goal:** a scene schema field for exam links and a written mode contract (what each mode shows or hides), with one visible use: links from scenes to the matching Paper 2 or practice question.
- **Scope:**
  - **In:** the schema, the contract, one chapter wired.
  - **Out:** building the modes (Phase 3).
- **Files:**
  - `assets/js/chapter.js`
  - `assets/js/data/history/kq6.js`
  - `tools/check-*.mjs` (field check)
  - a short `docs/` note
- **Dependencies:** WP-02 (focus on arrival).
- **Effort:** L, design first.
- **Risks:** scope creep into Phase 3.
- **Acceptance criteria:**
  - the field is validated by the checks;
  - a KQ6 scene links to its Paper 2 question, and focus lands on it.
- **Regression coverage:** M-003A.
- **Deliverables:** contract note, code.
- **Stop condition:** one chapter wired and the contract accepted.

### WP-10 Validation on real devices and assistive technology (Required before any claim)

- **Problem:** every result comes from headless Chromium on one Apple M5.
- **Evidence:** every NOT RUN line in the closeout.
- **Goal:** one recorded pass covering:
  - VoiceOver with Safari on macOS and iPhone
  - NVDA with Firefox or Chrome on Windows (if available)
  - TalkBack on an Android phone
  - Safari layout
  - the school network
  - the reload-position report (U-08)
  - A11Y-13 and A11Y-15
- **Scope:**
  - **In:** a short script of tasks:
    1. open a chapter;
    2. jump to a scene;
    3. read a Paper 2 source;
    4. answer a quiz question;
    5. read a mark scheme.
  - **Out:** fixes (they become new items).
- **Files:** `tests/browser/a11y/AUDIT.md` addendum only.
- **Dependencies:** WP-01 to WP-03 released; the user's devices and time.
- **Effort:** M, depends on access.
- **Risks:** none to the site.
- **Acceptance criteria:**
  - each task recorded as pass, fail or blocked, per device;
  - defects filed with severity.
- **Regression coverage:** none.
- **Deliverables:** the addendum.
- **Stop condition:** the task script done on at least one phone and one screen reader.

### WP-11 Semantic and small-target fixes (Optional)

- **Problem:**
  - the depth label (A11Y-10)
  - the brand's label-in-name (A11Y-11)
  - heading order and empty table headers (A11Y-14)
  - timeline dot size (A11Y-13) and `aria-controls` (A11Y-15), after WP-10 verifies them
  - the 404 page's nested asset path
- **Goal:** each item cleared or closed as not a defect.
- **Files:**
  - `tools/pages.py` (brand, line 45) → regenerate pages
  - `assets/css/site.css` (`.tl__ev`)
  - `assets/js/chapter.js`
  - the bar's settings button
- **Effort:** S, low uncertainty.
- **Acceptance criteria:** axe clean for these rules; M-003A green.
- **Stop condition:** each item has a status.

### WP-12 Test evidence hardening (Optional)

- **Problem:**
  - One 139/140 run could not be explained because its report was overwritten.
  - Live smoke runs do not record line speed.
- **Goal:**
  - every failing run keeps its report;
  - live runs log a line probe;
  - a written proposal for an optional macOS CI job for the functional suite. The proposal only: required checks stay as they are.
- **Files:**
  - `tests/browser/playwright.config.mjs`
  - `tests/browser/README.md`
  - a proposal note in `docs/`
- **Effort:** S, low uncertainty.
- **Acceptance criteria:** a forced failure leaves a dated report under `.cache/`; nothing is committed from `.cache`.
- **Stop condition:** done; CI changes only with the user's approval.

## Not scheduled

- **B-5, the home opening** (7.8 s first visit, skippable). It is a design decision. Revisit only if WP-10 shows students waiting on it.
- **B-6, GPU texture churn.** A hypothesis. WP-05 measures GPU upload; it becomes a package only if that shows a cost.
- **Light-theme chapters.** Chapters are dark by design.
