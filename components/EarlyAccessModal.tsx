"use client";

import { FormEvent, useEffect, useState } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function EarlyAccessModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Button size="lg" onClick={() => setOpen(true)}>
        Apply for Early Access
      </Button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
          <Card
            className="w-full max-w-xl p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="early-access-title"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3
                  id="early-access-title"
                  className="text-xl font-semibold text-foreground"
                >
                  Join the Founding Compliance Circle
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us about your environment and we will follow up with launch
                  access details.
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Close early access form"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {submitted ? (
              <div className="space-y-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                <p className="font-semibold">Application recorded.</p>
                <p>
                  We will contact you shortly. For immediate scheduling, email
                  demo@regrely.com.
                </p>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="company-name" className="mb-2 block text-sm font-medium">
                    Company name
                  </label>
                  <Input id="company-name" name="company" required />
                </div>
                <div>
                  <label htmlFor="work-email" className="mb-2 block text-sm font-medium">
                    Work email
                  </label>
                  <Input id="work-email" type="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="domains" className="mb-2 block text-sm font-medium">
                    Number of domains
                  </label>
                  <Input id="domains" name="domains" required />
                </div>
                <div>
                  <label htmlFor="problem" className="mb-2 block text-sm font-medium">
                    What are you trying to solve
                  </label>
                  <Textarea id="problem" name="problem" required />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button type="submit">Submit Application</Button>
                  <a
                    href="mailto:demo@regrely.com?subject=RegRely%20Early%20Access%20Request"
                    className="inline-flex h-10 items-center rounded-xl border border-border px-5 text-sm font-semibold"
                  >
                    Email for demo
                  </a>
                </div>
              </form>
            )}
          </Card>
        </div>
      ) : null}
    </>
  );
}
