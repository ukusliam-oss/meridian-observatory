// Contrast audit, run in the browser on any page of the local preview:
//   const { audit } = await import('/tools/contrast.js'); audit()
// It reveals text hidden by entrance animations, then checks every visible text element against the colour behind it
// (semi-transparent backgrounds are blended down to the first opaque one) and lists those under WCAG AA:
// 4.5:1 for normal text, 3:1 for large text (24px, or 18.66px bold). Text over images, canvases and the globe is
// skipped, because the colour behind it is not known.
// any CSS colour (rgb, color(srgb …), oklab from color-mix) → [r, g, b, a], by painting one pixel
const px = document.createElement('canvas').getContext('2d', { willReadFrequently: true }), seen = new Map();
const parse = c => {
  if (!c) return null;
  if (!seen.has(c)) { px.clearRect(0, 0, 1, 1); px.fillStyle = '#000'; px.fillStyle = c; px.fillRect(0, 0, 1, 1); const d = px.getImageData(0, 0, 1, 1).data; seen.set(c, [d[0], d[1], d[2], d[3] / 255]); }
  return seen.get(c);
};
const lum = ([r, g, b]) => { const f = v => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4); return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
const over = (top, bot) => { const a = top[3]; return [0, 1, 2].map(i => top[i] * a + bot[i] * (1 - a)).concat(1); };

function behind(el) {
  const layers = [];
  for (let e = el; e; e = e.parentElement) {
    if (e.matches('.nav[data-tone="dark"], .tabbar[data-tone="dark"]')) break; // over a dark zone (below), not the page
    const cs = getComputedStyle(e);
    if (cs.backgroundImage !== 'none' && !/gradient/.test(cs.backgroundImage)) return null;
    const c = parse(cs.backgroundColor);
    if (c && c[3] > 0) { layers.push(c); if (c[3] >= 1) break; }
  }
  let base = parse(getComputedStyle(document.documentElement).backgroundColor) || [0, 0, 0, 1];
  if (base[3] < 1) base = parse(getComputedStyle(document.body).backgroundColor) || [0, 0, 0, 1];
  // the nav's words float with no bar: when navTone has turned them light, they are over a dark zone, not the page
  const toned = el.closest('.nav[data-tone="dark"], .tabbar[data-tone="dark"]');
  if (toned) base = parse(getComputedStyle(toned).getPropertyValue('--bg').trim()) || base;
  for (let i = layers.length - 1; i >= 0; i--) base = layers[i][3] >= 1 ? layers[i] : over(layers[i], base);
  return base;
}

export function audit({ reveal = true } = {}) {
  if (reveal) document.querySelectorAll('[data-reveal], [data-split], [data-split] *').forEach(e => { e.style.opacity = 1; e.style.transform = 'none'; e.style.visibility = 'visible'; });
  const fails = new Set(); let checked = 0;
  for (const el of document.querySelectorAll('body *')) {
    if (el.closest('svg, canvas, .world, .globe, .s-hero__art, [aria-hidden="true"], .sr-only, .loader, .skip')) continue;
    if (![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || cs.webkitTextFillColor === 'rgba(0, 0, 0, 0)') continue;
    const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
    let op = 1; for (let e = el; e; e = e.parentElement) op *= +getComputedStyle(e).opacity;
    if (op < 0.95) continue;
    const bg = behind(el); if (!bg) continue;
    checked++;
    const fg = over(parse(cs.color), bg), a = lum(fg), b = lum(bg);
    const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    const size = parseFloat(cs.fontSize), need = size >= 24 || (size >= 18.66 && +cs.fontWeight >= 600) ? 3 : 4.5;
    if (ratio < need) fails.add(`${ratio.toFixed(2)} < ${need} · ${size}px · ${el.tagName.toLowerCase()}${[...el.classList].map(c => '.' + c).join('')} · "${el.textContent.trim().slice(0, 40)}"`);
  }
  return { page: location.pathname, theme: document.documentElement.dataset.theme, checked, fails: fails.size, list: [...fails] };
}

// Opens what is folded away (topic lists, answer plans, level details, practice parts, one quiz answer), so its text
// is checked too. It changes the page; reload afterwards.
export function unfold() {
  const st = document.createElement('style');
  st.textContent = '.topic__body, .plan-q__body, .pr__body { height: auto !important; overflow: visible !important; } .level small, .sc__check .a { display: block !important; }';
  document.head.append(st);
  document.querySelectorAll('.pr__open, .p2-drawer, .sc__facts, details').forEach(e => (e.tagName === 'DETAILS' ? (e.open = true) : e.click()));
  document.querySelector('.quiz .opt')?.click();
}
