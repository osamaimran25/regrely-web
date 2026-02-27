"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { homeNavLinks, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/#top" className="font-semibold tracking-tight text-foreground">
          {SITE_NAME}
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary navigation"
        >
          {homeNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition hover:text-foreground",
                pathname === "/pricing" && item.href === "/pricing" && "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="mailto:demo@regrely.com?subject=RegRely%20Demo%20Request"
            className={buttonVariants({ variant: "secondary", size: "sm" })}
          >
            Book Demo
          </a>
          <Link href="/#early" className={buttonVariants({ size: "sm" })}>
            Request Early Access
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {homeNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm font-medium text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:demo@regrely.com?subject=RegRely%20Demo%20Request"
              className={buttonVariants({ variant: "secondary" })}
              onClick={() => setOpen(false)}
            >
              Book Demo
            </a>
            <Link
              href="/#early"
              className={buttonVariants()}
              onClick={() => setOpen(false)}
            >
              Request Early Access
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
