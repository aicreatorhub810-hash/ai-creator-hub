export const metadata = {
  title: "Affiliate Disclosure",
  description: "How AI Creator Hub uses affiliate links and how that relates to our reviews.",
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <span className="font-mono text-blue text-xs font-semibold block mb-4">LEGAL</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">Affiliate Disclosure</h1>
        <p className="text-muted text-sm mb-10">Last updated: August 6, 2026</p>

        <div className="border border-line rounded-md p-5 mb-10 bg-surface">
          <p className="text-sm text-muted leading-relaxed">
            <strong>Template notice:</strong> update this page with the specific affiliate programs this site actually
            participates in before publishing.
          </p>
        </div>

        <div className="space-y-8 text-[15px] text-muted leading-relaxed">
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">What this means</h2>
            <p>
              Some of the links on AI Creator Hub — including on tool detail pages and in articles — are affiliate
              links. If you click one of these links and subscribe to or purchase the tool, we may earn a commission
              at no additional cost to you.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">Why we do this</h2>
            <p>
              Affiliate commissions are one of the ways this site is funded, alongside occasional sponsored
              placements that are always clearly labeled. This lets the directory and reviews stay free to read.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">How this affects our reviews</h2>
            <p>
              It doesn't. Listings are researched using publicly available information, and any affiliate relationship is disclosed
              quality and pricing — not which program pays the highest commission. Tools without any affiliate
              relationship are reviewed and ranked using the exact same process as tools that do have one.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">Sponsored content</h2>
            <p>
              If a piece of content is ever sponsored rather than independently written, it will be clearly labeled
              as such at the top of the article. Sponsored status never guarantees inclusion in the directory or a
              positive review.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">Questions</h2>
            <p>
              If you have any questions about a specific link or listing, email aicreatorhub810@gmail.com and
              we'll clarify.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
