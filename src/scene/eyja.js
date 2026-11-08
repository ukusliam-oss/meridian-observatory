// Eyjafjallajökull, April 2010: one scene directed as a film shot (WP-04X). The real heights (Copernicus DEM GLO-30, the
// same file as the Tectonic hazards chapter, raised one and a half times as the chapter says) under one low sun behind
// the volcano; shadows and hollows baked once on load (no shadow maps); the ash column bending south-east as the 2010
// winds took it; height fog; then one lens pass: filmic tone, a near-monochrome grade that keeps only the ember of the
// crater and the meltwater light in colour, vignette, soft edges, grain. The reader's cursor traces where meltwater
// would run from any point of the ice: the steepest way down, computed on the heights. Draws only while something moves.
import {
  Scene, PerspectiveCamera, WebGLRenderer, Mesh, BufferGeometry, BufferAttribute, ShaderMaterial, DataTexture, RGBAFormat,
  UnsignedByteType, LinearFilter, WebGLRenderTarget, HalfFloatType, Vector3, Vector2, Color, SphereGeometry, BackSide,
  AdditiveBlending, NormalBlending, OrthographicCamera, PlaneGeometry, LinearSRGBColorSpace, NoToneMapping,
} from 'three';

const EXAG = 1.5;
const CRATER = [63.63, -19.62]; // the summit crater, as the chapter marks it

// ── shaders ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
const NOISE = /* glsl */`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
  float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int k = 0; k < 5; k++) { s += a * vnoise(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }`;

const terrainVert = /* glsl */`
  attribute vec3 aN; varying vec3 vW; varying vec3 vN; varying vec2 vUv;
  void main() { vUv = uv; vN = aN; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
const terrainFrag = /* glsl */`
  uniform sampler2D uBake; uniform vec3 uSun, uSunCol, uSky, uFog, uEmber; uniform vec2 uCrater; uniform float uFogD, uEmberOn;
  varying vec3 vW; varying vec3 vN; varying vec2 vUv;
  ${NOISE}
  void main() {
    vec4 b = texture2D(uBake, vUv);
    float sh = b.r, ao = b.g, hn = b.b, slope = b.a;
    // the ice cap: high and not too steep; crevasses as a ridged noise across it; dark rock and the black sandur below
    float ice = smoothstep(0.36, 0.5, hn) * (1.0 - smoothstep(0.42, 0.7, slope));
    float crev = 1.0 - abs(fbm(vW.xz * vec2(4.5, 1.6) + fbm(vW.xz * 0.8) * 2.0) * 2.0 - 1.0);
    float grit = fbm(vW.xz * 9.0);
    vec3 rock = vec3(0.055, 0.05, 0.047) * (0.75 + 0.5 * grit);
    vec3 sand = vec3(0.03, 0.03, 0.032) * (0.8 + 0.4 * grit);
    vec3 snow = vec3(0.7, 0.72, 0.76) * (0.8 + 0.2 * fbm(vW.xz * 1.7)) * (0.92 + 0.08 * fbm(vW.xz * 40.0)) * (1.0 - 0.55 * pow(crev, 8.0) * smoothstep(0.08, 0.35, slope));
    vec3 alb = mix(mix(sand, rock, smoothstep(0.04, 0.2, hn + slope * 0.4)), snow, ice);
    // ash fall: the snow round the crater and downwind (south-east) greyed and blackened, in streaks
    vec2 q = vW.xz - uCrater, wind = normalize(vec2(0.78, 0.62));
    float along = dot(q, wind), across = dot(q, vec2(-wind.y, wind.x));
    float ash = exp(-dot(q, q) / 0.9) + exp(-across * across / (0.35 + max(along, 0.0) * 0.25)) * smoothstep(-0.3, 0.6, along) * exp(-max(along, 0.0) / 6.0);
    ash = clamp(ash * (0.55 + 0.6 * fbm(vW.xz * 2.4 + along * 0.3)), 0.0, 1.0) * ice;
    alb = mix(alb, vec3(0.05, 0.047, 0.044) * (0.8 + 0.4 * grit), ash * 0.85);
    vec3 n = normalize(vN + vec3(fbm(vW.xz * 6.0) - 0.5, 0.0, fbm(vW.zx * 6.0) - 0.5) * 0.25 * (1.0 - ice * 0.5)
      + vec3(fbm(vW.xz * 22.0) - 0.5, 0.0, fbm(vW.zx * 22.0 + 3.0) - 0.5) * 0.12 * ice);
    float ndl = max(dot(n, uSun), 0.0);
    vec3 col = alb * (uSunCol * ndl * sh + uSky * (0.35 + 0.65 * n.y) * ao);
    // the crater: an ember under the ash, the one warm thing in the frame
    float dc = length(vW.xz - uCrater);
    col += uEmber * uEmberOn * (exp(-dc * dc / 0.005) * 1.8 + exp(-dc * dc / 0.08) * 0.08);
    // height fog, warmer towards the sun
    vec3 vd = normalize(vW - cameraPosition);
    float f = 1.0 - exp(-length(vW - cameraPosition) * uFogD);
    vec3 fc = mix(uFog, uSunCol * 0.55, pow(max(dot(vd, uSun), 0.0), 6.0));
    // the edges of the measured box fade into the dark plain around it, so the land never ends in a cliff
    float e = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    col = mix(vec3(0.02, 0.02, 0.022) * (uSunCol * 0.35 + uSky), col, smoothstep(0.0, 0.1, e));
    gl_FragColor = vec4(mix(col, fc, clamp(f, 0.0, 1.0)), 1.0);
  }`;
const groundFrag = /* glsl */`
  uniform vec3 uSun, uSunCol, uSky, uFog; uniform float uFogD; varying vec3 vW;
  void main() {
    vec3 col = vec3(0.02, 0.02, 0.022) * (uSunCol * 0.35 + uSky);
    vec3 vd = normalize(vW - cameraPosition);
    float f = 1.0 - exp(-length(vW - cameraPosition) * uFogD);
    vec3 fc = mix(uFog, uSunCol * 0.55, pow(max(dot(vd, uSun), 0.0), 6.0));
    gl_FragColor = vec4(mix(col, fc, clamp(f, 0.0, 1.0)), 1.0);
  }`;
const groundVert = /* glsl */`varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;

const skyVert = /* glsl */`varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }`;
const skyFrag = /* glsl */`
  uniform vec3 uSun, uSunCol, uFog, uZen; varying vec3 vD;
  void main() {
    vec3 d = normalize(vD); float up = clamp(d.y, -0.2, 1.0), s = max(dot(d, uSun), 0.0);
    vec3 fc = mix(uFog, uSunCol * 0.55, pow(s, 6.0));
    vec3 c = mix(fc, uZen, smoothstep(0.015, 0.5, up));
    c += uSunCol * (pow(s, 900.0) * 4.0 + pow(s, 60.0) * 0.45 + pow(s, 10.0) * 0.07);
    gl_FragColor = vec4(c, 1.0);
  }`;

// the ash column: camera-facing sheets of noise up a curved spine, lit from the sun's side, an ember at its foot
const plumeVert = /* glsl */`
  attribute vec3 aC; attribute vec2 aQ; attribute float aS; attribute float aK; varying vec2 vQ; varying float vK; varying vec3 vW;
  void main() {
    vQ = aQ; vK = aK;
    vec3 r = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), u = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    vec3 w = aC + (r * aQ.x + u * aQ.y) * aS; vW = w;
    gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
  }`;
const plumeFrag = /* glsl */`
  uniform vec3 uSun, uSunCol, uSky, uEmber, uFog; uniform float uT, uFogD; varying vec2 vQ; varying float vK; varying vec3 vW;
  ${NOISE}
  void main() {
    float r = length(vQ); if (r > 1.0) discard;
    vec2 p = vQ * 1.6 + vec2(vK * 3.7, -uT * 0.05 - vK * 1.3);
    float d = fbm(p * 1.4) * 0.75 + fbm(p * 3.1 + 4.0) * 0.35;
    float a = smoothstep(0.46, 0.78, d) * (1.0 - smoothstep(0.3, 1.0, r)) * 0.94;
    // ash is dark; with the sun behind it, only its thin edges light up
    vec3 vd = normalize(vW - cameraPosition);
    float back = pow(max(dot(vd, uSun), 0.0), 3.0);
    float rim = smoothstep(0.42, 0.62, d) * (1.0 - smoothstep(0.62, 0.95, d));
    vec3 c = vec3(0.032, 0.03, 0.028) * (0.6 + 0.8 * d) + uSky * 0.05 + uSunCol * (rim * (0.02 + 0.16 * back) + back * 0.008);
    c += uEmber * (1.0 - smoothstep(0.0, 0.04, vK)) * 0.06 * (1.0 - r);
    float f = 1.0 - exp(-length(vW - cameraPosition) * uFogD * 0.7);
    gl_FragColor = vec4(mix(c, uFog, f * 0.6), a);
  }`;

// meltwater: a ribbon of light lying on the ground along the computed path, drawn from its source downhill
const traceVert = /* glsl */`attribute float aT; varying float vT; varying vec2 vS; attribute float aS;
  void main() { vT = aT; vS = vec2(aS, 0.0); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }`;
const traceFrag = /* glsl */`uniform float uDraw, uFade; uniform vec3 uCol; varying float vT; varying vec2 vS;
  void main() {
    if (vT > uDraw) discard;
    float edge = 1.0 - abs(vS.x); float head = smoothstep(uDraw - 0.08, uDraw, vT);
    gl_FragColor = vec4(uCol * (0.55 + 1.6 * head), pow(max(edge, 0.0), 1.5) * uFade * (0.5 + 0.5 * head));
  }`;

const postVert = /* glsl */`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const postFrag = /* glsl */`
  uniform sampler2D tScene; uniform vec2 uRes; uniform float uGrain, uExp, uSat, uDim;
  varying vec2 vUv;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  void main() {
    vec2 c = vUv - 0.5; float r = length(c * vec2(uRes.x / uRes.y, 1.0));
    float k = smoothstep(0.38, 1.0, r);
    // the lens: colour fringes and softness grow towards the edges of the frame
    vec2 dir = c * 0.012 * k, px = 1.0 / uRes;
    vec3 col = vec3(texture2D(tScene, vUv + dir).r, texture2D(tScene, vUv).g, texture2D(tScene, vUv - dir).b);
    vec3 soft = vec3(0.0);
    for (int i = 0; i < 6; i++) { float a = float(i) * 1.0472; soft += texture2D(tScene, vUv + vec2(cos(a), sin(a)) * px * (1.0 + 7.0 * k)).rgb; }
    col = mix(col, soft / 6.0, k * 0.85);
    col = aces(col * uExp);
    // the grade: almost monochrome, shadows a little cold and highlights a little warm; only strong colour keeps its hue
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    float chroma = max(col.r, max(col.g, col.b)) - min(col.r, min(col.g, col.b));
    col = mix(vec3(l), col, max(uSat, smoothstep(0.12, 0.32, chroma)));
    col *= mix(vec3(0.9, 0.95, 1.06), vec3(1.07, 1.0, 0.9), smoothstep(0.05, 0.6, l));
    // a film's lower third: the foot of the frame darkens a little, where the words stand
    col *= (1.0 - 0.62 * pow(r, 2.3)) * uDim * (1.0 - 0.42 * smoothstep(0.42, 0.0, vUv.y));
    col = pow(col, vec3(1.0 / 2.2));
    col += (hash(floor(gl_FragCoord.xy)) - 0.5) * uGrain;
    gl_FragColor = vec4(col, 1.0);
  }`;

// ── heights ────────────────────────────────────────────────────────────────────────────────────────────────────────────
async function loadHeights(base) {
  const meta = await (await fetch(`${base}eyjafjallajokull.json`)).json();
  const img = await createImageBitmap(await (await fetch(`${base}eyjafjallajokull.png`)).blob(), { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
  const cv = document.createElement('canvas'); cv.width = img.width; cv.height = img.height;
  const x = cv.getContext('2d', { willReadFrequently: true }); x.drawImage(img, 0, 0);
  const px = x.getImageData(0, 0, img.width, img.height).data, h = new Float32Array(img.width * img.height);
  for (let i = 0; i < h.length; i++) h[i] = px[i * 4] * 65536 + px[i * 4 + 1] * 256 + px[i * 4 + 2] - 1000;
  return { meta, h, W: img.width, H: img.height };
}

export async function createScene(host, { dem = '../assets/data/geo/dem/', reduced = false, phone = false, onReady } = {}) {
  const { meta, h, W, H } = await loadHeights(dem);
  const [w0, s0, e0, n0] = meta.box, lat0 = (s0 + n0) / 2;
  const SX = (e0 - w0) * Math.cos(lat0 * Math.PI / 180) * 111.32, SZ = (n0 - s0) * 111.32; // km
  const dx = SX / (W - 1), dz = SZ / (H - 1);
  const yAt = (i, j) => Math.max(0, h[Math.min(H - 1, Math.max(0, j)) * W + Math.min(W - 1, Math.max(0, i))]) / 1000 * EXAG;
  const xyz = (lat, lon) => { const i = (lon - w0) / (e0 - w0) * (W - 1), j = (n0 - lat) / (n0 - s0) * (H - 1); return [i * dx - SX / 2, yAt(Math.round(i), Math.round(j)), j * dz - SZ / 2]; };
  const maxY = 1650 / 1000 * EXAG;

  // the sun: low, in the south-south-east, behind the volcano from the north-west; the ash leans away from it, to the south-east
  const sun = new Vector3(0.36, 0.2, 0.91).normalize();
  const sunCol = new Color(1.0, 0.82, 0.62).multiplyScalar(3.1), sky = new Color(0.1, 0.115, 0.14), fog = new Color(0.035, 0.035, 0.04), zen = new Color(0.006, 0.007, 0.01), ember = new Color(1.0, 0.36, 0.1).multiplyScalar(2.6);

  // bake: soft sun shadow (marching towards the sun over the heights), hollows, height and slope, once
  const bake = new Uint8Array(W * H * 4);
  {
    const sx = sun.x, sz = sun.z, hl = Math.hypot(sx, sz), tanE = sun.y / hl, ux = sx / hl / dx, uz = sz / hl / dz;
    const box = (r) => { // box-blurred heights through an integral image (the hollows)
      const I = new Float64Array((W + 1) * (H + 1));
      for (let j = 0; j < H; j++) { let row = 0; for (let i = 0; i < W; i++) { row += h[j * W + i]; I[(j + 1) * (W + 1) + i + 1] = I[j * (W + 1) + i + 1] + row; } }
      return (i, j) => { const a = Math.max(0, i - r), b = Math.min(W - 1, i + r), c = Math.max(0, j - r), d = Math.min(H - 1, j + r);
        return (I[(d + 1) * (W + 1) + b + 1] - I[c * (W + 1) + b + 1] - I[(d + 1) * (W + 1) + a] + I[c * (W + 1) + a]) / ((b - a + 1) * (d - c + 1)); };
    };
    const near = box(6), far = box(24);
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const y0 = yAt(i, j); let s = 1;
      for (let t = 0.03, step = 0.03; t < 12 && s > 0; t += step, step *= 1.07) {
        const ii = i + ux * t, jj = j + uz * t;
        if (ii < 0 || jj < 0 || ii > W - 1 || jj > H - 1) break;
        const ry = y0 + t * tanE, ty = yAt(Math.round(ii), Math.round(jj));
        s = Math.min(s, 1 + (ry - ty) / (0.02 + t * 0.06));
      }
      const hh = h[j * W + i];
      const ao = Math.max(0, Math.min(1, 0.72 + (hh - near(i, j)) / 140 * 0.5 + (hh - far(i, j)) / 420 * 0.35));
      const gx = (yAt(i + 1, j) - yAt(i - 1, j)) / (2 * dx), gz = (yAt(i, j + 1) - yAt(i, j - 1)) / (2 * dz);
      const o = (j * W + i) * 4;
      bake[o] = Math.max(0, Math.min(255, s * 255)); bake[o + 1] = ao * 255; bake[o + 2] = Math.max(0, hh) / 1650 * 255; bake[o + 3] = Math.min(1, Math.hypot(gx, gz) / 1.6) * 255;
    }
  }
  const bakeTex = new DataTexture(bake, W, H, RGBAFormat, UnsignedByteType);
  bakeTex.magFilter = LinearFilter; bakeTex.minFilter = LinearFilter; bakeTex.needsUpdate = true;

  // the ground: one vertex per height (every second one on phones)
  const st = phone ? 2 : 1, gw = Math.floor((W - 1) / st) + 1, gh = Math.floor((H - 1) / st) + 1;
  const pos = new Float32Array(gw * gh * 3), nor = new Float32Array(gw * gh * 3), uv = new Float32Array(gw * gh * 2);
  for (let b = 0; b < gh; b++) for (let a = 0; a < gw; a++) {
    const i = a * st, j = b * st, k = b * gw + a;
    pos.set([i * dx - SX / 2, yAt(i, j), j * dz - SZ / 2], k * 3);
    const n = new Vector3(-(yAt(i + 1, j) - yAt(i - 1, j)) / (2 * dx), 1, -(yAt(i, j + 1) - yAt(i, j - 1)) / (2 * dz)).normalize();
    nor.set([n.x, n.y, n.z], k * 3); uv.set([i / (W - 1), j / (H - 1)], k * 2);
  }
  const idx = new Uint32Array((gw - 1) * (gh - 1) * 6);
  for (let b = 0, o = 0; b < gh - 1; b++) for (let a = 0; a < gw - 1; a++, o += 6) { const k = b * gw + a; idx.set([k, k + gw, k + 1, k + 1, k + gw, k + gw + 1], o); }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(pos, 3)); geo.setAttribute('aN', new BufferAttribute(nor, 3)); geo.setAttribute('uv', new BufferAttribute(uv, 2));
  geo.setIndex(new BufferAttribute(idx, 1));
  const [cx, cy, cz] = xyz(...CRATER);
  const U = {
    uBake: { value: bakeTex }, uSun: { value: sun }, uSunCol: { value: sunCol }, uSky: { value: sky }, uFog: { value: fog }, uZen: { value: zen },
    uEmber: { value: ember }, uCrater: { value: new Vector2(cx, cz) }, uFogD: { value: 0.016 }, uEmberOn: { value: 1 }, uT: { value: 0 },
  };
  const scene = new Scene();
  scene.add(new Mesh(geo, new ShaderMaterial({ uniforms: U, vertexShader: terrainVert, fragmentShader: terrainFrag })));
  { const g = new Mesh(new PlaneGeometry(900, 900), new ShaderMaterial({ uniforms: U, vertexShader: groundVert, fragmentShader: groundFrag })); g.rotation.x = -Math.PI / 2; g.position.y = -0.004; scene.add(g); }
  const skyM = new Mesh(new SphereGeometry(400, 48, 24), new ShaderMaterial({ uniforms: U, vertexShader: skyVert, fragmentShader: skyFrag, side: BackSide, depthWrite: false }));
  scene.add(skyM);

  // the ash column: 2010's plume rose several kilometres and was blown south-east (the chapter's own account)
  {
    const N = 44, C = [], Q = [], S = [], K = [], I = [];
    for (let k = 0; k < N; k++) {
      const t = k / (N - 1), rise = 0.15 + Math.min(t, 0.55) * 9 + Math.max(0, t - 0.55) * 3;
      const lean = Math.max(0, t - 0.18) ** 1.4 * 11; // the column rises, then the wind takes it south-east
      const c = [cx + lean * 0.78 + Math.sin(k * 2.1) * (0.2 + 0.9 * t), cy + rise, cz + lean * 0.62 + Math.cos(k * 1.7) * (0.2 + 0.9 * t)], size = (0.35 + t * 3.2) * (0.75 + 0.5 * Math.abs(Math.sin(k * 3.3)));
      for (const q of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { C.push(...c); Q.push(...q); S.push(size); K.push(t); }
      const o = k * 4; I.push(o, o + 1, o + 2, o, o + 2, o + 3);
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(new Float32Array(C), 3)); g.setAttribute('aC', new BufferAttribute(new Float32Array(C), 3));
    g.setAttribute('aQ', new BufferAttribute(new Float32Array(Q), 2)); g.setAttribute('aS', new BufferAttribute(new Float32Array(S), 1)); g.setAttribute('aK', new BufferAttribute(new Float32Array(K), 1));
    g.setIndex(I);
    const m = new Mesh(g, new ShaderMaterial({ uniforms: U, vertexShader: plumeVert, fragmentShader: plumeFrag, transparent: true, depthWrite: false, blending: NormalBlending }));
    m.frustumCulled = false; m.renderOrder = 2; scene.add(m);
  }

  // meltwater traces
  const traces = [];
  const water = new Color(0.78, 0.9, 1.0).multiplyScalar(1.4);
  function steepest(i, j) {
    const path = [[i, j]], seen = new Set([j * W + i]);
    for (let n = 0; n < 2400; n++) {
      let best = null, bh = h[j * W + i];
      for (let b = -1; b <= 1; b++) for (let a = -1; a <= 1; a++) {
        if (!a && !b) continue; const ii = i + a, jj = j + b;
        if (ii < 0 || jj < 0 || ii >= W || jj >= H || seen.has(jj * W + ii)) continue;
        const v = h[jj * W + ii] + (Math.abs(a) + Math.abs(b) > 1 ? 0.0 : 0.0);
        if (v < bh) { bh = v; best = [ii, jj]; }
      }
      if (!best) { // a hollow: step to the lowest neighbour anyway, so the water fills and spills
        let lo = Infinity; for (let b = -1; b <= 1; b++) for (let a = -1; a <= 1; a++) { const ii = i + a, jj = j + b; if ((a || b) && ii >= 0 && jj >= 0 && ii < W && jj < H && !seen.has(jj * W + ii) && h[jj * W + ii] < lo) { lo = h[jj * W + ii]; best = [ii, jj]; } }
        if (!best) break;
      }
      [i, j] = best; seen.add(j * W + i); path.push(best);
      if (h[j * W + i] < 25) break; // the plain
    }
    return path;
  }
  function addTrace(i, j) {
    const p = steepest(Math.round(i), Math.round(j));
    if (p.length < 6) return null;
    // smooth, then a flat ribbon 70 m wide lying on the ground, 6 m above it
    const pts = p.map(([a, b]) => new Vector3(a * dx - SX / 2, yAt(a, b) + 0.012, b * dz - SZ / 2));
    for (let r = 0; r < 3; r++) for (let k = 1; k < pts.length - 1; k++) pts[k].lerpVectors(pts[k - 1], pts[k + 1], 0.5).lerp(pts[k], 0.5);
    let L = 0; const acc = [0]; for (let k = 1; k < pts.length; k++) { L += pts[k].distanceTo(pts[k - 1]); acc.push(L); }
    const P = [], T = [], S = [], I = [];
    for (let k = 0; k < pts.length; k++) {
      const a = pts[Math.max(0, k - 1)], b = pts[Math.min(pts.length - 1, k + 1)], d = new Vector3().subVectors(b, a).setY(0).normalize();
      const side = new Vector3(-d.z, 0, d.x).multiplyScalar(0.035 + 0.03 * (acc[k] / L));
      P.push(...new Vector3().addVectors(pts[k], side).toArray(), ...new Vector3().subVectors(pts[k], side).toArray());
      T.push(acc[k] / L, acc[k] / L); S.push(1, -1);
      if (k) { const o = (k - 1) * 2; I.push(o, o + 2, o + 1, o + 1, o + 2, o + 3); }
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(new Float32Array(P), 3)); g.setAttribute('aT', new BufferAttribute(new Float32Array(T), 1)); g.setAttribute('aS', new BufferAttribute(new Float32Array(S), 1));
    g.setIndex(I);
    const m = new Mesh(g, new ShaderMaterial({ uniforms: { uDraw: { value: reduced ? 1 : 0 }, uFade: { value: 1 }, uCol: { value: water } }, vertexShader: traceVert, fragmentShader: traceFrag, transparent: true, depthWrite: false, blending: AdditiveBlending }));
    m.renderOrder = 1; scene.add(m);
    let km = 0; for (let k = 1; k < p.length; k++) km += Math.hypot((p[k][0] - p[k - 1][0]) * dx, (p[k][1] - p[k - 1][1]) * dz);
    const tr = { m, t0: performance.now(), km, from: h[p[0][1] * W + p[0][0]] | 0, to: Math.max(0, h[p.at(-1)[1] * W + p.at(-1)[0]] | 0) };
    traces.push(tr);
    while (traces.length > 7) { const o = traces.shift(); scene.remove(o.m); o.m.geometry.dispose(); o.m.material.dispose(); }
    traces.forEach((t, k) => { t.m.material.uniforms.uFade.value = 0.35 + 0.65 * ((k + 1) / traces.length); });
    wake();
    return tr;
  }

  // ── renderer, lens ───────────────────────────────────────────────────────────────────────────────────────────────────
  const renderer = new WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = LinearSRGBColorSpace; renderer.toneMapping = NoToneMapping;
  host.appendChild(renderer.domElement);
  const camera = new PerspectiveCamera(32, 1, 0.05, 900);
  const rt = new WebGLRenderTarget(4, 4, { type: HalfFloatType, samples: phone ? 0 : 4 });
  const PU = { tScene: { value: rt.texture }, uRes: { value: new Vector2() }, uGrain: { value: 0.035 }, uExp: { value: 0.85 }, uSat: { value: 0.18 }, uDim: { value: 1 } };
  const post = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({ uniforms: PU, vertexShader: postVert, fragmentShader: postFrag, depthTest: false, depthWrite: false }));
  const postScene = new Scene(); postScene.add(post); const postCam = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  let Wp = 0, Hp = 0;
  function resize() {
    const r = host.getBoundingClientRect(); Wp = Math.max(1, r.width); Hp = Math.max(1, r.height);
    const dpr = Math.min(devicePixelRatio || 1, phone ? 1.4 : 1.75);
    renderer.setPixelRatio(dpr); renderer.setSize(Wp, Hp, false);
    rt.setSize(Math.round(Wp * dpr), Math.round(Hp * dpr)); PU.uRes.value.set(Math.round(Wp * dpr), Math.round(Hp * dpr));
    camera.aspect = Wp / Hp; camera.updateProjectionMatrix(); wake();
  }

  // ── shots ────────────────────────────────────────────────────────────────────────────────────────────────────────────
  // each: where the camera stands and what it looks at (km in the scene; the crater is the origin of the composition)
  const C = new Vector3(cx, cy, cz);
  const SHOTS = [
    { from: [cx - 13.5, 2.6, cz - 15], at: [cx + 1.6, 2.2, cz + 3], fov: 30 },   // I the volcano against the sun, from the north-west
    { from: [cx - 3.6, cy + 0.55, cz - 2.4], at: [cx + 0.6, cy + 0.1, cz + 0.6], fov: 34 }, // II low over the ice, the crater and the column
    { from: [cx - 1.2, 6.2, cz - 9.6], at: [cx + 0.4, 0.5, cz + 4.2], fov: 40 },  // III the ice cap and its valleys, from above the north, towards the sea
  ];
  const tmpF = new Vector3(), tmpA = new Vector3();
  let shot = 0, shotT = 0, target = 0, dim = 1, dimT = 1;
  const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  function placeCam(p) {
    const i = Math.floor(Math.min(p, SHOTS.length - 1.0001)), f = ease(Math.max(0, Math.min(1, p - i)));
    const a = SHOTS[i], b = SHOTS[Math.min(SHOTS.length - 1, i + 1)];
    tmpF.fromArray(a.from).lerp(new Vector3().fromArray(b.from), f);
    tmpA.fromArray(a.at).lerp(new Vector3().fromArray(b.at), f);
    // a long move rises a little, so it never cuts through the ground
    tmpF.y += Math.sin(Math.PI * f) * 1.2;
    camera.position.copy(tmpF); camera.lookAt(tmpA);
    const fov = a.fov + (b.fov - a.fov) * f; if (camera.fov !== fov) { camera.fov = fov; camera.updateProjectionMatrix(); }
  }

  // ── frame loop: only while something moves ───────────────────────────────────────────────────────────────────────
  let raf = 0, live = false, t0 = performance.now(), plumeUntil = reduced ? 0 : performance.now() + 7000, frames = 0;
  const stats = { get frames() { return frames; } };
  function wake() { if (!raf) raf = requestAnimationFrame(frame); }
  function frame(now) {
    raf = 0;
    let more = false;
    // camera: eased towards the scroll target
    if (Math.abs(target - shotT) > 1e-4) { shotT += (target - shotT) * (reduced ? 1 : 0.075); if (Math.abs(target - shotT) < 2e-3) shotT = target; more = true; }
    if (Math.abs(dimT - dim) > 1e-3) { dim += (dimT - dim) * (reduced ? 1 : 0.08); more = true; } else dim = dimT;
    placeCam(shotT);
    // the ash moves only while it is being looked at for the first time, or while the reader traces
    if (now < plumeUntil) { U.uT.value = (now - t0) / 1000; more = true; }
    for (const t of traces) { const u = t.m.material.uniforms.uDraw; if (u.value < 1) { u.value = Math.min(1, (now - t.t0) / 1800); more = true; } }
    PU.uDim.value = dim;
    renderer.setRenderTarget(rt); renderer.render(scene, camera);
    renderer.setRenderTarget(null); renderer.render(postScene, postCam);
    frames++;
    if (more) wake();
  }

  // ── the reader's pointer: where on the ground, then the water's way down ─────────────────────────────────────────────
  const ray = new Vector3(), org = new Vector3();
  function groundAt(clientX, clientY) {
    const r = renderer.domElement.getBoundingClientRect();
    const ndc = new Vector3((clientX - r.left) / r.width * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1, 0.5);
    org.copy(camera.position); ray.copy(ndc.unproject(camera)).sub(org).normalize();
    for (let t = 0.2, step = 0.05; t < 80; t += step, step *= 1.01) {
      const x = org.x + ray.x * t, y = org.y + ray.y * t, z = org.z + ray.z * t;
      const i = (x + SX / 2) / dx, j = (z + SZ / 2) / dz;
      if (i < 0 || j < 0 || i > W - 1 || j > H - 1) { if (y < 0) return null; continue; }
      if (y <= yAt(Math.round(i), Math.round(j))) return [i, j];
    }
    return null;
  }

  addEventListener('resize', resize); resize();
  placeCam(0); wake();
  onReady?.();
  return {
    // p: 0 … SHOTS.length − 1 (fractions between shots)
    setShot(p) { target = Math.max(0, Math.min(SHOTS.length - 1, p)); wake(); },
    setDim(v) { dimT = v; wake(); },
    traceAt(clientX, clientY) { const g = groundAt(clientX, clientY); return g ? addTrace(g[0], g[1]) : null; },
    // a trace from a named place (the keyboard's way in): [lat, lon]
    traceFrom(lat, lon) { const i = (lon - w0) / (e0 - w0) * (W - 1), j = (n0 - lat) / (n0 - s0) * (H - 1); return addTrace(i, j); },
    clearTraces() { while (traces.length) { const o = traces.shift(); scene.remove(o.m); o.m.geometry.dispose(); o.m.material.dispose(); } wake(); },
    heightAt(lat, lon) { const i = Math.round((lon - w0) / (e0 - w0) * (W - 1)), j = Math.round((n0 - lat) / (n0 - s0) * (H - 1)); return h[j * W + i]; },
    stats, renderer,
  };
}
