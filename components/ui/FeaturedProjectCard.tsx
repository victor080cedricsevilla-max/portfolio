"use client";

import { ChevronRight, ExternalLink, Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Pill } from "@/components/ui/Pill";
import { ProjectShot } from "@/components/ui/ProjectShot";
import type { FeaturedProject } from "@/types";

export function FeaturedProjectCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const flip = index % 2 === 1;

  return (
    <article
      id={project.id}
      className="card card-hover group scroll-mt-28 overflow-hidden"
    >
      <div className="grid gap-0 lg:grid-cols-2">
        {/* Visual — alternates sides down the list for rhythm. */}
        <div
          className={`border-b border-line p-5 sm:p-7 lg:border-b-0 ${
            flip ? "lg:order-2 lg:border-l" : "lg:border-r"
          }`}
        >
          <ProjectShot
            src={project.shot}
            alt={`${project.name} — ${project.tagline}`}
            hasShot={project.hasShot}
            priority={index === 0}
          />

          <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-surface px-3 py-2.5">
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-faint">
                  {m.label}
                </dt>
                <dd className="mt-1 font-mono text-[12.5px] text-ink tabular-nums">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.11em] text-accent">
              {project.platform}
            </span>
            {project.flags?.map((f) => (
              <span
                key={f}
                className="rounded-full border border-line-strong px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint"
              >
                {f}
              </span>
            ))}
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-1.5 text-[14.5px] text-muted">{project.tagline}</p>

          <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
            {project.description}
          </p>

          <p className="mt-4 text-[12.5px] text-faint">
            <span className="font-mono uppercase tracking-[0.08em]">Role</span>
            <span className="mx-2 text-line-strong">·</span>
            {project.role}
          </p>

          {project.result ? (
            <div className="mt-5 flex items-baseline gap-3 rounded-xl border border-accent-line bg-accent-soft px-4 py-3">
              <span className="font-mono text-2xl font-bold leading-none text-accent tabular-nums">
                {project.result.value}
              </span>
              <span className="text-[13px] text-muted">
                {project.result.label}
              </span>
            </div>
          ) : null}

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <li key={s}>
                <Pill emphasis>{s}</Pill>
              </li>
            ))}
          </ul>

          <details className="group/cap mt-4">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[12.5px] text-faint transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
              <ChevronRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-open/cap:rotate-90"
              />
              {project.capabilities.length} capabilities
            </summary>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.capabilities.map((c) => (
                <li key={c}>
                  <Pill mono={false}>{c}</Pill>
                </li>
              ))}
            </ul>
          </details>

          {/* Engineering highlight — a button, not a hover, so it works on
              touch and for keyboard users. */}
          <div className="mt-6 rounded-xl border border-line bg-surface-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.11em] text-faint">
                  Engineering highlight
                </span>
                <span className="mt-1 block text-[14px] font-medium text-ink">
                  {project.engineering.heading}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="grid size-7 shrink-0 place-items-center rounded-full border border-line bg-surface text-muted"
              >
                {open ? (
                  <Minus className="size-3.5" />
                ) : (
                  <Plus className="size-3.5" />
                )}
              </span>
            </button>

            <div id={panelId} hidden={!open} className="px-4 pb-4">
              <ul className="space-y-2.5 border-t border-line pt-3.5">
                {project.engineering.points.map((p) => (
                  <li
                    key={p.slice(0, 28)}
                    className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] size-1 shrink-0 rounded-full bg-accent"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {(project.repoUrl || project.liveUrl) && (
            <div className="mt-5 flex flex-wrap gap-2.5">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-[13px] text-muted transition-colors hover:border-accent-line hover:text-accent"
                >
                  <GitHubIcon className="size-4" />
                  Source
                </a>
              ) : null}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-[13px] text-muted transition-colors hover:border-accent-line hover:text-accent"
                >
                  <ExternalLink aria-hidden="true" className="size-4" />
                  Live demo
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
