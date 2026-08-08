export const metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the AI Creator Hub website.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <span className="font-mono text-blue text-xs font-semibold block mb-4">LEGAL</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">Terms of Service</h1>
        <p className="text-muted text-sm mb-10">Last updated: August 6, 2026</p>

        <div className="border border-line rounded-md p-5 mb-10 bg-surface">
          <p className="text-sm text-muted leading-relaxed">
            <strong>Template notice:</strong> this is a starting-point terms of service for AI Creator Hub. It is not legal
            advice. Have it reviewed by a lawyer before publishing, and adjust it to match how this site actually operates.
          </p>
        </div>

        <div className="space-y-8 text-[15px] text-muted leading-relaxed">
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">1. Acceptance of terms</h2>
            <p>By using AI Creator Hub, you agree to these terms. If you don't agree, please discontinue use of the site.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">2. Use of the site</h2>
            <p>
              This site is provided for personal, non-commercial research into AI tools. You agree not to scrape, resell or
              republish the content of this site in bulk without permission.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">3. Accuracy of tool listings</h2>
            <p>
              Reviews, ratings and pricing information reflect our own testing at the time of publishing. Third-party
              tools change frequently — pricing, features and availability may have changed since a review was written.
              Always confirm current details on the tool's own website before purchasing.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">4. Affiliate relationships</h2>
            <p>
              Some links on this site are affiliate links, meaning we may earn a commission if you subscribe through them,
              at no extra cost to you. This does not affect our editorial rankings.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">5. No warranty</h2>
            <p>
              This site is provided "as is" without warranties of any kind. We do not guarantee that any listed tool will
              meet your specific needs or that the site will be error-free or uninterrupted.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">6. Limitation of liability</h2>
            <p>
              AI Creator Hub is not liable for any losses arising from decisions made based on content published on this
              site, including purchases of third-party tools.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">7. Third-party links</h2>
            <p>
              This site links to third-party tools and services we do not control. We are not responsible for their
              content, pricing, or terms of service.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">8. Changes to these terms</h2>
            <p>These terms may be updated periodically, reflected by the "Last updated" date at the top of this page.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">9. Contact</h2>
            <p>Questions about these terms can be sent to hello@aicreatorhub.example.com.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
