// Meridian browser tests (M-003A). Two projects:
//   functional: routes, journeys and states, every route at the seven viewports
//   visual:     screenshot baselines, reduced motion
// The browser is Playwright's pinned Chromium (headless shell, revision 1248, Chrome 156). WebGL runs on the machine's
// GPU (ANGLE Metal on macOS): software WebGL (SwiftShader) took 313 ms a frame for a chapter at 1440 × 900, too slow
// for the chapters. GPU=0 forces SwiftShader (for a machine without a usable GPU; expect slow chapters and different
// pictures). Screenshots are kept per platform (the -darwin suffix): the approved baselines are macOS ones.
import { defineConfig } from '@playwright/test';

const PORT = 5199;
const gpu = process.env.GPU === '0' ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : process.platform === 'darwin' ? ['--use-angle=metal', '--ignore-gpu-blocklist'] : ['--ignore-gpu-blocklist'];

export default defineConfig({
  testDir: './specs',
  // outputs live under .cache, which tools/verify-build.mjs skips (an HTML report there broke its page rebuild)
  outputDir: './.cache/test-results',
  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}-{platform}{ext}',
  fullyParallel: true,
  workers: process.env.WORKERS ? +process.env.WORKERS : 4,
  retries: process.env.CI ? 1 : 0,
  timeout: 90_000,
  expect: { timeout: 20_000, toHaveScreenshot: { animations: 'disabled', caret: 'hide', scale: 'css' } },
  reporter: [['list'], ['html', { open: 'never', outputFolder: './.cache/playwright-report' }]],
  use: {
    baseURL: `http://127.0.0.1:${PORT}/`,
    browserName: 'chromium',
    deviceScaleFactor: 1,
    locale: 'en-GB',
    timezoneId: 'Europe/London',
    colorScheme: 'dark',
    launchOptions: { args: gpu },
    trace: 'retain-on-failure',
  },
  webServer: { command: `node server.mjs ${PORT}`, url: `http://127.0.0.1:${PORT}/index.html`, reuseExistingServer: !process.env.CI, stdout: 'ignore' },
  projects: [
    { name: 'functional', testMatch: /(routes|journeys|states)\.spec\.mjs/ },
    { name: 'visual', testMatch: /visual\.spec\.mjs/, use: { reducedMotion: 'reduce' } },
  ],
});
