"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Search, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { href: "/tools", label: "Tools" },
  { href: "/categories", label: "Categories" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-line-dark">
      <div className="max-w-6xl mx-auto px-6 h-[76px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-lg shrink-0">
          <span className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-blue to-blue-deep flex items-center justify-center shadow-[0_6px_16px_-4px_rgba(47,111,251,0.7)]">
            <Sparkles size={16} className="text-white" strokeWidth={2.2} />
          </span>
          <span className="font-display">AI Creator Hub</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium text-muted-dark hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
          <Search size={16} className="absolute left-3.5 text-muted-dark pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools & articles"
            aria-label="Search tools and articles"
            className="w-56 bg-white/6 border border-line-dark rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-muted-dark focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </form>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/submit-tool"
            className="px-5 py-2.5 rounded-full text-sm font-semibold border border-line-dark text-white bg-white/6 hover:bg-white/12 transition"
          >
            Submit a Tool
          </Link>
          <Link
            href="/tools"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-br from-blue to-blue-deep shadow-[0_12px_30px_-8px_rgba(47,111,251,0.55)] hover:-translate-y-0.5 transition"
          >
            Explore Tools
          </Link>
        </div>

        <button
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line-dark bg-ink px-6 py-6 flex flex-col gap-5">
          <form onSubmit={handleSearch} className="flex items-center relative">
            <Search size={16} className="absolute left-3.5 text-muted-dark pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools & articles"
              aria-label="Search tools and articles"
              className="w-full bg-white/6 border border-line-dark rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-muted-dark focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </form>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-muted-dark hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/tools"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-white text-center bg-gradient-to-br from-blue to-blue-deep"
          >
            Explore Tools
          </Link>
        </div>
      )}
    </header>
  );
}
