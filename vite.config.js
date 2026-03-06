import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: process.env.GITHUB_PAGES === 'true' ? '/Portfolio/' : '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        work: 'work.html',
        about: 'about.html',
        contact: 'contact.html',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
