import Link from "next/link";
import { Sparkles, Twitter, Instagram, Youtube } from "lucide-react";
import { categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink-alt text-muted-dark pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-lg mb-4">
              <span className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-blue to-blue-deep flex items-center justify-center">
                <Sparkles size={16} className="text-white" strokeWidth={2.2} />
              </span>
              <span className="font-display">AI Creator Hub</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[280px] mb-5">
              A curated directory of AI tools for creators and businesses, reviewed hands-on and updated every week.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="X / Twitter" className="w-9 h-9 rounded-[10px] bg-white/6 flex items-center justify-center hover:bg-blue hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-[10px] bg-white/6 flex items-center justify-center hover:bg-blue hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-[10px] bg-white/6 flex items-center justify-center hover:bg-blue hover:text-white transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/categories/${c.slug}`} className="hover:text-white transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/articles" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/submit-tool" className="hover:text-white transition-colors">Submit a Tool</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line-dark pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px]">
          <span>© {new Date().getFullYear()} AI Creator Hub. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/search" className="hover:text-white transition-colors">Search</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
