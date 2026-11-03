# Browser and visual tests (M-003A)

Playwright tests for the site as a reader uses it: every page at seven viewports, the core learning journeys, the
states Phase 0 fixed, and screenshot baselines.

They live in their own package so the site's `package.json`, `npm run check` and its CI job stay as they are.

## Environment

| | |
|---|---|
| Runner | `@playwright/test` 1.64.1, pinned exactly in `package.json` and `package-lock.json` |
| Browser | Playwright's Chromium headless shell, revision 1248 (Chrome 156.0.8078.4) |
| Node | 22 (as `.nvmrc` at the repository root) |
| GPU | The machine's GPU through ANGLE (Metal on macOS). `GPU=0` forces SwiftShader. |
| Pixel ratio | 1 |
| Locale and time zone | en-GB, Europe/London |
| Colour scheme | Dark |
| Server | `server.mjs`: the repository root served as GitHub Pages serves it |
| Baselines | Made on macOS (Apple M5) |

**Why the GPU is the default.** SwiftShader drew a chapter at 1440 × 900 in 313 ms a frame, too slow for the chapters to settle.

**What the server does.** It answers with `max-age=600` and ETags, serves `404.html` with status 404 for a missing address, and runs on port 5199. Playwright starts it.

**Which machines can check the baselines.** Screenshots carry the platform in their name (`-darwin`). Another OS or GPU needs its own baselines and its own measured tolerance.

## Commands

From `tests/browser/`:

```bash
npm ci
npx playwright install chromium-headless-shell
npm test
npm run test:functional
npm run test:visual
npm run update
npm run report
```

- `npm ci` installs the pinned runner.
- `npx playwright install chromium-headless-shell` downloads the pinned browser, once.
- `npm test` runs everything: 94 functional tests and 46 screenshots.
- `npm run test:functional` runs routes, journeys and states.
- `npm run test:visual` compares the screenshots.
- `npm run update` rewrites the baselines. Do this only after a change has been reviewed and approved.
- `npm run report` opens the HTML report of the last run.

Useful options:

| Option | Effect |
|---|---|
| `npx playwright test -g "390x844"` | Run only the tests whose title matches |
| `npx playwright test --debug` | Step through a test in the inspector |
| `STRICT=1 npm run test:visual` | Compare with no tolerance at all, to measure natural variation |
| `WORKERS=1` | Run tests one at a time |
| `GPU=0` | Use SwiftShader instead of the GPU |

Reports, traces and results go to `.cache/`. The repository ignores that folder, and `tools/verify-build.mjs` skips it.

## Performance (M-003B)

`npm run perf` and `npm run perf:lighthouse` measure the site. These are measurements, not gates, and `npm test` does not run them. Method and commands are in `perf/README.md`; results and the ranked findings are in `perf/REPORT.md`.

## Accessibility audit (M-003C)

`npm run a11y` runs axe-core 4.14.0 scans, keyboard walks, reflow and text-spacing checks, target sizes, contrast (`tools/contrast.js`) and motion checks. It records findings and does not fail on them. The findings, the WCAG 2.2 AA coverage and the backlog are in `a11y/AUDIT.md`; machine-readable results are in `a11y/results/audit.json`.

## Layout

```text
playwright.config.mjs   projects: functional, visual (reduced motion)
server.mjs              the static server
lib/meridian.mjs        viewports, routes, opening pages, the scene menu, holds, settling, error and request watchers
specs/routes.spec.mjs   every page at every viewport (63 tests)
specs/journeys.spec.mjs learning journeys at 1440 × 900 and 390 × 844 (12 tests)
specs/states.spec.mjs   heights, WebGL, reduced motion, rapid scroll, Economics at rest (19 tests)
specs/visual.spec.mjs   screenshot baselines (46)
specs/perf.spec.mjs     performance scenarios (M-003B; the perf project, not part of npm test)
specs/a11y.spec.mjs     accessibility audit (M-003C; the a11y project, not part of npm test)
lib/a11y.mjs            axe, semantics, Tab walks, targets, reflow, text spacing, motion
a11y/                   summary script, results, AUDIT.md
lib/perf.mjs            timers, network and CPU meters, the instrumented engine's loader
perf/                   Lighthouse runner, engine instrumentation, overhead check, summaries, results, report
specs/__screenshots__/  the approved baselines
```

## Coverage

**Viewports.** 360 × 780, 375 × 667, 390 × 844, 768 × 1024, 1024 × 600, 1440 × 900, 1920 × 1080.

### Routes

Every page is opened at every viewport and checked for:

- status 200 and the page's title
- getting past its loader (a chapter's "Enter quietly", the home's loader)
- the globe present, or the no-WebGL state
- no page exception or console error
- no failed request
- no horizontal scroll

The pages:

- the home and the three hubs
- History KQ6 and its Paper 2 room
- the Economics and Geography chapters

A missing address must answer 404 with the site's 404 page, and its styles must apply.

### Journeys

Each runs at 1440 × 900 and 390 × 844.

- home → History hub → KQ6 → the first scene and the next, by the mouse wheel
- a jump from the scene menu, and back, with the cross-section drawn
- a link to Geography scene 15, which must draw its landscape, with at most 15 tile requests at 1440 px and 30 at 390 px (before Fix 2A: 172 and about 130)
- returning to a visited scene: nothing crosses the network twice
- Geography → Paper 2 while terrain is loading
- menu jumps in KQ6 and Economics

### States

- **Fix 1.** No heights requested at entry, nor in the following 4 s.
- **Heights pending, then drawn.** The DEM response is held back, then released.
- **Heights failed.** The DEM request is aborted.
- **Terrain ready.**
- **No WebGL.** `getContext('webgl')` returns null.
- **Rapid scroll** to the last scene.
- **Reduced motion.**
- **Economics scenes 14–16 at 360 and 390 px.** At rest for 10 s, they draw no frame and request no tile. This is the loop fixed in #12 and #13.

### Requests

Requests are intercepted only to hold back or fail the heights, in fresh contexts. Everywhere else the HTTP cache works as it does for a reader. Network transfers are counted from Chromium's own network events.

## Visual baselines

46 screenshots of the viewport, with navigation, panels, type and controls all in the picture:

- the home and the three hubs at all seven viewports (28)
- the Paper 2 room at 360, 768 and 1440 (3)
- the 404 page at 360, 768 and 1440 (3)
- each chapter's opening and one held scene at 390 and 1440 (12): KQ6 scene 14, Economics scene 15, Geography scene 15

**Reduced motion.** They run with reduced motion, where every page opens in its final state and the opening globe does not drift. The default-motion states are covered by the functional tests.

**When a picture is taken.**

1. The fonts are ready.
2. For a chapter, the camera has stopped at the scene's hold. The test steps down from the panel's top until the camera stops moving; a panel's top is not the hold.
3. The globe has settled: no new frame, and no terrain or heights request, for 1.5 s. There is a bounded timeout.
4. `toHaveScreenshot` waits until two captures in a row agree.

Nothing is masked.

**Tolerance.** `maxDiffPixelRatio` is 0.002. This was measured, not guessed:

- Three runs against the baselines with no tolerance (`STRICT=1`) found these differences:
  - 1 to 12 pixels on KQ6's opening and scene 14, the History hub at 390, and the 404 page at 360 (antialiasing on the globe)
  - 49 pixels on the Geography hub at 390
  - 280 pixels on the home at 1920 × 1080, which is 0.013%
- 0.002 is 561 pixels at 360 × 780 and 4,147 at 1920 × 1080.
- Three runs at that tolerance passed 46 of 46 each time.

**Updating a baseline.** If a picture differs after a deliberate change, review the diff in the report, then update with `npm run update`. Do not raise the tolerance to make an unexplained difference pass.

## Known issues (in production as well; not introduced by these tests)

| Issue | Where | How the tests treat it |
|---|---|---|
| The document is 365 px wide at 360 px, so it scrolls sideways by 5 px | History KQ6 at 360 × 780 | Marked `test.fail`: it fails until fixed, and then asks to be unmarked |
| The 404 page one folder deep logs 404s for `<folder>/assets/...`. The preload scanner fetches styles and scripts relative to the missing address before the inline script writes `<base>`. The page itself renders. | 404 page | Those console errors are allowed; any other error fails |
| "Transition was skipped" when a navigation interrupts a view transition | Navigation | Ignored as harmless |
| Reloading on a deep scene can restore a different scroll position | Chapters | Not tested; the root cause is not verified |
| A moving camera can exceed the phone texture budget for up to 0.3 s | Chapters on phones | Not tested |

## Not covered

- **Not run:** Safari and WebKit, Firefox, real phones and tablets, embedded browsers, the school network. Emulated viewports are not real devices.
- **Out of scope for M-003A:** Lighthouse and Core Web Vitals, and a full accessibility audit.
- **CI:** these tests are not part of `meridian-check`. The baselines need macOS and an Apple GPU, and the hosted CI runner is Ubuntu without a GPU. Running them in CI needs a separate workflow, proposed in the PR rather than added here.
