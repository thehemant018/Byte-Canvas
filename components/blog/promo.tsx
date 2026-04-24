import Image from "next/image";
import type { BlogPromoFields } from "@/content/blog/types";

export function Promo({
  authorName,
  authorDescription,
  authorImageSrc,
  authorImageAlt,
}: BlogPromoFields) {
  return (
    <section
      data-component="blog-promo"
      className="mt-10 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8"
      aria-label="About the author"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-100 sm:mx-0 sm:h-32 sm:w-32">
          <Image
            src={authorImageSrc}
            alt={authorImageAlt}
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
        <div className="min-w-0 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
            Author
          </p>
          <p className="mt-1 text-xl font-bold text-stone-900">{authorName}</p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            {authorDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
