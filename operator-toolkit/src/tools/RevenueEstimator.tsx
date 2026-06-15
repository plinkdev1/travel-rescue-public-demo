import { useMemo, useState } from "react";
import { branding } from "../branding.config";
import {
  Assumptions,
  DEFAULT_ASSUMPTIONS,
  MonthRow,
  money,
  project,
  summarize,
} from "../lib/businessModel";

const FIELDS: { key: keyof Assumptions; label: string; step?: number; suffix?: string }[] = [
  { key: "regions", label: "Regions" },
  { key: "spotsPerRegion", label: "Spots / region" },
  { key: "reservationsPerSpotPerDay", label: "Reservations / spot / day", step: 0.1 },
  { key: "avgRentalValue", label: "Avg rental value", suffix: branding.currencySymbol },
  { key: "platformCommissionPct", label: "Platform commission", suffix: "%" },
  { key: "deliverySharePct", label: "Delivery share", suffix: "%" },
  { key: "deliveryFee", label: "Net delivery fee", suffix: branding.currencySymbol },
  { key: "subscribers", label: "Subscribers" },
  { key: "subscriptionMonthly", label: "Subscription / mo", suffix: branding.currencySymbol },
  { key: "sponsoredMonthly", label: "Sponsored / mo", suffix: branding.currencySymbol },
  { key: "monthlyGrowthPct", label: "MoM growth", suffix: "%" },
  { key: "fixedMonthlyCost", label: "Fixed cost / mo", suffix: branding.currencySymbol },
];

const sym = branding.currencySymbol;

function Bars({ rows }: { rows: MonthRow[] }) {
  const max = Math.max(...rows.map((r) => r.revenue), 1);
  return (
    <div className="flex h-32 items-end gap-1">
      {rows.map((r) => (
        <div
          key={r.month}
          title={`Month ${r.month}: ${money(r.revenue, sym)}`}
          className="flex-1 rounded-t bg-brand"
          style={{ height: `${Math.max(2, (r.revenue / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

export default function RevenueEstimator() {
  const [a, setA] = useState<Assumptions>(DEFAULT_ASSUMPTIONS);
  const [months, setMonths] = useState(12);
  const rows = useMemo(() => project(a, months), [a, months]);
  const s = useMemo(() => summarize(rows), [rows]);

  const set = (k: keyof Assumptions, v: string) =>
    setA((p) => ({ ...p, [k]: Number(v) || 0 }));

  const exportCsv = () => {
    const head = "month,reservations,commission,delivery,subscriptions,sponsored,revenue,cost,net,cumulativeNet";
    const body = rows
      .map((r) =>
        [r.month, r.reservations, r.commission, r.delivery, r.subscriptions, r.sponsored, r.revenue, r.cost, r.net, r.cumulativeNet]
          .map((n) => Math.round(Number(n)))
          .join(","),
      )
      .join("\n");
    const blob = new Blob([head + "\n" + body], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `travel-rescue-projection-${months}mo.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="rounded-tile border border-line bg-white p-5 lg:col-span-1">
        <h2 className="text-base font-extrabold">Assumptions</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {FIELDS.map((f) => (
            <label key={f.key} className="text-xs font-semibold text-subtle">
              {f.label}
              <div className="mt-1 flex items-center rounded-tile border border-line bg-canvas px-2">
                <input
                  type="number"
                  step={f.step ?? 1}
                  value={a[f.key]}
                  onChange={(e) => set(f.key, e.target.value)}
                  className="w-full bg-transparent py-2 text-sm font-bold text-ink outline-none"
                />
                {f.suffix ? <span className="pl-1 text-xs text-subtle">{f.suffix}</span> : null}
              </div>
            </label>
          ))}
        </div>
      </section>

      <section className="rounded-tile border border-line bg-white p-5 lg:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold">Projection</h2>
          <div className="flex gap-1">
            {[6, 12, 24].map((m) => (
              <button
                key={m}
                onClick={() => setMonths(m)}
                className={`rounded-pill px-3 py-1 text-xs font-bold ${months === m ? "bg-brand text-white" : "bg-canvas text-subtle"}`}
              >
                {m} mo
              </button>
            ))}
            <button onClick={exportCsv} className="ml-2 rounded-pill bg-brandsoft px-3 py-1 text-xs font-bold text-brand">
              Export CSV
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label={`Revenue (${months}mo)`} value={money(s.revenue, sym)} />
          <Stat label={`Net (${months}mo)`} value={money(s.net, sym)} tone={s.net >= 0 ? "ok" : "warn"} />
          <Stat label="Run-rate (ARR)" value={money(s.runRate, sym)} />
          <Stat label="Breakeven" value={s.breakevenMonth ? `Month ${s.breakevenMonth}` : "—"} />
        </div>

        <div className="mt-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-subtle">Monthly revenue</p>
          <Bars rows={rows} />
        </div>

        <div className="mt-5 overflow-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="text-subtle">
                <th className="px-2 py-1 text-left font-bold">Mo</th>
                <th className="px-2 py-1 font-bold">Reserv.</th>
                <th className="px-2 py-1 font-bold">Commission</th>
                <th className="px-2 py-1 font-bold">Subs</th>
                <th className="px-2 py-1 font-bold">Revenue</th>
                <th className="px-2 py-1 font-bold">Net</th>
              </tr>
            </thead>
            <tbody>
              {rows.filter((r) => months <= 12 || r.month % 2 === 0).map((r) => (
                <tr key={r.month} className="border-t border-line/60">
                  <td className="px-2 py-1 text-left font-semibold">{r.month}</td>
                  <td className="px-2 py-1">{Math.round(r.reservations).toLocaleString("en")}</td>
                  <td className="px-2 py-1">{money(r.commission, sym)}</td>
                  <td className="px-2 py-1">{money(r.subscriptions, sym)}</td>
                  <td className="px-2 py-1 font-bold">{money(r.revenue, sym)}</td>
                  <td className={`px-2 py-1 font-bold ${r.net >= 0 ? "text-ok" : "text-warn"}`}>{money(r.net, sym)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-subtle">
          Indicative only — mirrors the platform's revenue streams (commission · delivery · subscriptions ·
          sponsored). Tune the assumptions to your market.
        </p>
      </section>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "ok" | "warn" }) {
  return (
    <div className="rounded-tile bg-canvas p-3">
      <p className="text-[11px] font-bold uppercase tracking-wide text-subtle">{label}</p>
      <p className={`mt-0.5 text-lg font-extrabold ${tone === "ok" ? "text-ok" : tone === "warn" ? "text-warn" : "text-ink"}`}>
        {value}
      </p>
    </div>
  );
}
