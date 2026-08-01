import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

type Tone = 'default' | 'muted' | 'ink' | 'brand';

const toneClasses: Record<Tone, string> = {
  default: 'bg-background',
  muted: 'bg-secondary/50',
  ink: 'bg-ink text-ink-foreground',
  brand: 'bg-brand-gradient text-white',
};

interface SectionProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}

/** Consistent vertical rhythm + background tone for every band on the site. */
export const Section = ({ children, tone = 'default', className, id }: SectionProps) => (
  <section id={id} className={cn('py-16 sm:py-20 lg:py-28', toneClasses[tone], className)}>
    <div className="container-page">{children}</div>
  </section>
);

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  onInk?: boolean;
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  onInk = false,
  className,
}: SectionHeadingProps) => (
  <Reveal
    className={cn(
      'max-w-2xl',
      align === 'center' ? 'mx-auto text-center' : 'text-left',
      className
    )}
  >
    {eyebrow && <span className={onInk ? 'eyebrow-on-ink' : 'eyebrow'}>{eyebrow}</span>}
    <h2
      className={cn(
        'mt-5 text-3xl sm:text-4xl lg:text-[2.75rem]',
        onInk && 'text-white'
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          'mt-4 text-base leading-relaxed sm:text-lg',
          onInk ? 'text-white/70' : 'text-muted-foreground'
        )}
      >
        {description}
      </p>
    )}
  </Reveal>
);

export default Section;
