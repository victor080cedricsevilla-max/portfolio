import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { person, siteUrl, socials } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${person.name} — ${person.role}`;
const description =
  "Victor Sevilla builds production mobile and web products: Flutter and React Native apps, Next.js front-ends, and Firebase backends with AI, maps, geofencing and real-time data.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${person.name}`,
  },
  description,
  keywords: [
    "Victor Sevilla",
    "Full-Stack Developer",
    "Mobile App Developer",
    "Flutter Developer",
    "React Native Developer",
    "Next.js Developer",
    "Firebase Developer",
    "Expo Developer",
    "TypeScript",
    "Philippines",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: person.name,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: person.avatar,
        width: 750,
        height: 750,
        alt: person.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [person.avatar],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/pfp.jpg" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  description,
  url: siteUrl,
  image: `${siteUrl}${person.avatar}`,
  email: `mailto:${socials.email}`,
  sameAs: [socials.linkedin, socials.instagram],
  knowsAbout: [
    "Flutter",
    "React Native",
    "Expo",
    "React",
    "Next.js",
    "TypeScript",
    "Dart",
    "Firebase",
    "Cloud Firestore",
    "Google Gemini",
    "Geofencing",
    "Mobile application development",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // Static, author-controlled JSON-LD — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
