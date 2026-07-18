/**
 * Builds the two objects the shared @sneat/astro chrome consumes: a
 * locale-independent SiteMeta (identity, SEO, analytics) and a SiteChrome
 * (header + footer content). Single-locale, so these are plain builders.
 */
import type { SiteMeta, SiteChrome } from '@sneat/astro/config';
import { SITE } from '../config';

export function getSite(): SiteMeta {
  return {
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    companyUrl: SITE.companyUrl,
    gaMeasurementId: SITE.gaId,
    favicon: '/favicon.svg',
    themeColor: '#5b53f0',
    ogImageDefault: '/og/default.png',
  };
}

export function getChrome(): SiteChrome {
  return {
    brand: SITE.brand,
    tld: SITE.tld,
    nav: [
      { href: '/products/', label: 'Products' },
      { href: '/specs/', label: 'Specs' },
      { href: '/open-source/', label: 'Open Source' },
      { href: '/problems/', label: 'Problems' },
    ],
    cta: { href: SITE.cliHref, label: SITE.cta, labelShort: SITE.ctaShort },
    footer: {
      tagline: 'Open-source tools, forged shipping an entire ecosystem.',
      groups: [
        {
          title: 'Platform',
          links: [
            { href: '/products/', label: 'Products' },
            { href: '/specs/', label: 'Specs' },
            { href: '/problems/', label: 'Problems' },
            { href: '/open-source/', label: 'Open Source' },
            { href: SITE.cliHref, label: 'Try the CLI' },
          ],
        },
        {
          title: 'Tools',
          links: [
            { href: '/specscore/', label: 'SpecScore' },
            { href: '/codegrapher/', label: 'CodeGrapher' },
            { href: '/ingitdb/', label: 'inGitDB' },
            { href: '/polymodel/', label: 'PolyModel' },
            { href: '/dalgo/', label: 'DALgo' },
            { href: '/products/', label: 'All tools →' },
          ],
        },
        {
          title: 'Ecosystem',
          links: [
            { href: SITE.githubOrg, label: 'GitHub', external: true },
            { href: 'https://sneat.co', label: 'Sneat Co.', external: true },
            { href: 'https://sneat.app', label: 'Sneat.app', external: true },
          ],
        },
      ],
      owner: 'Sneat Co.',
      ecosystemLabel: 'Part of the Sneat ecosystem',
    },
    a11y: {
      skipToContent: 'Skip to content',
      brandHome: 'Sneat.dev — home',
      primaryNav: 'Primary navigation',
    },
  };
}
