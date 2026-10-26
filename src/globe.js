// Meridian globe — one planet, three lenses.
// Land is a baked dot matrix (tools/build-dots.mjs). Everything else is drawn in shaders:
// lit dots, a fresnel ocean, a back-face atmosphere, trade arcs and hazard pulses.
// One sun lights it all: the dots are bright on its side and go out across the terminator (a trace keeps the night's
// continents); the ocean's rim and the air glow on the sun's side, with a warm band at the day's edge.
// The page drives it with setProgress(f): f = 0 hero, 1 History, 2 Economics, 3 Geography.

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, BufferGeometry, BufferAttribute, Points,
  ShaderMaterial, Mesh, SphereGeometry, Color, Vector3, TubeGeometry, CatmullRomCurve3,
  AdditiveBlending, BackSide,
} from 'three';
import DOTS from './land-dots.json';

const DEG = Math.PI / 180;
const ll = (lat, lon, r = 1) => {
  const p = lat * DEG, l = lon * DEG;
  return new Vector3(Math.cos(p) * Math.sin(l) * r, Math.sin(p) * r, Math.cos(p) * Math.cos(l) * r);
};
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const angDiff = (a, b) => ((b - a + 540) % 360) - 180;

// ── Lens data ────────────────────────────────────────────────────────────────
// [lat, lon, name, note, label side]
const HISTORY = [
  [48.80, 2.12, 'Versailles', '1919', 'l'],
  [46.20, 6.15, 'Geneva', '1920', ''],
  [39.62, 19.92, 'Corfu', '1923', 'r'],
  [48.14, 11.58, 'Munich', '1938', 'l'],
  [54.35, 18.65, 'Gdańsk', '1939 · 1980', 'r'],
  [52.52, 13.40, 'Berlin', '1948 · 61 · 89', 'l'],
  [50.08, 14.44, 'Prague', '1968', 'r'],
  [47.50, 19.04, 'Budapest', '1956', 'r'],
  [44.50, 34.17, 'Yalta', '1945', 'r'],
  [41.80, 123.43, 'Manchuria', '1931', 'r'],
  [38.00, 127.00, 'Korea', '1950', 'r'],
  [9.03, 38.74, 'Abyssinia', '1935', 'r'],
  [23.11, -82.37, 'Cuba', '1962', 'r'],
  [10.82, 106.63, 'Saigon', '1975', 'r'],
];
const PORTS = {
  sha: [31.23, 121.47, 'Shanghai'], rot: [51.92, 4.48, 'Rotterdam'], sin: [1.29, 103.85, 'Singapore'],
  dxb: [25.27, 55.29, 'Dubai'], la: [33.74, -118.26, 'Los Angeles'], ny: [40.71, -74.0, 'New York'],
  tyo: [35.68, 139.69, 'Tokyo'], sao: [-23.55, -46.63, 'São Paulo'], bom: [18.94, 72.84, 'Mumbai'],
  los: [6.45, 3.39, 'Lagos'], syd: [-33.87, 151.21, 'Sydney'], dur: [-29.86, 31.03, 'Durban'],
};
const LANES = [
  ['sha', 'rot'], ['sin', 'rot'], ['sha', 'la'], ['tyo', 'la'], ['sin', 'dxb'], ['dxb', 'bom'],
  ['ny', 'rot'], ['sao', 'rot'], ['los', 'rot'], ['sha', 'syd'], ['sin', 'syd'], ['bom', 'dur'],
  ['ny', 'sao'], ['sha', 'sin'], ['dxb', 'rot'], ['dur', 'sao'],
];
const PORT_LABELS = ['sha', 'rot', 'sin', 'dxb', 'bom'];
const HAZARDS = [
  [37.17, 37.03, 'Türkiye–Syria', 'quake 2023', 'r'], [28.23, 84.73, 'Nepal', 'quake 2015', 'r'],
  [38.30, 142.37, 'Tōhoku', 'quake 2011', 'r'], [18.46, -72.53, 'Haiti', 'quake 2010', 'r'],
  [-43.58, 172.70, 'Christchurch', 'quake 2011', 'r'], [3.32, 95.85, 'Sumatra', 'tsunami 2004', 'l'],
  [63.63, -19.62, 'Eyjafjallajökull', 'eruption 2010', 'r'], [-7.54, 110.45, 'Merapi', 'eruption 2010', 'l'],
  [-20.55, -175.39, 'Hunga Tonga', 'eruption 2022', 'r'], [14.47, -90.88, 'Fuego', 'eruption 2018', 'r'],
  [19.41, -155.28, 'Kīlauea', 'eruption 2018', 'r'], [-36.12, -72.90, 'Maule', 'quake 2010', 'r'],
  [15.13, 120.35, 'Pinatubo', '', ''], [35.36, 138.73, 'Fuji', '', ''], [-6.10, 105.42, 'Krakatau', '', ''],
  [-0.68, -78.44, 'Cotopaxi', '', ''], [19.02, -98.62, 'Popocatépetl', '', ''], [46.19, -122.19, 'St Helens', '', ''],
  [-1.52, 29.25, 'Nyiragongo', '', ''], [37.75, 14.99, 'Etna', '', ''], [31.06, -8.39, 'Al Haouz', '', ''],
  [-15.79, -71.86, 'Sabancaya', '', ''], [52.0, 159.0, 'Kamchatka', '', ''], [-38.8, 175.9, 'Taupō', '', ''],
];

// lat, lon, camera distance, horizontal / vertical shift (fraction of viewport), accent, layer weights
const VIEWS = [
  { lat: 16, lon: 34, dist: 4.25, sx: 0.21, sy: 0.02, accent: '#9db7ff' },
  { lat: 47, lon: 17, dist: 2.15, sx: 0.17, sy: 0, accent: '#f0b45a' },
  { lat: 24, lon: 74, dist: 3.6, sx: 0.19, sy: 0, accent: '#46d6a0' },
  { lat: 6, lon: 160, dist: 3.6, sx: 0.19, sy: 0, accent: '#5fb0ff' },
];
const PHONE = [{ sx: 0, sy: 0.2 }, { sx: 0, sy: -0.16 }, { sx: 0, sy: -0.16 }, { sx: 0, sy: -0.16 }];

// ── Shaders ──────────────────────────────────────────────────────────────────
const dotVert = /* glsl */`
  uniform float uScale, uSize; uniform vec3 uLight;
  attribute float aRand;
  varying float vSun, vFacing, vRand;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vec3 n = normalize(mat3(viewMatrix) * normalize(world.xyz));
    vec4 mv = viewMatrix * world;
    vSun = dot(n, uLight);
    vFacing = n.z;
    vRand = aRand;
    gl_PointSize = uSize * (0.8 + 0.4 * aRand) * uScale / -mv.z;
    gl_Position = projectionMatrix * mv;
  }`;
const dotFrag = /* glsl */`
  uniform vec3 uLit, uShade, uAccent; uniform float uTint;
  varying float vSun, vFacing, vRand;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.32, d);
    float l = pow(max(vSun, 0.0), 0.75), day = smoothstep(-0.12, 0.22, vSun);
    vec3 c = mix(uShade, uLit, l);
    c = mix(c, uAccent, uTint * (0.15 + 0.55 * vRand) * (0.3 + 0.7 * l));
    // night: the land all but goes out, a trace keeps the continents
    float alpha = day * (0.3 + 0.7 * l) + (1.0 - day) * 0.06;
    float limb = smoothstep(-0.02, 0.3, vFacing);
    gl_FragColor = vec4(c, a * alpha * limb);
  }`;
const shellVert = /* glsl */`
  varying vec3 vN, vV;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vN = normalize(normalMatrix * normal);
    vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }`;
const oceanFrag = /* glsl */`
  uniform vec3 uLight, uBase, uLift, uAccent;
  varying vec3 vN, vV;
  void main() {
    float s = dot(vN, uLight), l = max(s, 0.0);
    float f = pow(1.0 - max(dot(vN, vV), 0.0), 2.6);
    // the rim is the air lit by the sun: bright on its side, almost nothing on the night's
    gl_FragColor = vec4(uBase + uLift * l + uAccent * f * 0.32 * (0.08 + 0.92 * smoothstep(-0.3, 0.5, s)), 1.0);
  }`;
const airFrag = /* glsl */`
  uniform vec3 uLight, uAccent; uniform float uPower;
  varying vec3 vN, vV;
  void main() {
    float d = -dot(vN, vV);
    float i = pow(smoothstep(0.0, 0.58, d), 2.4) * uPower;
    // one scattering, cheaply: the air glows where the sun is and fades into the night, warm at the day's edge
    float sun = dot(vN, uLight), edge = exp(-pow((sun + 0.05) / 0.2, 2.0));
    i *= 0.06 + 1.04 * smoothstep(-0.4, 0.45, sun);
    gl_FragColor = vec4(mix(uAccent, vec3(1.0, 0.62, 0.4), edge * 0.45), i);
  }`;
const arcVert = /* glsl */`
  varying float vU;
  void main() { vU = uv.x; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const arcFrag = /* glsl */`
  uniform float uTime, uDraw, uOpacity, uPhase; uniform vec3 uColor;
  varying float vU;
  void main() {
    if (vU > uDraw) discard;
    float head = fract(uTime * 0.16 + uPhase);
    float p = exp(-pow((vU - head) * 12.0, 2.0));
    float tip = exp(-pow((vU - uDraw) * 30.0, 2.0)) * step(uDraw, 0.999);
    float ends = smoothstep(0.0, 0.05, vU) * smoothstep(1.0, 0.95, vU);
    gl_FragColor = vec4(uColor * (0.7 + p + tip), (0.16 + 0.9 * p + tip) * ends * uOpacity);
  }`;
const pulseVert = /* glsl */`
  attribute float aPhase; varying vec2 vUv; varying float vPhase; varying float vFacing;
  void main() {
    vUv = uv; vPhase = aPhase;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vFacing = normalize(mat3(viewMatrix) * normalize(world.xyz)).z;
    gl_Position = projectionMatrix * viewMatrix * world;
  }`;
const pulseFrag = /* glsl */`
  uniform float uTime, uOpacity, uSpeed; uniform vec3 uColor;
  varying vec2 vUv; varying float vPhase; varying float vFacing;
  void main() {
    float d = length(vUv - 0.5) * 2.0;
    float r = fract(uTime * uSpeed + vPhase);
    float ring = smoothstep(0.07, 0.0, abs(d - r)) * (1.0 - r);
    float core = smoothstep(0.2, 0.1, d);
    float a = (ring * 0.85 + core) * uOpacity * smoothstep(0.0, 0.25, vFacing);
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor * (1.0 + core * 0.4), a);
  }`;

// ── Builders ─────────────────────────────────────────────────────────────────
function landPoints(uniforms) {
  const n = DOTS.length / 2, pos = new Float32Array(n * 3), rnd = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const v = ll(DOTS[i * 2] / 10, DOTS[i * 2 + 1] / 10, 1.0);
    pos.set([v.x, v.y, v.z], i * 3);
    rnd[i] = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(pos, 3));
  g.setAttribute('aRand', new BufferAttribute(rnd, 1));
  return new Points(g, new ShaderMaterial({ uniforms, vertexShader: dotVert, fragmentShader: dotFrag, transparent: true, depthWrite: false }));
}

function pulseLayer(list, size, uniforms) {
  const n = list.length, pos = new Float32Array(n * 12), uv = new Float32Array(n * 8), ph = new Float32Array(n * 4), idx = [];
  const up = new Vector3(0, 1, 0), alt = new Vector3(1, 0, 0);
  list.forEach(([lat, lon], i) => {
    const nrm = ll(lat, lon), c = nrm.clone().multiplyScalar(1.004);
    const t = new Vector3().crossVectors(Math.abs(nrm.y) > 0.95 ? alt : up, nrm).normalize();
    const b = new Vector3().crossVectors(nrm, t).normalize();
    const h = size / 2;
    [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([x, y], k) => {
      const p = c.clone().addScaledVector(t, x * h).addScaledVector(b, y * h);
      pos.set([p.x, p.y, p.z], (i * 4 + k) * 3);
      uv.set([(x + 1) / 2, (y + 1) / 2], (i * 4 + k) * 2);
      ph[i * 4 + k] = (i * 0.618) % 1;
    });
    idx.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3);
  });
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(pos, 3));
  g.setAttribute('uv', new BufferAttribute(uv, 2));
  g.setAttribute('aPhase', new BufferAttribute(ph, 1));
  g.setIndex(idx);
  return new Mesh(g, new ShaderMaterial({
    uniforms, vertexShader: pulseVert, fragmentShader: pulseFrag,
    transparent: true, depthWrite: false, blending: AdditiveBlending,
  }));
}

function arc(a, b, uniforms) {
  const A = ll(a[0], a[1]), B = ll(b[0], b[1]);
  const ang = A.angleTo(B), h = 0.06 + 0.22 * (ang / Math.PI);
  const pts = [];
  for (let i = 0; i <= 48; i++) {
    const t = i / 48;
    pts.push(A.clone().lerp(B, t).normalize().multiplyScalar(1.002 + h * Math.sin(Math.PI * t)));
  }
  const geo = new TubeGeometry(new CatmullRomCurve3(pts), 120, 0.0032, 6, false);
  return new Mesh(geo, new ShaderMaterial({
    uniforms, vertexShader: arcVert, fragmentShader: arcFrag,
    transparent: true, depthWrite: false, blending: AdditiveBlending,
  }));
}

// ── Public ───────────────────────────────────────────────────────────────────
export function createGlobe(host, { reduced = false } = {}) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  const labelsEl = document.createElement('div');
  labelsEl.className = 'globe-labels';
  labelsEl.setAttribute('aria-hidden', 'true');
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    host.classList.add('is-fallback');
    return null;
  }
  host.append(canvas, labelsEl);
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 50);
  const globe = new Group();
  scene.add(globe);

  // the sun from the upper left and a little behind, so the terminator crosses the disc
  const light = new Vector3(-0.78, 0.5, 0.36).normalize();
  const accent = new Color(VIEWS[0].accent);
  const time = { value: 0 };

  const ocean = new Mesh(new SphereGeometry(0.994, 96, 64), new ShaderMaterial({
    uniforms: { uLight: { value: light }, uBase: { value: new Color('#04060a') }, uLift: { value: new Color('#0e1621') }, uAccent: { value: accent } },
    vertexShader: shellVert, fragmentShader: oceanFrag,
  }));
  const air = new Mesh(new SphereGeometry(1.2, 64, 48), new ShaderMaterial({
    uniforms: { uLight: { value: light }, uAccent: { value: accent }, uPower: { value: 0.85 } },
    vertexShader: shellVert, fragmentShader: airFrag, side: BackSide,
    transparent: true, depthWrite: false, blending: AdditiveBlending,
  }));
  const dotU = {
    uScale: { value: 1 }, uSize: { value: 0.0135 }, uLight: { value: light },
    uLit: { value: new Color('#e9eef7') }, uShade: { value: new Color('#2a3443') },
    uAccent: { value: accent }, uTint: { value: 0.35 },
  };
  const land = landPoints(dotU);
  globe.add(ocean, land);

  const histU = { uTime: time, uOpacity: { value: 0 }, uSpeed: { value: 0.32 }, uColor: { value: new Color('#f6c27a') } };
  const geoU = { uTime: time, uOpacity: { value: 0 }, uSpeed: { value: 0.55 }, uColor: { value: new Color('#7cc0ff') } };
  const histLayer = pulseLayer(HISTORY, 0.075, histU);
  const geoLayer = pulseLayer(HAZARDS, 0.11, geoU);
  const arcs = LANES.map(([a, b], i) => arc(PORTS[a], PORTS[b], {
    uTime: time, uDraw: { value: 0 }, uOpacity: { value: 0 }, uPhase: { value: (i * 0.37) % 1 },
    uColor: { value: new Color('#5fe3b0') },
  }));
  const portU = { uTime: time, uOpacity: { value: 0 }, uSpeed: { value: 0.25 }, uColor: { value: new Color('#7ef0c2') } };
  const portLayer = pulseLayer(Object.values(PORTS), 0.05, portU);
  globe.add(histLayer, geoLayer, portLayer, ...arcs);
  scene.add(air); // the shell stays put while the planet turns

  // HTML labels: crisp type, positioned by projecting each anchor every frame.
  const labels = [];
  const addLabel = (lat, lon, name, note, side, layer) => {
    if (!side) return;
    const el = document.createElement('span');
    el.className = `globe-label globe-label--${side} is-${layer}`;
    el.innerHTML = `<span><b>${name}</b>${note ? `<i>${note}</i>` : ''}</span>`;
    labelsEl.append(el);
    labels.push({ el, p: ll(lat, lon, 1.01), layer, shown: -1 });
  };
  HISTORY.forEach(([a, b, n, t, s]) => addLabel(a, b, n, t, s, 0));
  PORT_LABELS.forEach(k => addLabel(PORTS[k][0], PORTS[k][1], PORTS[k][2], '', 'r', 1));
  HAZARDS.forEach(([a, b, n, t, s]) => addLabel(a, b, n, t, s, 2));

  // ── State ──
  let f = 0, spin = 0, W = 1, H = 1, phone = false, visible = true, raf = 0, last = performance.now();
  const cur = { lat: VIEWS[0].lat, lon: VIEWS[0].lon, dist: 6.5, sx: 0.2, sy: 0, w0: 1, w1: 0, w2: 0, w3: 0 };
  const drag = { on: false, x: 0, y: 0, lon: 0, lat: 0 };
  const tmp = new Vector3(), camDir = new Vector3(), tA = new Color(), tB = new Color();

  function target() {
    const fi = clamp(f, 0, 3), i = Math.min(2, Math.floor(fi)), t = smooth(0.12, 0.88, fi - i);
    const A = { ...VIEWS[i], ...(phone ? PHONE[i] : {}) }, B = { ...VIEWS[i + 1], ...(phone ? PHONE[i + 1] : {}) };
    if (i === 0) A.lon = VIEWS[0].lon + spin;
    tA.set(A.accent); tB.set(B.accent);
    return {
      lat: A.lat + (B.lat - A.lat) * t,
      lon: A.lon + angDiff(A.lon, B.lon) * t,
      dist: A.dist + (B.dist - A.dist) * t,
      sx: A.sx + (B.sx - A.sx) * t, sy: A.sy + (B.sy - A.sy) * t,
      accent: tA.lerp(tB, t),
      w: [0, 1, 2, 3].map(k => clamp(1 - Math.abs(fi - k) * 1.35)),
    };
  }

  function resize() {
    const r = host.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    phone = W < 760;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone ? 2 : 1.75));
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    // keep the planet's size tied to the shorter side so phones don't get a sliver
    camera.fov = W / H < 1 ? 2 * Math.atan(Math.tan(16 * DEG) / (W / H) * 1.15) / DEG : 32;
    camera.updateProjectionMatrix();
    dotU.uScale.value = (H * renderer.getPixelRatio()) / (2 * Math.tan((camera.fov * DEG) / 2));
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!visible) return;
    if (!reduced) { time.value += dt; if (f < 1) spin += dt * 4.5 * (1 - clamp(f)); }

    const T = target();
    const k = reduced ? 1 : 1 - Math.exp(-dt * 3.2);
    cur.lat += (T.lat - cur.lat) * k;
    cur.lon += angDiff(cur.lon, T.lon) * k;
    cur.dist += (T.dist - cur.dist) * k;
    cur.sx += (T.sx - cur.sx) * k; cur.sy += (T.sy - cur.sy) * k;
    ['w0', 'w1', 'w2', 'w3'].forEach((key, j) => { cur[key] += (T.w[j] - cur[key]) * k; });
    accent.lerp(T.accent, k);
    if (!drag.on) { const r = Math.exp(-dt * 1.6); drag.lon *= r; drag.lat *= r; }

    globe.rotation.set((cur.lat + drag.lat) * DEG, -(cur.lon + drag.lon) * DEG, 0, 'XYZ');
    camera.position.set(0, 0, cur.dist);
    camera.setViewOffset(W, H, -cur.sx * W, -cur.sy * H, W, H);

    // layers
    histU.uOpacity.value = cur.w1;
    geoU.uOpacity.value = cur.w3;
    portU.uOpacity.value = Math.max(cur.w2, cur.w0 * 0.25);
    const arcW = Math.max(cur.w2, cur.w0 * 0.32), arcDraw = Math.max(cur.w2, cur.w0);
    arcs.forEach((m, i) => {
      m.material.uniforms.uOpacity.value = arcW;
      m.material.uniforms.uDraw.value = reduced ? 1 : clamp(arcDraw * 1.7 - i * 0.045);
    });
    dotU.uTint.value = 0.22 + 0.3 * (1 - cur.w0);

    globe.updateMatrixWorld();
    camera.updateMatrixWorld();
    camDir.copy(camera.position).normalize();
    const lw = [cur.w1, cur.w2, cur.w3];
    for (const L of labels) {
      tmp.copy(L.p).applyMatrix4(globe.matrixWorld);
      const facing = tmp.clone().normalize().dot(camDir);
      const o = lw[L.layer] * smooth(0.28, 0.55, facing);
      if (o < 0.02) { if (L.shown !== 0) { L.el.style.opacity = 0; L.shown = 0; } continue; }
      tmp.project(camera);
      const x = (tmp.x + 1) * 0.5 * W, y = (1 - tmp.y) * 0.5 * H;
      L.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      L.el.style.opacity = o.toFixed(3);
      L.shown = 1;
    }
    renderer.render(scene, camera);
  }

  // drag to spin (mouse / pen; touch keeps native scrolling)
  const onDown = e => {
    if (e.pointerType === 'touch' || e.button !== 0) return;
    if (e.target.closest('a, button, input, [data-no-drag]')) return;
    drag.on = true; drag.x = e.clientX; drag.y = e.clientY;
    host.classList.add('is-dragging');
  };
  const onMove = e => {
    if (!drag.on) return;
    drag.lon -= (e.clientX - drag.x) * 0.25;
    drag.lat = clamp(drag.lat + (e.clientY - drag.y) * 0.18, -35, 35);
    drag.x = e.clientX; drag.y = e.clientY;
  };
  const onUp = () => { drag.on = false; host.classList.remove('is-dragging'); };
  const dragZone = host.closest('[data-globe-scope]') || host;
  dragZone.addEventListener('pointerdown', onDown);
  addEventListener('pointermove', onMove, { passive: true });
  addEventListener('pointerup', onUp);

  const ro = new ResizeObserver(resize);
  ro.observe(host);
  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { rootMargin: '100px' });
  io.observe(host);
  const onVis = () => { visible = !document.hidden; last = performance.now(); };
  document.addEventListener('visibilitychange', onVis);

  resize();
  raf = requestAnimationFrame(frame);
  host.classList.add('is-live');

  return {
    setProgress(v) { f = v; },
    destroy() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      removeEventListener('pointermove', onMove); removeEventListener('pointerup', onUp);
      dragZone.removeEventListener('pointerdown', onDown);
      document.removeEventListener('visibilitychange', onVis);
      renderer.dispose();
    },
  };
}
