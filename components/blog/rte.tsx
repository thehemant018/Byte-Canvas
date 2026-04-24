type RteProps = {
  /** Static HTML authored in repo content — not user-supplied at runtime. */
  html: string;
};

const rteBodyClass =
  "rte mt-12 max-w-none text-stone-700 leading-relaxed " +
  "[&_p]:mb-4 [&_p:last-child]:mb-0 " +
  "[&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-stone-900 [&_h2:first-child]:mt-0 " +
  "[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-stone-900 " +
  "[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-stone-800 " +
  "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 " +
  "[&_hr]:my-10 [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-stone-200 " +
  "[&_li]:mb-1 [&_li]:marker:text-amber-700 " +
  "[&_a]:font-medium [&_a]:text-amber-900 [&_a]:underline [&_a]:decoration-amber-300 [&_a]:underline-offset-2 hover:[&_a]:text-amber-700 " +
  "[&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-amber-200 [&_blockquote]:py-1 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-stone-600 " +
  "[&_strong]:font-semibold [&_strong]:text-stone-900 [&_em]:italic";

export function Rte({ html }: RteProps) {
  return (
    <section
      data-component="blog-rte"
      className="border-t border-stone-200/80 pt-12"
      aria-label="Article body"
    >
      <div className={rteBodyClass} dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}
