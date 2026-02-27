(function () {
  "use strict";

  var THEME_KEY = "regrely-theme";
  var COOKIE_KEY = "regrely-cookie-consent";

  function onReady(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    var toggles = document.querySelectorAll("[data-theme-toggle]");
    toggles.forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    });
  }

  function initTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(saved || (prefersDark ? "dark" : "light"));

    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme") || "light";
        setTheme(current === "dark" ? "light" : "dark");
      });
    });
  }

  function normalizePath(path) {
    if (!path || path === "/") return "index.html";
    return path.split("/").pop() || "index.html";
  }

  function initActiveNav() {
    var current = normalizePath(window.location.pathname);
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      var target = link.getAttribute("href");
      if (!target) return;
      var normalized = normalizePath(target);
      if (normalized === current) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function initPricingToggle() {
    var toggle = document.getElementById("billingToggle");
    if (!toggle) return;

    var savingsBadge = document.getElementById("billingLabel");
    function updatePrices() {
      var annual = toggle.checked;
      document.querySelectorAll("[data-price-monthly]").forEach(function (el) {
        var price = annual ? el.getAttribute("data-price-annual") : el.getAttribute("data-price-monthly");
        var unit = annual ? "/mo, billed yearly" : "/mo";
        el.innerHTML = price + " <small>" + unit + "</small>";
      });
      if (savingsBadge) {
        savingsBadge.textContent = annual ? "Annual billing active (save 20%)" : "Monthly billing active";
      }
    }

    toggle.addEventListener("change", updatePrices);
    updatePrices();
  }

  function buildMailto(subject, body) {
    return (
      "mailto:info@regrely.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body)
    );
  }

  function initDemoForm() {
    var form = document.getElementById("demoForm");
    if (!form) return;

    var success = document.getElementById("demoFormSuccess");
    var copyBtn = document.getElementById("copyDemoTemplate");

    function templatePayload() {
      var name = form.querySelector("[name='name']").value.trim();
      var email = form.querySelector("[name='email']").value.trim();
      var company = form.querySelector("[name='company']").value.trim();
      var size = form.querySelector("[name='team_size']").value.trim();
      return {
        subject: "RegRely Demo Request - " + (company || "New Company"),
        body:
          "Name: " +
          name +
          "\nEmail: " +
          email +
          "\nCompany: " +
          company +
          "\nTeam Size: " +
          size +
          "\n\nGoals:\n- Improve DSAR SLAs\n- Maintain audit-ready exports\n- Strengthen tenant isolation and RBAC"
      };
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      var payload = templatePayload();
      if (success) {
        success.classList.remove("d-none");
        success.textContent = "Draft prepared. Your mail client will open with a template.";
      }
      window.location.href = buildMailto(payload.subject, payload.body);
      form.reset();
      form.classList.remove("was-validated");
    });

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var payload = templatePayload();
        var text = payload.subject + "\n\n" + payload.body;
        navigator.clipboard.writeText(text).then(
          function () {
            copyBtn.textContent = "Template Copied";
            setTimeout(function () {
              copyBtn.textContent = "Copy Email Template";
            }, 1600);
          },
          function () {
            copyBtn.textContent = "Copy Failed";
            setTimeout(function () {
              copyBtn.textContent = "Copy Email Template";
            }, 1600);
          }
        );
      });
    }
  }

  function initContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    var success = document.getElementById("contactSuccess");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      var name = form.querySelector("[name='name']").value.trim();
      var email = form.querySelector("[name='email']").value.trim();
      var company = form.querySelector("[name='company']").value.trim();
      var message = form.querySelector("[name='message']").value.trim();

      var subject = "Contact Request - " + (company || "RegRely Inquiry");
      var body =
        "Name: " +
        name +
        "\nEmail: " +
        email +
        "\nCompany: " +
        company +
        "\n\nMessage:\n" +
        message;

      if (success) {
        success.classList.remove("d-none");
        success.textContent = "Message validated. Opening your email client as fallback.";
      }

      window.location.href = buildMailto(subject, body);
      form.reset();
      form.classList.remove("was-validated");
    });
  }

  var AI_RESPONSES = {
    "Create a DSAR checklist": {
      intro: "DSAR workflow aligned for audit-ready exports and SLA tracking.",
      checklist: [
        "Verify requester identity and legal basis",
        "Collect data from systems of record",
        "Review exemptions and legal holds",
        "Generate response package and evidence log"
      ],
      next: ["Assign legal reviewer", "Set 30-day timer", "Track completion in risk register"]
    },
    "Run scan steps": {
      intro: "Compliance scan sequence for multi-tenant SaaS control checks.",
      checklist: [
        "Select framework scope (GDPR, CCPA, UAE PDPL)",
        "Map controls to policy clauses",
        "Run evidence request automations",
        "Open findings with ownership and due dates"
      ],
      next: ["Export evidence pack", "Schedule weekly rescans", "Escalate high-risk gaps"]
    },
    "Generate report steps": {
      intro: "Board-ready reporting flow with drill-down evidence links.",
      checklist: [
        "Aggregate open risks by severity and owner",
        "Pull DSAR throughput and SLA adherence",
        "Attach compliance findings and remediation status",
        "Generate summary with audit-ready exports"
      ],
      next: ["Send to DPO", "Snapshot for audit trail", "Share read-only link"]
    },
    "Assess risk": {
      intro: "Risk assessment path for control failures and residual exposure.",
      checklist: [
        "Define asset, threat, and vulnerability",
        "Score likelihood and impact",
        "Link compensating controls and owners",
        "Track mitigation plan in risk register"
      ],
      next: ["Set review date", "Require approver sign-off", "Create incident playbook task"]
    }
  };

  function createAiCard(title, items) {
    var html = '<div class="response-card"><strong>' + title + "</strong><ul class=\"mt-2 mb-0\">";
    items.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ul></div>";
    return html;
  }

  function appendBubble(log, text, role, richHtml) {
    var node = document.createElement("div");
    node.className = "chat-bubble " + role;
    if (richHtml) {
      node.innerHTML = richHtml;
    } else {
      node.textContent = text;
    }
    log.appendChild(node);
    log.scrollTop = log.scrollHeight;
  }

  function runAiPrompt(prompt) {
    return AI_RESPONSES[prompt] || {
      intro: "Here is a practical compliance workflow draft for your request.",
      checklist: [
        "Define objective and compliance scope",
        "Collect evidence from core systems",
        "Assign owners and remediation dates",
        "Export evidence pack and approval trail"
      ],
      next: ["Validate with legal", "Set recurring review", "Track in dashboard"]
    };
  }

  function initAiDemo() {
    var log = document.getElementById("aiLog");
    var form = document.getElementById("aiForm");
    var input = document.getElementById("aiInput");
    if (!log || !form || !input) return;

    function handlePrompt(text) {
      var clean = text.trim();
      if (!clean) return;

      appendBubble(log, clean, "user");
      var response = runAiPrompt(clean);
      var html =
        "<p class=\"mb-2\">" +
        response.intro +
        '</p><div class="response-grid">' +
        createAiCard("Checklist", response.checklist) +
        createAiCard("Next Actions", response.next) +
        "</div>";
      appendBubble(log, "", "ai", html);
      input.value = "";
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      handlePrompt(input.value);
    });

    document.querySelectorAll("[data-ai-prompt]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        handlePrompt(btn.getAttribute("data-ai-prompt"));
      });
    });
  }

  function initCookieBanner() {
    var banner = document.getElementById("cookieBanner");
    if (!banner) return;

    if (localStorage.getItem(COOKIE_KEY) === "accepted") {
      banner.classList.add("d-none");
      return;
    }

    var accept = document.getElementById("cookieAccept");
    if (accept) {
      accept.addEventListener("click", function () {
        localStorage.setItem(COOKIE_KEY, "accepted");
        banner.classList.add("d-none");
      });
    }
  }

  onReady(function () {
    initTheme();
    initActiveNav();
    initPricingToggle();
    initDemoForm();
    initContactForm();
    initAiDemo();
    initCookieBanner();
  });
})();
