import type { UIStrings } from "@/locales/en";
import type { IconName } from "@/components/icons";

/**
 * astro-flipside — site configuration.
 * This file + src/data/* + src/content/blog/ are the only places a user
 * must edit. Keys marked (locale) take a key defined in src/locales/*.
 */
const SITE = {
  /** Deployment origin, no trailing slash — drives canonical/OG/sitemap URLs.
   *  This is the GitHub Pages origin (paired with `base` below); on Vercel it
   *  is overridden automatically with your Vercel URL (see astro.config.mjs). */
  site: "https://xixa3333.github.io",
  /** Sub-path when deployed as a GitHub project page, e.g. "/astro-flipside". "" for root. */
  base: "",
  title: "王凱弘",
  description:
    "國立高雄科技大學資訊工程系學生，專注於人工智慧、電腦視覺、軟體開發與教學。",
  author: "王凱弘",
  /** UI language for every built-in string: "en" | "zh-TW". */
  locale: "zh-TW" as "en" | "zh-TW",
  /** Navigation. label is a locale key (see src/locales/). */
  nav: [
    { label: "nav.home", href: "/" },
    { label: "nav.about", href: "/about/" },
    { label: "nav.blog", href: "/articles/" },
    { label: "nav.gallery", href: "/gallery/" },
    { label: "nav.projects", href: "/projects/" },
  ] satisfies { label: keyof UIStrings; href: string }[],
  /** Life-face identity-card social buttons. `url` opens; `copy` copies text
   *  (Discord-style). `icon` is a name from src/components/Icon.astro. */
  socials: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/xixa3333",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/kaihong-wong-6a82202a3/?isSelfProfile=true",
    },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/xixa3333" },
    { name: "Threads", icon: "threads", url: "https://www.threads.com/@xixa3333" },
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/wang.kai.hong.980966" },
  ] satisfies { name: string; icon: IconName; url?: string; copy?: string }[],
  /** Work-face identity-card social buttons — same `url`/`copy` shape. */
  socialsWork: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/xixa3333",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/kaihong-wong-6a82202a3/?isSelfProfile=true",
    },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/xixa3333" },
    { name: "Threads", icon: "threads", url: "https://www.threads.com/@xixa3333" },
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/wang.kai.hong.980966" },
  ] satisfies { name: string; icon: IconName; url?: string; copy?: string }[],
  /** How many items each list surface shows — bump these to taste. */
  pageSize: {
    /** Blog list + tag pages (vertical rows since 2026-07). */
    blog: 10,
    /** Projects grid — multiples of 3 keep the 3-up rows full. */
    projects: 9,
    /** Recent items each homepage section previews (blog, projects,
     *  gallery) before its "view all" link. The gallery is a 4-up strip,
     *  so a multiple of 4 keeps its edge clean. */
    home: 4,
  },
  features: {
    /** KaTeX math ($…$ / $$…$$) in posts. */
    math: false,
    /** ```mermaid fenced diagrams in posts. */
    mermaid: false,
    /** giscus comments under posts. false, or the data-attributes from giscus.app. */
    giscus: false as
      | false
      | { repo: string; repoId: string; category: string; categoryId: string },
  },
};

export default SITE;
