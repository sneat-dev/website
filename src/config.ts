/**
 * Canonical site constants for sneat.dev.
 *
 * Positioning is defined in backstage
 * (marketing/sneat-dev-platform-vision.md + ADR 0020). Keep the canonical
 * marketing lines here in step with that brief — don't drift the copy.
 */
export const SITE = {
  name: 'Sneat.dev',
  /** Header wordmark: brand + coloured TLD. */
  brand: 'Sneat',
  tld: '.dev',
  domain: 'sneat.dev',
  url: 'https://sneat.dev',

  /** Hero — the "forged in the fire" origin line (ADR 0020 §3). */
  headline: 'The tools we built to ship an entire ecosystem.',
  headlineSub:
    'One small team. A wall of products. AI copilots that kept losing the plot. Sneat.dev is the open-source toolkit that came out of it — forged shipping dozens of real apps, now yours.',
  /** The one-line intellectual spine that follows the hero. */
  shift: 'AI made writing code cheap. It made context the bottleneck.',

  /** Primary call to action — the future entry point into the ecosystem. */
  cta: 'Try the Sneat CLI',
  ctaShort: 'Try the CLI',

  description:
    'Sneat.dev is an open-source developer toolkit for structured, durable, git-native engineering context — specs, code intelligence, data you own, and the libraries that tie it together. Forged shipping an entire product ecosystem with AI.',

  githubOrg: 'https://github.com/sneat-dev',
  companyUrl: 'https://sneat.co',
  cliHref: '/cli/',

  /**
   * The Sneat CLI (`sneat`) — the ecosystem's command-line front door: auth,
   * chat with your spaces, and a conversational/agent runtime. PUBLIC and
   * installable today. Distinct from WB, the developer workbench (coming soon).
   */
  sneatCliRepo: 'https://github.com/sneat-co/sneat-cli',
  sneatCliInstall: 'go install github.com/sneat-co/sneat-cli/cmd/sneat@latest',

  /**
   * GA4 measurement id, or null for no analytics. No sneat.dev property is
   * provisioned yet — kept null so the tag isn't loaded to do nothing. Wire a
   * real id here once one exists (canonical map: sneat-ops/data/ga-properties.json).
   */
  gaId: null as string | null,
} as const;
