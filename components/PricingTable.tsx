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
import { cn } from "@/lib/utils";

type Plan = {
  name: "Starter" | "Growth" | "Professional" | "Enterprise";
  price: string;
  badge?: string;
  cta: string;
  summary: string[];
  details: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$99/month",
    cta: "Start Free Trial",
    summary: [
      "5 users, 25 vendors, 1 framework, 100 DSARs per year",
      "Compliance Scan, Findings, Controls & Evidence, Policy Management, Risk Register",
      "Basic Vendor Management, Basic DSAR, Dashboard, Reports, Notifications, Audit Trail"
    ],
    details: [
      "Does not include full RoPA, full Data Inventory, Breach Management, Business Risk Intelligence, or Consent Management."
    ]
  },
  {
    name: "Growth",
    price: "$299/month",
    badge: "Most Popular",
    cta: "Book Demo",
    summary: [
      "15 users, 150 vendors, 3 frameworks, 1,000 DSARs per year",
      "Everything in Starter plus Full DSAR, Full RoPA, Full Data Inventory, and Breach Management",
      "Scheduled Compliance Scans and Advanced Reporting"
    ],
    details: [
      "Built for teams actively running privacy operations and recurring compliance programs."
    ]
  },
  {
    name: "Professional",
    price: "$799/month",
    cta: "Book Demo",
    summary: [
      "30 users, 500 vendors, 6 frameworks",
      "Everything in Growth plus Business Risk Intelligence, Executive Dashboard, and Board Reporting",
      "Advanced Vendor Risk, Consent Management, API Access, and Webhooks"
    ],
    details: [
      "Best fit for compliance, privacy, and risk teams that need executive visibility and premium automation."
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    cta: "Talk to Sales",
    summary: [
      "Custom limits and enterprise contracting",
      "Everything in Professional plus SSO, SCIM, Multi-Entity, Custom RBAC, Data Residency, and SLA commitments"
    ],
    details: [
      "Enterprise packaging is structured around procurement, security review, and complex governance requirements."
    ]
  }
];

export function PricingTable() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={cn(
            "relative flex h-full flex-col border-border/80",
            plan.name === "Growth" && "border-primary/40 shadow-glow"
          )}
        >
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-base tracking-wide">{plan.name}</CardTitle>
              {plan.badge ? <Badge>{plan.badge}</Badge> : null}
            </div>
            <p className="text-3xl font-bold text-foreground">{plan.price}</p>
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

            <Button className="mt-auto" variant={plan.name === "Starter" ? "secondary" : "default"}>
              {plan.cta}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
