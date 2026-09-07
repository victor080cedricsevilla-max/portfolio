import { achievements } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Achievements() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected results"
          title="What actually shipped."
          description="Measurable outcomes rather than adjectives."
        />

        <ol className="relative">
          {/* Spine */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]"
          />

          {achievements.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={i * 50}>
                <div className="relative flex gap-5 pb-8 pl-8 sm:gap-7 sm:pl-12">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1.5 grid size-[15px] place-items-center rounded-full border border-accent-line bg-bg sm:size-[19px]"
                  >
                    <span className="size-1.5 rounded-full bg-accent" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.11em] text-accent">
                      {a.tag}
                    </span>
                    <h3 className="mt-1.5 text-[16.5px] font-semibold leading-snug text-ink sm:text-[17.5px]">
                      {a.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-[14px] leading-relaxed text-muted">
                      {a.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
