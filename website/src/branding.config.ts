/**
 * White-label config for the marketing site. ALL copy + data lives here, so a
 * client rebrands the entire landing page from one file (plus the colours in
 * `tailwind.config.js` and assets in `public/`). No section component needs edits.
 */
export const site = {
  brand: "Travel Rescue",
  monogram: "TR",
  logoSrc: "",
  nav: ["How it works", "Kits", "Delivery", "Hosts", "Cities", "FAQ"],
  cta: { primary: "Find a kit", secondary: "Earn with us", login: "Log in" },

  hero: {
    title: "Rescue kits near you",
    subtitle: "Lost your bags? Get back on your feet — from €19.95 / day.",
    searchLocation: "Where are you?",
    searchDates: "When do you need it?",
    searchCta: "Find a kit",
  },

  // Trust metrics row (3 big numbers)
  metrics: [
    { value: "12,000+", label: "rescue points worldwide" },
    { value: "100,000s", label: "kits handed out" },
    { value: "4.9/5", label: "traveller rating" },
  ],

  // Hero rating + trust chips
  ratingLine: "4.9/5 from 100,000s of rescued travellers",
  trustChips: ["Free cancellation", "Deposit protected", "One-way returns", "24/7 support"],

  // "As featured in" — brand-clean placeholder outlets (rename per client)
  press: ["The Wanderer", "Globe Weekly", "Transit Times", "Nomad Digest", "City Compass"],

  // Kit tiers (pricing) — every item listed before you book
  kitTiers: [
    {
      name: "Essentials",
      price: "€19.95",
      per: "/ day",
      popular: false,
      blurb: "The basics to get through a day.",
      items: ["1 outfit (top + bottoms)", "Underwear + socks", "Travel toiletries", "Foldable day bag"],
    },
    {
      name: "Comfort",
      price: "€29.95",
      per: "/ day",
      popular: true,
      blurb: "Most popular — a couple of days, sorted.",
      items: ["2 outfits + a layer", "Footwear", "Full hygiene kit", "Towel + travel adapter", "Weekender bag"],
    },
    {
      name: "Premium",
      price: "€44.95",
      per: "/ day",
      popular: false,
      blurb: "Everything, for longer trips.",
      items: ["3 outfits + jacket", "Footwear + accessories", "Premium toiletries", "Tech kit (charger + adapter)", "Cabin trolley"],
    },
  ],

  // Coverage band
  coverage: {
    title: "A rescue point around every corner",
    body: "Cafés, shops, hotels, lockers and short-stay hosts form a dense, growing network — so help is always close, whatever you've lost.",
    stats: [
      { value: "12,000+", label: "pickup & return points" },
      { value: "30+", label: "cities live" },
      { value: "< 20 min", label: "median pickup time" },
      { value: "1-way", label: "returns across cities" },
    ],
  },

  // Closing call-to-action band
  finalCta: {
    title: "Lost your bags? Get rescued in minutes.",
    body: "Find a pre-packed rescue kit near you, or have one delivered — and return it anywhere.",
    primary: "Find a kit",
    secondary: "Become a partner",
  },

  // Social proof — auto-rotating-feel review cards
  reviews: [
    { initials: "ML", name: "Maria L.", place: "Lisbon", time: "2 min ago", stars: 5, text: "My bag was stolen at the airport. Had a full Comfort kit in 20 minutes. Saved my whole trip." },
    { initials: "JT", name: "James T.", place: "London", time: "14 min ago", stars: 5, text: "Lost my phone and wallet. The host set me up on the spot — didn't need anything but my face." },
    { initials: "SK", name: "Sofia K.", place: "Porto", time: "1 hr ago", stars: 5, text: "Delivery to my hotel in under an hour. Clean, well-packed, exactly as described." },
    { initials: "AD", name: "Andre D.", place: "Madrid", time: "3 hr ago", stars: 5, text: "Returned it at a different city than I picked up. Deposit back same day. Brilliant." },
  ],

  steps: [
    { icon: "📍", title: "Book online", body: "Search your city or use your location to find nearby rescue points and hosts." },
    { icon: "🎒", title: "Pick up or get it delivered", body: "Grab it from a spot, have a driver bring it, or walk into a host — even with no phone." },
    { icon: "✅", title: "Use it & return it", body: "Show your QR or code, use your kit, return it anywhere. Your deposit is released on return." },
  ],

  delivery: {
    title: "Travel hands-free — get your kit delivered",
    body: "Don't want to detour? A driver brings your rescue kit straight to you and collects it when you're done. Track them live, end to end.",
    cta: "See delivery areas",
  },

  app: {
    title: "Get the app, get 10% back",
    body: "Book in seconds, track deliveries live, and earn 10% back in credits on every rental. iOS & Android.",
    badges: ["App Store", "Google Play"],
  },

  pillars: [
    { icon: "🌍", title: "Everywhere you travel", body: "Cafés, shops, hotels, lockers and short-stay hosts — a dense network that grows city by city." },
    { icon: "📦", title: "Ready-packed kits", body: "Clothing, footwear, hygiene and a bag — curated tiers, listed item-by-item before you book." },
    { icon: "⭐", title: "4.9/5 rated", body: "Thousands of travellers rescued. Every spot, driver and servicer is rated separately." },
    { icon: "🔄", title: "Free cancellation", body: "Plans change. Cancel before pickup at no cost; flexible dates and one-way returns." },
    { icon: "🛡️", title: "Deposit protection", body: "A refundable deposit, held securely and released the moment you return your kit." },
    { icon: "💬", title: "24/7 support", body: "In-app chat with your handler or driver, plus round-the-clock help when you need it." },
  ],

  // Brand-clean comparison (no competitor names)
  comparison: {
    columns: ["Travel Rescue", "Buying replacements", "Going without"],
    rows: [
      { feature: "Ready in minutes", values: ["✓", "Hours of shopping", "—"] },
      { feature: "Cost", values: ["from €19.95/day", "€100s up-front", "Free but miserable"] },
      { feature: "Return / reuse", values: ["✓ returned & reused", "Landfill", "—"] },
      { feature: "Delivered to you", values: ["✓", "—", "—"] },
      { feature: "Works with no phone", values: ["✓ via host", "✓", "✓"] },
    ],
  },

  hosts: {
    title: "Turn your front desk into a rescue point",
    body: "Short-stay hosts, cafés, shops, hotels and lockers earn by handing out and taking back kits — and can rent to a walk-in traveller who lost their phone, right from your place. You set your hours; we handle payments and payouts.",
    points: ["Earn on every handover & return", "No phone needed for walk-ins", "Weekly payouts on regulated rails", "Live in your city in days"],
    cta: "Become a partner",
  },

  // City directory grouped by region
  citiesByRegion: {
    Europe: ["Lisbon", "London", "Porto", "Madrid", "Paris", "Berlin", "Amsterdam", "Barcelona", "Rome", "Dublin", "Prague", "Vienna"],
    "North America": ["New York", "San Francisco", "Toronto", "Chicago", "Miami", "Los Angeles"],
    "Asia-Pacific": ["Tokyo", "Singapore", "Sydney", "Bangkok", "Seoul", "Melbourne"],
  },

  faqs: [
    { q: "What's in a kit?", a: "Tier-dependent: clothing, footwear, hygiene items and a bag. Every item is listed before you book." },
    { q: "I lost my phone too — can I still rent?", a: "Yes. Any partner host can set you up on the spot and hand you a pickup code — no app or phone required on your side." },
    { q: "How does the deposit work?", a: "A refundable deposit is held at booking and released when you return the kit in good condition." },
    { q: "Can I return in a different city?", a: "Yes — pick up in one city and return in another. Choose your return point at checkout." },
    { q: "Where are you available?", a: "We launch city-by-city with local partners. Don't see your city? Ask your host or sign up as a partner." },
  ],

  footer: {
    tagline: "The on-demand travel rescue-kit platform.",
    columns: [
      { title: "Company", links: ["About", "Careers", "Press", "Blog"] },
      { title: "Travellers", links: ["Find a kit", "Delivery", "How it works", "Cities"] },
      { title: "Partners", links: ["Become a host", "Drive with us", "Service kits", "Brand partnerships"] },
      { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Accessibility"] },
    ],
    email: "hello@yourcompany.example",
    note: "A white-label platform operated by independent partners. Sample content; no third-party trademarks.",
  },
};

export type Site = typeof site;
