/**
 * The Travel Rescue revenue model, mirrored from the platform's Admin business
 * model so estimates match what the live console actually charges. Pure functions
 * — no backend. All money in major units for readability (the platform stores
 * minor units internally).
 */

export type Assumptions = {
  regions: number;
  spotsPerRegion: number;
  reservationsPerSpotPerDay: number;
  avgRentalValue: number; // per reservation, before fees
  platformCommissionPct: number; // % of rental the platform keeps after provider cuts
  deliverySharePct: number; // % of reservations that use a paid delivery leg
  deliveryFee: number; // platform's net per delivery leg
  subscribers: number; // active traveller/provider subscribers
  subscriptionMonthly: number; // per subscriber / month
  sponsoredMonthly: number; // brand-sponsored placement revenue / month
  monthlyGrowthPct: number; // compounding MoM growth on volume
  fixedMonthlyCost: number; // ops/support/infra
};

export const DEFAULT_ASSUMPTIONS: Assumptions = {
  regions: 3,
  spotsPerRegion: 20,
  reservationsPerSpotPerDay: 1.5,
  avgRentalValue: 45,
  platformCommissionPct: 20,
  deliverySharePct: 25,
  deliveryFee: 4,
  subscribers: 400,
  subscriptionMonthly: 6,
  sponsoredMonthly: 1500,
  monthlyGrowthPct: 8,
  fixedMonthlyCost: 6000,
};

export type MonthRow = {
  month: number;
  reservations: number;
  commission: number;
  delivery: number;
  subscriptions: number;
  sponsored: number;
  revenue: number;
  cost: number;
  net: number;
  cumulativeNet: number;
};

/** Base (month-1) monthly reservation volume from the supply assumptions. */
export function baseMonthlyReservations(a: Assumptions): number {
  return a.regions * a.spotsPerRegion * a.reservationsPerSpotPerDay * 30;
}

export function project(a: Assumptions, months: number): MonthRow[] {
  const rows: MonthRow[] = [];
  const g = 1 + a.monthlyGrowthPct / 100;
  let cumulativeNet = 0;
  for (let m = 1; m <= months; m++) {
    const factor = Math.pow(g, m - 1);
    const reservations = baseMonthlyReservations(a) * factor;
    const subs = a.subscribers * factor;
    const commission = reservations * a.avgRentalValue * (a.platformCommissionPct / 100);
    const delivery = reservations * (a.deliverySharePct / 100) * a.deliveryFee;
    const subscriptions = subs * a.subscriptionMonthly;
    const sponsored = a.sponsoredMonthly * factor;
    const revenue = commission + delivery + subscriptions + sponsored;
    // Variable cost scales loosely with volume on top of the fixed base.
    const cost = a.fixedMonthlyCost + reservations * 0.4;
    const net = revenue - cost;
    cumulativeNet += net;
    rows.push({
      month: m,
      reservations,
      commission,
      delivery,
      subscriptions,
      sponsored,
      revenue,
      cost,
      net,
      cumulativeNet,
    });
  }
  return rows;
}

export function summarize(rows: MonthRow[]) {
  const last = rows[rows.length - 1];
  const revenue = rows.reduce((s, r) => s + r.revenue, 0);
  const net = rows.reduce((s, r) => s + r.net, 0);
  const runRate = last ? last.revenue * 12 : 0;
  const breakevenMonth = rows.find((r) => r.cumulativeNet >= 0)?.month ?? null;
  return { revenue, net, runRate, breakevenMonth };
}

export function money(n: number, symbol: string): string {
  const r = Math.round(n);
  return `${symbol}${r.toLocaleString("en")}`;
}
