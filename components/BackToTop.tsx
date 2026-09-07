"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      hidden={!show}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      className="fixed bottom-5 right-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface/90 text-muted shadow-[var(--shadow-md)] backdrop-blur transition-colors hover:border-accent-line hover:text-accent"
    >
      <ArrowUp aria-hidden="true" className="size-[18px]" />
    </button>
  );
}
