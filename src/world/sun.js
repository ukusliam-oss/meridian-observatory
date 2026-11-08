// Where the Sun is overhead at a moment (UTC ms), from the low-precision formulas of the Astronomical Almanac (good to
// about 0.01°, far finer than a texel), and the moment it rises somewhere. A scene that names its time (`sun`) is lit
// as the Earth really was then: the 4.15 a.m. attack on Budapest happens in the dark.
const D = Math.PI / 180;
export function subsolar(ms) {
  const d = ms / 864e5 - 10957.5; // days from J2000.0
  const g = (357.529 + 0.98560028 * d) * D, q = 280.459 + 0.98564736 * d;
  const L = (q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * D, e = (23.439 - 3.6e-7 * d) * D;
  const ra = Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L)) / D, dec = Math.asin(Math.sin(e) * Math.sin(L)) / D;
  const gmst = 280.46061837 + 360.98564736629 * d;
  return [dec, ((ra - gmst) % 360 + 540) % 360 - 180];
}
// the Sun's height above the horizon at [lat, lon] (degrees)
export function elevation(lat, lon, ms) {
  const [sl, so] = subsolar(ms);
  const c = Math.sin(lat * D) * Math.sin(sl * D) + Math.cos(lat * D) * Math.cos(sl * D) * Math.cos((lon - so) * D);
  return Math.asin(Math.max(-1, Math.min(1, c))) / D;
}
// the first minute after `from` when the Sun's upper limb clears the horizon (−0.833° with refraction), within a day
export function sunrise(lat, lon, from) {
  for (let t = from, end = from + 864e5; t < end; t += 6e4) if (elevation(lat, lon, t) > -0.833) return t;
  return null;
}
