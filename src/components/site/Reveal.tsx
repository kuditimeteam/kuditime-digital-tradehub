import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger in ms. Use for sibling cards so a grid cascades in. */
  delay?: number;
  as?: ElementType;
}

/**
 * Fades + lifts its children in the first time they scroll into view.
 * Reveals once and then disconnects, so scrolling back up doesn't re-animate.
 * Motion is disabled entirely by the reduced-motion block in index.css.
 */
const Reveal = ({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Guard for older browsers and jsdom — show the content rather than hide it.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn('reveal', className)}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
