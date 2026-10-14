import * as simpleIcons from "simple-icons";

type SimpleIcon = { title: string; path: string; hex: string };

export type TechIcon = {
  title: string;
  path: string;
  /** Brand color, used as-is unless it would be invisible against the theme. */
  colorLight: string;
  colorDark: string;
};

/**
 * Tech label -> Simple Icons slug. Shared by the Skills groups and the project
 * cards in Work, so a name only needs mapping once.
 *
 * Only brands appear here. Practices and fields (CI/CD, Natural Language
 * Processing, Computer Vision, Model Pipeline) have no logo to show, and
 * Simple Icons carries no Amazon Web Services mark, so those render as plain
 * text tags.
 */
const SLUGS: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  Python: "python",
  Java: "openjdk",
  React: "react",
  "React Native": "react",
  "Next.js": "nextdotjs",
  HTML5: "html5",
  CSS3: "css",
  Tailwind: "tailwindcss",
  Expo: "expo",
  "Node.js": "nodedotjs",
  Express: "express",
  Django: "django",
  Flask: "flask",
  "Spring Boot": "springboot",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Git: "git",
  Docker: "docker",
  Ngrok: "ngrok",
  Cloudflare: "cloudflare",
  Linux: "linux",
  "Raspberry Pi 5": "raspberrypi",
  "Nvidia Jetson": "nvidia",

  // Appear only in project tech stacks
  Vercel: "vercel",
  "Cloudflare Tunnel": "cloudflare",
  "Meta WitAI API": "meta",
};

const icons = simpleIcons as unknown as Record<string, SimpleIcon | undefined>;

const toExportName = (slug: string) => `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;

/** WCAG relative luminance, 0 (black) to 1 (white). */
function luminance(hex: string): number {
  const channels = [0, 2, 4]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/*
 * Brand colors are used unchanged except at the extremes. Six marks here
 * (Next.js, Express, Expo, ngrok, Django, OpenJDK) are essentially black and
 * would vanish on the dark theme - those brands all publish a white version
 * for dark backgrounds, which is what the fallback mirrors.
 */
const TOO_DARK = 0.05;
const TOO_LIGHT = 0.9;

export function getTechIcon(skill: string): TechIcon | null {
  const slug = SLUGS[skill];
  if (!slug) return null;
  const icon = icons[toExportName(slug)];
  if (!icon) return null;

  const brand = `#${icon.hex}`;
  const l = luminance(icon.hex);
  return {
    title: icon.title,
    path: icon.path,
    colorLight: l > TOO_LIGHT ? "#16161a" : brand,
    colorDark: l < TOO_DARK ? "#f2f2f0" : brand,
  };
}
