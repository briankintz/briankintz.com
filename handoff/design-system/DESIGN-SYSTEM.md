# briankintz.com — "Notebook" Design System

A warm, personal-but-professional system for Brian Kintz's personal site. The metaphor: a well-kept notebook — dot-grid paper, content in clean white blocks, a highlighter and two ink colors. Modern and lightweight, never skeuomorphic or twee.

See `tokens.css` for all values. The four HTML files in `../mockups/` are the visual reference and are pixel-representative.

## Core rules

1. **Paper + blocks.** The page background is warm paper (`--color-paper`) with a subtle dot grid. All content sits in white blocks/cards on top. Never put long text directly on the dot grid.
2. **Two accents, distinct jobs.** Purple (`--color-purple`) is *structural*: links, buttons, active nav, section tags, step numbers, checkbox accent. Orange (`--color-orange`) is *annotation*: the highlighter swipe, recipe tags, card spines, margin notes, tips. Don't swap their roles.
3. **Type pairing.** Aleo (slab serif) for all headings and display moments, italic Aleo for "handwritten" asides (taglines, margin notes, disclaimers). Lato for body and UI. Self-hosted via Fontsource. No other faces.
4. **The highlighter swipe** (orange gradient behind a phrase) appears **at most once per page**, on the hero heading. It's the signature; overuse kills it.
5. **Notebook sketch borders.** Dashed borders (`--border-sketch`) are reserved for stat tiles and the recipe meta strip — small "penciled-in" moments. Everything else uses solid 1px `--color-line`.
6. **Icons are inline SVG only.** Stroke-based, 1.7–1.8 stroke width, `currentColor`. No Font Awesome, no icon fonts, no emoji as UI.

## Tone rules (content)

- **Work / professional contexts:** straight, substantive, metric-led. No jokes, no puns. Let numbers like ">10×" and "−95%" carry personality.
- **Cookbook & Side Quests:** Brian's own light voice is welcome — recipe taglines, the "I hate measuring" disclaimer, quest labels like "Fear, faced". Sparingly; one wink per surface.

## Component inventory (as seen in mockups)

| Component | Where | Notes |
|---|---|---|
| Header | all pages | sticky, blur, logo + 3 links, purple active state. The ONLY global nav. |
| Footer | all pages | identical everywhere: colophon line + social icon links. No nav links. |
| Block | index | white, radius 16, tag label top-left |
| Stat tile | index | dashed border, big slab number in purple |
| Role entry | index | 2-col: org/dates + achievements list, orange square bullets |
| Teaser card | index | links to /cookbook and /side-quests, 3-item preview list |
| Recipe card | cookbook | white card, orange left spine, slab title, italic tagline, meta row (effort dots · origin) + tag chips. Hover: lift + slight rotate |
| Filter chips | cookbook | pill buttons from the fixed tag vocabulary |
| Meta strip | recipe | dashed, universal cells: Effort (●●○) · Serves · Origin |
| Tag chip | cookbook, recipe | orange tint, fixed vocabulary only |
| Ingredient card | recipe | sticky sidebar, CSS-only checkable list, purple group labels |
| Method steps | recipe | numbered purple squares + connector line, slab step titles |
| Margin note | recipe | Aleo italic, orange — Brian's commentary |
| Tip block | recipe | orange tint block with icon, for warnings/tips |
| Quest card | side-quests | alternating purple/orange level labels |

## Tag vocabulary (closed set)

`comfort food` · `spicy` · `weeknight` · `quick` · `show-off` · `healthy-ish` · `breakfast`

Tags drive the cookbook filters. Categories (Breakfast / Dinner / Snacks & Sides / Bread / Sauces / Desserts) organize the page sections and are separate from tags.

## Accessibility & performance

- `prefers-reduced-motion` disables all transitions/animations.
- Visible `:focus-visible` outlines (purple) on all interactive elements.
- Text on paper/card meets AA (ink #2A2530, soft #6B6472 for ≥14px only).
- No icon fonts, no external font CDNs in production, minimal-to-zero JS per page.
