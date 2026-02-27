"use client";

import { Check } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Plan = {
  name: "FREE" | "PRO" | "PRO+" | "ENTERPRISE";
  monthly: number | null;
  launchMonthly: number | null;
  badge?: string;
  summary: string[];
  details: string[];
};

const plans: Plan[] = [
  {
    name: "FREE",
    monthly: 0,
    launchMonthly: 0,
    summary: [
      "2 users, 1 domain, 10 DSAR/month, 1 scan project, 1GB storage",
      "Basic DSAR workflow, manual risk register, basic policy mgmt, basic data inventory, dashboard summary, XLSX export"
    ],
    details: [
      "Limitations: no SLA automation, no vendor mgmt, no controls framework, no advanced reporting, no automation engine, community support"
    ]
  },
  {
    name: "PRO",
    monthly: 149,
    launchMonthly: 99,
    badge: "Most Popular",
    summary: [
      "7 users, 2 domains, 75 DSAR/month, 3 scan projects, 15GB storage",
      "DSAR full lifecycle + SLA tracking, attachments & audit trail, validation checks",
      "Governance: policy approvals, acknowledgments, risk workflow + evidence, vendor mgmt basic, ROPA, data inventory review",
      "Scan: manual execution, findings, evidence uploads, risk-based classification",
      "Reporting: XLSX + DOCX exports (DSAR SLA, risk register, vendor summary, standard audit export)"
    ],
    details: [
      "Not included: controls automation, framework mapping/gap, remediation automation, escalation policies, PDF board reports, intelligence alerts"
    ]
  },
  {
    name: "PRO+",
    monthly: 399,
    launchMonthly: 299,
    badge: "Automation & Audit Ready",
    summary: [
      "25 users, 10 domains, 500 DSAR/month, 20 scan projects, 100GB storage",
      "Includes everything in Pro +",
      "Controls & Automation Engine: control library, framework mapping, coverage %, gap analysis, auto assignment, test cycles, evidence expiry, auto remediation, escalation, health scoring",
      "Automation layer: daily SLA jobs, overdue DSAR alerts, control test reminders, remediation SLA alerts, vendor review reminders, intelligence alerts",
      "Advanced reporting: board-ready PDF, executive summary, framework coverage, evidence register, control effectiveness, remediation SLA, findings closure, signed audit ledger export",
      "Advanced governance: domain branding + consent config, domain compliance view, trends"
    ],
    details: []
  },
  {
    name: "ENTERPRISE",
    monthly: null,
    launchMonthly: null,
    summary: [
      "Unlimited users/domains/DSAR/scans, dedicated storage, priority SLA",
      "Multi-framework (GDPR, HIPAA, CCPA, UAE, ISO), SSO (SAML/Azure/Okta), API, integrations, custom taxonomy, white-labeled reports, dedicated AM, data residency, on-prem/private cloud, multi-entity hierarchy, advanced access policies, custom escalation matrix"
    ],
    details: []
  }
];

function getPrice(plan: Plan, annual: boolean) {
  if (plan.launchMonthly === null) {
    return "Talk to Us";
  }

  if (plan.launchMonthly === 0) {
    return "$0/month";
  }

  if (annual) {
    return `$${plan.launchMonthly * 10}/year`;
  }

  return `$${plan.launchMonthly}/month`;
}

function getOriginalPrice(plan: Plan, annual: boolean) {
  if (plan.monthly === null || plan.launchMonthly === null || plan.monthly === 0) {
    return null;
  }

  if (annual) {
    return `$${plan.monthly * 10}/year`;
  }

  return `$${plan.monthly}/month`;
}

function getDiscountCopy(plan: Plan) {
  if (plan.name === "PRO") {
    return "Save $50 (~34%)";
  }
  if (plan.name === "PRO+") {
    return "Save $100 (~25%)";
  }
  return null;
}

export function PricingTable() {
  return (
    <Tabs defaultValue="monthly" className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <TabsList>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annual">Annual</TabsTrigger>
        </TabsList>
        <Badge variant="success" className="normal-case tracking-normal">
          Annual includes 2 months free
        </Badge>
      </div>

      <TabsContent value="monthly">
        <PricingCards annual={false} />
      </TabsContent>
      <TabsContent value="annual">
        <PricingCards annual />
      </TabsContent>
    </Tabs>
  );
}

function PricingCards({ annual }: { annual: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={cn(
            "relative flex h-full flex-col border-border/80",
            plan.name === "PRO" && "border-primary/40 shadow-glow"
          )}
        >
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-base tracking-wide">{plan.name}</CardTitle>
              {plan.badge ? <Badge>{plan.badge}</Badge> : null}
            </div>

            <div>
              <p className="text-3xl font-bold text-foreground">{getPrice(plan, annual)}</p>
              {getOriginalPrice(plan, annual) ? (
                <p className="text-xs text-muted-foreground">
                  <span className="line-through">{getOriginalPrice(plan, annual)}</span>
                  <span className="ml-2 text-primary">Launch Offer</span>
                </p>
              ) : null}
              {annual && plan.launchMonthly && plan.launchMonthly > 0 ? (
                <p className="text-xs text-muted-foreground">
                  Equivalent to ${plan.launchMonthly}/month billed annually
                </p>
              ) : null}
              {getDiscountCopy(plan) ? (
                <p className="text-xs font-medium text-primary">{getDiscountCopy(plan)}</p>
              ) : null}
            </div>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col gap-5">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {plan.summary.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Accordion type="single" collapsible>
              <AccordionItem value="included">
                <AccordionTrigger>What&apos;s included</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    {plan.summary.map((item) => (
                      <li key={`detail-${item}`} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                    {plan.details.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button className="mt-auto" variant={plan.name === "FREE" ? "secondary" : "default"}>
              {plan.name === "ENTERPRISE" ? "Talk to Sales" : "Choose Plan"}
            </Button>

          </CardContent>
        </Card>
      ))}
    </div>
  );
}
