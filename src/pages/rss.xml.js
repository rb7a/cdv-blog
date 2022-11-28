import rss from '@astrojs/rss';
import { getAllBlogPosts } from "../lib/prismicio";
import * as prismicH from "@prismicio/helpers";

const blogPosts = await getAllBlogPosts();

// Data Fetching: List all Markdown posts in the repo.
const formattedPosts = await blogPosts.map((post) => {
  return {
    link: post.url,
    title: prismicH.asText(post.data.title),
    pubDate: post.data.date,
    description: prismicH.asText(post.data.description)
  };
});

export const get = () => rss({
  title: 'Charles Villard',
  description: 'Devlog and portfolio of Charles Villard, software engineer',
  site: 'https://charlesvillard.co',
  items: formattedPosts,
  customData: `<language>en-us</language>`,
});