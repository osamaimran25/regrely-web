// @ts-check
import { defineConfig } from "astro/config";

// Clean, trailing-slash-canonical URLs: every page ships as /path/index.html.
// Old .html paths are redirected below so existing SEO/inbound links survive.
export default defineConfig({
  site: "https://regrely.com",
  trailingSlash: "always",
  build: { format: "directory" },
  redirects: {
    "/about.html": "/about/",
    "/pricing.html": "/pricing/",
    "/contact.html": "/contact/",
    "/security.html": "/security/",
    "/privacy.html": "/privacy/",
    "/terms.html": "/terms/",
    "/ai-demo.html": "/ai-demo/",
    "/case-studies.html": "/case-studies/",
    "/industries.html": "/industries/",
    "/product.html": "/product/",
    "/product-dsar.html": "/product/dsar/",
    "/product-ropa.html": "/product/ropa/",
    "/product-consent.html": "/product/consent/",
    "/product-compliance-scan.html": "/product/compliance-scan/",
    "/product-reports.html": "/product/reports/",
    "/product-risk-register.html": "/product/risk-register/",
    "/industry-saas.html": "/industries/saas/",
    "/industry-healthtech.html": "/industries/healthtech/",
    "/industry-fintech.html": "/industries/fintech/",
    "/industry-ecommerce.html": "/industries/ecommerce/",
    "/industry-insurtech.html": "/industries/insurtech/",
    "/industry-edtech.html": "/industries/edtech/",
    "/industry-logistics.html": "/industries/logistics/",
    "/industry-hr.html": "/industries/hr/",
    "/regulation-gdpr.html": "/regulations/gdpr/",
    "/regulation-ccpa.html": "/regulations/ccpa/",
    "/regulation-hipaa.html": "/regulations/hipaa/",
    "/regulation-pdpl.html": "/regulations/pdpl/",
    "/case-study-saas-scale.html": "/case-studies/saas-scale/",
    "/case-study-healthtech-evidence.html": "/case-studies/healthtech-evidence/"
  }
});
