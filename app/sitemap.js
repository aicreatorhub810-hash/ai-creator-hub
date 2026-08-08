import { tools, categories, articles } from "@/lib/data";

export default function sitemap() {
  const base = "https://aicreatorhub.example.com";
  const staticRoutes = [
    "",
    "/tools",
    "/categories",
    "/articles",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/affiliate-disclosure",
    "/submit-tool",
    "/search",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const toolRoutes = tools.map((t) => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/categories/${c.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticRoutes, ...toolRoutes, ...categoryRoutes, ...articleRoutes];
}
