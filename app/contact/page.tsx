import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact RegRely for demos and early access."
};

export default function ContactPage() {
  return (
    <Section className="pt-14 md:pt-20">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="text-center">
          <Badge className="mb-4 normal-case tracking-normal">Contact</Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Talk to the RegRely Team
          </h1>
          <p className="mt-4 text-muted-foreground">
            Share your compliance scope and we&apos;ll map the best rollout path.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
