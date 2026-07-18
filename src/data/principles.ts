/**
 * The engineering principles behind the platform (ADR 0020 §9). Opinionated,
 * but never arrogant — a point of view earned by building, not by selling.
 */
export interface Principle {
  title: string;
  body: string;
}

export const PRINCIPLES: Principle[] = [
  {
    title: 'Humans and AI, one workflow',
    body: 'We don’t build AI tools. We build tools that give humans and their agents the same structured context — so they can actually work together.',
  },
  {
    title: 'Structured context beats scattered prose',
    body: 'Intent, models and architecture belong in artifacts you can lint, query and diff — not in documents that drift the moment they’re written.',
  },
  {
    title: 'Standards before implementations',
    body: 'We write the spec first — SpecScore, ModelSpec, DTQL — then implement it. Open formats outlive any one tool, ours included.',
  },
  {
    title: 'Small, composable, Unix-spirited',
    body: 'Each tool does one thing and is useful alone. Together they compose into something larger, without a monolith to buy into.',
  },
  {
    title: 'Own your data',
    body: 'Your context lives in your repository and your vault — git-native, versioned, portable. Not locked inside our database, or anyone’s.',
  },
  {
    title: 'Open by default',
    body: 'Everything is usable for free in its standard version. Some tools may add hosted or premium capabilities later; the core stays open.',
  },
  {
    title: 'Build once, reuse everywhere',
    body: 'Define a model or behaviour a single time and project it across languages, storage engines and platforms. Context should compound, not fork.',
  },
];
