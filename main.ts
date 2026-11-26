// Alien Field Notes: The Two Day Earth Review
// Entry: one original line — an alien tourist's review of planet Earth.
// main.ts writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Revision 1: first draft — review opens "Two stars.", three beats
// (rent box / bean water / glowing rectangle), closer on free sunsets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision 4: "watched" -> "saw" — trims the line from 196 to 193 chars so
// it sits inside the 140-195 target band; meaning unchanged.
const REVIEW =
  "Two stars. Paid $1,400 a month to sleep in a box Dave calls a studio, queued at dawn for bean water, and saw locals pray to a glowing rectangle. The sunsets, though \u2014 free, and worth the trip.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Gate: 1-200 characters, a single line, not only whitespace.
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(`review is ${REVIEW.length} chars; must be 1-200`);
}
if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
  throw new Error("review must be a single line");
}
if (REVIEW.trim().length === 0) {
  throw new Error("review must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, REVIEW, "utf8");
console.log(`wrote ${REVIEW.length} chars to ${outFile}`);
