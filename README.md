# Victor Sevilla — Portfolio

One-page developer portfolio. Next.js 16 (App Router), React 19, TypeScript,
Tailwind CSS 4, dark/light themes via `next-themes`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # typecheck
```

## Where to edit things

**All content lives in [`data/portfolio.ts`](data/portfolio.ts).** Nothing is
hard-coded into components — change the data file and the whole page follows.

| What | Where in `data/portfolio.ts` |
| --- | --- |
| Name, role, location, avatar | `person` |
| Email, LinkedIn, Instagram, GitHub | `socials` |
| Deployed URL (canonical + Open Graph) | `siteUrl` |
| Hero rotating labels | `capabilities` |
| Stat strip | `stats` |
| About copy + profile card | `aboutParagraphs`, `profileCard` |
| Featured case studies | `featuredProjects` |
| Smaller projects and practice pieces | `smallProjects` |
| Skills tabs | `skillGroups` |
| Chip tooltips | `skillTooltips` |
| Engineering principle cards | `principles` |
| Achievements timeline | `achievements` |

### Adding your GitHub link

`socials.github` is the placeholder `YOUR_GITHUB_URL`. Replace it with the real
profile URL and the GitHub button appears automatically in the hero and footer
(`hasGithub` gates it, so nothing broken shows until then).

### Project screenshots

Each featured project points at a file under `public/projects/`:

```
public/projects/fieldtrip360.png     ✓ in place
public/projects/gen-zone-works.png   ✓ in place
public/projects/iskolarsph.png       ✓ in place
public/projects/language-bridge.png  — placeholder until added
```

Until a file exists, the card renders a labelled placeholder naming the exact
path. To add or replace a screenshot:

1. Drop the image into `public/projects/` with the filename above (PNG, JPG or
   WebP all work — `next/image` converts and resizes on the fly).
2. Set `hasShot: true` on that project in `data/portfolio.ts`.

A 16:9 image around 1900×1070 works best; the cards crop to 16:9 from the top.

### Repo and live links per project

Add `repoUrl` and/or `liveUrl` to any entry in `featuredProjects` and the
Source / Live demo buttons appear on that card.

## Structure

```
app/          layout (metadata, JSON-LD, fonts), page, global tokens
components/   Navbar, ThemeToggle, CommandPalette, BackToTop, Reveal
  sections/   Hero, Stats, About, FeaturedProjects, MoreProjects,
              Skills, Engineering, Achievements, Contact, Footer
  ui/         SectionHeading, Pill, ProjectShot, SocialLinks,
              FeaturedProjectCard, BrandIcons
data/         portfolio.ts — all site content
lib/          hooks.ts — scroll, in-view, count-up, reduced motion
types/        shared TypeScript interfaces
public/       pfp.jpg, favicon.svg, projects/
```

## Notes

- **Theming** — design tokens are CSS custom properties in `app/globals.css`
  (`:root` for light, `.dark` for dark), bridged into Tailwind via `@theme inline`.
  Change a colour once there and it applies everywhere.
- **Server components by default.** Only Navbar, CommandPalette, BackToTop,
  Reveal, Stats, Skills, FeaturedProjects and the card interactions are client
  components.
- **Accessibility** — skip link, visible focus rings, keyboard-operable nav and
  palette, `aria-live` on the project filter, 44px+ touch targets, and every
  animation behind `prefers-reduced-motion`.
- **Command palette** — <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>K</kbd>.
- No Three.js: the hero diagram is hand-authored SVG, so nothing heavy ships to
  mobile.

## Deploy

Pushed to GitHub and deployed on Vercel. Any push to `main` redeploys.
