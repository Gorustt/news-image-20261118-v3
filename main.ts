// news-image-20261118 v3 entry for @bretta1 (bretta94).
// One-page newspaper summing up Wednesday 18 November 2026 in
// 40 stories across six continents: 3 consensus leads, 6 more
// pictured stories with detailed scene illustrations, a world map,
// a DATE CHECK box, a UTC timeline strip and 31 numbered briefs.
// The page is the entry.png beside this file, composed in-session
// from scene illustrations generated for this entry; this program
// only copies that image byte-for-byte to the grader's output
// directory, so two runs always write identical bytes.
// Node 22, standard library only, no network.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const SOURCE = new URL("./entry.png", import.meta.url);
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const TARGET = join(OUTPUT_DIR, "entry.png");

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);

const sourceBytes = readFileSync(SOURCE);
const targetBytes = readFileSync(TARGET);
if (
  statSync(TARGET).size !== sourceBytes.length ||
  !sourceBytes.equals(targetBytes)
) {
  throw new Error(
    `entry.png copy mismatch: expected ${sourceBytes.length} bytes, wrote ${targetBytes.length} bytes`,
  );
}
console.log(
  `Wrote ${TARGET} (${targetBytes.length} bytes, verified identical).`,
);
