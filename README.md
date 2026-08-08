# AI Creator Hub

A production-ready Next.js 15 (App Router) site for discovering AI tools — built with Tailwind CSS and lucide-react icons.

> Next.js 15 makes `params` and `searchParams` async on every page — every dynamic route in this project already
> `await`s them (see `app/tools/[slug]/page.js`, `app/categories/[slug]/page.js`, `app/articles/[slug]/page.js`,
> `app/tools/page.js`, `app/search/page.js`). Keep that pattern if you add new dynamic routes.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js              Root layout — fonts, header, footer, global metadata
  page.js                Homepage (hero, featured tools, categories, articles, trust, newsletter)
  globals.css            Tailwind + custom effects (gradient-border hover, etc.)
  sitemap.js              Auto-generated sitemap.xml
  robots.js               Auto-generated robots.txt
  not-found.js            Custom 404 page

  tools/page.js           All tools, filterable by category + search
  tools/[slug]/page.js    Individual tool detail page

  categories/page.js      All categories
  categories/[slug]/page.js  Tools within one category

  articles/page.js        Blog listing
  articles/[slug]/page.js Full article page

  about/page.js
  contact/page.js + ContactForm.jsx
  submit-tool/page.js + SubmitToolForm.jsx  Tool submission form
  privacy-policy/page.js
  terms/page.js
  affiliate-disclosure/page.js
  search/page.js           Search across tools + articles

components/
  Header.jsx      Sticky nav, search bar, mobile menu
  Footer.jsx
  HeroCanvas.jsx  Animated network-node background (respects prefers-reduced-motion)
  ToolCard.jsx
  CategoryCard.jsx
  ArticleCard.jsx
  Newsletter.jsx

lib/
  data.js   All tools, categories and article content + helper functions
  icons.js  Maps category icon names to lucide-react components
```

## Editing content

Everything on the site — tools, categories, articles — comes from `lib/data.js`. Add a new tool, category or
article by adding an object to the relevant array; new pages are generated automatically for tools, categories
and articles via `generateStaticParams`.

## Before going live

- Replace the placeholder `website` URLs in `lib/data.js` with real affiliate/tool links.
- Update `hello@aicreatorhub.example.com` and `https://aicreatorhub.example.com` throughout with your real domain and inbox.
- Wire up `components/Newsletter.jsx`, `app/contact/ContactForm.jsx` and `app/submit-tool/SubmitToolForm.jsx` to a real backend (e.g. Resend, ConvertKit, Formspree, or your own API route) — they currently just show a success state locally.
- Have a lawyer review `app/privacy-policy/page.js`, `app/terms/page.js` and `app/affiliate-disclosure/page.js` before publishing; they're solid starting templates, not legal advice.
- List the actual affiliate programs you join in `app/affiliate-disclosure/page.js`.
- Add your real domain to `metadataBase` in `app/layout.js` and to `app/sitemap.js` / `app/robots.js`.
