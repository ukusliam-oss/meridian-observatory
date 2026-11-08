// Geography 0460, Topic 4: Tectonic hazards. One scroll chapter over a natural globe (no state borders).
// Earthquakes, volcanoes, plate boundaries, intensity isolines and landscape heights come from assets/data/geo
// (tools/build-geo.mjs), so figures that are also in the text were read from the same files: plate speeds from PB2002,
// volcano types and last eruptions from the Smithsonian list, heights from Copernicus DEM GLO-30. Case facts were
// checked against two sources where possible; death tolls give their source and date because counts differ.
// Status: draft, not yet reviewed by a Geography teacher. Checked by tools/check-geo.mjs.
import geoPractice from '../practice-geography.js';

const COMCAT = 'usgs-comcat', GVP = 'gvp', PB = 'pb2002', DEM = 'cop-dem', SYL = 'cie-0460';
const WORLD = { lat: 8, lon: 160, alt: 17500 };

export default {
  id: 'tectonics', subject: 'geography', status: 'draft', borders: 'none', light: 'camera', accent: '#5fb0ff',
  sound: true, // assets/js/sound.js: the loader asks once, then the ambient soundscape follows the scroll
  title: 'Tectonic hazards', question: 'Why does the ground shake and burn?',
  hero: { camera: { lat: 10, lon: 150, alt: 18000 } },
  ribbon: ['1940-01-01', '2026-01-01'], heroDate: '2000-01-01',
  pill: { part: 'Topic 4', date: 'Tectonic hazards' },
  syllabus: [
    { id: '4.1.1', text: 'The layers of the Earth' },
    { id: '4.1.2', text: 'Tectonic plates and how they move' },
    { id: '4.1.3', text: 'Types of plate boundary' },
    { id: '4.2.1', text: 'Processes at each type of boundary' },
    { id: '4.2.2', text: 'Characteristics of earthquakes' },
    { id: '4.2.3', text: 'Types of volcano' },
    { id: '4.2.4', text: 'Active, dormant and extinct' },
    { id: '4.2.5', text: 'Features of volcanoes' },
    { id: '4.2.6', text: 'Volcanic hazards' },
    { id: '4.3.1', text: 'Why people live in areas at risk' },
    { id: '4.3.2', text: 'Impacts of earthquakes' },
    { id: '4.3.3', text: 'Impacts of volcanic eruptions' },
    { id: '4.3.4', text: 'Measuring the size of an event' },
    { id: '4.4.1', text: 'Primary and secondary responses' },
    { id: '4.4.2', text: 'Managing the impacts' },
    { id: '4.4.3', text: 'A detailed example of an earthquake' },
    { id: '4.4.4', text: 'A detailed example of a volcanic eruption' },
  ],
  scenes: [
    // ── Introduction ────────────────────────────────────────────────────────
    {
      id: 'tq-0', part: 'Introduction', date: '2025-12-31', dateLabel: '2000 to 2025',
      camera: WORLD,
      map: { borders: 'none', points: [{ id: 'quakes', play: true, years: [2000, 2025] }], plates: true },
      title: 'A restless planet',
      body: `<p>Every dot is a real earthquake of magnitude 5.5 or more, shown in the year it happened. Keep this panel on screen and watch them appear from 2000 to 2025.</p>
        <p>They do not fall at random. They line up along narrow belts, and those belts match the coloured lines: the edges of the Earth's <b>tectonic plates</b>.</p>
        <p>This chapter explains why, what earthquakes and volcanoes do to the people who live near them, and how their impacts can be reduced.</p>`,
      why: 'Paper 1 Section B often opens a tectonics question with a map like this one and asks you to describe the pattern.',
      facts: [{ text: 'The USGS catalogue lists 12,850 earthquakes of magnitude 5.5 or more between 2000 and 2025.', src: COMCAT }],
      check: { q: 'Where do most earthquakes happen?', a: 'In narrow belts along the edges of tectonic plates, especially around the Pacific Ocean.' },
      syllabus: ['4.1.3'], sources: [COMCAT, PB, SYL],
    },

    // ── Part 1: inside the Earth ────────────────────────────────────────────
    {
      id: 'tq-1', part: 'Inside the Earth', date: '2025-12-31', dateLabel: 'The Earth today',
      camera: { lat: 28, lon: 40, alt: 16000 },
      map: { borders: 'none', cutaway: { lon: 20 } },
      title: 'Inside the Earth: four layers',
      body: `<p>The <b>inner core</b> is a solid ball of iron and nickel, about 1,220 km in radius. Around it, the <b>outer core</b> is liquid metal. Its top is about 2,900 km below the surface.</p>
        <p>The <b>mantle</b> is about 2,900 km thick. It is solid rock, but it is so hot that over millions of years it slowly flows.</p>
        <p>The <b>crust</b> is the thin outer skin: about 5 km thick under the oceans and about 30 km under the continents. The crust and the rigid top of the mantle together form the <b>lithosphere</b>, which is broken into plates.</p>`,
      why: 'You need to name the layers in order and describe each one. The lithosphere is the layer that moves.',
      misconception: { wrong: 'The mantle is a sea of liquid magma.', right: 'The mantle is solid rock that flows very slowly because it is so hot. Magma forms only in small areas where the rock partly melts.' },
      facts: [
        { text: 'The inner core is solid, with a radius of about 1,220 km; the liquid outer core begins about 2,900 km down.', src: 'usgs-interior' },
        { text: 'The crust is generally about 5 km thick under the oceans and averages about 30 km under the continents, reaching about 100 km under large mountain ranges.', src: 'usgs-interior' },
      ],
      check: { q: 'Which layer of the Earth is liquid?', a: 'The outer core.' },
      syllabus: ['4.1.1'], sources: ['usgs-interior'],
    },

    // ── Part 2: plates and boundaries ───────────────────────────────────────
    {
      id: 'tq-2', part: 'Plates and boundaries', date: '2025-12-31', dateLabel: 'The plates today',
      camera: { lat: 12, lon: -45, alt: 16500 },
      map: { borders: 'none', plates: true },
      title: 'The plates and how they move',
      body: `<p>The lithosphere is split into about a dozen large <b>plates</b> and many small ones. The largest is the <b>Pacific plate</b>. Others include the North American, South American, Eurasian, African, Indo-Australian, Nazca and Antarctic plates.</p>
        <p>Plates move a few centimetres a year. Heat from the core sets up slow <b>convection currents</b> in the mantle. Where plates move apart, new rock pushes them outwards (<b>ridge push</b>). Where an old, cold, heavy plate sinks into the mantle, it drags the rest of the plate after it (<b>slab pull</b>).</p>
        <p>The coloured lines show what happens at each edge: plates move apart (teal), one sinks under another (red), two continents collide (amber) or plates slide past each other (lilac).</p>`,
      why: 'Questions ask you to name plates on a map and explain why they move: give the process, not just "convection".',
      facts: [
        { text: 'Relative plate speeds along the boundaries, from the PB2002 model: about 19 mm a year across Iceland, about 30 mm a year in the South Atlantic and up to about 150 mm a year on the East Pacific Rise.', src: PB },
      ],
      check: { q: 'Give two forces that make plates move.', a: 'Any two of: convection currents in the mantle, ridge push, slab pull.' },
      syllabus: ['4.1.2'], sources: [PB],
    },
    {
      id: 'tq-3', part: 'Plates and boundaries', date: '2025-12-31', dateLabel: 'Þingvellir, Iceland',
      camera: { lat: 64.255, lon: -21.1, alt: 30, tilt: 48, ground: 0.6 },
      map: { borders: 'none', relief3d: { site: 'thingvellir', exag: 2.5 }, section: { from: [64.255, -21.33], to: [64.255, -20.87], label: 'west to east' } },
      title: 'Divergent boundary: plates move apart',
      body: `<p>Iceland sits on the <b>Mid-Atlantic Ridge</b>, where the North American and Eurasian plates move apart. This is a <b>divergent</b> (constructive) boundary.</p>
        <p>As the plates separate, the crust stretches and cracks. Blocks of land drop down between faults to form a <b>rift valley</b>. Magma rises into the gap, so new crust is made here. The eruptions are usually of runny basalt lava and are rarely explosive.</p>
        <p>The landscape is shown at real heights, raised two and a half times. The section below crosses the rift at Þingvellir: the steep cliffs on each side are the edges of the plates' faults.</p>`,
      why: 'For each boundary you must describe what the plates do, what landforms result, and whether there are earthquakes and volcanoes.',
      facts: [
        { text: 'The North American and Eurasian plates move apart at about 19 mm a year across Iceland (PB2002).', src: PB },
        { text: 'Heights from Copernicus DEM GLO-30.', src: DEM },
      ],
      check: { q: 'Why are volcanic eruptions at divergent boundaries usually gentle?', a: 'The magma is runny basalt, so gas escapes easily and the lava flows rather than exploding.' },
      syllabus: ['4.1.3', '4.2.1'], sources: [PB, DEM],
    },
    {
      id: 'tq-4', part: 'Plates and boundaries', date: '2025-12-31', dateLabel: 'The Andes',
      camera: { lat: -24, lon: -69, alt: 3600 },
      map: { borders: 'none', points: [{ id: 'quakes' }, { id: 'volcanoes' }], plates: ['convergent'] },
      title: 'Convergent boundary: one plate sinks',
      body: `<p>Off the west coast of South America the oceanic <b>Nazca plate</b> moves towards the continental <b>South American plate</b>. The oceanic plate is denser, so it sinks under the continent. This is <b>subduction</b>, at a convergent (destructive) boundary.</p>
        <p>Where the plate bends down, a deep <b>ocean trench</b> forms. The plates stick and then slip, causing powerful earthquakes. As the sinking plate goes deeper it heats up and releases water, the rock above partly melts, and magma rises to form a chain of <b>volcanoes</b>: the Andes.</p>
        <p>Look at the colours: shallow earthquakes (red) lie near the coast, deeper ones (blue) lie further inland, following the sinking plate down.</p>`,
      why: 'Subduction zones produce the most dangerous hazards: the largest earthquakes, tsunamis and explosive volcanoes.',
      facts: [
        { text: 'The Nazca plate converges with the South American plate at about 80 mm a year (PB2002).', src: PB },
        { text: 'Earthquake depths from the USGS catalogue, 2000–2025.', src: COMCAT },
      ],
      check: { q: 'Why does the oceanic plate sink under the continental plate?', a: 'Oceanic crust is denser than continental crust.' },
      syllabus: ['4.1.3', '4.2.1'], sources: [PB, COMCAT, GVP],
    },
    {
      id: 'tq-5', part: 'Plates and boundaries', date: '2025-12-31', dateLabel: 'The Himalayas',
      camera: { lat: 27.988, lon: 86.925, alt: 42, tilt: 50, ground: 5.5 },
      map: { borders: 'none', relief3d: { site: 'everest', exag: 1 }, section: { from: [27.87, 86.925], to: [28.11, 86.925], label: 'south to north' }, markers: [{ at: [27.988, 86.925], label: 'Everest' }] },
      title: 'Collision boundary: two continents meet',
      body: `<p>When two plates carrying continents move together, neither sinks: continental crust is too light. Instead the rock is squeezed, folded and pushed upwards. This is a <b>convergent collision</b> boundary.</p>
        <p>The Indian plate has been moving north into the Eurasian plate for tens of millions of years. The result is the Himalayas, the highest mountains on Earth. The heights here are real and not exaggerated.</p>
        <p>Collision zones have strong earthquakes, such as Nepal in 2015, but almost no volcanoes, because no plate sinks deep enough to melt.</p>`,
      why: 'A classic exam trap: collision boundaries have earthquakes but no volcanoes.',
      facts: [
        { text: 'The Indian and Eurasian plates converge at about 49 mm a year in this area (PB2002).', src: PB },
        { text: 'Heights from Copernicus DEM GLO-30.', src: DEM },
      ],
      check: { q: 'Why are there no volcanoes in the Himalayas?', a: 'Neither plate is subducted, so no rock sinks deep enough to melt and form magma.' },
      syllabus: ['4.1.3', '4.2.1'], sources: [PB, DEM],
    },
    {
      id: 'tq-6', part: 'Plates and boundaries', date: '2025-12-31', dateLabel: 'The San Andreas Fault',
      camera: { lat: 35.18, lon: -119.72, alt: 36, tilt: 46, ground: 1.4 },
      map: { borders: 'none', relief3d: { site: 'sanandreas', exag: 2 }, section: { from: [35.07, -119.88], to: [35.29, -119.56], label: 'south-west to north-east' } },
      title: 'Conservative boundary: plates slide past',
      body: `<p>In California the <b>Pacific plate</b> moves north-west past the <b>North American plate</b>. The plates slide sideways past each other, so crust is neither made nor destroyed. This is a <b>conservative</b> (transform) boundary.</p>
        <p>The plates do not slide smoothly. They lock together, stress builds up for years, then the rock suddenly slips and causes an earthquake. There are no volcanoes, because there is no magma.</p>
        <p>In the Carrizo Plain, shown here at twice its real height, the fault is a straight line across the land. Streams that cross it have been bent sideways by the movement.</p>`,
      why: 'Conservative boundaries show that earthquakes need moving plates, not magma.',
      facts: [
        { text: 'The Pacific and North American plates move past each other at about 46 mm a year here (PB2002).', src: PB },
        { text: 'Heights from Copernicus DEM GLO-30.', src: DEM },
      ],
      check: { q: 'What happens to crust at a conservative boundary?', a: 'It is neither created nor destroyed: the plates slide past each other.' },
      syllabus: ['4.1.3', '4.2.1'], sources: [PB, DEM],
    },
    {
      id: 'tq-7', part: 'Plates and boundaries', date: '2025-12-31', dateLabel: '2000 to 2025',
      camera: { lat: 10, lon: -170, alt: 18500 },
      map: { borders: 'none', points: [{ id: 'quakes', minMag: 6 }, { id: 'volcanoes' }], plates: true },
      title: 'Describing a distribution: TEA',
      body: `<p>To describe a pattern on a map, use <b>TEA</b>: the <b>Trend</b>, an <b>Example</b> and an <b>Anomaly</b>.</p>
        <p><b>Trend</b>: earthquakes and volcanoes are found in long, narrow belts along plate boundaries. <b>Example</b>: a ring around the Pacific Ocean, from New Zealand through Japan and Alaska to the Andes, often called the <b>Ring of Fire</b>. <b>Anomaly</b>: Hawaii, in the middle of the Pacific plate, far from any boundary.</p>
        <p>Hawaii sits above a <b>hotspot</b>, a plume of hot rock rising from deep in the mantle. As the plate moves over it, a chain of volcanic islands forms.</p>`,
      why: 'Describe questions want the pattern with named places and an exception. Do not explain unless asked.',
      facts: [
        { text: 'Earthquakes of magnitude 6 and over, 2000–2025, from the USGS catalogue.', src: COMCAT },
        { text: 'Holocene volcanoes from the Smithsonian Global Volcanism Program.', src: GVP },
        { text: 'The USGS describes the Ring of Fire as the most seismically and volcanically active zone in the world.', src: 'usgs-ring' },
      ],
      check: { q: 'Why is Hawaii an anomaly?', a: 'It has volcanoes in the middle of a plate, far from a boundary, because it lies over a hotspot.' },
      syllabus: ['4.1.3'], sources: [COMCAT, GVP, 'usgs-ring'],
    },

    // ── Part 3: earthquakes ─────────────────────────────────────────────────
    {
      id: 'tq-8', part: 'Earthquakes', date: '2023-02-06', dateLabel: '6 February 2023',
      camera: { lat: 37.3, lon: 37.1, alt: 900 },
      map: { borders: 'none', points: [{ id: 'quakes', years: [2023, 2023] }], plates: ['transform', 'convergent'], markers: [{ at: [37.226, 37.014], label: 'Epicentre, magnitude 7.8' }] },
      title: 'Focus, epicentre and seismic waves',
      body: `<p>An earthquake starts at the <b>focus</b> (hypocentre), the point underground where the rock breaks. The point on the surface directly above it is the <b>epicentre</b>.</p>
        <p>Energy spreads out from the focus as <b>seismic waves</b>. They are strongest near the epicentre and weaken as they travel.</p>
        <p>On 6 February 2023 the rock broke along the <b>East Anatolian Fault</b> in Türkiye, at a focus about 10 km deep. The map shows every earthquake of magnitude 5.5 or more in the area that year: most are aftershocks along the faults.</p>`,
      chain: { title: 'How an earthquake happens', steps: ['Plates move but the rocks at the fault are locked together', 'Stress builds up over years or centuries', 'The rock suddenly breaks and slips at the focus', 'Energy is released as seismic waves', 'The ground shakes, most strongly near the epicentre'] },
      why: 'Define focus and epicentre precisely: many answers mix them up.',
      facts: [{ text: 'USGS: magnitude 7.8 at 01:17 UTC on 6 February 2023, epicentre 37.226°N 37.014°E, depth 10 km.', src: 'usgs-pazarcik' }],
      check: { q: 'What is the difference between the focus and the epicentre?', a: 'The focus is where the earthquake starts underground; the epicentre is the point on the surface directly above it.' },
      syllabus: ['4.2.2'], sources: ['usgs-pazarcik', COMCAT],
    },
    {
      id: 'tq-9', part: 'Earthquakes', date: '2025-12-31', dateLabel: '2000 to 2025',
      camera: { lat: 37, lon: 141, alt: 3200 },
      map: { borders: 'none', points: [{ id: 'quakes' }], plates: ['convergent', 'transform'] },
      title: 'Depth tells the story',
      body: `<p>East of Japan the Pacific plate sinks under the plates that carry Japan, at a deep ocean trench.</p>
        <p>Look at the colours. Earthquakes near the trench are shallow (red). Under Japan they are deeper (amber), and under the Sea of Japan some are more than 300 km deep (blue). Together they trace the sinking plate as it dives into the mantle.</p>
        <p>Shallow earthquakes do the most damage, because the waves have less distance to travel before they reach the surface.</p>`,
      why: 'Explaining a pattern of earthquake depths is a common AO2 skill question.',
      misconception: { wrong: 'All earthquakes happen near the surface.', right: 'Earthquakes can start up to about 700 km deep, inside sinking plates. Most damaging ones are shallow.' },
      facts: [
        { text: 'Earthquake depths from the USGS catalogue, 2000–2025.', src: COMCAT },
        { text: 'The Pacific plate converges on the plates under Japan at about 86 to 92 mm a year (PB2002).', src: PB },
      ],
      check: { q: 'Why are shallow earthquakes usually more damaging than deep ones?', a: 'The seismic waves lose less energy before reaching the surface, so the shaking is stronger.' },
      syllabus: ['4.2.2', '4.2.1'], sources: [COMCAT, PB],
    },
    {
      id: 'tq-10', part: 'Earthquakes', date: '2023-02-06', dateLabel: '6 February 2023',
      camera: { lat: 37.6, lon: 37.4, alt: 1400 },
      map: { borders: 'none', isolines: { id: 'us6000jllz' }, markers: [{ at: [37.226, 37.014], label: 'Epicentre' }] },
      title: 'Magnitude and intensity',
      body: `<p><b>Magnitude</b> measures the energy an earthquake releases. Scientists now use the <b>moment magnitude scale</b>; the older <b>Richter scale</b> works in a similar way. Both are logarithmic: each whole number up means about 10 times more ground movement and about 32 times more energy.</p>
        <p><b>Intensity</b> measures how strongly the ground shook at a place, from what people felt and the damage done. It uses the <b>Mercalli scale</b>, in Roman numerals from I (not felt) to XII.</p>
        <p>This is an <b>isoline map</b> of intensity for the Türkiye earthquake. Each line joins places that shook equally hard. Intensity is highest along the fault and falls with distance.</p>`,
      why: 'One earthquake has one magnitude but many intensities. Isoline maps appear in the skills section of the syllabus.',
      facts: [
        { text: 'Each whole number of magnitude is a tenfold increase in measured amplitude and about 32 times more energy.', src: 'usgs-magnitude' },
        { text: 'Intensity contours from the USGS ShakeMap for the magnitude 7.8 Pazarcık earthquake.', src: 'usgs-pazarcik' },
      ],
      check: { q: 'How much more energy does a magnitude 7 earthquake release than a magnitude 6?', a: 'About 32 times more.' },
      syllabus: ['4.3.4'], sources: ['usgs-magnitude', 'usgs-pazarcik'],
    },

    // ── Part 4: volcanoes ───────────────────────────────────────────────────
    {
      id: 'tq-11', part: 'Volcanoes', date: '2025-12-31', dateLabel: 'Mount Fuji, Japan',
      camera: { lat: 35.36, lon: 138.73, alt: 42, tilt: 50, ground: 2 },
      map: { borders: 'none', relief3d: { site: 'fuji', exag: 1.5 }, section: { from: [35.3606, 138.6], to: [35.3606, 138.86], label: 'west to east' } },
      title: 'Strato-volcano: steep and explosive',
      body: `<p>A <b>strato-volcano</b> (composite cone) is built of layers of ash and thick, sticky lava that does not flow far before it cools. So it is tall with <b>steep sides</b>.</p>
        <p>The magma is rich in silica and traps gas, so eruptions can be <b>explosive</b>. Strato-volcanoes form mainly at subduction zones. Mount Fuji, shown at one and a half times its real height, is a classic example.</p>`,
      why: 'Compare volcano types by shape, lava, eruption style and where they form.',
      facts: [
        { text: 'The Smithsonian list classifies Fuji as a stratovolcano; its last eruption ended in 1708.', src: GVP },
        { text: 'Heights from Copernicus DEM GLO-30.', src: DEM },
      ],
      check: { q: 'Why are strato-volcanoes steep-sided?', a: 'Their thick, sticky lava does not flow far before it cools, and layers of ash build up near the vent.' },
      syllabus: ['4.2.3'], sources: [GVP, DEM],
    },
    {
      id: 'tq-12', part: 'Volcanoes', date: '2022-11-27', dateLabel: 'Mauna Loa, Hawaii',
      camera: { lat: 19.45, lon: -155.55, alt: 110, tilt: 44, ground: 3 },
      map: { borders: 'none', relief3d: { site: 'maunaloa', exag: 2 }, section: { from: [19.475, -156.0], to: [19.475, -155.1], label: 'west to east' } },
      title: 'Shield volcano: wide and gentle',
      body: `<p>A <b>shield volcano</b> is built from many flows of runny <b>basalt lava</b> that travel a long way before cooling. So it is very wide with <b>gentle slopes</b>, shaped like a warrior's shield lying on the ground.</p>
        <p>Gas escapes easily from runny magma, so eruptions are usually <b>effusive</b>: lava pours out instead of exploding. Shield volcanoes form over hotspots and at divergent boundaries. Mauna Loa in Hawaii, shown here at twice its real height, last erupted in 2022.</p>`,
      why: 'Compare the cross-section with Fuji\'s: the slope angle is the key difference.',
      facts: [
        { text: 'The Smithsonian list classifies Mauna Loa as a shield volcano; its last eruption was in 2022.', src: GVP },
        { text: 'The 2022 eruption began on 27 November in the summit caldera; it was Mauna Loa\'s first eruption since 1984.', src: 'usgs-maunaloa' },
      ],
      check: { q: 'Why do shield volcanoes have gentle slopes?', a: 'Their runny basalt lava flows a long way before it cools, so it spreads out.' },
      syllabus: ['4.2.3'], sources: [GVP, 'usgs-maunaloa', DEM],
    },
    {
      id: 'tq-13', part: 'Volcanoes', date: '1943-02-20', dateLabel: 'Parícutin, Mexico',
      camera: { lat: 19.493, lon: -102.251, alt: 13, tilt: 46, ground: 3.7 },
      map: { borders: 'none', relief3d: { site: 'paricutin', exag: 1.5 }, section: { from: [19.493, -102.29], to: [19.493, -102.21], label: 'west to east' } },
      title: 'Cinder cone: small and short-lived',
      body: `<p>A <b>cinder cone</b> is a small, steep cone of loose fragments (cinders) thrown out of a single vent. It usually erupts for only a few years, then never again.</p>
        <p>Parícutin in Mexico began in a farmer's cornfield on 20 February 1943. Within nine years it had built a cone about 424 m high and buried two villages in lava and ash. It has not erupted since 1952. The landscape is raised one and a half times its real height.</p>`,
      why: 'Cinder cones complete the three types in the syllabus. Parícutin is a rare case where scientists watched a volcano from birth to end.',
      facts: [
        { text: 'Parícutin opened in a cornfield on 20 February 1943, grew to 424 m above the field and stopped erupting in 1952.', src: 'paricutin' },
        { text: 'Heights from Copernicus DEM GLO-30.', src: DEM },
      ],
      check: { q: 'Give two ways a cinder cone differs from a strato-volcano.', a: 'It is much smaller, and it usually erupts only once, for a few years, from a single vent.' },
      syllabus: ['4.2.3'], sources: ['paricutin', DEM],
    },
    {
      id: 'tq-14', part: 'Volcanoes', date: '2025-12-31', dateLabel: 'Mount Fuji, Japan',
      camera: { lat: 35.36, lon: 138.73, alt: 75, tilt: 0, ground: 1.2 },
      map: { borders: 'none', relief3d: { site: 'fuji', exag: 1, topo: 1, contours: 100 }, section: { from: [35.3606, 138.6], to: [35.3606, 138.86], label: 'west to east' } },
      title: 'From landscape to map: contours',
      body: `<p>Seen from above, the same volcano becomes a <b>contour map</b>. Each line joins points at the same height: one every 100 m, with a darker <b>index contour</b> every 500 m.</p>
        <p>Where the lines are <b>close together</b> the ground is <b>steep</b>, as near Fuji's summit. Where they are far apart the slope is gentle. A circle of lines getting smaller towards the middle shows a hill or a cone.</p>
        <p>The white line is the same cross-section as before. To draw a cross-section in the exam, mark where each contour crosses the line, then plot those heights.</p>`,
      why: 'Every paper can include a topographical map. Reading contours and cross-sections is tested in the skills questions.',
      facts: [{ text: 'Contours drawn from Copernicus DEM GLO-30 heights.', src: DEM }],
      check: { q: 'What do contour lines that are close together show?', a: 'Steep ground.' },
      syllabus: ['4.2.3'], sources: [DEM],
    },
    {
      id: 'tq-15', part: 'Volcanoes', date: '2025-12-31', dateLabel: 'The last 10,000 years',
      camera: { lat: 20, lon: 120, alt: 15500 },
      map: { borders: 'none', points: [{ id: 'volcanoes' }], plates: true },
      title: 'Active, dormant or extinct?',
      body: `<p>An <b>active</b> volcano has erupted recently, or is erupting now, and is likely to erupt again. A <b>dormant</b> volcano has not erupted for a long time but could erupt again. An <b>extinct</b> volcano is not expected to erupt again.</p>
        <p>The triangles mark volcanoes that have erupted in the last 10,000 years. The line between dormant and extinct is not sharp: some volcanoes thought to be extinct have erupted after thousands of years of silence.</p>`,
      why: 'Learn the three definitions, and be ready to explain why the classification is uncertain.',
      facts: [{ text: 'The map shows 1,214 volcanoes with eruptions in the last 10,000 years, from the Smithsonian list.', src: GVP }],
      check: { q: 'What is a dormant volcano?', a: 'One that has not erupted for a long time but could erupt again.' },
      syllabus: ['4.2.4'], sources: [GVP],
    },
    {
      id: 'tq-16', part: 'Volcanoes', date: '2010-10-26', dateLabel: 'Merapi, 2010',
      camera: { lat: -7.56, lon: 110.44, alt: 36, tilt: 48, ground: 1.6 },
      map: { borders: 'none', relief3d: { site: 'merapi', exag: 1.4 }, markers: [{ at: [-7.541, 110.446], label: 'Crater' }] },
      title: 'Parts of a volcano and its hazards',
      body: `<p>Magma collects in a <b>magma chamber</b> under the volcano. It rises through the <b>main vent</b> and erupts from the <b>crater</b> at the top. Some magma escapes through side vents to build <b>secondary cones</b>.</p>
        <p>Merapi in Java is one of the most active volcanoes in Indonesia. In 2010 it produced the hazards in the syllabus: <b>pyroclastic flows</b> (avalanches of hot gas and rock that race downhill), <b>ash falls</b>, <b>tephra</b> (rock fragments thrown into the air), <b>toxic gases</b> and, when rain washed the ash down the valleys, <b>lahars</b> (volcanic mudflows).</p>
        <p>The landscape is shown with its heights raised 1.4 times.</p>`,
      why: 'Name the hazard and say how it harms people: pyroclastic flows cause most deaths close to a volcano.',
      facts: [
        { text: 'The 2010 eruption lasted from 26 October to late November. Pyroclastic flows caused most of the 386 deaths, and more than 350,000 people were evacuated.', src: 'merapi-2010' },
        { text: 'Lahars reached Yogyakarta, about 30 km from the summit, and washed away bridges.', src: 'merapi-2010' },
      ],
      check: { q: 'What is a lahar?', a: 'A volcanic mudflow, formed when rain or melting snow mixes with ash and flows down valleys.' },
      syllabus: ['4.2.5', '4.2.6'], sources: ['merapi-2010', 'nasa-merapi', DEM],
    },
    {
      id: 'tq-17', part: 'Volcanoes', date: '2010-04-14', dateLabel: 'April 2010',
      camera: { lat: 59, lon: -2, alt: 4200 },
      map: { borders: 'none', points: [{ id: 'volcanoes' }], arrows: [{ from: [63.63, -19.62], to: [55, 2], kind: 'pressure' }, { from: [63.63, -19.62], to: [52.5, 12], kind: 'pressure' }], markers: [{ at: [63.63, -19.62], label: 'Eyjafjallajökull' }] },
      title: 'One eruption, a whole continent grounded',
      body: `<p>In April 2010 the Icelandic volcano <b>Eyjafjallajökull</b> erupted under a glacier. Meltwater chilled the magma, which shattered into fine ash, and winds blew the ash cloud south-east over Europe.</p>
        <p>Ash can stop jet engines, so most of Europe's airspace closed from 15 to 20 April. About 100,000 flights were cancelled.</p>
        <p>It was a small eruption, but its impact reached far beyond Iceland: a reminder that a hazard's impact depends on where its effects travel.</p>`,
      why: 'Impacts happen at different scales: local, national and global. This eruption is a strong example of a global economic impact.',
      facts: [
        { text: 'More than 100,000 commercial flights were cancelled during the eruption.', src: 'icao-eyja' },
        { text: 'IATA estimated airlines lost about US$1.7 billion in revenue.', src: 'iata-eyja' },
      ],
      check: { q: 'Why did a small Icelandic eruption affect people across Europe?', a: 'Winds carried the fine ash over Europe, and airspace was closed because ash can damage jet engines.' },
      syllabus: ['4.3.3', '4.2.6'], sources: ['icao-eyja', 'iata-eyja', GVP],
    },

    // ── Part 5: living with tectonic hazards ────────────────────────────────
    {
      id: 'tq-18', part: 'Living with the risk', date: '2025-12-31', dateLabel: 'Java, Indonesia',
      camera: { lat: -7.5, lon: 110, alt: 1100 },
      map: { borders: 'none', points: [{ id: 'volcanoes' }], markers: [{ at: [-7.541, 110.446], label: 'Merapi' }] },
      title: 'Why live near a volcano?',
      body: `<p>Java is one of the most crowded islands in the world, and it is lined with active volcanoes. Why do so many people live in danger?</p>
        <p><b>Fertile soil</b>: weathered volcanic ash makes rich soil for growing crops such as rice. <b>Geothermal energy</b> and hot water. <b>Tourism</b>: visitors come to see the volcanoes. <b>Minerals</b> such as sulphur. <b>Jobs and family</b>: people stay where their land, work and relatives are.</p>
        <p>Some people <b>have no choice</b>: they cannot afford to move. Others believe the risk is low, because large eruptions are rare in a lifetime, or they trust warnings to give them time to leave.</p>`,
      why: 'Explain reasons in pairs: a benefit (pull) and a constraint (why people cannot or do not leave).',
      evaluation: ['How often the volcano erupts and how violently', 'Whether people trust the warning system', 'Whether they have land, work or money elsewhere'],
      facts: [{ text: 'Holocene volcanoes from the Smithsonian list; Merapi is classed as a stratovolcano that erupts frequently.', src: GVP }],
      check: { q: 'Give two reasons why people live near active volcanoes.', a: 'Any two of: fertile soil, geothermal energy, tourism, minerals, jobs and family ties, no money to move.' },
      syllabus: ['4.3.1'], sources: [GVP],
    },
    {
      id: 'tq-19', part: 'Living with the risk', date: '2023-02-06', dateLabel: 'February 2023',
      camera: { lat: 37.4, lon: 37.2, alt: 1200 },
      map: { borders: 'none', points: [{ id: 'quakes', years: [2023, 2023] }], markers: [{ at: [37.226, 37.014], label: 'Pazarcık' }] },
      title: 'Classifying impacts',
      body: `<p>Exam questions ask for impacts in categories. Use three at once:</p>
        <p><b>Social, economic or environmental.</b> <b>Primary</b> (caused directly by the shaking or eruption) or <b>secondary</b> (following later, as a result). And <b>scale</b>: local, national or global.</p>
        <p>The Türkiye–Syria earthquake shows all of them. Buildings collapsed and people were killed at once. Weeks and months later, survivors lived in tents and containers, businesses closed and rebuilding cost billions.</p>`,
      compare: { left: 'Primary impacts', right: 'Secondary impacts', rows: [
        { k: 'Social', l: 'Deaths and injuries as buildings collapse', r: 'Homelessness; disease where water and sanitation fail' },
        { k: 'Economic', l: 'Homes, roads and factories destroyed', r: 'Lost jobs and income; the cost of rebuilding' },
        { k: 'Environmental', l: 'Landslides; ground cracks along the fault', r: 'Fires; pollution from damaged pipelines and industry' },
      ] },
      why: 'A 4-mark "describe the impacts" answer scores best when it covers more than one category with specific details.',
      facts: [
        { text: 'In February 2024 Türkiye\'s interior minister gave the country\'s death toll as 53,537; with Syria the combined official toll was 59,488.', src: 'afp-2024' },
        { text: 'The minister said the earthquake affected 14 million people in Türkiye.', src: 'afp-2024' },
      ],
      check: { q: 'Is homelessness after an earthquake a primary or a secondary impact?', a: 'Secondary: it follows from the collapse of buildings.' },
      syllabus: ['4.3.2'], sources: ['afp-2024', COMCAT],
    },
    {
      id: 'tq-20', part: 'Living with the risk', date: '2010-02-27', dateLabel: '2010',
      camera: { lat: -9, lon: -74, alt: 13500 },
      map: { borders: 'none', points: [{ id: 'quakes', years: [2010, 2010], minMag: 6.5 }], plates: ['convergent', 'transform'], markers: [{ at: [18.44, -72.57], label: 'Haiti, January 2010' }, { at: [-36.12, -72.9], label: 'Chile, February 2010' }] },
      title: 'Same year, very different outcomes',
      body: `<p>In 2010 two large earthquakes struck the Americas six weeks apart. Haiti's, in January, had a magnitude of 7.0. Chile's, in February, had a magnitude of 8.8: it released hundreds of times more energy.</p>
        <p>Yet Haiti's earthquake killed far more people. Estimates range from about 100,000 to over 300,000. In Chile, about 550 people died.</p>
        <p>The difference was mostly human. Chile had strict building codes, trained emergency services and money to respond. Haiti, a much poorer country, had no national building code, and its capital was crowded with weak buildings.</p>`,
      compare: { left: 'Haiti, 12 January 2010', right: 'Chile, 27 February 2010', rows: [
        { k: 'Magnitude', l: '7.0', r: '8.8' },
        { k: 'Deaths', l: 'About 100,000 to over 300,000 (estimates vary)', r: 'About 550' },
        { k: 'Building codes', l: 'No national code', r: 'Strict codes, enforced' },
        { k: 'Response', l: 'Relied heavily on international aid', r: 'Mostly national, quickly organised' },
      ] },
      misconception: { wrong: 'The bigger the earthquake, the more people die.', right: 'Deaths depend more on building quality, population density, wealth and preparation than on magnitude alone.' },
      why: 'This comparison answers "why do impacts differ between countries?", one of the most common evaluation questions.',
      facts: [
        { text: 'Haiti death estimates range from about 100,000 to the government\'s revised figure of 316,000; Chile had about 550 deaths. Haiti had no national building code; Chile had strict requirements.', src: 'fiu-haiti-chile' },
        { text: 'Chile\'s earthquake was far more energetic: magnitude 8.8 against 7.0.', src: 'usgs-magnitude' },
      ],
      check: { q: 'Give two reasons why Haiti suffered more deaths than Chile in 2010.', a: 'Any two of: weak buildings and no building code, dense population in the capital, poverty, fewer emergency services and less preparation.' },
      syllabus: ['4.3.2', '4.3.4'], sources: ['fiu-haiti-chile', 'usgs-magnitude', COMCAT],
    },

    // ── Part 6: managing the impacts ────────────────────────────────────────
    {
      id: 'tq-21', part: 'Managing the impacts', date: '2023-02-20', dateLabel: 'After February 2023',
      camera: { lat: 37.4, lon: 37.2, alt: 1800 },
      map: { borders: 'none', points: [{ id: 'quakes', years: [2023, 2023] }] },
      title: 'Primary and secondary responses',
      body: `<p><b>Primary responses</b> happen in the hours and days after an event: search and rescue, first aid, emergency shelter, food and clean water.</p>
        <p><b>Secondary responses</b> follow over months and years: rebuilding homes and infrastructure, restoring jobs and services, and making buildings and plans safer for next time.</p>`,
      compare: { left: 'Primary: hours to weeks', right: 'Secondary: months to years', rows: [
        { k: 'People', l: 'Search and rescue teams dig survivors out', r: 'Counselling and support for families' },
        { k: 'Shelter', l: 'Tents and emergency camps', r: 'New homes built to safer standards' },
        { k: 'Services', l: 'Field hospitals, clean water, food', r: 'Schools, hospitals and roads rebuilt' },
        { k: 'Economy', l: 'Emergency funds', r: 'Grants and loans to restart businesses' },
      ] },
      why: 'Questions on a named example often ask you to describe responses: separate primary from secondary.',
      facts: [{ text: 'Earthquakes of magnitude 5.5 and over in the area in 2023, from the USGS catalogue.', src: COMCAT }],
      check: { q: 'Give one primary and one secondary response to an earthquake.', a: 'Primary: for example search and rescue. Secondary: for example rebuilding homes to stronger standards.' },
      syllabus: ['4.4.1'], sources: [COMCAT],
    },
    {
      id: 'tq-22', part: 'Managing the impacts', date: '2025-12-31', dateLabel: 'Japan',
      camera: { lat: 36, lon: 138, alt: 2400 },
      map: { borders: 'none', points: [{ id: 'quakes' }, { id: 'volcanoes' }], plates: ['convergent', 'transform'] },
      title: 'Monitoring, prediction, protection, planning',
      body: `<p>Tectonic hazards cannot be stopped, so the aim is to reduce their impacts.</p>
        <p><b>Monitoring and prediction</b>: volcanoes give warnings, such as small earthquakes, swelling ground and gas, so scientists can often warn people to leave. Earthquakes cannot be predicted, but sensors can detect the first waves and send a warning seconds before strong shaking arrives.</p>
        <p><b>Protection</b>: earthquake-resistant buildings with deep foundations, steel frames and shock absorbers. <b>Planning</b>: hazard maps that keep schools and hospitals out of the most dangerous areas. <b>Preparation</b>: drills and emergency kits. <b>Technology</b> links them all.</p>`,
      evaluation: ['Cost: resistant buildings save the most lives but are expensive, so LICs often rely on education and drills', 'Whether warnings are trusted and acted on', 'Whether rules are enforced, not just written'],
      why: 'Evaluate questions want each strategy with a strength and a limitation, then a judgement.',
      facts: [{ text: 'Earthquakes and volcanoes from the USGS and Smithsonian lists.', src: COMCAT }],
      check: { q: 'Why can volcanic eruptions often be predicted, but earthquakes cannot?', a: 'Volcanoes show warning signs before they erupt, such as ground swelling, small earthquakes and gas; earthquakes give no reliable warning.' },
      syllabus: ['4.4.2'], sources: [COMCAT, GVP],
    },
    {
      id: 'tq-23', part: 'Managing the impacts', date: '2025-12-31', dateLabel: 'Judgement',
      camera: WORLD,
      map: { borders: 'none', points: [{ id: 'quakes', minMag: 7 }], plates: true },
      title: 'Do richer countries always cope better?',
      body: '<p>A typical 7-mark question asks you to evaluate. Here are both sides on one question, and a supported judgement.</p>',
      judgement: {
        for: ['Richer countries can afford resistant buildings and enforce codes, as in Chile in 2010.', 'They have trained emergency services and the money to rebuild quickly.', 'Monitoring and early warning systems are expensive to run.'],
        against: ['Rules do not help if they are not enforced: in Türkiye, an amnesty let many buildings that broke the rules stand until the 2023 earthquake.', 'Very large events can overwhelm any country, as the tsunami did in Japan in 2011.', 'Cheap measures such as education and drills save many lives in poorer countries.'],
        verdict: 'Usually, but not always. Wealth makes protection possible, but it only works if building rules are enforced and people are prepared. How well a country copes depends on its preparation as much as its income.',
      },
      why: 'Level 3 answers make a judgement and support it with evidence from both sides.',
      facts: [{ text: 'Earthquakes of magnitude 7 and over, 2000–2025, from the USGS catalogue.', src: COMCAT }],
      check: { q: 'Name one reason why a richer country may still suffer serious impacts.', a: 'For example: building rules not enforced, or an event so large it overwhelms defences.' },
      syllabus: ['4.4.2', '4.3.2'], sources: [COMCAT, 'fiu-haiti-chile', 'voa-codes'],
    },

    // ── Part 7: detailed examples ───────────────────────────────────────────
    {
      id: 'tq-24', part: 'Detailed examples', date: '2023-02-06', dateLabel: '6 February 2023',
      camera: { lat: 37.5, lon: 37.2, alt: 1100 },
      map: { borders: 'none', isolines: { id: 'us6000jllz' }, plates: ['transform', 'convergent'], markers: [{ at: [37.226, 37.014], label: 'Pazarcık, M 7.8' }] },
      title: 'Example: the Türkiye–Syria earthquake, 2023',
      body: `<p><b>Causes</b>: the Arabian plate moves north and pushes the Anatolian plate, on which most of Türkiye sits, westwards. The plates slide past each other along the <b>East Anatolian Fault</b>, a conservative boundary. On 6 February 2023 at 04:17 local time, a section of the fault slipped: magnitude 7.8 at a depth of about 10 km. Later the same day a second earthquake of magnitude 7.5 struck to the north.</p>
        <p><b>Impacts</b>: tens of thousands of buildings collapsed across southern Türkiye and northern Syria, many of them while people slept. Türkiye's official death toll was 53,537; with Syria, about 59,500. 14 million people in Türkiye were affected. Survivors spent the winter in tents and containers.</p>
        <p><b>Responses</b>: Türkiye's disaster agency, AFAD, led the rescue, and about 100 countries offered help, many sending search and rescue teams. Questions followed about why so many buildings fell: building rules had been tightened after the 1999 earthquakes, but enforcement was weak, and a 2018 amnesty let owners of buildings that broke the rules pay a fine instead of making them safe.</p>`,
      why: 'Syllabus 4.4.3 asks for causes, impacts, responses and strategies for a named earthquake. Learn three specific figures.',
      facts: [
        { text: 'USGS: magnitude 7.8 at 01:17 UTC (04:17 local time) on 6 February 2023, depth 10 km, near Pazarcık.', src: 'usgs-pazarcik' },
        { text: 'Official tolls in February 2024: 53,537 deaths in Türkiye; 59,488 with Syria; 14 million people affected in Türkiye. A magnitude 7.5 earthquake followed later that day.', src: 'afp-2024' },
        { text: 'About 100 countries offered assistance, many sending search and rescue teams.', src: 'aa-rescue' },
        { text: 'Codes were tightened after 1999 but poorly enforced; a pre-2018 amnesty let violators pay a fine instead of bringing buildings up to code.', src: 'voa-codes' },
      ],
      check: { q: 'At what kind of plate boundary did the 2023 Türkiye earthquake happen?', a: 'A conservative (transform) boundary: the East Anatolian Fault.' },
      syllabus: ['4.4.3', '4.3.2'], sources: ['usgs-pazarcik', 'afp-2024', 'aa-rescue', 'voa-codes'],
    },
    {
      id: 'tq-25', part: 'Detailed examples', date: '2010-04-14', dateLabel: 'April 2010',
      camera: { lat: 63.63, lon: -19.62, alt: 34, tilt: 50, ground: 1 },
      map: { borders: 'none', relief3d: { site: 'eyjafjallajokull', exag: 1.5 }, markers: [{ at: [63.63, -19.62], label: 'Summit crater' }] },
      title: 'Example: Eyjafjallajökull, Iceland, 2010',
      // directed on its own (src/scene/eyja.js, WP-04X): as the camera lands, the volcano from its real heights takes the
      // frame; a shot per step (card and captions, then the question), the last asking where meltwater would run
      scene: { film: 'eyja', shots: [0, 0, 1, 1, 2, 2, 2],
        hint: 'Move across the ice to see which way its meltwater runs: the steepest way down, calculated from the heights.',
        keysLabel: 'Trace the meltwater from',
        keys: [{ label: 'The summit crater', v: '63.63,-19.62' }, { label: 'The north ice', v: '63.648,-19.625' }, { label: 'The east ice', v: '63.618,-19.56' }] },
      body: `<p><b>Causes</b>: Iceland lies on the Mid-Atlantic Ridge, where the North American and Eurasian plates move apart. Magma rises into the gaps. Eyjafjallajökull is a strato-volcano covered by an ice cap, shown here with its heights raised one and a half times.</p>
        <p><b>Impacts</b>: the summit eruption began on 14 April 2010 under the ice. Meltwater floods poured down the valleys, and about 800 local people were evacuated. Fine ash spread over Europe and closed most airspace from 15 to 20 April: more than 100,000 flights were cancelled, and airlines lost about US$1.7 billion.</p>
        <p><b>Responses</b>: monitoring gave two to three hours' warning to close the main road, and road workers cut holes in it in three places to steer the flood water to the sea and protect the bridges. In the longer term, aviation authorities changed the rules so that planes could fly through areas of thin ash, so that airspace would not have to close completely again.</p>`,
      why: 'Syllabus 4.4.4 asks for causes, impacts, responses and strategies for a named eruption. If your teacher chose Merapi 2010, use the facts in the Merapi scene.',
      facts: [
        { text: 'More than 100,000 commercial flights were cancelled; most European airspace closed from 15 to 20 April 2010.', src: 'icao-eyja' },
        { text: 'IATA estimated airlines lost about US$1.7 billion in revenue.', src: 'iata-eyja' },
        { text: 'About 800 people living nearby were evacuated when the eruption under the glacier began.', src: 'natgeo-eyja' },
        { text: 'The road administration had two to three hours to close roads; the highway was breached in three places to guide the flood and protect bridges.', src: 'piarc-eyja' },
        { text: 'Heights from Copernicus DEM GLO-30.', src: DEM },
      ],
      check: { q: 'Why was the Eyjafjallajökull eruption so explosive for a volcano on a divergent boundary?', a: 'It erupted under an ice cap: meltwater chilled the magma suddenly, so it shattered into fine ash.' },
      syllabus: ['4.4.4', '4.3.3'], sources: ['icao-eyja', 'iata-eyja', 'natgeo-eyja', 'piarc-eyja', GVP, DEM],
    },
  ],
  sources: {
    [SYL]: { title: 'Cambridge IGCSE Geography 0460: syllabus for examination in 2027, 2028 and 2029', author: 'Cambridge University Press & Assessment', publisher: 'Cambridge International Education', year: 2024, url: 'https://www.cambridgeinternational.org/Images/718150-2027-2029-syllabus.pdf' },
    [COMCAT]: { title: 'ANSS Comprehensive Earthquake Catalog (ComCat): magnitude 5.5 and over, 2000–2025', author: 'U.S. Geological Survey', publisher: 'USGS Earthquake Hazards Program', year: 2026, url: 'https://earthquake.usgs.gov/earthquakes/search/' },
    [GVP]: { title: 'Volcanoes of the World: Holocene volcano list', author: 'Global Volcanism Program', publisher: 'Smithsonian Institution', year: 2026, url: 'https://volcano.si.edu/' },
    [PB]: { title: 'An updated digital model of plate boundaries (PB2002), GIS data by Hugo Ahlenius', author: 'Peter Bird', publisher: 'Geochemistry, Geophysics, Geosystems 4(3)', year: 2003, url: 'https://doi.org/10.1029/2001GC000252' },
    [DEM]: { title: 'Copernicus DEM GLO-30', author: 'European Space Agency', publisher: 'Copernicus programme, via AWS Open Data', year: 2021, url: 'https://registry.opendata.aws/copernicus-dem/' },
    'usgs-interior': { title: 'Inside the Earth', author: 'U.S. Geological Survey', publisher: 'This Dynamic Earth', year: 1999, url: 'https://pubs.usgs.gov/gip/dynamic/inside.html' },
    'usgs-ring': { title: 'What is the Ring of Fire?', author: 'U.S. Geological Survey', publisher: 'USGS FAQs', year: 2024, url: 'https://www.usgs.gov/faqs/what-ring-fire' },
    'usgs-magnitude': { title: 'Earthquake magnitude, energy release, and shaking intensity', author: 'U.S. Geological Survey', publisher: 'USGS Earthquake Hazards Program', year: 2024, url: 'https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity' },
    'usgs-pazarcik': { title: 'M 7.8 Pazarcık earthquake, Kahramanmaraş earthquake sequence (event page and ShakeMap)', author: 'U.S. Geological Survey', publisher: 'USGS Earthquake Hazards Program', year: 2023, url: 'https://earthquake.usgs.gov/earthquakes/eventpage/us6000jllz' },
    'usgs-maunaloa': { title: 'New open access articles about the Mauna Loa 2022 eruption', author: 'USGS Hawaiian Volcano Observatory', publisher: 'U.S. Geological Survey', year: 2024, url: 'https://www.usgs.gov/observatories/hvo/news/new-open-access-articles-mauna-loa-2022-eruption' },
    paricutin: { title: 'Parícutin', author: 'Wikipedia contributors', publisher: 'Wikipedia', year: 2026, url: 'https://en.wikipedia.org/wiki/Par%C3%ADcutin' },
    'merapi-2010': { title: '2010 eruptions of Mount Merapi', author: 'Wikipedia contributors', publisher: 'Wikipedia', year: 2026, url: 'https://en.wikipedia.org/wiki/2010_eruptions_of_Mount_Merapi' },
    'nasa-merapi': { title: 'Eruption at Mount Merapi, Indonesia', author: 'NASA Earth Observatory', publisher: 'NASA', year: 2010, url: 'https://earthobservatory.nasa.gov/images/46857/eruption-at-mount-merapi-indonesia' },
    'icao-eyja': { title: 'Heeding Eyjafjallajökull\'s lessons (ICAO Journal 1/2013)', author: 'International Civil Aviation Organization', publisher: 'SKYbrary', year: 2013, url: 'https://skybrary.aero/bookshelf/heeding-eyjafjallajkulls-lessons-article-icao-journal-issue-12013' },
    'iata-eyja': { title: 'IATA: volcano cuts airline revenue $1.7 billion', author: 'FreightWaves', publisher: 'FreightWaves', year: 2010, url: 'https://www.freightwaves.com/news/iata-volcano-cuts-airline-revenue-1-7-billion' },
    'afp-2024': { title: 'Nearly 60,000 killed in 2023 Turkey, Syria quake: new toll', author: 'AFP', publisher: 'Gulf News', year: 2024, url: 'https://gulfnews.com/world/mena/nearly-60000-killed-in-2023-turkey-syria-quake-new-toll-1.1706864966200' },
    'aa-rescue': { title: 'Very hard mission accomplished, says Austrian rescue team', author: 'Anadolu Agency', publisher: 'Anadolu Agency', year: 2023, url: 'https://aa.com.tr/en/environment/very-hard-mission-accomplished-says-austrian-rescue-team/2821968' },
    'voa-codes': { title: 'Turkey\'s lax policing of building codes flagged before quake', author: 'Associated Press', publisher: 'VOA News', year: 2023, url: 'https://www.voanews.com/a/turkey-s-lax-policing-of-building-codes-flagged-before-quake-/6957043.html' },
    'natgeo-eyja': { title: 'Iceland volcano erupts again; hundreds evacuated', author: 'Associated Press', publisher: 'National Geographic News', year: 2010, url: 'https://www.nationalgeographic.com/science/article/100414-iceland-volcano-erupts-evacuate-flooding' },
    'piarc-eyja': { title: 'The eruption in Eyjafjallajökull and the effects on the road network (PIARC World Road Congress 2011, paper 0194)', author: 'Icelandic Road Administration', publisher: 'PIARC', year: 2011, url: 'https://proceedings-mexico2011.piarc.org/ressources/files/5/0194-en.pdf' },
    'fiu-haiti-chile': { title: 'Haiti vs Chile: the 2010 earthquakes', author: 'Extreme Events Institute', publisher: 'Florida International University', year: 2020, url: 'https://eei.fiu.edu/case_study/haiti-vs-chile/' },
  },
  toolkit: {
    summary: [
      '<b>Layers</b>: solid inner core, liquid outer core, mantle (solid but slowly flowing), crust (about 5 km under oceans, about 30 km under continents). Crust plus the top of the mantle form the lithosphere, broken into plates.',
      '<b>Plates move</b> a few centimetres a year, driven by convection currents, ridge push and slab pull.',
      '<b>Four boundaries</b>: divergent (apart: rift valleys, gentle volcanoes, small earthquakes); convergent subduction (one sinks: trenches, explosive volcanoes, the largest earthquakes); collision (fold mountains, earthquakes, no volcanoes); conservative (slide past: earthquakes, no volcanoes).',
      '<b>Earthquakes</b>: focus underground, epicentre above it, seismic waves. Magnitude (moment magnitude or Richter, about 32 times more energy per whole number) measures energy; intensity (Mercalli, I to XII) measures shaking at a place.',
      '<b>Volcanoes</b>: strato-volcano (steep, sticky lava, explosive), shield (wide, runny basalt, effusive), cinder cone (small, short-lived). Active, dormant, extinct. Hazards: lava flows, ash falls, lahars, pyroclastic flows, tephra, toxic gases.',
      '<b>Why people stay</b>: fertile soil, geothermal energy, tourism, minerals, jobs and family; some cannot afford to leave.',
      '<b>Impacts</b>: social, economic, environmental; primary and secondary; local to global. They depend on wealth, building quality, population density and preparation as much as on size.',
      '<b>Managing</b>: primary and secondary responses; monitoring, prediction, protection, planning, preparation and technology. Evaluate each by cost, reliability and enforcement.',
    ],
    definitions: [
      { k: 'Lithosphere', d: 'The crust and the rigid upper part of the mantle, broken into tectonic plates.' },
      { k: 'Divergent boundary', d: 'Where two plates move apart and new crust forms.' },
      { k: 'Convergent boundary', d: 'Where two plates move towards each other; one may sink (subduction) or both may crumple (collision).' },
      { k: 'Conservative boundary', d: 'Where two plates slide past each other and crust is neither made nor destroyed.' },
      { k: 'Subduction', d: 'When a denser oceanic plate sinks beneath another plate into the mantle.' },
      { k: 'Focus', d: 'The point underground where an earthquake starts.' },
      { k: 'Epicentre', d: 'The point on the Earth\'s surface directly above the focus.' },
      { k: 'Magnitude', d: 'The amount of energy released by an earthquake.' },
      { k: 'Intensity', d: 'How strongly the ground shakes at a particular place.' },
      { k: 'Hotspot', d: 'An area where a plume of hot mantle rock rises under a plate, causing volcanoes far from a boundary.' },
      { k: 'Pyroclastic flow', d: 'A fast avalanche of hot gas, ash and rock down the side of a volcano.' },
      { k: 'Lahar', d: 'A volcanic mudflow of ash and water.' },
      { k: 'Primary response', d: 'Action in the hours and days after a disaster, such as rescue and emergency shelter.' },
      { k: 'Secondary response', d: 'Action in the months and years after a disaster, such as rebuilding.' },
    ],
    checks: [
      { q: 'Name the four layers of the Earth, from the centre outwards.', a: 'Inner core, outer core, mantle, crust.' },
      { q: 'Which layer is liquid?', a: 'The outer core.' },
      { q: 'What makes up the lithosphere?', a: 'The crust and the rigid top of the mantle.' },
      { q: 'Give three forces or processes that move plates.', a: 'Convection currents, ridge push and slab pull.' },
      { q: 'Which boundary forms rift valleys?', a: 'A divergent (constructive) boundary.' },
      { q: 'Why does oceanic crust sink at a subduction zone?', a: 'It is denser than continental crust.' },
      { q: 'Why are there no volcanoes at collision boundaries?', a: 'Neither plate sinks deep enough to melt.' },
      { q: 'Give an example of a conservative boundary.', a: 'The San Andreas Fault, or the East Anatolian Fault.' },
      { q: 'Why is Hawaii an anomaly in the pattern of volcanoes?', a: 'It is in the middle of a plate, above a hotspot.' },
      { q: 'Define epicentre.', a: 'The point on the surface directly above the focus.' },
      { q: 'Why are shallow earthquakes usually more damaging?', a: 'The waves lose less energy before reaching the surface.' },
      { q: 'How much more energy is released for each whole number of magnitude?', a: 'About 32 times.' },
      { q: 'What does the Mercalli scale measure?', a: 'Intensity: how strongly the ground shook at a place.' },
      { q: 'Why are shield volcanoes gently sloping?', a: 'Runny basalt lava flows a long way before it cools.' },
      { q: 'What is a dormant volcano?', a: 'One that has not erupted for a long time but could erupt again.' },
      { q: 'Which volcanic hazard causes most deaths near a volcano?', a: 'Pyroclastic flows.' },
      { q: 'Give two reasons why people live near volcanoes.', a: 'For example fertile soil and geothermal energy.' },
      { q: 'Give one primary and one secondary impact of an earthquake.', a: 'Primary: buildings collapse. Secondary: homelessness or disease.' },
      { q: 'Why did Haiti suffer more deaths than Chile in 2010?', a: 'Weak buildings with no national code, dense population, poverty and less preparation.' },
      { q: 'Why can eruptions often be predicted but earthquakes cannot?', a: 'Volcanoes show warning signs such as ground swelling, small earthquakes and gas.' },
    ],
    practiceSets: [
      geoPractice.sets.find(s => s.short === 'Earthquakes'),
      {
        tag: 'P1', short: 'Volcanoes', paper: 'Paper 1 · Topic 4: Tectonic hazards', title: 'Volcanoes and their hazards',
        resource: {
          type: 'table', label: 'Table 4.2', caption: 'Four volcanoes.',
          cols: ['Volcano', 'Country', 'Type', 'Last eruption'],
          rows: [['Mount Fuji', 'Japan', 'Strato-volcano', '1707–1708'], ['Mauna Loa', 'United States (Hawaii)', 'Shield volcano', '2022'], ['Parícutin', 'Mexico', 'Cinder cone', '1943–1952'], ['Eyjafjallajökull', 'Iceland', 'Strato-volcano', '2010']],
          note: 'Volcano types and eruption dates from the Smithsonian Global Volcanism Program.',
        },
        parts: [
          { k: '(a)(i)', m: 1, scheme: 'p', q: 'Which volcano in Table 4.2 is a cinder cone?', ms: { head: 'Answer', points: ['Parícutin.'] } },
          { k: '(a)(ii)', m: 2, scheme: 'p', q: 'State what is meant by a dormant volcano and an extinct volcano.',
            ms: { head: 'Answer', points: ['<b>Dormant</b>: has not erupted for a long time but could erupt again (1).', '<b>Extinct</b>: not expected to erupt again (1).'] } },
          { k: '(a)(iii)', m: 3, scheme: 'data', q: 'Use Table 4.2 to compare Mount Fuji and Mauna Loa.',
            ms: { lead: 'Ideas such as:', points: ['Fuji is a strato-volcano; Mauna Loa is a shield volcano.', 'Mauna Loa erupted much more recently (2022) than Fuji (1707–1708).', 'Both are in the Pacific (Japan and Hawaii).', 'Fuji is in Japan, on a subduction zone; Mauna Loa is on a hotspot in the middle of a plate.'] } },
          { k: '(a)(iv)', m: 4, scheme: 'p', q: 'Explain why strato-volcanoes are steep-sided but shield volcanoes have gentle slopes.',
            ms: { lead: 'Ideas such as:', points: ['Strato-volcanoes erupt thick, sticky (viscous) lava rich in silica (1).', 'It cools before it flows far, so it builds up near the vent (1).', 'Layers of ash also build up close to the vent (1).', 'Shield volcanoes erupt runny basalt lava (1).', 'It flows a long way before it cools, so it spreads out into gentle slopes (1).'] } },
          { k: '(b)(i)', m: 3, scheme: 'p', q: 'Describe three hazards caused by volcanic eruptions.',
            ms: { lead: '1 mark for each hazard described, up to 3:', points: ['<b>Pyroclastic flows</b>: fast avalanches of hot gas and rock.', '<b>Ash falls</b>: ash covers land, collapses roofs and damages engines.', '<b>Lahars</b>: mudflows of ash and water that flow down valleys.', '<b>Lava flows</b>: destroy buildings and land in their path.', '<b>Toxic gases</b>, such as sulphur dioxide.', '<b>Tephra</b>: rock fragments thrown into the air.'] } },
          { k: '(b)(ii)', m: 5, scheme: 'e5', q: 'Evaluate the reasons why people continue to live near active volcanoes.',
            ms: { groups: [
              { h: 'Reasons, such as', points: ['<b>Fertile soil</b> from weathered ash gives good harvests.', '<b>Geothermal energy</b> provides cheap power and hot water.', '<b>Tourism</b> brings jobs and income.', '<b>Minerals</b> such as sulphur can be mined.', '<b>Family and land</b>: people stay where their homes and jobs are.', '<b>No choice</b>: some cannot afford to move.'] },
              { h: 'Evaluation (the reserved mark), such as', tone: 'judge', points: ['Fertile soil is the most important reason in farming regions such as Java, because people depend on the land for food and income.', 'Many people accept the risk because large eruptions are rare and warnings usually give time to leave.'] },
            ] } },
          { k: '(c)', m: 7, scheme: 'tb', q: 'For a named volcanic eruption you have studied, describe its causes and impacts.',
            ms: { groups: [
              { h: 'Causes, such as', points: ['The type of plate boundary and how magma forms there.', 'The type of volcano and its magma.', 'Any special conditions, such as ice or water.'] },
              { h: 'Impacts, such as', points: ['Deaths and injuries, and what caused them.', 'Damage to homes, farmland and infrastructure.', 'Evacuation and disruption.', 'Economic costs, local and global.', 'Environmental impacts, such as ash, floods or gases.'] },
            ] },
            answers: [
              { level: 'Level 2', marks: '4 marks', text: ['Eyjafjallajökull in Iceland erupted in 2010. Iceland is on a plate boundary where the plates move apart, so magma rises. The volcano was covered in ice, so the eruption made a lot of ash. The ash cloud spread over Europe and many flights were cancelled, which cost airlines a lot of money.'], why: 'It names a real eruption and links cause and impact, but it gives no specific figures, dates or names of plates, so it stays in Level 2.' },
              { level: 'Level 3', marks: '7 marks', text: ['Eyjafjallajökull in Iceland erupted from 14 April 2010. Iceland lies on the Mid-Atlantic Ridge, a divergent boundary where the North American and Eurasian plates move apart, so magma rises through cracks in the crust. The summit is covered by an ice cap. Meltwater chilled the magma suddenly, so it shattered into very fine ash, and the eruption was more explosive than usual for a divergent boundary.', 'Locally, floods of meltwater poured down the valleys and about 800 people were evacuated. Globally, winds carried the ash over Europe. Because ash can stop jet engines, most European airspace closed from 15 to 20 April and more than 100,000 flights were cancelled. Airlines lost about US$1.7 billion, and millions of travellers were stranded. So a small eruption had a large economic impact far beyond Iceland.'], why: 'It names the volcano, the boundary and both plates, explains why the eruption was explosive, and gives specific dates and figures for local and global impacts. Developed statements throughout: Level 3.' },
            ] },
        ],
      },
    ],
  },
};
