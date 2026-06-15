import { Check, Minus } from "lucide-react";

import { Card } from "@/components/ui/card";

const rows = [
  ["Users", "5", "15", "30", "Custom"],
  ["Vendors", "25", "150", "500", "Custom"],
  ["Frameworks", "1", "3", "6", "Custom"],
  ["DSAR quota", "100/yr", "1,000/yr", "Unlimited", "Unlimited"],
  ["Compliance Scan", "Yes", "Yes", "Yes", "Yes"],
  ["Scheduled scans", "-", "Yes", "Yes", "Yes"],
  ["RoPA", "-", "Full", "Full", "Full"],
  ["Data Inventory", "-", "Full", "Full", "Full"],
  ["Breach Management", "-", "Yes", "Yes", "Yes"],
  ["Business Risk Intelligence", "-", "-", "Yes", "Yes"],
  ["Advanced Vendor Risk", "-", "-", "Yes", "Yes"],
  ["Consent Management", "-", "-", "Yes", "Yes"],
  ["API + Webhooks", "-", "-", "Yes", "Yes"],
  ["SSO / SCIM / Enterprise Controls", "-", "-", "-", "Yes"]
] as const;

function Cell({ value }: { value: string }) {
  if (value === "Yes") {
    return (
      <span className="inline-flex items-center gap-1">
        <Check className="h-4 w-4 text-primary" />
        Yes
      </span>
    );
  }

  if (value === "-") {
    return (
      <span className="inline-flex items-center gap-1 text-muted-foreground">
        <Minus className="h-4 w-4" />
        -
      </span>
    );
  }

  return <span>{value}</span>;
}

export function ComparisonTable() {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-secondary/70 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-foreground">Feature</th>
              <th className="px-4 py-3 font-semibold">Starter</th>
              <th className="px-4 py-3 font-semibold">Growth</th>
              <th className="px-4 py-3 font-semibold">Professional</th>
              <th className="px-4 py-3 font-semibold">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">{row[0]}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  <Cell value={row[1]} />
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  <Cell value={row[2]} />
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  <Cell value={row[3]} />
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  <Cell value={row[4]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
