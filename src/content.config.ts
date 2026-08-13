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
    type: z.string(),
    title: z.string(),
    author: z.string(),
    date_finished: z.coerce.date(),
  }),
});

const movies = defineCollection({
  loader: file("src/media/movies.json"),
  schema: z.object({
    type: z.string(),
    title: z.string(),
    year: z.string(),
    date_finished: z.coerce.date(),
  }),
});

export const collections = { blog, books, movies };
