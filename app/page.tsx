import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  DatabaseZap,
  FileCheck2,
  Globe,
  Lock,
  ShieldCheck,
  UserCheck
} from "lucide-react";

import { EarlyAccessModal } from "@/components/EarlyAccessModal";
import { Section } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const problemCards = [
  {
    title: "DSAR tracking in spreadsheets",
    description:
      "Teams lose SLA visibility and response status because requests are spread across manual trackers."
  },
  {
    title: "Consent logs out of sync",
    description:
      "Marketing tools and source systems drift, creating policy and execution misalignment."
  },
  {
    title: "Evidence scattered across teams",
    description:
      "Audit artifacts sit in shared drives and chats, delaying regulatory response."
  }
];

const featureCards = [
  "Full DSAR workflow + SLA tracking",
  "Policy management + approvals",
  "Risk register + evidence workflows",
  "Compliance scans + findings",
  "Reporting exports (XLSX/DOCX/PDF in higher tiers)",
  "Audit ledger / tamper-evident exports (Pro+)"
];

const reportCards = [
  {
    title: "DSAR Registers",
    copy: "Track intake, owner, status, deadlines, and completion records in one report stream."
  },
  {
    title: "SLA Trend Reports",
    copy: "Monitor overdue risk across domains with executive-ready trend visuals."
  },
  {
    title: "Evidence Packs",
    copy: "Compile controls, approvals, logs, and artifacts into audit-ready bundles."
  }
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Stay audit-ready with RegRely: DSAR workflows, policy controls, risk evidence, and regulator-ready reporting across domains."
};

export default function HomePage() {
  return (
    <>
      <Section id="top" className="pt-12 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_460px]">
          <div className="space-y-7">
            <Badge variant="outline">Compliance Platform for Modern Teams</Badge>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Stay Audit-Ready. Automate Compliance Across Every Domain.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Manage GDPR, DSAR, Consent, Risk &amp; Evidence in one multi-tenant
                platform built for organizations that need provable, repeatable
                compliance execution.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/#early" className={buttonVariants({ size: "lg" })}>
                Request Early Access
              </Link>
              <a
                href="mailto:demo@regrely.com?subject=RegRely%20Demo%20Request"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Book Demo
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="normal-case tracking-normal">Multi-Domain Management</Badge>
              <Badge className="normal-case tracking-normal" variant="secondary">
                Tenant-Isolated Architecture
              </Badge>
              <Badge className="normal-case tracking-normal" variant="outline">
                Regulator-Ready Reporting
              </Badge>
            </div>
          </div>

          <Card className="relative overflow-hidden border-border/90 bg-card shadow-glow">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Product Preview</CardTitle>
              <p className="text-sm text-muted-foreground">
                Sample operations snapshot for a multi-domain compliance team.
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">DSAR SLA</p>
                  <p className="mt-1 text-lg font-semibold">98%</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">Open Requests</p>
                  <p className="mt-1 text-lg font-semibold">14</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">Domains</p>
                  <p className="mt-1 text-lg font-semibold">6</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-3">
                  <p className="text-xs text-muted-foreground">Audit Log</p>
                  <p className="mt-1 text-lg font-semibold text-primary">Live</p>
                </div>
              </div>
              <Separator />
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <FileCheck2 className="h-4 w-4 text-primary" /> Evidence Pack Generated
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Consent Sync Healthy
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-primary" /> Policy Update Review
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="problem" className="muted-surface">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Compliance is Fragmented, Manual, and Risky.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {problemCards.map((card) => (
            <Card key={card.title}>
              <CardHeader>
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="features">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            One Platform. Complete Compliance Control.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <Card key={feature} className="border-border/80">
              <CardContent className="flex items-start gap-3 p-5">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <CheckIcon />
                </div>
                <p className="text-sm font-medium text-foreground">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="domains" className="muted-surface">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Compliance Per Domain. Control From One Dashboard.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Globe className="mt-0.5 h-4 w-4 text-primary" /> per-domain configs
                </li>
                <li className="flex gap-2">
                  <UserCheck className="mt-0.5 h-4 w-4 text-primary" /> custom banner/consent rules
                </li>
                <li className="flex gap-2">
                  <FileCheck2 className="mt-0.5 h-4 w-4 text-primary" /> independent logs/reporting
                </li>
                <li className="flex gap-2">
                  <DatabaseZap className="mt-0.5 h-4 w-4 text-primary" /> centralized oversight
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Built for teams that manage complexity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-primary" /> SaaS
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-primary" /> agencies
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-primary" /> enterprises
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-primary" /> legal/compliance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="security">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Built on Enterprise-Grade Security Architecture
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tenant-Isolated by Design</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                No cross-tenant exposure, strict boundaries, independent domain
                configs, and secure multi-domain operation.
              </p>
              <p className="text-sm font-semibold text-foreground">Your data never mixes. Ever.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Role Control + Audit Trails</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                RBAC, domain-level segmentation, immutable logs, and exportable
                records for regulator response.
              </p>
              <p className="text-sm font-semibold text-foreground">
                Be prepared before regulators ask.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="reports" className="muted-surface">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Reporting &amp; Evidence</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reportCards.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl">Sample reports list</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="exec">
                <AccordionTrigger>Executive Summary PDF</AccordionTrigger>
                <AccordionContent>
                  Board-level summary of compliance posture and critical risk exposure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="coverage">
                <AccordionTrigger>Framework Coverage</AccordionTrigger>
                <AccordionContent>
                  Control-to-framework mapping with completion and gap percentages.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ledger">
                <AccordionTrigger>Audit Ledger</AccordionTrigger>
                <AccordionContent>
                  Immutable activity records and signed export trail for regulator review.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sla">
                <AccordionTrigger>Remediation SLA</AccordionTrigger>
                <AccordionContent>
                  Open remediation timelines, overdue counts, and owner accountability views.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </Section>

      <Section id="early">
        <Card className="overflow-hidden border-primary/30 bg-card shadow-glow">
          <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Badge className="mb-3 normal-case tracking-normal">Early Access Program</Badge>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Join the Founding Compliance Circle
              </h2>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Activity className="mt-0.5 h-4 w-4 text-primary" /> lifetime discounted pricing
                </li>
                <li className="flex gap-2">
                  <Activity className="mt-0.5 h-4 w-4 text-primary" /> direct founder access
                </li>
                <li className="flex gap-2">
                  <Activity className="mt-0.5 h-4 w-4 text-primary" /> feature voting
                </li>
                <li className="flex gap-2">
                  <Activity className="mt-0.5 h-4 w-4 text-primary" /> early modules
                </li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-foreground">
                Only 25 founding companies. Limited spots remaining.
              </p>
            </div>

            <div className="space-y-3">
              <EarlyAccessModal />
              <a
                href="mailto:demo@regrely.com?subject=RegRely%20Demo%20Request"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Email for demo
              </a>
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}

function CheckIcon() {
  return <Lock className="h-4 w-4" />;
}
