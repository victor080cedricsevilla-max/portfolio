import { person } from "@/data/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { FooterTopLink } from "@/components/sections/FooterTopLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="flex items-center gap-2.5 text-[15px] font-semibold text-ink">
              <span
                aria-hidden="true"
                className="grid size-7 place-items-center rounded-md border border-accent-line bg-accent-soft font-mono text-[10.5px] font-bold text-accent"
              >
                {person.monogram}
              </span>
              {person.name}
            </p>
            <p className="mt-2 text-[13.5px] text-muted">{person.role}</p>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-faint">
            © {year} {person.name} · Built with Next.js + TypeScript
          </p>
          <FooterTopLink />
        </div>
      </div>
    </footer>
  );
}
