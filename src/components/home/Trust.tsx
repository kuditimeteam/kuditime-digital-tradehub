import { Fingerprint, Headphones, Lock, ShieldCheck } from 'lucide-react';
import Section, { SectionHeading } from '@/components/site/Section';
import Reveal from '@/components/site/Reveal';

const pillars = [
  {
    icon: Lock,
    title: 'Your funds stay protected',
    description:
      'Balances are held in segregated accounts and every transfer is verified before it leaves the platform.',
  },
  {
    icon: Fingerprint,
    title: 'PIN, Face ID and 2FA',
    description:
      'Biometric login and a transaction PIN mean nobody moves money from your wallet but you.',
  },
  {
    icon: ShieldCheck,
    title: 'Cards redeemed directly',
    description:
      'We redeem gift cards ourselves rather than reselling them, so your codes are never passed around.',
  },
  {
    icon: Headphones,
    title: 'Real people, any hour',
    description:
      'Our support team is reachable 24/7 in-app and on social — most tickets are answered in minutes.',
  },
];

const Trust = () => (
  <Section tone="ink" className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 bg-dotgrid-ink opacity-70" aria-hidden="true" />
    <div
      className="glow-lime pointer-events-none absolute -right-20 -top-24 h-[26rem] w-[26rem] rounded-full blur-3xl"
      aria-hidden="true"
    />

    <div className="relative">
      <SectionHeading
        onInk
        eyebrow="Why trust us"
        title="You're in the safest hands"
        description="Moving money is only worth it if you never have to think about whether it will arrive. Security is the product."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 90}>
            <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors duration-300 hover:border-lime/40 hover:bg-white/[0.07]">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/15 text-lime">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg text-white">{pillar.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/65">{pillar.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default Trust;
