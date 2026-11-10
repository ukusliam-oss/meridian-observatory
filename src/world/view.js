// Where the camera is for a scene and what part of the globe it shows. Shared by the engine (src/world/engine.js) and
// tools/check-texels.mjs, so the texture sizes the engine picks are the ones the check measures.
import { PerspectiveCamera, Vector2, Vector3, Ray, Sphere } from 'three';

export const R_KM = 6371, DEG = Math.PI / 180;
export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const ll = (lat, lon, r = 1) => {
  const p = lat * DEG, l = lon * DEG;
  return new Vector3(Math.cos(p) * Math.sin(l) * r, Math.sin(p) * r, Math.cos(p) * Math.cos(l) * r);
};
const latLonOf = v => [Math.asin(clamp(v.y, -1, 1)) / DEG, Math.atan2(v.x, v.z) / DEG];

// The subject in the middle of the frame, a little above it, clear of the captions at its foot (the chapters as film).
export function setViewport(camera, W, H) {
  camera.aspect = W / H;
  const wide = W > 900;
  camera.setViewOffset(W, H, 0, wide ? H * 0.06 : H * 0.1, W, H);
  camera.updateProjectionMatrix();
}

// The camera between two scene cameras a and b at t (0..1): a great-circle path, altitude eased in log space and lifted
// on long journeys, leaning towards the horizon close to the ground. Returns the altitude in km.
const UP = new Vector3(0, 1, 0), tmp = new Vector3();
export function placeCamera(camera, a, b, t, W, H) {
  const da = ll(a.lat, a.lon), db = ll(b.lat, b.lon);
  const ang = da.angleTo(db);
  const dir = ang < 1e-6 ? da : da.clone().multiplyScalar(Math.sin((1 - t) * ang)).add(db.clone().multiplyScalar(Math.sin(t * ang))).divideScalar(Math.sin(ang));
  dir.normalize();
  const travelKm = ang * R_KM;
  const lift = 1 + Math.min(2.2, travelKm / Math.max(a.alt, b.alt, 400) * 0.35) * Math.sin(Math.PI * t);
  const alt = Math.exp(Math.log(a.alt) * (1 - t) + Math.log(b.alt) * t) * lift * (W / H < 0.8 ? 1.7 : 1); // tall phones see less width
  const d = 1 + alt / R_KM;
  // a scene camera may set its own tilt (degrees), e.g. a city seen at a lower angle; otherwise it follows the altitude
  const auto = alt < 2500 ? 24 * (1 - alt / 2500) : 0;
  const tilt = ((a.tilt ?? auto) * (1 - t) + (b.tilt ?? auto) * t) * DEG;
  // a scene over a raised 3D landscape names its ground height (km, after exaggeration): the camera looks at the ground
  // there, not at sea level beneath it, and its altitude counts from that ground
  const ground = ((a.ground || 0) * (1 - t) + (b.ground || 0) * t) / R_KM;
  const south = new Vector3().crossVectors(dir, new Vector3().crossVectors(UP, dir)).normalize().negate();
  // and its heading (degrees, 0 looking north, 90 looking east): the camera stands back from the target the other way
  const heading = ((a.heading ?? 0) * (1 - t) + (b.heading ?? 0) * t) * DEG;
  if (heading) south.applyAxisAngle(dir, -heading);
  camera.position.copy(dir).multiplyScalar(d + ground).addScaledVector(south, Math.tan(tilt) * (d - 1) * 1.2);
  // a tilted camera keeps the horizon level: its up leans from the world's axis to the ground's own up as it tilts
  camera.up.copy(UP).multiplyScalar(1 - smooth(0, 30 * DEG, tilt)).addScaledVector(dir, smooth(0, 30 * DEG, tilt)).normalize();
  camera.lookAt(tmp.copy(dir).multiplyScalar(1 + ground - smooth(2500, 6000, alt)));
  camera.near = Math.max(0.000002, (d - 1) * 0.15); camera.far = d + 3; camera.updateProjectionMatrix();
  return alt;
}

// [lat, lon] of the ground under a screen point (CSS pixels), or null where the ray passes the globe.
const unit = new Sphere(new Vector3(), 1), ray = new Ray(), hit = new Vector3(), ndc = new Vector2();
function groundAt(camera, x, y, W, H) {
  ndc.set(x / W * 2 - 1, 1 - y / H * 2);
  ray.origin.copy(camera.position);
  ray.direction.set(ndc.x, ndc.y, 0.5).unproject(camera).sub(camera.position).normalize();
  return ray.intersectSphere(unit, hit) ? latLonOf(hit) : null;
}
const kmBetween = (p, q) => {
  const a = ll(p[0], p[1]), b = ll(q[0], q[1]); return a.angleTo(b) * R_KM;
};

// What a scene's camera shows on a W × H screen, held at the scene (not mid-flight):
//   box:     [west, south, east, north] in degrees around everything visible, plus a margin
//   kmPerPx: ground size of one CSS pixel at the target, or 0 when the whole globe is in view
const scratch = new PerspectiveCamera(32, 1, 0.0005, 100);
export function footprint(cam, W, H, margin = 0.14) {
  setViewport(scratch, W, H);
  placeCamera(scratch, cam, cam, 0, W, H);
  scratch.updateMatrixWorld(true); // unproject and project read the world matrix, which lookAt alone does not update
  const pts = [], N = 12;
  let missed = 0;
  for (let r = 0; r <= N; r++) for (let c = 0; c <= N; c++) {
    const g = groundAt(scratch, c / N * W, r / N * H, W, H);
    if (g) pts.push(g); else missed++;
  }
  // where the target sits on screen, and the ground under two points 40 px either side of it
  const t = ll(cam.lat, cam.lon).project(scratch), tx = (t.x * 0.5 + 0.5) * W, ty = (0.5 - t.y * 0.5) * H;
  const l = groundAt(scratch, tx - 40, ty, W, H), r = groundAt(scratch, tx + 40, ty, W, H);
  const kmPerPx = l && r ? kmBetween(l, r) / 80 : 0;
  if (missed || pts.length < 4) return { box: null, kmPerPx };
  // longitudes relative to the target, so a view across the antimeridian stays one box
  const lons = pts.map(([, lon]) => cam.lon + ((((lon - cam.lon) % 360) + 540) % 360) - 180), lats = pts.map(([lat]) => lat);
  let [w, e, s, n] = [Math.min(...lons), Math.max(...lons), Math.min(...lats), Math.max(...lats)];
  const mx = (e - w) * margin, my = (n - s) * margin;
  w -= mx; e += mx; s = Math.max(-89.5, s - my); n = Math.min(89.5, n + my);
  return { box: [w, s, e, n], kmPerPx };
}

// Texture size for a box: square texels on the ground, about texelKm each, within the budget.
export function textureSize(box, texelKm, max, maxPx) {
  const mid = (box[1] + box[3]) / 2 * DEG;
  const kmW = (box[2] - box[0]) * 111.32 * Math.cos(mid), kmH = (box[3] - box[1]) * 110.57;
  let w = kmW / texelKm, h = kmH / texelKm;
  const k = Math.min(1, max / Math.max(w, h), Math.sqrt(maxPx / (w * h)));
  w = Math.round(clamp(w * k, 256, max)); h = Math.round(clamp(h * k, 128, max));
  return { W: w, H: h, texelKm: Math.max(kmW / w, kmH / h) };
}
