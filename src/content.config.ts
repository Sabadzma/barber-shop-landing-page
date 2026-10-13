import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const barbers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/barbers" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, barbers };
