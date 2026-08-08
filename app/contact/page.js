import Link from "next/link";
import { Mail, MessageSquare, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with AI Creator Hub — submit a tool, ask a question, or report an issue.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14">
        <div>
          <span className="font-mono text-blue text-xs font-semibold block mb-4">CONTACT</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">Let's talk</h1>
          <p className="text-muted leading-relaxed mb-10">
            Questions about a review, a tool you'd like considered, or a partnership idea — all of it lands in the same inbox and gets a real reply.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#eaf0ff] text-blue flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Email</p>
                <p className="text-muted text-sm">hello@aicreatorhub.example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#eaf0ff] text-blue flex items-center justify-center shrink-0">
                <MessageSquare size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Submit a tool</p>
                <p className="text-muted text-sm">
                  Use the <Link href="/submit-tool" className="text-blue hover:underline">dedicated submission form</Link> for faster review.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#eaf0ff] text-blue flex items-center justify-center shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Response time</p>
                <p className="text-muted text-sm">Within 2 business days, usually sooner.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-line rounded-lg p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
