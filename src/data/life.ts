import type { IconName } from "@/components/icons";
import type { Section, CardEntry } from "@/data/sections";

// Photo: Nikolett Emmert, https://unsplash.com/photos/PR7J4fH6EGU (Unsplash
// License — free to use, modify, and redistribute; see
// https://unsplash.com/license). A cat, matching the persona's interests —
// the no-visible-face rule only binds HUMAN faces.
import avatarLife from "../assets/profile.jpg";
/** Life-face avatar (the Work face has its own, see data/about.ts). */
export const AVATAR = avatarLife;

// Casual self-intro — obviously-fake demo persona.
const INTRO = [
  "除了程式設計與研究，我也喜歡攝影、桌遊，以及把自己學到的知識整理後分享給別人。",
  "從國高中生的數學與 C++ 家教，到大學程式設計助教、Arduino 教學與研究工作坊，我持續練習用清楚的方式說明技術。",
  "我相信好的技術不只要能運作，也要能被理解、驗證與實際使用。",
];

// Interests as tags (like the Work face's Skills).
const INTERESTS = [
  "攝影",
  "程式設計",
  "人工智慧",
  "電腦視覺",
  "桌遊",
  "教學",
  "技術分享",
];

// Placeholder gear cards, mic first then monitoring and instrument.
// `href` is optional — with it the whole card links out (e.g. to a store
// page); without it the card is a plain tile.
const GEAR: { label: string; item: string; icon: IconName; href?: string }[] = [
  {
    label: "2026",
    item: "國科會大語言模型與自動化研究工作坊講師，四場次合計逾 250 人",
    icon: "briefcase",
  },
  {
    label: "2024–2025",
    item: "Arduino 家教",
    icon: "briefcase",
  },
  {
    label: "2023–2024",
    item: "數學與 C++ 家教、高名補習班助教",
    icon: "briefcase",
  },
];

const TROPHY_CARDS: CardEntry[] = [
  { title: "資訊工程系系學會會長", subtitle: "2024.07–2026.07 · 連任兩學年" },
  { title: "桌遊社社長", subtitle: "2021.09–2022.06" },
];

// Freeform catch-all — demonstrates the markdown block (list + bold text).
const MISC_BODY = `**研習與專業培訓：**

- 2024 社團負責人研習營
- Google Cloud Computing Foundations 與生成式 AI 開發者入門
- 深度學習實作 I 基礎課程
- 程式設計學助理培訓班
- 創客微學分智慧輔具課程（18 小時）
- 2022 暨南國際大學 Python 零基礎學習班（16 小時）
- 智慧能源體驗營（6 小時）`;

export const PERSONAL_SECTIONS: Section[] = [
  { type: "text", title: "關於", paragraphs: INTRO },
  { type: "chips", title: "興趣", items: INTERESTS },
  { type: "cards", title: "人生成就", cards: TROPHY_CARDS },
  {
    type: "kv",
    title: "教學經驗",
    rows: GEAR.map((g) => ({
      label: g.label,
      value: g.item,
      icon: g.icon,
      href: g.href,
    })),
  },
  { type: "markdown", title: "其他", body: MISC_BODY },
];
