"use client";

import { useId, useState } from "react";
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

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span
      className="relative flex h-5 w-5 shrink-0 items-center justify-center text-stone-900"
      aria-hidden
    >
      <span className="absolute h-px w-4 bg-current" />
      <span
        className={`absolute h-4 w-px bg-current transition-all duration-300 ${open ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}`}
      />
    </span>
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
  const baseId = useId();
  const headingId = `${id}-heading`;
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const hasHiddenItems = items.length > initialVisibleCount;
  const visibleItems = showAll ? items : items.slice(0, initialVisibleCount);

  const toggle = (heading: string) => {
    setOpenKey((current) => (current === heading ? null : heading));
  };

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

        <div className="mt-12 border-t border-stone-200">
          {visibleItems.map((item, index) => {
            const isOpen = openKey === item.heading;
            const triggerId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                key={item.heading}
                className="border-b border-stone-200"
              >
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.heading)}
                  >
                    <span className="text-base font-medium text-stone-900 sm:text-lg">
                      {item.heading}
                    </span>
                    <PlusMinusIcon open={isOpen} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-5 text-sm leading-relaxed text-stone-600 sm:pb-6 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {hasHiddenItems ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 border-b border-stone-900 pb-0.5 text-sm font-semibold tracking-wide text-stone-900 uppercase transition hover:text-amber-900 hover:border-amber-900"
              aria-expanded={showAll}
              onClick={() => {
                setShowAll((current) => {
                  const next = !current;
                  if (!next) setOpenKey(null);
                  return next;
                });
              }}
            >
              {showAll ? showLessLabel : showMoreLabel}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
