import type { AccordionItem } from "@/content/home";

type AccordionProps = {
  id: string;
  heading: string;
  description: string;
  items: AccordionItem[];
  initialVisibleCount?: number;
  showMoreLabel?: string;
  showLessLabel?: string;
};

function PlusMinusIcon() {
  return (
    <span
      className="relative flex h-5 w-5 shrink-0 items-center justify-center text-stone-900"
      aria-hidden
    >
      <span className="absolute h-px w-4 bg-current" />
      <span className="absolute h-4 w-px bg-current transition-all duration-300 group-open:scale-y-0 group-open:opacity-0" />
    </span>
  );
}

function FaqItem({
  item,
  className = "",
}: {
  item: AccordionItem;
  className?: string;
}) {
  return (
    <details className={`group border-b border-stone-200 ${className}`.trim()}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2 marker:content-none sm:py-6 [&::-webkit-details-marker]:hidden">
        <span className="text-base font-medium text-stone-900 sm:text-lg">
          {item.heading}
        </span>
        <PlusMinusIcon />
      </summary>
      <div className="pb-5 sm:pb-6">
        <p className="max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
          {item.description}
        </p>
      </div>
    </details>
  );
}

export function Accordion({
  id,
  heading,
  description,
  items,
  initialVisibleCount = 3,
  showMoreLabel = "Show More",
  showLessLabel = "Show Less",
}: AccordionProps) {
  const headingId = `${id}-heading`;
  const showMoreId = `${id}-show-more`;
  const primaryItems = items.slice(0, initialVisibleCount);
  const extraItems = items.slice(initialVisibleCount);
  const hasHiddenItems = extraItems.length > 0;

  return (
    <section
      data-component="accordion"
      id={id}
      className="border-t border-stone-200/80 bg-white py-16 sm:py-24"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2
            id={headingId}
            className="text-2xl font-bold tracking-tight text-stone-900 sm:text-4xl"
          >
            {heading}
          </h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">{description}</p>
          ) : null}
        </div>

        <div
          role="group"
          aria-labelledby={headingId}
          className="mt-12 border-t border-stone-200"
        >
          {primaryItems.map((item) => (
            <FaqItem key={item.heading} item={item} />
          ))}

          {hasHiddenItems ? (
            <>
              <input
                type="checkbox"
                id={showMoreId}
                className="peer sr-only"
              />
              {extraItems.map((item) => (
                <FaqItem
                  key={item.heading}
                  item={item}
                  className="hidden peer-checked:block"
                />
              ))}
              <label
                htmlFor={showMoreId}
                className="mt-8 flex cursor-pointer justify-center border-b border-stone-900 pb-0.5 text-sm font-semibold tracking-wide text-stone-900 uppercase transition hover:border-amber-900 hover:text-amber-900 peer-checked:hidden"
              >
                {showMoreLabel}
                <span className="sr-only">
                  , show {extraItems.length} additional questions
                </span>
              </label>
              <label
                htmlFor={showMoreId}
                className="mt-8 hidden cursor-pointer justify-center border-b border-stone-900 pb-0.5 text-sm font-semibold tracking-wide text-stone-900 uppercase transition hover:border-amber-900 hover:text-amber-900 peer-checked:flex"
              >
                {showLessLabel}
                <span className="sr-only">
                  , hide {extraItems.length} additional questions
                </span>
              </label>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
