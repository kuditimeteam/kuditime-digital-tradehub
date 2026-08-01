import { ArrowRight, Check, Coins, Gift, Wallet, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section, { SectionHeading } from '@/components/site/Section';
import Reveal from '@/components/site/Reveal';

const products = [
  {
    icon: Coins,
    kicker: 'Digital assets',
    title: 'Sell crypto for Naira',
    description:
      'Convert Bitcoin, Ethereum, USDT, USDC, TRON and more at rates that stay competitive around the clock.',
    features: ['Instant sell', 'Best market rates', 'Secure in-app wallet', 'No hidden spread'],
    href: '/crypto',
  },
  {
    icon: Gift,
    kicker: 'Gift cards',
    title: 'Redeem cards for cash',
    description:
      'Amazon, iTunes, Steam, Google Play, Xbox, Netflix and 100+ more brands — verified and paid out fast.',
    features: ['100+ brands', 'Fast verification', 'Physical & e-code', 'Live rate calculator'],
    href: '/giftcards',
  },
  {
    icon: Zap,
    kicker: 'Utility bills',
    title: 'Pay bills in seconds',
    description:
      'Top up airtime and data, settle electricity, renew DSTV and GOtv, or fund your betting wallet.',
    features: ['All major networks', 'Airtime & Data', 'Betting wallets', 'Instant delivery'],
    href: '/bills',
  },
  {
    icon: Wallet,
    kicker: 'Wallet',
    title: 'Withdraw to any bank',
    description:
      'Your Naira balance lands in your bank account on demand, with every transaction tracked in one place.',
    features: ['Any Nigerian bank', 'Minutes, not days', 'Full transaction history', 'PIN & Face ID'],
    href: '/download',
  },
];

const Products = () => (
  <Section tone="muted">
    <SectionHeading
      eyebrow="All in one place"
      title="One app for crypto, gift cards and bills"
      description="Everything you need to trade, cash out and pay — built for speed, security and the best rates in the market."
    />

    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {products.map((product, i) => (
        <Reveal key={product.title} delay={(i % 2) * 110}>
          <article className="surface-card surface-card-hover group h-full p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <product.icon className="h-6 w-6" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {product.kicker}
            </p>
            <h3 className="mt-2 text-xl sm:text-2xl">{product.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{product.description}</p>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to={product.href}
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Products;
