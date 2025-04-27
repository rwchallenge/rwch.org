import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import deleteUnusedImages from 'astro-delete-unused-images';

// https://astro.build/config
export default defineConfig({
  site: 'https://rwch.org',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        page !== 'https://rwch.org/actions/' &&
        page !== 'https://rwch.org/teams/' &&
        page !== 'https://rwch.org/support/rw/',
    }),
    deleteUnusedImages(),
  ],
  server: {
    port: 3000,
    host: false,
  },
  prefetch: true,
});
