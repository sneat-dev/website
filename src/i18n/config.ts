/**
 * Locale configuration for sneat.dev.
 *
 * English-only for now, but wired through @sneat/astro's createI18n so adding a
 * locale later is a one-line change here plus per-locale copy — the shared
 * chrome, hreflang plumbing and language switcher all come for free. With a
 * single locale the switcher hides itself automatically.
 */
import { createI18n, type Lang as SharedLang } from '@sneat/astro/i18n';

export type LangCode = 'en';
export type Lang = SharedLang;

export const DEFAULT_LOCALE: LangCode = 'en';

const base = createI18n({
  defaultLocale: DEFAULT_LOCALE,
  langs: [{ code: 'en', label: 'English', short: 'EN', tag: 'en', ogLocale: 'en_GB' }],
});

/**
 * @sneat/astro's default localeHref/routeFromPath prefix every non-home route
 * with the locale code (`/en/products/`), even for the default locale — the
 * convention every OTHER multilingual Sneat landing follows, because they
 * really do nest pages under `src/pages/en/*`, `src/pages/ru/*`, etc.
 *
 * sneat.dev doesn't: per astro.config.mjs, this is a genuinely single-locale
 * site with FLAT, unprefixed routes (`/products/`, `/workbench/`, …) — no
 * `/en/*` page exists anywhere. Left alone, the shared Header/Footer nav and
 * every hreflang tag pointed at `/en/…`, which 404s on every single page.
 * Override the path functions to be the identity: this site has one locale,
 * and it owns every route, not just `/`.
 */
export const i18n: typeof base = {
  ...base,
  localeHref: (_code, route = '/') => (route.startsWith('/') ? route : `/${route}`),
  routeFromPath: (path) => path,
  localeFromPath: () => DEFAULT_LOCALE,
};

export const { langs, localeHref, routeFromPath, localeParams, ogImageFor } = i18n;
