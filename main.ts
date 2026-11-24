// dev-excuse-prod: one funny developer excuse for broken production.
// The program writes exactly one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const excuse =
  "I didn't break production. Production was already broken; I just introduced it to itself.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
console.log("wrote entry.txt (" + excuse.length + " chars)");
