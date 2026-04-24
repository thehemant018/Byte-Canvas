import Link from "next/link";

export type BlogPreviewCard = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
};

type BlogPreviewGridProps = {
  id: string;
  heading: string;
  subheading: string;
  posts: BlogPreviewCard[];
  cardCtaLabel: string;
  viewAllHref: string;
  viewAllLabel: string;
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
}

export function BlogPreviewGrid({
  id,
  heading,
  subheading,
  posts,
  cardCtaLabel,
  viewAllHref,
  viewAllLabel,
}: BlogPreviewGridProps) {
  return (
    <section
      data-component="blog-preview-grid"
      id={id}
      className="border-t border-stone-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="blog-preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="blog-preview-heading"
              className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
            >
              {heading}
            </h2>
            <p className="mt-2 max-w-2xl text-stone-600">{subheading}</p>
          </div>
          <Link
            href={viewAllHref}
            className="shrink-0 text-sm font-semibold text-amber-900 underline decoration-amber-300 underline-offset-2 transition hover:text-amber-700"
          >
            {viewAllLabel}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-stone-200/80 bg-stone-50/50 p-6 shadow-sm transition hover:border-amber-200/80 hover:shadow-md"
            >
              <time
                className="text-xs font-medium uppercase tracking-wide text-stone-500"
                dateTime={post.publishedAt}
              >
                {formatDate(post.publishedAt)}
              </time>
              <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-stone-900">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex w-fit items-center rounded-lg bg-amber-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-900"
              >
                {cardCtaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
