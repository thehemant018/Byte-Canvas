import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/home";
import { byteCanvasHome } from "@/content/home";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const site = byteCanvasHome;

export const metadata: Metadata = {
  title: "Byte Canvas | Residential interior & spatial design",
  description:
    "Byte Canvas is a residential design studio: layout, materials, lighting, and furnishing for homes that feel intentional and lived-in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <SiteHeader
          brandName={site.brand.name}
          logoHref={site.header.logoHref}
          nav={[...site.header.nav]}
          cta={site.header.cta}
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
