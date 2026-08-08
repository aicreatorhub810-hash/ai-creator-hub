import ArticleCard from "@/components/ArticleCard";
import { getLatestArticles } from "@/lib/data";

export const metadata = {
  title: "Articles",
  description: "Guides, comparisons and honest reviews to help you pick the right AI tool.",
};

export default function ArticlesPage() {
  const allArticles = getLatestArticles(999);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <span className="font-mono text-blue text-xs font-semibold block mb-3.5">THE BLOG</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3.5">All articles</h1>
          <p className="text-muted text-base leading-relaxed">
            Guides and comparisons to help you pick the right tool the first time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
