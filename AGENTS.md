# AGENTS.md

Agentic coding instructions for Fabio Ghizoni's portfolio website.

## Project Overview

Personal portfolio built with **Astro v6 + React 19**, server-rendered on Vercel, with i18n for 10 languages.  
**Package manager**: pnpm (see `pnpm-lock.yaml` and `pnpm-workspace.yaml`).

## Build / Lint / Test Commands

```bash
pnpm install                             # Install dependencies
pnpm dev                                 # Dev server (--host)
pnpm build                               # Production build
pnpm preview                             # Preview production build
pnpm format                              # Prettier format (all files)
npx prettier --write path/to/file        # Format single file
pnpm astro check                         # Astro type checking
npx tsc --noEmit                         # Full TypeScript check
```

**Testing**: No test framework is configured.

## Code Style Guidelines

### TypeScript & Astro Config

- `astro/tsconfigs/strict` with `@/*` → `src/*` and `@constants/*` → `src/constants/*` path aliases
- All pages use **SSR mode** (`output: "server"` in astro.config); add `export const prerender = false` per-page
- Always type function params and return values. Prefer `interface` for object/component prop shapes, `type` for unions/utility types. Avoid `any`; use `unknown`.

### Component Patterns (Astro)

```astro
---
// Named imports for everything — no default exports except cn()
import cn from "@/utils";
import { Icon } from "astro-icon/components";
import type { ComponentProps } from "astro/types";

interface Props {
  title?: string;
  class?: string;
}

const { title = "Default", class: className = "" }: Props = Astro.props;

const classes = {
  root: cn("flex items-center gap-4", className),
  inner: "p-4",
};
---

<div class={classes.root}>
  <span class={classes.inner}>{title}</span>
</div>
```

### Naming Conventions

- **camelCase**: variables, functions, file names (`.ts`, `.astro`)
- **PascalCase**: components, types, interfaces
- **SCREAMING_SNAKE_CASE**: constants (rarely used)
- Client script files in `src/scripts/` use **camelCase** named exports

### Imports Order

1. External packages (`astro:*`, `react`, `resend`, `clogs.ts`, etc.)
2. `@/` path aliases (aliases to `src/*`)
3. `@constants/*` path alias (for `personal.ts` / `index.ts`)
4. Relative imports (`../utils`) — only when the file is deep in the tree

Note: Prefer `@/` over relative paths. Some older files still use relative `../utils` — migrate to `@/utils` when touched.

### React Components (.tsx)

- Function components with explicit prop `interface` (extend `React.PropsWithChildren` if needed)
- `@react-email/components` for email templates (Currently not used; email templates are plain string-returning functions)
- Default prop values in function signature

### Styling — Tailwind CSS v4

- **`@theme inline`** in `src/styles/globals.css` — defines custom colors (oklch), spacing, fonts, animations
- Use `cn()` (clsx + tailwind-merge) for conditional class merging — imported as default from `@/utils`
- Use `removeSpaces()` helper for multi-line template-literal class strings
- Organize class strings per-component in a `classes` object inside the frontmatter
- `import "@tailwindcss/vite"` handles the Tailwind plugin in Vite

```astro
---
const classes = {
  container: removeSpaces("flex items-center gap-4 dark:bg-black"),
};
---
```

### i18n

- Translation files in `src/i18n/` — one file per locale (`en.ts`, `pt.ts`, etc.)
- English dictionary type is exported as `EnDict` for type safety across all locales
- All dictionaries are imported and merged in `src/i18n/index.ts` as `dict: Record<string, EnDict>`
- Keys are nested: `actions`, `components.*`, `pages.*`, `ui.*`

### Astro Actions (Server Actions)

Place in `src/actions/index.ts`:

```typescript
import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";

export const server = {
  actionName: defineAction({
    accept: "form",
    input: z.object({ field: z.string().trim().min(1) }),
    handler: async (input) => {
      throw new ActionError({ code: "BAD_REQUEST", message: "Error" });
      return { success: true, data: input };
    },
  }),
};
```

### Client-Side Scripts

Files in `src/scripts/` are imported via `<script src="../scripts/file.ts"></script>` or `<script>import ...</script>` in Astro components. These scripts:

- Use `addEventListener("DOMContentLoaded", ...)` and `addEventListener("astro:page-load", ...)` for lifecycle hooks
- Export named functions, not default exports
- Import `c` from `clogs.ts` for client-side logging

### Logging

```typescript
import c from "clogs.ts";
c.log("Message");
c.error("Error");
c.warn("Warning");
c.strColor("text", c.foreground.cyan);
```

### Error Handling

- Use Astro's `ActionError` with proper HTTP codes for form/API errors
- Middleware in `src/middleware.ts` handles admin route protection (IP check + Basic Auth)
- Log errors with context from `clogs.ts` server-side
- Never expose internal error details to production clients

### Icons

```astro
---
import { Icon } from "astro-icon/components";
---

<Icon name="mdi:github" class="h-6 w-6" />
```

Icons from `@iconify-json/*` packages, configured via `astroIcon({ iconDir: "src/icons" })` in astro.config. SVG files in `src/icons/` are also available as local icons.

## Project Structure

```
src/
├── actions/           # Astro server actions
├── components/        # Astro components (layout-level)
├── constants/         # Site config (personal.ts, index.ts)
├── emails/            # Email template functions (plain string-returning)
├── i18n/              # Translation files (10 locales)
├── icons/             # Local SVG icon assets
├── layouts/           # Page layouts (Layout.astro, Curriculum.astro)
├── pages/             # Astro routes (SSR)
├── scripts/           # Client-side TypeScript modules
├── styles/            # globals.css (@theme inline), keyframes.css, utilities.css
├── ui/                # Reusable UI components (header, hero-section, etc.)
├── middleware.ts      # Admin route protection (IP + Basic Auth)
└── utils.ts           # cn(), removeSpaces(), normalizeRoute(), googleFontsUrl()
```

## Environment Variables

- `RESEND_API_KEY` — Email API key (Resend)
- `ALLOWED_IPS` — Comma-separated IPs allowed to access `/admin`
- `ADMIN_USER` / `ADMIN_PASS` — Basic auth credentials for `/admin`
