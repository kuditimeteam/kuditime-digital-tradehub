import { ArrowRight, CheckCircle2, Clock, Headphones, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import heroPhone from '@/assets/pho.png';

const trustPoints = [
  { icon: ShieldCheck, label: 'Bank-grade security' },
  { icon: Clock, label: 'Payouts in minutes' },
  { icon: Headphones, label: '24/7 human support' },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary/40">
      {/* Ambient background: dotted field + two soft brand glows. */}
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60" aria-hidden="true" />
      <div
        className="glow-brand pointer-events-none absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="glow-lime pointer-events-none absolute -right-32 top-32 h-[32rem] w-[32rem] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* ------------------------------ Copy ------------------------------ */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Trusted by 10,000+ Nigerians
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-display-lg">
              Turn crypto and
              <br />
              gift cards into{' '}
              <span className="text-gradient-brand">Naira</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Sell Bitcoin, USDT and 100+ gift card brands at the best rates in the market — then pay
              your airtime, data, electricity and TV bills from the same balance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-8 text-base font-semibold shadow-glow"
              >
                <a href={siteConfig.tradeUrl} target="_blank" rel="noreferrer noopener">
                  Start trading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-border bg-background/70 px-8 text-base font-semibold backdrop-blur hover:bg-background"
              >
                <Link to="/download">Get the app</Link>
              </Button>
            </div>

            {/* Trust strip — the single highest-value thing above the fold for a
                money app, and what both competitors lead with. */}
            <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {trustPoints.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> from App Store &amp; Play Store reviews
              </span>
            </div>
          </div>

          {/* ----------------------------- Visual ----------------------------- */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <img
                src={heroPhone}
                alt="The Kuditime app showing a wallet balance and recent trades"
                className="relative z-10 mx-auto w-full max-w-sm drop-shadow-2xl lg:max-w-md"
                width={900}
                height={1800}
                fetchPriority="high"
              />

              {/* Payout confirmation — the moment the product is actually
                  selling, rather than a market figure a customer can't act on. */}
              <div className="absolute -right-2 top-16 z-20 w-52 rounded-2xl border border-border bg-background/95 p-4 shadow-float backdrop-blur animate-float sm:-right-6 sm:w-56">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success/12 text-success">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight text-foreground">
                      Payment successful
                    </p>
                    <p className="mt-1 text-lg font-bold leading-none tnum text-foreground">
                      ₦450,000
                    </p>
                    <p className="mt-1.5 whitespace-nowrap text-xs text-muted-foreground">
                      Sent to bank · Just now
                    </p>
                  </div>
                </div>
              </div>

              {/* Payout card */}
              <div
                className="absolute -left-2 bottom-16 z-20 rounded-2xl border border-border bg-background/95 p-4 shadow-float backdrop-blur animate-float sm:-left-6"
                style={{ animationDelay: '1.2s' }}
              >
                <p className="text-xs font-medium text-muted-foreground">Paid out today</p>
                <p className="mt-1 text-xl font-bold tnum text-primary">₦50M+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
