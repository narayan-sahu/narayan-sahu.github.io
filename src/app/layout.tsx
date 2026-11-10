import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolio as p } from "@/data/portfolio";

const title = `${p.name} | ${p.title}`;
const description = `${p.name} is a ${p.title}. ${p.intro}`;

// URL-dependent tags are only emitted once `siteUrl` is set in portfolio.ts.
export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: p.name }],
  robots: { index: true, follow: true },
  openGraph: { title, description, type: "website", siteName: p.name, locale: "en", ...(p.siteUrl ? { url: p.siteUrl } : {}) },
  twitter: { card: "summary", title, description },
  ...(p.siteUrl ? { metadataBase: new URL(p.siteUrl), alternates: { canonical: p.siteUrl } } : {}),
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0d1117" }, { media: "(prefers-color-scheme: light)", color: "#f7f9fb" }] };

const themeScript = `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`;

// Schema.org Person: only facts already shown on the page. Links that are null are left out.
const sameAs = [p.links.github, p.links.linkedin].filter((u): u is string => Boolean(u));
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: p.name,
  jobTitle: p.title,
  ...(p.siteUrl ? { url: p.siteUrl } : {}),
  ...(sameAs.length ? { sameAs } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
