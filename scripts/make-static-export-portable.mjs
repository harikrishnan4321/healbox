import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const outDir = join(process.cwd(), "out");

function walk(dir) {
  const entries = readdirSync(dir);
  return entries.flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function prefixFor(filePath) {
  const relativePath = relative(outDir, filePath);
  const depth = relativePath.split(sep).length - 1;
  return depth === 0 ? "." : Array(depth).fill("..").join("/");
}

function relativeInternalPath(prefix, pathname) {
  if (pathname === "/" || pathname === "") {
    return `${prefix}/`;
  }

  return `${prefix}${pathname}`;
}

function replaceInternalPaths(content, prefix) {
  return content
    .replace(/(href|src)="\/(?!\/|https?:|_next\/|logo)([^"#?]*\/?)(\?[^"]*)?"/g, (_match, attr, path, query = "") => {
      return `${attr}="${relativeInternalPath(prefix, `/${path}${query}`)}"`;
    })
    .replace(/(href|src)="\/"/g, (_match, attr) => `${attr}="${prefix}/"`)
    .replace(/\\?"\/(?!\/|https?:|_next\/|logo)([^"\\?#]*\/?)(\?[^"\\]*)?\\?"/g, (match, path, query = "") => {
      const quote = match.startsWith('\\"') ? '\\"' : '"';
      return `${quote}${relativeInternalPath(prefix, `/${path}${query}`)}${quote}`;
    });
}

if (existsSync(outDir)) {
  for (const filePath of walk(outDir)) {
    if (!filePath.endsWith(".html") && !filePath.endsWith(".txt")) continue;

    const prefix = prefixFor(filePath);
    const html = replaceInternalPaths(readFileSync(filePath, "utf8"), prefix)
      .replaceAll('href="/_next/', `href="${prefix}/_next/`)
      .replaceAll('src="/_next/', `src="${prefix}/_next/`)
      .replaceAll('\\"/_next/', `\\"${prefix}/_next/`)
      .replaceAll('href="/logo', `href="${prefix}/logo`)
      .replaceAll('src="/logo', `src="${prefix}/logo`)
      .replaceAll('\\"/logo', `\\"${prefix}/logo`);

    writeFileSync(filePath, html);
  }
}
