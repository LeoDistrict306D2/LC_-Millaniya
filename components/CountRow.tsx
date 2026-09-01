'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';

/**
 * The club's figures, set on the deep green band between woven stripes.
 *
 * Module scope so the reference is stable and the count-up effect is not torn
 * down on every parent render.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Figure({ stat }: { stat: Statistic }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <div>
      <dd className="font-heading text-4xl font-semibold tabular-nums md:text-5xl">
        {stat.prefix}
        {/* Final value is in the markup, so the served HTML is already correct;
            the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
      <dt className="mt-2.5 text-sm text-on-inverse/70">{stat.label}</dt>
      {stat.note ? <p className="mt-1 text-xs text-on-inverse/50">{stat.note}</p> : null}
    </div>
  );
}

export function CountRow({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label} className="bg-inverse text-on-inverse">
      <div className="wrap py-14 md:py-16">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <Figure key={stat.id} stat={stat} />
          ))}
        </dl>
      </div>
    </section>
  );
}
