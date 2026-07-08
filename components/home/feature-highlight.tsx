import Image from "next/image";
import Link from "next/link";
import type { FeatureCard } from "@/content/home";

type FeatureHighlightProps = {
  id: string;
  sectionId: string;
  heading: string;
  subheading: string;
  feature: FeatureCard;
  imagePosition?: "left" | "right";
};

export function FeatureHighlight({
  id,
  sectionId,
  heading,
  subheading,
  feature,
  imagePosition = "right",
}: FeatureHighlightProps) {
  const headingId = `${sectionId}-heading`;
  const imageFirst = imagePosition === "left";

  return (
    <section
      data-component="feature-highlight"
      id={sectionId}
      className="border-t border-stone-200/80 bg-white py-16 sm:py-20"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id={headingId}
          className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
        >
          {heading}
        </h2>
        <p className="mt-2 text-stone-600">{subheading}</p>
        <article
          id={id}
          className="mt-10 overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-50/50 shadow-sm"
        >
          <div className="grid min-h-0 gap-0 md:min-h-[280px] md:grid-cols-2 md:items-stretch">
            <div
              className={`relative min-h-[220px] md:min-h-0 ${imageFirst ? "" : "md:order-2"}`}
            >
              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div
              className={`flex flex-col justify-center p-8 md:p-10 ${imageFirst ? "" : "md:order-1"}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                {feature.kicker}
              </p>
              <time
                className="mt-1 block text-xs text-stone-500"
                dateTime={feature.dateIso}
              >
                {feature.date}
              </time>
              <h3 className="mt-2 text-xl font-bold text-stone-900 sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-stone-600">{feature.description}</p>
              <Link
                href={feature.linkHref}
                className="mt-6 inline-flex w-fit text-sm font-semibold text-amber-900 transition hover:text-amber-700"
              >
                {feature.linkLabel} →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
