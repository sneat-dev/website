// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Single-locale (English) site. The bare root `/` is the canonical home; product
// pages live at the top level (`/codegrapher/`, …) alongside the catalog. Workbench
// owns `/wb` in its own Worker, so this site deliberately does not build that route.
// (`/products/`) and the narrative pages (`/specs/`, `/problems/`, …).
const SITE_URL = 'https://sneat.dev';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
