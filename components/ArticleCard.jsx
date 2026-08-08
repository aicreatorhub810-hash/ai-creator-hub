import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function ArticleCard({ article }) {
  const category = categories.find((c) => c.slug === article.category);
  const date = new Date(article.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block rounded-lg overflow-hidden border border-line transition-all hover:-translate-y-1.5 hover:shadow-soft"
    >
      <div className="h-[170px] bg-gradient-to-br from-ink-alt to-blue-deep flex items-end p-5">
        <span className="text-[11px] font-semibold text-white bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {category?.name}
        </span>
      </div>
      <div className="p-6">
        <div className="flex gap-3.5 text-[12.5px] text-muted mb-3">
          <span>{date}</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-display font-bold text-[18px] leading-snug mb-2.5">{article.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{article.excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-blue">
          Read Article
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
