/**
 *@type {import('vite').UserConfig}
 */

export default {
    // base: process.env.NODE_ENV === 'production' ? '/test-deploy/' : ''
    base: '/test-deploy/', // Match your GitHub repository name
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    }
}