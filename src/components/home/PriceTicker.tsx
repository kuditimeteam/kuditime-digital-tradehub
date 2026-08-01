import { TrendingDown, TrendingUp } from 'lucide-react';
import Marquee from '@/components/site/Marquee';
import { COIN_IDS, formatUsd, useCryptoPrices, type CoinId } from '@/hooks/useCryptoPrices';
import btcLogo from '@/assets/btc-logo.png';
import ethLogo from '@/assets/eeth.png';
import usdtLogo from '@/assets/tether-usdt-logo.png';
import tronLogo from '@/assets/tron.png';
import bnbLogo from '@/assets/bnb-logo.png';
import solLogo from '@/assets/solana-logo.png';
import usdcLogo from '@/assets/usdc-logo.png';

const coinMeta: Record<CoinId, { symbol: string; logo: string }> = {
  bitcoin: { symbol: 'BTC', logo: btcLogo },
  ethereum: { symbol: 'ETH', logo: ethLogo },
  tether: { symbol: 'USDT', logo: usdtLogo },
  tron: { symbol: 'TRX', logo: tronLogo },
  binancecoin: { symbol: 'BNB', logo: bnbLogo },
  solana: { symbol: 'SOL', logo: solLogo },
  'usd-coin': { symbol: 'USDC', logo: usdcLogo },
};

const PriceTicker = () => {
  const { prices } = useCryptoPrices();

  return (
    <div className="border-y border-border bg-background py-4">
      <Marquee durationSec={55}>
        {COIN_IDS.map((id) => {
          const meta = coinMeta[id];
          const quote = prices[id];
          const up = (quote?.usd_24h_change ?? 0) >= 0;

          return (
            <div key={id} className="flex items-center gap-3 px-6">
              <img src={meta.logo} alt="" className="h-7 w-7 rounded-full object-contain" aria-hidden="true" />
              <span className="text-sm font-bold text-foreground">{meta.symbol}</span>
              <span className="text-sm font-medium tnum text-muted-foreground">
                {quote ? formatUsd(quote.usd) : '—'}
              </span>
              {quote && (
                <span
                  className={`flex items-center gap-0.5 text-xs font-semibold tnum ${
                    up ? 'text-success' : 'text-destructive'
                  }`}
                >
                  {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {Math.abs(quote.usd_24h_change).toFixed(2)}%
                </span>
              )}
              <span className="ml-3 h-4 w-px bg-border" aria-hidden="true" />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default PriceTicker;
