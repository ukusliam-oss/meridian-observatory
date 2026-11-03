// Accessibility and usability audit (M-003C). Findings, not gates: every test records what it found to
// .cache/a11y/raw.jsonl and passes unless the page could not be audited at all. `npm run a11y` runs it and summarises.
import { test, expect } from '@playwright/test';
import { ROUTES, open, menuJump, toScene, activeScene, viewport } from '../lib/meridian.mjs';
import { axe, semantics, tabWalk, targets, reflow, TEXT_SPACING, motion, record } from '../lib/a11y.mjs';

const PAGES = [...ROUTES, { path: 'history/no-such-page.html', name: '404', kind: '404' }];
const go = async (page, r) => { if (r.kind === '404') { await page.goto(r.path); await page.waitForLoadState('load'); } else await open(page, r.path); await page.evaluate(() => document.fonts.ready); };

// 1. every page, its first state: axe, semantics, targets, reflow and text spacing; desktop and phone
for (const vpName of ['1440x900', '390x844']) test.describe(`pages at ${vpName}`, () => {
  const vp = viewport(vpName);
  test.use({ viewport: { width: vp.width, height: vp.height } });
  for (const r of PAGES) test(`${r.name}`, async ({ page }) => {
    await go(page, r);
    record({ check: 'axe', page: r.name, state: 'opened', vp: vpName, ...(await axe(page)) });
    if (vpName === '1440x900') record({ check: 'semantics', page: r.name, vp: vpName, ...(await semantics(page)) });
    record({ check: 'targets', page: r.name, state: 'opened', vp: vpName, ...(await targets(page)) });
    record({ check: 'reflow', page: r.name, vp: vpName, mode: 'plain', ...(await reflow(page)) });
    await page.addStyleTag({ content: TEXT_SPACING }); await page.waitForTimeout(300);
    record({ check: 'reflow', page: r.name, vp: vpName, mode: 'text-spacing', ...(await reflow(page)) });
  });
});

// 2. reflow at 320 (= 1280 px at 400% zoom), 360, 640 (= 1280 at 200%) and 768
for (const [w, h] of [[320, 640], [360, 780], [640, 800], [768, 1024]]) test.describe(`reflow at ${w}`, () => {
  test.use({ viewport: { width: w, height: h } });
  for (const r of PAGES) test(`${r.name}`, async ({ page }) => {
    await go(page, r);
    if (r.kind === 'chapter') { await menuJump(page, 12).catch(() => {}); await page.waitForTimeout(2500); }
    record({ check: 'reflow', page: r.name, vp: `${w}x${h}`, mode: r.kind === 'chapter' ? 'scene 13' : 'plain', ...(await reflow(page)) });
    if (w === 320) record({ check: 'targets', page: r.name, state: 'opened', vp: `${w}x${h}`, ...(await targets(page)) });
  });
});

// 3. interactive states: the chapter gate, the scene menu open, a scene held, Paper 2 unfolded, a hub with its practice open
test.describe('interactive states', () => {
  test.use({ viewport: { width: 1440, height: 900 } });
  for (const [path, k] of [['history/kq6.html', 13], ['economics/macro-policy.html', 14], ['geography/tectonics.html', 14]]) test(`${path}: gate, menu, scene`, async ({ page }) => {
    await page.goto(path); await page.getByRole('button', { name: 'Enter quietly' }).waitFor({ timeout: 90_000 });
    record({ check: 'axe', page: path, state: 'gate', vp: '1440x900', ...(await axe(page)) });
    await page.getByRole('button', { name: 'Enter quietly' }).click(); await expect(page.locator('html')).toHaveClass(/is-ready/);
    await page.locator('[data-menu-btn]').hover({ force: true }); await expect(page.locator('.chmenu__item').first()).toBeVisible();
    record({ check: 'axe', page: path, state: 'menu open', vp: '1440x900', ...(await axe(page)) });
    await page.mouse.move(5, 450); await page.keyboard.press('Escape');
    await toScene(page, k);
    record({ check: 'axe', page: path, state: `scene ${k + 1}`, vp: '1440x900', ...(await axe(page)) });
    record({ check: 'targets', page: path, state: `scene ${k + 1}`, vp: '1440x900', ...(await targets(page)) });
    // what the panel says about the map: the text a non-visual reader gets for this scene
    record({ check: 'scene-text', page: path, scene: k + 1, ...(await page.evaluate(k => { const s = document.querySelectorAll('.sc')[k]; const world = document.querySelector('[data-world]'); return { panelWords: (s.querySelector('.sc__panel')?.innerText || '').split(/\s+/).length, figures: [...s.querySelectorAll('figure, svg, table, [role="img"]')].map(f => `${f.tagName.toLowerCase()}${f.getAttribute('role') ? '[' + f.getAttribute('role') + ']' : ''}${f.getAttribute('aria-label') ? ' "' + f.getAttribute('aria-label').slice(0, 50) + '"' : ''}${f.querySelector('figcaption') ? ' caption' : ''}`).slice(0, 6), worldHidden: world?.getAttribute('aria-hidden') ?? world?.closest('[aria-hidden]')?.getAttribute('aria-hidden') ?? null, worldRole: world?.getAttribute('role') ?? null, legend: document.querySelector('.legend, [data-legend]')?.innerText?.slice(0, 120) ?? null, hud: document.querySelector('.hud')?.getAttribute('aria-hidden') ?? 'not hidden' }; }, k)) });
  });

  test('Paper 2 unfolded', async ({ page }) => {
    await open(page, 'history/kq6-paper2.html');
    const before = await page.evaluate(() => document.querySelectorAll('[aria-expanded]').length);
    await page.evaluate(async () => { const { unfold } = await import('/tools/contrast.js'); unfold(); });
    await page.waitForTimeout(800);
    record({ check: 'axe', page: 'history-paper2', state: 'unfolded', vp: '1440x900', expandable: before, ...(await axe(page)) });
  });

  for (const hub of ['history.html', 'economics.html', 'geography.html']) test(`${hub} with practice and quiz open`, async ({ page }) => {
    await open(page, hub);
    await page.evaluate(async () => { const { unfold } = await import('/tools/contrast.js'); unfold(); });
    await page.waitForTimeout(800);
    record({ check: 'axe', page: hub, state: 'unfolded', vp: '1440x900', ...(await axe(page)) });
    // the labs and other controls: what a keyboard can reach
    record({ check: 'controls', page: hub, ...(await page.evaluate(() => {
      const lab = [...document.querySelectorAll('.lab, [data-lab], .labs')].map(l => ({ cls: String(l.className).slice(0, 40), inputs: l.querySelectorAll('input, select, button, [tabindex="0"], [role="slider"]').length, ranges: l.querySelectorAll('input[type="range"], [role="slider"]').length, svgPointer: l.querySelectorAll('svg [style*="cursor"], .handle, [data-drag]').length }));
      const flash = document.querySelectorAll('.flash, .flashcard, [data-flash]').length, quiz = document.querySelectorAll('.quiz .opt, .quiz button').length;
      return { lab, flashcards: flash, quizButtons: quiz, quizOptsAreButtons: [...document.querySelectorAll('.quiz .opt')].every(o => o.tagName === 'BUTTON' || o.getAttribute('role') === 'button' || o.getAttribute('role') === 'radio') };
    })) });
  });
});

// 4. the keyboard: Tab forward and back on every page, and the chapter tasks without a mouse
for (const vpName of ['1440x900', '390x844']) test.describe(`keyboard at ${vpName}`, () => {
  const vp = viewport(vpName);
  test.use({ viewport: { width: vp.width, height: vp.height } });
  for (const r of PAGES) test(`${r.name}: Tab and Shift+Tab`, async ({ page }) => {
    await go(page, r);
    if (r.kind === 'chapter') { await page.waitForTimeout(2000); await page.keyboard.press('Home').catch(() => {}); } // the loader has faded
    const fwd = await tabWalk(page, { max: vpName === '1440x900' ? 80 : 40 });
    const back = await tabWalk(page, { max: 20, reverse: true });
    record({ check: 'tab', page: r.name, vp: vpName, forward: fwd, backward: back });
  });

  for (const path of ['history/kq6.html', 'geography/tectonics.html']) test(`${path}: enter, open the scene menu, choose a scene, close, move on, all by keyboard`, async ({ page }) => {
    const log = {};
    await page.goto(path); await page.getByRole('button', { name: 'Enter quietly' }).waitFor({ timeout: 90_000 });
    // the gate: how many Tabs to reach "Enter quietly", and does Enter work
    let n = 0; for (; n < 15; n++) { await page.keyboard.press('Tab'); if (await page.evaluate(() => document.activeElement?.matches('[data-sound]'))) break; }
    log.gateTabs = n + 1; log.gateFocused = await page.evaluate(() => document.activeElement?.textContent?.trim());
    await page.keyboard.press('Enter'); await page.waitForTimeout(2000); log.entered = (await page.locator('html.is-ready').count()) > 0;
    log.focusAfterEnter = await page.evaluate(() => { const e = document.activeElement; return e === document.body ? 'body' : `${e.tagName.toLowerCase()}.${String(e.className).split(' ')[0]} visible=${!!e.offsetParent}`; });
    log.menuInDomOrder = await page.evaluate(() => { const all = [...document.querySelectorAll('a[href], button, summary, [tabindex]:not([tabindex="-1"]), input, select')].filter(e => !e.disabled && e.offsetParent !== null); return { index: all.findIndex(e => e.matches('[data-menu-btn]')) + 1, of: all.length }; });
    // reach the scene menu button: forward from the start of the page, then backward from the start
    await page.evaluate(() => document.activeElement?.blur());
    let m = 0; for (; m < 700; m++) { await page.keyboard.press('Tab'); if (await page.evaluate(() => document.activeElement?.matches('[data-menu-btn]'))) break; }
    log.menuTabs = m < 700 ? m + 1 : null;
    await page.evaluate(() => { document.activeElement?.blur(); scrollTo(0, 0); });
    let rb = 0; for (; rb < 60; rb++) { await page.keyboard.press('Shift+Tab'); if (await page.evaluate(() => document.activeElement?.matches('[data-menu-btn]'))) break; }
    log.menuShiftTabs = rb < 60 ? rb + 1 : null;
    await page.locator('[data-menu-btn]').focus();
    if (log.menuTabs) {
      await page.keyboard.press('Enter');
      log.menuOpen = await page.locator('[data-menu-btn]').getAttribute('aria-expanded');
      log.focusInMenu = await page.evaluate(() => !!document.activeElement?.closest('.chmenu'));
      for (let a = 0; a < 3; a++) await page.keyboard.press('ArrowDown');
      log.focusedItem = await page.evaluate(() => document.activeElement?.dataset?.go ?? null);
      const want = log.focusedItem != null ? +log.focusedItem : null;
      await page.keyboard.press('Enter'); await page.waitForTimeout(2500);
      log.chosen = want; log.active = await activeScene(page);
      log.focusAfterChoice = await page.evaluate(() => `${document.activeElement?.tagName.toLowerCase()}.${String(document.activeElement?.className).split(' ')[0]}`);
      // Escape closes and returns focus to the button
      await page.locator('[data-menu-btn]').focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(400);
      await page.keyboard.press('Escape'); await page.waitForTimeout(400);
      log.escClosed = await page.locator('[data-menu-btn]').getAttribute('aria-expanded'); log.escFocus = await page.evaluate(() => document.activeElement?.matches('[data-menu-btn]'));
    }
    // moving on by keyboard alone: PageDown and ArrowDown on the page
    await page.evaluate(() => document.activeElement?.blur()); const a0 = await activeScene(page);
    for (let i = 0; i < 4; i++) await page.keyboard.press('PageDown'); await page.waitForTimeout(2500);
    log.pageDownFrom = a0; log.pageDownTo = await activeScene(page);
    record({ check: 'keyboard-chapter', page: path, vp: vpName, ...log });
  });

  test('Paper 2: reveal a mark scheme by keyboard', async ({ page }) => {
    await open(page, 'history/kq6-paper2.html');
    const log = {};
    let n = 0; for (; n < 80; n++) { await page.keyboard.press('Tab'); if (await page.evaluate(() => { const e = document.activeElement; return !!e && (e.hasAttribute('aria-expanded') || /show|reveal|mark|answer/i.test(e.textContent || '')); })) break; }
    log.tabs = n < 80 ? n + 1 : null;
    if (log.tabs) {
      log.control = await page.evaluate(() => { const e = document.activeElement; window.__ctl = e; const lb = e.getAttribute('aria-labelledby'); return { tag: e.tagName.toLowerCase(), cls: String(e.className).split(' ')[0], text: e.textContent.trim().slice(0, 40), ariaLabel: e.getAttribute('aria-label'), labelledby: lb && document.getElementById(lb)?.textContent?.trim().slice(0, 40), title: e.getAttribute('title'), expanded: e.getAttribute('aria-expanded'), controls: e.getAttribute('aria-controls') }; });
      await page.keyboard.press('Enter'); await page.waitForTimeout(800);
      log.after = await page.evaluate(() => { const e = window.__ctl, c = e.getAttribute('aria-controls') && document.getElementById(e.getAttribute('aria-controls')); return { expanded: e.getAttribute('aria-expanded'), controlledVisible: c ? !!c.offsetParent && c.getBoundingClientRect().height > 0 : null, focusStayed: document.activeElement === e, focusNow: `${document.activeElement.tagName.toLowerCase()}.${String(document.activeElement.className).split(' ')[0]}` }; });
    }
    record({ check: 'keyboard-paper2', vp: vpName, ...log });
  });

  // WP-01 (A11Y-01): Sources A–F read and followed without a mouse. Unlike the rows above, this one asserts: it is the
  // package's acceptance test. Wide screens: the source column scrolls on its own, so Tab must reach it and the keys must
  // scroll it. Phones: the column is in the page's flow and takes no focus of its own. Both: a chip followed by Enter
  // brings its source into view and puts focus on it; a chip followed by a click leaves focus where it was.
  test('Paper 2: Sources A–F and every source chip by keyboard', async ({ page }) => {
    const wide = vp.width > 900, log = { vp: vpName };
    await open(page, 'history/kq6-paper2.html'); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(600);
    const col = page.locator('[data-p2-sources]');
    log.column = await col.evaluate(c => ({ position: getComputedStyle(c).position, scrollHeight: c.scrollHeight, clientHeight: c.clientHeight, tabindex: c.getAttribute('tabindex'), name: c.getAttribute('aria-label') }));
    log.axe = (await axe(page)).violations.map(v => `${v.id}:${v.nodes}`);
    expect(log.axe.filter(v => v.startsWith('scrollable-region-focusable')), 'axe scrollable-region-focusable').toEqual([]);
    // Tab from the top of the page to the column
    await page.evaluate(() => { document.activeElement?.blur(); scrollTo(0, 0); });
    let n = 0; for (; n < 60; n++) { await page.keyboard.press('Tab'); if (await page.evaluate(() => document.activeElement?.matches('[data-p2-sources]'))) break; }
    log.regionTabs = n < 60 ? n + 1 : null;
    if (wide) {
      expect(log.regionTabs, 'Tab reaches the source column').not.toBeNull();
      // its focus ring: drawn, and at least 3:1 against the page ground beside it (the ink and its violet-tinted top)
      log.ring = await page.evaluate(() => {
        const c = document.querySelector('[data-p2-sources]'), s = getComputedStyle(c);
        const rgb = v => { const p = document.createElement('i'); p.style.color = v; document.body.append(p); const m = getComputedStyle(p).color.match(/[\d.]+/g).map(Number); p.remove(); return m; };
        const lum = ([r, g, b]) => [r, g, b].map(x => { x /= 255; return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; }).reduce((a, x, i) => a + x * [0.2126, 0.7152, 0.0722][i], 0);
        const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return +((x + 0.05) / (y + 0.05)).toFixed(2); };
        const ring = rgb(s.outlineColor), cs = getComputedStyle(document.body);
        const grounds = { ink: rgb(cs.getPropertyValue('--ink')), tinted: rgb('color-mix(in oklab, ' + cs.getPropertyValue('--accent-deep') + ' 30%, ' + cs.getPropertyValue('--ink') + ')') };
        const r = c.getBoundingClientRect();
        return { focusVisible: c.matches(':focus-visible'), style: `${s.outlineStyle} ${s.outlineWidth} offset ${s.outlineOffset}`, color: s.outlineColor, contrast: Object.fromEntries(Object.entries(grounds).map(([k, g]) => [k, ratio(ring, g)])), inViewport: r.left - parseFloat(s.outlineOffset) - parseFloat(s.outlineWidth) >= 0 && r.right + parseFloat(s.outlineOffset) + parseFloat(s.outlineWidth) <= innerWidth };
      });
      expect(log.ring.focusVisible && log.ring.style.startsWith('solid'), 'focus ring shown').toBe(true);
      expect(Math.min(...Object.values(log.ring.contrast)), 'ring contrast').toBeGreaterThanOrEqual(3);
      // Page Down scrolls the column until every source has been on screen
      const seen = new Set(), tops = [];
      for (let k = 0; k < 20; k++) {
        const s = await col.evaluate(c => { const r = c.getBoundingClientRect(); return { top: c.scrollTop, end: c.scrollTop + c.clientHeight >= c.scrollHeight - 2, seen: [...c.querySelectorAll('.paper')].filter(p => { const q = p.querySelector('header').getBoundingClientRect(); return q.top >= r.top - 1 && q.bottom <= r.bottom + 1; }).map(p => p.id.slice(-1)) }; });
        tops.push(s.top); s.seen.forEach(x => seen.add(x)); if (s.end && seen.size === 6) break;
        await page.keyboard.press('PageDown'); await page.waitForTimeout(350);
      }
      log.pageDown = { scrollTops: tops, sourcesSeen: [...seen].sort().join('') };
      expect(log.pageDown.sourcesSeen, 'Sources A–F each come into view').toBe('ABCDEF');
      expect(await page.evaluate(() => document.activeElement?.matches('[data-p2-sources]')), 'focus stays on the column while it scrolls').toBe(true);
      // no trap: Tab moves on to the questions, Shift+Tab comes back
      await page.keyboard.press('Tab'); log.tabOut = await page.evaluate(() => `${document.activeElement?.tagName.toLowerCase()}.${String(document.activeElement?.className).split(' ')[0]} in questions=${!!document.activeElement?.closest('#questions')}`);
      expect(log.tabOut, 'Tab leaves the column').toMatch(/in questions=true/);
      await page.keyboard.press('Shift+Tab'); expect(await page.evaluate(() => document.activeElement?.matches('[data-p2-sources]')), 'Shift+Tab returns').toBe(true);
    } else {
      expect(log.column.position, 'the column is in the page flow on phones').toBe('static');
      expect(log.regionTabs, 'no extra Tab stop on phones').toBeNull();
    }
    // every source's chip, reached with Tab and followed with Enter
    log.chips = {};
    for (const id of 'ABCDEF') {
      await page.locator('a.skip').focus(); // start each walk from the top of the page
      let t = 0; for (; t < 120; t++) { await page.keyboard.press('Tab'); if (await page.evaluate(id => document.activeElement?.matches(`[data-src="${id}"]`), id)) break; }
      const r = { tabs: t < 120 ? t + 1 : null };
      if (r.tabs) {
        await page.keyboard.press('Enter'); // at once, with no pause after Tab (Lenis had not yet taken up the focus scroll)
        // the page and the column scroll smoothly (Lenis, about 1.4 s): wait for the card to arrive, at most 6 s
        const t0 = Date.now();
        const at = () => page.evaluate(id => { const c = document.getElementById('source-' + id).getBoundingClientRect(), col = document.querySelector('[data-p2-sources]'); return { top: c.top, from: getComputedStyle(col).position === 'sticky' ? col.getBoundingClientRect().top : 0 }; }, id);
        for (let prev = null; Date.now() - t0 < 6000; await page.waitForTimeout(150)) { const p = await at(); if (prev && Math.abs(p.top - prev.top) < 0.5 && p.top >= p.from - 2 && p.top < vp.height - 40) break; prev = p; }
        r.ms = Date.now() - t0;
        Object.assign(r, await page.evaluate(id => {
          const card = document.getElementById('source-' + id), a = document.activeElement, cr = card.getBoundingClientRect();
          const col = document.querySelector('[data-p2-sources]'), box = getComputedStyle(col).position === 'sticky' ? col.getBoundingClientRect() : { top: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 0, bottom: innerHeight };
          const x = cr.left + 24, y = Math.max(cr.top, box.top) + 24, hit = document.elementFromPoint(x, y);
          return { focus: a === card ? `#${card.id}` : `${a?.tagName.toLowerCase()}.${String(a?.className).split(' ')[0]}`, focusVisible: a === card && card.matches(':focus-visible'), ring: (s => `${s.outlineStyle} ${s.outlineWidth} ${s.outlineColor} offset ${s.outlineOffset}`)(getComputedStyle(card)), topInView: cr.top >= box.top - 2 && cr.top < box.bottom - 40, unobscured: !!hit && card.contains(hit), name: card.getAttribute('aria-label') };
        }, id));
      }
      log.chips[id] = r;
      expect(r.tabs, `Tab reaches a chip for Source ${id}`).not.toBeNull();
      expect(r.focus, `Enter on the chip puts focus on Source ${id}`).toBe(`#source-${id}`);
      expect(r.topInView && r.unobscured, `Source ${id} is in view and not covered`).toBe(true);
      expect(r.focusVisible && r.ring.startsWith('solid'), `Source ${id} shows its focus ring`).toBe(true);
    }
    // the pointer keeps today's behaviour: a click scrolls to the source and leaves focus on the chip
    const chip = page.locator('[data-src="D"]').first();
    await chip.scrollIntoViewIfNeeded(); await chip.click(); await page.waitForTimeout(wide ? 900 : 1900);
    log.click = await page.evaluate(() => ({ focusOnChip: document.activeElement?.matches('[data-src]') ?? false, sourceInView: (() => { const c = document.getElementById('source-D').getBoundingClientRect(); return c.top < innerHeight && c.bottom > 0; })() }));
    expect(log.click.sourceInView, 'a click still brings the source into view').toBe(true);
    log.overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    expect(log.overflow, 'no sideways scroll').toBeLessThanOrEqual(0);
    record({ check: 'keyboard-sources', ...log });
  });
});

// 5. contrast with the site's own tool, dark and light, content unfolded (reduced motion: no colour transitions)
for (const theme of ['dark', 'light']) test.describe(`contrast ${theme}`, () => {
  test.use({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce', colorScheme: theme });
  for (const r of PAGES) test(`${r.name}`, async ({ page }) => {
    await page.addInitScript(t => { try { localStorage.setItem('meridian:theme', t); } catch {} }, theme);
    await go(page, r);
    const res = await page.evaluate(async () => { const T = await import('/tools/contrast.js'); T.unfold(); await new Promise(r => setTimeout(r, 600)); return T.audit(); });
    record({ check: 'contrast', page: r.name, theme, ...res, appliedTheme: await page.evaluate(() => document.documentElement.dataset.theme || 'dark') });
  });
});

// 6. motion: what still moves 4 s after load, with and without reduced motion
for (const rm of ['no-preference', 'reduce']) test.describe(`motion ${rm}`, () => {
  test.use({ viewport: { width: 1440, height: 900 }, reducedMotion: rm });
  for (const r of PAGES.filter(p => p.kind !== '404')) test(`${r.name}`, async ({ page }) => {
    const t0 = Date.now();
    if (r.kind === 'home') { await page.goto(r.path); } else await go(page, r);
    const homeLoader = r.kind === 'home' ? await page.locator('[data-boot]').isVisible() : null;
    await page.waitForTimeout(4000);
    record({ check: 'motion', page: r.name, reducedMotion: rm, homeLoaderVisibleAtStart: homeLoader, msToOpen: Date.now() - t0, ...(await motion(page)) });
  });
});

// 7. known issues: what makes KQ6 wider than 360 px, and where a reload on a deep scene lands
test.describe('known issues', () => {
  test.use({ viewport: { width: 360, height: 780 } });
  test('KQ6 at 360: the element that overflows', async ({ page }) => {
    await open(page, 'history/kq6.html');
    const found = await page.evaluate(() => {
      const W = innerWidth, over = () => document.documentElement.scrollWidth > W;
      if (!over()) return { overflow: false };
      // hide candidates one by one, deepest first, until the overflow goes
      let node = document.body, path = [];
      for (let depth = 0; depth < 25; depth++) {
        const kids = [...node.children]; let culprit = null;
        for (const k of kids) { const d = k.style.display; k.style.display = 'none'; const ok = !over(); k.style.display = d; if (ok) { culprit = k; break; } }
        if (!culprit) break; path.push(`${culprit.tagName.toLowerCase()}.${String(culprit.className).split(' ').slice(0, 2).join('.')}`); node = culprit;
      }
      const r = node.getBoundingClientRect(), cs = getComputedStyle(node);
      return { overflow: document.documentElement.scrollWidth - W, path, rect: [Math.round(r.left), Math.round(r.right), Math.round(r.width)], position: cs.position, transform: cs.transform, visibility: cs.visibility, opacity: cs.opacity, text: (node.textContent || '').trim().slice(0, 60) };
    });
    record({ check: 'kq6-360', ...found });
  });
  test('reload on a deep scene', async ({ page }) => {
    await open(page, 'geography/tectonics.html'); await menuJump(page, 14); await expect.poll(() => activeScene(page)).toBe(14); await page.waitForTimeout(2500);
    const y0 = await page.evaluate(() => scrollY);
    await page.reload(); const q = page.getByRole('button', { name: 'Enter quietly' }); await q.waitFor({ timeout: 90_000 }); await q.click(); await page.waitForTimeout(4000);
    record({ check: 'reload-deep', before: { scene: 15, y: Math.round(y0) }, after: { scene: (await activeScene(page)) + 1, y: Math.round(await page.evaluate(() => scrollY)), restoration: await page.evaluate(() => history.scrollRestoration) } });
  });
});
