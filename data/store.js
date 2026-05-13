import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "content.json");

export async function readContent() {
  const raw = await fs.readFile(dataFile, "utf8");
  return JSON.parse(raw);
}

export async function writeContent(content) {
  await fs.writeFile(dataFile, JSON.stringify(content, null, 2));
}

export function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
