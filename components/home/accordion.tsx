"use client";

import { useId, useState } from "react";
import type { AccordionItem } from "@/content/home";

type AccordionProps = {
  id: string;
  heading: string;
  description: string;
  items: AccordionItem[];
};

export function Accordion({ id, heading, description, items }: AccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      data-component="accordion"
      id={id}
      className="border-t border-stone-200/80 bg-white py-16 sm:py-20"
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2
          id={`${baseId}-heading`}
          className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
        >
          {heading}
        </h2>
        <p className="mt-2 text-stone-600">{description}</p>

        <div className="mt-10 divide-y divide-stone-200/80 rounded-2xl border border-stone-200/80 bg-stone-50/50">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div key={item.heading}>
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-stone-100/60"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span className="text-base font-semibold text-stone-900 sm:text-lg">
                      {item.heading}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 transition"
                      aria-hidden
                    >
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="px-6 pb-5"
                >
                  <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
