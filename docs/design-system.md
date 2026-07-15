# briankintz.com — "Notebook" Design System

Self-contained reference for importing into Claude Design (or any design tool). Mirrors the live implementation; `src/styles/tokens.css` in the repo is the canonical token source and this document quotes it verbatim.

**The metaphor:** a well-kept notebook — warm dot-grid paper, content in clean white blocks, one highlighter and two ink colors. Modern and lightweight, never skeuomorphic or twee.

## Tokens

```css
:root {
  /* ---------- Color ---------- */
  --color-paper: #fcfbf7; /* page background (warm paper) */
  --color-dot: #d9d4c8; /* dot-grid dots on the paper */
  --color-card: #ffffff; /* content blocks / cards */
  --color-ink: #2a2530; /* primary text */
  --color-soft: #6b6472; /* secondary text */
  --color-line: #e8e4db; /* borders, dividers */

  --color-purple: #6a3ad4; /* PRIMARY accent: structure, links, buttons, active states */
  --color-purple-soft: #f0eafc; /* purple tint: tag backgrounds, step numbers */
  --color-purple-hover: #5a2eb8; /* pressed/hover state for solid purple */

  --color-orange: #f26419; /* SECONDARY accent, graphics only: highlighter, borders, icons */
  --color-orange-text: #b4430c; /* orange as TEXT on paper/card/tint — AA contrast (≥4.5:1); never use #f26419 for text */
  --color-orange-soft: rgba(242, 110, 28, 0.3); /* highlighter swipe */
  --color-orange-tag: rgba(242, 110, 28, 0.12); /* tag chip background */
  --color-orange-tint: #fef1e7; /* tip/callout block background */

  /* ---------- Typography ---------- */
  /* Self-hosted via Fontsource in production. Aleo = headings (slab serif),
     Lato = body (Aleo's designed companion face). NO icon fonts, ever. */
  --font-slab: 'Aleo', Rockwell, 'Roboto Slab', serif;
  --font-sans: 'Lato', 'Segoe UI', system-ui, sans-serif;

  --text-h1: clamp(38px, 6vw, 62px); /* page titles; weight 700 slab */
  --text-h2: clamp(26px, 3.6vw, 36px); /* block titles; weight 700 slab */
  --text-h3: 20px; /* entry titles; weight 600 slab */
  --text-body: 15px; /* Lato 400; line-height 1.68 */
  --text-meta: 12.5px; /* meta rows, footer */
  --text-label: 11.5px; /* uppercase tags; weight 700, letter-spacing .14em */

  /* ---------- Surface & shape ---------- */
  --radius-block: 16px; /* main content blocks */
  --radius-card: 12px; /* recipe index cards */
  --radius-tag: 6px; /* the ONLY chip/tag radius — no pills anywhere */
  --shadow-block: 0 2px 0 rgba(42, 37, 48, 0.04);
  --shadow-hover: 0 10px 24px rgba(106, 58, 212, 0.12); /* purple bloom — cards with a purple accent */
  --shadow-hover-orange: 0 10px 24px rgba(242, 100, 25, 0.16); /* orange bloom — cards with an orange accent */
  --card-lift: translateY(-3px) rotate(-0.3deg); /* hover transform shared by all cards; pairs with the bloom */

  /* ---------- Signature patterns ---------- */
  --pattern-dotgrid: radial-gradient(circle, var(--color-dot) 1px, transparent 1px);
  --pattern-dotgrid-size: 26px 26px;
  --pattern-highlight: linear-gradient(
    to top,
    var(--color-orange-soft) 42%,
    transparent 42%
  ); /* on a span, max once per page hero */
  --border-sketch: 1.5px dashed var(--color-line); /* stat tiles + recipe meta strip ONLY */
}
```

## Core rules

1. **Paper + blocks.** The page background is warm paper with a subtle dot grid. All content sits in white blocks/cards on top; never put long text directly on the grid.
2. **Two accents, distinct jobs.** Purple is _structural_: links, buttons, active nav, section labels, step numbers, focus outlines. Orange is _annotation_: the highlighter, recipe tags, margin notes, tips. Never swap their roles.
3. **Orange text is always `--color-orange-text`** (`#b4430c`, ≥4.5:1 on paper/card/tint). The vivid `--color-orange` is for graphics only — highlighter, borders, icons, the effort-dot glyphs' decorative strikethrough. This rule exists because `#f26419` fails WCAG AA as text (2.8–3.2:1).
4. **The highlighter swipe** (orange gradient behind a phrase) appears **at most once per page**, on the hero heading. It's the signature; overuse kills it.
5. **One chip shape, two sizes.** Every chip/tag is a rounded rectangle at `--radius-tag` (6px) — pills are banned. **Clickable** size (filters): 13.5px/700, padding 7px 14px, `--color-line` border, hover purple, selected solid purple. **Slim inline** size (display): 12px/700, padding 3px 10px; variants keep role colors — orange tint (recipe tags), purple/orange tint + 11.5px uppercase letterspaced (labels, padding 5px 12px), neutral bordered 12.5px/400 (tech keywords, padding 4px 12px).
6. **Card hover = lift + accent bloom.** All hoverable cards use `transform: var(--card-lift)` with a shadow bloom matching the card's accent: `--shadow-hover` (purple) or `--shadow-hover-orange` (orange-accented cards). Border-color on hover follows the same accent.
7. **Sketch borders are rationed.** Dashed `--border-sketch` appears only on stat tiles and the recipe meta strip — small "penciled-in" moments. Everything else uses solid 1px `--color-line`.
8. **Icons are inline SVG only.** Stroke-based, 1.7–1.8 stroke width, `currentColor`. No icon fonts, no emoji as UI. Current set: github, linkedin, instagram, bulb, arrow.
9. **Sticky chrome.** Header: sticky, paper at 92% + 8px blur, the only global nav (Work → Side Quests → Cookbook). Footer: solid card background, border-top, vertically centered content, pinned to the viewport bottom on short pages (body is a min-height flex column). Identical on every page.
10. **Layout measure.** `.wrap`: max-width 1000px, centered, 24px side padding — the single global class utility; every page shares it.

## Type system

| Role              | Face        | Size           | Weight  | Notes                                                 |
| ----------------- | ----------- | -------------- | ------- | ----------------------------------------------------- |
| Page title (h1)   | Aleo        | `--text-h1`    | 700     | may carry the one highlighter swipe                   |
| Block title (h2)  | Aleo        | `--text-h2`    | 700     | −0.01em tracking                                      |
| Entry title (h3)  | Aleo        | `--text-h3`    | 600     |                                                       |
| Handwritten aside | Aleo italic | 13.5–19px      | 400–600 | taglines, margin notes, disclaimers — the "pen" voice |
| Body              | Lato        | `--text-body`  | 400     | line-height 1.68                                      |
| Meta              | Lato        | `--text-meta`  | 400     | meta rows, footer                                     |
| Label             | Lato        | `--text-label` | 700     | uppercase, .14em tracking, purple or orange-text      |

Fonts self-hosted (Fontsource): Aleo 500/600/700 + italic 500/600, Lato 400/700 — latin subset only. Lato has no 500; weight-500 declarations resolve to 400 by design.

## Components (Astro, scoped styles)

| Component        | Props                                                   | Notes                                                                                        |
| ---------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `BaseLayout`     | `title`, `description` (required)                       | dot-grid body, fonts, Header/Footer, analytics; pages own their `<main>`                     |
| `Header`         | —                                                       | sticky blurred nav; active state derived from URL path                                       |
| `Footer`         | —                                                       | colophon + social icon links; no nav links                                                   |
| `Icon`           | `name: github\|linkedin\|instagram\|bulb\|arrow`        | size from the consumer via `:global(svg)`; color inherits                                    |
| `Highlight`      | slot                                                    | the once-per-page swipe span                                                                 |
| `LabelChip`      | `color: purple\|orange`, slot                           | uppercase tinted label (slim chip size)                                                      |
| `TagChip`        | `tag: string`                                           | orange-tint recipe tag (slim chip size, single size)                                         |
| `LinkButton`     | `href`, `variant?: primary\|ghost`, `class` passthrough | solid purple / outlined purple / plain bordered                                              |
| `IngredientList` | `html: string`                                          | CSS-only checkable list (`:checked` strikethrough), handles nested lists + `h3` group labels |

**Page-local patterns** (scoped in their pages, not extracted): stat tile (dashed border, big slab purple number) · role entry (2-col, orange square bullets) · credential bullet lists (dot markers centered on first text line) · tech-keyword chip row · teaser card (accent border + `.go` link matches chip color) · quest card (alternating purple/orange labels) · recipe card (slab title, italic tagline, tags row, effort ●●○ + makes/serves meta) · filter chip groups (Category + Tags, single-select each, AND-combined, works without JS) · meta strip (dashed, Category → Effort → Makes/Serves) · method steps (numbered purple squares + connector line) · margin note (Aleo italic, orange-text, from blockquotes) · tip block (orange tint + bulb icon).

## Content vocabularies (closed sets)

- **Categories:** Breakfast · Main Courses · Snacks & Sides · Bread · Dips & Sauces · Desserts
- **Tags:** spicy · show-off · comfort food · quick · healthy-ish (grows over time; zod-enforced)
- Recipes carry exactly one of `makes` (quantity) or `serves` (people) — free text either way.

## Tone

- **Work content:** straight, substantive, metric-led. No jokes; figures exactly as written (`>15×`, `−95%`, `10,000+`, `20+`, `10M+`). Exception: humor Brian authored himself in his CV carries over verbatim (e.g. "Bavarian (basst scho.)").
- **Cookbook & Side Quests:** Brian's light voice welcome, sparingly — one wink per surface.

## Accessibility & performance budget

- WCAG AA text contrast everywhere (`--color-soft` only at ≥14px; orange text via `--color-orange-text`). Lighthouse ≥95 performance and accessibility on every page (currently 98–100 / 100).
- Purple `:focus-visible` outlines on all interactive elements; `prefers-reduced-motion` disables all transitions/animations.
- Progressive enhancement: everything works with JS disabled (filters default to all-visible; ingredient checkboxes are CSS-only). The only script beyond the tiny filter is same-origin Vercel Web Analytics.
- No external font/CDN/script requests in production.
