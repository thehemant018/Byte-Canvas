import Image from "next/image";
import type { ServiceCard } from "@/content/home";

type ShowcaseCardGridProps = {
  id: string;
  heading: string;
  subheading: string;
  cards: ServiceCard[];
};

export function ShowcaseCardGrid({
  id,
  heading,
  subheading,
  cards,
}: ShowcaseCardGridProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      data-component="card-grid"
      id={id}
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
        <p className="mt-2 max-w-2xl text-stone-600">{subheading}</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-50/50 shadow-sm transition hover:border-amber-200/80 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
