// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sflguide.fun/',
  base: '/',

  build: {
    assets: 'assets',
  },


  vite: {
    resolve: {
      alias: {
        'layouts': '/src/layouts',
      },
    },
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

  integrations: [sitemap()],

  output: 'static',

  compressHTML: true,

  prefetch: {
    defaultStrategy: 'viewport',
  },
});
