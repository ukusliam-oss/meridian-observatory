# Phase 2 execution blueprint

Written 2026-11-03 for M-003D. It turns `PHASE2_PRIORITISED_BACKLOG.md` into workstreams, gates and milestones. It sets out the first three packages in enough detail to become one master prompt each.

**Phase 2's aim:**

- every essential learning function works for keyboard and phone users;
- nothing moves or waits without reason;
- the Night Observatory look is written down and made legible without losing its identity.

**Phase 2 is not:**

- a rebuild;
- the Observatory, Revision, Exam and Reference modes (Phase 3);
- new chapters.

## 1. Delivery rules (unchanged from M-002 and M-003)

1. **One package per cycle.** Each package is one Option C cycle:
   1. Verify `origin/main`.
   2. Branch from it.
   3. Implement and measure.
   4. Commit.
   5. Push the feature branch only.
   6. Open a Draft PR to `develop`.
   7. The user merges with a merge commit.
   8. Open a release PR, `develop` → `main`, for the user to merge.
   9. Verify production.
2. **No new runtime dependencies or frameworks.** Test tooling stays in `tests/browser/`.
3. **CI stays as it is.** Required checks and branch protections change only with the user's explicit approval.
4. **Report what ran.** Every PR states what ran, where (local or CI) and what was NOT RUN.
5. **Respect Phase 0.** The following must not regress:
   - DEM lazy loading (Fix 1);
   - scene-aware terrain (Fix 2A);
   - the Economics rest fix.

   Their guards are the M-003A state tests and the `npm run perf` idle and request rows.

## 2. Workstreams

| Workstream | Purpose | Packages | Owner of the decision |
|---|---|---|---|
| **A: essential accessibility** | Keyboard, focus and semantics for the tasks students must do | WP-01, WP-02, WP-11 | Evidence; low design risk |
| **B: performance and visual stability** | Nothing shifts, nothing shows the wrong scene, start-up and poor lines handled | WP-03 (stability half), WP-05, WP-06, WP-08 | Measurement; Phase 0 preserved |
| **C: Night Observatory design system** | Type scale, colour roles and contrast floors, surfaces and depth, motion, responsive rules, shared components, written in `docs/DESIGN.md` | WP-03 (type half), WP-04 | The user's eye, against stated criteria |
| **D: educational interaction** | Text, evidence, visualisation and action read together; groundwork for later modes | WP-07, WP-09 | Subject teachers for content |
| **V: validation** (cross-cutting) | Real devices, assistive technology, the school network | WP-10 | Needs the user's devices |
| **F: evidence** (optional) | Keep failing reports; record line speed | WP-12 | Low |

### Design direction for C and D

The visual work is not deferred: WP-03 and WP-04 both change what students see.

**Workstream C principles** (to be written into `docs/DESIGN.md` by WP-04):

- **Type.** Serif display capitals with an italic lead phrase stay. Display sizes are set per screen so a title never overflows. It wraps at a word, never mid-word, with at most three lines.
- **Colour.** Colour stays reserved for accents and data, as now. "Unlit" (not yet read) is expressed by brightness, weight and a fine light line. It never falls below 4.5:1 for text.
- **Surfaces.** The three glass grades stay the only surfaces, and depth comes from light, not from shadow stacks.
- **Motion.** Every reveal is optional and composited. Decorative loops stop. Reduced motion shows final states (already true).
- **Responsive.** The phone is a first-class layout. Every Tab stop must be visible where it sits.

**Workstream D principles:**

- Each scene keeps the order text → evidence → visualisation → action (check, practice, Paper 2).
- Any value a student may be examined on is readable as text (WP-07).
- New fields are added only where a later mode will need them: the exam link (WP-09). Phase 3 can then switch modes by data rather than by new pages.

## 3. Release gates

Gates reuse what exists: `npm run check`, the M-003A suite, its screenshots, the M-003B perf baseline and the M-003C audit. They add no new framework.

### Hard blockers (a package does not go to `develop` without them)

| Gate | Command | Pass |
|---|---|---|
| G1 build and data | `npm run check` | 10/10 locally and `meridian-check` green (App 15368) |
| G2 functional | `cd tests/browser && npx playwright test --project=functional` | All pass. The KQ6 360 px expected failure may only turn into a pass (WP-03) |
| G3 visual | `npx playwright test --project=visual` | Unchanged, or every changed baseline shown before and after in the PR and accepted by the user |
| G4 Phase 0 invariants | The functional `states` tests, plus `npm run perf` idle rows when engine files change | Idle frames, compositions and tile requests 0; entry heights 0; jump terrain within the target and its neighbours |
| G5 the package's own criteria | As listed in the package | All met, or the PR says which are not and why the package stops |
| G6 no new accessibility failures | `npm run a11y` on touched pages | No axe rule newly failing; the package's finding cleared |

### Advisory targets (reported in every PR, never block alone)

- Lighthouse on the deployed site after release: mobile performance ≥ 0.90 on the hubs and Paper 2, chapters no lower than the M-003B medians, CLS < 0.1 everywhere.
- `npm run perf`: Chapter Ready, Scene Ready and memory no worse than `tests/browser/perf/results/meridian.json` beyond run-to-run spread.
- Contrast tool: 0 failures in both themes.

### Run discipline

- **Keep committed baselines.** `npm run perf` and `npm run a11y` end by running `tests/browser/perf/summarise.mjs` and `tests/browser/a11y/summarise.mjs`, which overwrite the committed results. For verification, run the projects directly (`npx playwright test --project=perf --workers=1`, `npx playwright test --project=a11y`) and read the raw rows in `tests/browser/.cache/perf/raw.jsonl` and `tests/browser/.cache/a11y/raw.jsonl`. Wherever this document says `npm run perf` or `npm run a11y` as a check, this is what it means. Commit new results only when a package intends a new baseline.
- **Keep failure evidence.** On any G2 or G3 failure, keep `tests/browser/.cache/playwright-report` before rerunning (see the M-003A intermittent failure).
- **Record line speed.** Live checks after a release record a line probe with the result.

## 4. The first three packages

Each section below can be pasted into a master prompt as it stands.

### 4.1 WP-01: Paper 2 sources by keyboard

**Objective:** a keyboard-only student can read Sources A–F in full at every width.

**Scope:**

- **In:**
  - make the sticky sources column (`[data-p2-sources]`, `.p2-sources`) a focusable, named region;
  - make each question's source chip move focus to its source as well as scrolling;
  - give the region a visible focus style in the glass language.
- **Out:**
  - layout and widths;
  - the narrow (≤ 900 px) layout, where the column is static and already reachable;
  - CLS, which is WP-03;
  - content.

**File-level guidance:**

- `assets/js/paper2.js`, around line 53:
  - the chip handler scrolls the column but leaves focus on the chip;
  - after scrolling, move focus to the source card with `focus({ preventScroll: true })`, giving cards `tabindex="-1"`;
  - when the column is sticky, set `tabindex="0"`, `role="region"` and `aria-label="Sources"` on it. Setting them at all widths is acceptable if it is harmless at 390 px.
- `assets/css/chapter.css`, around line 335 (`.p2-sources`): add a `:focus-visible` ring that matches the site's focus style; no other change.
- `tests/browser/specs/a11y.spec.mjs`: add a `keyboard-sources` row at 1440 px that asserts focus reaches the region, Page Down changes `scrollTop`, and Source F becomes visible.

**Acceptance tests:**

1. `npm run a11y`:
   - Paper 2 at 1440 px has no `scrollable-region-focusable`;
   - the new `keyboard-sources` row reaches the region and shows Source F after keys only.
2. At 1440 px:
   - Tab to the region, then Page Down repeatedly, and every source's heading enters the viewport;
   - activating a source chip by keyboard puts focus on that source.
3. At 390 px, behaviour and screenshots are unchanged.
4. G1 to G4 and G6.

**Visual and accessibility requirements:**

- The focus ring is visible against the paper cards and the dark ground: at least 3:1 non-text contrast.
- No new colour.
- A screen reader announces the region's name. This cannot be verified here; it is listed for WP-10.

**Performance gate:** no measurable change expected. Report Paper 2's Lighthouse desktop CLS as before (it is WP-03's).

**Delivery:**

- Branch `fix/p2-01-paper2-sources-keyboard`.
- Draft PR to `develop` listing the axe and keyboard results and any changed baseline.

**Rollback or rejection:**

- Revert the merge commit on `develop` if G2 or G3 regress after merge.
- Reject the approach if focus inside the column breaks the sticky behaviour or the chip scrolling. The fallback is to make the column static at all widths, which is a layout change: ask first.

### 4.2 WP-02: chapter keyboard route and focus

**Objective:**

- the scene menu is reachable in a few key presses;
- focus never falls to the page after entering or jumping;
- no invisible element takes focus on phones.

**Scope:**

- **In:**
  - a second skip link on chapter pages, "Skip to scenes", that opens or focuses the pill's menu button;
  - focus moves after the loader's enter buttons and after a menu choice;
  - collapsed topic bodies taken out of the Tab order.
- **Out:**
  - the pill's look;
  - the menu's content;
  - scroll mechanics (Lenis, `goTo` timing);
  - a keyboard shortcut. One may be proposed in the PR, not added.

**File-level guidance:**

- **Chapter pages:** `history/kq6.html` line 29, `economics/macro-policy.html`, `geography/tectonics.html` and the two `engine-test.html` pages. After `<a class="skip" href="#content">`, add a second `.skip` link targeting the menu button. Stack it under the first when focused (`assets/css/site.css` `.skip`, line 97).
- **`assets/js/chapter.js`:**
  - **Loader:** after `[data-sound]` is chosen, about line 602, focus the first scene's panel heading (`tabindex="-1"`, `preventScroll`).
  - **Menu:** after a choice (`setMenu(false); goTo(i)`, about line 393), focus the destination panel's heading once the scroll settles, or at once with `preventScroll`. Never steal focus from a pointer user: only when the choice came from the keyboard (`event.detail === 0`).
- **`assets/js/ui.js`, around line 124 (`setOpen`):** set `inert` on `.topic__body` when closed and remove it when open, also for the initial state. `site.css` `.topic__body` stays as it is.
- **`tests/browser/specs/a11y.spec.mjs`:** the `keyboard-chapter` row already records `menuTabs`, `focusAfterEnter` and `focusAfterChoice`; the `tab` rows record `fully` per stop (from `tabWalk` in `tests/browser/lib/a11y.mjs`). Assert on them.

**Acceptance tests:**

1. `npm run a11y`:
   - `menuTabs` ≤ 10 on KQ6, Economics and Geography at 1440 and 390 px;
   - `focusAfterEnter` and `focusAfterChoice` name a visible element inside the destination scene;
   - no `tab` row stop with `fully: true` on the three hubs at 390 px.
2. M-003A journeys (menu jump, PageDown reading, reload) pass unchanged.
3. Pointer: clicking a scene in the menu leaves focus where the browser puts it today. Check this with a test row.
4. G1 to G4 and G6.

**Visual and accessibility requirements:**

- The second skip link uses the existing `.skip` style.
- Focus rings on panel headings follow the site's focus style.
- Nothing visible changes for pointer users.

**Performance gate:** the jump rows in `npm run perf` show no change in Scene Ready or response beyond spread.

**Delivery:**

- Branch `fix/p2-02-chapter-keyboard-route`.
- Draft PR to `develop`. It may be released together with WP-01 in one `develop` → `main` release if the user prefers.

**Rollback or rejection:**

- Revert if focus moves cause scroll jumps under Lenis, visible in the journeys or screenshots.
- Reject `inert` if a supported browser lacks it. The fallback is `visibility: hidden` on closed bodies after the height transition ends.

### 4.3 WP-03: stable layout and fitting display type

**Objective:**

- Paper 2 and the Economics chapter do not shift once shown;
- part titles fit every screen and survive text spacing, as the first part of the Night Observatory type scale.

**Scope:**

- **In:**
  - space reserved before render: the Paper 2 sources column and the parts list, so the footer is not pushed, and the policy lab's aim gauges (`.plab__aim` SVG sizes);
  - part titles sized with a clamp tied to the measure: wrapping at word boundaries with `text-wrap: balance`, a max of three lines, and the 360 and 320 px cases designed.
- **Out:**
  - new fonts;
  - colour (WP-04);
  - Paper 2's content and order;
  - the policy lab's model.

**File-level guidance:**

- **`assets/css/chapter.css`:**
  - `.part__title` (line 70: `clamp(3rem, 1rem + 7vw, 8.2rem)`, `max-width: 11ch`; line 299: narrow 3.4rem). Derive the size from the longest word in each title, set with a custom property in `chapter.js` if needed, so "CZECHOSLOVAKIA," fits at 320 px.
  - Allow `overflow-wrap: normal` with `hyphens: manual` only.
  - `.p2-*`: give the grid a `min-height`, or write the empty skeleton into `history/kq6-paper2.html` so the footer starts in place.
- **`assets/js/paper2.js`:** render into pre-sized containers. If the measured shift comes from fonts, preload the serif (already vendored).
- **`assets/css/policy-lab.css`, around line 58:** fixed aspect-ratio boxes for `.plab__aim` gauges.
- **`tests/browser/specs/routes.spec.mjs`:** remove the KQ6 360 px `test.fail` once it passes.

**Acceptance tests:**

1. `npm run perf:lighthouse` (deployed site, after the release, 3 runs): CLS < 0.1 on Paper 2 and the Economics chapter, both presets, 3 of 3.
   - Before release, the same check runs against the local server and is reported as indicative.
2. `npm run a11y`: reflow rows have `overflowPx` = 0 at 320 px; text-spacing rows have `overflowPx` = 0 on the three chapters and KQ6 at 390 px.
3. M-003A: 140/140 with the KQ6 360 px test passing as a normal test.
4. G3: every changed baseline is presented before and after in the PR. The user accepts the title wrapping by eye.
5. G1, G2, G4 and G6.

**Visual and accessibility requirements:**

- **Titles:**
  - keep serif capitals and the italic lead line;
  - never break a word;
  - never exceed three lines or half the screen width on desktop (the existing rule in `CLAUDE.md`).
- No content is hidden to avoid overflow.

**Performance gate:**

- LCP on Paper 2 is no worse than the M-003B median: 2,006 ms on mobile, deployed.
- Chapter Ready is unchanged locally.

**Delivery:**

- Branch `fix/p2-03-stable-layout-display-type`.
- Draft PR to `develop` with before/after images at 320, 390 and 1440 px.

**Rollback or rejection:**

- Revert if any chapter's first screen changes beyond the titles.
- Reject if the user finds the wrapped titles weaker than today. The fallback is a smaller display size at narrow widths only, which fixes reflow without redesign.

## 5. Milestones

| Milestone | Packages | Ends when |
|---|---|---|
| **P2-M1: access** | WP-01, WP-02, WP-03 | All three in production; A11Y-01, 02, 03, 06, 08 and B-2 cleared by their tests |
| **P2-M2: legibility** | WP-04, WP-11 | `docs/DESIGN.md` accepted; contrast findings cleared |
| **P2-M3: responsiveness** | WP-05, WP-08, WP-06 | Jump readiness, retry and start-up targets met or re-scoped with evidence |
| **P2-M4: learning** | WP-07 (after teacher review), WP-09 (optional) | Examinable values readable as text in the reviewed scenes |
| **Validation** | WP-10 | Runs after P2-M1 and again before Phase 2 closes; its findings feed the backlog |

Phase 2 closes when:

- every required package is in production or explicitly re-scoped by the user;
- WP-10 has run at least once.

**Even then, no WCAG conformance claim is made without an expert audit.**
