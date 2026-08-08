import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { categories } from "@/lib/data";

export default function ToolCard({ tool }) {
  const category = categories.find((c) => c.slug === tool.category);

  return (
    <div className="tool-card h-full">
      <div className="relative bg-white rounded-[20px] p-7 h-full shadow-soft flex flex-col">
        <div className="flex items-start justify-between mb-5">
          <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-blue to-blue-deep flex items-center justify-center shadow-[0_8px_18px_-6px_rgba(47,111,251,0.55)]">
            <span className="text-white font-display font-bold text-lg">{tool.name.charAt(0)}</span>
          </div>
          <span className="text-[11px] font-semibold text-blue-deep bg-[#eaf0ff] px-2.5 py-1.5 rounded-full">
            {tool.badge}
          </span>
        </div>

        <h3 className="font-display font-bold text-[19px] mb-2">{tool.name}</h3>
        <p className="text-[14.5px] text-muted leading-relaxed mb-5 flex-1">{tool.tagline}</p>

        <div className="flex items-center gap-1.5 mb-5 text-sm">
          <Star size={14} className="fill-blue text-blue" />
          <span className="font-semibold">{tool.rating}</span>
          <span className="text-muted text-[13px]">· {tool.pricing}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-muted font-medium">{category?.name}</span>
          <Link
            href={`/tools/${tool.slug}`}
            className="group flex items-center gap-1.5 text-[13.5px] font-semibold text-blue"
          >
            View Details
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
