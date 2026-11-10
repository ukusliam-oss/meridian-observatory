// The lens every directed scene is seen through (WP-04X): one pass over the frame, rendered first into a half-float
// target. Filmic tone, a near-monochrome grade (shadows a little cold, highlights a little warm) in which only strong
// colour keeps its hue, so each scene's one accent survives; vignette; softness and colour fringes towards the edges;
// a darker lower third where the words stand; grain. No bloom: what should glow is drawn glowing.
// The chapters' globe goes through it too (`display`): its shaders write display values, so the frame is taken back to
// linear light first, and three's own materials are made to write display values into the target as the globe's do.
import { Mesh, PlaneGeometry, ShaderMaterial, Scene, OrthographicCamera, WebGLRenderTarget, HalfFloatType, Vector2, Color } from 'three';
import { encodeOut } from '../world/post.js';

const postVert = /* glsl */`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const postFrag = /* glsl */`
  uniform sampler2D tScene; uniform vec2 uRes; uniform float uGrain, uExp, uSat, uDim, uDisplay, uDof;
  varying vec2 vUv;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  void main() {
    vec2 c = vUv - 0.5; float r = length(c * vec2(uRes.x / uRes.y, 1.0));
    float k = smoothstep(0.38, 1.0, r);
    // the lens: colour fringes and softness grow towards the edges of the frame
    vec2 dir = c * (uDisplay > 0.5 ? 0.006 : 0.012) * k, px = 1.0 / uRes;
    vec3 col = vec3(texture2D(tScene, vUv + dir).r, texture2D(tScene, vUv).g, texture2D(tScene, vUv - dir).b);
    // and a long lens's depth: in a shot tilted towards the horizon the far ground, at the top of the frame, goes soft
    float kd = max(k, uDof * smoothstep(0.6, 0.97, vUv.y));
    vec3 soft = vec3(0.0);
    // the six taps turn a little from pixel to pixel, so a small bright light goes soft instead of into a hexagon
    float turn = hash(gl_FragCoord.xy * 0.71) * 1.0472;
    for (int i = 0; i < 6; i++) { float a = float(i) * 1.0472 + turn; soft += texture2D(tScene, vUv + vec2(cos(a), sin(a)) * px * (1.0 + 7.0 * kd)).rgb; }
    col = mix(col, soft / 6.0, kd * 0.85);
    if (uDisplay > 0.5) {
      // the globe's frame: toned by its brightness alone, so a map's hues stay its legend's, and even its strongest
      // colour gives up a little of itself to the grade
      col = pow(max(col, vec3(0.0)), vec3(2.2));
      float l0 = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col *= aces(vec3(l0 * uExp)).g / max(l0, 1e-4);
    } else col = aces(col * uExp);
    // the grade: almost monochrome, shadows a little cold and highlights a little warm; only strong colour keeps its hue
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    float chroma = max(col.r, max(col.g, col.b)) - min(col.r, min(col.g, col.b));
    col = mix(vec3(l), col, max(uSat, smoothstep(0.12, 0.32, chroma) * (uDisplay > 0.5 ? 0.72 : 1.0)));
    col *= mix(vec3(0.9, 0.95, 1.06), vec3(1.07, 1.0, 0.9), smoothstep(0.05, 0.6, l));
    // a film's lower third: the foot of the frame darkens a little, where the words stand
    col *= (1.0 - 0.62 * pow(r, 2.3)) * uDim * (1.0 - 0.42 * smoothstep(0.42, 0.0, vUv.y));
    col = pow(col, vec3(1.0 / 2.2));
    col += (hash(floor(gl_FragCoord.xy)) - 0.5) * uGrain;
    gl_FragColor = vec4(col, 1.0);
  }`;

export function createLens(renderer, { phone = false, exposure = 1, grain = 0.035, sat = 0.18, display = false } = {}) {
  const rt = new WebGLRenderTarget(4, 4, { type: HalfFloatType, samples: phone ? 0 : 4 });
  const uniforms = { tScene: { value: rt.texture }, uRes: { value: new Vector2() }, uGrain: { value: grain }, uExp: { value: exposure }, uSat: { value: sat }, uDim: { value: 1 }, uDisplay: { value: display ? 1 : 0 }, uDof: { value: 0 } };
  const clear = new Color(), clearIn = new Color();
  const scene = new Scene(), cam = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  scene.add(new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({ uniforms, vertexShader: postVert, fragmentShader: postFrag, depthTest: false, depthWrite: false })));
  return {
    uniforms,
    setSize(w, h) { rt.setSize(w, h); uniforms.uRes.value.set(w, h); },
    render(world, camera) {
      if (!display) { renderer.setRenderTarget(rt); renderer.render(world, camera); renderer.setRenderTarget(null); renderer.render(scene, cam); return; }
      world.traverse(o => { const m = o.material; if (m && !Array.isArray(m) && !m.userData.srgbOut) encodeOut(m); });
      renderer.getClearColor(clear); const a = renderer.getClearAlpha();
      renderer.setClearColor(clearIn.copy(clear).convertLinearToSRGB(), a);
      renderer.setRenderTarget(rt); renderer.clear(); renderer.render(world, camera);
      renderer.setClearColor(clear, a); renderer.setRenderTarget(null); renderer.render(scene, cam);
    },
    dispose() { rt.dispose(); },
  };
}
