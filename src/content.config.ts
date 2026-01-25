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
      created_date: z.date(),
      updated_date: z.date(),
      short_description: z.string(),
    })
});

export const collections = { blog };