// Visual baselines (reduced motion: every page opens in its final state and the globe does not drift).
// Navigation, panels, type and controls stay in the picture; a page is captured once it is ready: fonts loaded, and for
// a chapter the globe settled (no new frame and no terrain or heights request for 1.5 s) at a scene's hold.
// toHaveScreenshot also waits until two captures in a row agree. Tolerances and masks: README, Visual baselines.
import { test, expect } from '@playwright/test';
import { open, toScene, settle, viewport } from '../lib/meridian.mjs';

const ALL = ['360x780', '375x667', '390x844', '768x1024', '1024x600', '1440x900', '1920x1080'];
const THREE = ['360x780', '768x1024', '1440x900'];
const TWO = ['390x844', '1440x900'];

// natural variation measured over repeated runs (README): a few antialiased pixels on the WebGL globe
// STRICT=1 compares with no tolerance at all, to measure that variation again
const SHOT = process.env.STRICT ? { maxDiffPixels: 0, threshold: 0, timeout: 30_000 } : { maxDiffPixelRatio: 0.002, timeout: 30_000 };

const ready = page => page.evaluate(() => document.fonts.ready.then(() => true));

const PAGES = [
  ...['index.html', 'history.html', 'economics.html', 'geography.html'].flatMap(path => ALL.map(vp => ({ path, vp }))),
  ...['history/kq6-paper2.html'].flatMap(path => THREE.map(vp => ({ path, vp }))),
];
for (const { path, vp } of PAGES) test.describe(() => {
  const v = viewport(vp);
  test.use({ viewport: { width: v.width, height: v.height } });
  test(`${path} at ${vp}`, async ({ page }) => {
    await open(page, path); await ready(page);
    await expect(page).toHaveScreenshot(`${path.replace(/[/.]/g, '-')}-${vp}.png`, SHOT);
  });
});

for (const vp of THREE) test.describe(() => {
  const v = viewport(vp);
  test.use({ viewport: { width: v.width, height: v.height } });
  test(`404 page at ${vp}`, async ({ page }) => {
    await page.goto('history/no-such-page.html'); await page.waitForLoadState('load'); await ready(page);
    await expect(page).toHaveScreenshot(`404-${vp}.png`, SHOT);
  });
});

const CHAPTERS = [['history/kq6.html', 13], ['economics/macro-policy.html', 14], ['geography/tectonics.html', 14]];
for (const [path, k] of CHAPTERS) for (const vp of TWO) test.describe(() => {
  const v = viewport(vp);
  test.use({ viewport: { width: v.width, height: v.height } });
  const name = path.split('/')[1].replace('.html', '');
  test(`${name} opening at ${vp}`, async ({ page }) => {
    await open(page, path); await ready(page);
    expect(await settle(page)).toBe(true);
    await expect(page).toHaveScreenshot(`${name}-opening-${vp}.png`, SHOT);
  });
  test(`${name} scene ${k + 1} settled at ${vp}`, async ({ page }) => {
    await open(page, path); await ready(page);
    expect(await toScene(page, k)).toBe(true);
    await expect(page).toHaveScreenshot(`${name}-scene${k + 1}-${vp}.png`, SHOT);
  });
});
