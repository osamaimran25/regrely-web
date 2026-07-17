import { SITE } from "../data/site.js";

// Site-wide entity graph shared by every page for consistent structured data.
export function siteGraph() {
  return [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: `${SITE.url}/`,
      logo: `${SITE.url}/assets/img/logo-mark.svg`,
      image: `${SITE.url}${SITE.ogImage}`,
      description: SITE.description,
      email: SITE.email,
      sameAs: [SITE.linkedin],
      parentOrganization: { "@type": "Organization", name: "Flowmoat", url: "https://flowmoat.com/" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        url: `${SITE.url}/contact/`,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: `${SITE.url}/`,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE.url}/#software`,
      name: SITE.name,
      url: `${SITE.url}/`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Compliance Management Software",
      operatingSystem: "Web",
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
      offers: [
        { "@type": "Offer", name: "Starter", price: "99", priceCurrency: "USD", url: `${SITE.url}/pricing/` },
        { "@type": "Offer", name: "Growth", price: "299", priceCurrency: "USD", url: `${SITE.url}/pricing/` },
        { "@type": "Offer", name: "Professional", price: "799", priceCurrency: "USD", url: `${SITE.url}/pricing/` },
      ],
    },
  ];
}

export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
