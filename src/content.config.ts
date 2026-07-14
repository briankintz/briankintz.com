import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Closed vocabularies, in the cookbook's browsing order (category order = mockup section order)
export const TAGS = ['comfort food', 'spicy', 'weeknight', 'quick', 'show-off', 'healthy-ish', 'breakfast'] as const
export const CATEGORIES = ['breakfast', 'dinner', 'snacks-and-sides', 'bread', 'sauces', 'desserts'] as const

const recipes = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(), // Aleo italic, Brian's voice
    category: z.enum(CATEGORIES),
    effort: z.number().int().min(1).max(3), // rendered as ●●○ dots
    serves: z.string(), // free text, e.g. "4–6"
    origin: z.string(), // e.g. "Jamaica", "Alsace"
    tags: z.array(z.enum(TAGS)).max(3).default([]),
    tip: z.string().optional(), // rendered as the orange tip block
    draft: z.boolean().default(false),
  }),
})

export const collections = { recipes }
