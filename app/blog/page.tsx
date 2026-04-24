import Link from "next/link";
import { getAllBlogPosts } from "@/content/blog";

export const metadata = {
  title: "Blog | Byte Canvas",
  description:
    "Notes on light, materials, layout, and living well from the Byte Canvas studio.",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="flex flex-1 flex-col bg-stone-50 text-stone-800">
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
          Journal
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Practical ideas from our residential projects — same format on every
          post: author context first, then the full article.
        </p>
        <ul className="mt-12 space-y-0 divide-y divide-stone-200/80 border-y border-stone-200/80">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-8 transition first:pt-6 last:pb-6"
              >
                <time
                  className="text-sm text-stone-500"
                  dateTime={post.publishedAt}
                >
                  {formatDate(post.publishedAt)}
                </time>
                <h2 className="mt-2 text-xl font-semibold text-stone-900 transition group-hover:text-amber-900 sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:text-base">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-flex text-sm font-semibold text-amber-900">
                  Read article →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
