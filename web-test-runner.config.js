import { playwrightLauncher } from '@web/test-runner-playwright';
import { vitePlugin } from '@remcovaes/web-test-runner-vite-plugin';

/**
 * @type {import('@web/test-runner').TestRunnerConfig}
 *
 * @see https://modern-web.dev/docs/test-runner/cli-and-configuration/#configuration-file
 */
const config = {
  files: ['**/*.{test,spec}.ts', '!**/node_modules/**/*'],
  plugins: [vitePlugin()],
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: 'chromium' })]
};

export default config;
