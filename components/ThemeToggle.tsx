"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/hooks";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} theme`
          : "Switch colour theme"
      }
      className={`inline-flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent-line hover:text-accent ${className}`}
    >
      {/* Both icons render; visibility is swapped so there is no hydration
          mismatch and no layout shift before the theme resolves. */}
      <Sun
        aria-hidden="true"
        className={`size-[17px] transition-all duration-300 ${
          mounted && isDark
            ? "scale-100 rotate-0 opacity-100"
            : "absolute scale-50 -rotate-90 opacity-0"
        }`}
      />
      <Moon
        aria-hidden="true"
        className={`size-[17px] transition-all duration-300 ${
          mounted && !isDark
            ? "scale-100 rotate-0 opacity-100"
            : "absolute scale-50 rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
