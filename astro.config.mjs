import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://legacywindowtint.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
