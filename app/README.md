# Personal Portfolio — Adam Yun

Single-page portfolio built with Next.js (App Router), React 19 and hand-written CSS.

## Stack

- **Next.js 16** — App Router, React Server Components by default
- **TypeScript** — strict mode
- **Plain CSS** — design tokens in `app/globals.css`, light/dark via `prefers-color-scheme`
- No UI framework or CSS framework

## Getting started

```bash
cd app
npm install
npm run dev     # http://localhost:3000
```

## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the dev server               |
| `npm run build`     | Production build                   |
| `npm run start`     | Serve the production build         |
| `npm run lint`      | ESLint (`eslint-config-next`)      |
| `npm run typecheck` | TypeScript, no emit                |

## Structure

```
app/
├─ app/
│  ├─ layout.tsx        # Root layout, fonts, metadata (incl. OG/Twitter)
│  ├─ page.tsx          # Server component; composes the sections
│  └─ globals.css       # Design tokens + all component styles
├─ components/          # One component per section
│  ├─ Nav.tsx           # client — mobile menu
│  ├─ Hero.tsx          # client — avatar greeting
│  ├─ Projects.tsx      # client — gallery state
│  ├─ ProjectGallery.tsx# client — accessible modal
│  ├─ About.tsx         # server
│  ├─ Skills.tsx        # server
│  ├─ Experience.tsx    # server
│  ├─ Contact.tsx       # server
│  └─ Footer.tsx        # server
├─ data/portfolio.ts    # All content, typed. Edit here, not in components.
└─ public/              # Images
```

Only the four interactive components are client components; everything else renders on
the server.

## Editing content

All copy, projects, skills and experience live in `data/portfolio.ts`. Project images are
referenced by root-relative path (`/my-image.png`) and live in `public/`.

## Deployment

Deploys to Vercel from `app/` as the project root.
