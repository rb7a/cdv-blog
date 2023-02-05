import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

const postImportResult = import.meta.glob('./blog/posts/*.md', { eager: true });
const publishedPosts = Object.values(postImportResult)
  .sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  )
  .filter((post) => !post.frontmatter.draft);

export const get = () => rss({
  title: 'Charles Villard',
  description: 'Devlog and portfolio of Charles Villard, software engineer',
  site: 'https://charlesvillard.co',
  items: publishedPosts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.pubDate,
    description: post.frontmatter.description,
    content: sanitizeHtml(post.compiledContent())
  })),
  customData: `<language>en-us</language>`,
});