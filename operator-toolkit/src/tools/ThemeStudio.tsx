import { useMemo, useState } from "react";
import { branding } from "../branding.config";

/**
 * Theme Studio — pick your brand colours, monogram and button style, preview them
 * on a mini app surface, and export the `tenants.theme` JSON to paste into the
 * Admin → White-label editor. Standing up a white-label deployment, visually.
 */

type Btn = "pill" | "rounded" | "square";
const RADIUS: Record<Btn, string> = { pill: "999px", rounded: "12px", square: "4px" };

function Swatch({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center justify-between gap-3 rounded-tile border border-line bg-canvas px-3 py-2">
      <span className="text-xs font-semibold text-subtle">{label}</span>
      <span className="flex items-center gap-2">
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="h-7 w-9 cursor-pointer rounded border border-line bg-white" />
        <input value={value} onChange={(e) => onChange(e.target.value)} className="w-20 bg-transparent text-right text-xs font-bold text-ink outline-none" />
      </span>
    </label>
  );
}

export default function ThemeStudio() {
  const [name, setName] = useState(branding.productName);
  const [monogram, setMonogram] = useState(branding.monogram);
  const [primary, setPrimary] = useState("#4F46E5");
  const [accent, setAccent] = useState("#12A594");
  const [ink, setInk] = useState("#16161A");
  const [btn, setBtn] = useState<Btn>("pill");

  const radius = RADIUS[btn];
  const themeJson = useMemo(
    () =>
      JSON.stringify(
        {
          name,
          theme: {
            colors: { primary, accent, ink, canvas: "#F6F7FB" },
            typography: { fontFamily: "system-ui" },
            buttonStyle: btn,
            logos: { monogram },
          },
        },
        null,
        2,
      ),
    [name, monogram, primary, accent, ink, btn],
  );

  const copy = () => navigator.clipboard?.writeText(themeJson).catch(() => {});
  const download = () => {
    const blob = new Blob([themeJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.toLowerCase().replace(/\s+/g, "-")}-theme.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-tile border border-line bg-white p-5">
        <h2 className="text-base font-extrabold">Your brand</h2>
        <div className="mt-3 space-y-3">
          <label className="block text-xs font-semibold text-subtle">
            Brand name
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-tile border border-line bg-canvas px-3 py-2 text-sm font-bold text-ink outline-none focus:border-brand" />
          </label>
          <label className="block text-xs font-semibold text-subtle">
            Monogram (2 letters)
            <input value={monogram} maxLength={3} onChange={(e) => setMonogram(e.target.value.toUpperCase())} className="mt-1 w-24 rounded-tile border border-line bg-canvas px-3 py-2 text-sm font-bold text-ink outline-none focus:border-brand" />
          </label>
          <Swatch label="Primary" value={primary} onChange={setPrimary} />
          <Swatch label="Accent" value={accent} onChange={setAccent} />
          <Swatch label="Ink (text)" value={ink} onChange={setInk} />
          <div>
            <p className="text-xs font-semibold text-subtle">Button style</p>
            <div className="mt-1 flex gap-1">
              {(["pill", "rounded", "square"] as Btn[]).map((b) => (
                <button key={b} onClick={() => setBtn(b)} className={`flex-1 px-3 py-1.5 text-xs font-bold ${btn === b ? "bg-brand text-white" : "bg-canvas text-subtle"}`} style={{ borderRadius: RADIUS[b] }}>
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        {/* Live preview — uses the chosen theme via inline styles */}
        <div className="overflow-hidden rounded-tile border border-line" style={{ background: "#F6F7FB" }}>
          <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#fff", borderBottom: "1px solid #E7E7EE" }}>
            <div className="flex h-8 w-8 items-center justify-center text-xs font-extrabold text-white" style={{ background: primary, borderRadius: radius }}>{monogram}</div>
            <span className="text-sm font-extrabold" style={{ color: ink }}>{name}</span>
          </div>
          <div className="p-4">
            <div className="rounded-tile bg-white p-4" style={{ border: "1px solid #E7E7EE" }}>
              <p className="text-sm font-extrabold" style={{ color: ink }}>Comfort rescue kit</p>
              <p className="mt-0.5 text-xs" style={{ color: "#6B6B76" }}>2 outfits · footwear · hygiene · bag</p>
              <p className="mt-2 text-lg font-extrabold" style={{ color: ink }}>€29.95 <span className="text-xs" style={{ color: "#6B6B76" }}>/ day</span></p>
              <div className="mt-3 flex gap-2">
                <button className="px-4 py-2 text-sm font-bold text-white" style={{ background: primary, borderRadius: radius }}>Book now</button>
                <button className="px-4 py-2 text-sm font-bold" style={{ background: "transparent", color: accent, border: `1.5px solid ${accent}`, borderRadius: radius }}>Details</button>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-bold text-white" style={{ background: accent, borderRadius: radius }}>Delivered</span>
              <span className="text-xs" style={{ color: "#6B6B76" }}>Live preview — your theme, applied</span>
            </div>
          </div>
        </div>

        <div className="rounded-tile border border-line bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold">Export theme</h2>
            <div className="flex gap-2">
              <button onClick={copy} className="rounded-pill bg-brandsoft px-3 py-1 text-xs font-bold text-brand">Copy</button>
              <button onClick={download} className="rounded-pill bg-brand px-3 py-1 text-xs font-bold text-white">Download .json</button>
            </div>
          </div>
          <pre className="mt-3 max-h-56 overflow-auto rounded-tile border border-line bg-canvas p-3 text-[11px] leading-snug text-ink">{themeJson}</pre>
          <p className="mt-2 text-[11px] text-subtle">Paste into <b>Admin → White-label</b>; it overrides the design tokens for every app at runtime.</p>
        </div>
      </section>
    </div>
  );
}
