export const metadata = {
  title: "Privacy Policy",
  description: "How AI Creator Hub collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <span className="font-mono text-blue text-xs font-semibold block mb-4">LEGAL</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-muted text-sm mb-10">Last updated: August 6, 2026</p>

        <div className="border border-line rounded-md p-5 mb-10 bg-surface">
          <p className="text-sm text-muted leading-relaxed">
            <strong>Template notice:</strong> this is a starting-point privacy policy for AI Creator Hub. It is not legal advice.
            Have it reviewed by a lawyer before publishing, and update it to reflect the exact tools, cookies and third-party
            services this site actually uses.
          </p>
        </div>

        <div className="space-y-8 text-[15px] text-muted leading-relaxed">
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">1. Information we collect</h2>
            <p>
              We collect information you provide directly, such as your name and email address when you subscribe to the
              newsletter or submit the contact form. We also collect standard usage data automatically — pages visited,
              approximate location, device and browser type — through analytics tools.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">2. How we use your information</h2>
            <p>
              Email addresses are used only to send the newsletter and to respond to messages sent through the contact form.
              Usage data is used in aggregate to understand which tools, categories and articles are most useful, and to
              improve the site. We do not sell personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">3. Cookies</h2>
            <p>
              This site may use cookies for basic analytics and to remember preferences such as a completed newsletter
              signup. You can disable cookies in your browser settings; some site features may not function correctly
              without them.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">4. Third-party and affiliate links</h2>
            <p>
              Some tool listings include affiliate links. Clicking through to a third-party site is subject to that site's
              own privacy policy — we are not responsible for how third parties handle your data once you leave this site.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">5. Data retention</h2>
            <p>
              Newsletter subscriber data is retained until you unsubscribe. Contact form submissions are retained only as
              long as needed to resolve the inquiry.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">6. Your rights</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by emailing
              hello@aicreatorhub.example.com. You can unsubscribe from the newsletter using the link in any email.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">7. Children's privacy</h2>
            <p>This site is not directed at children under 13, and we do not knowingly collect data from them.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">8. Changes to this policy</h2>
            <p>
              This policy may be updated periodically. Material changes will be reflected by an updated "Last updated"
              date at the top of this page.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-[#0b0f1a] mb-2.5">9. Contact</h2>
            <p>Questions about this policy can be sent to hello@aicreatorhub.example.com.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
