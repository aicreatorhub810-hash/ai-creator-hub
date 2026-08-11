import Link from "next/link";
import { ShieldCheck, Award, RefreshCcw, Users } from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import ToolCard from "@/components/ToolCard";
import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { categories, getFeaturedTools, getLatestArticles } from "@/lib/data";

export default function HomePage() {
  const featuredTools = getFeaturedTools();
  const latestArticles = getLatestArticles(3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white pt-24 pb-20 sm:pt-28 sm:pb-24">
        <HeroCanvas />
        <div className="relative z-10 max-w-[820px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/10 border border-blue/35 text-blue-glow text-xs font-mono mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-glow shadow-[0_0_10px_#7fb2ff]" />
            10+ AI TOOLS CURATED &amp; REVIEWED
          </div>
          <h1 className="font-display text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.1] font-bold tracking-tight mb-5">
            Discover the Best{" "}
            <span className="bg-gradient-to-r from-blue-glow to-blue bg-clip-text text-transparent">
              AI Tools
            </span>{" "}
            for Creators &amp; Businesses
          </h1>
          <p className="text-base sm:text-lg text-muted-dark max-w-[600px] mx-auto mb-10 leading-relaxed">
            Explore carefully selected AI tools to create content faster, boost productivity and grow your business.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap mb-14">
            <Link
              href="/tools"
              className="px-8 py-4 rounded-full font-semibold text-[15px] text-white bg-gradient-to-br from-blue to-blue-deep shadow-[0_12px_30px_-8px_rgba(47,111,251,0.55)] hover:-translate-y-0.5 transition"
            >
              Explore AI Tools
            </Link>
            <Link
              href="/categories"
              className="px-8 py-4 rounded-full font-semibold text-[15px] text-white bg-white/6 border border-line-dark hover:bg-white/12 hover:-translate-y-0.5 transition"
            >
              Browse Categories
            </Link>
          </div>
          <div className="flex items-center justify-center flex-wrap">
            {[
              ["10+", "Tools Reviewed"],
              ["New", "Growing Directory"],
              ["5", "Core Categories"],
              ["Weekly", "Fresh Additions"],
            ].map(([stat, label], i) => (
              <div key={label} className={`px-7 text-center ${i !== 3 ? "border-r border-line-dark" : ""}`}>
                <b className="block font-display text-2xl text-white">{stat}</b>
                <span className="text-[12.5px] text-muted-dark">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section id="tools" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-12">
            <span className="font-mono text-blue text-xs font-semibold block mb-3.5">FEATURED TOOLS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3.5">
              Editor's picks this month
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Curated tools selected for creators, businesses and practical workflows..
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-11">
            <Link
              href="/tools"
              className="inline-flex px-8 py-4 rounded-full font-semibold text-[15px] border border-line hover:border-blue hover:text-blue hover:-translate-y-0.5 transition"
            >
              View All 10+ Tools
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-12">
            <span className="font-mono text-blue text-xs font-semibold block mb-3.5">BROWSE BY CATEGORY</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3.5">
              Find tools built for your workflow
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Five focused categories covering the most useful AI workflows for creators and businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section id="articles" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-12">
            <span className="font-mono text-blue text-xs font-semibold block mb-3.5">FROM THE BLOG</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3.5">Latest articles</h2>
            <p className="text-muted text-base leading-relaxed">
              Guides and comparisons to help you pick the right tool the first time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="text-center mt-11">
            <Link
              href="/articles"
              className="inline-flex px-8 py-4 rounded-full font-semibold text-[15px] border border-line hover:border-blue hover:text-blue hover:-translate-y-0.5 transition"
            >
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section id="trust" className="py-24 bg-ink text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-12">
            <span className="font-mono text-blue-glow text-xs font-semibold block mb-3.5">WHY TRUST AI CREATOR HUB</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3.5">
              Practical AI tool recommendations
            </h2>
            <p className="text-muted-dark text-base leading-relaxed">
              No sponsored rankings, no filler lists. Recommendations focus on useful features, workflows and pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              [ShieldCheck, "Curated and researched", "Every tool is researched and described using publicly available information."],
              [Award, "Research-based recommendations", "Listings are based on publicly available information about features, pricing and use cases, with affiliate relationships disclosed."],
              [RefreshCcw, "Kept up to date", "Tools, features and pricing are updated as information changes."],
              [Users, "Creator-first picks", "Built by a solo creator, for creators — recommendations that respect your time and budget."],
            ].map(([Icon, title, desc]) => (
              <div
                key={title}
                className="bg-white/[0.03] border border-line-dark rounded-md p-7 hover:bg-white/[0.06] hover:-translate-y-1 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-blue/15 text-blue-glow flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-[16.5px] mb-2.5">{title}</h3>
                <p className="text-[13.5px] text-muted-dark leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
