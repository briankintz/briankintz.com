# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal site (briankintz.com) — Astro, fully static, deployed on **Vercel** (`@astrojs/vercel` adapter).

**Redesign in progress ("Notebook").** The `handoff/` bundle is the source of truth: [handoff/IMPLEMENTATION.md](handoff/IMPLEMENTATION.md) (brief, site map, schemas, acceptance checklist), [handoff/design-system/DESIGN-SYSTEM.md](handoff/design-system/DESIGN-SYSTEM.md) + `tokens.css`, and four pixel-representative mockups in `handoff/mockups/`. The bundle is temporary reference material — delete it once the redesign ships. The cookbook at cookbook.briankintz.com (GitBook) folds in as a `recipes` content collection.

## Commands

```bash
npm run dev       # Dev server (localhost:4321)
npm run build     # Production build → dist/
npm run preview   # Serve the production build
npx prettier --write <file>   # Format (.prettierrc: no semi, single quotes, 120)
```

No test suite — `npm run build` is the gate (content collections are zod-validated at build time).

## Conventions (must follow)

- **Tokens only.** All component styles derive from the design tokens (imported globally). Purple is *structural* (links, buttons, active states, step numbers); orange is *annotation* (highlighter, recipe tags, margin notes, tips) — never swap their jobs. Highlighter swipe at most once per page. Dashed borders only on stat tiles and the recipe meta strip.
- **Icons are inline SVG only** — stroke-based, `currentColor`. No Font Awesome, no icon fonts, no emoji as UI. `grep -ri "fontawesome\|font-awesome\|fa-" src/` must return nothing.
- **Fonts self-hosted** via Fontsource (Aleo headings, Lato body), only the weights actually used. No font/CDN requests in the production build.
- **Minimal JS.** No UI framework, no islands. Progressive enhancement only (e.g. cookbook tag filter is a tiny vanilla script; everything works with JS disabled). Ingredient checkboxes are CSS-only.
- **Closed tag vocabulary** for recipes, enforced by the zod schema — never invent new tags or categories inline.
- **Tone split:** Work content is straight and metric-led, no jokes (figures like `>10×`, `−95%` stay exactly as written in cv.md). Brian's light voice belongs only in Cookbook/Side Quests, sparingly.
- **Issue-driven branch & PR workflow** — reference or create a GitHub issue, branch off `main` with a descriptive name (`feat/…`, `fix/…`, `chore/…`), open a PR whose body starts with `Closes #NNN`. Never commit straight to `main`; Brian reviews and merges PRs.

## Definition of done

Before presenting work or opening a PR:

1. `npm run build` passes.
2. Redesign work satisfies the acceptance checklist in [handoff/IMPLEMENTATION.md](handoff/IMPLEMENTATION.md) (mockup fidelity at 375/768/1280, Lighthouse ≥ 95 perf & a11y, filters work without JS, no Font Awesome traces, no external font requests).
3. Run `/simplify`.
