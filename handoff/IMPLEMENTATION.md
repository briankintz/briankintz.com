# Implementation Brief: briankintz.com redesign ("Notebook")

**For:** Claude Code, working in `~/Dev/briankintz/briankintz.com`
**Reference material in this bundle:** `mockups/` (4 approved HTML mockups — the visual source of truth), `design-system/tokens.css`, `design-system/DESIGN-SYSTEM.md`

## Goal

Rebuild briankintz.com (existing Astro project, deployed on Vercel) with the approved "Notebook" design, and absorb the cookbook currently hosted on GitBook at cookbook.briankintz.com into the main site as a content collection. Remove Font Awesome entirely.

Before writing code: read the existing repo structure, `astro.config.mjs`, and `package.json`, and reuse whatever conventions already exist unless they conflict with this brief. Read all four mockups — they contain the exact CSS patterns to translate into components.

## Site map

| Route | Mockup | Notes |
|---|---|---|
| `/` | `mockups/index.html` | Hero + full Work section + teaser cards |
| `/cookbook` | `mockups/cookbook.html` | Tag filters + category-grouped recipe cards |
| `/cookbook/[slug]` | `mockups/recipe-jerk-chicken.html` | Recipe detail |
| `/side-quests` | `mockups/side-quests.html` | Hobby quest cards |

404 page: style it on the same system (small task, designer's discretion).

## Dependencies

- **Remove:** Font Awesome (all traces — package, CDN links, classes). Replace every icon with inline SVG components per the mockups.
- **Add:** `@fontsource/aleo` (weights 500/600/700 + italic 500/600) and `@fontsource/lato` (400/500/700). Import only the weights used. No Google Fonts CDN in production.
- Keep the stack otherwise lean: no UI framework, no client JS except where noted below.

## Design system

Import `design-system/tokens.css` globally and build all component styles from the tokens. Follow the rules in `DESIGN-SYSTEM.md` — especially: highlighter swipe max once per page, purple = structure / orange = annotation, dashed borders only for stat tiles and meta strips, tone split (no jokes in Work content).

## Content collections

### `recipes` collection (`src/content/recipes/*.md`)

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const TAGS = ['comfort food','spicy','weeknight','quick','show-off','healthy-ish','breakfast'] as const;
const CATEGORIES = ['breakfast','dinner','snacks-and-sides','bread','sauces','desserts'] as const;

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),              // Aleo italic, Brian's voice
    category: z.enum(CATEGORIES),
    effort: z.number().int().min(1).max(3),   // rendered as ●●○ dots
    serves: z.string(),               // free text, e.g. "4–6"
    origin: z.string(),               // e.g. "Jamaica", "Alsace"
    tags: z.array(z.enum(TAGS)).max(3).default([]),
    tip: z.string().optional(),       // rendered as the orange tip block
    draft: z.boolean().default(false),
  }),
});
```

Recipe body convention (see mockup for rendering):
- `## Ingredients` with optional `### <group>` subheads; each ingredient a list item. Render as the sticky checkable card (CSS-only checkboxes, no JS).
- `## Method` as an ordered list; each step may start with a bold step title. Blockquotes inside a step render as orange italic margin notes.

### Work data

Roles, stats, and credentials on the homepage can live in a typed data file (`src/data/work.ts`) rather than a collection — content is in `mockups/index.html` and originates from `cv.md` in the github.com/briankintz/briankintz repo. Keep figures exactly as written (>10×, −95%, 10,000+, 15+).

## Components (suggested)

`BaseLayout` (dot-grid body, header, footer) · `Header` · `Footer` · `Icon` (single inline-SVG component with a `name` prop — github, linkedin, instagram, bulb, arrow) · `Block` · `StatTile` · `RoleEntry` · `TeaserCard` · `RecipeCard` · `TagChip` · `FilterBar` · `MetaStrip` · `IngredientList` · `MethodSteps` · `TipBlock` · `QuestCard`

## Behavior notes

- **Cookbook tag filtering:** progressive enhancement. Server-render everything; a tiny vanilla script (<30 lines) toggles card visibility by `data-tags`. No framework island. Filters must not break with JS disabled (default = all visible).
- **Ingredient checkboxes:** pure CSS `:checked` strikethrough, as in the mockup.
- **Prev/next on recipes:** derive from the sorted collection at build time.
- `prefers-reduced-motion` and `:focus-visible` styles exactly as in the mockups.

## GitBook migration

Source: https://brian-kintz.gitbook.io/cookbook — every page is available as Markdown by appending `.md` to the page URL, and there is a full index at `/llms.txt`. Migration steps:

1. Fetch the index, then each recipe's `.md`.
2. Convert to the frontmatter schema above. GitBook `{% hint %}` blocks become either the `tip` field or margin-note blockquotes. Taglines usually exist as the recipe's subtitle.
3. `effort`, `origin`, and `tags` are new metadata — set sensible values and flag them in the PR description for Brian to review.
4. Keep slugs stable and human (`jerk-chicken`, `flammkuchen`).

## Redirects (Vercel)

- `cookbook.briankintz.com/*` → `briankintz.com/cookbook/:splat` (301) once content is migrated. Add to `vercel.json`; the DNS/domain change itself is Brian's to do in the Vercel dashboard.
- Preserve any existing inbound recipe URLs where slugs can be matched.

## Acceptance checklist

- [ ] All four pages match mockups at 375px, 768px, 1280px
- [ ] `grep -ri "fontawesome\|font-awesome\|fa-" src/` returns nothing
- [ ] Fonts self-hosted; no external font/CDN requests in the production build
- [ ] Lighthouse: performance ≥ 95, accessibility ≥ 95 on all pages
- [ ] Cookbook filters work with and without JS
- [ ] All 23 recipes migrated and building; tags only from the fixed vocabulary
- [ ] Footer identical on every page; header is the only global nav
- [ ] Work section contains no jokes; figures match cv.md exactly
