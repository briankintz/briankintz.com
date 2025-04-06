import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const cardSchema = z.object({
  icon: z.string(),
  position: z.enum(['title', 'cl1','cl2','cl3', 'cr1', 'cr2', 'cr3']),
  orientation: z.enum(['horizontal', 'vertical'])
});

const work = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/work" }),
  schema: cardSchema
});

const play = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/play" }),
  schema: cardSchema
});

export const collections = { work, play }
