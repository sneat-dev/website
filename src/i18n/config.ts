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

export const i18n = createI18n({
  defaultLocale: DEFAULT_LOCALE,
  langs: [{ code: 'en', label: 'English', short: 'EN', tag: 'en', ogLocale: 'en_GB' }],
});

export const { langs, localeHref, routeFromPath, localeParams, ogImageFor } = i18n;
