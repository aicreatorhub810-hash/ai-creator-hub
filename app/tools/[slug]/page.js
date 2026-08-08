import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Check, X, ArrowUpRight, ArrowLeft } from "lucide-react";
import ToolCard from "@/components/ToolCard";
import { tools, categories, getToolBySlug, getToolsByCategory } from "@/lib/data";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.description,
  };
}

export default async function ToolDetailPage({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = categories.find((c) => c.slug === tool.category);
  const related = getToolsByCategory(tool.category).filter((t) => t.slug !== tool.slug).slice(0, 3);

  return (
    <>
      <section className="bg-ink text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/tools" className="inline-flex items-center gap-1.5 text-muted-dark hover:text-white text-sm mb-8 transition">
            <ArrowLeft size={15} /> Back to all tools
          </Link>
          <div className="flex items-start gap-5 flex-wrap">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue to-blue-deep flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-2xl">{tool.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-[240px]">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">{tool.name}</h1>
                <span className="text-[11px] font-semibold text-blue-glow bg-blue/15 border border-blue/30 px-2.5 py-1 rounded-full">
                  {tool.badge}
                </span>
              </div>
              <p className="text-muted-dark text-lg mb-4">{tool.tagline}</p>
              <div className="flex items-center gap-5 flex-wrap text-sm">
                <span className="flex items-center gap-1.5">
                  <Star size={15} className="fill-blue-glow text-blue-glow" />
                  <b>{tool.rating}</b> / 5
                </span>
                <span className="text-muted-dark">{tool.pricing}</span>
                <Link href={`/categories/${category.slug}`} className="text-blue-glow hover:underline">
                  {category.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <div>
            <h2 className="font-display text-xl font-bold mb-4">Overview</h2>
            <p className="text-muted leading-relaxed mb-10">{tool.longDescription}</p>

            <h2 className="font-display text-xl font-bold mb-4">Key features</h2>
            <ul className="space-y-3 mb-10">
              {tool.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-muted">
                  <Check size={18} className="text-blue shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold text-base mb-3.5 text-green-700">Pros</h3>
                <ul className="space-y-2.5">
                  {tool.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check size={16} className="text-green-600 shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-base mb-3.5 text-red-700">Cons</h3>
                <ul className="space-y-2.5">
                  {tool.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-muted">
                      <X size={16} className="text-red-500 shrink-0 mt-0.5" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit border border-line rounded-lg p-6">
            <p className="text-xs text-muted font-medium mb-1">Pricing</p>
            <p className="font-display font-bold text-lg mb-5">{tool.pricing}</p>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-br from-blue to-blue-deep hover:-translate-y-0.5 transition mb-3"
            >
              Visit {tool.name} <ArrowUpRight size={16} />
            </a>
            <p className="text-[11.5px] text-muted text-center leading-relaxed">
              We may earn a commission if you subscribe — this never affects our rankings.{" "}
              <Link href="/affiliate-disclosure" className="underline hover:text-blue">
                Learn more
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold mb-8">More in {category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((t) => (
                <ToolCard key={t.slug} tool={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
