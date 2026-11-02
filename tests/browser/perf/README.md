# Performance measurement (M-003B)

This folder measures performance for the site. Nothing in it is a pass/fail gate. The results and findings are in `REPORT.md`.

## Commands

From `tests/browser/`, after `npm ci` here and at the repository root. The root install provides esbuild for the instrumented engine.

```bash
npm run perf
npm run perf:lighthouse
node perf/lighthouse.mjs local 1
node perf/overhead.mjs
node perf/summarise.mjs
node perf/instrument.mjs
```

| Command | What it does |
|---|---|
| `npm run perf` | Runs the Meridian scenarios (the `perf` project, one worker), then `summarise.mjs` |
| `npm run perf:lighthouse` | Runs Lighthouse on the deployed site: 8 pages, mobile and desktop, 3 runs |
| `node perf/lighthouse.mjs local 1` | Runs Lighthouse on the local server, once. It starts the server itself. |
| `node perf/overhead.mjs` | Compares the instrumented engine with production. Needs `node server.mjs` running. |
| `node perf/summarise.mjs` | Rebuilds `results/` from `.cache/perf/raw.jsonl` |
| `node perf/instrument.mjs` | Builds only the instrumented engine |

Options: `PERF_RUNS=n` sets the number of runs (default 3). `PERF_READING=all` repeats the slow sequential-reading test in every run. Without it, that test runs once per width.

`summarise.mjs` rewrites `results/meridian.json` from whatever `.cache/perf/raw.jsonl` holds, so a new run replaces the committed baseline in the working tree. Commit it only on purpose.

Large outputs go to `.cache/`: full Lighthouse reports, raw rows and traces. Only the compact `results/*.json` files are committed.

## Environment of the committed baseline (2026-11-03)

| | |
|---|---|
| Machine | macOS on Apple M5 |
| GPU | ANGLE Metal; no other process running during the final runs |
| Browser | Playwright 1.64.1, Chromium 156.0.8078.4 (headless shell r1248) |
| Lighthouse | 13.6.0 |
| Pixel ratio and settings | DPR 1, en-GB, dark scheme |
| Local server | `server.mjs`: HTTP/1.1, **no compression**, `max-age=600` |
| Deployed site | GitHub Pages behind Fastly: HTTP/2, gzip |

No sleep or wake events occurred during the final runs (`pmset -g log` was checked).

**Lighthouse settings:**

- **Mobile:** its default, a Moto G Power-class screen (412 × 823, DPR 1.75), simulated slow 4G (150 ms RTT, 1.6 Mbit/s) and a 4× CPU slowdown.
- **Desktop:** its preset, 1350 × 940, simulated 10 Mbit/s, 40 ms, with no CPU slowdown.
- **Throttling is simulated** (Lantern) from the trace observed on this machine and its line. It is a model, not a phone.

## Instrumentation

`instrument.mjs` copies `src/world/engine.js`, adds counters at six places, and bundles it the way `npm run world` does. It fails if any place stops matching.

The page receives the instrumented copy in place of `assets/js/world.js` through CDP Fetch. Every other file loads normally and the HTTP cache is untouched; `page.route` would have turned the cache off.

Counters live in `window.__mx`:

- terrain compositions started and finished, per scene
- engine tile `fetch()` calls
- painted textures made
- evictions
- texture-cache MB
- "shown": the frame in which the scene under the camera first has its painted textures

**Overhead.** `overhead.mjs` ran production and the instrumented copy alternately, five times each, at 1440 × 900. The medians match:

| Measure | Production | Instrumented |
|---|---|---|
| Gate | 983 ms | 983 ms |
| Camera at rest after a jump | 1,127 ms | 1,127 ms |
| Main-thread task time over a jump | 0.665 s | 0.680 s |

The task-time difference is inside the run-to-run spread (0.65–0.75 s).

## Timer definitions

All times are page time (`performance.now()`), taken inside the page so the test runner's own delays are excluded.

| Metric | Starts | Stops |
|---|---|---|
| Gate | Page navigation start | The "Enter quietly" button exists, meaning the chapter's loader has finished loading |
| Chapter Ready | Navigation start | `html.is-ready` and the globe's first frame. The test's own delay in pressing the button is removed: Gate + max(0, ready − click). |
| Response | The click on a scene-menu item, as seen in the page (not the click that opens the menu on a phone) | The first frame in which the page has scrolled |
| Scene Ready | That click | The destination scene is active, the camera has moved and then not moved for 3 frames, and the destination's painted textures are on screen |
| Terrain Ready | That click | The destination's own terrain composition has finished. It is null when the terrain was already cached or the scene needs none. Neighbours are not included; `allTerrainDone` reports them separately for the link test. |
| Heights Ready | That click | The destination's "Loading heights" line is removed (scenes with a landscape only) |
| Click event | | The Event Timing duration of the item click: input to next paint. This is one synthetic interaction, not INP. |
| Paper 2 usable | Paper 2's own navigation start | 6 sources, 5 question parts, and `is-ready` |
| Idle | | 10 s at rest after settling: frames drawn, compositions, tile `fetch()` calls, paints, evictions, CPU task time |
| Resources | | Per class (terrain, dem, data, script, style, font, image, html): requests, responses from the network, responses from the HTTP cache, and transferred bytes. Taken from Chromium's network events. |
| Memory | | Texture-cache occupancy (counter), the JS heap (CDP), and the texture data created ("uploadMB", an estimate of GPU upload volume, not GPU time) |

**Settled** means the engine drew no new frame and no terrain or heights request was open for 2 s.

**Cold and warm.**

- Every test starts from a fresh browser profile, so its first visit is cold.
- The home's warm pass reloads in the same profile.
- A revisit within a chapter is warm for its tiles.

## Known measurement limits

See `REPORT.md`, *Uncertainty*.
