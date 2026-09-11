export type ProjectCategory = "mobile" | "web" | "fullstack" | "ai";

export interface FeaturedProject {
  /** Stable id, also used as the DOM anchor and screenshot filename stem. */
  id: string;
  name: string;
  tagline: string;
  role: string;
  platform: string;
  /** Categories this project matches in the filter bar. */
  categories: ProjectCategory[];
  /** Small factual metrics rendered as monospace metadata. */
  metrics: { label: string; value: string }[];
  description: string;
  stack: string[];
  capabilities: string[];
  engineering: {
    heading: string;
    points: string[];
  };
  /** Headline result, rendered as an emphasised figure when present. */
  result?: { value: string; label: string };
  /** Path under /public/projects. Rendered as a labelled placeholder until the file exists. */
  shot: string;
  hasShot: boolean;
  repoUrl?: string;
  liveUrl?: string;
  flags?: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  blurb: string;
  items: string[];
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  summary: string;
  detail: string[];
  metric?: { value: string; label: string };
}

export interface Achievement {
  title: string;
  detail: string;
  tag: string;
}

export interface Stat {
  value: number;
  /** Rendered after the counted number, e.g. "+" or "K+". */
  suffix: string;
  prefix?: string;
  label: string;
  note: string;
}
