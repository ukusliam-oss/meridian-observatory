# M-003 quality assessment

Written 2026-11-03 for M-003D, against production `4da9686`.

The evidence lives in `tests/browser/` and is referenced here, not repeated:

| Package | Report | Results |
|---|---|---|
| M-003A, browser and visual | `tests/browser/README.md` | `tests/browser/specs/__screenshots__/` |
| M-003B, performance | `tests/browser/perf/REPORT.md` | `tests/browser/perf/results/*.json` |
| M-003C, accessibility and usability | `tests/browser/a11y/AUDIT.md` | `tests/browser/a11y/results/audit.json` |

**Labels used below:**

- **[M]**: measured by a stored, reproducible command.
- **[O]**: observed once or by inspection; not re-measured.
- **[J]**: design judgement; no measurement behind it.
- **[NOT RUN]**: no evidence exists.

## 1. Evidence consolidated

| Package | What it established | Limits |
|---|---|---|
| M-003A | 140 Chromium tests (63 routes × 7 viewports, 12 journeys, 19 Phase 0 states) and 46 screenshot baselines. Locally 140/140, with one expected failure (KQ6 at 360 px, `test.fail`) [M]. | macOS Apple GPU only; local server; not in CI |
| M-003B | Lighthouse 13.6.0, 8 pages × 2 presets × 3 runs. Meridian timers at 390 and 1440 px, 3 runs. Six ranked bottlenecks [M]. | One machine; synthetic throttling; no field data |
| M-003C | 31 axe-core 4.14.0 scans, keyboard walks, reflow at 320 px and text spacing, targets, contrast, motion. A11Y-01 to A11Y-15 and U-01 to U-08 [M], [O]. | No assistive technology operated; Chromium only |

## 2. Evidence conflicts, explained

| Apparent conflict | What the evidence shows | Remaining uncertainty and next step |
|---|---|---|
| "Geography → Paper 2" passes in M-003A, yet U-04 says there is no route | The M-003A journey reaches Paper 2 by address (`page.goto`, `journeys.spec.mjs`). It tests leaving a chapter mid-load, not a link. Paper 2 belongs to History, and no chapter links across subjects. Both are true. | None for the facts. Whether a cross-subject route is wanted is a product decision (WP-09). |
| Local performance looks fast, while Lighthouse on the deployed site and the slow-line runs look slow | The local server is HTTP/1.1 with no gzip and runs on an M5 (Chapter Ready 0.3–1.0 s) [M]. Lighthouse simulates a 4× slower CPU and slow 4G on the deployed site (Geography TBT 1.3 s) [M]. The local slow-line run (14.3 s gate) has no gzip, so it overstates Pages [M]. | No real phone, no field data. Measure once on a real phone over the school network before setting phone targets. |
| M-003A ran 139/140 once on the M-003C branch | Every later run passed 140/140 (five runs) [M]. The failing test's name was not captured before the report was overwritten. | **Unknown.** Keep the HTML report of every run (copy `.cache/playwright-report` on failure); `retries: 1` already applies in CI mode. |
| Production smoke ran 38/40 twice after the M-003C release | Run 1: `merapi.png` returned **HTTP 503** from Pages and Fastly; five later fetches were 200 and byte-identical [M]. Run 2: cross-sections not all drawn within the suite's wait, with a line probe at about 40 KB/s [M]. All 54 application files were byte-identical to M5 [M]. | A new code regression is unlikely, but **both incidents are real user risks**: a 503 leaves "Heights unavailable" and flat relief; a slow line leaves sections undrawn for a long time. Next step: record line probes per live run, and add a retry for a failed DEM (WP-08). |
| A11Y-02 is filed under 2.4.3, Focus order | The order is logical but long: 111–167 Tab presses to the scene menu [M]. 2.4.3 concerns meaning and operability, so mapping it to failure needs review. 2.4.1 and 2.1.1 are met. | Classification needs an expert's review; the usability impact is measured and stands. |
| Earlier sessions reported a deep-link reload landing on the wrong scene | M-003C reload landed on the right scene (Geography 15 → 15) [M] | Not reproduced. Check once in Safari and on a phone (WP-10). |

## 3. The six dimensions

### A. Visual and artistic coherence

**Strengths:**

- One type system: light serif capitals with an italic lead phrase, Plex Mono labels, and Inter for reading.
- Three glass grades.
- A disciplined palette: colour is kept for accents and data [J], following `CLAUDE.md`.
- 46 screenshot baselines are stable to 0.013% [M]. The globe and terrain read clearly at a scene's hold (screenshots reviewed) [O].

**Weaknesses:**

- **Progressive dimming hurts legibility.** Chain and cascade steps sit at 1.49–2.93:1 until reached [M].
- **Large display titles do not adapt.** "CZECHOSLOVAKIA," is cut off at 320 px [M].
- **Content shifts at load.** Paper 2 and Economics shift layout (CLS up to 0.60) [M].
- **Stale map after a jump.** The destination map arrives 1.5–2 s after the camera, so the old scene's map is briefly on screen [M].

**Missing evidence:** a design review against named reference sites; light-theme screenshots of the chapters, which are dark-only [NOT RUN].

**Opportunity:** a documented Night Observatory design system (WP-04) that makes legibility rules explicit (contrast floors for "unlit" states, display-type wrapping) without losing the identity.

### B. Interaction and usability

**Strengths:**

- Where a student is stays clear: panel title, ribbon year, pill, "Scene n / N" [O].
- PageDown reading works [M].
- The scene menu works by keyboard once reached [M].
- Mark schemes use native `<details>` [M].

**Weaknesses:**

- **The scene menu is hard to reach by keyboard.** It is late in the focus order (A11Y-02) [M].
- **Focus is dropped after the gate and after a jump.** A11Y-03 [M].
- **The home opening runs before use.** 7.8 s on a first visit before the home is usable (skippable) [M].
- **No route between subjects.** There is no cross-subject route (U-04) [O].

**Missing evidence:** observed students using the site; task timings; real phones [NOT RUN].

### C. Accessibility

**Strengths:**

- A skip link on every page, `lang`, one h1 per page, and landmarks [M].
- Every focus stop changes style [M].
- Reduced motion removes the loader, Lenis and every running animation [M].
- At-rest text passes contrast in both themes (`tools/contrast.js`) [M].

**Weaknesses:**

- **Critical: A11Y-01.** Paper 2 sources cannot be read by keyboard at desktop widths [M].
- **Keyboard and focus:** A11Y-02, A11Y-03 and A11Y-08 [M].
- **Contrast:** A11Y-04 and A11Y-05 [M].
- **Reflow and text spacing:** A11Y-06 [M] and A11Y-07 (probable).
- **Equivalents for examinable graphics:** A11Y-09 (probable).

**Missing evidence:** a screen reader, Safari, forced colours, a real phone [NOT RUN]. **No WCAG 2.2 AA conformance is claimed.**

### D. Performance and reliability

**Strengths:**

- **Phase 0 fixes hold** [M]:
  - nothing drawn at rest
  - no heights downloaded on entry
  - jumps load only the target's and its neighbours' tiles
  - revisits fetch nothing new
  - texture memory stays within its budgets
- Response to a menu click is 24–53 ms [M].

**Weaknesses:**

- **Start-up blocks the main thread:** TBT 1.3 s on Geography and 0.8 s on KQ6 under Lighthouse mobile [M].
- **Layout shift:** CLS on Paper 2 and Economics [M].
- **Late destination map:** after a jump [M].
- **Slow-line readiness:** 14.3 s (overstated locally) [M].
- **Live delivery:** one 503 [M].

**Missing evidence:** field data (CrUX: not available), phones, GPU time [NOT RUN].

### E. Educational clarity and effectiveness

**Strengths:**

- Every scene pairs a map with 146–177 words of panel text that carry the argument (checked scenes) [M].
- Teacher reviews are recorded for KQ6, its Paper 2 room and the Economics chapter (`CLAUDE.md`) [O].
- Exam-style practice uses mark schemes from named sources [O].

**Weaknesses:**

- **Map and section values lack text equivalents.** Data-map values and section heights have none (A11Y-09, probable) [M].
- **A draft chapter.** Geography Tectonic hazards is not yet teacher-reviewed (`CLAUDE.md`) [O].

**Missing evidence:** any measure of learning effect, such as quiz outcomes or student testing [NOT RUN]. **No claim of educational effectiveness is made.**

### F. Engineering and maintainability

**Strengths:**

- Protected `main` and `develop` with required `meridian-check` [M].
- Option C release cycles: six since Phase 0 [M].
- Reproducible builds (`verify-build`) [M].
- Pinned test tooling: browser, performance and accessibility suites share one Playwright package [M].

**Weaknesses:**

- **No CI for the suites.** The browser, performance and accessibility suites are local-only; screenshots are tied to macOS and an Apple GPU [M].
- **Flaky tests.** One unexplained intermittent failure [M].
- **Large modules.** The engine and `chapter.js` are large single modules [J].

**Opportunity:** an optional macOS CI job for the functional suite (proposal in WP-12, advisory).

## 4. Confirmed critical and high findings

| ID | Severity | Confidence | Summary |
|---|---|---|---|
| A11Y-01 | Critical | Confirmed | Paper 2 Sources A–F cannot be read by keyboard at desktop widths |
| A11Y-02 | High | Confirmed (impact); criterion under review | Scene menu 111–167 Tab presses away |
| B-1 | High (performance) | Confirmed in the lab | Chapter start-up blocks the main thread (Geography TBT 1.3 s) |
| B-2 | High (stability) | Confirmed | CLS 0.46–0.60 on Paper 2 and Economics |
