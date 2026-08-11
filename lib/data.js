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
    slug: "opusclip",
    name: "OpusClip",
    tagline: "Turn long videos into short-form clips.",
    description:
      "OpusClip uses AI to turn long videos into short clips, with AI clipping, captions, reframing and B-roll tools.",
    longDescription:
      "OpusClip is designed for creators who want to repurpose long-form videos into short-form content for social platforms.",
    category: "ai-video-tools",
    badge: "Popular",
    pricing: "Free plan · Paid plans available",
    rating: null,
    featured: true,
    website: "https://www.opus.pro/",
    features: [
      "AI video clipping",
      "AI captioning",
      "AI reframing",
      "AI B-roll",
      "AI voice-over"
    ],
    pros: [
      "Strong long-form to short-form workflow",
      "Useful automatic captions",
      "Supports multiple social formats"
    ],
    cons: [
      "Advanced features require paid plans"
    ]
  },
  {
    slug: "runway",
    name: "Runway",
    tagline: "Generate and edit video with AI.",
    description:
      "Runway provides AI video generation and editing tools for creating, extending and transforming video.",
    longDescription:
      "Runway combines generative video models with AI editing tools. Creators can start from text, images or existing video and refine the result with AI-powered editing.",
    category: "ai-video-tools",
    badge: "Featured",
    pricing: "Free plan · Paid plans available",
    rating: null,
    featured: true,
    website: "https://runwayml.com/",
    features: [
      "Text-to-video",
      "Image-to-video",
      "Video-to-video",
      "AI video editing",
      "Object and backdrop editing"
    ],
    pros: [
      "Powerful generative video workflow",
      "Generation and editing in one platform",
      "Useful for professional creative work"
    ],
    cons: [
      "Advanced generation can consume credits quickly"
    ]
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo.Ai",
    tagline: "Create and refine images with AI.",
    description:
      "Leonardo.Ai provides AI image generation, editing, upscaling and image-to-video tools for creators and designers.",
    longDescription:
      "Leonardo.Ai is a creative platform for generating and editing visual content. It supports text-to-image, image-to-image, image-to-video, background removal, editing and upscaling.",
    category: "ai-image-tools",
    badge: "Popular",
    pricing: "Free plan · Paid plans available",
    rating: null,
    featured: true,
    website: "https://leonardo.ai/",
    features: [
      "Text-to-image",
      "Image-to-image",
      "Image-to-video",
      "AI image editing",
      "Background removal",
      "Upscaling"
    ],
    pros: [
      "Wide range of creative tools",
      "Strong image consistency features",
      "Useful for creators and designers"
    ],
    cons: [
      "Some advanced features require paid access"
    ]
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    tagline: "Create AI images with strong typography.",
    description:
      "Ideogram is an AI image generation platform focused on visual design, typography and creative image workflows.",
    longDescription:
      "Ideogram is especially useful for posters, social graphics, logos, merchandise and other designs where accurate text inside images matters.",
    category: "ai-image-tools",
    badge: "Popular",
    pricing: "Free plan · Paid plans available",
    rating: null,
    featured: true,
    website: "https://ideogram.ai/",
    features: [
      "AI image generation",
      "Strong typography generation",
      "Poster and social graphic creation",
      "Editable text layers",
      "Image remixing"
    ],
    pros: [
      "Excellent for text-heavy designs",
      "Useful for logos and merchandise",
      "Editable text-layer workflow"
    ],
    cons: [
      "Some advanced features require paid access"
    ]
  },
  {
    slug: "jasper",
    name: "Jasper",
    tagline: "AI platform built for marketing teams.",
    description:
      "Jasper helps marketing teams create, optimize and manage content and AI-powered marketing workflows.",
    longDescription:
      "Jasper is focused on marketing rather than general-purpose chat. Its platform combines AI agents, content pipelines, brand context and marketing workflows.",
    category: "ai-writing-tools",
    badge: "Marketing",
    pricing: "Paid plans · Free trial available",
    rating: null,
    featured: true,
    website: "https://www.jasper.ai/",
    features: [
      "AI marketing agents",
      "Content generation",
      "Content pipelines",
      "Brand context",
      "Marketing workflows"
    ],
    pros: [
      "Built specifically for marketing",
      "Strong brand-control features",
      "Useful for teams and agencies"
    ],
    cons: [
      "More focused on professional marketing teams"
    ]
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "AI-powered workflows for go-to-market teams.",
    description:
      "Copy.ai provides AI-powered workflows for sales, marketing and customer-success processes.",
    longDescription:
      "Copy.ai focuses on go-to-market workflows, helping teams automate repetitive processes across sales, marketing and customer success.",
    category: "ai-writing-tools",
    badge: "GTM",
    pricing: "Paid plans available",
    rating: null,
    featured: false,
    website: "https://www.copy.ai/",
    features: [
      "AI workflows",
      "Sales automation",
      "Marketing automation",
      "Customer-success workflows",
      "Multi-step process automation"
    ],
    pros: [
      "Useful for repetitive business workflows",
      "Focused on go-to-market operations",
      "Supports multi-step automation"
    ],
    cons: [
      "Best suited to business workflows rather than casual writing"
    ]
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    tagline: "AI inside your connected workspace.",
    description:
      "Notion AI brings AI search, writing, research, meeting notes and agents into the Notion workspace.",
    longDescription:
      "Notion combines documents, databases, projects and AI capabilities in one workspace. Notion AI can help with writing, research, meeting notes and knowledge retrieval.",
    category: "ai-productivity",
    badge: "Popular",
    pricing: "Free plan · Paid plans available",
    rating: null,
    featured: true,
    website: "https://www.notion.com/",
    features: [
      "AI writing",
      "AI search",
      "Notion Agent",
      "AI Meeting Notes",
      "Research Mode"
    ],
    pros: [
      "Combines productivity and AI in one workspace",
      "Useful for organizing projects and knowledge",
      "Strong collaboration features"
    ],
    cons: [
      "Full AI capabilities vary by plan"
    ]
  },
  {
    slug: "heygen",
    name: "HeyGen",
    tagline: "Create AI videos with avatars and voices.",
    description:
      "HeyGen is an AI video creation platform for generating videos with avatars, voices and multilingual content.",
    longDescription:
      "HeyGen lets creators and businesses create videos from scripts using AI avatars and voice technology, with support for multilingual video production.",
    category: "ai-video-tools",
    badge: "Trending",
    pricing: "Free plan · Paid plans available",
    rating: null,
    featured: false,
    website: "https://www.heygen.com/",
    features: [
      "AI avatars",
      "AI voice generation",
      "Script-to-video",
      "Multilingual video",
      "Video translation"
    ],
    pros: [
      "Useful for faceless video creation",
      "Large language and avatar support",
      "Good for business and educational videos"
    ],
    cons: [
      "Premium features require paid plans"
    ]
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    tagline: "CRM and AI tools for growing businesses.",
    description:
      "HubSpot combines CRM, marketing, sales and customer-service tools with its Breeze AI platform.",
    longDescription:
      "HubSpot provides a connected customer platform with CRM, marketing, sales and service tools. Its Breeze AI features help with content, customer work, research and automation.",
    category: "ai-business",
    badge: "Business",
    pricing: "Free tools · Paid plans available",
    rating: null,
    featured: true,
    website: "https://www.hubspot.com/",
    features: [
      "Smart CRM",
      "Breeze AI",
      "AI assistants",
      "AI agents",
      "Marketing automation",
      "Sales tools"
    ],
    pros: [
      "Strong business ecosystem",
      "Free tools are available",
      "AI is integrated with CRM workflows"
    ],
    cons: [
      "Advanced business features can become expensive"
    ]
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "AI assistant for writing, research and everyday tasks.",
    description:
      "ChatGPT is a general-purpose AI assistant for writing, brainstorming, learning, planning, coding and many other tasks.",
    longDescription:
      "ChatGPT is a conversational AI assistant that can help with writing, brainstorming, studying, planning, coding, analysis and other everyday tasks.",
    category: "ai-writing-tools",
    badge: "Popular",
    pricing: "Free plan · Paid plans available",
    rating: null,
    featured: false,
    website: "https://chatgpt.com/",
    features: [
      "AI writing",
      "Brainstorming",
      "Research assistance",
      "Coding help",
      "File and image analysis"
    ],
    pros: [
      "Very broad range of use cases",
      "Easy to get started",
      "Available on web and mobile"
    ],
    cons: [
      "Some advanced capabilities depend on plan and usage limits"
    ]
  }
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
