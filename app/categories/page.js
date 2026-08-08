import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/data";

export const metadata = {
  title: "Categories",
  description: "Browse AI tools by category — video, image, writing, productivity and business.",
};

export default function CategoriesPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <span className="font-mono text-blue text-xs font-semibold block mb-3.5">CATEGORIES</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3.5">
            Browse tools by category
          </h1>
          <p className="text-muted text-base leading-relaxed">
            Five focused categories covering the tools creators and small businesses reach for most.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
