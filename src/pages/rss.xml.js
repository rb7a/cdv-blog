import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export const GET = async (context) => {
  const posts = await getCollection('posts');

  const publishedPosts = Object.values(posts).sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() -
      new Date(a.data.pubDate).valueOf()
  ).filter(
    (post) => !post.data.draft
  );
  return rss({
    title: 'Charles Villard',
    description: 'Devlog and portfolio of Charles Villard, software engineer',
    site: 'https://charlesvillard.co',
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      customData: `<language>en-us</language>`,
    })),
  })
};