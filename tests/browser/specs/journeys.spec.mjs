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
});
