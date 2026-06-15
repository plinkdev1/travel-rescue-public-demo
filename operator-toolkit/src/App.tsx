import { useState } from "react";
import { branding } from "./branding.config";
import RevenueEstimator from "./tools/RevenueEstimator";
import DataImporter from "./tools/DataImporter";
import HandbookGenerator from "./tools/HandbookGenerator";
import ThemeStudio from "./tools/ThemeStudio";

type Tab = "revenue" | "data" | "handbook" | "theme";
const TABS: { id: Tab; label: string; hint: string }[] = [
  { id: "revenue", label: "Revenue estimator", hint: "Project P&L from your supply + pricing" },
  { id: "data", label: "Data importer", hint: "Turn a spreadsheet into import-ready data" },
  { id: "handbook", label: "Ops handbook", hint: "Generate your operator runbook" },
  { id: "theme", label: "Theme studio", hint: "Brand it + export your white-label theme" },
];

export default function App() {
  const [tab, setTab] = useState<Tab>("revenue");

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
          {branding.logoSrc ? (
            <img src={branding.logoSrc} alt={branding.productName} className="h-9 w-9 rounded-pill" />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-pill bg-brand text-sm font-extrabold text-white">
              {branding.monogram}
            </div>
          )}
          <div>
            <p className="text-lg font-extrabold leading-none">{branding.productName}</p>
            <p className="text-xs text-subtle">{branding.toolkitName}</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <h1 className="text-2xl font-extrabold">{branding.toolkitName}</h1>
        <p className="mt-1 text-subtle">{branding.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {TABS.map((tdef) => (
            <button
              key={tdef.id}
              onClick={() => setTab(tdef.id)}
              className={`rounded-pill px-4 py-2 text-sm font-bold transition ${
                tab === tdef.id ? "bg-brand text-white" : "bg-white text-subtle hover:text-ink"
              }`}
            >
              {tdef.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-subtle">{TABS.find((x) => x.id === tab)?.hint}</p>

        <div className="mt-6">
          {tab === "revenue" ? <RevenueEstimator /> : null}
          {tab === "data" ? <DataImporter /> : null}
          {tab === "handbook" ? <HandbookGenerator /> : null}
          {tab === "theme" ? <ThemeStudio /> : null}
        </div>
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-8 text-xs text-subtle">
        {branding.productName} {branding.toolkitName} · runs entirely in your browser · no data leaves this
        page. Questions? {branding.supportEmail}
      </footer>
    </div>
  );
}
