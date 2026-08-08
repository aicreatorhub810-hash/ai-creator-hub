import ToolCard from "@/components/ToolCard";
import ArticleCard from "@/components/ArticleCard";
import { searchAll } from "@/lib/data";

export const metadata = {
  title: "Search",
  description: "Search AI Creator Hub for tools and articles.",
};

export default async function SearchPage({ searchParams }) {
  const sp = (await searchParams) || {};
  const query = sp.q || "";
  const { tools: toolResults, articles: articleResults } = searchAll(query);
  const totalResults = toolResults.length + articleResults.length;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-4">
          <span className="font-mono text-blue text-xs font-semibold block mb-3.5">SEARCH</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            {query ? `Results for "${query}"` : "Search AI Creator Hub"}
          </h1>
          {query && (
            <p className="text-muted text-sm mb-10">
              {totalResults} result{totalResults !== 1 ? "s" : ""} found
            </p>
          )}
        </div>

        <form action="/search" className="flex items-center gap-3 mb-14 max-w-md">
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search tools & articles..."
            className="flex-1 border border-line rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          />
          <button className="px-5 py-3 rounded-full bg-blue text-white text-sm font-semibold shrink-0">
            Search
          </button>
        </form>

        {query && totalResults === 0 && (
          <p className="text-muted text-sm">
            No matches for "{query}". Try a broader keyword, or browse{" "}
            <a href="/tools" className="text-blue font-medium">all tools</a> instead.
          </p>
        )}

        {toolResults.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-xl font-bold mb-6">Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolResults.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        )}

        {articleResults.length > 0 && (
          <div>
            <h2 className="font-display text-xl font-bold mb-6">Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articleResults.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
