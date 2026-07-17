// One-shot migrator: converts legacy .html pages into clean-URL Astro pages.
// - Lifts <main>…</main> into a raw partial (injected via set:html, so Bootstrap
//   markup never hits the JSX parser).
// - Extracts <title> + meta description.
// - Preserves page-specific JSON-LD (FAQ/Breadcrumb/Article/etc) via a head slot.
// - Rewrites every internal .html link + assets/ path to the new clean URLs.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const PARTIALS = path.join(ROOT, "src/partials");
const PAGES = path.join(ROOT, "src/pages");
fs.mkdirSync(PARTIALS, { recursive: true });

// ---- filename -> { route, path, partial } ---------------------------------
function mapName(file) {
  const base = file.replace(/\.html$/, "");
  if (base === "index") return { route: "index", url: "/", partial: "index" };
  if (base === "404") return { route: "404", url: "/404", partial: "404", noindex: true };
  let m;
  if ((m = base.match(/^product-(.+)$/))) return { route: `product/${m[1]}`, url: `/product/${m[1]}/`, partial: `product__${m[1]}` };
  if ((m = base.match(/^industry-(.+)$/))) return { route: `industries/${m[1]}`, url: `/industries/${m[1]}/`, partial: `industries__${m[1]}` };
  if ((m = base.match(/^regulation-(.+)$/))) return { route: `regulations/${m[1]}`, url: `/regulations/${m[1]}/`, partial: `regulations__${m[1]}` };
  if ((m = base.match(/^case-study-(.+)$/))) return { route: `case-studies/${m[1]}`, url: `/case-studies/${m[1]}/`, partial: `case-studies__${m[1]}` };
  // plain top-level pages: about, pricing, contact, security, privacy, terms,
  // ai-demo, product, industries, case-studies
  return { route: base, url: `/${base}/`, partial: base };
}

// ---- rewrite an internal href/src path to a clean URL ---------------------
function cleanUrl(p) {
  // strip leading ./
  p = p.replace(/^\.\//, "");
  if (/^(https?:)?\/\//.test(p) || p.startsWith("mailto:") || p.startsWith("tel:") || p.startsWith("#")) return null;
  // split off #anchor / ?query
  const hashIdx = p.search(/[#?]/);
  const suffix = hashIdx >= 0 ? p.slice(hashIdx) : "";
  let file = hashIdx >= 0 ? p.slice(0, hashIdx) : p;
  if (file.startsWith("assets/")) return "/" + file + suffix;
  if (file === "index.html" || file === "") return "/" + suffix;
  if (file === "blog/index.html") return "/blog/" + suffix;
  let m;
  if ((m = file.match(/^blog\/(.+)\.html$/))) return `/blog/${m[1]}/` + suffix;
  if (!file.endsWith(".html")) return null; // not a page link
  const b = file.replace(/\.html$/, "");
  if ((m = b.match(/^product-(.+)$/))) return `/product/${m[1]}/` + suffix;
  if ((m = b.match(/^industry-(.+)$/))) return `/industries/${m[1]}/` + suffix;
  if ((m = b.match(/^regulation-(.+)$/))) return `/regulations/${m[1]}/` + suffix;
  if ((m = b.match(/^case-study-(.+)$/))) return `/case-studies/${m[1]}/` + suffix;
  return `/${b}/` + suffix;
}

function rewriteLinks(html) {
  return html.replace(/(href|src)=("|')(.*?)\2/g, (full, attr, q, val) => {
    const c = cleanUrl(val);
    return c ? `${attr}=${q}${c}${q}` : full;
  });
}

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : "";
}

// Collect page-specific JSON-LD, dropping the site-wide ones now in BaseLayout.
function headSchema(head) {
  const blocks = [...head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const keep = [];
  for (const raw of blocks) {
    try {
      const obj = JSON.parse(raw);
      const t = obj["@type"];
      if (["Organization", "WebSite", "SoftwareApplication"].includes(t)) continue;
      keep.push(rewriteLinks(JSON.stringify(obj)));
    } catch {
      /* skip malformed */
    }
  }
  return keep;
}

// ---- gather files ----------------------------------------------------------
const rootFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
const blogFiles = fs.existsSync(path.join(ROOT, "blog"))
  ? fs.readdirSync(path.join(ROOT, "blog")).filter((f) => f.endsWith(".html")).map((f) => "blog/" + f)
  : [];

const report = [];
for (const rel of [...rootFiles, ...blogFiles]) {
  const html = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const headPart = html.split(/<\/head>/i)[0] || "";
  const isBlog = rel.startsWith("blog/");
  let info;
  if (isBlog) {
    const slug = rel.replace(/^blog\//, "").replace(/\.html$/, "");
    info = slug === "index"
      ? { route: "blog/index", url: "/blog/", partial: "blog__index" }
      : { route: `blog/${slug}`, url: `/blog/${slug}/`, partial: `blog__${slug}` };
  } else {
    info = mapName(rel);
  }

  const title = extract(html, /<title>([\s\S]*?)<\/title>/i);
  const desc = extract(headPart, /<meta name="description" content="([\s\S]*?)"/i);
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    report.push(`SKIP ${rel} (no <main>)`);
    continue;
  }
  const mainInner = rewriteLinks(mainMatch[1]);
  const schemaBlocks = headSchema(headPart);

  // write partial
  fs.writeFileSync(path.join(PARTIALS, info.partial + ".html"), mainInner, "utf8");
  if (schemaBlocks.length) {
    fs.writeFileSync(path.join(PARTIALS, info.partial + ".head.html"),
      schemaBlocks.map((s) => `<script type="application/ld+json">${s}</script>`).join("\n"), "utf8");
  }

  // depth of the route under pages/ decides ../ count
  const depth = info.route.split("/").length; // index=1, product/dsar=2
  const up = "../".repeat(depth);
  const importLine = `import html from "${up}partials/${info.partial}.html?raw";`;
  const headImport = schemaBlocks.length ? `\nimport headHtml from "${up}partials/${info.partial}.head.html?raw";` : "";
  const headSlot = schemaBlocks.length ? `\n  <Fragment slot="head" set:html={headHtml} />` : "";
  const noindex = info.noindex ? " noindex={true}" : "";

  const astro = `---
import BaseLayout from "${up}layouts/BaseLayout.astro";
${importLine}${headImport}
const title = ${JSON.stringify(title || "RegRely")};
const description = ${JSON.stringify(desc || "")};
---

<BaseLayout title={title} description={description} path=${JSON.stringify(info.url.endsWith("/") ? info.url : info.url)}${noindex}>${headSlot}
  <Fragment set:html={html} />
</BaseLayout>
`;
  const outPath = path.join(PAGES, info.route + ".astro");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, astro, "utf8");
  report.push(`OK   ${rel.padEnd(38)} -> pages/${info.route}.astro  (${info.url})`);
}
console.log(report.join("\n"));
console.log(`\n${report.filter((r) => r.startsWith("OK")).length} pages migrated.`);
