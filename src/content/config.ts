import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    loader: glob({ pattern: '**\/*.md', base: "./src/data/posts" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      description: z.string(),
      featuredImage: z.string().optional(),
      featuredImageAlt: z.string().optional(),
      rssOnly: z.boolean().default(false),
	    draft: z.boolean().default(true)
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};