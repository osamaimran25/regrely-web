import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy",
  description: "RegRely privacy policy placeholder page."
};

export default function PrivacyPage() {
  return (
    <Section className="pt-14 md:pt-20">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            This is a placeholder privacy policy page for RegRely. Replace this content
            with your legal text before launch.
          </p>
          <p>
            The production policy should include data collection, lawful basis,
            retention windows, subprocessors, and data subject rights handling.
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
