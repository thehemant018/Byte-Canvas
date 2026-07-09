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

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 shrink-0 sm:h-6 sm:w-6 ${className}`}
      aria-hidden
    >
      <path
        d="M12.0001 14.9393L5.00011 7.93933L3.93945 8.99999L12.0001 17.0607L20.0608 8.99999L19.0001 7.93933L12.0001 14.9393Z"
        fill="currentColor"
      />
    </svg>
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
    <details
      className={`group border-b-[3px] border-stone-200 transition-all duration-500 ease-in-out open:border-b-amber-800 ${className}`.trim()}
    >
      <summary className="flex w-full cursor-pointer list-none flex-row items-center justify-between gap-3 pt-8 outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2 md:gap-16 md:pt-10 [&::-webkit-details-marker]:hidden group-open:pb-0 pb-8 md:pb-10">
        <span className="text-start text-base font-normal leading-snug text-stone-900 sm:text-lg">
          {item.heading}
        </span>
        <span className="transform text-stone-400 transition-transform duration-500 ease-in-out group-open:-rotate-90 group-open:text-amber-800">
          <ChevronIcon />
        </span>
      </summary>
      <div className="pt-3 pr-9 md:pr-[88px]">
        <p className="text-sm font-light leading-relaxed text-stone-500 sm:text-base">
          {item.description}
        </p>
      </div>
    </details>
  );
}

function ShowMoreToggle({
  showMoreId,
  showMoreLabel,
  showLessLabel,
  hiddenCount,
}: {
  showMoreId: string;
  showMoreLabel: string;
  showLessLabel: string;
  hiddenCount: number;
}) {
  const labelClassName =
    "flex cursor-pointer items-center gap-2 text-sm font-medium uppercase leading-4 text-stone-900 transition duration-300 hover:underline";

  return (
    <>
      <label
        htmlFor={showMoreId}
        className={`${labelClassName} peer-checked:hidden`}
      >
        <span>{showMoreLabel}</span>
        <ChevronIcon className="text-stone-400" />
        <span className="sr-only">, show {hiddenCount} additional questions</span>
      </label>
      <label
        htmlFor={showMoreId}
        className={`${labelClassName} hidden peer-checked:flex`}
      >
        <span>{showLessLabel}</span>
        <ChevronIcon className="-rotate-90 text-amber-800" />
        <span className="sr-only">, hide {hiddenCount} additional questions</span>
      </label>
    </>
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
      className="w-full bg-white py-20 sm:py-24 md:py-32 lg:py-40"
      aria-labelledby={headingId}
    >
      <div className="mx-auto w-full max-w-[1312px] px-4 sm:px-8 md:px-16">
        <div
          className="flex flex-col gap-10 md:flex-row md:gap-x-16 lg:gap-x-32"
          role="region"
          aria-labelledby={headingId}
        >
          <div className="w-full md:max-w-[515px]">
            <h2
              id={headingId}
              className="pb-8 text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl md:pb-0 lg:text-4xl"
            >
              {heading}
            </h2>
            {description ? (
              <p className="mt-4 text-sm font-light leading-relaxed text-stone-500 sm:text-base md:mt-6">
                {description}
              </p>
            ) : null}
          </div>

          <div className="w-full md:w-[58%]">
            <div role="group" aria-labelledby={headingId}>
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
                  <div className="flex gap-4 py-8 md:py-10">
                    <ShowMoreToggle
                      showMoreId={showMoreId}
                      showMoreLabel={showMoreLabel}
                      showLessLabel={showLessLabel}
                      hiddenCount={extraItems.length}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
