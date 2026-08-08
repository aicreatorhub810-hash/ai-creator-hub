"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", topic: "General question", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form backend (Formspree, Resend, an API route, etc).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line rounded-lg p-8 text-center">
        <h3 className="font-display font-bold text-xl mb-2">Message sent</h3>
        <p className="text-muted text-sm">Thanks for reaching out — expect a reply within 2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="topic">Topic</label>
        <select
          id="topic"
          value={form.topic}
          onChange={update("topic")}
          className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue bg-white"
        >
          <option>General question</option>
          <option>Submit a tool</option>
          <option>Partnership / advertising</option>
          <option>Report an issue</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue resize-none"
        />
      </div>

      <button
        type="submit"
        className="px-8 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-br from-blue to-blue-deep hover:-translate-y-0.5 transition"
      >
        Send Message
      </button>
    </form>
  );
}
