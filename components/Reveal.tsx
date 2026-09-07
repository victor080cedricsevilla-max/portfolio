"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/lib/hooks";

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in ms. */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Fades content up as it enters the viewport. The hidden state lives behind a
 * `prefers-reduced-motion: no-preference` media query and a `.no-js` escape
 * hatch, so the content is never trapped invisible.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
