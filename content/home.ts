/** Content for the Byte Canvas marketing home — consumed by section components. */

export type NavItem = { label: string; href: string };

export type Cta = { label: string; href: string };

export type ServiceCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const byteCanvasHome = {
  brand: {
    name: "Byte Canvas",
    tagline:
      "Residential interiors and spatial design for homes that feel intentional, calm, and unmistakably yours.",
    email: "hello@bytecanvas.example",
    copyright: "© 2026 Byte Canvas. All rights reserved.",
  },
  header: {
    logoHref: "/",
    nav: [
      { label: "Home", href: "/#hero" },
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/#work" },
      { label: "Insights", href: "/#news" },
      { label: "Blog", href: "/blog" },
    ] satisfies NavItem[],
    cta: { label: "Book a consult", href: "/#footer" } satisfies Cta,
  },
  hero: {
    eyebrow: "Interior & spatial design studio",
    title: "We design homes that feel lived-in — not staged",
    description:
      "From full renovations to room-by-room refreshes, we align layout, light, materials, and furnishings so every square foot supports how you actually live.",
    primaryCta: { label: "Explore our services", href: "#services" } satisfies Cta,
    secondaryCta: { label: "See selected work", href: "#work" } satisfies Cta,
    backgroundSrc:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
    meshSrc:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=80",
  },
  services: {
    id: "services",
    heading: "How we shape your space",
    subheading:
      "Planning, materials, and styling in one studio — so your floor plan, finishes, and furniture tell one coherent story.",
    cards: [
      {
        title: "Layout & spatial planning",
        description:
          "Circulation, storage, and zoning that make small rooms feel generous and large rooms feel intimate — without sacrificing function.",
        imageSrc:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1080&q=80",
        imageAlt: "Open living area with natural light and minimal furniture",
      },
      {
        title: "Materials & lighting",
        description:
          "Palettes, surfaces, and layered lighting that age gracefully and support the mood you want at breakfast, work-from-home, and wind-down.",
        imageSrc:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080&q=80",
        imageAlt: "Kitchen with stone counters and warm cabinetry",
      },
      {
        title: "Furnishing & styling",
        description:
          "Pieces, art, and textiles curated to your budget — installed so the home feels finished on day one, not six months later.",
        imageSrc:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080&q=80",
        imageAlt: "Living room with sofa, rug, and curated decor",
      },
    ] satisfies ServiceCard[],
  },
  blogPreview: {
    id: "journal",
    heading: "From the journal",
    subheading:
      "Recent notes on light, materials, and living well — open any post for the full read.",
    cardCtaLabel: "View article",
    viewAllHref: "/blog",
    viewAllLabel: "View all posts",
  },
  featuredCase: {
    id: "work",
    sectionId: "news",
    heading: "Insights & work",
    subheading:
      "A recent transformation — and how we think about residential design this season.",
    caseStudy: {
      kicker: "Case study",
      date: "April 20, 2026",
      dateIso: "2026-04-20",
      title: "How a narrow townhouse gained light, storage, and a real dining zone",
      description:
        "We opened sightlines to the garden, wrapped the stair in oak, and built in seating that doubles as storage. Here is the before-and-after on flow, daylight, and how the family uses the main floor.",
      linkLabel: "Request the full case study",
      linkHref: "#footer",
      imageSrc:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      imageAlt: "Bright modern home interior with dining and living areas",
    },
  },
  footer: {
    id: "footer",
    blurb:
      "A residential design studio for people who want their home to feel considered, comfortable, and true to how they live. Studios in Portland and remote projects nationwide.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Capabilities", href: "/#services" },
          { label: "Case study", href: "/#work" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Contact", href: "/#footer" },
          { label: "About us", href: "#" },
          { label: "Careers", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy policy", href: "#" },
          { label: "Terms of service", href: "#" },
        ],
      },
    ] satisfies FooterColumn[],
  },
} as const;
