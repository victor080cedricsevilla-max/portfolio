"use client";

import { useId } from "react";
import { skillTooltips } from "@/data/portfolio";

interface PillProps {
  children: string;
  /** Slightly stronger treatment for the headline technologies. */
  emphasis?: boolean;
  mono?: boolean;
}

/**
 * A technology chip. When the label has an entry in `skillTooltips` it becomes
 * focusable and explains itself on hover and on keyboard focus.
 */
export function Pill({ children, emphasis = false, mono = true }: PillProps) {
  const tip = skillTooltips[children];
  const id = useId();

  const base = [
    "inline-flex items-center rounded-full border px-2.5 py-1 text-[11.5px] leading-none whitespace-nowrap transition-colors",
    mono ? "font-mono" : "",
    emphasis
      ? "border-accent-line bg-accent-soft text-accent"
      : "border-line bg-surface-2 text-muted",
  ].join(" ");

  if (!tip) {
    return <span className={base}>{children}</span>;
  }

  return (
    <span className="relative inline-block group">
      <span
        tabIndex={0}
        aria-describedby={id}
        className={`${base} cursor-help border-dashed hover:border-accent-line hover:text-accent focus-visible:border-accent-line`}
      >
        {children}
      </span>
      <span
        role="tooltip"
        id={id}
        className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-30 w-56 -translate-x-1/2 rounded-lg border border-line bg-surface p-2.5 text-[12px] leading-snug font-sans text-muted opacity-0 shadow-[var(--shadow-md)] transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {tip}
      </span>
    </span>
  );
}
