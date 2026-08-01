import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  to: number;
  /** Rendered before the number, e.g. "₦" or "$". */
  prefix?: string;
  /** Rendered after the number, e.g. "M+", "%", "+". */
  suffix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Counts up from zero to `to` the first time it scrolls into view.
 * Reduced-motion users get the final value immediately.
 */
const Counter = ({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  durationMs = 1800,
  className,
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  // Held in a ref so the effect cleanup can cancel a run still in flight —
  // the animation is kicked off from an observer callback, not the effect body.
  const frameRef = useRef(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (prefersReducedMotion()) {
        setValue(to);
        return;
      }

      const start = performance.now();

      const tick = (now: number) => {
        // Progress is clamped, so the first frame at or past the duration
        // lands on easeOutExpo(1) === 1 and sets exactly `to`.
        const progress = Math.min((now - start) / durationMs, 1);
        setValue(to * easeOutExpo(progress));
        if (progress < 1) frameRef.current = requestAnimationFrame(tick);
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return () => cancelAnimationFrame(frameRef.current);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [to, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export default Counter;
