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

const reviews = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/reviews" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      draft: z.boolean(),
      type: z.string(),
      image: image(),
      date_created: z.date(),
      date_started: z.date().optional(),
      date_finished: z.date().optional(),
      rating: z.string(),
    }),
});

const mediaSchema = z.object({
  type: z.string(),
  title: z.string(),
  year: z.string().nullable(),
  date_started: z.coerce.date().nullable(),
  date_finished: z.coerce.date().nullable(),
  first_time: z.boolean(),
  page_url: z.string().nullable(),
});

const books = defineCollection({
  loader: file("src/media/books.json"),
  schema: z.object({
    ...mediaSchema.shape,
    author: z.string(),
  }),
});

const movies = defineCollection({
  loader: file("src/media/movies.json"),
  schema: mediaSchema,
});

const tvShows = defineCollection({
  loader: file("src/media/tv.json"),
  schema: z.object({
    ...mediaSchema.shape,
    season: z.string().nullable(),
  }),
});

const games = defineCollection({
  loader: file("src/media/games.json"),
  schema: mediaSchema,
});

export type MediaData = z.infer<typeof mediaSchema>;
export const collections = { blog, reviews, books, movies, tvShows, games };
