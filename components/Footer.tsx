import Link from "next/link";

import { SITE_NAME, SUPPORT_EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/70">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <p className="text-base font-semibold">{SITE_NAME}</p>
          <p className="text-sm text-muted-foreground">
            Privacy + risk automation for teams that need audit-ready execution.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Product
          </p>
          <div className="space-y-2 text-sm">
            <Link href="/#features" className="block hover:text-foreground">
              Features
            </Link>
            <Link href="/#domains" className="block hover:text-foreground">
              Multi-domain
            </Link>
            <Link href="/#security" className="block hover:text-foreground">
              Security
            </Link>
            <Link href="/#reports" className="block hover:text-foreground">
              Reporting
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Company
          </p>
          <div className="space-y-2 text-sm">
            <Link href="/#early" className="block hover:text-foreground">
              Early Access
            </Link>
            <Link href="/privacy" className="block hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="block hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Contact
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container py-4 text-xs text-muted-foreground">
          {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
