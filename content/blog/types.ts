/** Shared shape for every blog post — Promo + Rte sections use these fields. */

export type BlogPromoFields = {
  authorName: string;
  /** Short bio or role line shown under the name */
  authorDescription: string;
  authorImageSrc: string;
  authorImageAlt: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  promo: BlogPromoFields;
  /** Trusted static HTML for the RTE body (same contract for all posts). */
  bodyHtml: string;
};
