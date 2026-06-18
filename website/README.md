<div align="center">

# 🌐 Travel Rescue — Website

**The brandable marketing landing site** for the Travel Rescue platform.

![Type](https://img.shields.io/badge/type-marketing%20site-4F46E5)
![Stack](https://img.shields.io/badge/stack-Vite%20%2B%20React%20%2B%20TS-000020)
![Styling](https://img.shields.io/badge/styling-Tailwind-38BDF8)
![White-label](https://img.shields.io/badge/white--label-1%20config%20file-7A5AF8)
![Build](https://img.shields.io/badge/build-passing-1E8A5F)
![License](https://img.shields.io/badge/license-Proprietary-16161A)

A fast, static, **fully config-driven** marketing site — rebrand the whole page from one file.

</div>

---

## Screenshots

| Hero · rating, search & trust chips | How it works |
|:---:|:---:|
| <img src="./docs/screenshots/01-hero.png" width="420" /> | <img src="./docs/screenshots/02-how-it-works.png" width="420" /> |
| **Kit tiers & pricing** | **Delivery callout** |
| <img src="./docs/screenshots/03-kits.png" width="420" /> | <img src="./docs/screenshots/04-delivery.png" width="420" /> |
| **City directory** | **FAQ** |
| <img src="./docs/screenshots/05-cities.png" width="420" /> | <img src="./docs/screenshots/06-faq.png" width="420" /> |

> Full-page capture: [`docs/screenshots/07-full.png`](docs/screenshots/07-full.png).

## What's on the page

A complete conversion landing page: a **search hero** (rating chip + location/dates + trust chips), a
**live-reviews** strip, an **"as featured in" press** row, **how-it-works** (3 steps), a **kit-tiers pricing**
section (Essentials/Comfort/Premium, item-by-item), a **delivery** callout, a **coverage** stats band, an
**app-download** section, a **value-pillars** grid, a brand-clean **comparison table**, a **host/partner**
band (incl. the phone-less walk-in story), a **city directory by region**, an FAQ accordion, a closing
**call-to-action** band, and a rich multi-column footer.

## Run / build

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site → dist/  (deploy to Netlify / Vercel / S3 / GitHub Pages / any CDN)
```

## Rebrand (≈10 minutes)

1. **`src/branding.config.ts`** — brand name, nav, hero copy + metrics, reviews, the 3 steps, delivery/app
   sections, value pillars, comparison rows, host band, cities-by-region, FAQs, footer. **All copy lives here.**
2. **`tailwind.config.js`** — brand colours (`brand`, `branddark`, `brandsoft`, `accent`, …).
3. **`public/`** — drop a logo and set `logoSrc`; favicon + social image as needed.

No section component needs editing — `src/App.tsx` renders entirely from the config.

## Design notes

Modern marketplace-landing layout (search hero, trust metrics, social proof, comparison). It is an
**original, brand-clean design** — no third-party logos, screenshots or trademarked copy. Sample
cities/prices/reviews are placeholders.

## License

Proprietary — © 2026. Sample content; no third-party trademarks.

## 🎥 Walkthrough

A screen recording of the main flows is committed at
[`docs/videos/website-walkthrough.webm`](docs/videos/website-walkthrough.webm) (1.8M). GitHub shows a **View raw**
download for `.webm` files — click through to download and play. _(Optional: host it on YouTube/Loom and paste the
link in the table below for an inline player.)_

| Demo | What it shows | Hosted |
|---|---|---|
| **Marketing website** | Full scroll: hero → how it works → coverage → pricing → CTA | _(add link)_ |

## 📄 Ownership & license

Proprietary software. Intellectual property is **retained by [Developer]**; **[Client]** holds a
**perpetual license** to run, modify, and deploy it (see [`LICENSE`](LICENSE)). Your deployment, data,
keys, and branding are yours. The builder's involvement ends at handover; ongoing support is a separate,
optional contract. Full statement: [`docs/OWNERSHIP.md`](docs/OWNERSHIP.md).
