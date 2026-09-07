import { Mail } from "lucide-react";
import { hasGithub, mailto, socials } from "@/data/portfolio";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

interface SocialLinksProps {
  /** `inline` = icon + label row, `icons` = compact icon buttons. */
  variant?: "inline" | "icons";
  className?: string;
}

const iconClass = "size-[15px] shrink-0";

export function SocialLinks({ variant = "inline", className = "" }: SocialLinksProps) {
  const links = [
    {
      key: "email",
      href: mailto,
      label: "Email",
      aria: `Email ${socials.email}`,
      icon: <Mail className={iconClass} aria-hidden="true" />,
      external: false,
    },
    {
      key: "linkedin",
      href: socials.linkedin,
      label: "LinkedIn",
      aria: "Victor Sevilla on LinkedIn (opens in a new tab)",
      icon: <LinkedInIcon className={iconClass} />,
      external: true,
    },
    {
      key: "instagram",
      href: socials.instagram,
      label: "Instagram",
      aria: `Instagram ${socials.instagramHandle} (opens in a new tab)`,
      icon: <InstagramIcon className={iconClass} />,
      external: true,
    },
    ...(hasGithub
      ? [
          {
            key: "github",
            href: socials.github,
            label: "GitHub",
            aria: "GitHub profile (opens in a new tab)",
            icon: <GitHubIcon className={iconClass} />,
            external: true,
          },
        ]
      : []),
  ];

  const base =
    variant === "icons"
      ? "inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent-line hover:text-accent"
      : "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-[13px] text-muted transition-colors hover:border-accent-line hover:text-accent";

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {links.map((l) => (
        <li key={l.key}>
          <a
            href={l.href}
            aria-label={l.aria}
            className={base}
            {...(l.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {l.icon}
            {variant === "inline" ? <span>{l.label}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
