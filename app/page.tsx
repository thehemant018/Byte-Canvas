import {
  Accordion,
  BlogPreviewGrid,
  FeatureHighlight,
  FeaturedCaseStudy,
  HeroBanner,
  ServiceCardGrid,
  ShowcaseCardGrid,
} from "@/components/home";
import { getAllBlogPosts } from "@/content/blog";
import { byteCanvasHome } from "@/content/home";

const c = byteCanvasHome;
const HOME_BLOG_CARD_COUNT = 6;

export default function Home() {
  const blogPreviews = getAllBlogPosts()
    .slice(0, HOME_BLOG_CARD_COUNT)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      publishedAt: p.publishedAt,
    }));

  return (
    <main className="flex flex-1 flex-col bg-stone-50 text-stone-800">
      <HeroBanner
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
        backgroundSrc={c.hero.backgroundSrc}
        meshSrc={c.hero.meshSrc}
      />
      <ServiceCardGrid
        id={c.services.id}
        heading={c.services.heading}
        subheading={c.services.subheading}
        cards={[...c.services.cards]}
      />
      <ShowcaseCardGrid
        id={c.showcase.id}
        heading={c.showcase.heading}
        subheading={c.showcase.subheading}
        cards={[...c.showcase.cards]}
      />
      <Accordion
        id={c.faq.id}
        heading={c.faq.heading}
        description={c.faq.description}
        items={[...c.faq.items]}
      />
      <BlogPreviewGrid
        id={c.blogPreview.id}
        heading={c.blogPreview.heading}
        subheading={c.blogPreview.subheading}
        posts={blogPreviews}
        cardCtaLabel={c.blogPreview.cardCtaLabel}
        viewAllHref={c.blogPreview.viewAllHref}
        viewAllLabel={c.blogPreview.viewAllLabel}
      />
      <FeatureHighlight
        id={c.featureHighlight.id}
        sectionId={c.featureHighlight.sectionId}
        heading={c.featureHighlight.heading}
        subheading={c.featureHighlight.subheading}
        feature={c.featureHighlight.feature}
        imagePosition="right"
      />
      <FeaturedCaseStudy
        sectionId={c.featuredCase.sectionId}
        heading={c.featuredCase.heading}
        subheading={c.featuredCase.subheading}
        articleId={c.featuredCase.id}
        caseStudy={c.featuredCase.caseStudy}
      />
    </main>
  );
}
