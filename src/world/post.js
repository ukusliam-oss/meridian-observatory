// The world's light after the scene is drawn (taken from the paper-and-ink Meridian's engine, its paper left out): the
// frame is drawn into a half-float target, then one bloom chain and one composite pass bring it to the screen: bloom
// (only what is bright), exposure, a soft shoulder on brightness alone (hue untouched, so a map's colours still match
// its legend), a slight grade (cool shadows, warm highlights), the reading grade, the vignette and a fixed one-pixel
// grain. Runs only when the engine draws a frame.
import {
  WebGLRenderTarget, HalfFloatType, RGBAFormat, LinearFilter, ShaderMaterial, Mesh, PlaneGeometry, Scene,
  OrthographicCamera, Vector2, NoBlending, AdditiveBlending, Color,
} from 'three';

const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }';
const LUMA = 'float luma(vec3 c){ return dot(c, vec3(.2126, .7152, .0722)); }';
// bright pass with a soft knee, at half size
const BRIGHT = `uniform sampler2D uSrc; uniform float uThr; varying vec2 vUv; ${LUMA}
  void main(){ vec3 c = texture2D(uSrc, vUv).rgb; float l = luma(c), k = .06;
    float s = clamp(l - uThr + k, 0., 2. * k); s = s * s / (4. * k + 1e-4); float w = max(s, l - uThr) / max(l, 1e-4);
    gl_FragColor = vec4(c * w, 1.); }`;
// 13-tap downsample (Jimenez 2014), then a tent upsample added onto the level above
const DOWN = `uniform sampler2D uSrc; uniform vec2 uPx; varying vec2 vUv;
  vec3 t(vec2 o){ return texture2D(uSrc, vUv + o * uPx).rgb; }
  void main(){ vec3 c = t(vec2(0)) * .125 + (t(vec2(-1,-1)) + t(vec2(1,-1)) + t(vec2(-1,1)) + t(vec2(1,1))) * .125
    + (t(vec2(-2,0)) + t(vec2(2,0)) + t(vec2(0,-2)) + t(vec2(0,2))) * .0625
    + (t(vec2(-2,-2)) + t(vec2(2,-2)) + t(vec2(-2,2)) + t(vec2(2,2))) * .03125;
    gl_FragColor = vec4(c, 1.); }`;
const UP = `uniform sampler2D uSrc; uniform vec2 uPx; uniform float uW; varying vec2 vUv;
  vec3 t(vec2 o){ return texture2D(uSrc, vUv + o * uPx).rgb; }
  void main(){ vec3 c = (t(vec2(-1,-1)) + t(vec2(1,-1)) + t(vec2(-1,1)) + t(vec2(1,1))) * .0625
    + (t(vec2(-1,0)) + t(vec2(1,0)) + t(vec2(0,-1)) + t(vec2(0,1))) * .125 + t(vec2(0)) * .25;
    gl_FragColor = vec4(c * uW, 1.); }`;
const COMP = `uniform sampler2D uSrc, uBloom; uniform float uBloomK, uExposure, uShoulder, uGrade, uVignette, uGrain, uDim, uDimSide;
  uniform vec2 uRes; varying vec2 vUv; ${LUMA}
  float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  void main(){
    vec3 c = texture2D(uSrc, vUv).rgb * uExposure + texture2D(uBloom, vUv).rgb * uBloomK;
    // a soft shoulder on brightness only: below uShoulder nothing changes, above it light rolls off instead of clipping
    float l = luma(c), s = uShoulder;
    float lm = l < s ? l : s + (1. - s) * (1. - exp(-(l - s) / (1. - s)));
    c *= lm / max(l, 1e-5);
    // grade: shadows a touch cooler, highlights a touch warmer; coloured pixels (map fills, data) are left alone
    float chroma = max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
    float neutral = 1. - smoothstep(.02, .12, chroma);
    float sh = (1. - smoothstep(0., .25, lm)) * uGrade * neutral, hi = smoothstep(.6, 1., lm) * uGrade * neutral;
    c *= vec3(1. - .5 * sh, 1., 1. + .6 * sh) * vec3(1. + .25 * hi, 1. + .08 * hi, 1. - .2 * hi);
    // the reading grade: the half of the screen behind the panel is a little darker while a panel is read
    if (uDim > 0.) c *= 1. - .12 * uDim * (uDimSide < .5 ? 1. - smoothstep(.36, .56, vUv.x) : 1. - smoothstep(.38, .62, vUv.y));
    vec2 q = vUv - .5; q.x *= uRes.x / uRes.y;
    c *= 1. - uVignette * smoothstep(.35, 1.05, length(q));
    c += (h1(floor(gl_FragCoord.xy)) - .5) * uGrain * (1. - .6 * lm);
    gl_FragColor = vec4(c, 1.);
  }`;

const encodeOut = m => {
  m.userData.srgbOut = true;
  const prev = m.onBeforeCompile;
  m.onBeforeCompile = (sh, r) => { prev?.call(m, sh, r); sh.fragmentShader = sh.fragmentShader.replace('#include <colorspace_fragment>', 'gl_FragColor = sRGBTransferOETF( gl_FragColor );'); };
  const key = m.customProgramCacheKey?.bind(m);
  m.customProgramCacheKey = () => (key ? key() : '') + '|srgbOut';
  m.needsUpdate = true;
};
const quad = mat => { const m = new Mesh(new PlaneGeometry(2, 2), mat); m.frustumCulled = false; const s = new Scene(); s.add(m); return { s, m }; };
const cam = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
const clear = new Color(), clearTarget = new Color();
const target = (w, h, samples = 0) => new WebGLRenderTarget(Math.max(1, w), Math.max(1, h), { type: HalfFloatType, format: RGBAFormat, minFilter: LinearFilter, magFilter: LinearFilter, depthBuffer: samples > 0, samples });

export function createPost(renderer, { levels = 5, phone = false, samples = null } = {}) {
  const LV = phone ? 3 : levels;
  const bright = new ShaderMaterial({ vertexShader: VERT, fragmentShader: BRIGHT, uniforms: { uSrc: { value: null }, uThr: { value: .84 } }, blending: NoBlending, depthTest: false });
  const down = new ShaderMaterial({ vertexShader: VERT, fragmentShader: DOWN, uniforms: { uSrc: { value: null }, uPx: { value: new Vector2() } }, blending: NoBlending, depthTest: false });
  const up = new ShaderMaterial({ vertexShader: VERT, fragmentShader: UP, uniforms: { uSrc: { value: null }, uPx: { value: new Vector2() }, uW: { value: 1 } }, blending: AdditiveBlending, depthTest: false, transparent: true });
  const comp = new ShaderMaterial({
    vertexShader: VERT, fragmentShader: COMP, blending: NoBlending, depthTest: false,
    uniforms: { uSrc: { value: null }, uBloom: { value: null }, uBloomK: { value: .5 }, uExposure: { value: 1 }, uShoulder: { value: .8 }, uGrade: { value: .5 }, uVignette: { value: 0 }, uGrain: { value: .012 }, uRes: { value: new Vector2(1, 1) },
      uDim: { value: 0 }, uDimSide: { value: 0 } },
  });
  const qB = quad(bright), qD = quad(down), qU = quad(up), qC = quad(comp);
  let main = null, mips = [];
  const params = comp.uniforms;
  const api = {
    // the light's settings
    set bloom(k) { params.uBloomK.value = k; }, get bloom() { return params.uBloomK.value; },
    set exposure(e) { params.uExposure.value = e; }, get exposure() { return params.uExposure.value; },
    set grade(g) { params.uGrade.value = g; },
    set shoulder(v) { params.uShoulder.value = v; },
    // the reading grade's darkening behind the panel: 0 … 1, on the left half (wide screens) or the bottom (phones)
    dim(k, bottom = false) { params.uDim.value = k; params.uDimSide.value = bottom ? 1 : 0; },
    set vignette(v) { params.uVignette.value = v; },
    set grain(g) { params.uGrain.value = g; },
    setSize(w, h, dpr) {
      const W = Math.round(w * dpr), H = Math.round(h * dpr);
      main?.dispose(); mips.forEach(m => m.dispose());
      main = target(W, H, samples ?? (dpr >= 1.5 ? 2 : 4)); // dense screens need fewer samples (and pay four times the pixels)
      mips = []; let mw = W >> 1, mh = H >> 1;
      for (let k = 0; k < LV; k++) { mips.push(target(mw, mh)); mw = Math.max(1, mw >> 1); mh = Math.max(1, mh >> 1); }
      params.uRes.value.set(W, H);
    },
    // draw the scene through the light: the target, the bloom chain, the composite onto the screen
    render(scene, camera) {
      // three encodes its own materials (lines, arrows, spikes) to sRGB only on the screen, never into a target; the
      // engine's shaders write display values either way. So those materials are made to encode here too, and the
      // frame in the target matches the canvas exactly (checked: map colours ΔE2000 < 1 against the plain frame).
      scene.traverse(o => { const m = o.material; if (m && !m.userData.srgbOut) encodeOut(m); });
      // the target holds display values like the engine's shaders, so the clear colour (kept linear) is encoded first:
      // left as it was, the stage came out black instead of the page's night
      renderer.getClearColor(clear); const alpha = renderer.getClearAlpha();
      renderer.setClearColor(clearTarget.copy(clear).convertLinearToSRGB(), alpha);
      renderer.setRenderTarget(main); renderer.clear();
      renderer.render(scene, camera);
      renderer.setClearColor(clear, alpha);
      if (params.uBloomK.value > 0) {
        bright.uniforms.uSrc.value = main.texture; renderer.setRenderTarget(mips[0]); renderer.render(qB.s, cam);
        for (let k = 1; k < LV; k++) {
          down.uniforms.uSrc.value = mips[k - 1].texture; down.uniforms.uPx.value.set(1 / mips[k - 1].width, 1 / mips[k - 1].height);
          renderer.setRenderTarget(mips[k]); renderer.render(qD.s, cam);
        }
        renderer.autoClear = false;
        for (let k = LV - 1; k > 0; k--) {
          up.uniforms.uSrc.value = mips[k].texture; up.uniforms.uPx.value.set(1 / mips[k].width, 1 / mips[k].height);
          renderer.setRenderTarget(mips[k - 1]); renderer.render(qU.s, cam);
        }
        renderer.autoClear = true;
      }
      comp.uniforms.uSrc.value = main.texture; comp.uniforms.uBloom.value = mips[0].texture;
      renderer.setRenderTarget(null); renderer.render(qC.s, cam);
    },
    dispose() { main?.dispose(); mips.forEach(m => m.dispose()); [bright, down, up, comp].forEach(m => m.dispose()); },
  };
  return api;
}
