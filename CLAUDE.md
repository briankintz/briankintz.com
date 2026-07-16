# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal site (briankintz.com) — Astro, fully static, deployed on **Vercel** (`@astrojs/vercel` adapter). Built on the "Notebook" design system: dot-grid paper, white content blocks, Aleo slab headings + Lato body, purple/orange accents. [src/styles/tokens.css](src/styles/tokens.css) is the design source of truth ([docs/design-system.md](docs/design-system.md) is the importable full-system reference — keep it in sync when tokens or design rules change); `vercel.json` holds the security headers (redirects live on Cloudflare).

## Commands

```bash
npm run dev       # Dev server (localhost:4321)
npm run build     # Production build → dist/
npm run preview   # Serve the production build
npx prettier --write <file>   # Format (.prettierrc: no semi, single quotes, 120)
```

No test suite — `npm run build` is the gate (content collections are zod-validated at build time).

## Conventions (must follow)

- **Tokens only.** All component styles derive from the design tokens (imported globally). Purple is _structural_ (links, buttons, active states, step numbers); orange is _annotation_ (highlighter, recipe tags, margin notes, tips) — never swap their jobs. Orange **text** always uses `--color-orange-text` (AA contrast); `--color-orange` is for graphics only (highlighter, borders, icons). Chips are one tag shape (`--radius-tag`), never pills — clickable size for filters, slim size for inline display. Highlighter swipe at most once per page. Dashed borders only on stat tiles and the recipe meta strip. Shared UI patterns are Astro components (`TagChip`, `LinkButton`, `Highlight`, `LabelChip` in `src/components/`), not global CSS classes — `.wrap` is the only global class utility (layout measure, in `src/styles/notebook.css` alongside element-level rules like focus/reduced-motion).
- **Icons are inline SVG only** — stroke-based, `currentColor`. No Font Awesome, no icon fonts, no emoji as UI. `grep -ri "fontawesome\|font-awesome\|fa-" src/` must return nothing. **One exception:** the Side Quests card watermarks are full-colour illustration SVGs in `public/quest-icons/` (purchased, no attribution required), rendered decoratively via lazy `<img>` — that pattern is for large card-art watermarks only, never UI icons.
- **Fonts self-hosted** via Fontsource (Aleo headings, Lato body), only the weights actually used. No font/CDN requests in the production build.
- **Minimal JS.** No UI framework, no islands. Progressive enhancement only (e.g. cookbook tag filter is a tiny vanilla script; everything works with JS disabled). Ingredient checkboxes are CSS-only. The one sanctioned first-party script is Vercel Web Analytics (`<Analytics />` in `BaseLayout`) — same-origin on Vercel, cookieless, no-ops without JS; don't strip it as a mystery script.
- **Closed tag vocabulary** for recipes, enforced by the zod schema — never invent new tags or categories inline.
- **Tone split:** Work content is straight and metric-led, no jokes (figures like `>10×`, `−95%` in `src/data/work.ts` stay exactly as written; they originate from cv.md in the briankintz/briankintz repo). Brian's light voice belongs only in Cookbook/Side Quests, sparingly. **Exception:** humor Brian wrote into cv.md himself (e.g. the "Bavarian - basst scho." language line) carries over verbatim — never sanitize his authored copy; the no-jokes rule binds agent-written copy only.
- **Issue-driven branch & PR workflow** — reference or create a GitHub issue, branch off `main` with a descriptive name (`feat/…`, `fix/…`, `chore/…`), open a PR whose body starts with `Closes #NNN`. Never commit straight to `main`; Brian reviews and merges PRs.

## Definition of done

Before presenting work or opening a PR:

1. `npm run build` passes and `npx prettier --check "src/**/*.{astro,ts,css}"` is clean.
2. Pages still work with JS disabled (cookbook filter, ingredient checkboxes), make no external font/CDN/script requests, and hold Lighthouse ≥ 95 performance & accessibility.
3. Run `/simplify`.
