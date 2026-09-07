"use client";

import { useState } from "react";
import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((g) => g.id === activeId) ?? skillGroups[0];

  return (
    <section id="skills" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Organised by what it does, not by logo."
          description="Dashed chips explain themselves — hover or focus one for a plain-language definition."
        />

        <div className="card overflow-hidden">
          <div className="grid lg:grid-cols-[260px_1fr]">
            {/* Category rail */}
            <div
              role="tablist"
              aria-label="Skill categories"
              aria-orientation="vertical"
              className="flex gap-1 overflow-x-auto border-b border-line p-2.5 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r"
            >
              {skillGroups.map((g) => {
                const isActive = g.id === activeId;
                return (
                  <button
                    key={g.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={`panel-${g.id}`}
                    id={`tab-${g.id}`}
                    onClick={() => setActiveId(g.id)}
                    className={`flex min-h-11 shrink-0 items-center justify-between gap-3 rounded-xl px-3.5 text-left text-[14px] transition-colors lg:w-full ${
                      isActive
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:bg-surface-2 hover:text-ink"
                    }`}
                  >
                    <span className="whitespace-nowrap">{g.label}</span>
                    <span
                      className={`hidden font-mono text-[11px] tabular-nums lg:inline ${
                        isActive ? "text-accent" : "text-faint"
                      }`}
                    >
                      {g.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              tabIndex={0}
              className="p-6 sm:p-8"
            >
              <p className="text-[15px] text-ink">{active.blurb}</p>
              <p className="label-mono mt-1.5">
                {active.items.length} technologies
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {active.items.map((item) => (
                  <li key={item}>
                    <Pill>{item}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Everything at once, for anyone who would rather scan than click. */}
        <Reveal>
          <details className="group mt-5">
            <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-[13px] text-faint transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
              <span className="font-mono">
                {skillGroups.reduce((n, g) => n + g.items.length, 0)}
              </span>
              technologies in total — show every category at once
            </summary>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((g) => (
                <div key={g.id}>
                  <p className="label-mono mb-3">{g.label}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <li key={item}>
                        <Pill>{item}</Pill>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
