import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Sorted (newest first); drafts stay hidden until explicitly published.
 * Every post listing (index, slug paths, tags, RSS, pagination) should
 * route through this so draft filtering stays consistent site-wide.
 */
export async function getPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
