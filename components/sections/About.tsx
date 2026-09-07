import Image from "next/image";
import { MapPin } from "lucide-react";
import { aboutParagraphs, person, profileCard } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Products, not demos."
          description="Six of these projects run real workflows — a client's quoting pipeline, a school's trip roster, a capstone people actually use."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              {aboutParagraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="text-[15.5px] leading-[1.75] text-muted sm:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="card p-6 sm:p-7">
              <div className="flex items-center gap-4 border-b border-line pb-6">
                <Image
                  src={person.avatar}
                  alt={`${person.name}, ${person.role}`}
                  width={64}
                  height={64}
                  className="size-16 shrink-0 rounded-full border border-line object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-semibold text-ink">
                    {person.name}
                  </p>
                  <p className="truncate text-[13px] text-muted">{person.role}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-[12px] text-faint">
                    <MapPin aria-hidden="true" className="size-3" />
                    {person.location}
                  </p>
                </div>
              </div>

              <p className="label-mono mt-6 mb-4">Engineering profile</p>

              <dl className="space-y-4">
                {profileCard.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[80px_1fr] items-start gap-3"
                  >
                    <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.09em] text-faint">
                      {row.label}
                    </dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {row.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-line bg-surface-2 px-2 py-0.5 text-[11.5px] text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
