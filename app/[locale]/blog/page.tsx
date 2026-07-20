import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts } from "@/content/blog";
import { getHomeContent } from "@/content/home";
import { hreflangAlternates, isLocale, type Locale } from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const ui = getHomeContent(locale).blogUi;

  return {
    title: ui.indexTitle,
    description: ui.indexDescription,
    alternates: {
      languages: hreflangAlternates("/blog"),
    },
  };
}

export default async function BlogIndexPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const ui = getHomeContent(locale).blogUi;
  const posts = getAllBlogPosts(locale);

  return (
    <main className="flex flex-1 flex-col bg-stone-50 text-stone-800">
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
          {ui.indexEyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          {ui.indexHeading}
        </h1>
        <p className="mt-3 max-w-2xl text-stone-600">{ui.indexIntro}</p>
        <ul className="mt-12 space-y-0 divide-y divide-stone-200/80 border-y border-stone-200/80">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="group block py-8 transition first:pt-6 last:pb-6"
              >
                <time
                  className="text-sm text-stone-500"
                  dateTime={post.publishedAt}
                >
                  {formatDate(post.publishedAt, locale)}
                </time>
                <h2 className="mt-2 text-xl font-semibold text-stone-900 transition group-hover:text-amber-900 sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:text-base">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-flex text-sm font-semibold text-amber-900">
                  {ui.readArticle}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
