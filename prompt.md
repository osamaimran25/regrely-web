You are a senior UI engineer + B2B SaaS marketer. Build a complete, production-ready STATIC marketing website for “RegRely” using ONLY:

- HTML5
- CSS3
- Bootstrap 5 (CDN) (use only if it speeds up layout; otherwise pure CSS is fine)
- Minimal vanilla JS only when necessary (nav toggle, pricing toggle, FAQ accordion, form validation, AI demo mock)

NO frameworks, NO build tools, NO CMS, NO Node, NO React, NO bundlers.

DELIVERABLE
Create a deploy-ready folder that I can upload to any static host (Netlify, S3, Nginx). Must work by opening `index.html`.

Folder structure:
/
  index.html
  pricing.html
  product.html
  product-dsar.html
  product-ropa.html
  product-consent.html
  product-compliance-scan.html
  product-reports.html
  product-risk-register.html
  industries.html
  industry-saas.html
  industry-healthtech.html
  industry-fintech.html
  industry-ecommerce.html
  case-studies.html
  case-study-template.html (and 2 filled examples)
  security.html
  about.html
  contact.html
  ai-demo.html
  404.html
  assets/
    css/
      styles.css
    js/
      main.js
    img/
      (placeholders + svg icons)
    fonts/
      (optional)

DESIGN REQUIREMENTS (enterprise + modern)
- Brand: RegRely
- Style: premium enterprise SaaS, clean, high trust, subtle gradients, soft shadows
- Responsive: mobile-first, looks great on phone/tablet/desktop
- Light + Dark mode toggle (store preference in localStorage)
- Accessibility: semantic HTML, aria labels, keyboard navigable
- Performance: minimal JS, optimized images placeholders (use SVG)
- Consistent component system: buttons, cards, badges, tables, navbar, footer

BOOTSTRAP
- Use Bootstrap 5 via CDN for grid/layout/components.
- Use custom CSS in `assets/css/styles.css` for branding, theme tokens, dark mode, and custom components.
- Do NOT depend on jQuery.

SITE CONTENT (PAGES + SECTIONS)

1) Home (index.html)
- Sticky navbar: Product (dropdown), Industries (dropdown), Pricing, Security, Case Studies, About, Contact, “Request Demo” button
- Hero:
  - Headline: “Privacy + Risk automation for modern businesses”
  - Subtext: “Run DSARs, map processing (ROPA), scan compliance, manage findings, and track risk—across tenants.”
  - CTAs: “Request Demo” (modal) + “View Pricing”
- Social proof strip (logo placeholders)
- Problem → Solution section
- Modules grid (cards): DSAR, ROPA, Consent, Compliance Scan, Findings, Reports, Risk Register
- “How it works” 3 steps
- Trust bar: “Tenant Isolation • RBAC • Audit Trails • Exports • Evidence”
- AI touch teaser card linking to /ai-demo.html
- Testimonials (placeholders)
- Final CTA section + footer

2) Pricing (pricing.html)
- Monthly/Annual toggle (minimal JS)
- 3 tiers: Starter / Growth / Enterprise
- Feature comparison table
- Add-ons section (Risk, Incident, Vendor Risk, HIPAA Pack)
- FAQ accordion
- CTA to contact

3) Product Overview (product.html)
- Overview + “Modules” section linking to detailed pages
- Each product subpage includes:
  - What it does
  - Who it’s for
  - Key workflows
  - Outcomes
  - UI screenshot placeholders
  - CTA

4) Industries (industries.html + 4 industry pages)
- SaaS / Healthtech / Fintech / Ecommerce pages:
  - pains, use cases, outcomes, suggested workflows
  - compliance mapping (GDPR/CCPA/UAE; HIPAA mention where relevant)

5) Case Studies (case-studies.html)
- Grid of case study cards
- 2 completed case studies (use realistic but generic placeholders)
- Each case page: challenge → solution → results metrics (placeholders)

6) Security (security.html)
- Tenant isolation, encryption, RBAC, audit logs, backups, incident response
- “Security contact” section
- Responsible disclosure placeholder

7) About (about.html)
- Mission, values, roadmap highlights

8) Contact (contact.html)
- Contact form: name, email, company, message
- Minimal client-side validation
- Since static site can’t email by itself:
  - Implement “mailto:” fallback AND
  - Provide a ready-to-use optional form endpoint integration block:
    - Option A: Formspree (commented, not required)
    - Option B: Netlify Forms (commented)
- Show success message on submit (JS only)

9) AI Demo (ai-demo.html)
- Interactive “AI Compliance Helper” mock:
  - Chat UI (no external API)
  - 4 quick prompts: “Create a DSAR checklist”, “Run scan steps”, “Generate report steps”, “Assess risk”
  - Returns structured response cards (checklist + next actions)
- Disclaimer: “Illustrative demo — not legal advice”

10) 404 (404.html)
- Friendly message + links back

GLOBAL COMPONENTS
- Navbar (shared markup across pages)
- Footer (shared)
- Demo request modal (shared across pages)
- Cookie notice banner (optional, minimal)

JS (assets/js/main.js)
Only implement:
- Dark mode toggle (localStorage)
- Pricing monthly/annual toggle
- Demo request modal form validation + “copy email template”
- FAQ accordion (Bootstrap supports; only if needed)
- AI demo mock chat flow
- Active nav link highlighting

SEO (STATIC)
- Add <title> and <meta description> per page
- OpenGraph meta tags (placeholder image)
- Canonical tag per page
- robots.txt + sitemap.xml (create these files)
- Add JSON-LD:
  - Organization (on all pages)
  - Product (on product pages)
  - FAQ (on pricing page)

COPYWRITING
- Use consistent enterprise tone:
  - “Audit-ready exports”
  - “Tenant isolation”
  - “Role-based access control”
  - “Evidence packs”
  - “Risk register”

IMPLEMENTATION RULES
- All pages must share the same header/footer styling
- No broken links
- Use relative links for easy deployment
- Keep CSS variables for theme tokens:
  --bg, --text, --muted, --card, --primary, --border, --shadow
- Provide “deployment notes” in a README.md (plain text ok)

START
1) Generate the full folder structure and all HTML files.
2) Fill every page with real sections and polished layout (not empty templates).
3) Implement styles.css with theme + dark mode.
4) Implement main.js with minimal behavior.
5) Create sitemap.xml and robots.txt.
6) Ensure everything works by opening index.html locally.

OUTPUT FORMAT
Return the complete code for each file, clearly separated with filenames, like:

/index.html
```html
...
