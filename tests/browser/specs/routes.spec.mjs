// Every page at every viewport: it answers 200, has its title, opens past its loader, raises no exception, and does
// not scroll sideways. A missing address answers 404 with the site's own 404 page.
import { test, expect } from '@playwright/test';
import { ROUTES, VIEWPORTS, open, watch, noHorizontalOverflow } from '../lib/meridian.mjs';

// known product defects, in production as well (README, Known issues): the test is expected to fail until they are fixed
const KNOWN_OVERFLOW = new Set([]); // none since WP-03 (KQ6 at 360 px was 365 px wide: its Part 4 title)

for (const vp of VIEWPORTS) test.describe(`routes at ${vp.name}`, () => {
  test.use({ viewport: { width: vp.width, height: vp.height } });

  for (const r of ROUTES) test(`${r.name} opens cleanly`, async ({ page }) => {
    test.fail(KNOWN_OVERFLOW.has(`${r.name}@${vp.name}`), 'known: horizontal overflow at this width');
    const w = watch(page);
    const res = await open(page, r.path);
    expect(res.status()).toBe(200);
    await expect(page).toHaveTitle(r.title);
    await expect(page.locator('main, #content, [data-scenes], .p2').first()).toBeAttached();
    expect(await noHorizontalOverflow(page), 'no horizontal scroll').toBe(true);
    if (r.kind === 'chapter') await expect.poll(() => page.evaluate(() => !!window.__meridianWorld || document.documentElement.classList.contains('no-webgl'))).toBe(true);
    expect(w.errors, 'page exceptions and console errors').toEqual([]);
    expect(w.failed, 'failed requests').toEqual([]);
  });

  test('a missing page answers 404 with the site\'s 404 page', async ({ page }) => {
    const w = watch(page);
    const res = await page.goto('history/no-such-page.html');
    expect(res.status()).toBe(404);
    await expect(page.getByRole('link', { name: /home/i }).first()).toBeVisible();
    expect(await noHorizontalOverflow(page)).toBe(true);
    // its styles and script apply once its <base> is written
    await expect.poll(() => page.evaluate(() => getComputedStyle(document.body).backgroundColor)).not.toBe('rgba(0, 0, 0, 0)');
    // known: the preload scanner asks for the stylesheets and scripts relative to the missing address before the inline
    // script writes <base>, so a page one folder deep logs 404s for /history/assets/...; the same in production
    const early = new RegExp(`@ ${res.url().replace(/[^/]*$/, '')}assets/`);
    expect(w.errors.filter(e => !e.endsWith(`@ ${res.url()}`) && !early.test(e))).toEqual([]);
  });
});
