import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import SubmitToolForm from "./SubmitToolForm";

export const metadata = {
  title: "Submit a Tool",
  description: "Submit your AI tool for review and a chance to be listed on AI Creator Hub.",
};

const CRITERIA = [
  [CheckCircle2, "Actually useful", "Solves a real problem for creators or small businesses — not a thin wrapper on an existing API."],
  [ShieldCheck, "Hands-on tested", "We test every submission ourselves before it's listed. No pay-to-list shortcuts."],
  [Clock, "Actively maintained", "The tool is updated and supported, not an abandoned side project."],
];

export default function SubmitToolPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14">
        <div>
          <span className="font-mono text-blue text-xs font-semibold block mb-4">SUBMIT A TOOL</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get your AI tool listed
          </h1>
          <p className="text-muted leading-relaxed mb-10">
            AI Creator Hub is a hand-curated directory, not a pay-to-list marketplace. Tell us about your tool below —
            if it's a fit, we'll test it ourselves and follow up.
          </p>

          <div className="space-y-6">
            {CRITERIA.map(([Icon, title, desc]) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#eaf0ff] text-blue flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">{title}</p>
                  <p className="text-muted text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-line rounded-lg p-8">
          <SubmitToolForm />
        </div>
      </div>
    </section>
  );
}
