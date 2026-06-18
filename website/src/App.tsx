import { site } from "./branding.config";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {site.logoSrc ? (
        <img src={site.logoSrc} alt={site.brand} className="h-8 w-8 rounded-pill" />
      ) : (
        <div className="flex h-8 w-8 items-center justify-center rounded-pill bg-brand text-sm font-extrabold text-white">{site.monogram}</div>
      )}
      <span className={`text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>{site.brand}</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-white/85 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Logo />
        <nav className="hidden gap-7 lg:flex">
          {site.nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase().replace(/\W+/g, "-")}`} className="text-sm font-semibold text-subtle hover:text-ink">{n}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#hosts" className="hidden rounded-pill px-4 py-2 text-sm font-bold text-brand hover:bg-brandsoft sm:block">{site.cta.secondary}</a>
          <a href="#" className="hidden text-sm font-semibold text-subtle hover:text-ink sm:block">{site.cta.login}</a>
          <a href="#hero" className="rounded-pill bg-brand px-4 py-2 text-sm font-bold text-white hover:bg-branddark">{site.cta.primary}</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const h = site.hero;
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brandsoft via-white to-canvas" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-pill border border-line bg-white/70 px-4 py-1.5 text-sm font-bold text-ink shadow-sm">
          <span className="text-accent">★★★★★</span>
          <span>{site.ratingLine}</span>
        </div>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">{h.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-subtle">{h.subtitle}</p>

        {/* Search card */}
        <div className="mx-auto mt-9 flex max-w-2xl flex-col gap-2 rounded-[20px] border border-line bg-white p-2 shadow-xl sm:flex-row">
          <div className="flex flex-1 items-center gap-2 rounded-[14px] px-4 py-3">
            <span className="text-subtle">📍</span>
            <input placeholder={h.searchLocation} className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-subtle" />
          </div>
          <div className="hidden w-px bg-line sm:block" />
          <div className="flex flex-1 items-center gap-2 rounded-[14px] px-4 py-3">
            <span className="text-subtle">📅</span>
            <input placeholder={h.searchDates} className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-subtle" />
          </div>
          <button className="rounded-[14px] bg-brand px-7 py-3 font-bold text-white hover:bg-branddark">{h.searchCta}</button>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {site.trustChips.map((c) => (
            <span key={c} className="rounded-pill bg-white/70 px-3 py-1 text-xs font-semibold text-subtle ring-1 ring-line">✓ {c}</span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {site.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-2xl font-extrabold text-ink">{m.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="border-y border-line bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center justify-center gap-2 text-sm font-bold text-ink">
          <span className="text-accent">★★★★★</span> Rescued travellers, in real time
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.reviews.map((r) => (
            <div key={r.name} className="rounded-tile border border-line bg-canvas p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-pill bg-brand text-xs font-bold text-white">{r.initials}</div>
                <div>
                  <p className="text-sm font-bold text-ink">{r.name}</p>
                  <p className="text-xs text-subtle">{r.place} · {r.time}</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-accent">{"★".repeat(r.stars)}</p>
              <p className="mt-1 text-sm text-subtle">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink">How it works</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {site.steps.map((s, i) => (
          <div key={s.title} className="rounded-tile border border-line bg-white p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-pill bg-brandsoft text-2xl">{s.icon}</div>
            <p className="mt-3 text-xs font-bold text-brand">STEP {i + 1}</p>
            <h3 className="mt-1 text-lg font-extrabold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm text-subtle">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section id="delivery" className="mx-auto max-w-6xl px-6 pb-4">
      <div className="grid items-center gap-8 rounded-[28px] bg-gradient-to-br from-brand to-accent p-10 text-white lg:grid-cols-2">
        <div>
          <p className="inline-block rounded-pill bg-white/20 px-3 py-1 text-xs font-bold">New</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{site.delivery.title}</h2>
          <p className="mt-3 text-white/90">{site.delivery.body}</p>
          <a href="#cities" className="mt-6 inline-block rounded-pill bg-white px-6 py-3 font-bold text-ink hover:bg-canvas">{site.delivery.cta}</a>
        </div>
        <div className="flex h-56 items-center justify-center rounded-[18px] bg-white/10 text-7xl">🚲</div>
      </div>
    </section>
  );
}

function AppDownload() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="flex h-80 w-44 items-center justify-center rounded-[28px] border-8 border-ink bg-gradient-to-b from-brandsoft to-white text-5xl">📱</div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink">{site.app.title}</h2>
          <p className="mt-3 max-w-md text-subtle">{site.app.body}</p>
          <div className="mt-5 flex gap-3">
            {site.app.badges.map((b) => (
              <a key={b} href="#" className="rounded-tile bg-ink px-5 py-3 text-sm font-bold text-white">{b}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="why" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink">Why travellers choose us</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.pillars.map((p) => (
            <div key={p.title} className="rounded-tile border border-line p-6">
              <div className="text-2xl">{p.icon}</div>
              <h3 className="mt-2 text-base font-extrabold text-ink">{p.title}</h3>
              <p className="mt-1 text-sm text-subtle">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const c = site.comparison;
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink">The smart way to recover</h2>
      <div className="mt-8 overflow-hidden rounded-tile border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-canvas text-left">
              <th className="px-4 py-3 font-bold text-subtle">&nbsp;</th>
              {c.columns.map((col, i) => (
                <th key={col} className={`px-4 py-3 font-extrabold ${i === 0 ? "text-brand" : "text-subtle"}`}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row) => (
              <tr key={row.feature} className="border-t border-line">
                <td className="px-4 py-3 font-semibold text-ink">{row.feature}</td>
                {row.values.map((v, i) => (
                  <td key={i} className={`px-4 py-3 ${i === 0 ? "font-bold text-ink" : "text-subtle"}`}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Hosts() {
  return (
    <section id="hosts" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid items-center gap-10 rounded-[28px] bg-gradient-to-br from-ink to-[#2A2740] p-10 text-white lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">{site.hosts.title}</h2>
          <p className="mt-4 text-white/85">{site.hosts.body}</p>
          <a href="#" className="mt-6 inline-block rounded-pill bg-white px-6 py-3 font-bold text-ink hover:bg-canvas">{site.hosts.cta}</a>
        </div>
        <ul className="grid gap-3">
          {site.hosts.points.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-tile bg-white/10 px-4 py-3 font-semibold">
              <span className="text-accent">◆</span> {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Cities() {
  return (
    <section id="cities" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink">Where we're rolling out</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-subtle">Launching city-by-city with local partners. Don't see yours? Bring it as a partner.</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {Object.entries(site.citiesByRegion).map(([region, cities]) => (
            <div key={region}>
              <p className="mb-2 text-sm font-extrabold text-ink">{region}</p>
              <ul className="space-y-1">
                {cities.map((c) => (
                  <li key={c}><a href="#" className="text-sm text-subtle hover:text-brand">{c}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink">Questions</h2>
      <div className="mt-8 space-y-3">
        {site.faqs.map((f) => (
          <details key={f.q} className="group rounded-tile border border-line bg-white p-5">
            <summary className="cursor-pointer list-none font-bold text-ink">{f.q}</summary>
            <p className="mt-2 text-sm text-subtle">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <Logo light />
            <p className="mt-3 text-sm text-white/70">{site.footer.tagline}</p>
          </div>
          {site.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-bold">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/70 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {site.brand}. {site.footer.note}</span>
          <a href={`mailto:${site.footer.email}`} className="font-semibold text-white/80">{site.footer.email}</a>
        </div>
      </div>
    </footer>
  );
}

function PressStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-subtle">As featured in</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 opacity-70">
        {site.press.map((p) => (
          <span key={p} className="text-lg font-extrabold tracking-tight text-subtle">{p}</span>
        ))}
      </div>
    </section>
  );
}

function Tiers() {
  return (
    <section id="kits" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink">Pick your kit</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-subtle">
        Curated tiers, every item listed before you book. A refundable deposit is released the moment you return.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {site.kitTiers.map((t) => (
          <div key={t.name} className={`relative rounded-[20px] border bg-white p-7 ${t.popular ? "border-brand shadow-xl" : "border-line"}`}>
            {t.popular && <span className="absolute -top-3 left-7 rounded-pill bg-brand px-3 py-1 text-xs font-bold text-white">Most popular</span>}
            <h3 className="text-lg font-extrabold text-ink">{t.name}</h3>
            <p className="mt-1 text-sm text-subtle">{t.blurb}</p>
            <p className="mt-4"><span className="text-3xl font-extrabold text-ink">{t.price}</span> <span className="text-sm font-semibold text-subtle">{t.per}</span></p>
            <ul className="mt-5 space-y-2">
              {t.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-subtle"><span className="text-brand">✓</span> {it}</li>
              ))}
            </ul>
            <a href="#hero" className={`mt-6 block rounded-pill px-5 py-3 text-center text-sm font-bold ${t.popular ? "bg-brand text-white hover:bg-branddark" : "bg-brandsoft text-brand hover:brightness-95"}`}>Choose {t.name}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Coverage() {
  const c = site.coverage;
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-line bg-white p-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink">{c.title}</h2>
            <p className="mt-3 text-subtle">{c.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {c.stats.map((s) => (
              <div key={s.label} className="rounded-tile bg-canvas p-4 text-center">
                <p className="text-2xl font-extrabold text-brand">{s.value}</p>
                <p className="mt-0.5 text-xs font-semibold text-subtle">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const c = site.finalCta;
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-brand to-accent p-12 text-center text-white">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">{c.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">{c.body}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a href="#hero" className="rounded-pill bg-white px-7 py-3 font-bold text-ink hover:bg-canvas">{c.primary}</a>
          <a href="#hosts" className="rounded-pill bg-white/15 px-7 py-3 font-bold text-white ring-1 ring-white/40 hover:bg-white/25">{c.secondary}</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-canvas text-ink">
      <Nav />
      <Hero />
      <Reviews />
      <PressStrip />
      <Steps />
      <Tiers />
      <Delivery />
      <Coverage />
      <AppDownload />
      <Pillars />
      <Comparison />
      <Hosts />
      <Cities />
      <FAQ />
      <FinalCta />
      <Footer />
    </div>
  );
}
