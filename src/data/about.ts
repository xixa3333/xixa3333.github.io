import type { ImageMetadata } from "astro";
import type {
  Section,
  TimelineEntry,
  HighlightEntry,
  CardEntry,
} from "@/data/sections";
import googleCloudCertificate from "../assets/evidence/google-cloud-certificate.png";
import deepLearningCertificate from "../assets/evidence/deep-learning-course.jpg";
import kaggleGold from "../assets/evidence/kaggle-gold.png";
import aicupThird from "../assets/evidence/aicup-third.jpg";
import imbdSilver from "../assets/evidence/imbd-silver.jpg";

export type Experience = {
  period: string;
  title: string;
  /** Focus areas, rendered in a tinted note block separated by rules. */
  duties: { name: string; text: string }[];
};

export type Education = {
  period: string;
  school: string;
  degree: string;
  /** Thesis title, for degrees that have one. */
  thesis?: string;
  /** What the thesis did, in a paragraph. */
  description?: string;
};

/** A dated public achievement: awards, talks, community work. */
export type Highlight = {
  date: string;
  title: string;
  detail?: string;
  /** An extra line, e.g. a project's one-line pitch. */
  note?: string;
};

// Photo: Baruk Granda, https://unsplash.com/photos/OHLRskxOpjI (Unsplash
// License — free to use, modify, and redistribute; see
// https://unsplash.com/license). On-stage silhouette, no visible face —
// the musician identity, so it also fronts blog posts (BlogPost.astro).
import avatarWork from "../assets/profile.jpg";
/** Work-face avatar (the Life face keeps data/life.ts's AVATAR). */
export const AVATAR_WORK = avatarWork;

/** A released work — repurposed from a certification-style card. */
export type Discography = {
  name: string;
  issuer: string;
  year: string;
  /** Imported cover art or a full https:// URL; omit for a placeholder. */
  img?: ImageMetadata | string;
};

// Dates read `YYYY.MM`, kept short: the timeline renders them in a
// nowrap column, and a wider one squeezes the entry beside it.

export const PROFILE = {
  name: "王凱弘",
  headline: "資訊工程・電腦視覺・機器學習",
  bio: [
    "就讀國立高雄科技大學資訊工程學系，歷年成績 92.23、系排名第 3。研究興趣涵蓋電腦視覺、影像處理、深度學習、機器學習與自然語言處理。",
    "我重視從資料、模型驗證到系統部署的完整流程，曾參與競賽、產學、實習與研究工作，也透過教學與工作坊將技術整理成可理解、可操作的內容。",
  ],
};

// Placeholder career history — obviously-fake demo content. Replace every
// value below with your own history; the shapes are what Section.astro
// expects.
export const EXPERIENCE: Experience[] = [
  {
    period: "2026.07 – 2027.06",
    title: "國立臺灣師範大學心測中心 · 實習工程師",
    duties: [
      {
        name: "書籍文件轉文字系統",
        text: "訓練書寫方向分類與書頁影像偵測模型，處理直橫排、雙頁、雙欄與圖片，完成 83 份 PDF 依正確閱讀順序輸出。",
      },
      {
        name: "模型驗證",
        text: "方向分類五折平均準確率 99.72%；書頁影像偵測獨立測試集 mAP50-95 為 0.9322。",
      },
    ],
  },
  {
    period: "2026.07 – 2027.02",
    title: "國科會大專學生研究計畫 · 計畫執行人",
    duties: [
      {
        name: "正體中文手寫潦草字辨識",
        text: "分析有效稿紙並聚焦形近潦草字，建立合成資料與 FCN 骨架擷取基線，持續比較骨架、圖結構與上下文方法。",
      },
    ],
  },
  {
    period: "2025.09 – 2026.06",
    title: "國立高雄科技大學 · 實驗室產學工程師",
    duties: [
      { name: "OCR 品質判斷", text: "以大型語言模型判斷 OCR 無語意輸出，封裝 Flask API；兩組資料平均準確率為 99.19% 與 98.60%。" },
      { name: "手寫辨識流程維護", text: "定位掃描雜訊誤框原因，修正 33 張異常稿紙，且不影響原正常樣本。" },
    ],
  },
  {
    period: "2025.07 – 2025.08",
    title: "台灣松下資訊系統 · 暑期實習生",
    duties: [
      { name: "真空泵浦保養預測 PoC", text: "建立三階風險分類模型並串接 Flask API、排程、通知與工單；時間切分測試集危險狀態召回率 0.9061。" },
    ],
  },
  {
    period: "2024.07 – 2026.07",
    title: "資訊工程系系學會 · 會長",
    duties: [
      { name: "領導與活動規劃", text: "連任兩學年，帶領 8 人團隊籌辦 AI 變革者黑客松等活動，並培訓 7 名接任幹部。" },
    ],
  },
];

// Newest first, matching the timeline above.
export const EDUCATION: Education[] = [
  {
    period: "2023.09 – 至今",
    school: "國立高雄科技大學",
    degree: "資訊工程學系 · 歷年成績 92.23 · 系排名第 3",
  },
];

// Placeholder skill tags — swap in your own.
export const SKILLS: string[] = [
  "Python", "C++", "C", "C#", "Java", "R", "Lua", "Git",
  "PyTorch", "深度學習", "機器學習", "電腦視覺", "影像處理",
  "OpenCV", "自然語言處理", "Flask", "Flutter", "MySQL", "Arduino",
];

// Career highlights, newest first.
export const HIGHLIGHTS: Highlight[] = [
  {
    date: "2026.02",
    title: "Kaggle Vesuvius Surface Detection",
    detail: "金牌 · 第 9／1,391 名",
    note: "分析三維紙層斷裂與沾黏，參與後處理設計與拓撲指標驗證。",
  },
  {
    date: "2025.12",
    title: "教育部 AI CUP 玉山人工智慧公開挑戰賽",
    detail: "第 3／790 名",
    note: "建立圖特徵並參與 GATv2 版本比較、調校與驗證。",
  },
  {
    date: "2025.11",
    title: "全國智慧製造大數據分析競賽",
    detail: "Project B 銀獎",
    note: "參與熱變位延遲特徵、訊號篩選、SVC 與巢狀交叉驗證。",
  },
  { date: "2025", title: "Panasonic 獎學金", detail: "連續兩年，合計 450,000 日圓" },
  { date: "2023.11", title: "三星 Solve for Tomorrow 決賽", detail: "佳作" },
  { date: "2023.05", title: "第 63 屆北區科展工程學科（一）", detail: "特優" },
  { date: "2022.10", title: "全國程式設計競賽", detail: "第 3 名" },
  { date: "2022.12", title: "技藝競賽電腦軟體設計職種", detail: "第 20 名" },
  { date: "2022.03", title: "跨校桌遊大賽", detail: "第 1 名" },
  { date: "2021.12", title: "大手攜小手智慧創新應用競賽", detail: "佳作" },
  { date: "2021.12", title: "校內 APP 程式競賽", detail: "佳作" },
  { date: "2021.09", title: "校內資訊技術職類競賽", detail: "第 2 名" },
];

// Cover credits (Unsplash License — free to use and modify; no third-party
// brand or face visible):
// - tide.jpg:  Mamun Srizon, https://unsplash.com/photos/pSPoLYF_AAA
// - night.jpg: Tsuyoshi Kozu, https://unsplash.com/photos/luAFESue6Ws
// - dawn.jpg:  Alan Jones, https://unsplash.com/photos/OQsxdghBKrU
export const DISCOGRAPHY: Discography[] = [
  {
    name: "Google Cloud 學程",
    issuer: "Google Cloud Skills Boost",
    year: "2024",
    img: googleCloudCertificate,
  },
  {
    name: "深度學習實作 I 基礎",
    issuer: "研習證書",
    year: "2024",
    img: deepLearningCertificate,
  },
  {
    name: "數位電子乙級",
    issuer: "技術士證照",
    year: "",
  },
  { name: "電腦硬體裝修乙級", issuer: "技術士證照", year: "" },
  { name: "電腦軟體應用丙級", issuer: "技術士證照", year: "" },
];

// --- Section-block wiring for AboutProfessional -----------------------
// Splits a "start – end" period into its parts; a bare value (no " – ",
// e.g. a project's plain year) yields `start` only.
const splitPeriod = (period: string): { start: string; end?: string } => {
  const [start, end] = period.split(" – ");
  return { start, end };
};

// Combines a Highlight's optional `detail`/`note` into the single
// `subtitle` line the generic HighlightEntry has room for.
const joinDetail = (...parts: (string | undefined)[]): string | undefined =>
  parts.filter(Boolean).join(" · ") || undefined;

const EXPERIENCE_ENTRIES: TimelineEntry[] = EXPERIENCE.map((e) => ({
  title: e.title,
  ...splitPeriod(e.period),
  duties: e.duties,
}));

const EDUCATION_ENTRIES: TimelineEntry[] = EDUCATION.map((e) => ({
  title: e.school,
  subtitle: e.degree,
  ...splitPeriod(e.period),
  duties: e.thesis
    ? [{ name: `論文：${e.thesis}`, text: e.description ?? "" }]
    : undefined,
}));

const HIGHLIGHTS_ENTRIES: HighlightEntry[] = HIGHLIGHTS.map((h) => ({
  title: h.title,
  subtitle: joinDetail(h.detail, h.note),
  date: h.date,
}));

const DISCOGRAPHY_CARDS: CardEntry[] = DISCOGRAPHY.map((d) => ({
  title: d.name,
  subtitle: `${d.issuer} · ${d.year}`,
  img: d.img ?? "",
}));

const COMPETITION_CARDS: CardEntry[] = [
  {
    title: "Kaggle Vesuvius Surface Detection",
    subtitle: "金牌 · 第 9／1,391 名",
    img: kaggleGold,
  },
  {
    title: "AI CUP 2025 玉山人工智慧公開挑戰賽",
    subtitle: "第三名",
    img: aicupThird,
  },
  {
    title: "全國智慧製造大數據分析競賽",
    subtitle: "Project B 銀獎",
    img: imbdSilver,
  },
];

// Quick-facts strip; playful values are deliberate (this is placeholder data).
const STATS_TILES: { value: string; label: string }[] = [
  { value: "92.23", label: "歷年成績" },
  { value: "3", label: "系排名" },
  { value: "第 9 名", label: "Vesuvius Surface Detection（1,391 隊）" },
];

// Fictional fan-site/label link placeholders — swap in your own.
const LINKS: { label: string; url: string; note?: string }[] = [
  {
    label: "GitHub",
    url: "https://github.com/xixa3333",
    note: "程式碼與專案",
  },
  {
    label: "個人連結",
    url: "https://bio.site/xixa3333",
    note: "聯絡與社群",
  },
  { label: "C++ 教材", url: "https://github.com/xixa3333/C-Plus-Plus-Textbook/blob/main/%E7%9B%AE%E9%8C%84.md", note: "教學文章" },
  { label: "C 語言教材", url: "https://github.com/xixa3333/C-Textbook/blob/main/%E7%9B%AE%E9%8C%84.md", note: "教學文章" },
  { label: "演算法教材", url: "https://github.com/xixa3333/algorithm/blob/main/%E7%9B%AE%E9%8C%84.md", note: "教學文章" },
  { label: "Panasonic 暑期實習心得", url: "https://www.notion.so/Panasonic-26515d48be9380e5b08af72f1b7be505?source=copy_link", note: "心得文章" },
];

export const PROFESSIONAL_SECTIONS: Section[] = [
  // Intro paragraphs come from PROFILE.bio so the identity card and this
  // section stay in sync.
  { type: "text", title: "關於", paragraphs: PROFILE.bio },
  { type: "stats", title: "數據一覽", tiles: STATS_TILES },
  { type: "timeline", title: "經歷", entries: EXPERIENCE_ENTRIES },
  { type: "timeline", title: "學歷", entries: EDUCATION_ENTRIES },
  { type: "chips", title: "技能", items: SKILLS },
  { type: "highlights", title: "亮點", entries: HIGHLIGHTS_ENTRIES },
  { type: "cards", title: "競賽成果證明", cards: COMPETITION_CARDS },
  { type: "cards", title: "證照與培訓", cards: DISCOGRAPHY_CARDS },
  { type: "links", title: "連結", links: LINKS },
];
