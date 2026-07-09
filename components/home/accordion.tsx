"use client";

import { useId, useRef, useState } from "react";
import type { AccordionItem } from "@/content/home";

type AccordionProps = {
  id: string;
  heading: string;
  description: string;
  items: AccordionItem[];
  initialVisibleCount: number;
  showMoreLabel: string;
  showLessLabel: string;
};

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      {expanded ? (
        <path d="M12 6.93933L3.93936 15L5.00002 16.0607L12 9.06065L19 16.0606L20.0607 15L12 6.93933Z" />
      ) : (
        <path d="M12.0001 14.9393L5.00011 7.93933L3.93945 8.99999L12.0001 17.0607L20.0608 8.99999L19.0001 7.93933L12.0001 14.9393Z" />
      )}
    </svg>
  );
}

export function Accordion({
  id,
  heading,
  description,
  items,
  initialVisibleCount,
  showMoreLabel,
  showLessLabel,
}: AccordionProps) {
  const baseId = useId();
  const headingId = `${id}-heading`;

  const [showAllItems, setShowAllItems] = useState(
    items.length <= initialVisibleCount,
  );

  const summaryRefs = useRef<(HTMLElement | null)[]>([]);

  const hasHiddenItems = items.length > initialVisibleCount;

  const handleSummaryKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    const summaries = summaryRefs.current.filter(
      (summary): summary is HTMLElement => summary !== null,
    );

    if (summaries.length === 0) {
      return;
    }

    let targetIndex: number | null = null;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        targetIndex = (index + 1) % summaries.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        targetIndex = (index - 1 + summaries.length) % summaries.length;
        break;
      case "Home":
        targetIndex = 0;
        break;
      case "End":
        targetIndex = summaries.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    summaries[targetIndex]?.focus();
  };

  return (
    <div
      data-component="accordion"
      id={id}
      role="region"
      className="w-full border-t border-stone-200/80 bg-white py-16 sm:py-20"
      aria-labelledby={headingId}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className="flex flex-col gap-10 md:flex-row md:gap-16"
          aria-labelledby={headingId}
        >
          <div className="w-full md:max-w-[515px]">
            <h2
              id={headingId}
              className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl"
            >
              {heading}
            </h2>
            <p className="mt-4 text-stone-600">{description}</p>
          </div>

          <div className="w-full md:w-[58%]">
            {items.map((item, index) => {
              const headerId = `${id}-header-${index}`;
              const panelId = `${id}-content-${index}`;
              const isItemVisible = showAllItems || index < initialVisibleCount;

              if (!isItemVisible) {
                return null;
              }

              return (
                <div key={`${baseId}-${index}`}>
                  <details className="group border-b-[3px] border-b-stone-200 transition-all duration-500 ease-in-out open:border-b-amber-800 open:pb-8 md:open:pb-8">
                    <summary
                      ref={(element) => {
                        summaryRefs.current[index] = element;
                      }}
                      id={headerId}
                      className="flex cursor-pointer list-none flex-row justify-between gap-12 pb-8 pt-8 marker:content-none md:gap-16 md:pb-8 md:pt-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 group-open:pb-0 [&::-webkit-details-marker]:hidden"
                      onKeyDown={(event) => handleSummaryKeyDown(event, index)}
                    >
                      <div className="flex flex-col text-start">
                        <span className="cursor-pointer text-left text-base font-normal leading-snug text-stone-900 sm:text-lg">
                          {item.heading}
                        </span>
                      </div>
                      <span className="shrink-0 rotate-0 transform text-stone-400 transition-transform duration-500 ease-in-out group-open:rotate-180 group-open:text-amber-800">
                        <ChevronIcon expanded={false} />
                      </span>
                    </summary>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      className="transition-transform duration-300 ease-in"
                    >
                      <div className="pb-0 pt-3 pr-9 md:pr-[88px]">
                        <div className="rich-text">
                          <div className="text-sm font-light leading-relaxed text-stone-600 sm:text-base">
                            <span>{item.description}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              );
            })}

            {hasHiddenItems ? (
              <div className="flex gap-4 py-8 md:py-10">
                <div className="flex items-center gap-8">
                  <button
                    type="button"
                    className="flex items-center gap-2 p-0 text-sm font-medium uppercase tracking-wide text-amber-900 transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
                    aria-expanded={showAllItems}
                    onClick={() => setShowAllItems((current) => !current)}
                  >
                    <span>{showAllItems ? showLessLabel : showMoreLabel}</span>
                  </button>
                  <span
                    className={`transform transition-transform duration-500 ease-in-out text-stone-400 ${
                      showAllItems ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronIcon expanded={showAllItems} />
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
