import type { Locale } from "@/lib/i18n";
import { blogPostFr } from "./fr";
import { blogPosts } from "./posts";
import type { BlogPost } from "./types";

export type { BlogPost, BlogPromoFields } from "./types";
export { blogPosts } from "./posts";

export function getBlogPostBySlug(
  slug: string,
  locale: Locale = "en",
): BlogPost | null {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;
  if (locale === "en") return post;

  const fr = blogPostFr[slug];
  if (!fr) return post;

  return {
    ...post,
    title: fr.title,
    excerpt: fr.excerpt,
    promo: fr.promo,
  };
}

export function getAllBlogPosts(locale: Locale = "en"): BlogPost[] {
  return [...blogPosts]
    .map((p) => getBlogPostBySlug(p.slug, locale)!)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
