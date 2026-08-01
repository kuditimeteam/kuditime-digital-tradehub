import { ArrowRight } from 'lucide-react';
import Section, { SectionHeading } from '@/components/site/Section';
import Reveal from '@/components/site/Reveal';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import appScreen from '@/assets/phone 1.png';

const steps = [
  {
    title: 'Create your account',
    description: 'Sign up with your email and phone number. It takes under two minutes.',
  },
  {
    title: 'Verify and pick a rate',
    description: 'Complete quick verification, then choose the asset or gift card you want to sell.',
  },
  {
    title: 'Get paid to your bank',
    description: 'Confirm the trade and your Naira lands in your bank account — usually within minutes.',
  },
];

const HowItWorks = () => (
  <Section>
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <Reveal className="order-2 lg:order-1">
        <div className="relative mx-auto max-w-sm">
          <div
            className="glow-brand pointer-events-none absolute inset-0 -m-10 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <img
            src={appScreen}
            alt="Kuditime app trade screen"
            loading="lazy"
            className="relative w-full drop-shadow-2xl"
          />
        </div>
      </Reveal>

      <div className="order-1 lg:order-2">
        <SectionHeading
          align="left"
          eyebrow="Get started in minutes"
          title="From sign-up to first payout in three steps"
          description="No haggling with random traders, no waiting days for your money. Just a rate, a confirmation and a bank alert."
          className="max-w-xl"
        />

        <ol className="mt-10 space-y-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 110} as="li" className="flex gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={340}>
          <Button asChild size="lg" className="mt-10 h-12 rounded-full px-8 text-base font-semibold">
            <a href={siteConfig.tradeUrl} target="_blank" rel="noreferrer noopener">
              Create free account
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </Reveal>
      </div>
    </div>
  </Section>
);

export default HowItWorks;
