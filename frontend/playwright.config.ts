import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    globalSetup: require.resolve('./specs/setup.ts'),
    timeout: 40000,
    forbidOnly: !!process.env.CI,
    use: {
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
    },
}

export default config;
