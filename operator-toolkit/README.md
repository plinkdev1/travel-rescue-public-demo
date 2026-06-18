<div align="center">

# 🧰 Travel Rescue — Operator Toolkit

**The B2B client toolbox: plan your revenue · import your data · generate your ops handbook · brand it.**

![Type](https://img.shields.io/badge/type-B2B%20toolkit-4F46E5)
![Stack](https://img.shields.io/badge/stack-Vite%20%2B%20React%20%2B%20TS-000020)
![Styling](https://img.shields.io/badge/styling-Tailwind-38BDF8)
![Runs](https://img.shields.io/badge/runs-100%25%20client--side-1E8A5F)
![White-label](https://img.shields.io/badge/white--label-1%20config%20file-7A5AF8)
![License](https://img.shields.io/badge/license-Proprietary-16161A)

A standalone, **no-backend** SPA a B2B client uses to stand up and run their Travel Rescue deployment.
Everything runs in the browser — no data leaves the page.

</div>

---

## Screenshots

| Revenue estimator | Data importer |
|:---:|:---:|
| <img src="./docs/screenshots/01-revenue.png" width="380" /> | <img src="./docs/screenshots/02-data.png" width="380" /> |
| **Ops handbook generator** | **Theme studio (white-label)** |
| <img src="./docs/screenshots/03-handbook.png" width="380" /> | <img src="./docs/screenshots/04-theme.png" width="380" /> |

## Four tools

1. **Revenue estimator** — projects a P&L over 6 / 12 / 24 months from your supply + pricing assumptions,
   using the platform's *actual* revenue streams (rental commission, delivery fees, subscriptions,
   sponsored placements). Run-rate, breakeven, monthly chart, CSV export.
2. **Data importer** — paste a spreadsheet (CSV/TSV from Excel/Sheets), auto-map columns, validate, and
   export **import-ready JSON** for the Admin console (rescue-point "spots").
3. **Ops handbook generator** — turn a few operating parameters into a ready-to-use **operator handbook**
   (daily/weekly/monthly runbook, deposits & damage, compliance, incident response) as Markdown.
4. **Theme studio** — pick your brand colours, monogram and button style, **preview them live** on a mini
   app surface, and **export the `tenants.theme` JSON** to paste into Admin → White-label. Brand your
   deployment in minutes — the white-label story, made tangible.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static SPA → dist/  (deploy anywhere: Netlify, Vercel, S3, GitHub Pages)
```

## White-label (≈10 minutes)

1. Edit **`src/branding.config.ts`** — product name, toolkit name, tagline, support email, currency,
   monogram/logo.
2. Match the brand colours in **`tailwind.config.js`**.
3. Drop a logo in **`public/`** and set `logoSrc`.

## Notes

- The revenue model mirrors `docs/BUSINESS-MODEL.md` in the ecosystem repo; tune the assumptions to your
  market. Estimates are indicative.
- The importer targets the most common operator import (spots); more targets (tiers, catalogue) drop in as
  additional mappings.

## License

Proprietary — © 2026. No third-party trademarks; sample data is fictional.

## 🎥 Walkthrough

A screen recording of the main flows is committed at
[`docs/videos/toolkit-walkthrough.webm`](docs/videos/toolkit-walkthrough.webm) (1.1M). GitHub shows a **View raw**
download for `.webm` files — click through to download and play. _(Optional: host it on YouTube/Loom and paste the
link in the table below for an inline player.)_

| Demo | What it shows | Hosted |
|---|---|---|
| **Operator toolkit** | Operator tools — revenue / data / handbook / theme studio | _(add link)_ |

## 📄 Ownership & license

Proprietary software. Intellectual property is **retained by [Developer]**; **[Client]** holds a
**perpetual license** to run, modify, and deploy it (see [`LICENSE`](LICENSE)). Your deployment, data,
keys, and branding are yours. The builder's involvement ends at handover; ongoing support is a separate,
optional contract. Full statement: [`docs/OWNERSHIP.md`](docs/OWNERSHIP.md).
