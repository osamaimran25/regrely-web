// Single source of truth for site-wide identity, navigation and footer.
// Editing these arrays updates the header, footer and dropdowns everywhere.

export const SITE = {
  name: "RegRely",
  url: "https://regrely.com",
  email: "info@regrely.com",
  linkedin: "https://www.linkedin.com/company/regrely",
  appUrl: "https://app.regrely.com/",
  description:
    "RegRely automates GDPR compliance for growing companies — DSAR automation, ROPA mapping, consent tracking, compliance scans, risk registers, and audit-ready reports. No compliance team needed.",
  ogImage: "/assets/img/og-default.jpg",
  gaId: "G-ZFY3WQV35S",
};

// Product sub-modules — drive the Product dropdown AND /product/[slug] routes.
export const PRODUCTS = [
  { slug: "dsar", label: "DSAR Automation", short: "DSAR" },
  { slug: "ropa", label: "ROPA Mapping", short: "ROPA" },
  { slug: "consent", label: "Consent Tracking", short: "Consent" },
  { slug: "compliance-scan", label: "Compliance Scan", short: "Compliance Scan" },
  { slug: "reports", label: "Reports", short: "Reports" },
  { slug: "risk-register", label: "Risk Register", short: "Risk Register" },
];

export const INDUSTRIES = [
  { slug: "saas", label: "SaaS" },
  { slug: "healthtech", label: "Healthtech" },
  { slug: "fintech", label: "Fintech" },
  { slug: "ecommerce", label: "Ecommerce" },
  { slug: "insurtech", label: "Insurtech" },
  { slug: "edtech", label: "Edtech" },
  { slug: "logistics", label: "Logistics" },
  { slug: "hr", label: "HR" },
];

export const REGULATIONS = [
  { slug: "gdpr", label: "GDPR" },
  { slug: "ccpa", label: "CCPA" },
  { slug: "hipaa", label: "HIPAA" },
  { slug: "pdpl", label: "UAE PDPL" },
];

// Primary navigation. `children` renders a dropdown.
export const NAV = [
  { label: "Product", href: "/product/", children: PRODUCTS.map((p) => ({ label: p.label, href: `/product/${p.slug}/` })) },
  { label: "Industries", href: "/industries/", children: INDUSTRIES.map((i) => ({ label: i.label, href: `/industries/${i.slug}/` })) },
  { label: "Regulations", href: "/regulations/gdpr/", children: REGULATIONS.map((r) => ({ label: r.label, href: `/regulations/${r.slug}/` })) },
  { label: "Pricing", href: "/pricing/" },
  { label: "Security", href: "/security/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const FOOTER = {
  columns: [
    {
      title: "Product",
      links: [
        { label: "Overview", href: "/product/" },
        { label: "DSAR", href: "/product/dsar/" },
        { label: "Risk Register", href: "/product/risk-register/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about/" },
        { label: "Security", href: "/security/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Pricing", href: "/pricing/" },
        { label: "Case Studies", href: "/case-studies/" },
        { label: "AI Demo", href: "/ai-demo/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms", href: "/terms/" },
        { label: "Privacy", href: "/privacy/" },
        { label: "Disclosure", href: "/security/#responsible-disclosure" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Talk to Sales", href: "/contact/" },
    { label: "Trust Center", href: "/security/" },
    { label: "Plans", href: "/pricing/" },
  ],
};
