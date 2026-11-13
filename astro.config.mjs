// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ⚠️ Remplace par ton domaine final (doit correspondre à site.url dans src/data/profile.ts)
  site: 'https://berullekamdem.tech',
  integrations: [mdx(), sitemap()],
  build: {
    assets: 'assets', // dossier des fichiers CSS/JS/polices générés
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
