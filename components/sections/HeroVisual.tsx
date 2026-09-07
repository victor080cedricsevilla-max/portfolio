"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

const NODES = [
  { x: 20, y: 16, w: 152, h: 44, label: "Flutter", meta: "client" },
  { x: 288, y: 16, w: 152, h: 44, label: "React Native", meta: "client" },
  { x: 154, y: 124, w: 152, h: 44, label: "Firebase Auth", meta: "identity" },
  { x: 154, y: 214, w: 152, h: 44, label: "Cloud Firestore", meta: "data" },
  { x: 8, y: 322, w: 132, h: 44, label: "Gemini", meta: "ai" },
  { x: 164, y: 322, w: 132, h: 44, label: "Maps", meta: "geo" },
  { x: 320, y: 322, w: 132, h: 44, label: "FCM", meta: "push" },
];

const EDGES = [
  "M96,60 C96,96 230,88 230,124",
  "M364,60 C364,96 230,88 230,124",
  "M230,168 L230,214",
  "M230,258 C230,296 74,286 74,322",
  "M230,258 L230,322",
  "M230,258 C230,296 386,286 386,322",
];

/**
 * The application architecture the portfolio is actually about: two mobile
 * clients over one Firebase core, fanning out to the AI, maps and push
 * services. Pure SVG so it stays crisp, themes correctly and costs nothing
 * on mobile.
 */
export function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || reduced) return;
    // Parallax is a desktop pointer affordance only.
    if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) {
      return;
    }

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        el.style.transform = `translate3d(${(-dx * 14).toFixed(2)}px, ${(
          -dy * 12
        ).toFixed(2)}px, 0)`;
      });
    };

    const onLeave = () => {
      el.style.transform = "translate3d(0,0,0)";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <div
      ref={wrapRef}
      className="w-full transition-transform duration-500 ease-out will-change-transform"
    >
      <svg
        viewBox="0 0 460 380"
        role="img"
        aria-label="Architecture diagram: Flutter and React Native clients connect through Firebase Auth and Cloud Firestore, which fan out to Gemini, Maps and Firebase Cloud Messaging."
        className="h-auto w-full overflow-visible"
      >
        <defs>
          <linearGradient id="edgeFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Static connectors */}
        <g fill="none" stroke="var(--border-strong)" strokeWidth="1.25">
          {EDGES.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>

        {/* Animated flow overlay */}
        <g
          fill="none"
          stroke="url(#edgeFade)"
          strokeWidth="1.75"
          strokeLinecap="round"
          className="hero-flow"
        >
          {EDGES.map((d, i) => (
            <path key={d} d={d} style={{ animationDelay: `${i * 0.42}s` }} />
          ))}
        </g>

        {/* Nodes */}
        {NODES.map((n) => {
          const isCore = n.meta === "identity" || n.meta === "data";
          return (
            <g key={n.label}>
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={n.h}
                rx="11"
                fill="var(--surface)"
                stroke={isCore ? "var(--accent-line)" : "var(--border)"}
                strokeWidth="1.25"
              />
              <circle
                cx={n.x + 16}
                cy={n.y + n.h / 2}
                r="3"
                fill={isCore ? "var(--accent)" : "var(--faint)"}
              />
              <text
                x={n.x + 28}
                y={n.y + n.h / 2 + 1}
                dominantBaseline="middle"
                fill="var(--text)"
                fontSize="12.5"
                fontWeight="500"
                style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
              >
                {n.label}
              </text>
              <text
                x={n.x + n.w - 12}
                y={n.y + n.h / 2 + 1}
                textAnchor="end"
                dominantBaseline="middle"
                fill="var(--faint)"
                fontSize="9"
                letterSpacing="0.09em"
                style={{ fontFamily: "var(--font-geist-mono), monospace" }}
              >
                {n.meta.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      <style>{`
        .hero-flow path {
          stroke-dasharray: 26 210;
          stroke-dashoffset: 236;
          animation: heroFlow 3.4s linear infinite;
        }
        @keyframes heroFlow {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-flow path { animation: none; stroke-dasharray: none; opacity: .35; }
        }
      `}</style>
    </div>
  );
}
