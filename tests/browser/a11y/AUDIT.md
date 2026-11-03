# Meridian accessibility and usability audit (M-003C, 2026-11-03)

Production `ad3af03`, audited locally with Playwright 1.64.1, Chromium 156 (the machine's GPU) and axe-core 4.14.0 via `@axe-core/playwright` 4.14.0.

**This is an audit of nine sampled pages and their main interactive states, not a conformance claim.** An empty axe report would not have meant WCAG 2.2 AA conformance either.

**Results.**

- Machine-readable: `results/audit.json`, built by `node a11y/summarise.mjs` from `.cache/a11y/raw.jsonl`.
- Commands: see *Commands* below.

## Commands

From `tests/browser/` after `npm ci`. The local server starts by itself.

```bash
npm run a11y
npx playwright test --project=a11y -g "keyboard at"
npx playwright test --project=a11y -g "reflow at 320"
npx playwright test --project=a11y -g "contrast"
node a11y/summarise.mjs
```

| Command | What it runs |
|---|---|
| `npm run a11y` | The whole audit (121 checks, about 2 minutes), then the summary |
| `-g "keyboard at"` | The keyboard walks and the chapter tasks |
| `-g "reflow at 320"` | Reflow at 320 px, equivalent to 400% zoom on a 1280 px window |
| `-g "contrast"` | The site's own `tools/contrast.js` in both themes |
| `node a11y/summarise.mjs` | Rebuilds `results/audit.json` from the last run |

The audit records findings; it does not fail on them. A check fails only if the page could not be audited at all.

## What was checked

**Pages:**

- the home and the three hubs
- History KQ6 and its Paper 2 room
- the Economics and Geography chapters
- the 404 page

**States:**

- first load
- each chapter's sound gate
- the scene menu open
- a held scene (KQ6 scene 14, Economics scene 15, Geography scene 15)
- Paper 2 with every mark scheme and example opened
- the hubs with practice parts, topic bodies and one quiz answer opened

**Checks:**

| Check | Where | Notes |
|---|---|---|
| axe (WCAG 2.0, 2.1, 2.2 A/AA and best practice) | 31 scans | |
| Tab and Shift+Tab walks | Every page, 1440 and 390 px | Focus indicator, in view, covered by something fixed |
| Keyboard-only chapter task | KQ6, Geography | Gate, scene menu, choose, Escape, PageDown |
| Paper 2 reveal by keyboard | | |
| Reflow | 320, 360, 390, 640 (200% zoom), 768, 1440 | Plus WCAG 1.4.12 text spacing at 390 and 1440 |
| Target size | 320, 390, 1440 | |
| Contrast | Both themes | `tools/contrast.js` plus axe |
| Motion | | With and without reduced motion |
| Known issues | | Carried from M-003A and M-003B |

## Findings

Severity weighs what a student loses, not the tool's own score.

- **Confidence:** Confirmed means reproduced and inspected; Probable means strong evidence but not every condition checked; Needs verification means a human must confirm.
- **Phase 2 workstream:** K = keyboard and focus, C = contrast and visual, L = layout and reflow, S = semantics, M = motion, U = usability.

### Accessibility (WCAG 2.2 AA)

| ID | Severity | Confidence | Where and state | Finding (criterion) | Evidence and reproduction | What a student loses | Suggested correction | WS |
|---|---|---|---|---|---|---|---|---|
| A11Y-01 | **Critical** | Confirmed | Paper 2, every desktop width where the sources panel is sticky (1440 px checked) | Sources A–F sit in a scrolling panel (`aside.p2-sources`: `overflow-y: auto`, 3,920 px of content in 796 px) that cannot take focus and holds nothing focusable (**2.1.1**) | axe `scrollable-region-focusable`. Arrow keys and PageDown left its `scrollTop` at 0 and scrolled the page instead. | A keyboard-only student can read about the first fifth of the sources, the core of the Paper 2 task. At 390 px the panel is in the normal flow and is readable. | Make the panel focusable with a name (`tabindex="0"`, `role="region"`), or stop it scrolling on its own | K |
| A11Y-02 | **High** | Confirmed | Every chapter, keyboard | The scene menu button is the last control but seven in DOM order. Reaching it from the start takes 111 Tab presses (Geography) or 167 (KQ6), and Shift+Tab from the top did not reach it within 60 (**2.4.3**, 2.1.1 in practice) | `keyboard-chapter` rows, `menuInDomOrder` 168/175 and 329/336. Once reached, the menu works: Enter opens it, focus moves in, arrows move, Enter chooses, Escape closes and returns focus. | Jumping to a scene by keyboard is impractical. Moving one screen at a time with PageDown works. | Put the scene navigation early in the focus order, or offer a skip link or shortcut to it | K |
| A11Y-03 | Medium | Confirmed | Every chapter | Focus falls to `<body>` after "Enter quietly" and after choosing a scene from the menu (**2.4.3**) | `focusAfterEnter: body`, `focusAfterChoice: body.chapter` | The next Tab starts from wherever the loader was, and after a jump the student is not told where they are | Move focus to the first scene, or to the chosen scene's heading | K |
| A11Y-04 | Medium | Confirmed | Economics and Geography chapters (chain steps), KQ6 (the 1989 cascade): steps not yet reached | Text stays dimmed until the scroll reaches its step: 2.93:1 for chain steps, 1.49–2.39:1 for cascade dates and names (**1.4.3**) | axe `color-contrast` on 5–44 nodes per chapter, in stable states. `tools/contrast.js` skips text below 95% opacity, so it missed these. | A student who pauses mid-panel, or reads ahead, sees barely legible steps | Raise the unlit state to at least 4.5:1 and show progress another way (weight, marker) | C |
| A11Y-05 | Medium | Confirmed | All three hubs, the quiz | "Choose an answer" hint at 1.58–1.99:1 in the dark theme: dark ink at 64% on a dark surface (**1.4.3**) | axe, rechecked after 3 s: `rgba(21,20,15,.64)` on `#101318` | Instructions are invisible | Use the theme's text colour | C |
| A11Y-06 | Medium | Confirmed | KQ6 at 320 px (45 px sideways scroll) and 360 px (5 px) | The Part 4 title word "CZECHOSLOVAKIA," is wider than the screen and is cut off (**1.4.10**) | `kq6-360` path ends `h2.part__title`; screenshot at 320 px | At 400% zoom or on narrow phones the title is cut and the page scrolls sideways | Allow the display word to wrap or hyphenate, or scale it down on narrow screens | L |
| A11Y-07 | Medium | Probable | KQ6 at 390 px (103 px overflow), Economics and Geography chapters (8 px), with WCAG text-spacing overrides | Content overflows sideways when users set text spacing (**1.4.12**) | `reflow` rows in `text-spacing` mode. Whether text is also lost was not inspected screen by screen. | Readers who need wider spacing get sideways scrolling | Same as A11Y-06, plus flexible display headings | L |
| A11Y-08 | Medium | Confirmed | History hub at phone widths (all three hubs have the pattern) | Collapsed topic bodies (`height: 0`, overflow hidden) keep their status buttons ("Not started", "Revising", …), 51 of them, in the Tab order while invisible (**2.4.7**, 2.4.11) | Tab walk "fully covered" rows; check of a `.topic__body` 0 px high with `tabIndex` 0 | Focus disappears for long stretches; keyboard users cannot tell where they are | Make collapsed bodies `inert` or `hidden` | K |
| A11Y-09 | Medium | Probable | Data-map scenes (Economics), cross-sections and landscapes (Geography), every chapter's globe | The globe canvas is `aria-hidden`. The panel text (146–177 words per checked scene) carries the argument, but per-country values on data maps, and the heights along a cross-section, have no text equivalent (**1.1.1**). The map key relies on colour and size (**1.4.1**). | `scene-text` rows; the cross-section SVG is `role="img"` named "Cross-section west to east" with no data | A non-sighted student gets the narrative but not the comparison the map shows | Needs a subject review of which values are examinable, then text equivalents: a short data table or a sentence per map | S |
| A11Y-10 | Low | Confirmed | Hubs, command-word cards | "Depth n of 5" is an `aria-label` on a `<span>` without a role, so it is not exposed (**4.1.2**) | axe `aria-prohibited-attr`, 8–20 nodes per hub | The depth of each command word is lost to a screen reader | Visually hidden text, or `role="img"` with the label | S |
| A11Y-11 | Low | Confirmed | Every page | The brand link's name "Meridian home" does not include its visible text "I&S revision Meridian" (**2.5.3**) | axe `label-content-name-mismatch` | Voice-control users may not be able to say what they see | Start the name with the visible text | S |
| A11Y-12 | Low | Probable | Home and chapters (scroll cue), hub instruments (sweep, needle, market), chapter opening globe drift | Moving or repeating content starts by itself and runs for more than 5 s with no pause control on the page (**2.2.2**). Reduced motion stops all of it (0 animations measured). | `motion` rows: infinite `cue` and `inst-sweep` animations. Canvas instruments are not counted by the tool. | Distraction for students with attention or vestibular needs who have not set reduced motion | A pause control, or stop after a few cycles | M |
| A11Y-13 | Low | Needs verification | History hub timeline | The event dots are 22 × 22 px and some sit closer than 24 px apart (**2.5.8**). Each is focusable and named, so an equivalent control may exist. | axe `target-size`, 5 nodes; `site.css` `.tl__ev` | Mis-taps on phones | Larger hit areas, or confirm an equivalent list | U |
| A11Y-14 | Low | Confirmed | Hubs, practice, comparison tables | Headings skip levels (h2 → h4/h5); comparison tables have an empty first column header | axe `heading-order`, `empty-table-header` (best practice) | A harder outline to navigate | Fix the levels; name the first column | S |
| A11Y-15 | Low | Needs verification | Settings dial | `aria-controls="setmenu"` points to a menu that is created only when it opens | axe review item `aria-valid-attr-value` | Probably none; check with a screen reader | Render the menu hidden, or set `aria-controls` when it opens | S |

**Carried, not accessibility:** the 404 page one folder deep fetches its assets from the wrong folder before `<base>` is written. The page renders. Severity Low, workstream L.

### Usability observations (not WCAG findings)

| ID | Severity | Observation | Evidence |
|---|---|---|---|
| U-01 | Medium | After a long jump the previous scene's map shows for 1.5–2 s before the destination's arrives | M-003B Scene Ready |
| U-02 | Medium | Paper 2 and the Economics chapter shift their layout as content arrives | Lighthouse CLS 0.46–0.57 and 0.38–0.60 (M-003B) |
| U-03 | Low | The home's first visit runs a 7.8 s opening; a key, click or touch skips it, and reduced motion removes it | M-003B; `motion` rows |
| U-04 | Low | "Open Paper 2 from Geography" means going back through the History hub. Paper 2 belongs to History, and no chapter links across subjects. | Route review |
| U-05 | Positive | Where a student is stays clear: the panel title, the ribbon's year, the pill's part and scene title, and the HUD's "Scene n / N" | Screens reviewed |
| U-06 | Positive | Reading on by keyboard works: PageDown moved scene to scene in KQ6 | `keyboard-chapter` |
| U-07 | Positive | Mark schemes and example answers use native `<details>`, which work by keyboard. "Check yourself" answers are buttons. | Paper 2 and chapter walks |
| U-08 | Needs verification | Reloading on a deep scene restored the right scene this time (Geography 15 → 15). The earlier report did not reproduce. | `reload-deep` row |

## WCAG 2.2 A/AA coverage

This covers the sampled pages and states only. Status key: **A** = automated, **M** = manual (scripted inspection and screenshots reviewed here; no assistive technology was operated); **PASS** = no failure found in what was checked.

| Criterion | Status | Notes |
|---|---|---|
| 1.1.1 Non-text content | M: Needs verification (probable gap) | A11Y-09. Images and SVGs pass automated checks. |
| 1.2.1–1.2.5 Time-based media | Not applicable | No audio or video content. The sound is ambient music. |
| 1.3.1 Info and relationships | A: best-practice warnings; M: Needs verification | A11Y-14 |
| 1.3.2 Meaningful sequence | M: PASS | DOM order follows reading order. Focus order is covered under 2.4.3. |
| 1.3.3 Sensory characteristics | Needs verification | |
| 1.3.4 Orientation | M: PASS | No orientation lock in CSS; portrait and landscape viewports render |
| 1.3.5 Identify input purpose | Not applicable | No personal-data inputs |
| 1.4.1 Use of colour | M: Needs verification | Map keys (A11Y-09); axe reviews `link-in-text-block` on 7 pages |
| 1.4.2 Audio control | M: PASS | Sound only after "Enter with sound"; a nav switch turns it off (not listened to) |
| 1.4.3 Contrast (minimum) | A: FAIL | A11Y-04, A11Y-05. At-rest text passes `tools/contrast.js` in both themes (0 failures, 25–1,686 elements per page). |
| 1.4.4 Resize text | A: PASS at 640 px (200%) | Viewport equivalent; browser text zoom not run |
| 1.4.5 Images of text | M: PASS | |
| 1.4.10 Reflow | A: FAIL | A11Y-06 (KQ6 at 320 px). Other pages had no sideways scroll at 320 px. |
| 1.4.11 Non-text contrast | Needs verification | Focus rings and chart lines not measured |
| 1.4.12 Text spacing | A: FAIL (probable) | A11Y-07 |
| 1.4.13 Content on hover or focus | M: partly PASS | The scene menu closes with Escape. Glossary chips not tested. |
| 2.1.1 Keyboard | A + M: FAIL | A11Y-01, A11Y-02 |
| 2.1.2 No keyboard trap | M: PASS | No traps in forward or backward walks |
| 2.1.4 Character key shortcuts | M: PASS | None found; arrows act only inside the menu |
| 2.2.1 Timing adjustable | Not applicable | No time limits |
| 2.2.2 Pause, stop, hide | M: probable FAIL | A11Y-12 |
| 2.3.1 Three flashes | NOT RUN | No flash analysis |
| 2.4.1 Bypass blocks | A + M: PASS | "Skip to content" first on every page |
| 2.4.2 Page titled | A: PASS | |
| 2.4.3 Focus order | M: FAIL | A11Y-02, A11Y-03 |
| 2.4.4 Link purpose | A: PASS | |
| 2.4.5 Multiple ways | M: PASS | Nav, hubs, scene menu |
| 2.4.6 Headings and labels | M: PASS, with notes | A11Y-14 |
| 2.4.7 Focus visible | M: FAIL at phone widths | A11Y-08. Every focused element changed style; the indicator's contrast was not measured. |
| 2.4.11 Focus not obscured (minimum) | M: FAIL where focus is hidden in collapsed bodies (A11Y-08) | Fixed nav or tab bar: only partial covering seen |
| 2.5.1 Pointer gestures | Needs verification | Timeline and labs not tested with gestures |
| 2.5.2 Pointer cancellation | M: PASS | Native buttons |
| 2.5.3 Label in name | A: FAIL | A11Y-11 |
| 2.5.4 Motion actuation | Not applicable | |
| 2.5.7 Dragging movements | Needs verification | Timeline track, Economics lab |
| 2.5.8 Target size (minimum) | A: FAIL (needs verification) | A11Y-13. 320 px pages had no small, crowded targets. |
| 3.1.1 Language of page | A: PASS | `lang="en"` |
| 3.1.2 Language of parts | Needs verification | |
| 3.2.1 On focus / 3.2.2 On input | M: PASS | |
| 3.2.3 Consistent navigation / 3.2.4 Consistent identification | M: PASS | |
| 3.2.6 Consistent help | Not applicable | No help mechanism |
| 3.3.1–3.3.4, 3.3.7, 3.3.8 | Not applicable | No forms or authentication |
| 4.1.2 Name, role, value | A: FAIL | A11Y-10; A11Y-15 needs verification |
| 4.1.3 Status messages | Needs verification | Quiz and DTM cards are live regions; the heights line is not |

## Not run

- **Assistive technology:** VoiceOver, NVDA, TalkBack, JAWS. No screen reader was operated; semantics come from the DOM and axe.
- **Browsers:** Safari and WebKit, Firefox, Edge.
- **Devices and networks:** real phones and tablets (Chromium viewport emulation only), the school network.
- **Input:** browser text zoom (approximated by narrower viewports), Windows high-contrast or forced colours, and switch or voice control.
- **Content analysis:** flash analysis (2.3.1), and a subject-expert review of which map values are examinable.

## M-003D handoff

Suggested order:

1. **Critical and high keyboard fixes:** A11Y-01, then A11Y-02, A11Y-03 and A11Y-08.
2. **Cheap contrast and layout fixes:** A11Y-05, A11Y-04 and A11Y-06/07. Re-measure with `npm run a11y` and keep the M-003A screenshots in step.
3. **Text equivalents for examinable map and section data:** A11Y-09, after a subject review.
4. **The rest:** A11Y-10 to A11Y-15, A11Y-12 and the usability items.
5. **Validation on real devices:** VoiceOver on an iPhone and NVDA on Windows, before claiming any improvement.

## Phase 2 status

**A11Y-01: fixed by WP-01 (2026-11-03).** This needs its release to reach production and a check in Safari and with a screen reader (WP-10).

**What changed:**

- **The sources column.** On wide screens, where it scrolls on its own, the column takes `tabindex="0"` and keeps its name, "Sources A to F". On phones, where it sits in the page's flow, it adds no Tab stop.
- **Source chips.** A chip followed from the keyboard puts focus on its source card (`tabindex="-1"`, named "Source A" to "Source F"). The ring sits inside the card, in the deep accent, at 5.45:1 on the paper.
- **The site's anchor handler.** It no longer also handles chip clicks. It had scrolled the page to the card's place in the document, which is far up the page once the column has been scrolled. This happened with the mouse too.
- **Lenis sync.** Before a chip's scroll, Lenis is set to the page's real position. Enter pressed at once after Tab had found Lenis still at an old position: the page ended at the top, or the column above the screen.

**Correction to the original finding.** Chromium 130 and later make a scroll box with nothing focusable inside it keyboard-focusable on their own. In the Chromium 156 used here, Tab already reached the column (as `tabIndex` −1), and Page Down then scrolled it. The audit's keys had been pressed with focus outside the column. The finding still held:

- for axe (`scrollable-region-focusable`);
- for browsers without that behaviour (Safari, earlier Chrome);
- for chips, which left focus behind.

**Acceptance test.** The `keyboard-sources` rows in `specs/a11y.spec.mjs`, at 1440 and 390 px, assert rather than only record.
