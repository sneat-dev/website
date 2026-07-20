# sneat.dev — the Sneat Developer Platform website

The public front door of the **Sneat Developer Platform**: the open-source
toolkit — specifications, developer tools, data layers, libraries and the WB
CLI — forged shipping an entire product ecosystem.

Positioning, IA and the decision record live in backstage:
- `marketing/sneat-dev-platform-vision.md` (the founder brief / prompt)
- `docs/decisions/0020-sneat-dev-developer-platform.md` (ADR)

## Stack

- [Astro](https://astro.build) static site (English-first, i18n-ready).
- Shared chrome + theming via **[`@sneat/astro`](https://github.com/sneat-co/sneat-astro)**
  (`BaseLayout`, `Header`, `Footer`, `SeoHead`, the `--color-*` token contract).
  This site maps its own developer-forward palette onto that contract in
  `src/styles/tokens.css`.
- Deployed to **Cloudflare** (static-assets Worker) on `sneat.dev`.

## Structure

```
src/
  config.ts            Canonical site constants + marketing lines
  i18n/config.ts       Locale set (English-only for now) via @sneat/astro
  data/
    site.ts            SiteMeta + SiteChrome for the shared chrome
    products.ts        The "context stack" — layers + product catalogue
    problems.ts        The problems the platform kills
    principles.ts      Engineering principles
  styles/              tokens.css (brand) + global.css (base + utilities)
  layouts/BaseLayout.astro   Thin wrapper over @sneat/astro's BaseLayout
  components/          Homepage + shared sections
  pages/               Home, /products, /specs, /open-source, /problems, /cli,
                       and top-level per-product pages (/workbench, /codegrapher, …)
```

## Develop

```sh
pnpm install
pnpm dev        # local dev server
pnpm build      # astro check && astro build → ./dist
pnpm preview    # preview the build
pnpm deploy     # build + wrangler deploy (Cloudflare)
```

## Adding a product

Add an entry to `src/data/products.ts` under the right stack layer. The homepage
grid, the `/products` catalogue and a `/{slug}/` page are generated from it — no
new templates needed.

Photography credits and licenses: see `PHOTO_CREDITS.md`.
