"use client";

import { useState } from "react";
import { categories } from "@/lib/data";

export default function SubmitToolForm() {
  const [form, setForm] = useState({
    toolName: "",
    website: "",
    category: categories[0].slug,
    pricing: "",
    description: "",
    submitterEmail: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form backend or an API route that stores submissions
    // for review (e.g. a database table, Airtable, or an email notification).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line rounded-lg p-8 text-center">
        <h3 className="font-display font-bold text-xl mb-2">Thanks for the submission</h3>
        <p className="text-muted text-sm">
          We review every submission by hand and test the tool before it's listed. If it's a fit, you'll hear
          back within 5–7 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="toolName">Tool name</label>
          <input
            id="toolName"
            required
            value={form.toolName}
            onChange={update("toolName")}
            className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="website">Website URL</label>
          <input
            id="website"
            type="url"
            required
            placeholder="https://"
            value={form.website}
            onChange={update("website")}
            className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="category">Category</label>
          <select
            id="category"
            value={form.category}
            onChange={update("category")}
            className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue bg-white"
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="pricing">Pricing</label>
          <input
            id="pricing"
            required
            placeholder="e.g. Free plan · Paid from $19/mo"
            value={form.pricing}
            onChange={update("pricing")}
            className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="description">
          What does it do, and who is it for?
        </label>
        <textarea
          id="description"
          required
          rows={5}
          value={form.description}
          onChange={update("description")}
          className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="submitterEmail">Your email</label>
        <input
          id="submitterEmail"
          type="email"
          required
          value={form.submitterEmail}
          onChange={update("submitterEmail")}
          className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
        />
        <p className="text-xs text-muted mt-2">Used only to follow up about this submission.</p>
      </div>

      <button
        type="submit"
        className="px-8 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-br from-blue to-blue-deep hover:-translate-y-0.5 transition"
      >
        Submit Tool for Review
      </button>
    </form>
  );
}
