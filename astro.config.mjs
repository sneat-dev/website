// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Single-locale (English) site. The bare root `/` is the canonical home; product
// pages live at the top level (`/wb/`, `/codegrapher/`, …) alongside the catalog
// (`/products/`) and the narrative pages (`/specs/`, `/problems/`, …).
const SITE_URL = 'https://sneat.dev';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
