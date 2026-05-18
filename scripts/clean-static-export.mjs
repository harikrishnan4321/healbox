import { rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const targets = ["out", ".next", "healbox-out.zip"];

for (const target of targets) {
  rmSync(join(root, target), { recursive: true, force: true });
}
