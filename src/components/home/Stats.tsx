import Counter from '@/components/site/Counter';
import Reveal from '@/components/site/Reveal';

const stats = [
  { to: 10, suffix: 'K+', label: 'App downloads' },
  { to: 500, prefix: '₦', suffix: 'M+', label: 'Crypto processed' },
  { to: 8, suffix: 'K+', label: 'Happy customers' },
  { to: 99.9, suffix: '%', decimals: 1, label: 'Uptime' },
];

const Stats = () => (
  <section className="border-b border-border bg-background py-14 sm:py-16">
    <div className="container-page">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="text-center">
            <dd className="text-3xl font-bold tnum text-foreground sm:text-4xl lg:text-5xl">
              <Counter
                to={stat.to}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </dd>
            <dt className="mt-2 text-sm text-muted-foreground sm:text-base">{stat.label}</dt>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default Stats;
