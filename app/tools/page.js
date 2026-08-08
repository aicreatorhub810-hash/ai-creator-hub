import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { categories, tools } from "@/lib/data";

export const metadata = {
  title: "All AI Tools",
  description: "Browse every AI tool in the AI Creator Hub directory, filterable by category.",
};

export default async function ToolsPage({ searchParams }) {
  const sp = (await searchParams) || {};
  const activeCategory = sp.category || "";
  const query = (sp.q || "").toLowerCase();

  let filtered = tools;
  if (activeCategory) {
    filtered = filtered.filter((t) => t.category === activeCategory);
  }
  if (query) {
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(query) ||
        t.tagline.toLowerCase().includes(query)
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-[640px] mb-10">
          <span className="font-mono text-blue text-xs font-semibold block mb-3.5">ALL TOOLS</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3.5">
            {tools.length} AI tools, hand-reviewed
          </h1>
          <p className="text-muted text-base leading-relaxed">
            Filter by category to find exactly the kind of tool you need.
          </p>
        </div>

        <form className="flex items-center gap-3 mb-6 max-w-md" action="/tools">
          <input
            type="search"
            name="q"
            defaultValue={sp.q || ""}
            placeholder="Search tools..."
            className="flex-1 border border-line rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          />
          {activeCategory && <input type="hidden" name="category" value={activeCategory} />}
          <button className="px-5 py-3 rounded-full bg-blue text-white text-sm font-semibold shrink-0">
            Search
          </button>
        </form>

        <div className="flex flex-wrap gap-2.5 mb-12">
          <Link
            href="/tools"
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              !activeCategory ? "bg-blue text-white border-blue" : "border-line text-muted hover:border-blue hover:text-blue"
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/tools?category=${c.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeCategory === c.slug
                  ? "bg-blue text-white border-blue"
                  : "border-line text-muted hover:border-blue hover:text-blue"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted text-sm">No tools match your search — try a different keyword or category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
