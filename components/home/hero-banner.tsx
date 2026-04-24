import Image from "next/image";
import Link from "next/link";
import type { Cta } from "@/content/home";

type HeroBannerProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  backgroundSrc: string;
  meshSrc: string;
};

export function HeroBanner({
  id = "hero",
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundSrc,
  meshSrc,
}: HeroBannerProps) {
  return (
    <section
      data-component="hero-banner"
      id={id}
      className="relative min-h-[24rem] overflow-hidden sm:min-h-[28rem] lg:min-h-[32rem]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={backgroundSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-90"
        style={{ backgroundImage: `url('${meshSrc}')` }}
        role="presentation"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-stone-950/90 via-amber-950/75 to-stone-950/85"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.12),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-amber-100">
          {eyebrow}
        </p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-amber-50/90">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-amber-950 shadow-lg transition hover:bg-amber-50"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
