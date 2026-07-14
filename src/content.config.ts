import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Closed vocabularies, in the cookbook's browsing order (category order = mockup section order)
export const TAGS = ['spicy', 'show-off', 'comfort food', 'quick', 'healthy-ish'] as const
export const CATEGORIES = [
  'breakfast',
  'main-courses',
  'snacks-and-sides',
  'bread',
  'dips-and-sauces',
  'desserts',
] as const

const recipes = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/recipes' }),
  schema: z
    .object({
      title: z.string(),
      tagline: z.string(), // Aleo italic, Brian's voice
      category: z.enum(CATEGORIES),
      effort: z.number().int().min(1).max(3), // rendered as ●●○ dots
      makes: z.string().optional(), // quantity produced, e.g. "6 buns"
      serves: z.string().optional(), // people fed, e.g. "4–6"
      tags: z.array(z.enum(TAGS)).max(3).default([]),
      tip: z.string().optional(), // rendered as the orange tip block
      draft: z.boolean().default(false),
    })
    .refine((data) => Boolean(data.makes) !== Boolean(data.serves), {
      message: 'exactly one of `makes` or `serves` must be set',
    }),
})

export const collections = { recipes }
