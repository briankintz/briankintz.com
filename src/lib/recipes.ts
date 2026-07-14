import { getCollection } from 'astro:content'
import { CATEGORIES } from '../content.config'

export const CATEGORY_LABELS: Record<(typeof CATEGORIES)[number], string> = {
  breakfast: 'Breakfast',
  dinner: 'Dinner',
  'snacks-and-sides': 'Snacks & Sides',
  bread: 'Bread',
  sauces: 'Sauces',
  desserts: 'Desserts',
}

export const effortDots = (effort: number) => '●'.repeat(effort) + '○'.repeat(3 - effort)

/** Published recipes in browsing order: category (mockup order), then title — used by the index and prev/next alike. */
export const publishedRecipes = async () =>
  (await getCollection('recipes', ({ data }) => !data.draft)).sort(
    (a, b) =>
      CATEGORIES.indexOf(a.data.category) - CATEGORIES.indexOf(b.data.category) ||
      a.data.title.localeCompare(b.data.title),
  )
