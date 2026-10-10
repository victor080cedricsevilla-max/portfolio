import { ArrowRight, Download, Mail } from "lucide-react";
import { person } from "@/data/portfolio";
import { CapabilityTicker } from "@/components/sections/CapabilityTicker";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="grid-field pointer-events-none absolute inset-0 -z-10"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="label-mono mb-6 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="inline-block h-px w-6 bg-accent-line"
              />
              Full-Stack + Mobile Developer
            </p>

            <h1
              id="hero-title"
              className="text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.032em] text-ink sm:text-[3.4rem] lg:text-[3.9rem]"
            >
              I build mobile and web products from{" "}
              <span className="text-accent">interface to infrastructure</span>.
            </h1>

            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
              {person.summary}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#work"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-[14.5px] font-medium text-accent-contrast transition-opacity hover:opacity-90"
              >
                View my work
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 text-[14.5px] font-medium text-ink transition-colors hover:border-accent-line hover:text-accent"
              >
                <Mail aria-hidden="true" className="size-4" />
                Contact me
              </a>
              <a
                href="/cv/Victor%20Sevilla%20CV.pdf"
                download="Victor Sevilla CV.pdf"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 text-[14.5px] font-medium text-ink transition-colors hover:border-accent-line hover:text-accent"
              >
                <Download aria-hidden="true" className="size-4" />
                Download CV
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <SocialLinks variant="icons" />
              <CapabilityTicker />
            </div>
          </div>

          {/* Architecture diagram — desktop only; it is decoration on a phone
              and the label text would be unreadable at that width. */}
          <div className="relative hidden lg:block">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-[28px] border border-line/70 bg-surface/40"
            />
            <div className="px-4 py-2">
              <p className="label-mono mb-5">Typical system shape</p>
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
