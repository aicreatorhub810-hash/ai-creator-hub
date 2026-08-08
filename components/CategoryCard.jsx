import Link from "next/link";
import { iconMap } from "@/lib/icons";
import { getCategoryToolCount } from "@/lib/data";

export default function CategoryCard({ category }) {
  const Icon = iconMap[category.icon];
  const count = getCategoryToolCount(category.slug);

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block bg-white border border-line rounded-md p-7 text-left transition-all hover:-translate-y-1 hover:border-blue hover:shadow-[0_20px_40px_-18px_rgba(47,111,251,0.35)]"
    >
      <div className="w-11 h-11 rounded-xl bg-[#eaf0ff] text-blue flex items-center justify-center mb-5 transition-colors group-hover:bg-blue group-hover:text-white">
        {Icon && <Icon size={22} strokeWidth={1.8} />}
      </div>
      <h3 className="font-display font-bold text-base mb-2">{category.name}</h3>
      <p className="text-[13px] text-muted leading-relaxed mb-4">{category.description}</p>
      <span className="text-xs text-blue font-semibold">{count} tools</span>
    </Link>
  );
}
