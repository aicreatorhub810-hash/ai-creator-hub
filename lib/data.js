// ---------------------------------------------------------------------------
// Central content source for AI Creator Hub.
// In production this would likely come from a CMS or database — for now it's
// a typed-by-convention JS module so every page can import the same data.
// ---------------------------------------------------------------------------

export const categories = [
  {
    slug: "ai-video-tools",
    name: "AI Video Tools",
    icon: "clapperboard",
    description: "Editing, captions, avatars and short-form generation.",
    longDescription:
      "Tools that help you go from raw footage or a script to a finished, publish-ready video — auto-editing, captioning, reframing for different platforms, and AI avatars for faceless channels.",
  },
  {
    slug: "ai-image-tools",
    name: "AI Image Tools",
    icon: "sparkles",
    description: "Art, product shots, thumbnails and design generation.",
    longDescription:
      "Generate illustrations, thumbnails, product photography and on-brand graphics from a text prompt, with style presets that keep your visuals consistent across a channel or store.",
  },
  {
    slug: "ai-writing-tools",
    name: "AI Writing Tools",
    icon: "file-text",
    description: "Scripts, blogs, ad copy and long-form assistance.",
    longDescription:
      "Drafting assistants for scripts, blog posts, product descriptions and ad copy — built to match your tone of voice rather than produce generic filler text.",
  },
  {
    slug: "ai-productivity",
    name: "AI Productivity",
    icon: "calendar-check",
    description: "Planning, automation and daily workflow assistants.",
    longDescription:
      "Planners, task assistants and automations that take the busywork of running a one-person content business off your plate, from scheduling to inbox triage.",
  },
  {
    slug: "ai-business",
    name: "AI Business",
    icon: "trending-up",
    description: "Analytics, CRM copilots and growth reporting.",
    longDescription:
      "Tools that turn raw sales, traffic and audience data into decisions — reporting copilots, lead scoring and growth dashboards built for small teams.",
  },
];

export const tools = [
  {
    slug: "clipgenius",
    name: "ClipGenius",
    tagline: "Turn raw footage into ready-to-post short clips.",
    description:
      "ClipGenius turns raw footage into ready-to-post short clips with auto captions, jump cuts and reframing for every platform.",
    longDescription:
      "ClipGenius watches a long-form recording, finds the moments most likely to hook a viewer, and cuts them into vertical, square or widescreen clips automatically. Captions are generated and styled to match trending short-form formats, and jump cuts remove dead air without flattening the pacing of the original footage.",
    category: "ai-video-tools",
    badge: "Editor's Pick",
    pricing: "Free plan · Paid from $19/mo",
    rating: 4.7,
    featured: true,
    website: "https://www.opus.pro/",
    features: [
      "Automatic highlight detection from long-form video",
      "Auto-generated, styled captions in 20+ languages",
      "One-click reframing for 9:16, 1:1 and 16:9",
      "Silence and filler-word removal",
    ],
    pros: ["Fast turnaround on long recordings", "Caption styles feel native to each platform", "Generous free tier for testing"],
    cons: ["Highlight detection needs manual review on niche topics", "Export queue can be slow at peak hours"],
  },
  {
    slug: "motionscribe",
    name: "MotionScribe",
    tagline: "AI b-roll and motion graphics from a script.",
    description:
      "MotionScribe reads your script and assembles matching b-roll, lower thirds and simple motion graphics automatically.",
    longDescription:
      "Paste in a script or voiceover transcript and MotionScribe suggests stock and AI-generated b-roll for each line, complete with lower-third templates and basic motion graphics. It's built for documentary-style and explainer channels that need visual coverage fast without a full editing pass.",
    category: "ai-video-tools",
    badge: "New",
    pricing: "Paid from $29/mo",
    rating: 4.4,
    featured: true,
    website: "https://runwayml.com/",
    features: [
      "Script-to-b-roll matching",
      "Built-in lower-third and title templates",
      "Stock and AI-generated footage in one search",
      "Timeline export to major editors",
    ],
    pros: ["Big time saver for documentary-style content", "Template library is genuinely well designed"],
    cons: ["Steeper learning curve than simple auto-editors", "No mobile app yet"],
  },
  {
    slug: "pixelcraft-ai",
    name: "Pixelcraft AI",
    tagline: "On-brand illustrations, thumbnails and product shots.",
    description:
      "Generate on-brand illustrations, thumbnails and product shots from a single prompt, with consistent style presets.",
    longDescription:
      "Pixelcraft AI lets you lock in a visual style — a character, a color palette, a rendering technique — and reuse it across every image you generate. That consistency is what makes it useful for channel branding and product catalogs, not just one-off images.",
    category: "ai-image-tools",
    badge: "Trending",
    pricing: "Free plan · Paid from $15/mo",
    rating: 4.6,
    featured: true,
    website: "https://leonardo.ai/",
    features: [
      "Saved style presets for brand consistency",
      "Batch generation for thumbnails and covers",
      "Background removal and upscaling built in",
      "Commercial usage rights on paid plans",
    ],
    pros: ["Style consistency is best-in-class", "Batch tools save real time for channel thumbnails"],
    cons: ["Free plan watermarks exports", "Occasional artifacts on hands and text"],
  },
  {
    slug: "thumbsnap-ai",
    name: "ThumbSnap AI",
    tagline: "Click-tested thumbnail generation for YouTube.",
    description:
      "ThumbSnap AI generates and A/B-scores thumbnail variations designed specifically to increase click-through rate.",
    longDescription:
      "Rather than generating generic images, ThumbSnap AI is trained specifically on thumbnail composition — bold focal points, readable text at small sizes, and expressive faces. It scores variations against a predicted click-through model before you ever publish.",
    category: "ai-image-tools",
    badge: "Popular",
    pricing: "Paid from $12/mo",
    rating: 4.3,
    featured: false,
    website: "https://ideogram.ai/",
    features: [
      "Thumbnail-specific composition presets",
      "Predicted click-through scoring",
      "Text overlay with readability checks",
      "Direct export at YouTube's recommended size",
    ],
    pros: ["Genuinely improved click-through in testing", "Very fast — under 30 seconds per batch"],
    cons: ["Only useful for thumbnail-style images", "Scoring model is a black box"],
  },
  {
    slug: "scriptforge",
    name: "ScriptForge",
    tagline: "Scripts, blogs and captions in your tone of voice.",
    description:
      "ScriptForge drafts video scripts, blog posts and captions in your tone of voice, then reworks weak lines on request.",
    longDescription:
      "ScriptForge starts by learning from a sample of your existing writing or speech, then drafts new scripts and posts that sound like you rather than a generic AI voice. You can flag any line and ask it to rewrite just that sentence, which keeps edits fast and precise.",
    category: "ai-writing-tools",
    badge: "New",
    pricing: "Free plan · Paid from $18/mo",
    rating: 4.5,
    featured: true,
    website: "https://www.jasper.ai/",
    features: [
      "Tone-of-voice matching from sample text",
      "Line-level rewrite requests",
      "Built-in hook and CTA templates",
      "Repurposes long scripts into shorts and posts",
    ],
    pros: ["Tone matching is noticeably better than generic AI writers", "Repurposing feature saves a lot of manual work"],
    cons: ["Needs a decent sample of your writing to work well", "Longer documents can lose tone consistency"],
  },
  {
    slug: "copyloop",
    name: "CopyLoop",
    tagline: "Ad copy and product descriptions at scale.",
    description:
      "CopyLoop generates and tests multiple ad copy and product description variations from a single product brief.",
    longDescription:
      "Give CopyLoop a product name, a few bullet points and a target audience, and it returns a set of ad copy and description variations ready to plug into a store or ad platform, along with a plain-language explanation of why each variation might perform differently.",
    category: "ai-writing-tools",
    badge: "Staff Favorite",
    pricing: "Paid from $22/mo",
    rating: 4.4,
    featured: false,
    website: "https://www.copy.ai/",
    features: [
      "Multiple copy variations per brief",
      "Built-in tone and length controls",
      "Direct export to major ad and store platforms",
      "Reasoning notes on each variation",
    ],
    pros: ["Great starting point for ad testing", "Export integrations save copy-pasting"],
    cons: ["Best suited to e-commerce and DTC use cases", "No free tier"],
  },
  {
    slug: "flowboard",
    name: "FlowBoard",
    tagline: "Turns a messy content calendar into daily tasks.",
    description:
      "An AI planner that turns a messy content calendar into prioritized daily tasks synced across your tools.",
    longDescription:
      "FlowBoard reads your existing calendar, task lists and notes, then rebuilds them into a single prioritized daily plan. It flags conflicts, suggests what to defer when your week gets overloaded, and keeps everything synced back to the tools you already use.",
    category: "ai-productivity",
    badge: "Popular",
    pricing: "Free plan · Paid from $9/mo",
    rating: 4.6,
    featured: true,
    website: "https://www.notion.com/product/ai",
    features: [
      "Automatic daily prioritization",
      "Two-way sync with major calendar and task apps",
      "Overload detection with suggested deferrals",
      "Weekly progress summaries",
    ],
    pros: ["Excellent for solo creators juggling multiple channels", "Sync is reliable across tools"],
    cons: ["Mobile widgets are limited on iOS", "Can feel rigid if you prefer loose planning"],
  },
  {
    slug: "taskpilot-ai",
    name: "TaskPilot AI",
    tagline: "An inbox and task assistant that drafts replies.",
    description:
      "TaskPilot AI triages your inbox, drafts replies in your tone, and turns emails into tracked tasks automatically.",
    longDescription:
      "TaskPilot AI sits on top of your inbox and separates what needs a reply today from what can wait, drafting a first-pass response for routine messages and converting anything actionable into a task with a due date.",
    category: "ai-productivity",
    badge: "Trending",
    pricing: "Paid from $14/mo",
    rating: 4.2,
    featured: false,
    website: "https://www.heygen.com/",
    features: [
      "Inbox triage by urgency",
      "Draft replies matched to your tone",
      "Automatic task creation from emails",
      "Daily digest of what needs attention",
    ],
    pros: ["Cuts inbox time significantly for busy creators", "Draft replies rarely need heavy editing"],
    cons: ["Setup takes about 20 minutes to tune correctly", "Works best with Gmail and Outlook only"],
  },
  {
    slug: "bizpilot-ai",
    name: "BizPilot AI",
    tagline: "Turns sales and traffic data into reports people read.",
    description:
      "BizPilot AI reads your sales and traffic data to flag opportunities and draft the reports your team actually reads.",
    longDescription:
      "BizPilot AI connects to your analytics and sales platforms, then writes a plain-language weekly report highlighting what changed, why it likely changed, and what to look at next — instead of a dashboard full of charts nobody has time to interpret.",
    category: "ai-business",
    badge: "Editor's Pick",
    pricing: "Paid from $35/mo",
    rating: 4.5,
    featured: true,
    website: "https://www.hubspot.com/",
    features: [
      "Plain-language weekly performance reports",
      "Anomaly and opportunity detection",
      "Connects to major analytics and store platforms",
      "Shareable summaries for teams or clients",
    ],
    pros: ["Reports are genuinely readable, not just charts", "Good for solo founders reporting to investors or partners"],
    cons: ["Pricier than most tools on this list", "Best value once you have a few months of data"],
  },
  {
    slug: "leadscope-ai",
    name: "LeadScope AI",
    tagline: "Scores and prioritizes inbound leads automatically.",
    description:
      "LeadScope AI scores inbound leads by fit and intent so you always know who to follow up with first.",
    longDescription:
      "LeadScope AI reads inbound form submissions, email replies and site behavior to score how likely a lead is to convert, then surfaces the top prospects each morning so outreach time goes to the people most likely to say yes.",
    category: "ai-business",
    badge: "New",
    pricing: "Free plan · Paid from $25/mo",
    rating: 4.1,
    featured: false,
    website: "https://www.notion.com/",
    features: [
      "Automatic lead scoring by fit and intent",
      "Daily prioritized follow-up list",
      "CRM integrations with major platforms",
      "Explainable scoring — see why a lead ranked highly",
    ],
    pros: ["Scoring explanations build trust in the system", "Solid free tier for small pipelines"],
    cons: ["Needs a steady flow of leads to calibrate well", "Reporting is more limited than dedicated CRMs"],
  },
];

export const articles = [
  {
    slug: "10-ai-video-tools-changing-content-creation",
    title: "10 AI Video Tools That Are Changing Content Creation",
    excerpt:
      "We tested the fastest-growing editors of the year and ranked them by real output quality, not marketing claims.",
    category: "ai-video-tools",
    date: "2026-08-01",
    readTime: "6 min read",
    body: [
      {
        heading: "Editing is the bottleneck, not filming",
        paragraphs: [
          "Most solo creators don't lose time filming — they lose it editing. A ten-minute video can easily take three or four hours to cut, caption and export, which is exactly the gap AI video tools have been built to close over the last year.",
          "We spent two weeks testing the tools creators mention most often, judging each one on how much real editing time it saved and how usable the output was without a manual cleanup pass.",
        ],
      },
      {
        heading: "What actually moved the needle",
        paragraphs: [
          "Automatic highlight detection was the single biggest time-saver across every tool we tested, especially for long-form-to-shorts workflows. Tools that could reliably find the three or four strongest moments in a 40-minute recording turned a multi-hour task into a 15-minute review.",
          "Captioning quality varied more than expected. Several tools produce technically accurate captions that still look out of place next to trending short-form formats — timing and styling matter as much as accuracy.",
        ],
      },
      {
        heading: "Where AI editing still falls short",
        paragraphs: [
          "None of the tools we tested handled highly technical or niche subject matter well without manual review — humor, sarcasm and subject-specific context still trip up highlight detection. Treat AI output as a strong first draft, not a final cut.",
        ],
      },
    ],
  },
  {
    slug: "creators-writing-scripts-10x-faster",
    title: "How Creators Are Writing Scripts 10x Faster With AI",
    excerpt:
      "A practical breakdown of the prompting workflow top creators use to cut scripting time without losing their voice.",
    category: "ai-writing-tools",
    date: "2026-07-27",
    readTime: "5 min read",
    body: [
      {
        heading: "The problem with generic AI drafts",
        paragraphs: [
          "Ask a general-purpose AI writer for a script and you'll get something that reads like every other AI-written script: same rhythm, same phrasing, same safe structure. The creators getting real speed gains aren't using AI to write from scratch — they're using it to extend their own voice.",
        ],
      },
      {
        heading: "The workflow that actually works",
        paragraphs: [
          "Start by feeding the tool three to five scripts or posts you've already written, so it has a real sample of your phrasing and pacing to work from. Draft in outline form first — hook, three main points, close — before asking for full sentences.",
          "The biggest speed gain comes from line-level revision rather than full-page regeneration: flag the one sentence that feels off and ask for alternatives, instead of regenerating the whole script and losing the parts that already worked.",
        ],
      },
      {
        heading: "Where to draw the line",
        paragraphs: [
          "Keep your hook and your close in your own words. These are the two moments viewers judge you on most directly, and they're also the easiest place for AI phrasing to feel noticeably off.",
        ],
      },
    ],
  },
  {
    slug: "ai-productivity-stacks-solo-creators",
    title: "AI Productivity Stacks Solo Creators Swear By",
    excerpt:
      "The exact combinations of planning, automation and writing tools that let one-person teams ship like a studio.",
    category: "ai-productivity",
    date: "2026-07-19",
    readTime: "7 min read",
    body: [
      {
        heading: "Running a one-person studio",
        paragraphs: [
          "The creators publishing consistently across multiple channels aren't working more hours than everyone else — they've simply removed the coordination overhead that eats up a normal week. That overhead is exactly what AI productivity tools are built to absorb.",
        ],
      },
      {
        heading: "A simple three-tool stack",
        paragraphs: [
          "A planner that turns your calendar into a single prioritized daily list, an inbox assistant that drafts routine replies, and a writing tool tuned to your voice cover the vast majority of daily admin work for a solo creator.",
          "The order matters: get the planner right first. An inbox assistant is only useful if you already know what today is supposed to look like.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Adding more tools than you can actually configure well is the most common mistake. Three tools set up properly beat eight tools running on default settings.",
        ],
      },
    ],
  },
  {
    slug: "free-vs-paid-ai-image-generators",
    title: "Free vs Paid AI Image Generators: What's Actually Worth It",
    excerpt:
      "We compared free tiers against paid plans across five popular image tools to see where the upgrade actually pays off.",
    category: "ai-image-tools",
    date: "2026-07-10",
    readTime: "5 min read",
    body: [
      {
        heading: "Free tiers are better than they used to be",
        paragraphs: [
          "For occasional use — a one-off graphic, a single thumbnail — most free tiers are genuinely good enough today, which wasn't true even a year ago.",
        ],
      },
      {
        heading: "Where paid plans earn their price",
        paragraphs: [
          "The upgrade pays off the moment you need consistency across many images: a channel's thumbnail style, a product catalog's look and feel. Saved style presets, batch generation and commercial usage rights are the three features worth paying for.",
          "Resolution and watermark removal matter less than most people assume — several free tiers now export at full resolution without a watermark, so check that before assuming you need to upgrade.",
        ],
      },
    ],
  },
  {
    slug: "ai-business-tools-pay-for-themselves",
    title: "5 AI Business Tools That Pay for Themselves in a Month",
    excerpt:
      "These tools cost real money, but each one has a clear, measurable path to earning back its subscription fee.",
    category: "ai-business",
    date: "2026-06-30",
    readTime: "6 min read",
    body: [
      {
        heading: "Judging ROI, not features",
        paragraphs: [
          "Business tools live or die on a simple test: does the time or revenue it saves clearly exceed what it costs? We only included tools here that passed that test in real use, not just on a features list.",
        ],
      },
      {
        heading: "Reporting and lead scoring lead the pack",
        paragraphs: [
          "Tools that turn raw analytics into a plain-language weekly report save several hours a month that would otherwise go into manually pulling numbers together — hours that are easy to price against the subscription cost.",
          "Lead scoring tools pay for themselves differently: by making sure outreach time goes to the highest-intent prospects first, which shows up directly in conversion rate within a few weeks.",
        ],
      },
    ],
  },
];

export function getFeaturedTools() {
  return tools.filter((t) => t.featured);
}

export function getToolBySlug(slug) {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(categorySlug) {
  return tools.filter((t) => t.category === categorySlug);
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryToolCount(categorySlug) {
  return tools.filter((t) => t.category === categorySlug).length;
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getLatestArticles(limit = 3) {
  return [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export function searchAll(query) {
  const q = query.trim().toLowerCase();
  if (!q) return { tools: [], articles: [] };
  return {
    tools: tools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    ),
    articles: articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
    ),
  };
}
