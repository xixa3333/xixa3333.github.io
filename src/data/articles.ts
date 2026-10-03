export type Article = {
  title: string;
  description: string;
  tags: string[];
  source: "GitHub" | "Notion";
  url: string;
};

export const ARTICLES: Article[] = [
  {
    title: "C++ 程式設計教材",
    description: "適合想從零開始學 C++ 的讀者。依序帶你認識輸入、判斷、迴圈、陣列、函式與指標，並補充進制、補數和浮點數等容易卡關的觀念。",
    tags: ["C++", "程式設計", "教學"],
    source: "GitHub",
    url: "https://github.com/xixa3333/C-Plus-Plus-Textbook/blob/main/%E7%9B%AE%E9%8C%84.md",
  },
  {
    title: "C 語言程式設計教材",
    description: "為第一次接觸 C 語言的讀者整理完整學習順序，從基本語法一路學到函式、遞迴、指標與檔案處理，也能作為課堂複習筆記。",
    tags: ["C", "程式設計", "教學"],
    source: "GitHub",
    url: "https://github.com/xixa3333/C-Textbook/blob/main/%E7%9B%AE%E9%8C%84.md",
  },
  {
    title: "演算法教材",
    description: "已具備程式基礎、想開始練習解題的讀者，可以從排序與搜尋循序學到樹、圖、貪心、分治及動態規劃。",
    tags: ["演算法", "資料結構", "教學"],
    source: "GitHub",
    url: "https://github.com/xixa3333/algorithm/blob/main/%E7%9B%AE%E9%8C%84.md",
  },
  {
    title: "Panasonic 暑期實習心得",
    description: "如果你好奇企業 AI 實習實際在做什麼，這篇文章記錄了從獎學金、面試到專案上線的過程，也分享我如何適應職場、與現場溝通並完成成果簡報。",
    tags: ["實習", "機器學習", "職涯"],
    source: "Notion",
    url: "https://www.notion.so/Panasonic-26515d48be9380e5b08af72f1b7be505?source=copy_link",
  },
];
