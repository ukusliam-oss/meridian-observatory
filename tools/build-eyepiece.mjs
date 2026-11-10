// The History hub's eyepiece dial as a file: node tools/build-eyepiece.mjs → assets/img/eyepiece-history.svg
// One drawing for both pages that show it, the hub and a chapter opening on the dive (kq6.html?dive), so the two frames
// match exactly across the page change. 1919–1991 round a lens of radius 112 in a 320 × 320 box; the needle is drawn by
// the pages (it points at the reader's place), and the lens is left open for the globe behind it.
import { writeFileSync } from 'node:fs';

const Y0 = 1919, Y1 = 1991, A0 = -140, A1 = 140, R_LENS = 112;
const ang = y => A0 + (y - Y0) / (Y1 - Y0) * (A1 - A0);
const pol = (r, a) => [r * Math.sin(a * Math.PI / 180), -r * Math.cos(a * Math.PI / 180)];
const arc = (r, a, b) => { const [x0, y0] = pol(r, a), [x1, y1] = pol(r, b); return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${b - a > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`; };
// lit by the globe's sun from the upper left: the bezel brightest on that side, each mark catching as much of the sun as
// its bearing allows, a glint on the outer ring facing it (the second entry study's dial, which the owner kept)
const SUN = -50;
const lit = a => 0.25 + 0.75 * Math.pow(Math.max(0, Math.cos((a - SUN) * Math.PI / 180)), 1.6);
const [gx, gy] = pol(1, SUN);
let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-172 -172 344 344" width="344" height="344">
<defs>
  <linearGradient id="bezel" x1="${(0.5 + gx / 2).toFixed(3)}" y1="${(0.5 + gy / 2).toFixed(3)}" x2="${(0.5 - gx / 2).toFixed(3)}" y2="${(0.5 - gy / 2).toFixed(3)}">
    <stop offset="0" stop-color="#ece7de" stop-opacity=".7"/><stop offset=".45" stop-color="#ece7de" stop-opacity=".12"/><stop offset="1" stop-color="#ece7de" stop-opacity=".05"/></linearGradient>
  <radialGradient id="glass" cx="${(0.5 + gx * 0.22).toFixed(3)}" cy="${(0.5 + gy * 0.22).toFixed(3)}" r=".6"><stop offset="0" stop-color="#fff" stop-opacity=".07"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
</defs>
<circle r="${R_LENS - 1}" fill="url(#glass)"/>
<circle r="${R_LENS}" fill="none" stroke="url(#bezel)" stroke-width="2"/>
<circle r="${R_LENS + 5}" fill="none" stroke="#ece7de" stroke-opacity=".06" stroke-width="8"/>
<circle r="150" fill="none" stroke="url(#bezel)" stroke-width="1"/>
<path d="${arc(150, SUN - 28, SUN + 28)}" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.2" stroke-linecap="round"/>
<path d="${arc(133, ang(1948), ang(1989))}" fill="none" stroke="#a084ee" stroke-opacity=".6" stroke-width="2"/>`;
for (let y = Y0; y <= Y1; y++) {
  const dec = y % 10 === 0, a = ang(y), [x0, y0] = pol(dec ? 122 : 127, a), [x1, y1] = pol(138, a);
  svg += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="#ece7de" stroke-opacity="${((dec ? 0.62 : 0.24) * lit(a)).toFixed(3)}" stroke-width="${dec ? 1.2 : 0.8}"/>`;
  if (dec && y > Y0) { const [tx, ty] = pol(161, a); svg += `<text x="${tx.toFixed(1)}" y="${(ty + 3).toFixed(1)}" text-anchor="middle" font-family="IBM Plex Mono, Menlo, ui-monospace, monospace" font-size="9" letter-spacing=".7" fill="#ece7de" fill-opacity="${(0.35 + 0.5 * lit(a)).toFixed(2)}">${y}</text>`; }
}
svg += '</svg>\n';
writeFileSync('assets/img/eyepiece-history.svg', svg);
console.log(`eyepiece-history.svg: ${(svg.length / 1024).toFixed(1)} KB`);
// the needle's angle for a year, for the pages: A0 + (year - 1919) / 72 * 280
