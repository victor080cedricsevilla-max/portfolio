"use client";

import { stats } from "@/data/portfolio";
import { useCountUp, useInView } from "@/lib/hooks";
import type { Stat } from "@/types";

function StatCell({ stat, active }: { stat: Stat; active: boolean }) {
  const n = useCountUp(stat.value, active);

  return (
    <div className="px-5 py-6 sm:px-6">
      <p className="font-mono text-[26px] font-bold leading-none tracking-[-0.02em] text-ink tabular-nums sm:text-[30px]">
        {stat.prefix}
        {n}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-2.5 text-[13.5px] font-medium text-ink">{stat.label}</p>
      <p className="mt-1 text-[12px] leading-snug text-faint">{stat.note}</p>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>("0px 0px -20% 0px");

  return (
    <section aria-label="Portfolio at a glance" className="px-5 sm:px-8">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3 lg:grid-cols-6"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-surface">
            <StatCell stat={s} active={inView} />
          </div>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-6xl text-[12px] text-faint">
        Line counts are supporting evidence, not a measure of skill — they
        exclude dependencies, build output and generated assets.
      </p>
    </section>
  );
}
