import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, categories, getArticleBySlug } from "@/lib/data";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = categories.find((c) => c.slug === article.category);
  const date = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <Link href="/articles" className="inline-flex items-center gap-1.5 text-muted hover:text-blue text-sm mb-8 transition">
          <ArrowLeft size={15} /> Back to articles
        </Link>

        <span className="text-[11px] font-semibold text-blue-deep bg-[#eaf0ff] px-2.5 py-1.5 rounded-full">
          {category?.name}
        </span>
        <h1 className="font-display text-3xl sm:text-[40px] font-bold tracking-tight mt-5 mb-4 leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted mb-10">
          <span>{date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        <div className="h-56 rounded-lg bg-gradient-to-br from-ink-alt to-blue-deep mb-10" />

        <div className="prose-content space-y-8">
          {article.body.map((block) => (
            <div key={block.heading}>
              <h2 className="font-display text-xl font-bold mb-3.5">{block.heading}</h2>
              {block.paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] text-muted leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
