import { smallProjects } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MoreProjects() {
  const secondary = smallProjects.filter((p) => p.tier === "secondary");
  const practice = smallProjects.filter((p) => p.tier === "practice");

  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="More projects"
          title="Smaller builds and studies."
          description="Shipped work at a smaller scale, plus the practice pieces — kept separate, because they are not the same thing."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 60}>
                <article className="card card-hover h-full p-5">
                  <h3 className="text-[16px] font-semibold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                    {p.platform}
                  </p>
                  <p className="mt-2.5 font-mono text-[12px] text-faint tabular-nums">
                    {p.scale}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2 text-[13px] leading-snug text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] size-1 shrink-0 rounded-full bg-line-strong"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-8 rounded-2xl border border-dashed border-line px-5 py-5 sm:px-6">
            <p className="label-mono mb-4">Practice pieces</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {practice.map((p) => (
                <li key={p.name} className="flex items-baseline gap-2.5">
                  <span className="text-[14px] text-muted">{p.name}</span>
                  <span className="font-mono text-[11.5px] text-faint">
                    {p.platform} · {p.scale}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
