export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

/** Public site origin used for absolute hreflang URLs. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://bytecanvas.example";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Path without a locale prefix, always starting with `/` (or `#…`). */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "") || "/";
  }
  return pathname || "/";
}

/**
 * Prefix an internal href with the locale.
 * Leaves hashes, mailto, and absolute URLs untouched.
 */
export function localizeHref(locale: Locale, href: string): string {
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return href;
  }

  if (href.startsWith("/#")) {
    return `/${locale}/${href.slice(1)}`;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  if (href.startsWith("/")) {
    return `/${locale}${href}`;
  }

  return href;
}

/** Absolute URL for a locale + path (path may include leading `/`). */
export function absoluteUrl(locale: Locale, path = "/"): string {
  const normalized =
    !path || path === "/"
      ? `/${locale}`
      : path.startsWith("/")
        ? `/${locale}${path}`
        : `/${locale}/${path}`;
  return `${siteUrl}${normalized}`;
}

/** Next.js `metadata.alternates.languages` map including `x-default`. */
export function hreflangAlternates(path = "/"): Record<string, string> {
  const clean =
    !path || path === "/"
      ? "/"
      : path.startsWith("/")
        ? path
        : `/${path}`;

  return {
    en: absoluteUrl("en", clean === "/" ? "/" : clean),
    fr: absoluteUrl("fr", clean === "/" ? "/" : clean),
    "x-default": absoluteUrl(defaultLocale, clean === "/" ? "/" : clean),
  };
}
