/**
 * The Sneat.dev product catalogue, organised by the "context stack" — five
 * layers named for the question each answers (ADR 0020 §4). This module is the
 * single source of truth for the homepage grid, the /products catalogue, and
 * every per-product page. Facts are drawn from each product's own README
 * (2026-07-18); keep them honest and in step with the source repos.
 */

export type LayerId = 'specify' | 'understand' | 'store' | 'build' | 'workbench';

export type Status = 'stable' | 'beta' | 'spec' | 'coming-soon';

export interface Layer {
  id: LayerId;
  name: string;
  /** The question this layer answers — the label on the stack diagram. */
  question: string;
  /** One line of editorial context for the layer. */
  blurb: string;
}

export interface Product {
  /** Top-level route slug, e.g. "wb" → /wb/. */
  slug: string;
  name: string;
  layer: LayerId;
  status: Status;
  /** Short, punchy positioning line. */
  tagline: string;
  /** One to two sentences. Honest, specific. */
  blurb: string;
  /** Problem ids (see problems.ts) this product most directly kills. */
  kills: string[];
  /** Canonical own-brand site, if the product has one. sneat.dev links out. */
  home?: string;
  /** GitHub URL. */
  repo?: string;
  /** Canonical docs URL (usually the product's own site). */
  docs?: string;
  /** Primary implementation language / form, for the meta line. */
  kind?: string;
  /** Standalone brand kept distinct on the platform (SpecScore). */
  standalone?: boolean;
}

export const LAYERS: Layer[] = [
  {
    id: 'specify',
    name: 'Specify',
    question: 'What are we building — and why?',
    blurb:
      'Turn intent, requirements and data models into structured context that a human and an agent read the same way — instead of prose that rots.',
  },
  {
    id: 'understand',
    name: 'Understand',
    question: 'What actually is this system?',
    blurb:
      'Make a large, unfamiliar codebase — and the data inside it — queryable, so context is something you retrieve, not something you reconstruct.',
  },
  {
    id: 'store',
    name: 'Store',
    question: 'Where does context live — and who owns it?',
    blurb:
      'Keep the knowledge git-native and user-owned: versioned, diff-able, auditable, and never locked inside someone else’s database.',
  },
  {
    id: 'build',
    name: 'Build',
    question: 'How do we reuse it everywhere?',
    blurb:
      'Define a model or a behaviour once and project it across languages, storage engines and platforms — so context compounds instead of forking.',
  },
  {
    id: 'workbench',
    name: 'Workbench',
    question: 'Run it across your whole fleet.',
    blurb:
      'The tools work per-repo; your world spans dozens of them. The workbench keeps every clone in sync and runs operations across your entire fleet of repositories at once.',
  },
];

export const layerById = (id: LayerId): Layer =>
  LAYERS.find((l) => l.id === id) as Layer;

export const PRODUCTS: Product[] = [
  // ── Specify ──────────────────────────────────────────────────────────────
  {
    slug: 'specscore',
    name: 'SpecScore',
    layer: 'specify',
    status: 'stable',
    standalone: true,
    tagline: 'Specifications that don’t rot.',
    blurb:
      'The open spec format and methodology at the core of the platform. Write requirements as SpecScore.md artifacts — lintable, traceable, acceptance-criteria-first context that humans and agents both trust.',
    kills: ['doc-rot', 'ai-context', 'chaos'],
    home: 'https://specscore.md',
    docs: 'https://specscore.md',
    kind: 'Spec format + methodology',
  },
  {
    slug: 'modelspec',
    name: 'ModelSpec',
    layer: 'specify',
    status: 'beta',
    tagline: 'Define your data model once.',
    blurb:
      'An open specification language for application data models — the logical model, independent of storage engine, programming language, API layer or deployment platform.',
    kills: ['fragmentation', 'own-data'],
    home: 'https://github.com/specscore/modelspec',
    repo: 'https://github.com/specscore/modelspec',
    kind: 'Specification language',
  },
  {
    slug: 'graphspec',
    name: 'GraphSpec',
    layer: 'specify',
    status: 'spec',
    tagline: 'Architecture as a structured spec.',
    blurb:
      'A companion spec in the SpecScore family for describing a system’s architecture and dependencies as a reviewable, machine-checkable graph — so the design of the thing is context, not tribal knowledge.',
    kills: ['doc-rot', 'complexity'],
    kind: 'Specification (emerging)',
  },

  // ── Understand ───────────────────────────────────────────────────────────
  {
    slug: 'codegrapher',
    name: 'CodeGrapher',
    layer: 'understand',
    status: 'beta',
    tagline: 'Code intelligence as a knowledge graph.',
    blurb:
      'Builds and queries a SQLite knowledge graph of every symbol, edge and file in a codebase. Written in Go — a single static binary, no runtime dependencies. Give your agent a map, not a guess.',
    kills: ['complexity', 'ai-context'],
    home: 'https://codegrapher.dev',
    docs: 'https://codegrapher.dev',
    kind: 'Go · single static binary',
  },
  {
    slug: 'dtql',
    name: 'DTQL',
    layer: 'understand',
    status: 'beta',
    tagline: 'One query language for every data shape.',
    blurb:
      'An open, YAML-based query language for relational, document, API and graph-connected data. Ask one kind of question across many kinds of source.',
    kills: ['fragmentation', 'ai-context'],
    home: 'https://dtql.org',
    docs: 'https://dtql.org',
    kind: 'Open query language',
  },

  // ── Store ────────────────────────────────────────────────────────────────
  {
    slug: 'ingitdb',
    name: 'inGitDB',
    layer: 'store',
    status: 'beta',
    tagline: 'A database that lives in Git.',
    blurb:
      'Structured data as files in your repository — schemas, records and materialized views, versioned and diff-able. The knowledge travels with the code that uses it.',
    kills: ['own-data', 'fragmentation'],
    home: 'https://ingitdb.com',
    docs: 'https://ingitdb.com',
    kind: 'Git-native datastore',
  },
  {
    slug: 'openvaultdb',
    name: 'OpenVaultDB',
    layer: 'store',
    status: 'spec',
    tagline: 'Own your data. Grant narrow access.',
    blurb:
      'A user-controlled private data vault and database layer for applications and AI agents: own the data, publish schemas as ModelSpec, grant narrow capabilities, audit every access, and move between storage providers without trusting any one backend.',
    kills: ['own-data', 'ai-context'],
    repo: 'https://github.com/sneat-dev',
    kind: 'Specification-first',
  },

  // ── Build ────────────────────────────────────────────────────────────────
  {
    slug: 'polymodel',
    name: 'PolyModel',
    layer: 'build',
    status: 'beta',
    tagline: 'Define once. Generate everywhere.',
    blurb:
      'An open spec and projection engine: one canonical data model projects into database schemas, transport contracts and language types — Postgres, SQLite, Go, and beyond.',
    kills: ['reuse', 'fragmentation'],
    home: 'https://polymodel.org',
    docs: 'https://polymodel.org',
    kind: 'Spec + code generation',
  },
  {
    slug: 'dalgo',
    name: 'DALgo',
    layer: 'build',
    status: 'stable',
    tagline: 'One data API. Any backend.',
    blurb:
      'A database abstraction layer for Go: one small, consistent API for records, queries, transactions, hooks and schema-aware key mapping, while the storage backend stays an implementation choice.',
    kills: ['reuse', 'complexity'],
    home: 'https://dalgo.io',
    docs: 'https://dalgo.io',
    kind: 'Go library',
  },
  {
    slug: 'bots-go-framework',
    name: 'bots-go-framework',
    layer: 'build',
    status: 'beta',
    tagline: 'Build bots, not boilerplate.',
    blurb:
      'A Go framework for conversational apps across Telegram, WhatsApp and more: a typed runtime and one codebase that reaches many platforms.',
    kills: ['reuse'],
    home: 'https://github.com/bots-go-framework',
    repo: 'https://github.com/bots-go-framework',
    kind: 'Go framework',
  },

  // ── Workbench ────────────────────────────────────────────────────────────
  {
    slug: 'wb',
    name: 'WB',
    layer: 'workbench',
    status: 'coming-soon',
    tagline: 'Fleet-wide ops for all your repos.',
    blurb:
      'The workbench CLI for fleet-wide operations across your GitHub repositories: keep every local clone in sync with GitHub, and run config-driven recipes across every repo that matches — in parallel, with a live progress UI. WB is moving into sneat-dev.',
    kills: ['chaos', 'complexity'],
    repo: 'https://github.com/sneat-dev',
    kind: 'Go CLI · sync + recipes',
  },
];

export const productBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);

export const productsInLayer = (id: LayerId): Product[] =>
  PRODUCTS.filter((p) => p.layer === id);

export const STATUS_LABEL: Record<Status, string> = {
  stable: 'Stable',
  beta: 'Beta',
  spec: 'Spec',
  'coming-soon': 'Coming soon',
};
