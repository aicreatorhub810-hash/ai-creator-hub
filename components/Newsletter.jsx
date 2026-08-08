"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    // Wire this up to your email provider (Mailchimp, ConvertKit, Resend, etc).
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section id="newsletter" className="bg-gradient-to-r from-blue-deep to-blue py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-10">
        <div>
          <h2 className="font-display text-white text-[28px] font-bold mb-2.5 tracking-tight">
            Get the best AI tools in your inbox
          </h2>
          <p className="text-white/85 text-[15px] max-w-[420px]">
            One email a week. New tools, honest reviews, and workflows worth stealing.
          </p>
        </div>
        <div>
          {submitted ? (
            <p className="text-white font-semibold text-sm">You're subscribed — welcome aboard! 🎉</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full sm:max-w-[460px]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 px-5 py-3.5 rounded-full border border-white/30 bg-white/12 text-white placeholder:text-white/70 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-white text-blue-deep font-semibold text-[15px] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-8px_rgba(0,0,0,0.35)] transition"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="text-white/70 text-xs mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
