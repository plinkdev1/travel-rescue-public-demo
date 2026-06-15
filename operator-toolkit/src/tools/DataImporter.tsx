import { useMemo, useState } from "react";

/**
 * Turn a spreadsheet (CSV/TSV pasted from Excel/Sheets) into import-ready JSON for
 * the Admin console. Targets the most common operator import: rescue-point "spots".
 * Runs entirely in the browser.
 */

type TargetField = { key: string; label: string; required?: boolean; hint?: string };
const TARGET: TargetField[] = [
  { key: "name", label: "name", required: true },
  { key: "type", label: "type", hint: "cafe|shop|hotel|locker|operated|host" },
  { key: "region", label: "region", required: true },
  { key: "lat", label: "lat", required: true },
  { key: "lng", label: "lng", required: true },
  { key: "address", label: "address" },
];

const SAMPLE = `name\ttype\tregion\tlat\tlng\taddress
Central Café\tcafe\tLisbon\t38.7107\t-9.1365\tRua Augusta 1
Old Town Locker\tlocker\tLisbon\t38.7139\t-9.1394\tPraça do Comércio
Riverside Host\thost\tPorto\t41.1410\t-8.6130\tRibeira 22`;

function parse(text: string): { headers: string[]; rows: string[][] } {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (!lines.length) return { headers: [], rows: [] };
  const delim = lines[0].includes("\t") ? "\t" : ",";
  const split = (l: string) => l.split(delim).map((c) => c.trim());
  return { headers: split(lines[0]), rows: lines.slice(1).map(split) };
}

function autoMap(headers: string[]): Record<string, string> {
  const m: Record<string, string> = {};
  for (const f of TARGET) {
    const hit = headers.find((h) => h.toLowerCase().replace(/[^a-z]/g, "") === f.key.toLowerCase());
    if (hit) m[f.key] = hit;
  }
  return m;
}

export default function DataImporter() {
  const [text, setText] = useState(SAMPLE);
  const { headers, rows } = useMemo(() => parse(text), [text]);
  const [map, setMap] = useState<Record<string, string>>({});

  // Re-run auto-map whenever the headers change and the user hasn't mapped yet.
  const effectiveMap = useMemo(() => {
    const auto = autoMap(headers);
    return { ...auto, ...map };
  }, [headers, map]);

  const mapped = useMemo(() => {
    const idx = (col: string) => headers.indexOf(col);
    return rows.map((r) => {
      const o: Record<string, string> = {};
      for (const f of TARGET) {
        const col = effectiveMap[f.key];
        o[f.key] = col && idx(col) >= 0 ? r[idx(col)] ?? "" : "";
      }
      return o;
    });
  }, [rows, headers, effectiveMap]);

  const errors = useMemo(() => {
    const errs: string[] = [];
    mapped.forEach((row, i) => {
      for (const f of TARGET.filter((x) => x.required)) {
        if (!row[f.key]) errs.push(`Row ${i + 1}: missing ${f.label}`);
      }
      if (row.lat && isNaN(Number(row.lat))) errs.push(`Row ${i + 1}: lat not a number`);
      if (row.lng && isNaN(Number(row.lng))) errs.push(`Row ${i + 1}: lng not a number`);
    });
    return errs;
  }, [mapped]);

  const json = useMemo(
    () =>
      JSON.stringify(
        {
          target: "spots",
          generatedAt: new Date().toISOString(),
          count: mapped.length,
          rows: mapped.map((r) => ({
            name: r.name,
            type: r.type || "operated",
            region: r.region,
            geo: { lat: Number(r.lat), lng: Number(r.lng) },
            addressFormatted: r.address || r.name,
          })),
        },
        null,
        2,
      ),
    [mapped],
  );

  const download = () => {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "spots-import.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-tile border border-line bg-white p-5">
        <h2 className="text-base font-extrabold">1 · Paste your spreadsheet</h2>
        <p className="mt-1 text-xs text-subtle">Copy cells from Excel/Google Sheets (CSV or TSV). First row = headers.</p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
          className="mt-3 h-44 w-full rounded-tile border border-line bg-canvas p-3 font-mono text-xs outline-none focus:border-brand"
        />
        <h3 className="mt-4 text-sm font-extrabold">2 · Map columns</h3>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {TARGET.map((f) => (
            <label key={f.key} className="text-xs font-semibold text-subtle">
              {f.label}{f.required ? " *" : ""}
              <select
                value={effectiveMap[f.key] ?? ""}
                onChange={(e) => setMap((p) => ({ ...p, [f.key]: e.target.value }))}
                className="mt-1 w-full rounded-tile border border-line bg-canvas px-2 py-1.5 text-xs font-bold text-ink"
              >
                <option value="">— none —</option>
                {headers.map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </section>

      <section className="rounded-tile border border-line bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold">3 · Preview &amp; export</h2>
          <button
            onClick={download}
            disabled={!mapped.length || errors.length > 0}
            className="rounded-pill bg-brand px-3 py-1 text-xs font-bold text-white disabled:opacity-40"
          >
            Download JSON
          </button>
        </div>
        <p className="mt-1 text-xs text-subtle">{mapped.length} rows · {errors.length} issue(s)</p>

        {errors.length > 0 ? (
          <ul className="mt-2 max-h-24 overflow-auto rounded-tile bg-canvas p-2 text-xs text-warn">
            {errors.slice(0, 12).map((e, i) => <li key={i}>• {e}</li>)}
          </ul>
        ) : (
          <p className="mt-2 rounded-tile bg-brandsoft p-2 text-xs font-semibold text-brand">✓ Ready to import — paste this JSON into Admin → Markets/Spots import.</p>
        )}

        <pre className="mt-3 h-72 overflow-auto rounded-tile border border-line bg-canvas p-3 text-[11px] leading-snug">{json}</pre>
      </section>
    </div>
  );
}
