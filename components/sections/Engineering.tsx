import {
  Blocks,
  Building2,
  Gauge,
  KeyRound,
  Layers,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { principles } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  authz: KeyRound,
  adversarial: ShieldCheck,
  billing: Wallet,
  bundle: Gauge,
  failopen: Blocks,
  layers: Layers,
  tenancy: Building2,
};

export function Engineering() {
  return (
    <section
      id="engineering"
      className="border-y border-line bg-bg-alt px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Beyond the UI"
          title="Some of the engineering decisions behind my projects."
          description="The parts a screenshot cannot show — and usually the reason a project holds up once real people use it."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => {
            const Icon = ICONS[p.id] ?? Layers;
            return (
              <Reveal key={p.id} delay={(i % 3) * 70}>
                <article className="card card-hover h-full p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-accent-line bg-accent-soft text-accent">
                      <Icon aria-hidden="true" className="size-[17px]" />
                    </span>
                    {p.metric ? (
                      <span className="text-right">
                        <span className="block font-mono text-lg font-bold leading-none text-accent tabular-nums">
                          {p.metric.value}
                        </span>
                        <span className="mt-1 block text-[11px] text-faint">
                          {p.metric.label}
                        </span>
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-5 text-[16.5px] font-semibold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                    {p.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-line pt-4">
                    {p.detail.map((d) => (
                      <li
                        key={d.slice(0, 28)}
                        className="flex gap-2.5 text-[13px] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] size-1 shrink-0 rounded-full bg-accent-line"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
