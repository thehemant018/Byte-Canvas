"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Cta, NavItem } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import { localeLabels, locales, stripLocale } from "@/lib/i18n";

type SiteHeaderProps = {
  brandName: string;
  logoHref: string;
  nav: NavItem[];
  cta: Cta;
  locale: Locale;
};

export function SiteHeader({
  brandName,
  logoHref,
  nav,
  cta,
  locale,
}: SiteHeaderProps) {
  const pathname = usePathname() || "/";
  const pathWithoutLocale = stripLocale(pathname);
  const switchSuffix = pathWithoutLocale === "/" ? "" : pathWithoutLocale;

  return (
    <section
      data-component="header"
      className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md"
    >
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href={logoHref}
          className="text-lg font-bold tracking-tight text-amber-900"
        >
          {brandName}
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm font-medium text-stone-600 sm:flex"
          aria-label="Main"
        >
          {nav.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="transition hover:text-amber-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <nav
            className="flex items-center gap-1 text-xs font-semibold tracking-wide text-stone-500"
            aria-label="Language"
          >
            {locales.map((code) => (
              <Link
                key={code}
                href={`/${code}${switchSuffix}`}
                hrefLang={code}
                lang={code}
                aria-current={code === locale ? "true" : undefined}
                className={
                  code === locale
                    ? "rounded px-1.5 py-0.5 text-amber-900"
                    : "rounded px-1.5 py-0.5 transition hover:text-amber-800"
                }
              >
                {localeLabels[code]}
              </Link>
            ))}
          </nav>
          <Link
            href={cta.href}
            className="rounded-lg bg-amber-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-900"
          >
            {cta.label}
          </Link>
        </div>
      </header>
    </section>
  );
}
