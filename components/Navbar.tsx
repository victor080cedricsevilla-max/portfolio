"use client";

import { Command, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { navItems, person } from "@/data/portfolio";
import { useActiveSection } from "@/lib/hooks";
import { ThemeToggle } from "@/components/ThemeToggle";

const ids = navItems.map((n) => n.id);

export function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = useCallback((id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    // Move keyboard focus so the jump is real for assistive tech too.
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-[13px] focus:font-medium focus:text-accent-contrast"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label="Primary"
          className={`mx-auto flex h-[54px] max-w-5xl items-center justify-between gap-3 rounded-full border px-3 pl-4 transition-all duration-300 sm:px-2.5 sm:pl-5 ${
            scrolled
              ? "border-line bg-bg/80 shadow-[var(--shadow-md)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            className="flex items-center gap-2.5 text-[14px] font-semibold tracking-tight text-ink"
          >
            <span
              aria-hidden="true"
              className="grid size-7 place-items-center rounded-md border border-accent-line bg-accent-soft font-mono text-[10.5px] font-bold text-accent"
            >
              {person.monogram}
            </span>
            <span className="hidden sm:inline">{person.name}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.id);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3 py-1.5 text-[13.5px] transition-colors ${
                      isActive
                        ? "text-ink"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-px origin-center bg-accent transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Open command palette"
              className="hidden size-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent-line hover:text-accent lg:inline-flex"
            >
              <Command aria-hidden="true" className="size-[15px]" />
            </button>

            <ThemeToggle />

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                go("contact");
              }}
              className="hidden rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-accent-contrast transition-opacity hover:opacity-90 sm:inline-block"
            >
              Contact me
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex size-9 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="size-[17px]" />
              ) : (
                <Menu aria-hidden="true" className="size-[17px]" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 md:hidden"
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 h-full w-full bg-bg/70 backdrop-blur-sm"
        />
        <div className="absolute inset-x-3 top-[74px] rounded-2xl border border-line bg-surface p-2 shadow-[var(--shadow-lg)]">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.id);
                  }}
                  className={`flex min-h-12 items-center rounded-xl px-4 text-[15px] transition-colors ${
                    active === item.id
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:bg-surface-2 hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-accent px-4 text-[15px] font-medium text-accent-contrast"
          >
            Contact me
          </a>
        </div>
      </div>
    </>
  );
}
