// Meridian world engine: one globe that travels through time and place as the page scrolls.
// States are painted into an equirectangular canvas per scene from CShapes 2.0 (borders dated to the day) and
// cross-faded on the GPU, with Natural Earth relief for terrain. Close to the ground each scene also gets a sharp detail
// texture around its camera target; at city scale that texture carries Berlin's sectors and border strip. Borders,
// arrows and lines (the iron curtain, the real 1989 route of the Wall) are vector geometry so they stay sharp.
// Data maps (Economics) are coloured in the shader: an id texture says which country is under each texel and a value
// texture holds every scene's figures, so moving from one year to the next blends the values themselves.
// Painting runs in a worker (src/world/paint-worker.js) when the browser has OffscreenCanvas, else in idle time.
// The page drives everything with setProgress(p): p = scene index + fraction towards the next (p < 0 is the hero).
// A frame is drawn only when something on screen can change.

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, ShaderMaterial, CanvasTexture, DataTexture, Texture,
  TextureLoader, Vector2, Vector3, Vector4, Color, BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial,
  TubeGeometry, CatmullRomCurve3, ConeGeometry, MeshBasicMaterial, BackSide, DoubleSide, AdditiveBlending, SRGBColorSpace,
  LinearFilter, LinearMipmapLinearFilter, NearestFilter, RGFormat, FloatType, Quaternion, Points, InstancedMesh, CylinderGeometry, Matrix4, DynamicDrawUsage,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { R_KM, clamp, smooth, ll, setViewport, placeCamera, footprint, textureSize } from './view.js';
import { geoInterpolate, geoDistance } from 'd3-geo';
import { mesh } from 'topojson-client';
import { DEG, dayNum, PALETTE, WALL_DOWN, featuresOf, countriesAt, runJob } from './paint.js';
import { createPost } from './post.js';
import { pointsLayer, plateLines, loadDem, terrainPatch, sectionOf, cutaway, PLATE_COLOR, DEPTH_STOPS, VOLCANO_COLOR, MMI_COLOR, MMI_ROMAN } from './layers.js';

export { PALETTE, ll };
const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const ARROW = { military: '#ff5a4f', people: '#ffd59a', pressure: '#c9b3ff', capital: '#7ef0c2', trade: '#9db7ff' };
const LINE = { 'iron-curtain': '#dfe6f2', wall: '#ffffff' };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ── data colour scales (Economics) ─────────────────────────────────────────
// Sequential: deep blue to green to warm yellow. Diverging: orange below zero, grey at zero, blue above, so neither
// side reads as "good" or "bad". Every indicator has a default domain; a scene can override it.
const RAMP = {
  sequential: ['#14243f', '#1d4f6e', '#1f8a7a', '#58c48b', '#e8d867', '#f59e4c'],
  diverging: ['#d9662f', '#b5603d', '#5b4a48', '#3a3f4c', '#3e5878', '#3b78bf', '#62a8f0'],
};
const RAMP_ROW = { sequential: 0, diverging: 1 };
const DOMAIN = {
  NGDP_RPCH: [-8, 8, 'diverging'], PCPIPCH: [0, 15, 'sequential'], LUR: [0, 20, 'sequential'],
  BCA_NGDPD: [-10, 10, 'diverging'], GGXCNL_NGDP: [-12, 12, 'diverging'], GGXWDG_NGDP: [0, 150, 'sequential'],
  POLICY_RATE: [0, 20, 'sequential'], GINI: [25, 60, 'sequential'], CO2_PC: [0, 20, 'sequential'],
};
const hexRgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
export function scaleOf(spec) {
  const [d0, d1, kind] = spec.domain ? [...spec.domain, spec.scale || 'sequential'] : (DOMAIN[spec.id] || [0, 100, 'sequential']);
  const k = spec.scale || kind;
  const stops = RAMP[k].map(hexRgb);
  const color = v => {
    const t = clamp((v - d0) / (d1 - d0)) * (stops.length - 1);
    const n = Math.min(stops.length - 2, Math.floor(t)), u = t - n;
    const c = stops[n].map((x, m) => Math.round(x + (stops[n + 1][m] - x) * u));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  };
  return { color, d0, d1, kind: k, stops: RAMP[k] };
}
// value of an indicator for a country at a scene's year (or month for monthly series); latest earlier value if latestOnly
export function valueOf(values, spec, key) {
  const ind = values && values[spec.id]; if (!ind) return null;
  const row = ind.values[key]; if (!row) return null;
  if (ind.months) {
    const [y, m] = String(spec.month || `${spec.year}-12`).split('-').map(Number);
    const [y0, m0] = ind.months[0].split('-').map(Number);
    let i = (y - y0) * 12 + (m - m0);
    while (i >= 0 && row[i] == null) i--;
    return i >= 0 ? row[i] : null;
  }
  let i = spec.year - ind.years[0];
  if (ind.latestOnly) { while (i >= 0 && row[i] == null) i--; return i >= 0 ? row[i] : null; }
  return row[i] ?? null;
}
export const fmtValue = v => (Math.abs(v) >= 100 ? Math.round(v) : +v.toFixed(1)).toLocaleString('en-GB');
const sameScale = (a, b) => a && b && a.id === b.id && String(a.domain) === String(b.domain) && a.scale === b.scale;

// ── shaders ─────────────────────────────────────────────────────────────────
const shellVert = /* glsl */`
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  void main() {
    vUv = uv; vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`;
// Data maps (id, value and ramp textures) are compiled in only where a chapter has values (HAS_DATA).
const earthFrag = /* glsl */`
  uniform sampler2D uGA, uDA, uGB, uDB, uRelW, uRelE, uTA, uTB;
  uniform vec4 uBoxA, uBoxB, uRelBox;
#ifdef HAS_DATA
  uniform sampler2D uIGA, uIDA, uIGB, uIDB, uVal, uRamp;
#endif
  uniform vec4 uSlotA, uSlotB;      // x: value row (< 0: no data layer), y: d0, z: d1, w: ramp row
  uniform float uWA, uWB;           // inside each state, how far its values have moved towards the other state's row
  uniform float uMix, uHatch, uLook; uniform vec3 uLight, uOcean, uOceanLift, uRim, uFocus, uCut;
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  vec2 lonlat() { return vec2(vUv.x * 360.0 - 180.0, vUv.y * 180.0 - 90.0); }
  vec3 lin(vec3 c) { return pow(c, vec3(2.2)); }
#ifdef HAS_DATA
  float idAt(sampler2D t, ivec2 p) { vec4 c = texelFetch(t, p, 0); return floor(c.r * 255.0 + 0.5) + 256.0 * floor(c.g * 255.0 + 0.5); }
  vec2 valAt(float row, float id) { return texelFetch(uVal, ivec2(int(id) - 1, int(row)), 0).rg; }
  vec3 rampAt(float v, vec4 slot) {
    float t = clamp((v - slot.y) / (slot.z - slot.y), 0.0, 1.0);
    return texture2D(uRamp, vec2((t * 255.0 + 0.5) / 256.0, (slot.w + 0.5) / 2.0)).rgb;
  }
  vec3 hatch() {
    float s = step(0.86, fract(dot(vW, vec3(0.71, 0.5, -0.5)) * uHatch));
    return lin(mix(vec3(0.153, 0.173, 0.216), vec3(0.235, 0.259, 0.31), s));
  }
  // colour of one country: its value in this state's row, blended towards the other row by w (same indicator only)
  vec4 dataOf(float id, vec4 own, vec4 other, float w) {
    vec2 a = valAt(own.x, id);
    vec2 b = other.x >= 0.0 && w > 0.0 ? valAt(other.x, id) : a;
    bool ha = a.r > -1e8, hb = b.r > -1e8;
    vec3 c = ha && hb ? rampAt(mix(a.r, b.r, w), own) : mix(ha ? rampAt(a.r, own) : hatch(), hb ? rampAt(b.r, own) : hatch(), w);
    return vec4(c, mix(a.g, b.g, w));
  }
  // four taps, coloured first and filtered after, so borders between colours stay smooth at any zoom
  vec4 dataTex(sampler2D t, vec2 uv, vec4 own, vec4 other, float w, out float cover) {
    vec2 size = vec2(textureSize(t, 0));
    vec2 tc = uv * size - 0.5; vec2 f = fract(tc); ivec2 i0 = ivec2(floor(tc)); ivec2 mx = ivec2(size) - 1;
    vec4 acc = vec4(0.0); cover = 0.0;
    for (int k = 0; k < 4; k++) {
      ivec2 o = ivec2(k & 1, k >> 1);
      float wt = (o.x == 1 ? f.x : 1.0 - f.x) * (o.y == 1 ? f.y : 1.0 - f.y);
      float id = idAt(t, clamp(i0 + o, ivec2(0), mx));
      if (id > 0.5) { acc += dataOf(id, own, other, w) * wt; cover += wt; }
    }
    return cover > 0.0 ? acc / cover : vec4(0.0);
  }
  // a state's data layer over its painted colour
  vec4 withData(vec4 col, sampler2D ig, sampler2D id, vec2 q, float inD, vec4 own, vec4 other, float w, out float focus) {
    focus = 0.0;
    if (own.x < 0.0) return col;
    float cg, cd = 0.0;
    vec4 dg = dataTex(ig, vUv, own, other, w, cg), dd = dg;
    if (inD > 0.0) dd = dataTex(id, q, own, other, w, cd);
    float cover = mix(cg, cd, inD); vec4 dat = mix(dg, dd, inD);
    focus = dat.a * cover;
    return vec4(mix(col.rgb, dat.rgb, cover), max(col.a, cover));
  }
#endif
  // a state = a world texture plus a sharp detail texture over a lon/lat box around the scene
  vec4 state(sampler2D g, sampler2D d, vec4 box, out vec2 q, out float inD) {
    vec4 col = texture2D(g, vUv);
    q = (lonlat() - box.xy) / (box.zw - box.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    inD = e > 0.0 ? smoothstep(0.0, 0.05, e) : 0.0;
    if (inD > 0.0) col = mix(col, texture2D(d, q), inD);
    return col;
  }
  // screen pixels across one texel of a texture sampled at uv (large when the camera is much closer than it was made for)
  float spread(vec2 uv, vec2 size) { vec2 t = uv * size; return 1.0 / max(1e-6, max(length(dFdx(t)), length(dFdy(t)))); }
  // shaded relief, faded to its mean where one of its texels would cover more than ~2–4 screen pixels: a
  // blurred blob reads as a smudge, not as terrain
  float relief() {
    vec2 q = (lonlat() - uRelBox.xy) / (uRelBox.zw - uRelBox.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    float w = texture2D(uRelW, vUv).r;
    float r = e > 0.0 ? mix(w, texture2D(uRelE, q).r, smoothstep(0.0, 0.04, e)) : w;
    // the image's mean (its 1 × 1 mip), so fading out flattens the terrain without changing the overall brightness
    float avg = e > 0.0 ? textureLod(uRelE, q, 12.0).r : textureLod(uRelW, vUv, 12.0).r;
    float px = e > 0.0 ? spread(q, vec2(textureSize(uRelE, 0))) : spread(vUv, vec2(textureSize(uRelW, 0)));
    return mix(r, avg, smoothstep(1.5, 4.0, px));
  }
  // the state's own shaded terrain (Copernicus DEM tiles) where it has some, else the base relief. Like the base relief it
  // fades out where one of its texels would cover more than a few screen pixels, and towards the edges of its box
  float terrain(sampler2D t, vec4 box, float base) {
    vec2 q = (lonlat() - box.xy) / (box.zw - box.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    if (e <= 0.0) return base;
    vec4 c = texture2D(t, q);
    float r = mix(c.r, 0.75, smoothstep(2.0, 5.0, spread(q, vec2(textureSize(t, 0)))));
    return mix(base, r, c.a * smoothstep(0.0, 0.03, e));
  }
  void main() {
    // the Earth cut open (uCut: first longitude, how far open 0..1, on): the northern octant from there is removed
    if (uCut.z > 0.5) { vec2 q = lonlat(); if (q.y > 0.0 && mod(q.x - uCut.x + 360.0, 360.0) < 90.0 * uCut.y) discard; }
    float fa = 0.0, fb = 0.0, ia, ib; vec2 qa, qb;
    vec4 a = state(uGA, uDA, uBoxA, qa, ia);
    vec4 b = uMix > 0.0 ? state(uGB, uDB, uBoxB, qb, ib) : a;
#ifdef HAS_DATA
    a = withData(a, uIGA, uIDA, qa, ia, uSlotA, uSlotB, uWA, fa);
    if (uMix > 0.0) b = withData(b, uIGB, uIDB, qb, ib, uSlotB, uSlotA, uWB, fb); else b = a;
#endif
    if (uMix <= 0.0) fb = fa;
    vec4 land = mix(a, b, uMix);
    float focus = mix(fa, fb, uMix);
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float lit = 0.42 + 0.58 * smoothstep(-0.35, 0.9, dot(n, normalize(uLight)));
    float base = relief();
    float rel = mix(terrain(uTA, uBoxA, base), terrain(uTB, uBoxB, base), uMix);
    float shade = clamp(0.2 + 0.93 * rel, 0.48, 1.24);
    float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    vec3 ocean = mix(uOcean, uOceanLift, 0.5 + 0.5 * n.y) * (0.75 + 0.25 * lit);
    vec3 lc = land.rgb * (1.0 + 0.28 * focus) + uFocus * 0.06 * focus;
    // land (alpha 255) takes the terrain shading; painted water (shelf, lakes, rivers: alpha 254) is lit by the globe only
    float water = step(0.5, land.a) * (1.0 - smoothstep(0.9965, 0.999, land.a));
    vec3 col = mix(ocean, mix(lc * lit * shade, land.rgb * (0.8 + 0.2 * lit), water), clamp(land.a / 0.996, 0.0, 1.0));
    // a fine film grain on land, one device pixel per grain, so large fills read as a surface and not as plastic
    float grain = fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453);
    col *= 1.0 + (grain - 0.5) * 0.05 * land.a;
    if (uLook > 0.5) {
      // the light's look (design plan §8.3): the sun glints on open water and painted water, its roughness swaying
      // slowly like wind on the sea, and the rim glows only on the lit side
      vec3 L = normalize(uLight), hv = normalize(L + v);
      float wm = max(1.0 - clamp(land.a / 0.996, 0.0, 1.0), water);
      vec2 g = vUv * vec2(720.0, 360.0);
      float wind = fract(sin(dot(floor(g), vec2(127.1, 311.7))) * 43758.5453);
      float a = 0.11 + 0.06 * wind, a2 = a * a, nh = max(dot(n, hv), 0.0);
      float D = a2 / (3.14159 * pow(nh * nh * (a2 - 1.0) + 1.0, 2.0));
      float F = 0.02 + 0.98 * pow(1.0 - max(dot(v, hv), 0.0), 5.0);
      col += vec3(1.0, 0.95, 0.86) * D * F * max(dot(n, L), 0.0) * 0.22 * wm;
      col += uRim * rim * 0.55 * (0.3 + 0.7 * smoothstep(-0.3, 0.5, dot(n, L)));
    } else col += uRim * rim * 0.55;
    gl_FragColor = vec4(col, 1.0);
  }`;
const airFrag = /* glsl */`
  uniform vec3 uRim, uLight; uniform float uLook; varying vec3 vN; varying vec3 vW;
  void main() {
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float f = pow(clamp(1.0 - abs(dot(n, v)), 0.0, 1.0), 2.4);
    if (uLook > 0.5) {
      // one scattering, cheaply: bright where the sun is, a warm band at the day's edge, a thin bright limb
      float sun = dot(n, normalize(uLight));
      float day = smoothstep(-0.35, 0.3, sun), edge = exp(-pow((sun + 0.05) / 0.18, 2.0));
      vec3 c = mix(uRim, vec3(1.0, 0.62, 0.4), edge * 0.55);
      gl_FragColor = vec4(c * (1.0 + 0.6 * pow(f, 6.0)), f * 0.9 * mix(0.22, 1.1, day));
    } else gl_FragColor = vec4(uRim, f * 0.9);
  }`;
const tubeVert = /* glsl */`
  varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const tubeFrag = /* glsl */`
  uniform vec3 uColor; uniform float uDraw, uOpacity, uDash, uTime; varying vec2 vUv;
  void main() {
    if (vUv.x > uDraw) discard;
    if (uDash > 0.0 && fract(vUv.x * uDash - uTime * 0.15) < 0.38) discard;
    float head = smoothstep(uDraw - 0.12, uDraw, vUv.x);
    gl_FragColor = vec4(uColor * (1.0 + head * 0.6), uOpacity * (0.8 + 0.45 * head));
  }`;

// ── geometry ────────────────────────────────────────────────────────────────
function lineGeometry(lines, lift = 1.0015) {
  const pos = [];
  for (const ring of lines) for (let i = 1; i < ring.length; i++) {
    const a = ring[i - 1], b = ring[i];
    if (Math.abs(a[0] - b[0]) > 180) continue; // antimeridian jump
    const va = ll(a[1], a[0], lift), vb = ll(b[1], b[0], lift);
    pos.push(va.x, va.y, va.z, vb.x, vb.y, vb.z);
  }
  const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3)); return g;
}
// Antialiased lines of a fixed width on screen (CSS px), at radius 1: the frame scales them just above the ground, by
// less the closer the camera is, so in a tilted city view they sit on the painted fills instead of floating over them.
const fatLines = (lines, color, width) => {
  const pos = lineGeometry(lines, 1).getAttribute('position').array;
  const mat = new LineMaterial({ color, linewidth: width, transparent: true, opacity: 0, depthWrite: false, worldUnits: false });
  const m = new LineSegments2(new LineSegmentsGeometry().setPositions(pos), mat);
  m.frustumCulled = false; return m;
};
const ringsOf = f => {
  const g = f.geometry; if (!g) return [];
  return (g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : []).flat();
};

// Points along great circles through a list of [lat, lon], lifted off the ground.
function pathPoints(points, lift) {
  const out = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    if (!i) { out.push(ll(p[0], p[1], lift)); continue; }
    const q = points[i - 1]; const it = geoInterpolate([q[1], q[0]], [p[1], p[0]]);
    const n = Math.max(1, Math.ceil(geoDistance([q[1], q[0]], [p[1], p[0]]) / 0.002));
    for (let k = 1; k <= n; k++) { const [lon, lat] = it(k / n); out.push(ll(lat, lon, lift)); }
  }
  return out;
}

const tubeMaterial = (color, dash = 0) => new ShaderMaterial({
  uniforms: { uColor: { value: new Color(color) }, uDraw: { value: 0 }, uOpacity: { value: 0 }, uDash: { value: dash }, uTime: { value: 0 } },
  vertexShader: tubeVert, fragmentShader: tubeFrag, transparent: true, depthWrite: false, blending: AdditiveBlending,
});

function arrowMesh(a, b, color, alt) {
  const from = [a[1], a[0]], to = [b[1], b[0]];
  const it = geoInterpolate(from, to);
  const ang = geoDistance(from, to);
  const h = clamp(ang * 0.22, 0.00002, 0.07);
  const pts = [];
  for (let i = 0; i <= 48; i++) { const t = i / 48; const [lon, lat] = it(t); pts.push(ll(lat, lon, 1.002 + Math.sin(Math.PI * t) * h)); }
  const radius = clamp(alt / R_KM * 0.0032, 0.00006, 0.004);
  const curve = new CatmullRomCurve3(pts);
  const mat = tubeMaterial(color);
  const tube = new Mesh(new TubeGeometry(curve, 96, radius, 6, false), mat);
  const head = new Mesh(new ConeGeometry(radius * 3.2, radius * 9, 10), new MeshBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false }));
  head.position.copy(curve.getPointAt(1));
  head.quaternion.copy(new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), curve.getTangentAt(1)));
  const g = new Group(); g.add(tube, head); g.userData = { mat, head };
  return g;
}

// The real 1989 Wall: one merged tube mesh per kind (front wall bright, rear wall dim).
// The Wall standing on the city: a vertical ribbon along the real 1989 route, dark at the foot and light at the
// top, `height` km tall (exaggerated: the real wall was 3.6 m). u runs along each line, so it draws itself in like the
// other lines, and the 1989 scenes break it into pieces.
const ribbonVert = /* glsl */`
  varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const ribbonFrag = /* glsl */`
  uniform vec3 uColor; uniform float uDraw, uOpacity, uDash, uTime; varying vec2 vUv;
  void main() {
    if (vUv.x > uDraw) discard;
    if (uDash > 0.0 && fract(vUv.x * uDash - uTime * 0.15) < 0.38) discard;
    float h = vUv.y;
    vec3 c = uColor * (0.45 + 0.55 * h) + vec3(0.35) * smoothstep(0.82, 1.0, h);
    gl_FragColor = vec4(c, uOpacity * (0.7 + 0.3 * h));
  }`;
function wallMesh(features, kind, height, dash) {
  const pos = [], uv = [], idx = [];
  for (const f of features) {
    if (f.properties.kind !== kind || !f.geometry) continue;
    const parts = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.type === 'MultiLineString' ? f.geometry.coordinates : [];
    for (const line of parts) {
      if (line.length < 2) continue;
      const d = [0]; for (let i = 1; i < line.length; i++) d.push(d[i - 1] + Math.hypot((line[i][0] - line[i - 1][0]) * 0.61, line[i][1] - line[i - 1][1]));
      const total = d.at(-1) || 1, v0 = pos.length / 3;
      line.forEach(([lon, lat], i) => {
        const a = ll(lat, lon, 1.000002), b = ll(lat, lon, 1 + height / R_KM);
        pos.push(a.x, a.y, a.z, b.x, b.y, b.z); uv.push(d[i] / total, 0, d[i] / total, 1);
        if (i) { const k = v0 + (i - 1) * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
      });
    }
  }
  if (!pos.length) return null;
  const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new Float32BufferAttribute(uv, 2)); g.setIndex(idx);
  const mat = new ShaderMaterial({
    uniforms: { uColor: { value: new Color(kind === 'front' ? LINE.wall : '#a99be0') }, uDraw: { value: 0 }, uOpacity: { value: 0 }, uDash: { value: dash }, uTime: { value: 0 } },
    vertexShader: ribbonVert, fragmentShader: ribbonFrag, transparent: true, depthWrite: false, side: DoubleSide,
  });
  const m = new Mesh(g, mat); m.frustumCulled = false; return m;
}

// ── painting: worker when possible, idle time on the main thread otherwise ────────────────────────────
function painter(feats, dataUrl, onDone) {
  const jobs = new Map(); // key → job, waiting
  let worker = null, mode = 'main';
  const canWorker = !!dataUrl && typeof Worker !== 'undefined' && typeof OffscreenCanvas !== 'undefined'
    && (() => { try { return !!new OffscreenCanvas(1, 1).getContext('2d'); } catch { return false; } })();
  if (canWorker) {
    try {
      worker = new Worker(new URL('./world-paint.js', import.meta.url), { type: 'module' });
      mode = 'worker';
      worker.onmessage = ({ data: m }) => {
        if (m.failed || m.ready) { if (m.failed) fallBack(); return; }
        const job = jobs.get(m.key); jobs.delete(m.key);
        if (job) onDone(job, m.bitmap ? { bitmap: m.bitmap } : { ids: m.ids }, m.ms, 'worker');
      };
      worker.onerror = fallBack;
      worker.postMessage({ type: 'init', url: new URL(dataUrl, location.href).href, focus: PALETTE.focus });
    } catch { worker = null; mode = 'main'; }
  }
  function fallBack() {
    if (mode === 'main') return;
    mode = 'main'; try { worker.terminate(); } catch { /* gone already */ }
    for (const job of jobs.values()) queueMain(job);
  }
  const idle = f => (window.requestIdleCallback ? requestIdleCallback(f, { timeout: 400 }) : setTimeout(f, 16));
  let mainQueue = [], busy = false;
  function queueMain(job) { mainQueue.push(job); pump(); }
  function pump() {
    if (busy || !mainQueue.length) return;
    busy = true;
    idle(() => {
      const job = mainQueue.shift(); busy = false;
      if (jobs.has(job.key)) {
        jobs.delete(job.key);
        const r = runJob(feats, job, (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; });
        onDone(job, r.ids ? { ids: r.ids } : { canvas: r.canvas }, r.ms, 'main');
      }
      pump();
    });
  }
  return {
    get mode() { return mode; },
    has: key => jobs.has(key),
    request(job, urgent = false) {
      if (jobs.has(job.key)) return;
      jobs.set(job.key, job);
      if (mode === 'worker') worker.postMessage(job);
      else if (urgent) { mainQueue.unshift(job); pump(); } else queueMain(job);
    },
    // the first states are needed before the first frame: paint them now, wherever the painter lives
    now(job) {
      const r = runJob(feats, job, (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; });
      onDone(job, r.ids ? { ids: r.ids } : { canvas: r.canvas }, r.ms, 'main');
    },
    destroy() { if (worker) worker.terminate(); },
  };
}

// ── engine ──────────────────────────────────────────────────────────────────
// scenes: engine scenes; a chapter panel that steps through several years has one per year, all with the same `panel`.
export async function createWorld(host, { scenes, hero, data, dataUrl, relief, terrain = null, layers = null, light: lightMode = 'fixed', values = null, accent = null, reduced = false, look = 0, onFrame } = {}) {
  if (accent) PALETTE.focus = accent;
  const canvas = document.createElement('canvas');
  canvas.className = 'world__canvas';
  host.appendChild(canvas);
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch { canvas.remove(); return null; }
  renderer.setClearColor(0x05060a, 1);
  const phone = matchMedia('(max-width: 760px)').matches;
  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.0005, 100);
  const globe = new Group(); scene.add(globe);
  const stats = { paints: [], boxes: {}, frames: 0, skipped: 0, frameMs: 0, worstFrameMs: 0, painter: '' };
  let dirty = true;

  const feats = featuresOf(data);
  const { countries, berlin } = feats;
  // label point of each country (modern borders carry one; dated borders do not need it)
  const point = new Map(countries.filter(f => f.properties.lat != null).map(f => [f.properties.key, f.properties]));
  const sceneOf = i => (i < 0 ? hero : scenes[i]);
  // geography layers (tools/build-geo.mjs: earthquakes, volcanoes, plate boundaries) that some scene asks for, loaded
  // before the first frame (together about 180 KB compressed)
  const layerData = {};
  {
    const wants = new Set();
    for (const s of [hero, ...scenes]) {
      for (const q of s.map.points || []) wants.add(q.id);
      if (s.map.plates) wants.add('plates');
      if (s.map.isolines && layers && layers.shake) layers[`shake:${s.map.isolines.id}`] = `${layers.shake}${s.map.isolines.id}.json`, wants.add(`shake:${s.map.isolines.id}`);
    }
    await Promise.all([...wants].filter(k => layers && layers[k]).map(async k => { try { layerData[k] = await (await fetch(layers[k])).json(); } catch { /* the scene shows without it */ } }));
  }
  const isData = s => !!(values && s && s.map.data && values[s.map.data.id]);

  // ── values: one row per state (row 0 = hero, row i + 1 = scene i), one column per country, (value, focus) ──
  const NC = countries.length, NS = scenes.length + 1;
  const valArr = new Float32Array(NC * NS * 2).fill(-1e9);
  [hero, ...scenes].forEach((s, r) => {
    if (!isData(s)) return;
    const focus = new Set(s.map.focus || []);
    countries.forEach((f, n) => {
      const v = valueOf(values, s.map.data, f.properties.key), o = (r * NC + n) * 2;
      valArr[o] = v == null ? -1e9 : v; valArr[o + 1] = focus.has(f.properties.key) ? 1 : 0;
    });
  });
  const valTex = new DataTexture(valArr, NC, NS, RGFormat, FloatType);
  valTex.minFilter = valTex.magFilter = NearestFilter; valTex.needsUpdate = true;
  const rampArr = new Uint8Array(256 * 2 * 4);
  for (const [k, row] of Object.entries(RAMP_ROW)) {
    const sc = scaleOf({ id: '', domain: [0, 255], scale: k });
    for (let x = 0; x < 256; x++) {
      const [r, g, b] = sc.color(x).match(/\d+/g).map(Number), o = (row * 256 + x) * 4;
      rampArr.set([r, g, b, 255], o);
    }
  }
  const rampTex = new DataTexture(rampArr, 256, 2); rampTex.colorSpace = SRGBColorSpace;
  rampTex.minFilter = rampTex.magFilter = LinearFilter; rampTex.needsUpdate = true;
  const slotOf = i => {
    const s = sceneOf(i); if (!isData(s)) return new Vector4(-1, 0, 1, 0);
    const sc = scaleOf(s.map.data); return new Vector4(i + 1, sc.d0, sc.d1, RAMP_ROW[sc.kind]);
  };

  // ── textures: per state a world and a detail texture (painted), plus id textures for data states ──
  // The detail texture covers what the scene's camera actually shows (screen corners cast onto the globe, see view.js)
  // with square texels about half a CSS pixel at the target, up to 4096 px a side (2048 on phones). It is worked out
  // for the screen the page opened on; only a resize that changes the screen a lot paints new textures.
  const GW = 2048;
  const MAXT = Math.min(phone ? 2048 : 4096, renderer.capabilities.maxTextureSize), MAXPX = phone ? 2048 * 1280 : 4096 * 2560;
  const TEXEL = phone ? 0.5 : 0.55; // CSS px per texel
  let REF = [host.clientWidth || innerWidth, host.clientHeight || innerHeight];
  const refKey = (w, h) => `${Math.round(w / 120)}x${Math.round(h / 120)}`;
  const BUDGET = (phone ? 96 : 320) * 2 ** 20; // bytes of painted textures kept on the GPU (mipmaps add a third)
  const texCache = new Map(); // key → { tex, used, bytes }
  const aniso = renderer.capabilities.getMaxAnisotropy();
  const toTex = (job, out) => {
    let t;
    if (out.ids) {
      t = new DataTexture(out.ids, job.W, job.H); t.minFilter = t.magFilter = NearestFilter; t.generateMipmaps = false;
    } else {
      // mipmaps, so a sharp texture seen from further away (mid-flight, or tilted) does not shimmer
      t = out.bitmap ? new Texture(out.bitmap) : new CanvasTexture(out.canvas);
      t.colorSpace = SRGBColorSpace; t.anisotropy = aniso; t.minFilter = LinearMipmapLinearFilter; t.generateMipmaps = true;
    }
    t.flipY = false; t.needsUpdate = true; return t;
  };
  const paint = painter(feats, dataUrl, (job, out, ms, where) => {
    texCache.set(job.key, { tex: toTex(job, out), used: performance.now(), bytes: job.W * job.H * 4 * (out.ids ? 1 : 4 / 3) });
    stats.paints.push({ kind: job.kind, ms: Math.round(ms), where, size: `${job.W}x${job.H}` });
    evict(); dirty = true;
  });
  stats.painter = paint.mode;
  // least recently used first, until the textures fit the budget; the four in use were used this frame and stay
  function evict() {
    let total = 0; for (const v of texCache.values()) total += v.bytes;
    if (total <= BUDGET) return;
    for (const [k, v] of [...texCache.entries()].sort((a, b) => a[1].used - b[1].used)) {
      if (total <= BUDGET || texCache.size <= 4) break;
      v.tex.dispose(); texCache.delete(k); total -= v.bytes; // GPU copy only: a texture still bound uploads again
    }
  }
  // what a state needs; equal keys are painted once (the years of one panel share every texture)
  const jobsFor = i => {
    const s = sceneOf(i), data = isData(s);
    // data states draw their focus in the shader and with vector outlines, so the painted layer leaves it out
    const map = { borders: s.map.borders, fill: s.map.fill, city: data ? null : s.map.city, areas: s.map.areas, focus: data ? [] : s.map.focus };
    const { lat, lon } = s.camera;
    const fp = footprint(s.camera, REF[0], REF[1]);
    // the whole globe in view: a hemisphere around the target is enough, at the screen's own density
    const box = fp.box || [lon - 75, Math.max(-89.5, lat - 60), lon + 75, Math.min(89.5, lat + 60)];
    const size = textureSize(box, Math.max(0.003, (fp.kmPerPx || 40) * TEXEL), MAXT, MAXPX);
    stats.boxes[i] = { box: box.map(v => +v.toFixed(2)), size: `${size.W}x${size.H}`, texelKm: +size.texelKm.toFixed(3), kmPerPx: +fp.kmPerPx.toFixed(3) };
    const r = v => +v.toFixed(3);
    const bk = `${box.map(r).join(',')}|${size.W}x${size.H}`, mk = JSON.stringify({ ...map, city: null });
    const jobs = {
      g: { kind: 'paint', key: `g|${mk}`, map: { ...map, city: null }, box: [-180, -90, 180, 90], W: GW, H: GW / 2 },
      d: { kind: 'paint', key: `d|${JSON.stringify(map)}|${bk}`, map, box, W: size.W, H: size.H, css: size.texelKm / Math.max(1e-6, fp.kmPerPx || size.texelKm) },
    };
    if (data) {
      jobs.ig = { kind: 'ids', key: `ig|${map.borders}`, date: map.borders, box: [-180, -90, 180, 90], W: GW, H: GW / 2 };
      jobs.id = { kind: 'ids', key: `id|${map.borders}|${bk}`, date: map.borders, box, W: size.W, H: size.H };
    }
    return { jobs, box: new Vector4(...box), kmPerPx: fp.kmPerPx };
  };
  const stateCache = new Map();
  const stateOf = i => { if (!stateCache.has(i)) stateCache.set(i, jobsFor(i)); return stateCache.get(i); };
  // the textures of a state, or null while any is still painting (the caller then keeps the last complete one)
  function texturesOf(i, urgent = false) {
    const st = stateOf(i), out = { box: st.box }, now = performance.now();
    let ready = true;
    for (const [k, job] of Object.entries(st.jobs)) {
      const c = texCache.get(job.key);
      if (c) { c.used = now; out[k] = c.tex; } else { ready = false; paint.request(job, urgent); }
    }
    return ready ? out : null;
  }
  const blank = new DataTexture(new Uint8Array(4), 1, 1); blank.needsUpdate = true;

  // ── terrain: shaded DEM tiles (tools/build-terrain.mjs) composed into one texture per state, over its detail box ──
  // A state never waits for its terrain: it shows the base relief until the tiles are in, then the frame redraws.
  // Level: ~215 m where a screen pixel is under 0.45 km at the target, ~430 m for the middle views, none from far away.
  const tiledIndex = async url => {
    const j = url ? await fetch(url).then(r => (r.ok ? r.json() : null)).catch(() => null) : null;
    return j ? { ...j, base: new URL('.', new URL(url, location.href)), levels: j.levels.map(L => ({ ...L, has: new Set(L.tiles) })) } : null;
  };
  const tIndex = await tiledIndex(terrain);
  const tLevels = tIndex ? tIndex.levels : [];
  const tLoading = new Set();
  // draw the tiles of some levels (coarse first, finer on top) over a lon/lat box into a W × H canvas, north up;
  // tiles are equirectangular, `deg` degrees a side, named by x = floor((lon + 180) / deg), y = floor((lat + 90) / deg)
  async function composeTiles(base, levels, [w, so, e, n], W, H) {
    const canvas = document.createElement('canvas'); canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingQuality = 'high'; // a tile drawn smaller is averaged, not sampled, so it matches the level below
    let any = false;
    const ppd = W / (e - w);
    for (const L of levels) {
      if (L !== levels[0] && L.ppd > ppd * 3) continue; // much finer than the canvas: only aliasing and downloads
      const jobs = [];
      for (let x = Math.floor((w + 180) / L.deg); x <= Math.floor((e + 180) / L.deg); x++)
        for (let y = Math.floor((so + 90) / L.deg); y <= Math.floor((n + 90) / L.deg); y++) if (L.has.has(`${x}_${y}`)) jobs.push([x, y]);
      const imgs = await Promise.all(jobs.map(([x, y]) => fetch(new URL(`${L.z}/${x}_${y}.jpg`, base)).then(r => r.blob()).then(b => createImageBitmap(b)).catch(() => null)));
      jobs.forEach(([x, y], j) => {
        const img = imgs[j]; if (!img) return;
        const lon0 = x * L.deg - 180, lat1 = (y + 1) * L.deg - 90; // row 0 of a tile is its north edge, as on the canvas
        // whole-pixel edges, so neighbouring tiles meet without a hairline gap
        const x0 = Math.floor((lon0 - w) / (e - w) * W), x1 = Math.ceil((lon0 + L.deg - w) / (e - w) * W);
        const y0 = Math.floor((n - lat1) / (n - so) * H), y1 = Math.ceil((n - lat1 + L.deg) / (n - so) * H);
        ctx.drawImage(img, x0, y0, x1 - x0, y1 - y0);
        img.close(); any = true;
      });
    }
    return any ? canvas : null;
  }
  const tileTexture = (canvas, key, W, H) => {
    const t = new CanvasTexture(canvas); t.minFilter = LinearMipmapLinearFilter; t.anisotropy = aniso; // flipY on: north up
    texCache.set(key, { tex: t, used: performance.now(), bytes: W * H * 4 * 4 / 3 });
    evict(); dirty = true;
  };
  function terrainOf(i) {
    if (!tLevels.length) return null;
    const s = sceneOf(i), st = stateOf(i);
    if (s.camera.alt > 2500) return null;
    const fine = st.kmPerPx && st.kmPerPx < 0.45;
    // coarse first, fine on top; composeTiles leaves out a level much finer than the canvas (z1 on a continent-wide box)
    const levels = tLevels.filter(L => L.z <= 1 || (fine && L.z === 2)).sort((a, b) => a.ppd - b.ppd);
    const top = levels.at(-1), [w, so, e, n] = st.box.toArray();
    const k = Math.min(1, 2048 / ((e - w) * top.ppd), 2048 / ((n - so) * top.ppd));
    const W = Math.max(64, Math.round((e - w) * top.ppd * k)), H = Math.max(64, Math.round((n - so) * top.ppd * k));
    const key = `t|${st.box.toArray().map(v => v.toFixed(3)).join(',')}|${top.z}|${W}x${H}`;
    const c = texCache.get(key);
    if (c) { c.used = performance.now(); return c.tex; }
    if (tLoading.has(key)) return null;
    tLoading.add(key);
    composeTiles(tIndex.base, levels, [w, so, e, n], W, H).then(canvas => { tLoading.delete(key); if (canvas) tileTexture(canvas, key, W, H); });
    return null;
  }


  // relief: Natural Earth shaded relief, a world image plus a sharper one over Europe
  const flat = new DataTexture(new Uint8Array([219, 219, 219, 255]), 1, 1); flat.needsUpdate = true;
  const light = new Vector3(-0.6, 0.55, 0.9);
  const rim = new Color('#8f86ff');
  const earthU = {
    uGA: { value: null }, uDA: { value: null }, uGB: { value: null }, uDB: { value: null },
    uIGA: { value: blank }, uIDA: { value: blank }, uIGB: { value: blank }, uIDB: { value: blank },
    uVal: { value: valTex }, uRamp: { value: rampTex },
    uSlotA: { value: new Vector4(-1, 0, 1, 0) }, uSlotB: { value: new Vector4(-1, 0, 1, 0) }, uWA: { value: 0 }, uWB: { value: 1 },
    uBoxA: { value: new Vector4() }, uBoxB: { value: new Vector4() },
    uRelW: { value: flat }, uRelE: { value: flat }, uTA: { value: blank }, uTB: { value: blank },
    uQA: { value: blank }, uQB: { value: blank }, uQBoxA: { value: new Vector4() }, uQBoxB: { value: new Vector4() },
    uRelBox: { value: new Vector4(...(relief?.europeBox || [0, 0, 1, 1])) },
    uMix: { value: 0 }, uHatch: { value: 60 }, uLook: { value: look ? 1 : 0 }, uLight: { value: light }, uCut: { value: new Vector3(0, 0, 0) },
    uOcean: { value: new Color('#06080d') }, uOceanLift: { value: new Color('#0c1220') }, uRim: { value: rim }, uFocus: { value: new Color(PALETTE.focus) },
  };
  if (relief) {
    const tl = new TextureLoader();
    const relTex = t => { t.minFilter = LinearMipmapLinearFilter; t.anisotropy = aniso; return t; };
    tl.load(relief.world, t => { earthU.uRelW.value = relTex(t); dirty = true; });
    tl.load(relief.europe, t => { earthU.uRelE.value = relTex(t); dirty = true; });
  }
  // fine enough that the flat facets sag at most ~120 m (~1.2 km with the old 160 × 120), so city lines stay on their fills
  const earth = new Mesh(phone ? new SphereGeometry(1, 384, 192) : new SphereGeometry(1, 512, 256), new ShaderMaterial({
    uniforms: earthU, vertexShader: shellVert, fragmentShader: earthFrag, defines: { ...(values ? { HAS_DATA: '' } : {}) },
  }));
  earth.rotation.y = -Math.PI / 2; // equirectangular u=0 at lon -180
  const air = new Mesh(new SphereGeometry(1.06, 96, 64), new ShaderMaterial({
    uniforms: { uRim: { value: rim }, uLight: { value: light }, uLook: { value: look ? 1 : 0 } }, vertexShader: shellVert, fragmentShader: airFrag,
    side: BackSide, transparent: true, blending: AdditiveBlending, depthWrite: false,
  }));
  globe.add(earth, air);

  // star dust far away, for depth when the camera moves
  {
    const n = 1800, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const v = new Vector3().randomDirection().multiplyScalar(30 + Math.random() * 30); pos.set([v.x, v.y, v.z], i * 3); }
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3));
    scene.add(new Points(g, new ShaderMaterial({
      vertexShader: 'void main(){ gl_PointSize = 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'void main(){ gl_FragColor = vec4(0.75,0.72,1.0,0.35); }', transparent: true, depthWrite: false,
    })));
  }

  // borders: one line set per distinct border date, cross-faded. Only lines between two states: coasts are where land
  // meets sea in the painted texture (Natural Earth 1:10m), so a coarser coastline is never drawn beside it
  const borderSets = new Map();
  const statesObj = data.objects.cshapes || data.objects.countries;
  const bordersFor = date => {
    if (date === 'none') return null; // a natural globe: land, water and relief only
    if (borderSets.has(date)) return borderSets.get(date);
    const on = g => !g.properties || !g.properties.from || !date || date === 'modern' || (g.properties.from <= date && date < g.properties.to);
    const lines = mesh(data, statesObj, (a, b) => a !== b && on(a) && on(b)).coordinates;
    const m = fatLines(lines, values ? '#0b0e15' : '#c8cde0', 1.25);
    globe.add(m); borderSets.set(date, m); return m;
  };

  // per-scene overlays: arrows, lines and focus outlines, built on demand
  const gates = new Map(); // panel → 0..1: flows wait for their step of a chain
  const overlays = new Map();
  const overlayFor = i => {
    if (i < 0 || i >= scenes.length) return null;
    if (overlays.has(i)) return overlays.get(i);
    const s = scenes[i]; const g = new Group(); const items = [];
    (s.map.arrows || []).forEach(a => { const m = arrowMesh(a.from, a.to, ARROW[a.kind] || '#fff', s.camera.alt); g.add(m); items.push({ type: 'arrow', m }); });
    (s.map.flows || []).forEach(a => {
      const p = point.get(a.from), q = point.get(a.to); if (!p || !q) return;
      const m = arrowMesh([p.lat, p.lon], [q.lat, q.lon], ARROW[a.kind] || ARROW.capital, s.camera.alt); g.add(m); items.push({ type: 'arrow', m, flow: true });
    });
    if (s.map.plates && layerData.plates) for (const [kind, lines] of plateLines(layerData.plates, s.map.plates)) {
      const m = fatLines(lines, PLATE_COLOR[kind], 1.8); g.add(m); items.push({ type: 'outline', m, mat: m.material });
    }
    const shake = s.map.isolines && layerData[`shake:${s.map.isolines.id}`];
    if (shake) for (const [v, lines] of Object.entries(shake.levels)) {
      const m = fatLines(lines, MMI_COLOR[v] || '#fff', +v >= 8 ? 2.2 : 1.6); g.add(m); items.push({ type: 'outline', m, mat: m.material });
    }
    if (isData(s) && (s.map.focus || []).length) {
      const rings = countriesAt(countries, s.map.borders).filter(f => s.map.focus.includes(f.properties.key)).flatMap(ringsOf);
      const m = fatLines(rings, PALETTE.focus, 2); g.add(m); items.push({ type: 'outline', m, mat: m.material });
    }
    (s.map.lines || []).forEach(l => {
      if (l.kind === 'wall' && berlin) {
        // the real route; after 9 November 1989 it is drawn broken, as the crossings open
        const open = s.map.borders >= WALL_DOWN;
        const h = clamp(s.camera.alt * 0.006, 0.08, 0.5); // km: tall enough to read from the scene's camera
        for (const kind of ['front', 'rear']) {
          const m = wallMesh(berlin.wall, kind, kind === 'front' ? h : h * 0.6, open ? 7 : 0);
          if (m) { g.add(m); items.push({ type: 'line', m, mat: m.material, k: kind === 'front' ? 1 : 0.55, dash: open }); }
        }
        return;
      }
      if (l.kind === 'iron-curtain') {
        // the real dated border between the West (West Germany, Austria) and the bloc (East Germany, Czechoslovakia, Hungary)
        if (!data.objects.cshapes) return;
        const d = dayNum(s.map.borders), on = g => g.properties.from <= s.map.borders && s.map.borders < g.properties.to;
        const W = ['FRG', 'AUT'], E = ['GDR', 'CSK', 'HUN'];
        const m = mesh(data, data.objects.cshapes, (a, b) => a !== b && on(a) && on(b)
          && ((W.includes(a.properties.key) && E.includes(b.properties.key)) || (E.includes(a.properties.key) && W.includes(b.properties.key))));
        const radius = clamp(s.camera.alt / R_KM * 0.0021, 0.000012, 0.003);
        for (const line of m.coordinates) {
          if (line.length < 2 || !d) continue;
          const pts = line.map(([lon, lat]) => ll(lat, lon, 1.0008));
          let len = 0; for (let q = 1; q < pts.length; q++) len += pts[q].distanceTo(pts[q - 1]);
          const mat = tubeMaterial(LINE['iron-curtain'], Math.max(6, len * 1800));
          const tube = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts, false, 'centripetal'), Math.min(1600, pts.length * 3), radius, 5, false), mat);
          g.add(tube); items.push({ type: 'line', m: tube, mat, k: 1, dash: true });
        }
        return;
      }
      const wall = l.kind === 'wall';
      const pts = pathPoints(l.points, wall ? 1.00003 : 1.0008);
      const closed = l.points[0][0] === l.points.at(-1)[0] && l.points[0][1] === l.points.at(-1)[1];
      const radius = clamp(s.camera.alt / R_KM * (wall ? 0.0016 : 0.0021), 0.000012, 0.003);
      const mat = tubeMaterial(LINE[l.kind] || '#fff', wall ? 0 : 90);
      const m = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts, closed, 'centripetal'), Math.min(1200, pts.length * 3), radius, 5, false), mat);
      g.add(m); items.push({ type: 'line', m, mat, k: 1, dash: !wall });
    });
    g.visible = false; globe.add(g); const o = { g, items }; overlays.set(i, o); return o;
  };
  // returns true while a visible item animates on its own (dashed lines), so the next frame must be drawn
  const setOverlay = (i, draw, opacity, time) => {
    const o = overlayFor(i); if (!o) return false;
    o.g.visible = opacity > 0.001;
    const gate = gates.has(scenes[i].panel) ? gates.get(scenes[i].panel) : 1;
    let live = false;
    o.items.forEach((it, k) => {
      if (it.type === 'arrow') {
        const d = clamp(draw * 1.25 - k * 0.12) * (it.flow ? gate : 1);
        it.m.userData.mat.uniforms.uDraw.value = reduced ? (it.flow ? (gate > 0.5 ? 1 : 0) : 1) : d;
        it.m.userData.mat.uniforms.uOpacity.value = opacity;
        it.m.userData.head.material.opacity = opacity * smooth(0.92, 1, it.m.userData.mat.uniforms.uDraw.value);
      } else if (it.type === 'outline') {
        it.mat.opacity = opacity * 0.9; it.mat.resolution = lineRes; it.m.scale.setScalar(lineLift);
      } else {
        it.mat.uniforms.uDraw.value = reduced ? 1 : clamp(draw * 1.1);
        it.mat.uniforms.uOpacity.value = opacity * 0.95 * it.k;
        it.mat.uniforms.uTime.value = time;
        if (it.dash && opacity > 0.001 && !reduced) live = true;
      }
    });
    return live;
  };

  // spikes: columns rising from each country's label point, height = value (only where height means something)
  const spikeKeys = [...point.keys()];
  const spikes = new InstancedMesh(new CylinderGeometry(1, 1, 1, 10, 1, false).translate(0, 0.5, 0), new MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.92, depthWrite: true }), Math.max(1, spikeKeys.length));
  spikes.instanceMatrix.setUsage(DynamicDrawUsage); spikes.frustumCulled = false; spikes.visible = false;
  globe.add(spikes);
  const spikeDirs = spikeKeys.map(k => { const p = point.get(k); return ll(p.lat, p.lon).normalize(); });
  const spikeCache = new Map();
  const spikeHeights = i => {
    if (spikeCache.has(i)) return spikeCache.get(i);
    const s = sceneOf(i), sp = s.map.spikes;
    const h = new Float32Array(spikeKeys.length);
    if (sp && values) { const d1 = scaleOf(sp).d1; spikeKeys.forEach((k, n) => { const v = valueOf(values, sp, k); h[n] = v == null || v <= 0 ? 0 : Math.min(1.4, v / d1); }); }
    const r = { h, on: !!sp, alt: s.camera.alt, spec: sp }; spikeCache.set(i, r); return r;
  };
  const sm = new Matrix4(), sq = new Quaternion(), sv = new Vector3(), ss = new Vector3(), Y = new Vector3(0, 1, 0);
  const spikeColor = new Color(), WHITE = new Color('#ffffff');
  let spikeKey = '';
  function setSpikes(i, j, mix, alt) {
    const A = spikeHeights(i), B = spikeHeights(j);
    const on = (A.on ? 1 - mix : 0) + (B.on ? mix : 0);
    spikes.visible = on > 0.01; if (!spikes.visible) return;
    const key = `${i}|${j}|${mix.toFixed(4)}|${Math.round(alt)}`; if (key === spikeKey) return; spikeKey = key;
    const len = 0.3, rad = clamp(Math.sqrt(alt / 6000) * 0.0032, 0.0012, 0.006); // needles: height carries the value
    spikeKeys.forEach((k, n) => {
      const hA = A.on ? A.h[n] : 0, hB = B.on ? B.h[n] : 0;
      const hh = (hA + (hB - hA) * mix) * on, dir = spikeDirs[n];
      sq.setFromUnitVectors(Y, dir); sv.copy(dir).multiplyScalar(1.0006);
      ss.set(rad, Math.max(1e-6, hh * len), rad);
      sm.compose(sv, sq, ss); spikes.setMatrixAt(n, sm);
      spikeColor.set(PALETTE.focus).lerp(WHITE, clamp(hh / Math.max(on, 1e-3) / 1.2) * 0.7); spikes.setColorAt(n, spikeColor);
    });
    spikes.instanceMatrix.needsUpdate = true; if (spikes.instanceColor) spikes.instanceColor.needsUpdate = true;
  }

  // points: earthquakes and volcanoes, cross-faded between the scenes that show them. A scene that plays its quakes runs
  // a clock through the years (PLAY_RATE a second, from the first year when the scene starts playing) and keeps frames
  // coming while it does
  const PLAY_RATE = 0.8;
  const pointSets = Object.fromEntries(['quakes', 'volcanoes'].filter(k => layerData[k]).map(k => { const l = pointsLayer(k, layerData[k]); globe.add(l.obj); return [k, l]; }));
  const pointSpec = (s, id) => s && (s.map.points || []).find(q => q.id === id);
  let clockYear = null, playT0 = null;
  function setPoints(sA, sB, mix, time, alt) {
    let live = false; clockYear = null;
    const scale = clamp(1.15 - Math.log10(alt / 6000) * 0.35, 0.8, 1.8), px = renderer.getPixelRatio();
    let playing = false;
    for (const [id, l] of Object.entries(pointSets)) {
      const a = pointSpec(sA, id), b = pointSpec(sB, id), op = (a ? 1 - mix : 0) + (b ? mix : 0), spec = mix < 0.5 ? a || b : b || a;
      let now = 0;
      if (spec && spec.play && !reduced && op > 0.001) {
        const [y0, y1] = spec.years || [2000, 2025];
        if (playT0 == null) playT0 = time;
        const span = y1 - y0 + 4, run = (time - playT0) * PLAY_RATE;
        now = y0 + run % span; live = true; playing = true; clockYear = Math.min(y1, Math.floor(now));
      }
      l.set(spec, op, now, px, scale);
    }
    if (!playing) playT0 = null;
    return live;
  }

  // landscapes: a scene's relief3d { site, exag, topo, contours } lays that site's real heights on the globe, and its
  // section { from, to } draws a line across them (the panel draws the profile). Patches are built when first needed
  const THREE = { BufferGeometry, Float32BufferAttribute, Mesh, ShaderMaterial, MeshBasicMaterial, Group, Color, DoubleSide, Vector3 };
  const dems = new Map(), patches = new Map();
  const demOf = site => {
    if (!dems.has(site)) dems.set(site, layers && layers.dem ? loadDem(layers.dem, site).catch(() => null) : Promise.resolve(null));
    return dems.get(site);
  };
  const patchOf = i => {
    const s = sceneOf(i), r = s && s.map.relief3d; if (!r) return null;
    const key = `${r.site}|${r.exag || 1}|${JSON.stringify(s.map.section || null)}`;
    if (patches.has(key)) return patches.get(key);
    patches.set(key, null);
    demOf(r.site).then(dem => {
      if (!dem) return;
      const g = new Group(), m = terrainPatch(dem, r.exag || 1, light, THREE); g.add(m);
      let line = null;
      if (s.map.section) {
        const { pts } = sectionOf(dem, s.map.section.from, s.map.section.to, r.exag || 1);
        const pos = []; for (let k = 1; k < pts.length; k++) pos.push(pts[k - 1].x, pts[k - 1].y, pts[k - 1].z, pts[k].x, pts[k].y, pts[k].z);
        line = new LineSegments2(new LineSegmentsGeometry().setPositions(pos), new LineMaterial({ color: '#ffffff', linewidth: 2.5, transparent: true, opacity: 0, depthTest: false }));
        line.frustumCulled = false; line.renderOrder = 4; g.add(line);
      }
      g.visible = false; globe.add(g); patches.set(key, { g, m, line }); dirty = true;
    });
    return null;
  };
  function setLandscape(sA, sB, i, j, mix) {
    const want = new Map();
    const add = (k, s, op) => { if (s && s.map.relief3d && op > 0.001) { const p = patchOf(k); if (p) want.set(p, { s, op: (want.get(p)?.op || 0) + op }); } };
    add(i, sA, 1 - mix); add(j, sB, mix);
    for (const p of patches.values()) if (p && !want.has(p)) p.g.visible = false;
    for (const [p, { s, op }] of want) {
      const r = s.map.relief3d;
      p.g.visible = true; p.m.visible = true;
      const u = p.m.material.uniforms; u.uOpacity.value = op; u.uTopo.value = r.topo || 0; u.uContour.value = r.contours || 0;
      if (p.line) { p.line.material.opacity = op; p.line.material.resolution = lineRes; }
    }
  }
  // the Earth cut open: a scene's cutaway { lon } removes the northern octant from that longitude
  const cuts = new Map();
  function setCutaway(sA, sB, mix) {
    const a = sA && sA.map.cutaway, b = sB && sB.map.cutaway, spec = mix < 0.5 ? a || b : b || a;
    const open = (a ? 1 - mix : 0) + (b ? mix : 0);
    for (const c of cuts.values()) c.g.visible = false;
    if (!spec || open < 0.001) { earthU.uCut.value.set(0, 0, 0); air.visible = true; return; }
    if (!cuts.has(spec.lon)) { const c = cutaway(spec.lon, THREE); globe.add(c.g); cuts.set(spec.lon, c); }
    const e = reduced ? 1 : ease(clamp(open));
    cuts.get(spec.lon).set(e, 1);
    earthU.uCut.value.set(spec.lon, e, 1); air.visible = e < 0.02;
  }

  // ── legend: indicator, year (rolls), colour ramp with the focus countries on it, source ───────────
  const legend = document.createElement('div'); legend.className = 'world__legend'; host.appendChild(legend);
  legend.innerHTML = '<div class="world__lg"></div>';
  let legendKey = '', legendYear = '', legendTicks = [];
  const whenOf = spec => (spec.month ? `${MONTHS[+spec.month.slice(5) - 1]} ${spec.month.slice(0, 4)}` : String(spec.year));
  // the legend follows the state that fills more of the screen; values blend when both states share an indicator
  // geography layers: depth colours and sizes for quakes, the volcano symbol, boundary colours, sources
  function pointsLegend(s) {
    const q = pointSpec(s, 'quakes'), v = pointSpec(s, 'volcanoes'), pl = s.map.plates && layerData.plates;
    const sh = s.map.isolines && layerData[`shake:${s.map.isolines.id}`];
    if (sh) {
      const vs = Object.keys(sh.levels).map(Number).sort((a, b) => a - b);
      return `<p class="mono world__ind"><span>Shaking intensity, Modified Mercalli scale</span> · <span class="world__yr"><b>M ${sh.mag}</b></span></p>
        <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${vs.map(k => MMI_COLOR[k]).join(',')})"></div></div>
        <div class="world__ticks mono">${vs.map(k => `<span>${MMI_ROMAN[k]}</span>`).join('')}</div>
        <p class="mono world__unit">Each line joins places that shook equally hard</p>
        <p class="world__src">${sh.source}.</p>`;
    }
    const yrs = q && q.years ? `${q.years[0]}–${q.years[1]}` : '2000–2025';
    return `${q ? `<p class="mono world__ind"><span>Earthquakes, magnitude ${q.minMag || 5.5}+</span> · <span class="world__yr"><b>${yrs}</b></span></p>
        <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${DEPTH_STOPS.map(d => d[1]).join(',')})"></div></div>
        <div class="world__ticks mono">${DEPTH_STOPS.map((d, k) => `<span>${d[0]}${k === DEPTH_STOPS.length - 1 ? ' km' : ''}</span>`).join('')}</div>
        <p class="mono world__unit">Colour: depth of focus · size: magnitude</p>` : ''}
      ${v ? `<p class="mono world__key"><i style="--c:${VOLCANO_COLOR}" class="is-tri"></i>Volcanoes that erupted in the last 10,000 years</p>` : ''}
      ${pl ? `<p class="mono world__key">${(s.map.plates === true ? Object.keys(PLATE_COLOR) : s.map.plates).map(k => `<i style="--c:${PLATE_COLOR[k]}"></i>${{ divergent: 'Spreading', convergent: 'Subduction', collision: 'Collision', transform: 'Transform' }[k]}`).join(' ')}</p>` : ''}
      <p class="world__src">${[q && 'Earthquakes: USGS ComCat', v && 'Volcanoes: Smithsonian GVP', pl && 'Plates: PB2002 (Bird 2003)'].filter(Boolean).join('. ')}.</p>`;
  }
  function setLegend(sA, sB, w) {
    const s = w < 0.5 ? sA : sB;
    const spec = s && (s.map.data || s.map.spikes), sp = s && s.map.data && s.map.spikes;
    let key = spec && values && values[spec.id] ? `${spec.id}|${spec.domain}|${sp ? sp.id : ''}|${(s.map.focus || []).join()}` : '';
    const pts = !key && s && ((s.map.points || []).length || (s.map.plates && layerData.plates) || s.map.isolines);
    if (pts) key = `pts|${JSON.stringify(s.map.points || [])}|${JSON.stringify(s.map.plates || '')}|${JSON.stringify(s.map.isolines || '')}`;
    if (pts && key !== legendKey) {
      legendKey = key; legend.classList.add('is-on');
      const box = legend.firstElementChild, next = box.cloneNode(false);
      next.innerHTML = pointsLegend(s);
      box.classList.add('is-out'); next.classList.add('is-in'); legend.appendChild(next);
      requestAnimationFrame(() => next.classList.remove('is-in'));
      setTimeout(() => box.remove(), reduced ? 0 : 450);
    }
    if (pts) { // the year while quakes play
      const b = legend.lastElementChild.querySelector('.world__yr b');
      if (b && clockYear != null && b.textContent !== String(clockYear)) b.textContent = String(clockYear);
      return;
    }
    if (key !== legendKey) {
      legendKey = key; legendYear = '';
      legend.classList.toggle('is-on', !!key);
      if (key) {
        const ind = values[spec.id], sc = scaleOf(spec), focus = (s.map.data && s.map.focus) || [];
        const box = legend.firstElementChild, next = box.cloneNode(false);
        next.innerHTML = `<p class="mono world__ind"><span>${ind.label}</span> · <span class="world__yr"><b></b></span><span class="world__fc"></span></p>
          <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${sc.stops.join(',')})"></div>
            ${focus.map(k => `<i class="world__tick" data-k="${k}"><span>${k}</span></i>`).join('')}</div>
          <div class="world__ticks mono"><span>${sc.d0 < 0 ? '' : '≤ '}${fmtValue(sc.d0)}</span>${sc.kind === 'diverging' ? '<span>0</span>' : ''}<span>≥ ${fmtValue(sc.d1)}</span></div>
          <p class="mono world__unit">${ind.unit}${s.map.data ? ' · <i class="world__nodata"></i> no data' : ''}</p>
          ${sp && values[sp.id] ? `<p class="mono world__spk"><i></i>Height · ${values[sp.id].label} · <span class="world__spkm"></span></p>` : ''}
          <p class="world__src">${ind.source}${sp && values[sp.id] ? '. ' + values[sp.id].source : ''}</p>`;
        box.classList.add('is-out'); next.classList.add('is-in'); legend.appendChild(next);
        requestAnimationFrame(() => next.classList.remove('is-in'));
        setTimeout(() => box.remove(), reduced ? 0 : 450);
        legendTicks = focus.map(k => ({ k, el: next.querySelector(`[data-k="${k}"]`) }));
      }
    }
    if (!key) return;
    const box = legend.lastElementChild, ind = values[spec.id], sc = scaleOf(spec);
    const blend = s.map.data && sameScale(sA?.map.data, sB?.map.data);
    // year: the state on screen; while two years blend, the label rolls over at the midpoint
    const y = whenOf(spec), fc = ind.forecastFrom && +String(spec.month || spec.year).slice(0, 4) >= ind.forecastFrom ? ' · IMF projection' : '';
    if (y !== legendYear) {
      const yr = box.querySelector('.world__yr'), old = yr.firstElementChild, nb = document.createElement('b');
      nb.textContent = y;
      if (legendYear && !reduced) { nb.className = 'is-in'; yr.appendChild(nb); old.className = 'is-out'; requestAnimationFrame(() => nb.classList.remove('is-in')); setTimeout(() => old.remove(), 400); }
      else { yr.replaceChildren(nb); }
      box.querySelector('.world__fc').textContent = fc;
      legendYear = y;
    }
    if (sp) { const m = box.querySelector('.world__spkm'); const t = whenOf(sp); if (m && m.textContent !== t) m.textContent = t; }
    for (const t of legendTicks) {
      const a = sA && sA.map.data ? valueOf(values, sA.map.data, t.k) : null, b = sB && sB.map.data ? valueOf(values, sB.map.data, t.k) : null;
      const v = blend && a != null && b != null ? a + (b - a) * w : (w < 0.5 ? a : b);
      t.x = v == null ? null : clamp((v - sc.d0) / (sc.d1 - sc.d0)) * 100;
      t.el.style.opacity = v == null ? 0 : 1;
      if (v != null) t.el.style.left = `${t.x.toFixed(2)}%`;
    }
    // labels that would touch step up a row
    const ends = [];
    for (const t of legendTicks.filter(t => t.x != null).sort((p, q) => p.x - q.x)) {
      let r = 0; while (ends[r] != null && t.x - ends[r] < 11) r++;
      ends[r] = t.x; if (t.row !== r) { t.row = r; t.el.style.setProperty('--row', Math.min(r, 2)); }
    }
    const rb = box.querySelector('.world__rampbox'); if (rb && +rb.dataset.rows !== ends.length) { rb.dataset.rows = ends.length; rb.style.setProperty('--rows', Math.max(0, Math.min(ends.length, 3) - 1)); }
  }

  // ── markers: DOM labels pinned to the globe; on data maps the focus countries carry their live value ──
  const labels = document.createElement('div'); labels.className = 'world__labels'; host.appendChild(labels);
  const markerEls = new Map();
  const markersFor = i => {
    if (markerEls.has(i)) return markerEls.get(i);
    const s = sceneOf(i);
    const auto = isData(s) ? (s.map.focus || []).map(key => point.get(key)).filter(Boolean).map(p => ({ at: [p.lat, p.lon], label: p.name, key: p.key })) : [];
    const list = [...(s.map.markers || []), ...auto].map(m => {
      const el = document.createElement('div'); el.className = 'world__marker';
      el.innerHTML = `<i></i><span>${m.label}</span>${m.key ? '<b class="mono"></b>' : ''}`; labels.appendChild(el);
      return { el, at: m.at, v: ll(m.at[0], m.at[1], 1.000002), key: m.key, val: m.key ? el.querySelector('b') : null, text: '' };
    });
    // on a 3D landscape a marker stands on the raised ground, not at sea level under it
    const r = s.map.relief3d;
    if (r && list.length) demOf(r.site).then(dem => { if (!dem) return; list.forEach(m => { m.v = ll(m.at[0], m.at[1], 1 + (Math.max(0, dem.at(m.at[0], m.at[1])) * (r.exag || 1) + 30) / 6371000); }); dirty = true; });
    markerEls.set(i, list); return list;
  };

  // ── light: with `look` the frame goes through the post pipeline (bloom, shoulder, grade, vignette, grain) ──────
  const post = look ? createPost(renderer, { phone }) : null;
  const draw = () => (post ? post.render(scene, camera) : renderer.render(scene, camera));

  // ── camera ────────────────────────────────────────────────────────────────
  let W = 1, H = 1;
  const tmp = new Vector3(), lineRes = new Vector2(1, 1);
  let lineLift = 1.0015;

  function resize() {
    W = host.clientWidth || innerWidth; H = host.clientHeight || innerHeight;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone ? 1.5 : 1.75));
    renderer.setSize(W, H, false);
    setViewport(camera, W, H);
    if (post) post.setSize(W, H, renderer.getPixelRatio());
    lineRes.set(W, H);
    if (refKey(W, H) !== refKey(...REF)) { REF = [W, H]; stateCache.clear(); } // the next frames ask for textures that fit
    for (const list of markerEls.values()) list.forEach(m => { m.w = 0; });
    dirty = true;
  }

  // ── frame ─────────────────────────────────────────────────────────────────
  let progress = -1, drawn = NaN, live = false, visible = true, raf = 0;
  const t0 = performance.now();
  const proj = new Vector3();
  let lastA = null, lastB = null;
  function showMarkers(idx, o, valueAt) {
    markersFor(idx).forEach((m, k) => {
      const facing = m.v.clone().normalize().dot(tmp.copy(camera.position).sub(m.v).normalize());
      proj.copy(m.v).project(camera);
      const x = (proj.x * 0.5 + 0.5) * W, y = (-proj.y * 0.5 + 0.5) * H;
      const vis = facing > 0.05 && proj.z < 1 && x > -40 && x < W + 40 && y > -20 && y < H + 20;
      m.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      m.el.style.opacity = vis ? clamp(o * 1.8 - k * 0.14) : 0; // labels arrive one after another
      if (m.key) {
        const v = valueAt(m.key), unit = values[sceneOf(idx).map.data.id].unit.startsWith('%') ? '%' : '';
        const text = v == null ? 'no data' : fmtValue(v) + unit;
        if (text !== m.text) { m.val.textContent = text; m.text = text; m.w = 0; }
      }
      if (vis && !m.w) m.w = m.el.offsetWidth;
      const w = (m.w || 160) + 12;
      m.el.classList.toggle('is-left', x + w > W && (x - w > 0 || x > W - x)); // the side with room, else the roomier one
    });
  }
  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (!visible) return;
    const n = scenes.length;
    const p = clamp(progress, -1, n - 1);
    const heroLive = p < 0 && !reduced;
    // draw only when something can have changed: progress, size, a new texture, the drifting hero or a dashed line
    if (!dirty && p === drawn && !heroLive && !live) { stats.skipped++; return; }
    const c0 = performance.now();
    dirty = false; drawn = p;
    const time = (now - t0) / 1000;
    const i = Math.floor(p), f = p - i, j = Math.min(i + 1, n - 1);
    const sA = sceneOf(i), sB = sceneOf(j);
    const samePanel = i >= 0 && sA.panel != null && sA.panel === sB.panel;
    const tt = reduced ? (f < 0.5 ? 0 : 1) : ease(smooth(0.08, 0.92, f));
    // the hero drifts slowly until the reader starts scrolling
    const heroCam = { ...hero.camera, lon: hero.camera.lon + (reduced ? 0 : Math.sin(time * 0.06) * 12) };
    const alt = placeCamera(camera, i < 0 ? heroCam : sA.camera, j < 0 ? heroCam : sB.camera, tt, W, H);
    lineLift = 1 + clamp(alt / R_KM * 0.002, 1e-6, 0.0015);
    // a chapter that goes all round the world (Geography) carries its light with the camera, from the upper left as
    // the fixed light falls on Europe, so no scene lands on the night side
    if (lightMode === 'camera') {
      const d = camera.position.clone().normalize(), east = new Vector3(0, 1, 0).cross(d).normalize(), north = d.clone().cross(east);
      light.copy(d).addScaledVector(east, -0.75).addScaledVector(north, 0.6);
    }

    // textures: keep the last complete state while a new one is painting, so nothing ever flashes blank
    const A = texturesOf(i, true) || lastA || lastB, B = texturesOf(j, true) || A;
    if (!A) { draw(); return; }
    lastA = A; lastB = B;
    earthU.uGA.value = A.g; earthU.uDA.value = A.d; earthU.uBoxA.value = A.box; earthU.uIGA.value = A.ig || blank; earthU.uIDA.value = A.id || blank;
    earthU.uGB.value = B.g; earthU.uDB.value = B.d; earthU.uBoxB.value = B.box; earthU.uIGB.value = B.ig || blank; earthU.uIDB.value = B.id || blank;
    const mix = reduced ? (f < 0.5 ? 0 : 1) : smooth(0.35, 0.65, f);
    // values: within one panel the years blend evenly across the gap; between panels they follow the texture mix
    const w = reduced ? (f < 0.5 ? 0 : 1) : samePanel ? smooth(0.1, 0.9, f) : mix;
    const blend = isData(sA) && isData(sB) && sameScale(sA.map.data, sB.map.data);
    earthU.uSlotA.value = (A.ig ? slotOf(i) : new Vector4(-1, 0, 1, 0)); earthU.uSlotB.value = (B.ig ? slotOf(j) : new Vector4(-1, 0, 1, 0));
    earthU.uWA.value = blend ? w : 0; earthU.uWB.value = blend ? 1 - w : 0;
    earthU.uMix.value = j === i ? 0 : mix;
    earthU.uTA.value = terrainOf(i) || blank; earthU.uTB.value = j === i ? earthU.uTA.value : terrainOf(j) || blank;
    earthU.uHatch.value = 1.2e6 / Math.max(60, alt); // stripes about six pixels apart at any height

    const ba = bordersFor(sA.map.borders), bb = bordersFor(sB.map.borders);
    for (const m of borderSets.values()) { m.material.opacity = 0; m.material.resolution = lineRes; m.scale.setScalar(lineLift); }
    const cityA = sA.map.city ? 0.4 : 1, cityB = sB.map.city ? 0.4 : 1;
    if (ba) ba.material.opacity += 0.28 * (1 - mix) * cityA; if (bb) bb.material.opacity += 0.28 * mix * cityB;

    setSpikes(i, j, mix, alt);
    live = setPoints(sA, sB, mix, time, alt);
    setLandscape(i >= 0 ? sA : null, sB, i, j, j === i ? 0 : mix);
    setCutaway(sA, sB, j === i ? 0 : mix);
    setLegend(sA, sB, w);
    for (const [idx, o] of overlays) if (idx !== i && idx !== j) o.g.visible = false;
    // within one panel the overlays and labels are the same, so the first stays and nothing dips between years
    if (samePanel) { live = setOverlay(i, 1, 1, time) || live; if (j !== i) { const o = overlayFor(j); if (o) o.g.visible = false; } }
    else {
      if (i >= 0) live = setOverlay(i, 1, 1 - smooth(0.05, 0.4, f), time) || live;
      if (j !== i) live = setOverlay(j, smooth(0.55, 1, f), smooth(0.5, 0.8, f), time) || live;
    }

    const valueAt = key => {
      const a = isData(sA) ? valueOf(values, sA.map.data, key) : null, b = isData(sB) ? valueOf(values, sB.map.data, key) : null;
      return blend && a != null && b != null ? a + (b - a) * w : (w < 0.5 ? a : b);
    };
    for (const [idx, list] of markerEls) if (idx !== i && idx !== j) list.forEach(m => { m.el.style.opacity = 0; });
    if (samePanel) { showMarkers(i, 1, valueAt); if (j !== i) markersFor(j).forEach(m => { m.el.style.opacity = 0; }); }
    else {
      showMarkers(i, 1 - smooth(0.1, 0.45, f), valueAt);
      if (j !== i) showMarkers(j, smooth(0.6, 0.95, f), valueAt);
    }

    draw();
    if (onFrame) onFrame(p);
    const ms = performance.now() - c0;
    stats.frames++; stats.frameMs += ms; stats.worstFrameMs = Math.max(stats.worstFrameMs, ms);
  }

  const ro = new ResizeObserver(resize); ro.observe(host);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; dirty = true; }); io.observe(host);
  addEventListener('visibilitychange', () => { visible = !document.hidden; dirty = true; });
  resize();
  // the first states are painted before the first frame, so the globe never starts blank
  for (const k of [-1, 0]) for (const job of Object.values(stateOf(k).jobs)) if (!texCache.has(job.key)) paint.now(job);
  raf = requestAnimationFrame(frame);

  return {
    setProgress(p) { progress = p; },
    // flows of a panel wait for the step of its chain that sends them (0 hidden, 1 drawn)
    setGate(panel, g) { if (gates.get(panel) !== g) { gates.set(panel, g); dirty = true; } },
    pointOf: key => point.get(key),
    // paint a coming state and build its overlays and labels in idle time, so its first frame does no work
    prepare(i) { if (i >= -1 && i < scenes.length) { texturesOf(i); terrainOf(i); overlayFor(i); markersFor(i); patchOf(i); } },
    // start the playing clock again from its first year (the reader has just entered the chapter)
    replay() { playT0 = null; dirty = true; },
    // the height profile along a section line: { prof: [{ d km, h m }], total km }, or null without the site's heights
    async profile(site, from, to) { const dem = await demOf(site); return dem ? sectionOf(dem, from, to, 1) : null; },
    stats,
    post, // the light's settings, when `look` is on
    camera, // for checks in the preview
    destroy() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); paint.destroy(); renderer.dispose(); },
  };
}
