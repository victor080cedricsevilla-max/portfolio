"use client";

import { CornerDownLeft, Mail, Moon, Search, Sun, Wrench } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { mailto, socials } from "@/data/portfolio";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

interface PaletteCommand {
  id: string;
  label: string;
  hint: string;
  icon: ReactNode;
  run: () => void;
}

const icon = "size-4 shrink-0";

/**
 * Thin wrapper: the dialog is unmounted while closed, so its query and
 * selection reset naturally on each open — no reset effect needed.
 */
export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return <PaletteDialog onClose={onClose} />;
}

function PaletteDialog({ onClose }: { onClose: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const scrollTo = useCallback(
    (id: string) => {
      onClose();
      const el = document.getElementById(id);
      el?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    },
    [onClose],
  );

  const commands: PaletteCommand[] = useMemo(
    () => [
      {
        id: "home",
        label: "Go to Home",
        hint: "Section",
        icon: <Search className={icon} aria-hidden="true" />,
        run: () => scrollTo("home"),
      },
      {
        id: "work",
        label: "View Projects",
        hint: "Section",
        icon: <Search className={icon} aria-hidden="true" />,
        run: () => scrollTo("work"),
      },
      {
        id: "skills",
        label: "View Skills",
        hint: "Section",
        icon: <Wrench className={icon} aria-hidden="true" />,
        run: () => scrollTo("skills"),
      },
      {
        id: "contact",
        label: "Contact",
        hint: "Section",
        icon: <Search className={icon} aria-hidden="true" />,
        run: () => scrollTo("contact"),
      },
      {
        id: "email",
        label: "Send Email",
        hint: socials.email,
        icon: <Mail className={icon} aria-hidden="true" />,
        run: () => {
          onClose();
          window.location.href = mailto;
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: "New tab",
        icon: <LinkedInIcon className={icon} />,
        run: () => {
          onClose();
          window.open(socials.linkedin, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "instagram",
        label: "Open Instagram",
        hint: socials.instagramHandle,
        icon: <InstagramIcon className={icon} />,
        run: () => {
          onClose();
          window.open(socials.instagram, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "theme",
        label: "Toggle Theme",
        hint: resolvedTheme === "dark" ? "To light" : "To dark",
        icon:
          resolvedTheme === "dark" ? (
            <Sun className={icon} aria-hidden="true" />
          ) : (
            <Moon className={icon} aria-hidden="true" />
          ),
        run: () => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          onClose();
        },
      },
    ],
    [onClose, resolvedTheme, scrollTo, setTheme],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q),
    );
  }, [commands, query]);

  // Clamp during render rather than correcting it in an effect.
  const selected = results.length ? Math.min(index, results.length - 1) : 0;

  useEffect(() => {
    // Focus after paint so the input exists in the tree.
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setIndex(results.length ? (selected + 1) % results.length : 0);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIndex(
          results.length ? (selected - 1 + results.length) % results.length : 0,
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        results[selected]?.run();
      } else if (e.key === "Tab") {
        // Only the input and the list live here, so keep focus inside.
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [results, selected, onClose]);

  useEffect(() => {
    const el = listRef.current?.children[selected] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[18vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <button
        type="button"
        aria-label="Close command palette"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-bg/70 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-lg)]">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search aria-hidden="true" className="size-4 shrink-0 text-faint" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIndex(0);
            }}
            placeholder="Type a command…"
            aria-label="Search commands"
            className="h-12 w-full bg-transparent text-[14.5px] text-ink outline-none placeholder:text-faint"
          />
          <kbd className="hidden shrink-0 rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-faint sm:block">
            ESC
          </kbd>
        </div>

        {results.length === 0 ? (
          <p className="px-4 py-8 text-center text-[13.5px] text-muted">
            Nothing matches “{query}”.
          </p>
        ) : (
          <ul ref={listRef} className="max-h-[52vh] overflow-y-auto p-2">
            {results.map((c, i) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={c.run}
                  onMouseEnter={() => setIndex(i)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                    i === selected
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:bg-surface-2"
                  }`}
                >
                  {c.icon}
                  <span className="flex-1 text-[14px] text-ink">{c.label}</span>
                  <span className="font-mono text-[11px] text-faint">{c.hint}</span>
                  {i === selected ? (
                    <CornerDownLeft aria-hidden="true" className="size-3.5 text-accent" />
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
