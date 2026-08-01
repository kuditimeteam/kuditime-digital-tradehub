import { Star } from 'lucide-react';
import Section, { SectionHeading } from '@/components/site/Section';
import Reveal from '@/components/site/Reveal';

const testimonials = [
  {
    quote:
      'Kuditime has changed how I trade crypto. The rates stay competitive and my withdrawals hit my bank almost immediately.',
    name: 'Adebayo Ogundimu',
    role: 'Crypto trader',
    location: 'Lagos',
    source: 'In-app review',
  },
  {
    quote:
      'I pay everything through Kuditime now — DSTV, electricity, data. One app instead of five, and it never fails on me.',
    name: 'Fatima Mohammed',
    role: 'Bill payments',
    location: 'Abuja',
    source: 'Play Store',
  },
  {
    quote:
      'Sold my Amazon gift card in under five minutes. The process was smooth and the rate was better than anywhere else I checked.',
    name: 'Chisom Okeke',
    role: 'Gift card trader',
    location: 'Port Harcourt',
    source: 'In-app review',
  },
  {
    quote:
      'The app is genuinely fast. I can sell Bitcoin on my commute and the money is there before I get to the office.',
    name: 'Ibrahim Suleiman',
    role: 'Crypto trader',
    location: 'Kano',
    source: 'App Store',
  },
  {
    quote:
      'Support answered me at 1am and sorted my issue in minutes. That is the part nobody else gets right.',
    name: 'Blessing Eze',
    role: 'Customer support',
    location: 'Enugu',
    source: 'On X',
  },
  {
    quote:
      'Two years on Kuditime and not one bad experience. Transparent rates, no surprises, no stories.',
    name: 'Yusuf Aliyu',
    role: 'Crypto trader',
    location: 'Kaduna',
    source: 'On Instagram',
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

const Testimonials = () => (
  <Section tone="muted">
    <SectionHeading
      eyebrow="Loved by traders"
      title="What our customers say"
      description="Thousands of Nigerians cash out with Kuditime every week. Here is what a few of them told us."
    />

    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, i) => (
        <Reveal key={testimonial.name} delay={(i % 3) * 100}>
          <figure className="surface-card flex h-full flex-col p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                {testimonial.source}
              </span>
            </div>

            <blockquote className="mt-5 flex-1 leading-relaxed text-foreground/85">
              “{testimonial.quote}”
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {initials(testimonial.name)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">{testimonial.name}</span>
                <span className="block text-xs text-muted-foreground">
                  {testimonial.role} · {testimonial.location}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Testimonials;
