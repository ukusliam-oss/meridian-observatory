// The History hub's eyepiece dial as a file: node tools/build-eyepiece.mjs → assets/img/eyepiece-history.svg
// One drawing for both pages that show it, the hub and a chapter opening on the dive (kq6.html?dive), so the two frames
// match exactly across the page change. 1919–1991 round a lens of radius 112 in a 320 × 320 box; the needle is drawn by
// the pages (it points at the reader's place), and the lens is left open for the globe behind it.
import { writeFileSync } from 'node:fs';

const Y0 = 1919, Y1 = 1991, A0 = -140, A1 = 140, R_LENS = 112;
const ang = y => A0 + (y - Y0) / (Y1 - Y0) * (A1 - A0);
const pol = (r, a) => [r * Math.sin(a * Math.PI / 180), -r * Math.cos(a * Math.PI / 180)];
const arc = (r, a, b) => { const [x0, y0] = pol(r, a), [x1, y1] = pol(r, b); return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${b - a > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`; };
let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-160 -160 320 320" width="320" height="320">
<defs><radialGradient id="rim" cx="-.35" cy="-.45" r="1.2"><stop offset="0" stop-color="#ece7de" stop-opacity=".55"/><stop offset=".55" stop-color="#ece7de" stop-opacity=".08"/><stop offset="1" stop-color="#ece7de" stop-opacity=".02"/></radialGradient></defs>
<circle r="${R_LENS}" fill="none" stroke="url(#rim)" stroke-width="1.5"/>
<circle r="150" fill="none" stroke="#ece7de" stroke-opacity=".1" stroke-width="1"/>
<path d="${arc(133, ang(1948), ang(1989))}" fill="none" stroke="#a084ee" stroke-opacity=".6" stroke-width="2"/>`;
for (let y = Y0; y <= Y1; y++) {
  const dec = y % 10 === 0, [x0, y0] = pol(dec ? 122 : 127, ang(y)), [x1, y1] = pol(138, ang(y));
  svg += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="#ece7de" stroke-opacity="${dec ? 0.5 : 0.18}" stroke-width="${dec ? 1.2 : 0.8}"/>`;
  if (dec && y > Y0) { const [tx, ty] = pol(150, ang(y)); svg += `<text x="${tx.toFixed(1)}" y="${(ty + 3).toFixed(1)}" text-anchor="middle" font-family="IBM Plex Mono, Menlo, ui-monospace, monospace" font-size="9" letter-spacing=".7" fill="#ece7de" fill-opacity=".5">${y}</text>`; }
}
svg += '</svg>\n';
writeFileSync('assets/img/eyepiece-history.svg', svg);
console.log(`eyepiece-history.svg: ${(svg.length / 1024).toFixed(1)} KB`);
// the needle's angle for a year, for the pages: A0 + (year - 1919) / 72 * 280
