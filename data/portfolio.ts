import type {
  Achievement,
  EngineeringPrinciple,
  FeaturedProject,
  SkillGroup,
  SmallProject,
  Stat,
} from "@/types";

/* -------------------------------------------------------------------------- */
/*  Identity + contact — single source of truth for every link on the site.    */
/* -------------------------------------------------------------------------- */

export const person = {
  name: "Victor Sevilla",
  shortName: "Victor",
  monogram: "VS",
  role: "Full-Stack + Mobile Developer",
  location: "Philippines",
  avatar: "/pfp.jpg",
  summary:
    "I build cross-platform apps in Flutter and React Native, modern web applications with React and Next.js, and Firebase-backed systems involving authentication, cloud functions, AI, maps, geofencing, notifications, and real-time data.",
} as const;

export const socials = {
  email: "victor080cedricsevilla@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/victor-sevilla-39b3772b6?utm_source=share_via&utm_content=profile&utm_medium=member_ios&fbclid=IwY2xjawULecpwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMUJrVHc2cWNRTnpSMmxJNXZzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeORJMRaq5MV8snI_RnKf9A43XUymjO46Ub4pCNUrNuaNnrjz5zofZH7oMc_s_aem_gzdRx1iCC7lgZzvH47FUIw",
  instagram: "https://www.instagram.com/yaboi.ceddd/",
  instagramHandle: "@yaboi.ceddd",
  /** Replace with the real profile URL when ready. */
  github: "YOUR_GITHUB_URL",
} as const;

export const mailto = `mailto:${socials.email}`;

/** Set once the site is live so canonical + Open Graph URLs resolve absolutely. */
export const siteUrl = "https://victor-sevilla.vercel.app";

export const hasGithub = !socials.github.startsWith("YOUR_");

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "engineering", label: "Engineering" },
  { id: "contact", label: "Contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

export const capabilities = [
  "Flutter",
  "React Native",
  "Next.js",
  "Firebase",
  "AI Integration",
  "Maps & Geofencing",
];

/* -------------------------------------------------------------------------- */
/*  Quick stats                                                               */
/* -------------------------------------------------------------------------- */

export const stats: Stat[] = [
  {
    value: 13,
    suffix: "+",
    label: "Substantial apps",
    note: "Shipped beyond scaffold stage",
  },
  {
    value: 44,
    suffix: "K+",
    label: "Lines of Dart",
    note: "Across 7 Flutter apps",
  },
  {
    value: 53,
    suffix: "K+",
    label: "Lines of TS / JS",
    note: "Across 6 React + RN apps",
  },
  {
    value: 2,
    suffix: "",
    label: "Mobile ecosystems",
    note: "Flutter and React Native",
  },
  {
    value: 6,
    suffix: "",
    label: "Philippine languages",
    note: "Text, voice and OCR translation",
  },
  {
    value: 59,
    suffix: "%",
    label: "Bundle reduction",
    note: "264 KB to 108 KB gzip",
  },
];

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

export const aboutParagraphs = [
  "I build mobile apps in Flutter and web applications in React and Next.js, backed by Firebase — and where a project calls for it, Supabase, MySQL or PHP. My work ranges from Gen Zone Works, a live quoting site for a Melbourne cleaning business, to FieldTrip360, a school field-trip platform with GPS tracking, geofenced parent alerts, QR attendance and AI-verified consent forms, to iSkolarsPH, which matches Filipino students with scholarships that fit their profile.",
  "I focus on the engineering behind the interface too. Authorization belongs in security rules rather than UI checks. Uploaded documents are treated as untrusted input. Large admin dependencies load only when needed. Infrastructure failures fall back to manual review rather than producing incorrect decisions. And every page ships with the metadata, structured data and semantic markup it needs to be found.",
];

export const profileCard: { label: string; items: string[] }[] = [
  { label: "Mobile", items: ["Flutter", "React Native", "Expo"] },
  { label: "Web", items: ["React", "Next.js", "Tailwind", "Bootstrap"] },
  { label: "Backend", items: ["Firebase", "Supabase", "MySQL", "PHP", "Node.js"] },
  {
    label: "Specialties",
    items: ["AI", "Maps", "Geofencing", "Security", "Performance", "SEO"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Featured projects                                                         */
/* -------------------------------------------------------------------------- */

export const featuredProjects: FeaturedProject[] = [
  {
    id: "fieldtrip360",
    name: "FieldTrip360",
    tagline: "School field-trip management, built for multi-school use.",
    role: "Solo developer — architecture, mobile app, Cloud Functions",
    platform: "Flutter + Firebase",
    categories: ["mobile", "fullstack", "ai"],
    metrics: [
      { label: "Dart", value: "24,720 lines" },
      { label: "Commits", value: "22" },
      { label: "Files", value: "48" },
    ],
    description:
      "A field-trip platform schools run end to end: plan a trip, track the bus live, scan students on and off, collect signed waivers, and bill per student capacity.",
    stack: [
      "Flutter",
      "Cloud Firestore",
      "Firebase Auth",
      "Cloud Functions",
      "Cloud Storage",
      "FCM",
      "Google Maps",
      "Gemini",
    ],
    capabilities: [
      "Live GPS tracking",
      "Geofencing",
      "Parent alerts",
      "QR attendance",
      "AI document verification",
      "Prorated subscription billing",
      "Multi-school tenancy",
      "Cloud Functions",
      "Push notifications",
      "PDF waiver templates",
      "Parent–student linking",
      "Role-based access",
    ],
    engineering: {
      heading: "Security-rules-first authorization",
      points: [
        "Access control lives in firestore.rules, not in UI checks — verified against the deployed rules with the real SDK.",
        "Uploaded waiver documents are treated as untrusted input; the Gemini prompt states this explicitly.",
        "Approval is re-derived from individual verification checks rather than trusting the model's own decision field.",
        "If the AI service is unavailable, submissions stay pending for manual review — infrastructure failure never reads as a rejection.",
      ],
    },
    shot: "/projects/fieldtrip360.png",
    hasShot: true,
    flags: ["Flagship"],
  },
  {
    id: "gen-zone-works",
    name: "Gen Zone Works",
    tagline: "Live lead-generation and quoting for a Melbourne cleaning business.",
    role: "Freelance — full build, client project",
    platform: "Vite + React + Firebase",
    categories: ["web", "fullstack"],
    metrics: [
      { label: "Source", value: "6,617 lines" },
      { label: "Commits", value: "12" },
      { label: "Suburbs", value: "594" },
    ],
    description:
      "Visitors get an instant, itemised cleaning quote; the business manages every request from a login-protected admin panel. Runs entirely on Firebase's free tier.",
    stack: [
      "Vite",
      "React",
      "Cloud Firestore",
      "Firebase Auth",
      "jsPDF",
      "Geolocation API",
      "Vercel",
    ],
    capabilities: [
      "Condition-aware quote estimator",
      "594 generated suburbs",
      "Geolocation",
      "PDF quote generation",
      "Admin dashboard",
      "Firestore",
      "Authentication",
      "Hardened security rules",
    ],
    engineering: {
      heading: "Ship less JavaScript to the people who don't need it",
      points: [
        "Admin routes are lazy-loaded and Firestore, Auth and jsPDF are dynamically imported.",
        "The public landing page ships ~108 KB gzip instead of ~264 KB — a 59% cut on the page customers actually load.",
        "Authorization is enforced in firestore.rules: anonymous create with a validated payload, admin-only read and update, no deletes.",
      ],
    },
    result: { value: "59%", label: "smaller initial bundle" },
    shot: "/projects/gen-zone-works.png",
    hasShot: true,
    flags: ["Client work"],
  },
  {
    id: "iskolarsph",
    name: "iSkolarsPH",
    tagline: "Scholarship matching for Filipino students.",
    role: "Solo developer — full front-end architecture",
    platform: "Next.js 16 + React 19",
    categories: ["web", "fullstack", "ai"],
    metrics: [
      { label: "Source", value: "15,723 lines" },
      { label: "Routes", value: "15" },
      { label: "Roles", value: "3" },
    ],
    description:
      "iSkolarsPH matches Filipino students with scholarships tailored to their academic profile — one shared application, every deadline tracked. Students, donors and administrators each get their own dashboard and permissions.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Radix UI",
      "Zod",
      "React Hook Form",
      "Recharts",
      "Firebase",
      "Gemini",
    ],
    capabilities: [
      "AI eligibility matching",
      "15 routes",
      "3 user roles",
      "29 Radix UI primitives",
      "Zod validation",
      "React Hook Form",
      "Recharts",
      "Three.js",
      "GSAP",
      "Firebase",
      "Responsive dashboards",
    ],
    engineering: {
      heading: "A component system, not a pile of imports",
      points: [
        "29 distinct Radix primitives compose an accessible design system shared across every role.",
        "Application forms validate against Zod schemas, so the same rules run on input and on submit.",
        "Route groups keep each role's dashboard isolated while reusing one primitive layer.",
      ],
    },
    shot: "/projects/iskolarsph.png",
    hasShot: true,
  },
  {
    id: "language-bridge",
    name: "Language Bridge",
    tagline: "Real-time translation across six Philippine languages.",
    role: "Solo developer — capstone project",
    platform: "Flutter + Google Cloud",
    categories: ["mobile", "ai"],
    metrics: [
      { label: "Dart", value: "6,497 lines" },
      { label: "Commits", value: "11" },
      { label: "Languages", value: "6" },
    ],
    description:
      "Translate by typing, speaking or pointing a camera at text — across English, Tagalog, Cebuano, Ilocano, Hiligaynon and Waray.",
    stack: [
      "Flutter",
      "Google Cloud Translation",
      "ML Kit OCR",
      "ElevenLabs",
      "flutter_tts",
      "speech_to_text",
      "Firebase Auth",
      "Cloud Firestore",
    ],
    capabilities: [
      "Text translation",
      "Voice translation",
      "Camera OCR",
      "Google Cloud Translation",
      "ML Kit OCR",
      "ElevenLabs TTS",
      "On-device speech",
      "Speech-to-text",
    ],
    engineering: {
      heading: "Hybrid speech for languages the device can't pronounce",
      points: [
        "Android ships on-device voices for English and Filipino only, so dialects had no speech output.",
        "A hybrid TTS layer uses on-device synthesis where it exists and falls back to ElevenLabs for the rest.",
        "OCR runs on-device via ML Kit, so camera translation works without uploading images.",
      ],
    },
    shot: "/projects/language-bridge.png",
    hasShot: false,
    flags: ["SDG 4", "SDG 10", "SDG 16"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Secondary projects                                                        */
/* -------------------------------------------------------------------------- */

export const smallProjects: SmallProject[] = [
  {
    name: "Nestly",
    platform: "Expo SDK 57 + TypeScript",
    scale: "23,719 lines",
    points: ["expo-router", "Zustand state", "Offline-first storage", "Jest + Testing Library"],
    tier: "secondary",
  },
  {
    name: "Encore Health",
    platform: "Expo SDK 57 + TypeScript",
    scale: "9,291 lines · 40 commits",
    points: ["Onboarding funnel", "Meal planning", "Localization", "EAS release pipeline"],
    tier: "secondary",
  },
  {
    name: "SkinShop",
    platform: "Flutter + Firebase",
    scale: "5,095 lines",
    points: ["Provider state", "Cached images", "Shimmer", "Staggered animations"],
    tier: "secondary",
  },
  {
    name: "HipWorks",
    platform: "Expo + TypeScript",
    scale: "4,551 lines · 15 commits",
    points: ["React Navigation", "Async storage", "SVG rendering"],
    tier: "secondary",
  },
  {
    name: "Wishlist Saver",
    platform: "Flutter + Firebase",
    scale: "4,173 lines",
    points: [
      "Google Sign-In",
      "Storage uploads",
      "Scheduled notifications",
      "Timezone support",
    ],
    tier: "secondary",
  },
  {
    name: "AuraArchive",
    platform: "HTML · CSS · JavaScript",
    scale: "11 pages",
    points: ["Interactive quiz", "Shop-the-look", "Built without a framework"],
    tier: "secondary",
  },
  {
    name: "Spotify Clone",
    platform: "Flutter",
    scale: "2,258 lines",
    points: ["UI recreation", "Animation study"],
    tier: "practice",
  },
  {
    name: "OnSkin",
    platform: "Expo",
    scale: "2,040 lines",
    points: ["Navigation and animation exercise"],
    tier: "practice",
  },
  {
    name: "SkinSort",
    platform: "Flutter",
    scale: "1,380 lines",
    points: ["Small UI build"],
    tier: "practice",
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    blurb: "Dart and TypeScript carry most of the work.",
    items: ["Dart", "TypeScript", "JavaScript", "PHP", "HTML", "CSS", "PowerShell"],
  },
  {
    id: "mobile",
    label: "Mobile",
    blurb: "Both major cross-platform stacks, shipped.",
    items: [
      "Flutter",
      "React Native",
      "Expo SDK 57",
      "expo-router",
      "React Navigation",
    ],
  },
  {
    id: "web",
    label: "Web",
    blurb: "App Router front-ends with an accessible primitive layer.",
    items: [
      "React 19",
      "Next.js 16",
      "Vite",
      "Tailwind CSS 4",
      "Bootstrap",
      "Radix UI",
      "shadcn/ui patterns",
      "React Hook Form",
      "Zod",
      "SEO",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    blurb: "Firebase across four products, plus PHP and serverless functions.",
    items: [
      "Firebase",
      "Firebase Auth",
      "Cloud Functions",
      "Firebase Storage",
      "Firebase Cloud Messaging",
      "Node.js",
      "PHP",
      "REST APIs",
      "Vercel Functions",
      "SMTP",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    blurb: "Document, relational and Postgres-backed — picked per project.",
    items: ["Cloud Firestore", "MySQL", "Supabase"],
  },
  {
    id: "ai",
    label: "AI & ML",
    blurb: "Model calls with validation and injection defenses around them.",
    items: [
      "Google Gemini",
      "Google GenAI",
      "Google Cloud Translation",
      "ML Kit OCR",
      "ElevenLabs TTS",
      "Speech-to-Text",
      "Prompt-injection defense",
    ],
  },
  {
    id: "maps",
    label: "Maps & Location",
    blurb: "Live tracking, geofences and address lookup without vendor lock-in.",
    items: [
      "Google Maps",
      "react-native-maps",
      "Geofencing",
      "Geolocation",
      "Polyline routing",
      "Reverse geocoding",
      "Nominatim",
      "BigDataCloud",
    ],
  },
  {
    id: "state",
    label: "State",
    blurb: "Whatever the platform's idiom actually is.",
    items: [
      "Zustand",
      "Provider",
      "InheritedNotifier",
      "AsyncStorage",
      "SharedPreferences",
    ],
  },
  {
    id: "tooling",
    label: "Tooling",
    blurb: "Build, test and release pipelines on both ecosystems.",
    items: [
      "Git",
      "GitHub",
      "EAS Build",
      "EAS Submit",
      "EAS Update",
      "Codemagic",
      "Vercel",
      "Firebase Hosting",
      "Jest",
      "Testing Library",
      "ESLint",
      "Prettier",
      "TypeScript strict",
      "Gradle",
      "Android SDK",
      "Xcode targets",
    ],
  },
];

/** Short explanations shown on hover/focus for the less familiar entries. */
export const skillTooltips: Record<string, string> = {
  InheritedNotifier:
    "Flutter's built-in way to push state down the widget tree without a third-party package.",
  "expo-router": "File-based routing for React Native, mirroring the Next.js App Router.",
  Zustand: "A small hook-based state store for React and React Native.",
  "ML Kit OCR": "Google's on-device text recognition — no image ever leaves the phone.",
  Nominatim: "OpenStreetMap's free geocoding service; street-level, rate-limited.",
  BigDataCloud: "A reverse-geocoding API used as the reliable suburb-level fallback.",
  Codemagic: "A CI service built specifically for Flutter build and release pipelines.",
  "EAS Build": "Expo's cloud service for producing signed native app binaries.",
  "EAS Update": "Ships JavaScript-only changes over the air, without an app-store review.",
  "Prompt-injection defense":
    "Treating model input as untrusted, and re-deriving decisions from checks rather than model output.",
  "shadcn/ui patterns":
    "Copy-in components built on Radix primitives, owned in your own codebase.",
  Zod: "Schema validation that gives you TypeScript types from the same definition.",
  Provider: "The dependency-injection and state package most Flutter apps standardise on.",
  Recharts: "A composable React charting library built on D3.",
  "Radix UI": "Unstyled, accessible React component primitives.",
  Supabase:
    "Open-source Firebase alternative on Postgres — auth, storage and realtime in one.",
  "REST APIs":
    "Designing and consuming HTTP/JSON endpoints — how every service on this page talks to another.",
  SEO: "Metadata, Open Graph, structured data and semantic markup so pages rank and preview correctly — this site included.",
};

/* -------------------------------------------------------------------------- */
/*  Engineering principles                                                    */
/* -------------------------------------------------------------------------- */

export const principles: EngineeringPrinciple[] = [
  {
    id: "authz",
    title: "Security-rules-first authorization",
    summary: "Access control lives in firestore.rules, not in hidden buttons.",
    detail: [
      "Anonymous users receive only explicitly allowed access — create a quote with a validated payload, nothing more.",
      "Admin operations require authentication and role verification on the server.",
      "Rules are tested against the deployed project with the real Firebase SDK: anonymous read, tamper and delete all denied.",
    ],
  },
  {
    id: "adversarial",
    title: "Adversarial input handling",
    summary: "Uploaded documents are treated as untrusted input.",
    detail: [
      "The AI verification prompt states that uploaded files are untrusted and must never be followed as instructions.",
      "Final approval is derived from individual validation checks instead of the model's decision field.",
      "Validated end to end: a document containing an injected override instruction was rejected, with the injection named.",
    ],
  },
  {
    id: "billing",
    title: "Prorated subscription billing",
    summary: "Capacity tiers priced per student, with honest proration.",
    detail: [
      "Upgrades charge only for the added capacity across the remaining billing period.",
      "Downgrades create a credit carried to the next invoice rather than a refund.",
      "A downgrade is blocked when the registered student count exceeds the requested tier, so no student is stranded.",
    ],
  },
  {
    id: "bundle",
    title: "Bundle-size optimization",
    summary: "Lazy admin routes and dynamic imports for heavy dependencies.",
    detail: [
      "Admin routes load only when an admin arrives; Firestore, Auth and jsPDF are dynamically imported.",
      "The public landing page went from roughly 264 KB gzip to 108 KB gzip.",
      "Nothing was removed from the product — the weight simply stopped loading for people who never open the admin panel.",
    ],
    metric: { value: "59%", label: "smaller initial bundle" },
  },
  {
    id: "failopen",
    title: "Fail-open infrastructure",
    summary: "A broken service must never look like a rejected document.",
    detail: [
      "If AI verification is unavailable, the waiver stays pending and is flagged for manual review.",
      "The failure is recorded with an explicit error field rather than swallowed.",
      "A parent never sees an infrastructure outage rendered as a rejection of their child's consent form.",
    ],
  },
  {
    id: "layers",
    title: "Layered architecture",
    summary: "Firebase and HTTP logic stay outside UI components.",
    detail: [
      "Projects separate config, controllers, models, repositories, views, widgets and services.",
      "Screens read from repositories; no widget talks to Firestore directly.",
      "Colors, spacing and radius come from centralized design tokens rather than ad-hoc values.",
    ],
  },
  {
    id: "tenancy",
    title: "Role-based multi-tenancy",
    summary: "Data is scoped by school, with hashed activation codes.",
    detail: [
      "Every record carries a school scope; queries are constrained through shared helpers.",
      "Parents link to students using hashed, school-issued activation codes rather than guessable identifiers.",
      "Admin, teacher, parent and student each get separate permissions and workflows.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Achievements                                                              */
/* -------------------------------------------------------------------------- */

export const achievements: Achievement[] = [
  {
    tag: "Platform",
    title: "Built a 24,700+ line Flutter field-trip platform",
    detail:
      "Live location tracking, geofencing, QR attendance and multi-school tenancy, in production use shape.",
  },
  {
    tag: "AI",
    title: "Shipped an AI waiver-verification pipeline on Google Gemini",
    detail:
      "With prompt-injection defenses and deterministic validation — approval re-derived from individual checks, not model output.",
  },
  {
    tag: "Billing",
    title: "Designed prorated capacity billing for school subscriptions",
    detail:
      "Upgrades charge the difference for days remaining; downgrades credit forward and are blocked when they would strand students.",
  },
  {
    tag: "Performance",
    title: "Reduced a client landing-page bundle by 59%",
    detail:
      "From roughly 264 KB gzip to 108 KB, via lazy admin routes and dynamic Firestore, Auth and jsPDF imports.",
  },
  {
    tag: "Security",
    title: "Verified Firebase authorization against deployed security rules",
    detail:
      "Using the real SDK — anonymous create allowed with a validated payload; read, tamper and delete all denied.",
  },
  {
    tag: "Accessibility",
    title: "Built translation across six Philippine languages",
    detail:
      "Text, speech and camera OCR, with hybrid text-to-speech covering dialects that have no on-device voice.",
  },
  {
    tag: "Client",
    title: "Delivered a production website for a Melbourne cleaning business",
    detail:
      "Quote estimation, PDF generation, geolocation and an admin panel, running entirely on a free-tier backend.",
  },
];
