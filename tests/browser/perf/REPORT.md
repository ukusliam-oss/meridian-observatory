# Meridian performance baseline (M-003B, 2026-11-03)

**What was measured.** Production commit `1dbd0ae` on macOS (Apple M5), with Chromium 156 driven by Playwright 1.64.1 and Lighthouse 13.6.0. Method, timers and commands are in `README.md`; machine-readable results are in `results/`.

**What this report does not show.** Nothing here was measured on a phone, in Safari, or on the school network. Mobile figures come from a narrow viewport or from Lighthouse's simulated device.

## 1. Lighthouse (lab)

Deployed site (GitHub Pages: HTTP/2, gzip). Three runs each, every run in a fresh browser. Values are medians; brackets give the range where runs differed.

| Page | Mobile score | LCP ms | CLS | TBT ms | Speed Index ms | Desktop score | LCP ms | CLS | TBT ms | Transfer KB |
|---|---|---|---|---|---|---|---|---|---|---|
| Home | 1.00 | 914 | 0.000 [0–0.049] | 12 | 1542 | 0.98 | 247 | 0.091 [0.025–0.091] | 0 | 515 |
| History hub | 1.00 | 1680 | 0.008 | 25 | 1339 | 1.00 | 270 | 0.016 | 0 | 652 |
| Economics hub | 1.00 | 930 | 0.000 [0–0.120] | 48 | 1516 | 1.00 | 245 | 0.035 | 0 | 434–652 |
| Geography hub | 1.00 | 930 | 0.000 [0–0.134] | 27 | 1650 | 1.00 | 244 | 0.044 | 0 | 652 |
| History KQ6 | 0.79 | 973 | 0.002 | **819** [686–868] | 3424 | 0.95 | 318 | 0.000 | 177 | 1479 |
| Economics chapter | 0.93 [0.73–0.95] | 958 | 0.002 [0–**0.383**] | 314 | 2574 | **0.78** | 297 | **0.596** (3 of 3) | 35 | 1345 |
| Geography chapter | **0.73** | 909 | 0.002 | **1297** [1250–1493] | 3664 | 0.88 | 262 | 0.013 | 301 | 1619 |
| Paper 2 room | 0.99 [0.77–1.00] | 2006 | 0.000 [0–**0.573**] | 0 | 1759 | **0.80** | 437 | **0.462** (3 of 3) | 0 | 487 |

FCP was 903–1127 ms on mobile and 241–355 ms on desktop for every page. 48 runs, no errors.

### How to read these

- **The chapters' LCP is not the learning content.** It is their loader and its "Enter" choice, which wait for the reader. The time to the content is Chapter Ready in section 3.
- **The local server distorts transfer sizes.** A single run against `server.mjs` (`results/lighthouse-local.json`) transferred 2–14× more bytes, because that server does not compress and the hubs prefetch later pages. Read the deployed table for transfer sizes.
- **The first set of runs was replaced.** It partly overlapped other measurements on this machine, so all 64 runs were repeated with nothing else running. Only the repeat is reported.

## 2. Core Web Vitals: what can and cannot be said

| Kind | Status |
|---|---|
| Lab (Lighthouse, Chromium) | Measured: LCP, CLS, TBT above |
| Synthetic interaction | Measured: the Event Timing duration of a click on a scene-menu item was 16–48 ms (median 24–32 ms) at 390 and 1440 px. One interaction in a lab; **not INP**. TBT is not INP either. |
| Field (CrUX) | **NOT AVAILABLE.** The PageSpeed Insights API returned 429 (daily quota for keyless calls). With the site's traffic, CrUX is unlikely to hold data for it anyway. No analytics or tracking was added. |

## 3. Meridian metrics (local server, the machine's GPU)

Medians of 3 runs, each from a fresh profile. Times are milliseconds unless marked. The full ranges are in `results/meridian.json`.

### Entering a chapter (cold)

| Chapter | Gate / Chapter Ready, 390 px | Gate / Chapter Ready, 1440 px | Main-thread task | Script + data transferred (uncompressed) |
|---|---|---|---|---|
| KQ6 | 722 / 752 | 730 / 761 | 0.83 s | 1.1 MB + 1.9 MB |
| Economics | 287 / 321 | 297 / 332 | 0.43 s | 1.2 MB + 1.4 MB |
| Geography | 946 / 977 | 954 / 985 | 1.05 s | 1.1 MB + 2.4 MB |
| Geography, slow line (1.6 Mbit/s, 150 ms) | **14,333 / 14,366** | | | |

### Moving between scenes (scene menu, cold for the destination)

| Move | Response | Terrain Ready | Heights Ready | Scene Ready |
|---|---|---|---|---|
| KQ6 → scene 14, 1440 / 390 | 50 / 45 | 1155 / 1118 | | **3142 / 3126** |
| Economics → scene 15, 1440 / 390 | 51 / 47 | 1166 / 1148 | | 1124 / 924 |
| Geography → scene 15, 1440 / 390 | 34 / 33 | 1199 / 1151 | 1194 / 1139 | **2577 / 2576** |
| Geography → scene 26, 1440 / 390 | 32 / 28 | 877 / 849 | 836 / 816 | 1926 / 1909 |
| Geography link to scene 15, from page start, 1440 / 390 | | 2615 / 2426 | 2603 / 2394 | 3906 / 3891 |
| Rapid scroll 26 → 4 over 3 s, 1440 / 390 | | 1439 / 1478 | 1419 / 1458 | 4039 / 3831 |
| Geography → scene 15 on the slow line, 390 | 37 | 3654 | **6750** | 2553 |

**The 1.1 s camera flight.** In a five-run check, the camera stopped about 1.13 s after the click. Scene Ready includes that flight. Where Scene Ready is much later (KQ6 and Geography scene 15), the destination's painted map arrives after the camera has stopped (finding 3).

**Neighbours.** For the link to scene 15, the destination's own terrain and its neighbours' all finished within 13 ms of each other (2628 ms at 1440 px). Fix 2A loads neighbours after the destination.

### Returning and reading

| Scenario | Result |
|---|---|
| Returning to a visited scene | Scene Ready 341–776 ms; nothing transferred over the network (terrain all from the HTTP cache or memory) |
| Sequential reading, scenes 1–17, 5 s each, 1440 and 390 | Every one of the 10 scenes with terrain had it ready on arrival. Scene Ready 99–334 ms. Terrain transferred: 4.2 MB at 1440, 2.7 MB at 390 (uncompressed). |
| Geography → Paper 2, local | Usable 28–32 ms after its navigation start, both right after a jump and after settling |
| Geography → Paper 2, slow line | Usable 834 ms after its navigation start |
| Home, cold | FCP 40, page LCP about 4.76 s, loader fully gone 7.83 s |
| Home, warm (same session) | Loader gone 2.58 s; scripts and fonts all from the HTTP cache |

### At rest and memory

**At rest.** Every chapter and width drew 0 frames in 10 s, with 0 compositions, 0 tile `fetch()` calls, 0 paints and 0 evictions. This includes Economics scenes 14–16 at 360 and 390 px (the #12/#13 fix holds). Main-thread task time over those 10 s was 0.29–0.44 s, mostly the measurement's own rAF watcher.

**Memory.** The texture cache stayed within its budget:

| Width | Budget | Measured |
|---|---|---|
| 360 and 390 px | 96 MB | 77.6–94.7 MB |
| 1440 px | 320 MB | 296–318 MB |

JS heap was 22–35 MB after entering a chapter.

**Texture data made by one jump (GPU upload volume, estimated, not timed):**

| Jump | 1440 px | 390 px |
|---|---|---|
| Economics → scene 15 | 1.35 GB (43 evictions) | 0.49 GB |
| KQ6 → scene 14 | 0.59 GB | 0.22 GB |
| Geography → scene 15 | 0.50 GB | 0.11 GB |

## 4. Ranked bottlenecks

| # | Finding | Where and when | Measured | Likely cause and evidence | Consequence for a student | Confidence | Suggested Phase 2 work | Risk | Priority |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Main thread blocked while a chapter starts | Geography and KQ6 chapters, at load | Lighthouse mobile TBT 1.3 s (Geography) and 0.8 s (KQ6). Geography's longest task is `world.js` at 1.73 s on a 4× slowed CPU. Locally 1.05 s and 0.83 s of task time. | `world.js` builds the map data and layers on the main thread at start. Lighthouse attributes the long task to it; `natural.json` and the borders are the largest data files. | On an ordinary phone the page may freeze for a second or more just after entering (not measured on a phone) | High that the cost is real; medium on its size on phones | Build geometry in the worker, or parse layers lazily per scene | Medium | High |
| 2 | Layout shift on Paper 2 and the Economics chapter | Paper 2 at 1350 px and in 1 of 3 mobile runs; Economics chapter at 1350 px and in 1 of 3 mobile runs | CLS 0.46–0.57 (Paper 2); 0.38–0.60 (Economics) | Paper 2: the footer is pushed down when `paper2.js` renders the sources and parts. Economics: the policy lab's aim gauge SVG (`.plab__aim svg`) changes size. Both elements are named in Lighthouse's layout-shift audit. | The page jumps under the reader's eyes; a poor CLS rating | High | Reserve the rendered content's space; give the gauge SVG fixed dimensions | Low | High (small, cheap) |
| 3 | The destination's map arrives after the camera has stopped | Long jumps: KQ6 scene 14, Geography scene 15 | Scene Ready 2.6–3.1 s against a camera stop at about 1.13 s | The destination's painted textures are painted only after arrival: idle-time preparation paints the current scene's neighbours, not a jump's target. The instrumented "shown" signal and the 5-run camera timing show the gap. | For 1.5–2 s the new scene shows the previous scene's map, or none | Medium–high | Start painting the target when the jump is chosen (`goTo` knows it) | Low–medium | Medium–high |
| 4 | Data volume on a slow line | Geography entry, and heights after a jump | Gate 14.3 s at 1.6 Mbit/s; heights 6.8 s after the jump | 2.4 MB of data and 1.1 MB of script uncompressed (Lighthouse: 1.6 MB on Pages with gzip). The DEM (748 KB) waits behind the destination's tiles. | A long wait on a school or mobile network | Medium. The local server has no gzip, so these numbers overstate Pages. | Trim or split layer data by scene; check Pages compression; serve a lighter DEM | Medium | Medium |
| 5 | The home's first-visit overture | Home, first visit in a session | Loader gone 7.83 s; page LCP about 4.76 s; 2.58 s on a return visit | By design: the loader shows for at least 2.6 s, then a staged reveal follows (`home.js`). A click or key skips it. | A long wait before the home can be used, on any connection | High that it is the design | A product decision: a shorter overture, or skip after the first visit | Low | Medium (design) |
| 6 | GPU texture churn on large screens | Economics and KQ6 jumps at 1440 px | 1.35 GB and 0.59 GB of texture data per jump, with evictions near the 320 MB budget | 4096-px detail and data layers on desktop | Possible stutter on weaker GPUs (hypothesis: no GPU time measured, no other device) | Low–medium | Measure on modest hardware before acting | Medium | Low until measured |

**What is not a problem in this baseline:**

- Scene-menu response: 24–53 ms to the first scroll.
- Click event durations: 16–48 ms.
- Rendering at rest: 0 frames.
- Revisits: nothing from the network.
- Sequential reading: terrain is ready on arrival.
- Paper 2 after leaving a chapter.
- The hubs' Lighthouse scores of 1.00.

**Known defects carried from M-003A** (not performance):

- KQ6 at 360 px is 5 px too wide.
- The 404 page one folder deep fetches its assets from the wrong folder before `<base>` is written.

## 5. Mobile and desktop

**Close at both widths, at this GPU:**

- chapter entry, within 10 ms
- Response
- Terrain Ready

**Different:**

- **Texture memory.** Phones work at 78–95 MB of a 96 MB budget; desktop at about 300 MB of 320 MB.
- **Terrain transferred while reading.** 2.7 MB at 390 px against 4.2 MB at 1440 px, because phones use coarser detail boxes.
- **Lighthouse mobile.** It simulates a 4× slower CPU and a slow line, so TBT and Speed Index grow on the chapters.

Real phones have weaker GPUs and CPUs than this M5. Mobile results here are the best case.

## 6. Cold and warm

**Cold visits** download about 1.1–1.2 MB of script and 1.4–2.4 MB of data per chapter on the local server (uncompressed).

**Warm visits:**

- The home's reload took scripts and fonts from the HTTP cache, with 0 bytes transferred.
- Revisiting a scene transferred nothing.

**Not measured:** warm runs more than 10 minutes apart. Pages' `max-age=600` turns those into revalidations.

## 7. Uncertainty

- **Sample size.** Three runs per scenario; sequential reading once per width. Run-to-run spread was small locally (most timings within ±2%). Lighthouse mobile CLS and score varied between runs on the Economics chapter and Paper 2, so it should be read from all runs, not one.
- **GPU.** One Apple M5. Phones and older laptops will be slower, especially at painting and at the start-up work in finding 1.
- **Server.** The local server is HTTP/1.1 without gzip. Pages is HTTP/2 with gzip. The local slow-line figures therefore overstate download time.
- **Throttling.** Lighthouse's throttling is simulated. The slow-line scenario uses Chromium's network emulation instead, which keeps the HTTP cache.
- **Overlap.** The first measurement round overlapped Lighthouse and was discarded. Narrow-screen menu timings from that round were also discarded: the timer had started at the click that opens the menu. Both were re-run, and only the clean runs are reported.
- **Sleep.** None occurred during the final runs.

## 8. Suggested Phase 2 priorities

1. Reserve space for Paper 2's rendered content and fix the size of the policy-lab gauge. This is the cheapest CLS fix (finding 2).
2. Move the chapter's start-up map building off the main thread, or make it lazy per scene, then re-measure TBT (finding 1).
3. Start painting a jump's destination when the jump is chosen (finding 3).
4. Measure on a real phone and on the school network before any data-volume work (finding 4, and the gaps).
5. Decide the home overture's length as a design question (finding 5).

## 9. Phase 2 status

**Finding 2 (layout shift): fixed by WP-03 (2026-11-08).** Not yet released. The shifts were traced with the Layout Instability API, not taken from Lighthouse's score.

**Economics: 0.38-0.60.** `policy-lab.js` added its own stylesheet and drew the lab before that stylesheet applied. The gauges (`.plab__aim svg`) took the browser's default size, 361 px tall, for a frame, then shrank to 64 px. The local server delivered the stylesheet in the same frame, which is why the shift showed only on Pages.

- **Fix:** the lab is drawn once its stylesheet has loaded.
- **Measured** with the stylesheet held back 0.3 or 1 s, three runs each: desktop 0.596 → 0.001, mobile 0.386 → 0.003.

**Paper 2: 0.46-0.57, and up to 0.73 on Pages.**

- **The notes and footer.** The room is written in by `paper2.js`, so its notes and footer drew at the top of the empty page and were pushed out.
  - **Fix:** `main` and the footer stay hidden until `html.is-ready`. If the script never runs (it failed to load), a CSS animation shows them after 8 s anyway, so the back link and the footer's links stay usable. This also holds under reduced motion.
- **The hero.** Where the title's serif arrived late, the hero moved again (0.12-0.18).
  - **Fix:** the serif is preloaded, and `is-ready` waits for it (2 s at most).
- **Measured with Lighthouse locally** (both presets, 3 runs): desktop 0.458 → 0 and mobile 0.565 → 0. LCP rose by 49 and 28 ms.
- **Measured with the serif held back 1 s:** desktop 0.583 → 0 and mobile 0.738 → 0. Past the 2 s cap it is 0.06-0.07.

**Not measured yet:** production CLS on Pages, which is checked after release.

