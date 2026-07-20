import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Promo, Rte } from "@/components/blog";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/content/blog";
import { getHomeContent } from "@/content/home";
import {
  hreflangAlternates,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return { title: "Post not found" };
  const locale = raw as Locale;
  const post = getBlogPostBySlug(slug, locale);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Byte Canvas`,
    description: post.excerpt,
    alternates: {
      languages: hreflangAlternates(`/blog/${slug}`),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const post = getBlogPostBySlug(slug, locale);
  if (!post) notFound();
  const ui = getHomeContent(locale).blogUi;

  return (
    <main className="flex flex-1 flex-col bg-stone-50 text-stone-800">
      <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Link
          href={`/${locale}/blog`}
          className="text-sm font-semibold text-amber-900 transition hover:text-amber-700"
        >
          {ui.backToPosts}
        </Link>
        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
            {ui.journalEyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {post.title}
          </h1>
          <time
            className="mt-3 block text-sm text-stone-500"
            dateTime={post.publishedAt}
          >
            {formatDate(post.publishedAt, locale)}
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
