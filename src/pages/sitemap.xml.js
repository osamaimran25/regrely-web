import { SITE, PRODUCTS, INDUSTRIES, REGULATIONS } from "../data/site.js";

const STATIC = [
  "/",
  "/product/",
  "/industries/",
  "/solutions/gdpr-compliance-software-small-business/",
  "/pricing/",
  "/security/",
  "/case-studies/",
  "/blog/",
  "/about/",
  "/contact/",
  "/ai-demo/",
  "/privacy/",
  "/terms/",
];
const BLOG = [
  "do-we-need-a-dpo",
  "gdpr-compliance-checklist-for-saas",
  "gdpr-vs-ccpa",
  "how-to-respond-to-a-dsar",
  "what-is-a-ropa",
  "when-is-a-dpia-required",
];
const CASE_STUDIES = ["saas-scale", "healthtech-evidence"];

export function GET() {
  const urls = [
    ...STATIC,
    ...PRODUCTS.map((p) => `/product/${p.slug}/`),
    ...INDUSTRIES.map((i) => `/industries/${i.slug}/`),
    ...REGULATIONS.map((r) => `/regulations/${r.slug}/`),
    ...CASE_STUDIES.map((s) => `/case-studies/${s}/`),
    ...BLOG.map((s) => `/blog/${s}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE.url}${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
