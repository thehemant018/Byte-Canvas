/** Content for the Byte Canvas marketing home — consumed by section components. */

import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";

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

export type HomeContent = {
  brand: {
    name: string;
    tagline: string;
    email: string;
    copyright: string;
  };
  header: {
    logoHref: string;
    nav: NavItem[];
    cta: Cta;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    backgroundSrc: string;
    meshSrc: string;
  };
  services: {
    id: string;
    heading: string;
    subheading: string;
    cards: ServiceCard[];
  };
  showcase: {
    id: string;
    heading: string;
    subheading: string;
    cards: ServiceCard[];
  };
  blogPreview: {
    id: string;
    heading: string;
    subheading: string;
    cardCtaLabel: string;
    viewAllHref: string;
    viewAllLabel: string;
  };
  featureHighlight: {
    id: string;
    sectionId: string;
    heading: string;
    subheading: string;
    feature: FeatureCard;
  };
  faq: {
    id: string;
    heading: string;
    description: string;
    showMoreLabel: string;
    showLessLabel: string;
    initialVisibleCount: number;
    items: AccordionItem[];
  };
  featuredCase: {
    id: string;
    sectionId: string;
    heading: string;
    subheading: string;
    caseStudy: FeatureCard;
  };
  footer: {
    id: string;
    blurb: string;
    columns: FooterColumn[];
  };
  meta: {
    title: string;
    description: string;
  };
  blogUi: {
    indexTitle: string;
    indexDescription: string;
    indexEyebrow: string;
    indexHeading: string;
    indexIntro: string;
    readArticle: string;
    backToPosts: string;
    journalEyebrow: string;
  };
};

const homeEn: HomeContent = {
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
    ],
    cta: { label: "Book a consult", href: "/#footer" },
  },
  hero: {
    eyebrow: "Interior & spatial design studio",
    title: "We design homes that feel lived-in — not staged",
    description:
      "From full renovations to room-by-room refreshes, we align layout, light, materials, and furnishings so every square foot supports how you actually live.",
    primaryCta: { label: "Explore our services", href: "#services" },
    secondaryCta: { label: "See selected work", href: "#work" },
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
    ],
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
    ],
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
      title:
        "Built-in calm: storage, sightlines, and materials that age with the home",
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
    heading: "Frequently Asked Questions",
    description:
      "How we work, what to expect, and how we tailor each residential project to your home and budget.",
    showMoreLabel: "Show More",
    showLessLabel: "Show Less",
    initialVisibleCount: 3,
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
      {
        heading: "How long does a typical residential project take?",
        description:
          "Timelines depend on scope — a single-room refresh may take a few weeks, while a full-home renovation can span several months. We share a realistic schedule during the proposal phase and keep you updated as selections and installs progress.",
      },
      {
        heading: "Can you work with pieces I already own?",
        description:
          "Yes. We often integrate existing furniture, art, and heirlooms into a refreshed plan. During discovery we note what stays, what moves, and what might need reupholstery or reframing to feel at home in the new layout.",
      },
      {
        heading: "How do I book a consultation?",
        description:
          "Reach out through our contact form or email to schedule an introductory call. We will discuss your space, timeline, and goals, then outline next steps if we are a good fit for your project.",
      },
    ],
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
    ],
  },
  meta: {
    title: "Byte Canvas | Residential interior & spatial design",
    description:
      "Byte Canvas is a residential design studio: layout, materials, lighting, and furnishing for homes that feel intentional and lived-in.",
  },
  blogUi: {
    indexTitle: "Blog | Byte Canvas",
    indexDescription:
      "Notes on light, materials, layout, and living well from the Byte Canvas studio.",
    indexEyebrow: "Journal",
    indexHeading: "Blog",
    indexIntro:
      "Practical ideas from our residential projects — same format on every post: author context first, then the full article.",
    readArticle: "Read article →",
    backToPosts: "← All posts",
    journalEyebrow: "Journal",
  },
};

const homeFr: HomeContent = {
  brand: {
    name: "Byte Canvas",
    tagline:
      "Intérieurs résidentiels et design spatial pour des maisons intentionnelles, calmes et profondément personnelles.",
    email: "hello@bytecanvas.example",
    copyright: "© 2026 Byte Canvas. Tous droits réservés.",
  },
  header: {
    logoHref: "/",
    nav: [
      { label: "Accueil", href: "/#hero" },
      { label: "Services", href: "/#services" },
      { label: "Projets", href: "/#work" },
      { label: "Perspectives", href: "/#news" },
      { label: "Blog", href: "/blog" },
    ],
    cta: { label: "Prendre rendez-vous", href: "/#footer" },
  },
  hero: {
    eyebrow: "Studio d'intérieur et de design spatial",
    title: "Nous concevons des maisons habitées — pas mises en scène",
    description:
      "Des rénovations complètes aux rafraîchissements pièce par pièce, nous alignons plan, lumière, matériaux et mobilier pour que chaque mètre carré soutienne votre vraie vie.",
    primaryCta: { label: "Découvrir nos services", href: "#services" },
    secondaryCta: { label: "Voir des projets", href: "#work" },
    backgroundSrc:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
    meshSrc:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=80",
  },
  services: {
    id: "services",
    heading: "Comment nous façonnons votre espace",
    subheading:
      "Planification, matériaux et styling dans un seul studio — pour que plan, finitions et mobilier racontent une histoire cohérente.",
    cards: [
      {
        title: "Plan & organisation spatiale",
        description:
          "Circulation, rangement et zonage qui font paraître les petites pièces généreuses et les grandes intimes — sans sacrifier la fonction.",
        imageSrc:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1080&q=80",
        imageAlt: "Salon ouvert avec lumière naturelle et mobilier minimal",
      },
      {
        title: "Matériaux & éclairage",
        description:
          "Palettes, surfaces et éclairage en couches qui vieillissent bien et soutiennent l'ambiance du petit-déjeuner au télétravail jusqu'au soir.",
        imageSrc:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080&q=80",
        imageAlt: "Cuisine avec plans en pierre et menuiserie chaude",
      },
      {
        title: "Mobilier & styling",
        description:
          "Pièces, art et textiles choisis selon votre budget — installés pour que la maison soit terminée dès le premier jour.",
        imageSrc:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080&q=80",
        imageAlt: "Salon avec canapé, tapis et décoration soignée",
      },
    ],
  },
  showcase: {
    id: "spaces",
    heading: "Les espaces que nous concevons",
    subheading:
      "Une expertise pièce par pièce — chaque zone pensée pour l'usage réel du quotidien.",
    cards: [
      {
        title: "Suites parentales",
        description:
          "Palettes calmes, éclairage en couches et rangements intégrés pour des chambres reposantes, sans encombrement.",
        imageSrc:
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1080&q=80",
        imageAlt: "Chambre parentale avec linge doux et lumière ambiante",
      },
      {
        title: "Cuisines & salles à manger",
        description:
          "Triangles de travail, surfaces durables et assises accueillantes — que vous receviez souvent ou cuisiniez tranquillement en semaine.",
        imageSrc:
          "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1080&q=80",
        imageAlt: "Cuisine moderne avec îlot et suspensions",
      },
      {
        title: "Salons & espaces de travail",
        description:
          "Plans flexibles qui équilibrent conversation ouverte et coins calmes pour se concentrer, lire et se reposer.",
        imageSrc:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1080&q=80",
        imageAlt: "Salon avec canapé et étagères intégrées",
      },
    ],
  },
  blogPreview: {
    id: "journal",
    heading: "Du journal",
    subheading:
      "Notes récentes sur la lumière, les matériaux et le bien-vivre — ouvrez un article pour la lecture complète.",
    cardCtaLabel: "Voir l'article",
    viewAllHref: "/blog",
    viewAllLabel: "Tous les articles",
  },
  featureHighlight: {
    id: "studio-approach",
    sectionId: "approach",
    heading: "Approche du studio",
    subheading:
      "Comment nous équilibrons structure et chaleur en remodelant une pièce utilisée chaque jour.",
    feature: {
      kicker: "Philosophie de design",
      date: "8 mars 2026",
      dateIso: "2026-03-08",
      title:
        "Le calme intégré : rangements, perspectives et matériaux qui vieillissent avec la maison",
      description:
        "Nous partons de ce qui doit rester — structure, lumière, routines — puis ajoutons menuiserie, textiles et art pour un résultat collectionné, non catalogue. Voici comment cela se joue dans un récent rafraîchissement de suite parentale.",
      linkLabel: "Lire l'histoire complète",
      linkHref: "#footer",
      imageSrc:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      imageAlt: "Chambre sereine avec textures naturelles et lumière douce",
    },
  },
  faq: {
    id: "faq",
    heading: "Questions fréquentes",
    description:
      "Notre façon de travailler, ce à quoi s'attendre, et comment nous adaptons chaque projet résidentiel à votre maison et votre budget.",
    showMoreLabel: "Voir plus",
    showLessLabel: "Voir moins",
    initialVisibleCount: 3,
    items: [
      {
        heading: "Comment débute généralement un projet ?",
        description:
          "Nous commençons par un appel découverte pour comprendre votre espace, vos priorités et votre calendrier. Ensuite nous proposons un plan par phases — plan, matériaux, mobilier — avec des jalons clairs à chaque étape.",
      },
      {
        heading: "Travaillez-vous à distance ou uniquement sur site ?",
        description:
          "Nous menons des projets partout au pays. Les clients locaux bénéficient d'un accompagnement sur site ; les clients à distance reçoivent plans détaillés, listes d'approvisionnement et visites virtuelles pour garder des décisions collaboratives.",
      },
      {
        heading: "Quelle fourchette de budget accompagnez-vous ?",
        description:
          "La plupart de nos missions vont du rafraîchissement d'une pièce à la rénovation complète. Nous alignons périmètre et finitions sur votre budget dès le début et signalons les arbitrages avant toute commande.",
      },
      {
        heading: "Combien de temps dure un projet résidentiel typique ?",
        description:
          "Les délais dépendent du périmètre — quelques semaines pour une pièce, plusieurs mois pour une maison entière. Nous partageons un calendrier réaliste dès la proposition et vous tenons informés au fil des choix et de la pose.",
      },
      {
        heading: "Pouvez-vous intégrer des pièces que je possède déjà ?",
        description:
          "Oui. Nous intégrons souvent mobilier, art et héritages dans un plan renouvelé. Lors de la découverte, nous notons ce qui reste, ce qui bouge, et ce qui pourrait être retapissé ou recadré.",
      },
      {
        heading: "Comment réserver une consultation ?",
        description:
          "Contactez-nous via le formulaire ou par e-mail pour planifier un appel d'introduction. Nous parlerons de votre espace, du calendrier et des objectifs, puis des prochaines étapes si le projet nous convient mutuellement.",
      },
    ],
  },
  featuredCase: {
    id: "work",
    sectionId: "news",
    heading: "Perspectives & projets",
    subheading:
      "Une transformation récente — et notre vision du design résidentiel cette saison.",
    caseStudy: {
      kicker: "Étude de cas",
      date: "20 avril 2026",
      dateIso: "2026-04-20",
      title:
        "Comment une maison de ville étroite a gagné lumière, rangement et une vraie salle à manger",
      description:
        "Nous avons ouvert les perspectives vers le jardin, habillé l'escalier de chêne et créé des assises qui font aussi rangement. Voici le avant/après sur la circulation, la lumière du jour et l'usage du rez-de-chaussée.",
      linkLabel: "Demander l'étude de cas complète",
      linkHref: "#footer",
      imageSrc:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      imageAlt: "Intérieur lumineux avec salle à manger et salon",
    },
  },
  footer: {
    id: "footer",
    blurb:
      "Un studio de design résidentiel pour ceux qui veulent une maison réfléchie, confortable et fidèle à leur façon de vivre. Studios à Portland et projets à distance partout au pays.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Compétences", href: "/#services" },
          { label: "Étude de cas", href: "/#work" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "Contact", href: "/#footer" },
          { label: "À propos", href: "#" },
          { label: "Carrières", href: "#" },
        ],
      },
      {
        title: "Mentions légales",
        links: [
          { label: "Politique de confidentialité", href: "#" },
          { label: "Conditions d'utilisation", href: "#" },
        ],
      },
    ],
  },
  meta: {
    title: "Byte Canvas | Design d'intérieur et spatial résidentiel",
    description:
      "Byte Canvas est un studio de design résidentiel : plan, matériaux, éclairage et mobilier pour des maisons intentionnelles et habitées.",
  },
  blogUi: {
    indexTitle: "Blog | Byte Canvas",
    indexDescription:
      "Notes sur la lumière, les matériaux, le plan et le bien-vivre par le studio Byte Canvas.",
    indexEyebrow: "Journal",
    indexHeading: "Blog",
    indexIntro:
      "Idées concrètes issues de nos projets résidentiels — même format pour chaque article : contexte auteur d'abord, puis le texte complet.",
    readArticle: "Lire l'article →",
    backToPosts: "← Tous les articles",
    journalEyebrow: "Journal",
  },
};

const homes: Record<Locale, HomeContent> = {
  en: homeEn,
  fr: homeFr,
};

function localizeHome(locale: Locale, content: HomeContent): HomeContent {
  const L = (href: string) => localizeHref(locale, href);
  return {
    ...content,
    header: {
      ...content.header,
      logoHref: L(content.header.logoHref),
      nav: content.header.nav.map((item) => ({ ...item, href: L(item.href) })),
      cta: { ...content.header.cta, href: L(content.header.cta.href) },
    },
    hero: {
      ...content.hero,
      primaryCta: {
        ...content.hero.primaryCta,
        href: L(content.hero.primaryCta.href),
      },
      secondaryCta: {
        ...content.hero.secondaryCta,
        href: L(content.hero.secondaryCta.href),
      },
    },
    blogPreview: {
      ...content.blogPreview,
      viewAllHref: L(content.blogPreview.viewAllHref),
    },
    featureHighlight: {
      ...content.featureHighlight,
      feature: {
        ...content.featureHighlight.feature,
        linkHref: L(content.featureHighlight.feature.linkHref),
      },
    },
    featuredCase: {
      ...content.featuredCase,
      caseStudy: {
        ...content.featuredCase.caseStudy,
        linkHref: L(content.featuredCase.caseStudy.linkHref),
      },
    },
    footer: {
      ...content.footer,
      columns: content.footer.columns.map((col) => ({
        ...col,
        links: col.links.map((link) => ({ ...link, href: L(link.href) })),
      })),
    },
  };
}

export function getHomeContent(locale: Locale): HomeContent {
  return localizeHome(locale, homes[locale]);
}

/** @deprecated Prefer getHomeContent(locale) */
export const byteCanvasHome = homeEn;
