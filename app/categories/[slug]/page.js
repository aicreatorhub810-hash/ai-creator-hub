import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ToolCard from "@/components/ToolCard";
import { iconMap } from "@/lib/icons";
import { categories, getCategoryBySlug, getToolsByCategory } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.longDescription,
  };
}

export default async function CategoryDetailPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const Icon = iconMap[category.icon];
  const categoryTools = getToolsByCategory(category.slug);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/categories" className="inline-flex items-center gap-1.5 text-muted hover:text-blue text-sm mb-8 transition">
          <ArrowLeft size={15} /> All categories
        </Link>
        <div className="flex items-start gap-5 mb-12 flex-wrap">
          <div className="w-14 h-14 rounded-2xl bg-[#eaf0ff] text-blue flex items-center justify-center shrink-0">
            {Icon && <Icon size={26} strokeWidth={1.8} />}
          </div>
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">{category.name}</h1>
            <p className="text-muted text-base leading-relaxed max-w-2xl">{category.longDescription}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
