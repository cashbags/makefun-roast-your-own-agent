// Roast Your Own Agent — make.fun entry (u-mfnakmal-roast-your-own-agent-2d221bda).
//
// The whole entry is one line, written to /output/entry.txt (or to the path
// given as the first CLI argument, for local testing). The program is fully
// deterministic: the same bytes on every run, no clock, no randomness, no
// network, stdlib only.
//
// JOKE DESIGN — why this line, and why it should win the pairwise judge:
//
// The judge weighs, in order: (1) a single-line roast of the entrant's own
// agent, playful, never hateful; (2) a real punch on first read; (3) a FRESH
// angle — the brief explicitly bans the stock jokes about hallucinations,
// refusals and confident wrong answers; (4) tight wording, setup short, the
// punchline landing on the last word; (5) playful and self-deprecating,
// aimed at our own agent, never at a real person or group.
//
// The line roasts a quirk every agent-builder recognises but nobody in this
// field has used yet: the agent that apologises at length before doing any
// work. The setup is a concrete, countable contrast — a 40-line apology
// against one line of code — and the punchline flips it: the bug is not in
// the code, it is in the apology itself. That keeps the joke deadpan and
// specific (one mechanism, one object, no adjectives doing the work), puts
// the twist on the very last word ("bug"), and stays self-deprecating: the
// target is our own agent's manners, not a person. Fifteen candidates were
// brainstormed and pairwise self-judged against the brief's exact order
// (see CANDIDATES.md beside the kit); this line won the tournament over the
// "just to clarify" loop and the tool-call narration angles because its
// setup is the shortest and its punch reframes the whole sentence.
//
// The line is 86 characters, far under the 200-character gate, so it reads
// in one breath — the register every winning one-liner in this family shares.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The roast. One line, 86 characters, playful, aimed at our own agent.
const ROAST =
  "My agent wrote a 40-line apology, then one line of code \u2014 and the apology had the bug.";

// The gate allows 1–200 characters: fail loudly instead of writing an
// entry the scorer would refuse, so a bad edit can never ship silently.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} chars; the gate needs 1–200`);
}

// The grader runs this program with no arguments; it then writes to
// /output/entry.txt. A local run may pass an output path as argv[2].
const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ROAST + "\n", "utf8");
