/**
 * The problems the platform is built to kill. Written to be *recognised*, not
 * listed — the first emotional beat is "finally, somebody understands my
 * problem" (ADR 0020 §5). Each maps to the stack layer that answers it, and
 * carries a moody card photo (credits in PHOTO_CREDITS.md).
 */
import type { LayerId } from './products';

export interface Problem {
  id: string;
  /** The name of the pain. */
  name: string;
  /** A line that makes the reader feel seen. */
  line: string;
  /** The layer that most directly addresses it. */
  layer: LayerId;
  /** Product slugs that kill it (for the /problems page). */
  killedBy: string[];
  /** Card photo + alt. */
  photo: string;
  alt: string;
}

export const PROBLEMS: Problem[] = [
  {
    id: 'doc-rot',
    name: 'Documentation rot',
    line: 'The docs were true once. Now they quietly lie — and everyone, your AI included, keeps trusting them.',
    layer: 'specify',
    killedBy: ['specscore', 'graphspec'],
    photo: '/photos/problems/doc-rot.jpg',
    alt: 'Stacks of old, yellowing documents gathering dust',
  },
  {
    id: 'fragmentation',
    name: 'Context fragmentation',
    line: 'The truth is scattered across a wiki, a Slack thread, six repos and someone’s memory. Nobody holds all of it.',
    layer: 'understand',
    killedBy: ['dtql', 'codegrapher', 'ingitdb'],
    photo: '/photos/problems/fragmentation.jpg',
    alt: 'Scattered scraps of paper and notes strewn apart',
  },
  {
    id: 'ai-context',
    name: 'AI without context',
    line: 'Your copilot is brilliant for ten lines and lost by the hundredth. It never had the context it needed — because nothing gave it any.',
    layer: 'workbench',
    killedBy: ['specscore', 'codegrapher', 'wb'],
    photo: '/photos/problems/ai-context.jpg',
    alt: 'An empty road disappearing into dense fog',
  },
  {
    id: 'complexity',
    name: 'Runaway complexity',
    line: 'Every feature makes the system a little harder to hold in one head. Eventually, nobody can.',
    layer: 'understand',
    killedBy: ['codegrapher', 'graphspec', 'dalgo'],
    photo: '/photos/problems/complexity.jpg',
    alt: 'A dense, tangled mess of cables and wires',
  },
  {
    id: 'own-data',
    name: 'Data you don’t control',
    line: 'Your project’s knowledge lives in someone else’s database, on someone else’s terms — until the day it doesn’t.',
    layer: 'store',
    killedBy: ['ingitdb', 'openvaultdb'],
    photo: '/photos/problems/own-data.jpg',
    alt: 'A heavy chain and padlock on a steel gate',
  },
  {
    id: 'chaos',
    name: 'Engineering chaos',
    line: 'Half of shipping is fighting entropy: stale state, silent drift, and “wait — why does it even work like that?”',
    layer: 'specify',
    killedBy: ['specscore', 'wb'],
    photo: '/photos/problems/chaos.jpg',
    alt: 'A chaotic, cluttered and overwhelmed workspace',
  },
];

/** A summarising pain used in the intro/CTA rather than the mirror grid. */
export const IDEA_TO_SHIP = {
  id: 'idea-to-ship',
  name: 'The distance from idea to shipped',
  line: 'The gap between “what if” and “it’s live” is mostly friction, not typing.',
};

export const problemById = (id: string): Problem | undefined =>
  PROBLEMS.find((p) => p.id === id);
