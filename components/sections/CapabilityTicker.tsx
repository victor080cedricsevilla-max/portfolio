"use client";

import { useEffect, useState } from "react";
import { capabilities } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Cycles the capability labels one at a time. With reduced motion the full
 * list renders statically instead, so nothing is hidden behind an animation.
 */
export function CapabilityTicker() {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % capabilities.length), 2200);
    return () => clearInterval(t);
  }, [reduced]);

  if (reduced) {
    return (
      <ul className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
        {capabilities.map((c) => (
          <li
            key={c}
            className="font-mono text-[11.5px] tracking-wide text-muted"
          >
            {c}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="relative flex size-1.5 shrink-0"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
      </span>

      {/* The live region announces each label once; the list below is the
          accessible full set for anyone not watching it rotate. */}
      <div className="relative h-5 overflow-hidden" aria-hidden="true">
        <ul
          className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateY(-${i * 20}px)` }}
        >
          {capabilities.map((c) => (
            <li
              key={c}
              className="flex h-5 items-center font-mono text-[12px] tracking-wide text-muted"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>

      <span className="sr-only">
        Working with {capabilities.join(", ")}.
      </span>
    </div>
  );
}
