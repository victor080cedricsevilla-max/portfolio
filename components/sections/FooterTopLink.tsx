"use client";

import { ArrowUp } from "lucide-react";

export function FooterTopLink() {
  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      className="group inline-flex items-center gap-2 self-start text-[12.5px] text-muted transition-colors hover:text-accent"
    >
      Back to top
      <ArrowUp
        aria-hidden="true"
        className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
      />
    </button>
  );
}
