import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://brazosridgefence.com',
  integrations: [sitemap()],
});
