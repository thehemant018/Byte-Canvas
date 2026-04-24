import Image from "next/image";
import Link from "next/link";

type CaseStudy = {
  kicker: string;
  date: string;
  dateIso: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
};

type FeaturedCaseStudyProps = {
  sectionId: string;
  heading: string;
  subheading: string;
  caseStudy: CaseStudy;
  articleId: string;
};

export function FeaturedCaseStudy({
  sectionId,
  heading,
  subheading,
  caseStudy,
  articleId,
}: FeaturedCaseStudyProps) {
  return (
    <section
      data-component="news-card"
      id={sectionId}
      className="border-t border-stone-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="news-heading"
          className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
        >
          {heading}
        </h2>
        <p className="mt-2 text-stone-600">{subheading}</p>
        <article
          id={articleId}
          className="mt-10 overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-50/50 shadow-sm"
        >
          <div className="grid min-h-0 gap-0 md:min-h-[280px] md:grid-cols-2 md:items-stretch">
            <div className="relative min-h-[220px] md:min-h-0">
              <Image
                src={caseStudy.imageSrc}
                alt={caseStudy.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                {caseStudy.kicker}
              </p>
              <time
                className="mt-1 block text-xs text-stone-500"
                dateTime={caseStudy.dateIso}
              >
                {caseStudy.date}
              </time>
              <h3 className="mt-2 text-xl font-bold text-stone-900 sm:text-2xl">
                {caseStudy.title}
              </h3>
              <p className="mt-3 text-stone-600">{caseStudy.description}</p>
              <Link
                href={caseStudy.linkHref}
                className="mt-6 inline-flex w-fit text-sm font-semibold text-amber-900 transition hover:text-amber-700"
              >
                {caseStudy.linkLabel} →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
