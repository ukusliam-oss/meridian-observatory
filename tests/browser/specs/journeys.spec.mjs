// The core learning journeys, as a reader takes them: open a subject, enter a chapter, move to the next scene, jump
// with the scene menu or a link, come back, and leave for the Paper 2 room. Desktop and a phone.
import { test, expect } from '@playwright/test';
import { open, watch, countTerrain, networkTerrain, menuJump, activeScene, settle, noHorizontalOverflow, viewport } from '../lib/meridian.mjs';

for (const vpName of ['1440x900', '390x844']) test.describe(`journeys at ${vpName}`, () => {
  const vp = viewport(vpName);
  test.use({ viewport: { width: vp.width, height: vp.height } });

  test('home → History hub → KQ6 chapter → first scene', async ({ page }) => {
    const w = watch(page);
    await open(page, 'index.html');
    const hub = vp.width > 760 ? page.getByRole('navigation', { name: 'Subjects' }).getByRole('link', { name: 'History' }) : page.getByRole('navigation', { name: 'Pages' }).getByRole('link', { name: /History/ });
    await hub.click();
    await expect(page).toHaveURL(/history\.html$/);
    await page.locator('a[href="history/kq6.html"]').first().click();
    await expect(page).toHaveURL(/history\/kq6\.html$/);
    await page.getByRole('button', { name: 'Enter quietly' }).click();
    await expect(page.locator('html')).toHaveClass(/is-ready/);
    // reading on: the wheel brings the first scene's panel in
    for (let n = 0; n < 40 && (await activeScene(page)) < 0; n++) await page.mouse.wheel(0, 400);
    await expect.poll(() => activeScene(page)).toBe(0);
    await page.mouse.wheel(0, 600);
    for (let n = 0; n < 40 && (await activeScene(page)) < 1; n++) await page.mouse.wheel(0, 400);
    await expect.poll(() => activeScene(page)).toBe(1);
    expect(await noHorizontalOverflow(page)).toBe(true);
    expect(w.errors).toEqual([]);
  });

  test('Geography: menu jump, return, and the scene menu reflects it', async ({ page }) => {
    const w = watch(page);
    await open(page, 'geography/tectonics.html');
    await menuJump(page, 25);
    await expect.poll(() => activeScene(page)).toBe(25);
    await expect(page.locator('.chmenu__item[data-go="25"]')).toHaveAttribute('aria-current', 'true');
    expect(await settle(page)).toBe(true);
    await menuJump(page, 3);
    await expect.poll(() => activeScene(page)).toBe(3);
    // scene 4 has a cross-section: it is drawn once its heights are in, and its status line goes
    await expect(page.locator('#tq-3 [data-xs]')).toHaveClass(/is-drawn/, { timeout: 45_000 });
    await expect(page.locator('#tq-3 [data-dem]')).toHaveCount(0);
    expect(await noHorizontalOverflow(page)).toBe(true);
    expect(w.errors).toEqual([]);
  });

  test('Geography: a link to scene 15 lands there and draws its landscape', async ({ page }) => {
    const w = watch(page), t = countTerrain(page);
    await open(page, 'geography/tectonics.html#tq-14');
    await expect.poll(() => activeScene(page), { timeout: 30_000 }).toBe(14);
    await expect(page.locator('#tq-14 [data-xs]')).toHaveClass(/is-drawn/, { timeout: 45_000 });
    expect(await settle(page)).toBe(true);
    // Fix 2A: the scenes flown past start no tiles. The target and its neighbours need 12 at 1440 px and 24 at 390 px;
    // before Fix 2A this link made 172 and about 130
    const limit = vp.width > 760 ? 15 : 30;
    expect(t.tiles.length, `tile requests: ${t.tiles.length}`).toBeLessThanOrEqual(limit);
    expect(w.errors).toEqual([]);
  });

  test('returning to a visited scene takes nothing from the network again', async ({ page }) => {
    const net = await networkTerrain(page);
    await open(page, 'geography/tectonics.html');
    await menuJump(page, 14); await expect.poll(() => activeScene(page)).toBe(14); expect(await settle(page)).toBe(true);
    await menuJump(page, 13); await expect.poll(() => activeScene(page)).toBe(13); expect(await settle(page)).toBe(true);
    await menuJump(page, 14); await expect.poll(() => activeScene(page)).toBe(14); expect(await settle(page)).toBe(true);
    // a texture dropped or evicted is composed again from the HTTP cache; nothing should cross the network twice
    expect([...net].filter(([, n]) => n > 1), 'transferred more than once').toEqual([]);
    expect(net.size).toBeGreaterThan(0);
  });

  test('Geography → Paper 2 while the chapter is still loading: Paper 2 opens and works', async ({ page }) => {
    const w = watch(page);
    await open(page, 'geography/tectonics.html');
    await menuJump(page, 14);
    await expect.poll(() => activeScene(page)).toBe(14);
    await page.goto('history/kq6-paper2.html');
    await expect(page.locator('.paper')).toHaveCount(6);
    await expect(page.locator('.p2-part')).toHaveCount(5);
    await expect(page.locator('html')).toHaveClass(/is-ready/);
    expect(await noHorizontalOverflow(page)).toBe(true);
    expect(w.errors).toEqual([]);
  });

  test('KQ6 and Economics: menu jumps land, panels and charts render', async ({ page }) => {
    const w = watch(page);
    await open(page, 'history/kq6.html');
    await menuJump(page, 13); await expect.poll(() => activeScene(page)).toBe(13);
    await expect(page.locator('.sc.is-active .sc__panel')).toBeVisible();
    await open(page, 'economics/macro-policy.html');
    await menuJump(page, 14); await expect.poll(() => activeScene(page)).toBe(14);
    await expect(page.locator('.sc.is-active .sc__panel')).toBeVisible();
    await expect(page.locator('[data-world] canvas')).toBeVisible();
    expect(await noHorizontalOverflow(page)).toBe(true);
    expect(w.errors).toEqual([]);
  });

  // WP-02F: a scene chosen from the menu with the pointer is reached: it becomes the active scene with its title on
  // screen, and stays so once the scroll has settled. Scene 1 and the scenes that open a part used to stop short, on
  // the hero or the part's title screen (the site's anchor handler scrolled to the section's start after goTo).
  for (const [path, picks] of [['history/kq6.html', [0, 3, 15, 13, 32]], ['economics/macro-policy.html', [0, 1, 12, 14, 40]], ['geography/tectonics.html', [0, 2, 8, 14, 25]]])
    test(`${path}: the pointer reaches the scene chosen from the menu`, async ({ page }) => {
      const w = watch(page);
      await open(page, path);
      const at = k => page.evaluate(k => {
        const s = document.querySelectorAll('.sc')[k], t = s.querySelector('.sc__title').getBoundingClientRect();
        const start = s.getBoundingClientRect().top + scrollY - ((parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64) + 56);
        return { active: [...document.querySelectorAll('.sc')].findIndex(x => x.classList.contains('is-active')), titleInView: t.top >= 0 && t.bottom <= innerHeight, y: Math.round(scrollY), opensPart: !!s.querySelector('.part'), pastPartTitle: scrollY > start + 100, hash: location.hash === '#' + s.id };
      }, k);
      for (const k of picks) {
        await page.mouse.move(5, vp.height / 2);
        await menuJump(page, k);
        // the scroll has stopped: the same position over 600 ms (the globe of some scenes keeps drawing)
        await expect.poll(async () => { const y0 = await page.evaluate(() => scrollY); await page.waitForTimeout(600); return y0 === await page.evaluate(() => scrollY); }, { timeout: 15_000 }).toBe(true);
        const a = await at(k); await page.waitForTimeout(500); const b = await at(k);
        expect(a.active, `scene ${k + 1} is active`).toBe(k);
        expect(a.titleInView, `scene ${k + 1}'s title is on screen`).toBe(true);
        if (a.opensPart) expect(a.pastPartTitle, `scene ${k + 1} is not left on its part's title screen`).toBe(true);
        expect(a.hash, 'the address names the scene').toBe(true);
        expect(b, 'nothing moves once settled').toEqual(a);
        expect(await page.evaluate(() => document.activeElement === document.body || !document.activeElement?.matches('h1, h2')), 'a pointer choice moves no focus to a heading').toBe(true);
      }
      expect(await noHorizontalOverflow(page)).toBe(true);
      expect(w.errors).toEqual([]);
    });
});
