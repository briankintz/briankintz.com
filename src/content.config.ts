import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const cardSchema = z.object({
  icon: z.string(),
  position: z.enum(['title', 'cl1', 'cl2', 'cl3', 'cr1', 'cr2', 'cr3']),
  orientation: z.enum(['horizontal', 'vertical']),
})

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/work' }),
  schema: cardSchema,
})

const play = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/play' }),
  schema: cardSchema,
})

const TAGS = ['comfort food', 'spicy', 'weeknight', 'quick', 'show-off', 'healthy-ish', 'breakfast'] as const
const CATEGORIES = ['breakfast', 'dinner', 'snacks-and-sides', 'bread', 'sauces', 'desserts'] as const

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

export const collections = { work, play, recipes }
