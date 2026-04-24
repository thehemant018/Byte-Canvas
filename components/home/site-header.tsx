import Link from "next/link";
import type { Cta, NavItem } from "@/content/home";

type SiteHeaderProps = {
  brandName: string;
  logoHref: string;
  nav: NavItem[];
  cta: Cta;
};

export function SiteHeader({ brandName, logoHref, nav, cta }: SiteHeaderProps) {
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
        <Link
          href={cta.href}
          className="rounded-lg bg-amber-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-900"
        >
          {cta.label}
        </Link>
      </header>
    </section>
  );
}
