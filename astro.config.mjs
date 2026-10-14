import { defineConfig } from 'astro/config';
export default defineConfig({
  site: process.env.SITE_URL || 'https://tiwashita2525.github.io',
  base: process.env.SITE_BASE || '/iwashita-lab-website',
  trailingSlash: 'always',
});
