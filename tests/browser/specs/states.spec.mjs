// The states Phase 0 fixed or depends on: heights (DEM) loading lazily, pending, drawn and failed; the chapter without
// WebGL; reduced motion; a rapid scroll; and the Economics scene that used to rebuild its textures while at rest.
// Requests are intercepted only to hold back or fail the heights, in fresh contexts where the cache does not matter.
import { test, expect } from '@playwright/test';
import { open, watch, countTerrain, menuJump, activeScene, settle, toScene, noHorizontalOverflow, viewport } from '../lib/meridian.mjs';

const GEO = 'geography/tectonics.html';

for (const vpName of ['1440x900', '390x844']) test.describe(`states at ${vpName}`, () => {
  const vp = viewport(vpName);
  test.use({ viewport: { width: vp.width, height: vp.height } });

  test('Fix 1: entering the chapter asks for no heights', async ({ page }) => {
    const t = countTerrain(page);
    await open(page, GEO);
    await expect.poll(() => page.evaluate(() => window.__meridianWorld?.stats.frames ?? 0)).toBeGreaterThan(0);
    // the opening globe drifts, so it never settles: the criterion is a time window, as in Fix 1's own check
    await page.waitForTimeout(4000);
    expect(t.dem, 'heights requested at entry and 4 s later').toEqual([]);
  });

  test('heights pending, then drawn: the line says so, then goes, and the cross-section draws', async ({ page }) => {
    let release; const held = new Promise(r => { release = r; });
    await page.route('**/assets/data/geo/dem/fuji.png*', async r => { await held; await r.continue(); });
    await open(page, GEO);
    await menuJump(page, 14); await expect.poll(() => activeScene(page)).toBe(14);
    const line = page.locator('#tq-14 [data-dem]');
    await expect(line).toHaveText('Loading heights. Flat relief for now.');
    await expect(page.locator('#tq-14 [data-xs]')).not.toHaveClass(/is-drawn/);
    release();
    await expect(line).toHaveCount(0, { timeout: 30_000 });
    await expect(page.locator('#tq-14 [data-xs]')).toHaveClass(/is-drawn/);
  });

  test('heights failed: the line says flat relief is shown, nothing throws', async ({ page }) => {
    const w = watch(page);
    await page.route('**/assets/data/geo/dem/**', r => r.abort());
    await open(page, GEO);
    await menuJump(page, 14); await expect.poll(() => activeScene(page)).toBe(14);
    await expect(page.locator('#tq-14 [data-dem]')).toHaveText('Heights unavailable. Flat relief shown.', { timeout: 30_000 });
    expect(w.errors.filter(e => !/Failed to load resource/.test(e))).toEqual([]);
  });

  test('terrain ready: scene 15 settles with its landscape drawn', async ({ page }) => {
    await open(page, GEO);
    expect(await toScene(page, 14)).toBe(true);
    await expect(page.locator('#tq-14 [data-xs]')).toHaveClass(/is-drawn/);
    await expect(page.locator('#tq-14 [data-dem]')).toHaveCount(0);
  });

  test('without WebGL: the chapter opens, says what is unavailable, asks for no heights', async ({ page }) => {
    const w = watch(page), t = countTerrain(page);
    await page.addInitScript(() => { const g = HTMLCanvasElement.prototype.getContext; HTMLCanvasElement.prototype.getContext = function (k, ...a) { return /webgl/i.test(k) ? null : g.call(this, k, ...a); }; });
    await open(page, GEO);
    await expect(page.locator('html')).toHaveClass(/no-webgl/);
    await expect(page.locator('#tq-14 [data-dem]')).toHaveText(/3D terrain .*unavailable in this mode\./);
    await menuJump(page, 14); await expect.poll(() => activeScene(page)).toBe(14);
    expect(t.dem).toEqual([]);
    expect(await noHorizontalOverflow(page)).toBe(true);
    expect(w.errors.filter(e => !/Globe unavailable|WebGL/i.test(e))).toEqual([]);
  });

  test('rapid scroll to the last scene: lands, and the scenes flown past fetch no heights', async ({ page }) => {
    const w = watch(page), t = countTerrain(page);
    await open(page, GEO);
    await page.evaluate(() => { const c = document.querySelectorAll('.sc'); window.__meridianLenis.scrollTo(c[25].querySelector('.sc__card').getBoundingClientRect().top + scrollY - innerHeight * 0.3, { duration: 3, force: true }); });
    await expect.poll(() => activeScene(page), { timeout: 20_000 }).toBe(25);
    expect(await settle(page)).toBe(true);
    // only the landing scene's neighbourhood: Eyjafjallajökull (scene 26) and, from the slow end of the scroll, Merapi (17) at most
    expect(t.dem.map(u => u.split('.')[0]).filter(s => !['eyjafjallajokull', 'merapi'].includes(s))).toEqual([]);
    expect(w.errors).toEqual([]);
  });
});

test.describe('reduced motion', () => {
  test.use({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } });
  test('a jump lands in its final state and its terrain and heights come', async ({ page }) => {
    const w = watch(page);
    await open(page, GEO);
    await menuJump(page, 14); await expect.poll(() => activeScene(page)).toBe(14);
    expect(await settle(page)).toBe(true);
    await expect(page.locator('#tq-14 [data-xs]')).toHaveClass(/is-drawn/);
    expect(w.errors).toEqual([]);
  });
});

// Economics scene 15 at phone widths rebuilt its textures in a loop while at rest (fixed in #12/#13):
// once settled, 10 s at rest must draw no frame and ask for no terrain
for (const vpName of ['360x780', '390x844']) test.describe(`Economics at rest at ${vpName}`, () => {
  const vp = viewport(vpName);
  test.use({ viewport: { width: vp.width, height: vp.height } });
  for (const k of [13, 14, 15]) test(`scene ${k + 1} stays still`, async ({ page }) => {
    await open(page, 'economics/macro-policy.html');
    await menuJump(page, k); await expect.poll(() => activeScene(page)).toBe(k);
    expect(await settle(page, { quiet: 2000 })).toBe(true);
    const t = countTerrain(page);
    const f0 = await page.evaluate(() => window.__meridianWorld.stats.frames);
    await page.waitForTimeout(10_000); // the observation window itself
    const f1 = await page.evaluate(() => window.__meridianWorld.stats.frames);
    expect({ frames: f1 - f0, tiles: t.tiles.length }).toEqual({ frames: 0, tiles: 0 });
  });
});
