import { getCollection } from 'astro:content'
import { CATEGORIES } from '../content.config'

export const CATEGORY_LABELS: Record<(typeof CATEGORIES)[number], string> = {
  breakfast: 'Breakfast',
  'main-courses': 'Main Courses',
  'snacks-and-sides': 'Snacks & Sides',
  bread: 'Bread',
  'dips-and-sauces': 'Dips & Sauces',
  desserts: 'Desserts',
}

export const effortDots = (effort: number) => '●'.repeat(effort) + '○'.repeat(3 - effort)

/** The schema enforces exactly one of `makes`/`serves` — this picks whichever is set and its label. */
export const yieldMeta = (data: { makes?: string; serves?: string }) =>
  data.makes ? { label: 'Makes', value: data.makes } : { label: 'Serves', value: data.serves! }

/** Published recipes in browsing order: category (mockup order), then title — used by the index and prev/next alike. */
export const publishedRecipes = async () =>
  (await getCollection('recipes', ({ data }) => !data.draft)).sort(
    (a, b) =>
      CATEGORIES.indexOf(a.data.category) - CATEGORIES.indexOf(b.data.category) ||
      a.data.title.localeCompare(b.data.title),
  )
