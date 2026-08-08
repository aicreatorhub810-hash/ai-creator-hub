import { ShieldCheck, Award, RefreshCcw, Users } from "lucide-react";

export const metadata = {
  title: "About",
  description: "Why AI Creator Hub exists and how tools get reviewed before they're listed.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="font-mono text-blue-glow text-xs font-semibold block mb-4">ABOUT AI CREATOR HUB</span>
          <h1 className="font-display text-3xl sm:text-[42px] font-bold tracking-tight mb-5">
            Built by a creator, for creators
          </h1>
          <p className="text-muted-dark text-lg leading-relaxed">
            AI Creator Hub started as a personal spreadsheet of tools worth trying, and grew into a directory built to save other creators the hours it took to sort the useful tools from the noise.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3.5">Why this exists</h2>
            <p className="text-muted leading-relaxed">
              New AI tools launch every week promising to save time, and most of them make similar claims in similar language. Sorting through them is its own full-time job — one most creators and small business owners don't have hours to spare for. AI Creator Hub exists to do that sorting once, properly, so you don't have to do it yourself for every tool that shows up in your feed.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3.5">How tools get listed</h2>
            <p className="text-muted leading-relaxed mb-4">
              Every tool on this site is used hands-on before it's added — not judged from a landing page or a press release. That means testing the free tier where one exists, checking how the tool performs on a real task, and being upfront about where it falls short.
            </p>
            <p className="text-muted leading-relaxed">
              Tools are re-checked periodically, and anything that stops meeting the bar — a feature removed, a price hike with no added value, a quality drop — is updated or removed rather than left listed out of convenience.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3.5">How this site makes money</h2>
            <p className="text-muted leading-relaxed">
              Some listings use affiliate links, meaning a small commission may be earned if you subscribe through them — at no extra cost to you. That relationship never determines rankings or reviews; a tool's placement reflects how well it actually performs, not who pays the most.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold mb-10 text-center">What guides every review</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              [ShieldCheck, "Hand-tested", "Used on a real task before it earns a spot."],
              [Award, "Unbiased", "Ranked on output quality and pricing, not payouts."],
              [RefreshCcw, "Current", "Re-checked and updated on a regular schedule."],
              [Users, "Creator-first", "Picked with a solo creator's time and budget in mind."],
            ].map(([Icon, title, desc]) => (
              <div key={title} className="bg-white/[0.03] border border-line-dark rounded-md p-6">
                <div className="w-10 h-10 rounded-xl bg-blue/15 text-blue-glow flex items-center justify-center mb-4">
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-[15px] mb-2">{title}</h3>
                <p className="text-[13px] text-muted-dark leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
