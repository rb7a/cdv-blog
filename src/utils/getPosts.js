
const getPublishedPosts = async () => {
  const allPosts = await import.meta.glob('./../pages/posts/*.mdx');
  console.log('allPosts', allPosts);
  const publishablePosts = allPosts.filter(({ frontmatter }) => frontmatter.draft !== true);
  const sortedPosts = publishablePosts.sort(({ frontmatter: a }, { frontmatter: b }) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf());

  return sortedPosts;
}

export { getPublishedPosts }