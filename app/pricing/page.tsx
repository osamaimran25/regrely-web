import type { Metadata } from "next";

import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingTable } from "@/components/PricingTable";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "RegRely pricing for Starter, Growth, Professional, and Enterprise plans with full feature comparison."
};

export default function PricingPage() {
  return (
    <>
      <Section className="pt-14 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 normal-case tracking-normal">Launch Offer</Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            RegRely Pricing
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Start with compliance operations and expand into executive risk intelligence as your program matures.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <PricingTable />
      </Section>

      <Section className="pt-8 md:pt-12">
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Comparison Table</h2>
        <ComparisonTable />
      </Section>

      <Section className="pt-8 md:pt-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Plan Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Starter</span> is designed
              for first compliance workflows and self-serve trials.
            </p>
            <p>
              <span className="font-semibold text-foreground">Growth</span> adds full
              privacy operations and recurring compliance execution.
            </p>
            <p className="rounded-xl border border-border bg-secondary/40 px-4 py-3">
              <span className="font-semibold text-foreground">Professional</span> adds
              Business Risk Intelligence, advanced vendor risk, consent management, and
              executive reporting. Enterprise is custom.
            </p>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
