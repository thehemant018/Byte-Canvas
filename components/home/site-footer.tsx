import Link from "next/link";
import type { FooterColumn } from "@/content/home";

type SiteFooterProps = {
  id: string;
  brandName: string;
  blurb: string;
  email: string;
  columns: FooterColumn[];
  copyright: string;
};

export function SiteFooter({
  id,
  brandName,
  blurb,
  email,
  columns,
  copyright,
}: SiteFooterProps) {
  return (
    <section
      data-component="footer"
      id={id}
      className="border-t border-stone-200/80 bg-stone-900 text-stone-300"
    >
      <footer className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-white">{brandName}</p>
            <p className="mt-3 text-sm leading-relaxed">{blurb}</p>
            <p className="mt-4 text-sm text-stone-400">
              <Link href={`mailto:${email}`} className="transition hover:text-white">
                {email}
              </Link>
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label + link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          {copyright}
        </p>
      </footer>
    </section>
  );
}
