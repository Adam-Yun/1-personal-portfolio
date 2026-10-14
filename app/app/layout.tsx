import type { Metadata } from "next";
import { Black_Ops_One } from "next/font/google";
import { developer } from "@/data/portfolio";
import "./globals.css";

// Headings only. Ships a single weight (400) and no italic; body copy stays
// on the system stack.
const heading = Black_Ops_One({
  variable: "--font-heading-face",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const title = `${developer.name} — ${developer.headline}`;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: developer.summary,
  openGraph: {
    title,
    description: developer.summary,
    type: "profile",
    images: [{ url: developer.avatar }],
  },
  twitter: {
    card: "summary",
    title,
    description: developer.summary,
    images: [developer.avatar],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script below adds a `js` class to
    // <html> before hydration, so the client attribute intentionally differs
    // from the server-rendered one.
    <html lang="en" className={heading.variable} suppressHydrationWarning>
      <head>
        {/*
          Marks JS as available before first paint. The scroll-reveal hidden
          state is scoped to .js, so with JS off the content renders visible
          instead of staying stuck at opacity 0.
        */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
