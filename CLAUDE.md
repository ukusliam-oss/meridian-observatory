# Meridian

A motion-heavy revision site for the I&S prefect: Cambridge IGCSE History 0470, Economics 0455 and
Geography 0460 for the 2027 exams. A calmer sibling built in a parallel session lives in `../is-desk`
(its CLAUDE.md lists the syllabus facts both sites rely on). Constraints shared with it: the school
is in mainland China, so nothing loads from a CDN (fonts and libraries are vendored); nothing needs
an account or typed input; ask before deploying.

**This folder is `meridian-observatory`** (2026-10-26): Meridian 1 (the dark "night observatory" design, commit
af7a163 of github.com/ukusliam-oss/meridian) refined in its own project, phase by phase, after
`../Meridian 1 정제 분석.md`. It has no remote yet: ask before creating one or pushing. `node_modules` and
`tools/.cache` are symlinks to `../meridian`'s. The paper-and-ink redesign (`../meridian`, remote meridian2) is a
different work: take techniques from it, never its paper, ink, overture or fonts, and do not edit it.

Plain HTML/CSS/JS, no runtime framework. Preview: the `observatory` entry in `../.claude/launch.json`
(python http.server on :5187).

```
npm run build          # bake land dots + bundle the three.js globe → assets/js/globe.js
python3 tools/pages.py # regenerate index/history/economics/geography.html from one shell
```

## Map
- `assets/css/site.css` — the whole design system, shared by hubs and chapters: tokens (dark default, light via
  `data-theme`, `data-tone="dark"` forces dark inside light pages), nav + phone tab bar, home, subject, labs.
  One type system everywhere: `.display/.h1/.h2` are light serif capitals whose `<em>` lead phrase sits on its own
  line in grey italic (only chapter openings, part titles and the Paper 2 title colour it); `.mono`/`.eyebrow`/`.tag` are Plex Mono capitals; Inter for reading.
  Glass comes in three grades only (`--glass-bar|card|panel` and their `-fx` blurs): the phone tab bar, cards (lenses,
  chips), panels (scene panels, legend, map labels, policy lab). The nav has no bar (`bar.js`): Plex Mono words floating
  on the page (brand left, subjects centred with a hairline under the current one, buttons right) and one black glass
  pill at the right end with a faint white aurora and a white pointer-lit rim, going to the page's next thing (daily
  quiz, practice, toolkit). A hub's sections take the subjects' place once the four steps pass (`subnav(el, from)`).
  Outside chapters the nav leaves on the way down and returns on the way up; in a chapter it stays and dims to 36%
  as the first screen leaves (`--study`, set by `chapter.js`; a hover wakes it). When the page has moved, a 16 px band
  under the nav blurs and fades what scrolls up. The chapter pill and scene menu are violet glass (`--brand`, the
  pill with `glass.js`'s pointer-lit `.stroke-border` rim; `aurora(canvas, { white, speed })`); `--accent`/`--accent-deep` is the subject colour for
  content. Small labels (eyebrows, mono headings, "Step 0n", panel labels, table heads, practice part letters) are one
  grey, `--text-3`, never the subject colour: colour is kept for headings' accents, links, tags and data, so the eye
  is not pulled around. Reading floor: labels 12px (`--fs-label`), notes 13px, nothing below 11px; small accent
  labels on light paper use `--accent-deep` for 4.5:1.
- `assets/js/core.js` — motion core: Lenis on GSAP's ticker, reveals, SplitText headlines,
  counters (`data-count`), magnetic buttons, nav tone, theme toggle (view-transition circle),
  sub-nav scroll spy, `store` (localStorage, try/catch).
- `assets/js/ui.js` — exam anatomy, Paper 2 topic finder, topic map, examples tracker, technique
  blocks, command words, flashcards, quiz.
- `assets/js/data/*.js` — all content. `subject.js` renders a page from one of these as a path in four steps
  (`STEPS`: know the exam, learn the content, answer questions, test yourself): step cards under the hero, section
  labels "Step 0n · …", a sub-nav grouped by step, and a "Next · step" link after each step's last section.
- `assets/js/practice.js` — written practice: one set of exam-style structured questions at a time,
  a mark-scheme reveal per part, a Level 2 and a stronger example answer side by side for the long
  part, data tables, a year-scaled line chart and a labelled S&D diagram. It injects
  `assets/css/practice.css` itself. Content: `assets/js/data/practice-{history,economics,geography}.js`
  (8, 7 and 6 sets). `subject.js` mounts it in step 3, after Exam technique and Command words.
  Nothing is typed or saved.
- `assets/js/labs/` — `timeline.js` (History), `supply-demand.js` (Economics), `dtm.js` (Geography).
- `assets/js/visuals.js` — subject hero art: year ribbon, live S&D, canvas contour map. History's years and the S&D
  diagram never sit behind the title: `heroArt` measures the box beside the title word and the box above the title
  block on every resize and puts the art in whichever lets it draw larger (`--art-l/t/w/h` on `.s-hero`).
- `src/globe.js` → `assets/js/globe.js` — the home globe (three 0.186, custom shaders), driven by
  `setProgress(f)`: 0 hero, 1 History, 2 Economics, 3 Geography.

## History scroll chapters (plan: `../Meridian History 설계 계획서.md`)
- `history/kq6.html` — KQ6 chapter: 33 scenes over one globe. `assets/js/chapter.js` renders the scenes from
  `assets/js/data/history/kq6.js` and turns scroll into globe progress (a scene holds while its panel is on the reading
  line; the camera flies in the gaps). `assets/css/chapter.css` adds the globe layer, scene panels, pill navigator and
  scene menu on top of site.css's type system (`--acc` = `--accent`). History is amber on the home page, the globe and its hub
  (`--hist`) and fully violet inside its chapters and on the hub cards that open them (`--brand`), with no
  blended amber-to-violet crossing (tried and dropped). Economics is green, Geography blue, inside and out. The pill ends in their progress ring (a 10% lilac disc, a
  faint track, a white bar filling from the top as the chapter is read, an arrow icon in the middle).
- `history/kq6-paper2.html` + `assets/js/paper2.js` — Paper 2 room from `kq6-paper2.js` (sources on paper cards).
  The History hub links both through `CHAPTERS` in `tools/pages.py`.
- `src/world/engine.js` → `assets/js/world.js` (`npm run world`). Per scene: a 2048 world texture plus a sharp detail
  texture around the camera target, cross-faded in the shader; relief from `assets/data/relief-{world,europe}.jpg`;
  borders, arrows, the iron curtain (real FRG/AUT vs GDR/CSK/HUN borders, via topojson mesh) and the Wall as tubes.
  `city: 'berlin'` paints the four sectors and the border strip; `kind: 'wall'` draws the real 1989 route.
- `tools/build-maps.mjs` (`npm run maps`) → `assets/data/borders.json`. Inputs go in `tools/.cache/` (gitignored):
  CShapes 2.0 (`icr.ethz.ch/data/cshapes/CShapes-2.0.geojson`, CC BY-NC-SA 4.0), and from `gdi.berlin.de` the WFS
  layers `berlinermauer:a_grenzmauer|b_hinterlandmauer|d_grenzstreifen` and `alkis_ortsteile:ortsteile`
  (both Datenlizenz Deutschland Zero 2.0). It keeps only state versions valid on a scene date of some
  `assets/js/data/history/kq*.js`, so rerun it after adding a chapter. Relief: Natural Earth SR_50M via `sips`.

## Economics scroll chapter (Topic 4.1–4.4)
- `economics/macro-policy.html` reuses `chapter.js`: `<body data-chapter>` names the data file
  (`assets/js/data/economics/macro-policy.js`, 41 scenes, reviewed by an Economics teacher on 2026-10-25); anything a chapter leaves out falls back to KQ6's
  values. Linked from the Economics hub through `ECON_CHAPTERS` in `tools/pages.py`. Case notes and URLs:
  `../Meridian Economics research notes.md` (outside the repo).
- Scene maps can colour countries by an indicator (`map.data`), raise needles (`map.spikes`), step through years in one
  panel (`years: [...]`, all engine scenes of a panel share `panel` and every texture), and show focus outlines with live
  value labels. Panels add line charts (`chart.series` items may be `{ label, ind, iso, from, to }`, read from econ.json),
  chains (`chain.steps`, `chain.globe` = the step that sends the map's flows), `evaluation`, `judgement`, `compare`, `cascade`.
- Toolkit adds `definitions` and `practiceSets` (rendered by `practice.js` with the schemes of `practice-economics.js`).
- Policy lab: `assets/js/policy-lab.js` + `assets/css/policy-lab.css` read `data/economics/policy-lab.js`; mounted in
  `#lab` when the chapter names `lab`. Classes are `plab__*` because site.css already owns `.lab`.
- `economics/engine-test.html` (unlinked, noindex) runs `engine-test.js`, one scene per engine feature.
- `tools/build-econ.mjs` → `countries-modern.json` (Natural Earth 50m, ISO3 keys, IMF names shortened for labels) and
  `econ.json` (IMF WEO October 2026, BIS policy rates, OWID Gini and CO₂). Axes are stored as ranges:
  `years: [first, last]`, `months: ['YYYY-MM', 'YYYY-MM']`.
- Checks before committing: `node tools/check-econ.mjs` (fields, sources, indicators and ISO3 codes, syllabus coverage,
  no em dashes; it also runs `tools/check-lab.mjs`, which checks every model effect against the direction table).

## Geography scroll chapters (plan: `../Meridian Geography 설계 계획서.md`)
- `geography/tectonics.html`: Topic 4 Tectonic hazards, 26 scenes from `assets/js/data/geography/tectonics.js` (status
  draft), linked from the Geography hub through `GEO_CHAPTERS` in `tools/pages.py`. Its toolkit reuses the Earthquakes
  set of `practice-geography.js` and adds a Volcanoes set; `chapter.js` loads `practice-{subject}.js` for the schemes.
  Test page: `geography/engine-test.html` (unlinked, noindex), one scene per engine feature.
- Checks before committing: `node tools/check-geo.mjs` (fields, sources, layers and landscapes exist, sections and
  markers inside their landscape, raised heights said in the text, syllabus 4.1.1–4.4.4 complete, toolkit, no em dashes).
- A Geography chapter sets `borders: 'none'` (a natural globe: no states, lighter land; `chapter.js` then loads
  `assets/data/geo/natural.json`) and `light: 'camera'` (the light rides with the camera, from the upper left; History and
  Economics keep the fixed light over the Atlantic, which leaves the Pacific dark).
- `tools/build-geo.mjs` → `assets/data/geo/`: `quakes.json` (USGS ComCat, M5.5+, 2000–2025, 12,850; lon, lat, depth,
  mag, decimal year flat), `volcanoes.json` (Smithsonian GVP Holocene list, 1,214), `plates.json` (PB2002 steps chained
  by kind: divergent, convergent, collision, transform, with mean relative speed), `natural.json` (Natural Earth 1:10m
  land, lakes and rivers up to rank 7, 200 m bathymetry; 10% of points kept, 60% inside the footprint of any Geography
  scene below 400 km), `shake/{event}.json` (USGS ShakeMap intensity isolines by MMI level), and `dem/{site}.png|json`
  (Copernicus GLO-30 heights packed in RGB, whole metres + 1000; only each site's window is read from the 1° COGs, cached
  per site in `tools/.cache/geo/`). Sites are listed in `SITES` in the build; `SITES=a,b` rebuilds just those.
- Scene map fields (engine in `src/world/layers.js`): `points: [{ id: 'quakes', minMag, years, play }, { id: 'volcanoes',
  types }]` (GPU points; quakes coloured by depth and sized by magnitude, `play` runs a clock through the years),
  `plates: true | [kinds]`, `relief3d: { site, exag, topo (0 landscape … 1 map), contours (m) }`, `section: { from, to,
  label }` (a white line over the landscape; the panel draws the profile from the same heights through
  `world.profile`), `cutaway: { lon }` (the northern octant from that longitude removed, layers on its faces; the earth
  shader discards it through `uCut`), `isolines: { id }` (ShakeMap intensity lines coloured IV to X). The legend
  switches to depth, volcano, boundary or intensity keys for these scenes. Markers on a landscape stand on its heights.

## Sound
- `assets/js/sound.js`, synthesised with Web Audio (no audio files), modelled on measurements of Cartier's "Le Chœur
  des Pierres" (one looped music bed, a hover sound, a click sound; nothing reacts to the scroll). Measured there: music
  −41 to −49 dB RMS, peaks −26 dB; 81% of the energy in 80–320 Hz, almost nothing above 1 kHz; a still E major
  pentatonic (E, F♯, B, C♯, G♯); stereo wider than mono (side/mid 1.2). Hover: B3 E5 G♯5 over ~5 s, 20 dB under the
  music. Click: a high shimmer near A6.
- Ours: eight voices (two detuned triangles and a soft sawtooth each) on three voicings of the same chord, every voice
  panned hard to one side with its own slow swell, low-passed near 900 Hz, a quiet low root, a generated 6 s warm hall;
  the voicing glides every 18–26 s. `bindUI()` chimes on hover of anything pressable and sparkles on clicks.
  Measured on a recording (2026-10-25): −41 to −47 dB, peaks −26.6 dB, side/mid 1.09, centroid 165–265 Hz by voicing.
- Every chapter has `sound: true`: its loader waits with "Enter with sound" (the default) and "Enter quietly", because
  browsers start audio only from a tap; the choice is kept (`store` 'sound') and a speaker in the nav bar switches it.
  Suspended while the tab is hidden.
- Tried and dropped: one voice per earthquake (cheap, too busy), and a loud dark noise bed with whooshes and booms
  (−12 to −17 dB, sub-heavy). Keep levels measured, not guessed: record the real output in the headless browser (tee
  every connection to the destination into a ScriptProcessor), then measure loudness, width and bands in the page.

## World engine
- `src/world/engine.js` → `assets/js/world.js`, `src/world/paint-worker.js` → `assets/js/world-paint.js` (`npm run world`
  builds both); `src/world/paint.js` is shared. Painting runs in the worker (OffscreenCanvas), else in idle time.
  Textures are stored bottom-up and uploaded with flipY off.
- Data maps are coloured in the shader: an id texture (country index + 1, scanline-filled, no antialiasing) and a float
  value texture (one row per engine scene). Four taps are coloured then filtered, so borders stay smooth. Years in one
  panel blend the values themselves. KQ6's painted fills are unchanged.
- A frame is drawn only when progress, size, a texture or a dashed line can change. `world.stats` holds paint times and
  frame CPU; `window.__meridianWorld` exposes it in the preview. `prepare(i)` paints and builds overlays in idle time.
- `chapter.js` keys its ticker on the scroll position, not the scene index (a held panel keeps the same index while its
  years, chain steps and chart move).
- Sharpness. `src/world/view.js` holds the camera (`placeCamera`, `setViewport`) and `footprint`: the screen
  corners cast onto the globe for a scene's held camera. Each detail texture covers that footprint (+14%) with square
  texels on the ground of ~0.55 CSS px (0.5 on phones, never finer than 3 m), up to 4096 px a side (2048 on phones), for the screen the page
  opened on; a big resize re-keys the states. Painted textures have mipmaps and are evicted by GPU bytes (320 MB, phones
  96 MB). `node tools/check-texels.mjs [chapter]` prints each scene's texture and relief density and fails if a detail
  texture is coarser than 1 CSS px per texel; its terrain column says which terrain level shows and its CSS px per texel.
- State fills are a glaze (alpha 0.62–0.85 over the land, `GLAZE` in paint.js) with a lighter band inside each edge;
  the focus glow is clipped inside its country. The Natural Earth relief fades to its mean where a texel would cover
  more than ~2–4 px (a blurred relief reads as a smudge). Land has a one-pixel film grain.
- Terrain and water. `node tools/build-terrain.mjs` reads Copernicus DEM GLO-90 tiles from AWS by range
  requests (cached in `tools/.cache/dem/`, ~390 KB/s from here: a full rebuild takes ~30 min) and writes 512 px shaded
  tiles to `assets/data/terrain/{z}/{x}_{y}.jpg` plus `index.json`: z0 (64 px/°, ~1.7 km, the 370 m data halved)
  wherever a scene below 2500 km looks, z1 (256 px/°, ~430 m) where a screen pixel is under ~1 km, z2 (512 px/°,
  ~215 m) where it is under 0.45 km; footprints from view.js on four reference screens, so rebuild after moving a
  camera (`ONLY=0,1` rebuilds just those levels). Flat ground is 0.75. The engine (`terrainOf`) composes a state's
  tiles over its detail box (at most 2048 px) on the main thread, coarse level first, and never waits for them: the
  base relief shows until they arrive. Tiles are JPEG quality 62 (the shading is soft; 78 was a quarter larger). `composeTiles` draws with high-quality smoothing and leaves out a level more
  than 3× finer than its canvas, so a continent-wide view never downloads z1. Attribution is in each chapter's note.
- `borders.json` now uses Natural Earth 1:10m land, rivers (+ Europe), lakes (+ Europe) and the 200 m bathymetry
  (`tools/.cache/ne/`, from naciscdn.org), keeps 80% of points in a central-European CORE box, and is quantized at 1e6.
  Border lines are only lines between two states (`mesh`), so the CShapes coast is never drawn beside the 1:10m one;
  fills are clipped to the land. Water is painted opaque with alpha 254 (`SHELF`, `WATERC`): the shader reads alpha
  254 as water (lit, never terrain-shaded), because partly transparent paint comes out of the upload darkened by its own
  alpha. Polygons from Natural Earth are filled even-odd, so holes stay holes whatever their winding. The shelf is a
  neutral slate just above the ocean's black, painted over the part of a box the bathymetry covers: a blue shelf
  matched the Western bloc's navy and Britain and France sank into it. Rivers thin out by rank as texels grow.
- Berlin. `city: 'berlin'` lays each sector's occupying power's flag over it (`FLAGS` in paint.js, drawn in code: the
  Stars and Stripes with 48, 49 or 50 stars by date, the Union Flag, the Tricolore, the Soviet flag) at 72% over a dark
  ground, on every Berlin scene from 1945 to 1989. Each flag is the smallest that covers its sector's bounds, slid so its
  canton or emblem comes near a chosen point (`at`); rivers and lakes are painted on top. The sector names are lettered
  in the map itself (Plex Mono capitals up to ~12 CSS px at the held camera, shrunk to fit a sector that is narrow on
  screen; detail textures only; the worker loads the font), then comes the border strip after August 1961. West
  Staaken (`staaken` in borders.json: the Staaken Ortsteil west of the 1989 front wall, cut with `polygon-clipping` in
  build-maps) leaves the British flag from 1 February 1951, when the GDR's police took it over. The Wall stands as a ribbon (`wallMesh`); a scene camera may set `tilt` (KQ6 13, 14
  and 30 look across the centre from 26–28 km at 32°). The June 1953 aerial photographs were tried as a base layer
  and dropped: the official mosaic is a patchwork of differently exposed frames and read as unsteady.
- Borders and focus outlines are `LineSegments2` (1.25 px and 2 px on screen, antialiased) at radius 1, scaled per frame
  to sit `alt / R_KM × 0.002` above the ground; the sphere is 512 × 256 (384 × 192 on phones) so its facets sag at most
  ~120 m and city lines stay on their fills in tilted views.

## Measured facts
- Map sharpness, phase 1 (2026-10-24, dev Mac, preview): KQ6 and the Economics chapter have every detail texture at
  0.55–0.84 CSS px per texel (desktop) and 0.52–0.70 (phone); before, Berlin was 2–5× and Budapest ~2× coarser than the
  screen. Scrolling KQ6: 16.7 ms median frame, 17.7 ms p95, 0.35 ms CPU per frame; the chapter loads in 2.1 s with the
  preview pane visible (a hidden pane pauses rAF, and the loader waits for frames).
- History chapter (2026-10-23): borders.json 414 KB (315 state versions, Europe detailed, rest coarse, Berlin layers);
  relief 174 + 366 KB; world.js 582 KB. Painting one scene's textures takes 55–120 ms on the dev Mac (Berlin about
  265 ms), so neighbours are painted in idle time while the reader reads. Checked in the preview at desktop and 375 px.
- Geography engine test (2026-10-25, dev Mac, headless): geo layers 180 KB compressed (quakes 114, plates 47,
  volcanoes 18) plus `natural.json` 408 KB; Fuji patch 386 KB. Drawing a frame 1.7 ms CPU on average (worst 5.6 ms).
  History and Economics checked after the change: same look, no errors.
- KQ6 on the live site (2026-10-25, empty cache, dev Mac): first load 891 KB in 21 files (borders.json 456 KB and
  world.js 171 KB compressed), globe ready in 2.6 s. Reading the whole chapter adds 4.7 MB of terrain tiles on desktop
  and 4.2 MB on a phone (counted with the engine's rules), all in the background.
- Globe bundle 595 KB, 163 KB gzipped; 5,748 land dots from Natural Earth 110m.
- Engine (2026-10-23, dev Mac, preview): id rasters 17–59 ms and Economics paints 160–207 ms, all in the worker; KQ6
  paints 9–19 ms in the worker. A scripted scroll through the engine test drew 202 frames at 0.88 ms CPU on average
  (worst 16 ms) and skipped 73 unchanged frames. The preview pane throttles rAF, so fps itself was not measured.
- Vendored: GSAP 3.15 (+ScrollTrigger, SplitText, Flip, DrawSVG, CustomEase), Lenis 1.3.27,
  Inter (48 KB) and Instrument Serif (2 × 21 KB).
- Contrast (2026-10-24, `tools/contrast.js`, folded content opened): home and the three hubs in both themes and the
  three chapter pages pass WCAG AA; KQ6 checked 1,105 text elements, the Economics chapter 1,158. Light theme tokens
  were darkened for it (`--hist` #995700, `--econ` #087a50, `--good`/`--bad`, `--text-2` .76).
- Checked in the preview on 2026-10-22: home lenses, all three labs and every mode, flashcards,
  quiz, light theme, 375 px phone layout (no horizontal scroll). No console errors.
- Where practice marks come from (checked 2026-10-22; each data file's `source` shows it on the
  page): History P1 4/6/10 and the (b)/(c) levels are from the published 0470/11 June 2025 mark
  scheme, because the 2027–28 syllabus states only parts (a), (b), (c). Economics follows the 2027
  specimen Paper 2 mark scheme v3 (Section B 2/4/6/8, point-marked (a)–(c), Table A for (d)).
  Geography follows the 2027 specimen P1/P2 mark schemes: Questions 2–4 run 1·2·3·4·3·5·7, 5-mark
  items keep 1 mark for evaluation, and the 7-mark (c) uses Table B (named example). The syllabus
  gives no per-part marks. Geography case-study figures in example answers are flagged on the
  page as not checked against official documents.

## Traps
- **Map colours stay the engine's own**: KQ6's focus fills, halos and marker glows are violet (`PALETTE.focus`
  `#a084ee`), not History amber. A chapter can name `accent` (Economics does); the engine sends it to the paint
  worker in its `init` message.
- **A view-transition-name makes its element a backdrop root**: on `.nav` it left the bar's backdrop blur with nothing
  behind it, so the page read sharp through the glass. **`[data-tone="dark"]` paints `--bg`**: on the nav it drew an
  opaque 64 px band that cut the hero's light (`.nav[data-tone] { background: none }`).
- **The preview pane throttles requestAnimationFrame** while nothing drives it, so the globe can
  look dim or mid-zoom in screenshots. Run a short rAF loop in the page before screenshotting.
- **Headless checks beat the pane** when the user hides it (rAF stops): `agent-browser --session kq6` (Chrome for
  Testing from the Playwright cache, `--executable-path` on first launch). To land on a scene's hold, scroll Lenis so
  the panel's top sits at `innerHeight / 2` (`lenis.scrollTo(y, { immediate: true, force: true })`), wait ~10 s, then
  hide `.sc__panel`, `.pillnav`, `.nav` before the screenshot. Reload changed modules and tiles with
  `fetch(url, { cache: 'reload' })` first. `performance` keeps only 250 resource entries unless raised.
- **Markers sit on the ground** (radius 1.000002): a lift of 6 km (the old 1.001) put labels ~300 px off their place
  on tilted city views.
- Painted canvases are bottom-up (`setTransform(1, 0, 0, -1, 0, H)`): row 0 is the south edge, so a pixel sampled at
  the top of the canvas is the south of the box. Colours reach the screen close to linear: `SHELF` (44, 52, 70) shows
  as about (5, 7, 12), so judge map colours from screenshots, not from the numbers.
- **Module cache**: python's http.server lets the browser cache JS modules; a `?v=` on the page
  does not refresh them. `fetch(url, { cache: 'reload' })` each changed module, then reload.
- `data-count` is global: core.js animates every element with it. Use another attribute for
  labels that only look like numbers (the timeline uses `data-pos`).
- Globe progress is read from the ticker each frame, not from ScrollTrigger `onUpdate` — that
  callback is skipped when a jump lands outside the trigger range.
- `[hidden]` needs `display: none !important`, or `.btn`'s display shows hidden buttons.
- **Lenis undoes `window.scrollTo`** in the preview. To reach a section, click its sub-nav link
  and wheel-scroll, or clone the node into a fixed overlay for a screenshot.

- **Polygon winding**: d3 fills a counter-clockwise ring as "the whole world except this". CShapes and the Berlin WFS
  use GeoJSON order, so the build rewinds and the engine checks again (`upright`); a flooded one-colour globe means this.
- **Downloads from here are slow** (ETH ran at about 20 KB/s). Keep the inputs in `tools/.cache/` and rebuild offline.
- **Jumping to a scene in the preview**: the browser restores the old scroll after reload and Lenis animates slowly in a
  hidden pane. Use `(await import('../assets/js/core.js')).lenis.scrollTo(y, { immediate: true })`, then nudge the wheel.
- Mono labels are upper-case; wrap "c." in `<span class="lc">` so "c.1989" stays lower-case.

## Not done
- Not deployed. The original Meridian 1 is still live at https://ukusliam-oss.github.io/meridian/ (af7a163); this
  project has no remote.
- Phase 2 (2026-10-26): colour is light only. `.btn--accent` is card glass with one glowing subject dot, `.tag` is a
  faint outline in the subject colour (never a fill), the command-word ladder is one white light rising by level; lens
  cards speak in serif and mono only; chapter titles keep their lead on one line and the question in two (at most three
  lines, at most half the screen wide). History's colour (amber outside, violet inside) is still undecided.
- Phase 3 (2026-10-26): `look` 1, the default, is the light's shaders: the rim and air scatter on the sun's side, the
  sea glints. `look` 2 (`?look=2`) adds `src/world/post.js` (bloom, shoulder, grade, reading grade; from the
  paper-and-ink engine without its paper or wash); `?look=0` is neither. Measured on the real GPU (built-in browser,
  M5, DPR 2, KQ6 hero, median / p95 GPU ms): 0: 6.6 / 10.5, 1: 7.2 / 11.5, 2: 17.9 / 21.4, so post is off by default
  (its MSAA half-float target was ~3 ms of it, bloom almost nothing). Headless runs had shown it as 1–2 ms. post.js encodes the clear colour into its target, or the stage comes out black. Berlin
  flags are a 42% glaze (were 72%) and the focus fill 40% (was 62%): measured, ordinary fills were already dark
  (L* 1–12); only the flags (Union Flag red C* 60) and the focus (C* 42–47) read as paint. Data maps move ΔE 0.5–1.5.
- Phase 4 (2026-10-26): chapters have a HUD on the world layer (`.hud`, chapter.js): corner ticks and, bottom right
  under the ribbon, the scene number and the camera's position (lat, lon, altitude from `world.camera`, read every
  frame). The panel no longer repeats the part tag and the count, the pill no longer repeats the count. Reveals light
  up (`brightness(.4)` → 1, 6 px, `DUR.text`) instead of rising 36 px; headlines keep their mask rise.
  The scene's date still shows three times (panel, ribbon, pill).
- Phase 5 (2026-10-26): the home's dot globe (`src/globe.js`, `npm run build`) has one sun, from the upper left and
  a little behind (`light`, in view space): dots are lit on its side and all but go out across the terminator (6% keeps
  the night's continents), the ocean's rim and the air glow on the sun's side with a warm band at the day's edge, and
  the subject's colour stays the air's. City lights on the night side were tried (Natural Earth places baked per dot)
  and dropped: they pulled the eye.
- Phase 6 (one camera across pages: the home's camera handed to the hub's dot globe and on to the chapter, whose dots
  resolved into territory) was built and dropped on 2026-10-26: the user found it awkward. Each page keeps its own
  opening. Do not retry a globe flight across pages without asking what felt wrong.
  motion, 5 the dot globe's physics, 6 one camera across pages.
- No automated browser tests; the data checks are `tools/check-econ.mjs` and `tools/check-lab.mjs`. For colour
  contrast, run `tools/contrast.js` in the preview (`const T = await import('/tools/contrast.js'); T.unfold(); T.audit()`):
  it lists text under WCAG AA. Load the theme fresh (localStorage `meridian:theme`) and turn transitions off first: a
  hidden preview pane never runs colour transitions, so switching theme in place gives false failures. Glass bars are
  measured against the page colour, not what is behind them.
- Economics: the chapter and the lab were reviewed by an Economics teacher on 2026-10-25. The Section A data room
  (`economics/data-room.html`) from the plan is not built. The chapter is live (pushing `main` deploys everything) and
  linked from the Economics hub with a "draft, not yet reviewed by a teacher" label; `engine-test.html` is reachable
  but unlinked and noindex.
- Geography: Tectonic hazards is a draft, not yet reviewed by a Geography teacher. Other topics are not started.
  `tools/build-terrain.mjs` reads the Geography chapters too: rerun it after adding scenes (slow: it downloads DEM).
- History chapters: only KQ6 exists (with its Paper 2 room, reviewed by a History teacher on 2026-10-25). Scenes have no field yet for the plan's
  "exam link" layer.
