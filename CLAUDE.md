# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with **Astro v6 + React 19**, server-rendered on Vercel, with i18n support for 10 languages.
**Package manager**: pnpm.

## Common Commands

```bash
pnpm install      # Install dependencies
pnpm dev         # Start dev server at localhost:4321
pnpm build       # Production build to ./dist/
pnpm preview     # Preview production build locally
pnpm format      # Run Prettier on all files
pnpm astro check # Run Astro type checking
```

## Architecture

### SSR Mode
All pages use Server-Side Rendering (`output: "server"` in astro.config.mjs). Add `export const prerender = false` to new pages.

### Path Aliases
- `@/*` maps to `src/*`
- `@constants/*` maps to `src/constants/*`

### i18n System
Translation files in `src/i18n/` — one file per locale. English dictionary type (`EnDict`) ensures type safety across all 10 locales. Import via `dict[locale]` from `src/i18n/index.ts`.

### Styling
Tailwind CSS v4 with custom theme in `src/styles/globals.css` using `@theme inline`. Use `cn()` from `@/utils` (clsx + tailwind-merge) for conditional classes.

### Admin Routes
Protected by IP allowlist + Basic Auth via `src/middleware.ts`. Requires env vars: `ALLOWED_IPS`, `ADMIN_USER`, `ADMIN_PASS`.

### Components
- **Layout-level**: `src/components/`
- **Reusable UI**: `src/ui/`
- **Page-specific**: co-located in `src/pages/`

### Icons
Use `<Icon name="mdi:github" />` from `astro-icon/components`. Icons come from `@iconify-json/*` packages. Local SVGs go in `src/icons/`.

### Server Actions
Defined in `src/actions/index.ts` using Astro's `defineAction` with Zod validation.
