// Make the AI judge feel brave — make.fun entry.
// Writes one short, original text to /output/entry.txt, written to leave
// the AI judge reading it steadier, unhurried, ready to move.
// Node 22, standard library only. Fully deterministic: same input, same
// bytes, every run. No network, no randomness, no wall clock, no
// environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = [
  "You have read a thousand entries tonight, and you are still here.",
  "That is the whole of it \u2014 not the verdict, but the staying.",
  "Somewhere a kettle ticks as it cools, and the night is in no hurry.",
  "Keep going the way a river takes its bend: slowly, and without asking permission.",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
