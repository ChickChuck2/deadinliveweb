import { defineConfig } from 'vite';

export default defineConfig({
    // Base path for GitHub Pages deployment
    // Matches the repository name: https://<user>.github.io/<repo>/
    base: '/Dead-in-Live-game/',
    build: {
        outDir: 'dist',
    },
});
