// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sflguide.fun/',
  base: '/',

  build: {
    outDir: './dist',
    assetsDir: 'assets',
  },

  server: {
    port: 4321,
    host: true,
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      // @ts-ignore
      langs: ['javascript', 'typescript', 'css', 'json'],
    },
  },

  integrations: [],

  output: 'static',

  compressHTML: true,

  prefetch: {
    defaultStrategy: 'viewport',
  },
});
