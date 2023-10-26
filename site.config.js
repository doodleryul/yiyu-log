const CONFIG = {
  // profile setting (required)
  profile: {
    name: "yiyu",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "machine learning engineer",
    bio: "Building a life as an AI engineer",
    email: "rimiiii.u@gmail.com",
    linkedin: "doodleryul",
    github: "doodleryul",
    instagram: "yiyu00_",
  },
  projects: [
    {
      name: `yiyu-log`,
      href: "https://github.com/doodleryul/yiyu-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "이유있는 이유로그",
    description: "welcome to yiyu-log!",
  },

  // CONFIG configration (required)
  link: "https://yiyu-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["블로그", "개발자", "노션", "회고", "독서", "AI"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "doodleryul/giscus-comments",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
