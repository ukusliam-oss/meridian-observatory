// Accessibility audit helpers (M-003C). Each returns plain data; specs/a11y.spec.mjs records it to .cache/a11y/raw.jsonl
// and a11y/summarise.mjs builds the committed results. Nothing here changes the page except where it says so.
import AxeBuilder from '@axe-core/playwright';
import { appendFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const RAW = join(HERE, '../.cache/a11y/raw.jsonl');
export function record(row) { mkdirSync(dirname(RAW), { recursive: true }); appendFileSync(RAW, JSON.stringify({ at: new Date().toISOString(), ...row }) + '\n'); }

// axe-core with the WCAG 2.0/2.1/2.2 A and AA rule sets, and best practice reported apart
export async function axe(page) {
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze();
  const sc = tags => tags.filter(t => /^wcag\d{3,4}$/.test(t)).map(t => t.replace(/^wcag(\d)(\d)(\d+)$/, '$1.$2.$3'));
  const slim = v => ({ id: v.id, impact: v.impact, sc: sc(v.tags), bestPractice: v.tags.includes('best-practice') && !sc(v.tags).length, help: v.help, nodes: v.nodes.length, examples: v.nodes.slice(0, 3).map(n => ({ target: n.target.join(' ').slice(0, 120), html: n.html.slice(0, 160), summary: (n.failureSummary || '').split('\n').slice(0, 3).join(' ').slice(0, 200) })) });
  return { violations: r.violations.map(slim), incomplete: r.incomplete.map(slim), passes: r.passes.map(p => p.id), inapplicable: r.inapplicable.map(p => p.id), axe: r.testEngine.version };
}

// what the page is made of: language, title, headings, landmarks, skip link, images, canvases, svgs, live regions, tables
export const semantics = page => page.evaluate(() => {
  const vis = e => { const r = e.getBoundingClientRect(), s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const name = e => (e.getAttribute('aria-label') || (e.getAttribute('aria-labelledby') && document.getElementById(e.getAttribute('aria-labelledby'))?.textContent) || e.getAttribute('alt') || e.getAttribute('title') || e.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);
  const first = [...document.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"]), input, select, textarea')].find(e => !e.disabled);
  return {
    lang: document.documentElement.lang || null, title: document.title,
    headings: [...document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]')].filter(vis).map(h => [h.tagName === 'DIV' ? +h.getAttribute('aria-level') : +h.tagName[1], name(h)]).slice(0, 80),
    landmarks: Object.fromEntries(['main', 'nav', 'header', 'footer', 'aside', '[role="main"]', '[role="navigation"]', '[role="banner"]', '[role="contentinfo"]', '[role="region"][aria-label], section[aria-label]'].map(s => [s, document.querySelectorAll(s).length])),
    skipLink: first && first.tagName === 'A' && /^#/.test(first.getAttribute('href')) ? { text: name(first), href: first.getAttribute('href'), target: !!document.querySelector(first.getAttribute('href')) } : null,
    imagesNoAlt: [...document.querySelectorAll('img')].filter(i => !i.hasAttribute('alt')).length,
    canvases: [...document.querySelectorAll('canvas')].map(c => ({ cls: (c.parentElement?.className || '').toString().slice(0, 40), hidden: !!c.closest('[aria-hidden="true"]'), role: c.getAttribute('role'), name: name(c) || null, w: c.width })),
    svgs: { total: document.querySelectorAll('svg').length, imgWithName: [...document.querySelectorAll('svg[role="img"]')].filter(s => name(s) || s.querySelector('title')).length, imgNoName: [...document.querySelectorAll('svg[role="img"]')].filter(s => !name(s) && !s.querySelector('title')).length, hidden: document.querySelectorAll('svg[aria-hidden="true"]').length },
    live: [...document.querySelectorAll('[aria-live], [role="status"], [role="alert"], [role="log"]')].map(e => `${e.tagName.toLowerCase()}${e.getAttribute('role') ? '[role=' + e.getAttribute('role') + ']' : ''}[aria-live=${e.getAttribute('aria-live')}] ${name(e).slice(0, 30)}`).slice(0, 12),
    tables: [...document.querySelectorAll('table')].map(t => ({ th: t.querySelectorAll('th').length, scope: t.querySelectorAll('th[scope]').length, caption: !!t.querySelector('caption') })),
    buttonsAsLinks: [...document.querySelectorAll('a:not([href])[onclick], div[onclick], span[onclick]')].length,
    clickableDivs: [...document.querySelectorAll('div[tabindex], span[tabindex]')].filter(e => !e.getAttribute('role')).length,
  };
});

// walk the focus with Tab (or Shift+Tab): what receives it, whether it shows a focus indicator, whether it is in view,
// and whether something fixed covers it. Stops after `max` steps or when it comes back to where it started.
export async function tabWalk(page, { max = 80, reverse = false } = {}) {
  await page.evaluate(() => { document.activeElement?.blur?.(); window.scrollTo?.(0, window.scrollY); });
  const steps = [];
  for (let i = 0; i < max; i++) {
    await page.keyboard.press(reverse ? 'Shift+Tab' : 'Tab');
    const s = await page.evaluate(() => {
      const e = document.activeElement; if (!e || e === document.body) return { body: true };
      const r = e.getBoundingClientRect(), cs = getComputedStyle(e);
      const look = el => { const c = getComputedStyle(el); return [c.outlineStyle, c.outlineWidth, c.outlineColor, c.boxShadow, c.borderColor, c.backgroundColor, c.color, c.textDecorationLine].join('|'); };
      const focused = look(e);
      // the indicator: compare with how the same element looks unfocused (a clone outside the focus, same classes)
      const clone = e.cloneNode(false); clone.removeAttribute('id'); clone.style.position = 'absolute'; clone.style.left = '-9999px'; e.parentElement.appendChild(clone); const plain = look(clone); clone.remove();
      const pts = [[r.left + r.width / 2, r.top + r.height / 2], [r.left + 2, r.top + 2], [r.right - 2, r.top + 2], [r.left + 2, r.bottom - 2], [r.right - 2, r.bottom - 2]];
      const covered = pts.filter(([x, y]) => { if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) return false; const t = document.elementFromPoint(x, y); return t && t !== e && !e.contains(t) && !t.contains(e); });
      const coverer = covered.length ? (() => { const [x, y] = pts[0]; const t = document.elementFromPoint(x, y); return t ? `${t.tagName.toLowerCase()}.${String(t.className).split(' ')[0]}` : null; })() : null;
      const label = (e.getAttribute('aria-label') || e.textContent || e.getAttribute('title') || e.value || '').trim().replace(/\s+/g, ' ').slice(0, 50);
      return { tag: e.tagName.toLowerCase(), role: e.getAttribute('role'), cls: String(e.className).split(' ')[0].slice(0, 30), id: e.id || null, label, href: e.getAttribute('href'), indicator: focused !== plain || e.matches(':focus-visible') && (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0), outline: `${cs.outlineStyle} ${cs.outlineWidth}`, inView: r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth, size: [Math.round(r.width), Math.round(r.height)], coveredPoints: covered.length, coveredBy: coverer, fully: covered.length === pts.length, x: Math.round(r.left), y: Math.round(r.top) };
    });
    steps.push(s);
    if (s.body && i > 0) break;
    const key = x => `${x.tag}#${x.id}.${x.cls}:${x.label}:${x.x},${x.y}`;
    if (i > 2 && key(s) === key(steps[0])) break; // wrapped round
  }
  return steps;
}

// targets under 24 x 24 CSS px, and whether the 24 px circles around their centres keep clear of other targets (2.5.8)
export const targets = page => page.evaluate(() => {
  const els = [...document.querySelectorAll('a[href], button, [role="button"], [role="link"], [role="menuitem"], [role="tab"], [role="switch"], input, select, summary, [tabindex]:not([tabindex="-1"])')].filter(e => { const r = e.getBoundingClientRect(), s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && r.bottom > 0 && r.top < innerHeight && +s.opacity > 0.05; });
  const R = els.map(e => ({ e, r: e.getBoundingClientRect() }));
  const out = { total: R.length, small: 0, smallSpaced: 0, smallInline: 0, smallFailing: [], };
  for (const { e, r } of R) {
    if (r.width >= 24 && r.height >= 24) continue;
    out.small++;
    // inline links in a sentence are exempt (2.5.8 "inline")
    if (e.tagName === 'A' && e.closest('p, li') && [...(e.closest('p, li').childNodes)].some(n => n.nodeType === 3 && n.textContent.trim())) { out.smallInline++; continue; }
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const clash = R.some(o => o.e !== e && !o.e.contains(e) && !e.contains(o.e) && Math.hypot(Math.max(o.r.left - cx, 0, cx - o.r.right), Math.max(o.r.top - cy, 0, cy - o.r.bottom)) < 12);
    if (!clash) { out.smallSpaced++; continue; }
    out.smallFailing.push(`${e.tagName.toLowerCase()}.${String(e.className).split(' ')[0]} "${(e.getAttribute('aria-label') || e.textContent || '').trim().slice(0, 30)}" ${Math.round(r.width)}x${Math.round(r.height)}`);
  }
  out.smallFailing = out.smallFailing.slice(0, 15);
  return out;
});

// reflow: sideways scroll of the page, and text clipped inside its box
export const reflow = page => page.evaluate(() => {
  const over = document.documentElement.scrollWidth - innerWidth;
  const wide = [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.right > innerWidth + 1 && r.width > 0 && getComputedStyle(e).position !== 'fixed' && !e.closest('[aria-hidden="true"], canvas, .world, svg'); }).slice(0, 6).map(e => `${e.tagName.toLowerCase()}.${String(e.className).split(' ')[0]} right=${Math.round(e.getBoundingClientRect().right)}`);
  const clipped = [...document.querySelectorAll('body *')].filter(e => { if (![...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return false; const s = getComputedStyle(e); if (s.display === 'none' || s.visibility === 'hidden') return false; return /hidden|clip/.test(s.overflowX + s.overflow) && e.scrollWidth > e.clientWidth + 1 && s.textOverflow !== 'ellipsis' && !e.closest('[aria-hidden="true"], .sr-only, .visually-hidden'); }).slice(0, 8).map(e => `${e.tagName.toLowerCase()}.${String(e.className).split(' ')[0]} "${e.textContent.trim().slice(0, 30)}" ${e.scrollWidth}>${e.clientWidth}`);
  return { overflowPx: over, wide, clipped };
});

// WCAG 1.4.12 text spacing (applied as a style sheet; changes the page)
export const TEXT_SPACING = '*:not(svg *){line-height:1.5 !important;letter-spacing:0.12em !important;word-spacing:0.16em !important}p{margin-bottom:2em !important}';

// motion: what is animating some seconds after load (Web Animations, CSS animations) and whether smooth scrolling is on
export const motion = page => page.evaluate(() => ({ running: document.getAnimations().filter(a => a.playState === 'running').length, infinite: document.getAnimations().filter(a => a.playState === 'running' && a.effect?.getTiming?.().iterations === Infinity).length, lenis: !!window.__meridianLenis, reduced: matchMedia('(prefers-reduced-motion: reduce)').matches, gsapTweens: window.gsap ? window.gsap.globalTimeline.getChildren(true, true, false).filter(t => t.isActive()).length : null }));
