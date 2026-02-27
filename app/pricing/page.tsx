import type { Metadata } from "next";

import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingTable } from "@/components/PricingTable";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "RegRely launch pricing for FREE, PRO, PRO+, and ENTERPRISE plans with full feature comparison."
};

export default function PricingPage() {
  return (
    <>
      <Section className="pt-14 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 normal-case tracking-normal">Launch Offer</Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            RegRely Pricing (Launch Offer)
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Scale from first domain to enterprise-grade multi-framework compliance.
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
            <CardTitle className="text-2xl">Launch Discount Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">PRO</span> 149→99 save
              $50 (~34%)
            </p>
            <p>
              <span className="font-semibold text-foreground">PRO+</span> 399→299 save
              $100 (~25%)
            </p>
            <p className="rounded-xl border border-border bg-secondary/40 px-4 py-3">
              Launch pricing available for early customers. Subject to revision after
              beta phase.
            </p>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
