/**
 *@type {import('vite').UserConfig}
 */

export default ({
    // base: process.env.NODE_ENV === 'production' ? '/test-deploy/' : '',
    base: '/',
    build: {
        outDir: 'dist',
        rollupOptions: {
        input: './index.html'
        }
    }
})