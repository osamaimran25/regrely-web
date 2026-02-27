import { Check, Minus } from "lucide-react";

import { Card } from "@/components/ui/card";

const rows = [
  ["Users", "2", "7", "25", "Unlimited"],
  ["Domains", "1", "2", "10", "Unlimited"],
  ["DSAR volume", "10/mo", "75/mo", "500/mo", "Unlimited"],
  ["SLA tracking", "-", "Yes", "Yes + automation", "Custom"],
  ["ROPA + inventory", "Basic", "Full", "Full", "Advanced"],
  ["Compliance scans", "1 project", "3 projects", "20 projects", "Unlimited"],
  ["Reporting", "XLSX", "XLSX + DOCX", "PDF + signed ledger", "Custom"],
  ["Controls automation", "-", "-", "Yes", "Yes"],
  ["Integrations + SSO", "-", "-", "Optional", "Advanced"],
  ["Support", "Community", "Standard", "Priority", "Dedicated"],
  ["Tenant-isolated architecture", "Yes", "Yes", "Yes", "Yes"],
  ["Audit ledger export", "-", "Basic", "Tamper-evident", "Tamper-evident + custom"]
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
              <th className="px-4 py-3 font-semibold">FREE</th>
              <th className="px-4 py-3 font-semibold">PRO</th>
              <th className="px-4 py-3 font-semibold">PRO+</th>
              <th className="px-4 py-3 font-semibold">ENTERPRISE</th>
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
