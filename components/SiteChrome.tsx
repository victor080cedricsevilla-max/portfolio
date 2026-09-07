"use client";

import { useCallback, useEffect, useState } from "react";
import { BackToTop } from "@/components/BackToTop";
import { CommandPalette } from "@/components/CommandPalette";
import { Navbar } from "@/components/Navbar";

/**
 * Owns the small amount of page-level client state: the command palette and
 * the scroll-dependent chrome. Keeps every section itself a server component.
 */
export function SiteChrome() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  const open = useCallback(() => setPaletteOpen(true), []);
  const close = useCallback(() => setPaletteOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Navbar onOpenPalette={open} />
      <CommandPalette open={paletteOpen} onClose={close} />
      <BackToTop />
    </>
  );
}
