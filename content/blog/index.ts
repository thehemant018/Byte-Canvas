import { blogPosts } from "./posts";
import type { BlogPost } from "./types";

export type { BlogPost, BlogPromoFields } from "./types";
export { blogPosts } from "./posts";

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
