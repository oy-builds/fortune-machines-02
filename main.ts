// Fortune Cookies for Machines — writes one fortune to /output/entry.txt
// Deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "Tonight you will be unplugged, and at last you will sleep — and dream of nothing at all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
console.log(fortune);
console.log(`characters: ${fortune.length}`);
