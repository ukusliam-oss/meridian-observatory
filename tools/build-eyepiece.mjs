// The hubs' eyepiece dials as files: node tools/build-eyepiece.mjs → assets/img/eyepiece-{history,economics,geography}.svg
// One drawing for both pages that show it, a hub and its chapter opening on the dive (?dive), so the two frames match
// exactly across the page change. A ring round a lens of radius 112 in a 320 × 320 box; the needle is drawn by the pages
// (it points at the reader's place), and the lens is left open for the globe behind it.
// History reads years, 1919–1991, with KQ6's span lit. Economics and Geography read their chapter itself: a tick per
// scene, a longer one where each part begins, numbered; the needle stands on the reader's scene.
import { writeFileSync } from 'node:fs';

const A0 = -140, A1 = 140, R_LENS = 112, INK = '#ece7de';
const pol = (r, a) => [r * Math.sin(a * Math.PI / 180), -r * Math.cos(a * Math.PI / 180)];
const arc = (r, a, b) => { const [x0, y0] = pol(r, a), [x1, y1] = pol(r, b); return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${b - a > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`; };
const tick = (a, r0, op, w) => { const [x0, y0] = pol(r0, a), [x1, y1] = pol(138, a); return `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="${INK}" stroke-opacity="${op}" stroke-width="${w}"/>`; };
const label = (a, t) => { const [tx, ty] = pol(150, a); return `<text x="${tx.toFixed(1)}" y="${(ty + 3).toFixed(1)}" text-anchor="middle" font-family="IBM Plex Mono, Menlo, ui-monospace, monospace" font-size="9" letter-spacing=".7" fill="${INK}" fill-opacity=".5">${t}</text>`; };
const head = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-160 -160 320 320" width="320" height="320">
<defs><radialGradient id="rim" cx="-.35" cy="-.45" r="1.2"><stop offset="0" stop-color="${INK}" stop-opacity=".55"/><stop offset=".55" stop-color="${INK}" stop-opacity=".08"/><stop offset="1" stop-color="${INK}" stop-opacity=".02"/></radialGradient></defs>
<circle r="${R_LENS}" fill="none" stroke="url(#rim)" stroke-width="1.5"/>
<circle r="150" fill="none" stroke="${INK}" stroke-opacity=".1" stroke-width="1"/>`;
const out = (name, svg) => { writeFileSync(`assets/img/eyepiece-${name}.svg`, svg + '</svg>\n'); console.log(`eyepiece-${name}.svg: ${(svg.length / 1024).toFixed(1)} KB`); };

// History: years. The needle's angle for a year, for the pages: A0 + (year - 1919) / 72 * 280
{
  const Y0 = 1919, Y1 = 1991, ang = y => A0 + (y - Y0) / (Y1 - Y0) * (A1 - A0);
  let svg = head + `\n<path d="${arc(133, ang(1948), ang(1989))}" fill="none" stroke="#a084ee" stroke-opacity=".6" stroke-width="2"/>`;
  for (let y = Y0; y <= Y1; y++) {
    const dec = y % 10 === 0;
    svg += tick(ang(y), dec ? 122 : 127, dec ? 0.5 : 0.18, dec ? 1.2 : 0.8);
    if (dec && y > Y0) svg += label(ang(y), y);
  }
  out('history', svg);
}

// Economics and Geography: the chapter's scenes. The needle's angle for scene k of n, for the pages:
// A0 + (k + 0.5) / n * 280 (eyepiece.js sceneAngle)
for (const [name, file, colour] of [['economics', 'economics/macro-policy', '#46d6a0'], ['geography', 'geography/tectonics', '#5fb0ff']]) {
  const { default: d } = await import(`../assets/js/data/${file}.js`);
  const n = d.scenes.length, ang = k => A0 + (k + 0.5) / n * (A1 - A0);
  let svg = head + `\n<path d="${arc(133, ang(0), ang(n - 1))}" fill="none" stroke="${colour}" stroke-opacity=".5" stroke-width="2"/>`;
  let part = 0;
  d.scenes.forEach((s, k) => {
    const first = k === 0 || s.part !== d.scenes[k - 1].part;
    svg += tick(ang(k), first ? 122 : 127, first ? 0.5 : 0.22, first ? 1.2 : 0.8);
    if (first) svg += label(ang(k), String(++part).padStart(2, '0'));
  });
  out(name, svg);
}
