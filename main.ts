// The Most Shameless Lie — a flat confession, four words, zero remorse.
const entry = "I sold your data.";
import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(`${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`, entry);
console.log(entry);
