import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Promo, Rte } from "@/components/blog";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/content/blog";

type PageProps = { params: Promise<{ slug: string }> };

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Byte Canvas`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="flex flex-1 flex-col bg-stone-50 text-stone-800">
      <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Link
          href="/blog"
          className="text-sm font-semibold text-amber-900 transition hover:text-amber-700"
        >
          ← All posts
        </Link>
        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
            Journal
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {post.title}
          </h1>
          <time
            className="mt-3 block text-sm text-stone-500"
            dateTime={post.publishedAt}
          >
            {formatDate(post.publishedAt)}
          </time>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            {post.excerpt}
          </p>
        </header>

        <Promo {...post.promo} />
        <Rte html={post.bodyHtml} />
      </article>
    </main>
  );
}
