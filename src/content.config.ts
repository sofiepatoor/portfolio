// Import the glob loader and astro utilities
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
// Zod (= schema declaration and validation library for TypeScript)
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

export const collections = { blog };