// Stable prices, 2019–2024: one Economics scene directed as a film shot (WP-04X). The world as a landscape: every
// country a block of stone raised by its inflation (IMF World Economic Outlook, the chapter's own econ.json), on a
// square-root scale so that Türkiye's 72% still fits the frame. The year is read from the scroll and blended through
// the real yearly values, so the land rises into 2022 and settles by 2024. One warm light: a contour at 2%, the
// Federal Reserve's target, drawn round every country's sides, so the reader sees who stood above it. The pointer
// reads a country. Draws only while something moves.
import {
  Scene, PerspectiveCamera, WebGLRenderer, Mesh, BufferGeometry, BufferAttribute, ShaderMaterial, DataTexture, RedFormat,
  FloatType, NearestFilter, Vector3, Color, PlaneGeometry, SphereGeometry, BackSide, ShapeUtils, Vector2, LinearSRGBColorSpace,
  NoToneMapping, AdditiveBlending, Raycaster, DoubleSide,
} from 'three';
import { feature } from 'topojson-client';
import { createLens } from './lens.js';

const K = 0.1;                                   // scene units per degree
const H = v => Math.sqrt(Math.max(0, v)) * 0.08; // height for an inflation rate (%)
export const TARGET = 2;
const xz = (lon, lat) => [lon * K, -lat * K];

const NOISE = /* glsl */`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }`;

const blockVert = /* glsl */`
  attribute float aId; attribute float aTop; attribute vec3 aN;
  uniform sampler2D tH; varying vec3 vW; varying vec3 vN; varying float vTop; varying float vH; varying float vId;
  void main() {
    float h = texelFetch(tH, ivec2(int(aId), 0), 0).r;
    vec3 p = vec3(position.x, aTop * h + 0.0015, position.z);
    vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz; vN = aN; vTop = aTop; vH = h; vId = aId;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`;
const blockFrag = /* glsl */`
  uniform vec3 uSun, uSunCol, uSky, uFog, uWarm; uniform float uFogD, uTarget, uTargetOn, uHover;
  varying vec3 vW; varying vec3 vN; varying float vTop; varying float vH; varying float vId;
  ${NOISE}
  void main() {
    vec3 n = normalize(vN);
    if (n.y < 0.5 && dot(n, cameraPosition - vW) < 0.0) n = -n; // rings come in either winding
    float grain = vnoise(vW.xz * 60.0) * 0.5 + vnoise(vW.xz * 13.0 + vW.y * 40.0) * 0.5;
    vec3 alb = vec3(0.15, 0.145, 0.14) * (0.85 + 0.3 * grain);
    // sides take the sun softly (a coastline has thousands of facets; hard light would stripe them)
    float ndl = n.y > 0.5 ? max(dot(n, uSun), 0.0) : 0.35 + 0.4 * max(dot(n, uSun), 0.0);
    // sides darken towards their foot (the ground's shadow), tops catch the sky
    float foot = n.y > 0.5 ? 1.0 : mix(0.35, 1.0, smoothstep(0.0, max(vH, 0.02), vW.y));
    vec3 col = alb * (uSunCol * ndl + uSky * (0.4 + 0.6 * max(n.y, 0.0))) * foot;
    // the 2% light: a fine warm line round every country's sides at the target height
    float band = exp(-pow((vW.y - uTarget) / 0.0035, 2.0)) * (1.0 - step(0.5, n.y)) * step(uTarget, vH);
    col += uWarm * band * uTargetOn * 3.0;
    col += vec3(0.6, 0.62, 0.66) * uHover * 0.18;
    float f = 1.0 - exp(-length(vW - cameraPosition) * uFogD);
    vec3 fc = uFog + uSunCol * 0.035 * pow(max(dot(normalize(vW - cameraPosition), uSun), 0.0), 4.0);
    gl_FragColor = vec4(mix(col, fc, clamp(f, 0.0, 1.0)), 1.0);
  }`;
const seaVert = /* glsl */`varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
const seaFrag = /* glsl */`
  uniform vec3 uFog, uSunCol, uSun; uniform float uFogD; varying vec3 vW;
  ${NOISE}
  void main() {
    vec3 v = normalize(vW - cameraPosition), r = reflect(v, vec3(0, 1, 0));
    vec3 col = vec3(0.012, 0.013, 0.016) + uSunCol * pow(max(dot(r, uSun), 0.0), 60.0) * 0.06 * (0.6 + 0.8 * vnoise(vW.xz * 8.0));
    float f = 1.0 - exp(-length(vW - cameraPosition) * uFogD);
    vec3 fc = uFog + uSunCol * 0.035 * pow(max(dot(v, uSun), 0.0), 4.0);
    gl_FragColor = vec4(mix(col, fc, clamp(f, 0.0, 1.0)), 1.0);
  }`;
const sheetFrag = /* glsl */`uniform vec3 uWarm; uniform float uTargetOn; varying vec3 vW;
  void main() { float e = smoothstep(18.0, 6.0, length(vW.xz - vec2(0.0, -2.0))); gl_FragColor = vec4(uWarm * 0.03 * e * uTargetOn, 1.0); }`;
const skyVert = /* glsl */`varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }`;
const skyFrag = /* glsl */`uniform vec3 uFog, uZen, uSun, uSunCol; varying vec3 vD;
  void main() { vec3 d = normalize(vD); float s = max(dot(d, uSun), 0.0);
    vec3 c = mix(uFog + uSunCol * 0.035 * pow(s, 4.0), uZen, smoothstep(0.0, 0.5, d.y)) + uSunCol * pow(s, 30.0) * 0.1 * smoothstep(-0.02, 0.1, d.y); gl_FragColor = vec4(c, 1.0); }`;

export async function createScene(host, { econ = '../assets/data/econ.json', countries = '../assets/data/countries-modern.json', reduced = false, phone = false } = {}) {
  const [E, topo] = await Promise.all([fetch(econ).then(r => r.json()), fetch(countries).then(r => r.json())]);
  const ind = E.indicators.PCPIPCH, Y0 = ind.years[0];
  const feats = feature(topo, topo.objects.countries).features.filter(f => f.properties.to > '2020' && f.properties.from < '2020');
  const ids = [], names = [], series = [];
  const P = [], N = [], T = [], I = [], IDX = [];
  let v = 0;
  for (const f of feats) {
    const key = f.properties.key, vals = ind.values[key];
    if (!vals) continue;
    const id = ids.length; ids.push(key); names.push(f.properties.name); series.push(vals);
    const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [];
    for (const poly of polys) {
      const rings = poly.map(r => r.map(([lo, la]) => new Vector2(...xz(lo, la))));
      if (rings[0].length < 4) continue;
      // the top: triangulated once
      const contour = rings[0].slice(0, -1), holes = rings.slice(1).map(r => r.slice(0, -1));
      const tris = ShapeUtils.triangulateShape(contour, holes), flat = contour.concat(...holes), base = v;
      for (const p of flat) { P.push(p.x, 0, p.y); N.push(0, 1, 0); T.push(1); IDX.push(id); v++; }
      for (const t of tris) I.push(base + t[0], base + t[2], base + t[1]);
      // the sides: a quad per edge, base and top
      for (const ring of [contour, ...holes]) for (let k = 0; k < ring.length; k++) {
        const a = ring[k], b = ring[(k + 1) % ring.length], d = new Vector2(b.x - a.x, b.y - a.y);
        if (d.lengthSq() < 1e-10) continue; d.normalize();
        const nx = d.y, nz = -d.x, o = v;
        for (const [p, top] of [[a, 0], [b, 0], [a, 1], [b, 1]]) { P.push(p.x, 0, p.y); N.push(nx, 0, nz); T.push(top); IDX.push(id); v++; }
        I.push(o, o + 2, o + 1, o + 1, o + 2, o + 3);
      }
    }
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(new Float32Array(P), 3)); geo.setAttribute('aN', new BufferAttribute(new Float32Array(N), 3));
  geo.setAttribute('aTop', new BufferAttribute(new Float32Array(T), 1)); geo.setAttribute('aId', new BufferAttribute(new Float32Array(IDX), 1));
  geo.setIndex(new BufferAttribute(v > 65535 ? new Uint32Array(I) : new Uint16Array(I), 1));

  // heights for the year being shown, blended between the real yearly values
  const hData = new Float32Array(256), hTex = new DataTexture(hData, 256, 1, RedFormat, FloatType);
  hTex.minFilter = hTex.magFilter = NearestFilter; hTex.needsUpdate = true;
  const valueAt = (k, year) => { const s = series[k], a = Math.floor(year) - Y0, f = year - Math.floor(year), x = s[a], y = s[Math.min(s.length - 1, a + 1)]; return x == null ? 0 : x + ((y ?? x) - x) * f; };
  let shownYear = -1;
  function setHeights(year) { if (year === shownYear) return; shownYear = year; for (let k = 0; k < ids.length; k++) hData[k] = H(valueAt(k, year)); hTex.needsUpdate = true; }

  const sun = new Vector3(0.6, 0.24, -0.76).normalize(); // low, from the north-east: the land is seen against the light
  const U = {
    tH: { value: hTex }, uSun: { value: sun }, uSunCol: { value: new Color(1.0, 0.86, 0.7).multiplyScalar(1.7) }, uSky: { value: new Color(0.09, 0.1, 0.12) },
    uFog: { value: new Color(0.02, 0.021, 0.025) }, uZen: { value: new Color(0.004, 0.0045, 0.006) }, uFogD: { value: 0.045 },
    uWarm: { value: new Color(1.0, 0.5, 0.22).multiplyScalar(1.5) }, uTarget: { value: H(TARGET) }, uTargetOn: { value: 0 }, uHover: { value: 0 },
  };
  const scene = new Scene();
  const blocks = new Mesh(geo, new ShaderMaterial({ uniforms: U, vertexShader: blockVert, fragmentShader: blockFrag, side: DoubleSide }));
  blocks.frustumCulled = false; scene.add(blocks);
  const sea = new Mesh(new PlaneGeometry(400, 400), new ShaderMaterial({ uniforms: U, vertexShader: seaVert, fragmentShader: seaFrag })); sea.rotation.x = -Math.PI / 2; scene.add(sea);
  const sheet = new Mesh(new PlaneGeometry(60, 40), new ShaderMaterial({ uniforms: U, vertexShader: seaVert, fragmentShader: sheetFrag, transparent: true, depthWrite: false, blending: AdditiveBlending }));
  sheet.rotation.x = -Math.PI / 2; sheet.position.y = H(TARGET); sheet.renderOrder = 2; scene.add(sheet);
  scene.add(new Mesh(new SphereGeometry(200, 32, 16), new ShaderMaterial({ uniforms: U, vertexShader: skyVert, fragmentShader: skyFrag, side: BackSide, depthWrite: false })));

  const renderer = new WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = LinearSRGBColorSpace; renderer.toneMapping = NoToneMapping;
  host.appendChild(renderer.domElement);
  const camera = new PerspectiveCamera(34, 1, 0.02, 500);
  const lens = createLens(renderer, { phone, exposure: 1.05, sat: 0.2 }), PU = lens.uniforms;
  function resize() {
    const r = host.getBoundingClientRect(), W = Math.max(1, r.width), Hh = Math.max(1, r.height), dpr = Math.min(devicePixelRatio || 1, phone ? 1.4 : 1.75);
    renderer.setPixelRatio(dpr); renderer.setSize(W, Hh, false); lens.setSize(Math.round(W * dpr), Math.round(Hh * dpr));
    camera.aspect = W / Hh; camera.updateProjectionMatrix(); wake();
  }

  // shots: Europe and Africa seen from the Atlantic; low over the Mediterranean towards Türkiye; back out; the world
  const SHOTS = [
    { from: [-5.5, 2.2, 1.5], at: [2.2, 0, -4.2], fov: 34 },
    { from: [-0.6, 1.5, 0.6], at: [3.2, 0.15, -4.2], fov: 32 },
    { from: [-4.8, 2.6, 2.2], at: [2.5, 0, -4.0], fov: 34 },
    { from: [-3.0, 8.5, 10.5], at: [-0.5, 0, -2.5], fov: 40 },
  ];
  const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const A = new Vector3(), B = new Vector3(), C = new Vector3(), D = new Vector3();
  function placeCam(p) {
    const i = Math.floor(Math.min(p, SHOTS.length - 1.0001)), f = ease(Math.max(0, Math.min(1, p - i)));
    const a = SHOTS[i], b = SHOTS[Math.min(SHOTS.length - 1, i + 1)];
    A.fromArray(a.from); B.fromArray(b.from); C.fromArray(a.at); D.fromArray(b.at);
    camera.position.lerpVectors(A, B, f).setY(Math.exp(Math.log(A.y) * (1 - f) + Math.log(B.y) * f)); camera.lookAt(C.lerp(D, f));
    const fov = a.fov + (b.fov - a.fov) * f; if (camera.fov !== fov) { camera.fov = fov; camera.updateProjectionMatrix(); }
  }
  let raf = 0, frames = 0, target = 0, shotT = 0, year = 2019, yearT = 2019, dim = 1, dimT = 1, tOn = 0, tOnT = 0, onYear = null;
  function wake() { if (!raf) raf = requestAnimationFrame(frame); }
  function frame() {
    raf = 0; let more = false;
    const step = (cur, to, k) => { if (Math.abs(to - cur) < 1e-3) return to; more = true; return reduced ? to : cur + (to - cur) * k; };
    shotT = step(shotT, target, 0.07); year = step(year, yearT, 0.08); dim = step(dim, dimT, 0.08); tOn = step(tOn, tOnT, 0.06);
    placeCam(shotT); setHeights(year); PU.uDim.value = dim; U.uTargetOn.value = tOn; onYear?.(year);
    lens.render(scene, camera); frames++;
    if (more) wake();
  }
  // the pointer: the country under it, by a ray against the blocks
  const rc = new Raycaster(), ndc = new Vector2();
  function countryAt(cx, cy) {
    const r = renderer.domElement.getBoundingClientRect(); ndc.set((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    rc.setFromCamera(ndc, camera);
    // the mesh's heights live in a texture: cast against the ground plane and find the country there instead
    const o = rc.ray.origin, d = rc.ray.direction; if (d.y >= 0) return null;
    for (let t = 0; t < 60; t += 0.02) { const x = o.x + d.x * t, y = o.y + d.y * t, z = o.z + d.z * t; const k = hit(x, z); if (k != null && y <= hData[k] + 0.002) return k; if (y < 0) return hit(x, z); }
    return null;
  }
  const inRing = (x, z, r) => { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, zi] = r[i], [xj, zj] = r[j]; if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) c = !c; } return c; };
  const shapes = feats.filter(f => ind.values[f.properties.key]).map(f => (f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates).map(p => p.map(r => r.map(([lo, la]) => xz(lo, la)))));
  function hit(x, z) { for (let k = 0; k < shapes.length; k++) for (const p of shapes[k]) if (inRing(x, z, p[0]) && !p.slice(1).some(h => inRing(x, z, h))) return k; return null; }

  addEventListener('resize', resize); resize(); setHeights(2019); placeCam(0); wake();
  return {
    setShot(p) { target = Math.max(0, Math.min(SHOTS.length - 1, p)); wake(); },
    setYear(y) { yearT = y; wake(); },
    setDim(v) { dimT = v; wake(); },
    setTarget(on) { tOnT = on ? 1 : 0; wake(); },
    onYear(fn) { onYear = fn; },
    countryAt(cx, cy) { const k = countryAt(cx, cy); return k == null ? null : { key: ids[k], name: names[k], at: y => valueAt(k, y) }; },
    country(key) { const k = ids.indexOf(key); return k < 0 ? null : { key, name: names[k], at: y => valueAt(k, y) }; },
    stats: { get frames() { return frames; } },
  };
}
