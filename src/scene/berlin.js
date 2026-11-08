// Berlin, 9 November 1989: one scene directed as a film shot (WP-04X). The ground is the real 1989 border, from the
// chapter's own data (Geoportal Berlin via assets/data/borders.json): the front and rear walls, the border strip
// between them, the four sectors, rivers and lakes. At night the strip is a floodlit band and, seen from high enough,
// a ring of light round West Berlin in the dark; the city's own lights are drawn (procedural, and the page says so).
// One warm light: Bornholmer Straße, where the first gate opened at about 11.30 p.m. The reader's pointer asks the map
// which side a place was on and how far the Wall was. Draws only while something moves.
import {
  Scene, PerspectiveCamera, WebGLRenderer, Mesh, BufferGeometry, BufferAttribute, ShaderMaterial, CanvasTexture,
  LinearMipmapLinearFilter, LinearFilter, Vector3, Vector2, Color, SphereGeometry, BackSide, AdditiveBlending, PlaneGeometry,
  Points, LinearSRGBColorSpace, NoToneMapping, Vector4,
} from 'three';
import { feature } from 'topojson-client';
import { createLens } from './lens.js';

const O = [52.5163, 13.3777];                       // the Brandenburg Gate: the origin of the scene (km, z to the south)
const BOX = [13.02, 52.3, 13.82, 52.72];           // the painted ground (lon w, lat s, lon e, lat n)
const KX = Math.cos(O[0] * Math.PI / 180) * 111.32, KZ = 111.32;
export const toXZ = (lat, lon) => [(lon - O[1]) * KX, (O[0] - lat) * KZ];
const toLL = (x, z) => [O[0] - z / KZ, O[1] + x / KX];
export const PLACES = { gate: [52.5163, 13.3777], bornholmer: [52.5547, 13.3973], bernauer: [52.5351, 13.3903] };

const NOISE = /* glsl */`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }`;

const groundVert = /* glsl */`varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
const groundFrag = /* glsl */`
  uniform sampler2D tMask, tWater; uniform vec4 uBox; uniform vec2 uO, uK, uCross; uniform vec3 uFog, uSodium, uFlood, uEmber; uniform float uFogD, uCrossOn, uLights;
  varying vec3 vW;
  ${NOISE}
  // procedural lights: one possible lamp per cell, kept or not by the local density, a soft point a few metres wide
  float lamps(vec2 p, float cell, float dens, float size) {
    vec2 c = floor(p / cell), f = p / cell - c;
    float h = hash(c), keep = step(h, dens);
    vec2 at = vec2(hash(c + 3.1), hash(c + 7.7)) * 0.8 + 0.1;
    float d = length((f - at) * cell);
    float px = max(fwidth(p.x), fwidth(p.y));
    float r = max(size, px * 0.9);
    return keep * exp(-d * d / (r * r)) * (size * size) / (r * r) * (0.5 + hash(c + 1.3));
  }
  float streets(vec2 p, float dens) {
    float ang = vnoise(p / 2.4) * 3.14159, c = cos(ang), s = sin(ang);
    vec2 q = mat2(c, -s, s, c) * p;
    float cell = 0.13 + 0.06 * vnoise(p / 3.0);
    vec2 g = q / cell, f = fract(g), id = floor(g);
    // lamps every ~28 m along the two edges of each block, in blocks the density keeps
    float keep = step(hash(id * 1.7), dens * 1.4);
    float along = q.x / 0.028, across = q.y / 0.028;
    float px = max(fwidth(p.x), fwidth(p.y)), r = max(0.0016, px * 0.8);
    float dA = length(vec2((fract(along) - 0.5) * 0.028, f.y * cell)), dB = length(vec2(f.x * cell, (fract(across) - 0.5) * 0.028));
    float on = step(0.35, hash(floor(vec2(along, id.y)))) ;
    return keep * (exp(-dA * dA / (r * r)) * on + exp(-dB * dB / (r * r)) * step(0.35, hash(floor(vec2(id.x, across)) + 4.0))) * (0.0016 * 0.0016) / (r * r);
  }
  void main() {
    vec2 ll = vec2(uO.y + vW.x / uK.x, uO.x - vW.z / uK.y);                 // lon, lat
    vec2 uv = (ll - uBox.xy) / (uBox.zw - uBox.xy);
    vec4 m = texture2D(tMask, uv); float water = texture2D(tWater, uv).r;
    float city = m.r, strip = m.g, wall = m.b;
    float rc = length(vW.xz - vec2(-2.0, 0.5));                              // the old centre, densest
    float dens = city * (0.22 + 0.5 * smoothstep(16.0, 2.0, rc)) * (0.35 + 0.9 * vnoise(vW.xz / 1.3)) * (1.0 - water) * (1.0 - strip);
    float out0 = (1.0 - city) * (1.0 - water) * 0.05;                        // the countryside round the city: sparse
    float L = streets(vW.xz, dens) * 0.9 + lamps(vW.xz + 9.0, 0.06, dens * 0.35, 0.002) + lamps(vW.xz, 0.35, out0, 0.004);
    vec3 col = vec3(0.004, 0.004, 0.005) * (1.0 + city * 0.8) * (1.0 - water * 0.6);
    col += mix(uSodium, vec3(0.85, 0.9, 1.0), step(0.7, hash(floor(vW.xz / 0.11) + 2.0))) * L * 3.2 * uLights;
    // the city's glow and the strip's floodlit band, both from blurred copies of the masks (a bloom that costs one lookup)
    col += uSodium * textureLod(tMask, uv, 6.0).r * 0.018 * uLights + uFlood * (textureLod(tMask, uv, 4.0).g * 0.08 + textureLod(tMask, uv, 7.0).g * 0.05);
    col += uFlood * strip * 0.16 * (0.7 + 0.5 * vnoise(vW.xz * 30.0)) + uFlood * wall * 0.55;
    col = mix(col, vec3(0.006, 0.008, 0.012) + uSodium * textureLod(tMask, uv, 5.0).r * 0.02, water * 0.85);
    // Bornholmer Straße at 11.30 p.m.: the one warm light
    float dc = length(vW.xz - uCross);
    col += uEmber * uCrossOn * (exp(-dc * dc / 0.0012) * 2.5 + exp(-dc * dc / 0.03) * 0.25);
    float f = 1.0 - exp(-length(vW - cameraPosition) * uFogD);
    gl_FragColor = vec4(mix(col, uFog, clamp(f, 0.0, 1.0)), 1.0);
  }`;

const mistFrag = /* glsl */`
  uniform sampler2D tMask; uniform vec4 uBox; uniform vec2 uO, uK; uniform vec3 uSodium, uFlood; uniform float uMist; varying vec3 vW;
  ${NOISE}
  void main() {
    vec2 ll = vec2(uO.y + vW.x / uK.x, uO.x - vW.z / uK.y), uv = (ll - uBox.xy) / (uBox.zw - uBox.xy);
    float n = vnoise(vW.xz * 0.35) * 0.6 + vnoise(vW.xz * 1.3 + 5.0) * 0.4;
    vec3 c = uSodium * textureLod(tMask, uv, 8.0).r * 0.022 + uFlood * (textureLod(tMask, uv, 7.0).g * 0.05 + textureLod(tMask, uv, 5.0).g * 0.02);
    float f = 1.0 - exp(-length(vW - cameraPosition) * 0.05);
    gl_FragColor = vec4(c * (0.5 + n) * uMist * (0.35 + 0.65 * f), 1.0);
  }`;
const skyVert = /* glsl */`varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }`;
const skyFrag = /* glsl */`uniform vec3 uFog, uZen, uSodium; varying vec3 vD;
  void main() { float up = vD.y; vec3 c = mix(uFog + uSodium * 0.012, uZen, smoothstep(0.0, 0.35, up)); gl_FragColor = vec4(c, 1.0); }`;

// floodlights along the walls: soft points that grow with nearness, never smaller than a pixel
const lampVert = /* glsl */`attribute float aS; varying float vS; uniform float uPx;
  void main() { vS = aS; vec4 mv = viewMatrix * modelMatrix * vec4(position, 1.0); gl_PointSize = clamp(uPx * 0.012 / -mv.z, 1.2, 9.0); gl_Position = projectionMatrix * mv; }`;
const lampFrag = /* glsl */`uniform vec3 uFlood; varying float vS;
  void main() { vec2 q = gl_PointCoord - 0.5; float d = dot(q, q) * 4.0; float a = exp(-d * 5.0) * 0.9 + exp(-d * 1.2) * 0.15; gl_FragColor = vec4(uFlood * (0.7 + 0.6 * vS), a); }`;

// the reader's question, drawn: a fine line from the place to the nearest point of the Wall
const probeVert = /* glsl */`attribute float aT; varying float vT; void main() { vT = aT; gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }`;
const probeFrag = /* glsl */`uniform vec3 uCol; uniform float uDraw; varying float vT; void main() { if (vT > uDraw) discard; gl_FragColor = vec4(uCol, 0.9); }`;

export async function createScene(host, { borders = '../assets/data/borders.json', reduced = false, phone = false } = {}) {
  const topo = await (await fetch(borders)).json();
  const F = k => feature(topo, topo.objects[k]).features;
  const sectors = F('sectors'), walls = F('wall'), strips = F('strip');
  const near = f => JSON.stringify(f.geometry.coordinates).match(/13\.\d+,52\.[3-7]/);
  const rivers = F('rivers').filter(near), lakes = F('lakes').filter(near);

  // ── the ground's masks, painted once: R the city (all four sectors), G the strip, B the walls; and the water ──────
  const S = phone ? 2048 : 4096;
  const px = (lon, lat) => [(lon - BOX[0]) / (BOX[2] - BOX[0]) * S, (BOX[3] - lat) / (BOX[3] - BOX[1]) * S];
  const mk = () => { const c = document.createElement('canvas'); c.width = c.height = S; return [c, c.getContext('2d')]; };
  const path = (g, geom) => {
    const ring = r => r.forEach(([lo, la], i) => { const [x, y] = px(lo, la); i ? g.lineTo(x, y) : g.moveTo(x, y); });
    if (geom.type === 'Polygon') geom.coordinates.forEach(ring);
    else if (geom.type === 'MultiPolygon') geom.coordinates.forEach(p => p.forEach(ring));
    else if (geom.type === 'LineString') ring(geom.coordinates);
    else if (geom.type === 'MultiLineString') geom.coordinates.forEach(ring);
  };
  const [mc, m] = mk(); m.fillStyle = '#000'; m.fillRect(0, 0, S, S); m.globalCompositeOperation = 'lighter';
  m.fillStyle = 'rgb(255,0,0)'; sectors.forEach(f => { m.beginPath(); path(m, f.geometry); m.fill('evenodd'); });
  m.fillStyle = 'rgb(0,255,0)'; strips.forEach(f => { m.beginPath(); path(m, f.geometry); m.fill('evenodd'); });
  m.strokeStyle = 'rgb(0,0,255)'; m.lineWidth = S / 4096 * 1.6; m.lineJoin = 'round';
  walls.forEach(f => { m.beginPath(); path(m, f.geometry); m.stroke(); });
  const [wc, w] = mk(); w.fillStyle = '#000'; w.fillRect(0, 0, S, S); w.fillStyle = '#fff'; w.strokeStyle = '#fff'; w.lineWidth = S / 4096 * 5;
  rivers.forEach(f => { w.beginPath(); path(w, f.geometry); w.stroke(); });
  const tex = c => { const t = new CanvasTexture(c); t.flipY = false; t.minFilter = LinearMipmapLinearFilter; t.magFilter = LinearFilter; t.anisotropy = 8; t.generateMipmaps = true; return t; };
  // canvas rows run north to south, the shader's v from the box's south edge: flip by reading v from the north
  const U = {
    tMask: { value: tex(mc) }, tWater: { value: tex(wc) },
    uBox: { value: new Vector4(BOX[0], BOX[3], BOX[2], BOX[1]) }, uO: { value: new Vector2(O[0], O[1]) }, uK: { value: new Vector2(KX, KZ) },
    uCross: { value: new Vector2(...toXZ(...PLACES.bornholmer)) }, uCrossOn: { value: 0 }, uLights: { value: 1 },
    uFog: { value: new Color(0.005, 0.0055, 0.008) }, uZen: { value: new Color(0.0012, 0.0014, 0.0022) }, uFogD: { value: 0.012 },
    uSodium: { value: new Color(1.0, 0.66, 0.36) }, uFlood: { value: new Color(0.95, 0.93, 0.86) }, uEmber: { value: new Color(1.0, 0.42, 0.14).multiplyScalar(2.4) },
    uPx: { value: 1000 },
  };

  const scene = new Scene();
  const ground = new Mesh(new PlaneGeometry(400, 400), new ShaderMaterial({ uniforms: U, vertexShader: groundVert, fragmentShader: groundFrag}));
  ground.rotation.x = -Math.PI / 2; scene.add(ground);
  for (const [y, k] of [[0.12, 1.0], [0.32, 0.7]]) {
    const m = new Mesh(new PlaneGeometry(120, 120), new ShaderMaterial({ uniforms: { ...U, uMist: { value: k } }, vertexShader: groundVert, fragmentShader: mistFrag, transparent: true, depthWrite: false, blending: AdditiveBlending }));
    m.rotation.x = -Math.PI / 2; m.position.y = y; m.renderOrder = 3; scene.add(m);
  }
  scene.add(new Mesh(new SphereGeometry(300, 32, 16), new ShaderMaterial({ uniforms: U, vertexShader: skyVert, fragmentShader: skyFrag, side: BackSide, depthWrite: false })));

  // floodlights every 70 m along both walls, a little above the ground
  {
    const P = [], Sz = [];
    for (const f of walls) {
      const lines = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
      for (const l of lines) for (let i = 1; i < l.length; i++) {
        const [ax, az] = toXZ(l[i - 1][1], l[i - 1][0]), [bx, bz] = toXZ(l[i][1], l[i][0]), d = Math.hypot(bx - ax, bz - az);
        for (let t = 0; t < d; t += 0.07) { const u = t / d; P.push(ax + (bx - ax) * u, 0.008, az + (bz - az) * u); Sz.push(Math.random()); }
      }
    }
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(P), 3)); g.setAttribute('aS', new BufferAttribute(new Float32Array(Sz), 1));
    const pts = new Points(g, new ShaderMaterial({ uniforms: U, vertexShader: lampVert, fragmentShader: lampFrag, transparent: true, depthWrite: false, blending: AdditiveBlending }));
    pts.frustumCulled = false; scene.add(pts);
  }

  // ── the reader's question: which side, which sector, how far to the Wall ────────────────────────────────────────────
  const inRing = (lon, lat, r) => { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, yi] = r[i], [xj, yj] = r[j]; if ((yi > lat) !== (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi) c = !c; } return c; };
  const inGeom = (lon, lat, g) => (g.type === 'Polygon' ? [g.coordinates] : g.coordinates).some(p => inRing(lon, lat, p[0]) && !p.slice(1).some(h => inRing(lon, lat, h)));
  const segs = [];
  for (const f of walls) { const lines = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates; for (const l of lines) for (let i = 1; i < l.length; i++) segs.push([...toXZ(l[i - 1][1], l[i - 1][0]), ...toXZ(l[i][1], l[i][0]), f.properties.kind]); }
  function ask(lat, lon) {
    const s = sectors.find(f => inGeom(lon, lat, f.geometry));
    const [x, z] = toXZ(lat, lon); let best = Infinity, at = null;
    for (const [ax, az, bx, bz, kind] of segs) {
      if (kind !== 'front') continue;
      const dx = bx - ax, dz = bz - az, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz || 1)));
      const px = ax + dx * t, pz = az + dz * t, d = Math.hypot(x - px, z - pz);
      if (d < best) { best = d; at = [px, pz]; }
    }
    return { sector: s ? s.properties.sector : null, km: best, from: [x, z], to: at };
  }
  let probe = null;
  function drawProbe(r) {
    if (probe) { scene.remove(probe); probe.geometry.dispose(); probe.material.dispose(); probe = null; }
    if (!r || !r.to) return;
    const [x0, z0] = r.from, [x1, z1] = r.to, d = Math.hypot(x1 - x0, z1 - z0) || 1, nx = -(z1 - z0) / d * 0.009, nz = (x1 - x0) / d * 0.009;
    const P = [x0 + nx, 0.01, z0 + nz, x0 - nx, 0.01, z0 - nz, x1 + nx, 0.01, z1 + nz, x1 - nx, 0.01, z1 - nz];
    const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(new Float32Array(P), 3)); g.setAttribute('aT', new BufferAttribute(new Float32Array([0, 0, 1, 1]), 1)); g.setIndex([0, 2, 1, 1, 2, 3]);
    probe = new Mesh(g, new ShaderMaterial({ uniforms: { uCol: { value: new Color(1.0, 0.62, 0.4).multiplyScalar(2.2) }, uDraw: { value: reduced ? 1 : 0 } }, vertexShader: probeVert, fragmentShader: probeFrag, transparent: true, depthWrite: false, blending: AdditiveBlending }));
    probe.userData.t0 = performance.now(); scene.add(probe); wake();
  }

  // ── renderer, lens, shots ────────────────────────────────────────────────────────────────────────────────────────────
  const renderer = new WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = LinearSRGBColorSpace; renderer.toneMapping = NoToneMapping;
  host.appendChild(renderer.domElement);
  const camera = new PerspectiveCamera(34, 1, 0.01, 700);
  const lens = createLens(renderer, { phone, exposure: 1.0, sat: 0.22 }), PU = lens.uniforms;
  let Wp = 1, Hp = 1;
  function resize() {
    const r = host.getBoundingClientRect(); Wp = Math.max(1, r.width); Hp = Math.max(1, r.height);
    const dpr = Math.min(devicePixelRatio || 1, phone ? 1.4 : 1.75);
    renderer.setPixelRatio(dpr); renderer.setSize(Wp, Hp, false); lens.setSize(Math.round(Wp * dpr), Math.round(Hp * dpr));
    U.uPx.value = Hp * dpr; camera.aspect = Wp / Hp; camera.updateProjectionMatrix(); wake();
  }
  const [bx, bz] = toXZ(...PLACES.bornholmer);
  const SHOTS = [
    { from: [-6, 24, 34], at: [-5.5, 0, 0.5], fov: 36 },              // I the ring of light round West Berlin, from the south
    { from: [bx - 3.2, 1.35, bz + 2.3], at: [bx + 0.3, 0, bz - 0.3], fov: 30 },  // II down along the strip to Bornholmer Straße
    { from: [-2.5, 5.2, 8.5], at: [-0.6, 0, -1.2], fov: 40 },          // III the centre, where the reader asks
  ];
  const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const A = new Vector3(), B = new Vector3(), C = new Vector3(), D = new Vector3();
  function placeCam(p) {
    const i = Math.floor(Math.min(p, SHOTS.length - 1.0001)), f = ease(Math.max(0, Math.min(1, p - i)));
    const a = SHOTS[i], b = SHOTS[Math.min(SHOTS.length - 1, i + 1)];
    A.fromArray(a.from); B.fromArray(b.from); C.fromArray(a.at); D.fromArray(b.at);
    // in log height, so a descent slows as it nears the ground
    const y = Math.exp(Math.log(A.y) * (1 - f) + Math.log(B.y) * f);
    camera.position.lerpVectors(A, B, f).setY(y); camera.lookAt(C.lerp(D, f));
    const fov = a.fov + (b.fov - a.fov) * f; if (camera.fov !== fov) { camera.fov = fov; camera.updateProjectionMatrix(); }
  }
  let raf = 0, frames = 0, target = 0, shotT = 0, dim = 1, dimT = 1, cross = 0, crossT = 0;
  function wake() { if (!raf) raf = requestAnimationFrame(frame); }
  function frame(now) {
    raf = 0; let more = false;
    if (Math.abs(target - shotT) > 1e-4) { shotT += (target - shotT) * (reduced ? 1 : 0.07); if (Math.abs(target - shotT) < 2e-3) shotT = target; more = true; }
    if (Math.abs(dimT - dim) > 1e-3) { dim += (dimT - dim) * (reduced ? 1 : 0.08); more = true; } else dim = dimT;
    if (Math.abs(crossT - cross) > 1e-3) { cross += (crossT - cross) * (reduced ? 1 : 0.05); more = true; } else cross = crossT;
    placeCam(shotT); PU.uDim.value = dim; U.uCrossOn.value = cross;
    if (probe && probe.material.uniforms.uDraw.value < 1) { probe.material.uniforms.uDraw.value = Math.min(1, (now - probe.userData.t0) / 700); more = true; }
    lens.render(scene, camera); frames++;
    if (more) wake();
  }
  const ray = new Vector3();
  function groundAt(cx, cy) {
    const r = renderer.domElement.getBoundingClientRect();
    ray.set((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height) * 2 + 1, 0.5).unproject(camera).sub(camera.position).normalize();
    if (ray.y >= -1e-4) return null;
    const t = -camera.position.y / ray.y; return toLL(camera.position.x + ray.x * t, camera.position.z + ray.z * t);
  }
  addEventListener('resize', resize); resize(); placeCam(0); wake();
  return {
    setShot(p) { target = Math.max(0, Math.min(SHOTS.length - 1, p)); wake(); },
    setDim(v) { dimT = v; wake(); },
    setCrossing(on) { crossT = on ? 1 : 0; wake(); },
    askAt(cx, cy) { const ll = groundAt(cx, cy); if (!ll) return null; const r = ask(...ll); drawProbe(r); return r; },
    askPlace(lat, lon) { const r = ask(lat, lon); drawProbe(r); return r; },
    stats: { get frames() { return frames; } },
  };
}
