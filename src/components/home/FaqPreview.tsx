import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section, { SectionHeading } from '@/components/site/Section';
import Reveal from '@/components/site/Reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How long does a payout take?',
    a: 'Most crypto and gift card trades are settled within minutes of confirmation. Gift cards that need manual review can take longer, and we tell you upfront when that happens.',
  },
  {
    q: 'Which gift cards do you accept?',
    a: 'Amazon, iTunes, Google Play, Steam, Netflix, Spotify, PlayStation, Xbox and 100+ other brands, across both physical cards and e-codes from a range of countries.',
  },
  {
    q: 'What is the minimum I can trade?',
    a: 'You can start with as little as ₦1,000 worth of crypto. There is no maximum for fully verified accounts.',
  },
  {
    q: 'How are your rates set?',
    a: 'Rates track live market pricing plus the card type, denomination and country of origin. The rate you see at confirmation is the rate you get — there is no hidden spread added afterwards.',
  },
  {
    q: 'Do I need to verify my identity?',
    a: 'Yes. A quick verification protects your account and unlocks higher limits. It usually takes a couple of minutes to complete in the app.',
  },
];

const FaqPreview = () => (
  <Section>
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <SectionHeading
          align="left"
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Everything people ask before their first trade. Still stuck? Our team replies around the clock."
          className="max-w-md"
        />
        <Reveal delay={140}>
          <Link
            to="/faq"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            See all FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q} className="border-border">
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline sm:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </Section>
);

export default FaqPreview;
