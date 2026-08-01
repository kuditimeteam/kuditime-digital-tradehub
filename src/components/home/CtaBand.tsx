import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/site/Reveal';
import { siteConfig } from '@/config/site';
import appPhone from '@/assets/phon.png';

const CtaBand = () => (
  <section className="bg-background pb-16 pt-4 sm:pb-20">
    <div className="container-page">
      <Reveal>
        <div className="bg-brand-gradient relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute inset-0 bg-dotgrid-ink opacity-60" aria-hidden="true" />
          <div
            className="glow-lime pointer-events-none absolute -right-10 -top-16 h-96 w-96 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow-on-ink">Join 10,000+ traders</span>

              <h2 className="mt-6 text-3xl text-white sm:text-4xl lg:text-5xl">
                Why settle for less
                <br />
                when you can get more?
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                Create a free account and start trading crypto and gift cards at the best rates today.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-white px-8 text-base font-semibold text-primary hover:bg-white/90"
                >
                  <a href={siteConfig.tradeUrl} target="_blank" rel="noreferrer noopener">
                    Create free account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white/15 hover:text-white"
                >
                  <a href={siteConfig.appStore} target="_blank" rel="noreferrer noopener">
                    App Store
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white/15 hover:text-white"
                >
                  <a href={siteConfig.playStore} target="_blank" rel="noreferrer noopener">
                    Google Play
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <div className="absolute -left-3 -top-3 z-20 flex rotate-[-8deg] items-center gap-1.5 rounded-2xl bg-lime px-4 py-2 font-bold text-lime-foreground shadow-lifted">
                Rated 4.9
                <Star className="h-4 w-4 fill-current" />
              </div>
              <img
                src={appPhone}
                alt="Kuditime app bill payment screen"
                loading="lazy"
                className="w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaBand;
