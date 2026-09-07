import { ArrowUpRight, Mail } from "lucide-react";
import { mailto, person, socials } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

const cards = [
  {
    key: "email",
    label: "Email",
    value: socials.email,
    action: "Send email",
    href: mailto,
    aria: `Send an email to ${socials.email}`,
    external: false,
    primary: true,
    icon: <Mail aria-hidden="true" className="size-5" />,
    note: "Best for project enquiries",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: person.name,
    action: "Connect on LinkedIn",
    href: socials.linkedin,
    aria: `Connect with ${person.name} on LinkedIn (opens in a new tab)`,
    external: true,
    primary: false,
    icon: <LinkedInIcon className="size-5" />,
    note: "Professional enquiries",
  },
  {
    key: "instagram",
    label: "Instagram",
    value: socials.instagramHandle,
    action: "Message on Instagram",
    href: socials.instagram,
    aria: `Message ${socials.instagramHandle} on Instagram (opens in a new tab)`,
    external: true,
    primary: false,
    icon: <InstagramIcon className="size-5" />,
    note: "Casual and social",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line bg-bg-alt px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="label-mono mb-4 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="inline-block h-px w-6 bg-accent-line"
              />
              For inquiries
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.028em] text-ink sm:text-[2.9rem] sm:leading-[1.06]">
              Let&rsquo;s build something useful.
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
              I&rsquo;m open to freelance projects, collaborations, internships,
              development work, and software-related opportunities involving
              mobile apps, websites, Firebase systems, AI integrations, maps,
              geofencing, and product development.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.key} delay={i * 70}>
              <a
                href={c.href}
                aria-label={c.aria}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`group card card-hover flex h-full flex-col p-6 ${
                  c.primary ? "border-accent-line bg-accent-soft" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`grid size-11 place-items-center rounded-xl border transition-colors ${
                      c.primary
                        ? "border-accent-line bg-surface text-accent"
                        : "border-line bg-surface-2 text-muted group-hover:border-accent-line group-hover:text-accent"
                    }`}
                  >
                    {c.icon}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-[18px] text-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>

                <p className="label-mono mt-6">{c.label}</p>
                <p className="mt-1.5 truncate text-[15px] font-medium text-ink">
                  {c.value}
                </p>
                <p className="mt-1 text-[12.5px] text-faint">{c.note}</p>

                <span
                  className={`mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium ${
                    c.primary ? "text-accent" : "text-muted group-hover:text-accent"
                  }`}
                >
                  {c.action}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-col items-start gap-5 rounded-2xl border border-line bg-surface px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="max-w-lg text-[15px] leading-relaxed text-muted">
              Need a mobile app, website, Firebase backend, or custom software
              project?{" "}
              <span className="font-medium text-ink">Let&rsquo;s talk.</span>
            </p>
            <a
              href={mailto}
              className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-accent px-6 text-[14.5px] font-medium text-accent-contrast transition-opacity hover:opacity-90"
            >
              <Mail aria-hidden="true" className="size-4" />
              Email me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
