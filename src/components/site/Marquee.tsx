import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full pass. Longer = slower. */
  durationSec?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Seamless horizontal loop. The track renders `children` twice and translates
 * -50%, so the second copy lands exactly where the first started.
 * Hovering pauses it; the duplicate is hidden from screen readers.
 */
const Marquee = ({ children, durationSec = 40, reverse = false, className }: MarqueeProps) => (
  <div className={cn('pause-on-hover mask-fade-x overflow-hidden', className)}>
    <div
      data-marquee
      className="flex w-max animate-marquee items-center"
      style={{
        ['--marquee-duration' as string]: `${durationSec}s`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
      <div className="flex shrink-0 items-center">{children}</div>
      <div className="flex shrink-0 items-center" aria-hidden="true">
        {children}
      </div>
    </div>
  </div>
);

export default Marquee;
