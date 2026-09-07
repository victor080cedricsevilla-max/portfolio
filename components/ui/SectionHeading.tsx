import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Rendered on the right at desktop widths — filters, counts, links. */
  aside?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  aside,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div
        className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
          align === "center" ? "text-center md:text-left" : ""
        }`}
      >
        <div className={align === "center" ? "mx-auto max-w-2xl md:mx-0" : "max-w-2xl"}>
          <p className="label-mono mb-4 flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="inline-block h-px w-6 bg-accent-line"
            />
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-[15px] leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>
    </Reveal>
  );
}
