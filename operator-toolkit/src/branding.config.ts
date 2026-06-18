/**
 * White-label config — rebrand the whole toolkit in one place (≈10 minutes).
 * Change these values + the matching colours in `tailwind.config.js`, drop a logo
 * in `public/`, and you're done. No other file needs editing.
 */
export const branding = {
  productName: "Travel Rescue",
  toolkitName: "Operator Toolkit",
  tagline: "Plan your revenue · import your data · generate your ops handbook.",
  supportEmail: "support@yourcompany.example",
  // Currency used across the estimator + handbook (symbol + ISO).
  currencySymbol: "€",
  currencyCode: "EUR",
  // Optional logo in /public; falls back to a monogram if empty.
  logoSrc: "",
  monogram: "TR",
};

export type Branding = typeof branding;
