<div align="center">

# 🧳 Travel Rescue — Live Demo & Full Ecosystem Preview

**On-demand rental of pre-packed emergency "rescue kits" for travellers who lose access to their belongings** — the inverse of left-luggage. This repo is an **interactive, in-browser demo** of the customer app, plus a visual preview of the complete white-label ecosystem.

![Demo](https://img.shields.io/badge/build-interactive%20demo-4F46E5)
![Setup](https://img.shields.io/badge/setup-none-4F46E5)
![Browser](https://img.shields.io/badge/runs-100%25%20in%20your%20browser-4F46E5)
![Stack](https://img.shields.io/badge/stack-React%20·%20TypeScript%20·%20Tailwind-4F46E5)
![i18n](https://img.shields.io/badge/i18n-16%20languages%20·%20RTL-4F46E5)
![Ecosystem](https://img.shields.io/badge/ecosystem-7%20apps%20·%2060%2B%20screens%20%26%20tools-4F46E5)

</div>

> Runs entirely in your browser on **sample data** — no accounts, no keys, no setup. The real-time
> backend that powers the live product is **proprietary and not included in this public repo**.

---

## What is this?

Travel Rescue is a **white-label, multi-sided marketplace**. A traveller who's lost access to their
belongings rents a **pre-packed rescue kit** — clothing, essentials, a bag — from a network of
**trusted rescue points and agents**, picks it up or has it delivered, then returns it **sealed**.
Operators run the whole thing from an admin console; couriers move kits; service partners inspect and
recirculate them. Every kit is tracked through a **sealed custody chain** end-to-end.

This public repo lets you **try the customer app** in your browser and **see every surface** of the
platform through screenshots and walkthroughs.

## ⚡ Run it

The **customer app** is a prebuilt, fully-mocked bundle — just serve it:

```bash
npm start            # → http://localhost:8080/
```

The two included **web tools** run with their dev server:

```bash
cd website           # or: operator-toolkit
npm install
npm run dev          # open the printed localhost URL
```

Everything runs offline on sample data — the only network request is cosmetic map tiles.

## 📱 The customer app

| Nearby rescue points | Rescue point | Pick dates | Booking |
|:-:|:-:|:-:|:-:|
| <img src="docs/screenshots/customer-home.png" width="190"> | <img src="docs/screenshots/customer-spot.png" width="190"> | <img src="docs/screenshots/customer-dates.png" width="190"> | <img src="docs/screenshots/customer-booking.png" width="190"> |
| **Sealed-custody tracking** | **Rate your trip** | **Notifications** | **16 languages · RTL** |
| <img src="docs/screenshots/customer-track.png" width="190"> | <img src="docs/screenshots/customer-rate.png" width="190"> | <img src="docs/screenshots/customer-notifications.png" width="190"> | <img src="docs/screenshots/customer-languages.png" width="190"> |

Browse nearby points on a live map, **build a kit** (tier · size · how you get it — renting or keeping
each piece, with auto-buyout and optional Kit Protection), check out, and **track the sealed kit**
with a full custody & seal trail. Plus bookings, ratings, notifications, and 16 languages (incl. RTL).

## 🎬 Video walkthroughs

Short screen recordings in [`docs/videos/`](docs/videos/):

- **Customer app** — [`docs/videos/customer-walkthrough.webm`](docs/videos/customer-walkthrough.webm)
- **Marketing website** — [`docs/videos/website-walkthrough.webm`](docs/videos/website-walkthrough.webm)
- **Operator toolkit** — [`docs/videos/toolkit-walkthrough.webm`](docs/videos/toolkit-walkthrough.webm)

## 🌐 The full Travel Rescue ecosystem

Seven apps share one real-time platform. Three run here (the customer app + the two web tools); the
rest are previewed below.

### 🧳 Customer app — *~14 screens*
Onboarding → map → build-a-kit → checkout → sealed-custody tracking → bookings, profile, notifications. *(Runnable here.)*

### 🤝 Partner / agent app — *~8 screens*
The node-operator station: accept jobs, **sealed dispense & receive**, walk-in (phone-less) rentals, earnings.

<img src="docs/screenshots/partner-queue.png" width="190"> <img src="docs/screenshots/partner-job.png" width="190"> <img src="docs/screenshots/partner-walkin.png" width="190">

### 🧼 Servicer app — *~5 screens*
Quality-control inspection of returned sealed kits, outcomes (launder / recycle / dispose / return-to-brand), servicing earnings.

<img src="docs/screenshots/servicer-queue.png" width="190"> <img src="docs/screenshots/servicer-job.png" width="190"> <img src="docs/screenshots/servicer-earnings.png" width="190">

### 🚚 Driver app — *~6 screens*
Delivery & pickup legs, navigation, live location, per-leg earnings.

<img src="docs/screenshots/driver-queue.png" width="190"> <img src="docs/screenshots/driver-leg.png" width="190"> <img src="docs/screenshots/driver-earnings.png" width="190">

### 🛠️ Admin / operator console — *~18 screens*
Reservations, fees & payouts, payments, white-label theming, brand portal, markets, roles (RBAC), audit, and the v2 consoles (nodes, catalogue, custody, protection, deployment).

| <img src="docs/screenshots/admin-overview.png" width="410"> | <img src="docs/screenshots/admin-reservations.png" width="410"> |
|:-:|:-:|
| <img src="docs/screenshots/admin-fees.png" width="410"> | <img src="docs/screenshots/admin-white-label.png" width="410"> |

### 🌐 Marketing website — *~8 sections*  *(Runnable here.)*
| <img src="docs/screenshots/website-hero.png" width="410"> | <img src="docs/screenshots/website-kits.png" width="410"> |
|:-:|:-:|

### 🧰 Operator toolkit — *4 browser tools*  *(Runnable here.)*
Revenue estimator, data importer, ops-handbook generator, theme studio.

| <img src="docs/screenshots/toolkit-revenue.png" width="410"> | <img src="docs/screenshots/toolkit-theme.png" width="410"> |
|:-:|:-:|

### ⚙️ The shared backend
A single real-time backend powers the live ecosystem — authentication, the reservation & **sealed-custody**
lifecycle, modular pricing, the multi-party **fee & payout** engine, notifications, and white-label
theming. It is **proprietary and not included in this public repo.**

## ✨ The ecosystem at a glance

| App | What it does | In this repo |
|---|---|---|
| 🧳 Customer | Rent & track a rescue kit | ✅ interactive |
| 🌐 Website | White-label marketing funnel | ✅ source |
| 🧰 Operator toolkit | Revenue / data / handbook / theme tools | ✅ source |
| 🤝 Partner / agent | Node-operator station | 📸 preview |
| 🧼 Servicer | Quality-control & recirculation | 📸 preview |
| 🚚 Driver | Delivery & pickup legs | 📸 preview |
| 🛠️ Admin | Operator console | 📸 preview |

## 🚀 What you inherit — the complete white-label ecosystem

This demo is the tip of a complete, brandable platform. Full ownership includes the **entire
front-end suite**, the **proprietary real-time backend**, and a perpetual license to run, modify, and
deploy it under **your own brand, domains, and markets** — multi-currency, multi-language, white-label
to the core. Contact **[Developer contact]** to discuss licensing.

## License

Proprietary — see [`LICENSE`](LICENSE). Provided for evaluation only. Sample brands (Núa Basics, Vesta,
Lumen Care) are fictional; no third-party trademarks are included.

<div align="center"><sub>Travel Rescue — public demonstration build · fictional sample data · not for production use.</sub></div>
