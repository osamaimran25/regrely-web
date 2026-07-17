/**
 * GA4 conversion events for RegRely.
 *
 * Every handler is delegated off document, so it also covers markup injected
 * after load (modals, AI demo output) without needing to re-bind.
 */
(function () {
  "use strict";

  // No-ops safely if gtag is blocked, not yet loaded, or the user has an ad blocker.
  function track(name, params) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, params || {});
  }

  /** Which pricing plan, if this element sits inside a pricing card. */
  function planFor(el) {
    var card = el.closest(".pricing-card, .card-surface, [data-plan]");
    if (!card) return undefined;
    if (card.dataset && card.dataset.plan) return card.dataset.plan;
    var heading = card.querySelector("h2, h3, h4");
    return heading ? heading.textContent.trim().slice(0, 40) : undefined;
  }

  function sectionFor(el) {
    var section = el.closest("section");
    if (!section) return "unknown";
    var heading = section.querySelector("h1, h2");
    return heading ? heading.textContent.trim().slice(0, 50) : "unknown";
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href]");
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var label = (link.textContent || "").trim().slice(0, 60);

    // The real conversion: leaving for the product to sign up.
    if (href.indexOf("beta.regrely.com") !== -1) {
      track("trial_start", {
        link_text: label,
        plan: planFor(link),
        page: window.location.pathname,
      });
      return;
    }

    // Pricing page: which tier people actually reach for.
    var plan = planFor(link);
    if (plan && /pricing/i.test(window.location.pathname)) {
      track("pricing_plan_click", { plan: plan, link_text: label });
      return;
    }

    if (link.classList.contains("btn")) {
      track("cta_click", { link_text: label, section: sectionFor(link) });
    }
  });

  var FORM_EVENTS = {
    demoForm: "demo_request",
    contactForm: "contact_submit",
  };

  // Capture phase, on document. main.js handles these forms on the target and
  // calls form.reset() inside its handler — a bubble-phase listener would see
  // an emptied form and fail checkValidity(). Capture runs first, so the fields
  // are still populated here.
  document.addEventListener(
    "submit",
    function (event) {
      var form = event.target;
      var name = FORM_EVENTS[form.id];
      if (!name) return;

      // Only count a submit that would actually have gone through.
      if (!form.checkValidity()) return;

      var company = form.querySelector("[name='company']");
      var size = form.querySelector("[name='team_size']");
      track(name, {
        has_company: !!(company && company.value.trim()),
        team_size: size ? size.value.trim() : undefined,
        page: window.location.pathname,
      });
    },
    true,
  );
})();
