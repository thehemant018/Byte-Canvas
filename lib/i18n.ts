export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

/** Canonical production origin for hreflang and metadataBase. */
export const PRODUCTION_SITE_URL = "https://byte-canvas-eta.vercel.app";

function normalizeOrigin(value: string): string {
  return value.trim().replace(/\/$/, "");
}

function isPlaceholderOrigin(value: string): boolean {
  try {
    const host = new URL(value).hostname;
    return (
      host === "bytecanvas.example" ||
      host.endsWith(".example") ||
      host === "example.com" ||
      host.endsWith(".example.com")
    );
  } catch {
    return true;
  }
}

/**
 * Public site origin for absolute hreflang URLs.
 * Prefer a real NEXT_PUBLIC_SITE_URL; never keep placeholder *.example hosts.
 * Locally uses localhost; production defaults to the Vercel app URL.
 */
export const siteUrl = (() => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
    ? normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL)
    : "";
  if (explicit && !isPlaceholderOrigin(explicit)) {
    return explicit;
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return PRODUCTION_SITE_URL;
})();

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Path without a locale prefix, always starting with `/`. */
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

/** Locale-prefixed path (no origin), e.g. `/fr/blog`. */
export function localizedPath(locale: Locale, path = "/"): string {
  if (!path || path === "/") {
    return `/${locale}`;
  }
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Absolute URL for a locale + path. */
export function absoluteUrl(locale: Locale, path = "/"): string {
  return `${siteUrl}${localizedPath(locale, path)}`;
}

/** `metadata.alternates.languages` including `x-default`. */
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
