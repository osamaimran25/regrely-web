RegRely Static Marketing Website

Overview
- Pure static site using HTML5, CSS3, Bootstrap 5 CDN, and minimal vanilla JS.
- Works by opening `index.html` directly.
- No build tools, frameworks, or backend required.

Deployment Notes
1. Upload the entire project folder to your static host (Netlify, S3, Nginx, GitHub Pages, etc.).
2. Keep all file paths and folder names unchanged so relative links resolve correctly.
3. If hosting on a custom domain, update canonical and OpenGraph URLs in each HTML file from `https://www.regrely.com/...` to your domain.
4. Ensure `sitemap.xml` and `robots.txt` are served from the web root.

Contact Form Behavior
- Current default: client-side validation + `mailto:` fallback.
- Optional Formspree and Netlify Forms examples are included as comments in `contact.html`.
- To enable hosted forms, uncomment and configure one option.

Core Features
- Shared navbar, footer, demo modal, and cookie banner across pages.
- Dark/light mode toggle with localStorage persistence.
- Pricing monthly/annual toggle.
- AI demo mock chat UI with structured response cards.
- SEO metadata, canonical tags, Organization/Product/FAQ JSON-LD.

Local Preview
- Open `index.html` in a browser.
- Recommended quick checks: nav links, dark mode toggle, pricing toggle, contact form validation, AI demo prompts.
# regrely-web
