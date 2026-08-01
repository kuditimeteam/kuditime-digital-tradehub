import { useEffect, useState } from 'react';

export const COIN_IDS = [
  'bitcoin',
  'ethereum',
  'tether',
  'tron',
  'binancecoin',
  'solana',
  'usd-coin',
] as const;

export type CoinId = (typeof COIN_IDS)[number];

export interface CoinQuote {
  usd: number;
  usd_24h_change: number;
}

export type PriceMap = Partial<Record<CoinId, CoinQuote>>;

const ENDPOINT =
  `https://api.coingecko.com/api/v3/simple/price?ids=${COIN_IDS.join(',')}` +
  '&vs_currencies=usd&include_24hr_change=true';

const CACHE_KEY = 'kuditime:crypto-prices';
const CACHE_TTL_MS = 60_000;

/**
 * CoinGecko's free tier answers HTTP 200 with `{ status: { error_code: 429 } }`
 * when it rate-limits, so a truthy response is not enough to trust. Keep only
 * the entries that actually carry a numeric `usd`, and treat everything else as
 * missing — callers render a placeholder instead of crashing on `undefined.usd`.
 */
const parsePrices = (raw: unknown): PriceMap => {
  if (!raw || typeof raw !== 'object') return {};

  const source = raw as Record<string, unknown>;
  const parsed: PriceMap = {};

  for (const id of COIN_IDS) {
    const entry = source[id];
    if (!entry || typeof entry !== 'object') continue;

    const { usd, usd_24h_change: change } = entry as Record<string, unknown>;
    if (typeof usd !== 'number' || !Number.isFinite(usd)) continue;

    parsed[id] = {
      usd,
      usd_24h_change: typeof change === 'number' && Number.isFinite(change) ? change : 0,
    };
  }

  return parsed;
};

const readCache = (): PriceMap | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { at, data } = JSON.parse(cached) as { at: number; data: PriceMap };
    if (!at || Date.now() - at > CACHE_TTL_MS) return null;

    return data;
  } catch {
    return null;
  }
};

const writeCache = (data: PriceMap) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    /* Private browsing / quota exceeded — the network path still works. */
  }
};

export const useCryptoPrices = () => {
  const [prices, setPrices] = useState<PriceMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      const cached = readCache();
      if (cached && Object.keys(cached).length > 0) {
        setPrices(cached);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(ENDPOINT);
        if (!res.ok) throw new Error(`CoinGecko responded ${res.status}`);

        const parsed = parsePrices(await res.json());
        if (!active) return;

        setPrices(parsed);
        // Never cache an empty result — that would hold the placeholder in
        // place for a full minute after a transient rate-limit.
        if (Object.keys(parsed).length > 0) writeCache(parsed);
      } catch (error) {
        console.error('Failed to load crypto prices:', error);
      } finally {
        if (active) setLoading(false);
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  return { prices, loading };
};

export const formatUsd = (value: number) =>
  value >= 1
    ? `$${value.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
    : `$${value.toFixed(4)}`;
