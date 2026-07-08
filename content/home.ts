/** Content for the Byte Canvas marketing home — consumed by section components. */

export type NavItem = { label: string; href: string };

export type Cta = { label: string; href: string };

export type ServiceCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type AccordionItem = {
  heading: string;
  description: string;
};

export type FeatureCard = {
  kicker: string;
  date: string;
  dateIso: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
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
  showcase: {
    id: "spaces",
    heading: "Spaces we design",
    subheading:
      "Room-by-room expertise across the home — each zone planned for how you actually use it.",
    cards: [
      {
        title: "Primary suites",
        description:
          "Calm palettes, layered lighting, and storage that disappears into joinery so bedrooms feel restful, not cluttered.",
        imageSrc:
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1080&q=80",
        imageAlt: "Primary bedroom with soft linens and warm ambient light",
      },
      {
        title: "Kitchens & dining",
        description:
          "Work triangles, durable surfaces, and seating that draws people in — whether you host often or cook quietly on weeknights.",
        imageSrc:
          "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1080&q=80",
        imageAlt: "Modern kitchen with island and pendant lighting",
      },
      {
        title: "Living & work zones",
        description:
          "Flexible layouts that balance open conversation areas with quiet corners for focus, reading, and everyday downtime.",
        imageSrc:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1080&q=80",
        imageAlt: "Living room with sofa and built-in shelving",
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
  featureHighlight: {
    id: "studio-approach",
    sectionId: "approach",
    heading: "Studio approach",
    subheading:
      "How we balance structure and warmth when reshaping a room clients use every day.",
    feature: {
      kicker: "Design philosophy",
      date: "March 8, 2026",
      dateIso: "2026-03-08",
      title: "Built-in calm: storage, sightlines, and materials that age with the home",
      description:
        "We start with what has to stay — structure, light, daily routines — then layer in joinery, textiles, and art so the result feels collected, not catalogued. Here is how that plays out in a recent primary suite refresh.",
      linkLabel: "Read the full story",
      linkHref: "#footer",
      imageSrc:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      imageAlt: "Serene bedroom with natural textures and soft lighting",
    },
  },
  faq: {
    id: "faq",
    heading: "Common questions",
    description:
      "How we work, what to expect, and how we tailor each residential project to your home and budget.",
    items: [
      {
        heading: "How does a project typically start?",
        description:
          "We begin with a discovery call to understand your space, priorities, and timeline. From there we outline a phased plan — layout, materials, and furnishing — with clear milestones so you know what happens at each stage.",
      },
      {
        heading: "Do you work remotely or only on-site?",
        description:
          "We take on projects nationwide. Local clients receive full on-site support; remote clients get detailed plans, sourcing lists, and virtual walkthroughs so decisions stay collaborative without constant travel.",
      },
      {
        heading: "What budget range do you usually work with?",
        description:
          "Most of our residential engagements span room refreshes through full-home renovations. We align scope and finishes to your budget early and flag trade-offs before anything is ordered or installed.",
      },
    ] satisfies AccordionItem[],
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
    } satisfies FeatureCard,
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
