"use client";

import { useMemo, useState } from "react";
import { featuredProjects } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProjectCategory } from "@/types";

const FILTERS: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "AI" },
];

export function FeaturedProjects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const shown = useMemo(
    () =>
      filter === "all"
        ? featuredProjects
        : featuredProjects.filter((p) => p.categories.includes(filter)),
    [filter],
  );

  return (
    <section id="work" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured work"
          title="Four projects worth reading in detail."
          description="Each one names the engineering decision behind it, not just the stack it was built with."
          aside={
            <div
              role="group"
              aria-label="Filter projects by type"
              className="flex flex-wrap gap-1.5"
            >
              {FILTERS.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFilter(f.id)}
                    aria-pressed={active}
                    className={`min-h-9 rounded-full border px-3.5 text-[13px] transition-colors ${
                      active
                        ? "border-accent-line bg-accent-soft text-accent"
                        : "border-line bg-surface text-muted hover:border-line-strong hover:text-ink"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          }
        />

        <p aria-live="polite" className="sr-only">
          Showing {shown.length} of {featuredProjects.length} projects.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {shown.map((p, i) => (
            <Reveal key={p.id}>
              <FeaturedProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        {shown.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-line-strong px-6 py-12 text-center text-[14px] text-muted">
            No projects in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
