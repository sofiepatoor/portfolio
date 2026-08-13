// Import the glob loader and astro utilities
import { glob, file } from "astro/loaders";
import { defineCollection } from "astro:content";

// Zod (= schema declaration and validation library for TypeScript)
import { z } from "astro/zod";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    created_date: z.date(),
    updated_date: z.date(),
    short_description: z.string(),
  }),
});

const books = defineCollection({
  loader: file("src/media/books.json"),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date_read: z.string(),
  }),
});

export const collections = { blog, books };
