import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rwch.org',
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
    sitemap({
      filter: (page) =>
        page !== 'https://rwch.org/actions/' &&
        page !== 'https://rwch.org/teams/' &&
        page !== 'https://rwch.org/support/rw/',
    }),
  ],
  server: {
    port: 3000,
    host: false,
  },
  prefetch: true,
});
