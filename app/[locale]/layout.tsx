import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/home";
import { getHomeContent } from "@/content/home";
import {
  hreflangAlternates,
  isLocale,
  locales,
  siteUrl,
  type Locale,
} from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const site = getHomeContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: site.meta.title,
    description: site.meta.description,
    alternates: {
      languages: hreflangAlternates("/"),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const site = getHomeContent(locale);

  return (
    <html lang={locale} className={`${inter.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <SiteHeader
          brandName={site.brand.name}
          logoHref={site.header.logoHref}
          nav={[...site.header.nav]}
          cta={site.header.cta}
          locale={locale}
        />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter
          id={site.footer.id}
          brandName={site.brand.name}
          blurb={site.footer.blurb}
          email={site.brand.email}
          columns={[...site.footer.columns]}
          copyright={site.brand.copyright}
        />
      </body>
    </html>
  );
}
