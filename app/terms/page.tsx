import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms",
  description: "RegRely terms of service placeholder page."
};

export default function TermsPage() {
  return (
    <Section className="pt-14 md:pt-20">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-3xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            This is a placeholder terms page for RegRely. Replace this content with
            approved legal terms prior to commercial release.
          </p>
          <p>
            Include plan limitations, acceptable use, indemnity, warranty disclaimers,
            and termination conditions.
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
