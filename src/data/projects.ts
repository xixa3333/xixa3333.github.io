import type { ImageMetadata } from "astro";
import aestheticCameraCover from "../assets/project-covers/aesthetic-camera.png";
import aicupCover from "../assets/project-covers/aicup.png";
import calculatorCover from "../assets/project-covers/calculator.png";
import calligraphyCover from "../assets/project-covers/calligraphy-ai.png";
import cloudLockCover from "../assets/project-covers/cloud-lock.jpg";
import congestionCover from "../assets/project-covers/congestion-analysis.png";
import dragonQuestCover from "../assets/project-covers/dragon-quest.png";
import foodLotteryCover from "../assets/project-covers/food-lottery.png";
import gpaCover from "../assets/project-covers/gpa-website.png";
import imageCompressorCover from "../assets/project-covers/image-compressor.png";
import kaggleCover from "../assets/project-covers/kaggle-vesuvius.png";
import mazeCover from "../assets/project-covers/maze.png";
import minesweeperCover from "../assets/project-covers/minesweeper.png";
import nutritionCover from "../assets/project-covers/nutrition-app.png";
import opencvCover from "../assets/project-covers/opencv-processing.png";
import publicIotCover from "../assets/project-covers/public-iot-ml.png";
import scoreMonitorCover from "../assets/project-covers/score-monitor.png";
import teachingAdviceCover from "../assets/project-covers/teaching-advice.png";
import tetrisCover from "../assets/project-covers/tetris-2048.png";

export type Project = {
  name: string;
  description: string;
  tech: string[];
  url: string;
  category: ProjectCategory;
  /** Cover image above the block — an imported asset or an https URL. */
  img?: ImageMetadata | string;
};

export const PROJECT_CATEGORIES = [
  "代表性競賽與 AI",
  "電腦視覺與智慧系統",
  "網頁與實用工具",
  "遊戲與程式練習",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type PrivateProject = {
  name: string;
  description: string;
  tech: string[];
};

// These experiences cannot expose source code, internal data, screenshots,
// client details, or implementation documents. Keep them as high-level
// capability summaries only.
export const PRIVATE_PROJECTS: PrivateProject[] = [
  {
    name: "智慧製造大數據分析競賽",
    description: "從大量製造資料中找出影響生產結果的關鍵線索，建立可協助判斷異常的預測方法，並獲得競賽 Project B 銀獎。",
    tech: ["Data Analysis", "Machine Learning", "Manufacturing"],
  },
  {
    name: "書籍文件轉文字系統",
    description: "讓掃描書籍不必逐頁人工整理：系統會判斷頁面方向與閱讀順序，再將不同版面的書頁轉成可使用的文字。",
    tech: ["OCR", "Computer Vision", "Document AI"],
  },
  {
    name: "設備保養預測概念驗證",
    description: "協助使用者提早掌握設備風險，將預測結果分級並串接通知與工單流程，讓保養安排更有依據。",
    tech: ["Machine Learning", "Flask", "Automation"],
  },
  {
    name: "OCR 輸出品質判斷",
    description: "自動檢查文字辨識結果是否通順合理，幫助使用者快速找出需要重新處理的文件，減少逐筆人工檢查。",
    tech: ["LLM", "OCR", "API"],
  },
  {
    name: "手寫辨識流程維護",
    description: "改善掃描雜訊造成的錯誤框選，讓手寫文字辨識流程在遇到品質不佳的稿紙時仍能穩定運作。",
    tech: ["Image Processing", "Debugging", "OCR"],
  },
  {
    name: "正體中文潦草字辨識研究",
    description: "希望讓電腦也能讀懂難以辨認的正體中文潦草字，特別處理外形相近、僅靠單一字形容易混淆的情況。",
    tech: ["Deep Learning", "Handwriting Recognition", "Research"],
  },
];

// Only projects with public work, repositories, or write-ups are listed here.
export const PROJECTS: Project[] = [
  { name: "Kaggle Vesuvius Challenge｜第 9／1,391 名", description: "從古羅馬卷軸的 3D 掃描中找出薄如紙張的表面，協助研究人員在不拆開脆弱卷軸的情況下進一步讀取內容，最終獲得競賽金牌。", tech: ["Python", "nnU-Net", "3D Segmentation", "Post-processing"], url: "https://www.kaggle.com/competitions/vesuvius-challenge-surface-detection/writeups/9th-place-solution", category: "代表性競賽與 AI", img: kaggleCover },
  { name: "AI CUP 2025 玉山人工智慧公開挑戰賽｜第三名", description: "從金融交易紀錄中找出可能需要注意的警示帳戶，協助降低人工逐筆檢查的負擔，並在公開挑戰賽中獲得第三名。", tech: ["Python", "Machine Learning", "Financial AI"], url: "https://github.com/AyoGG123/AICUP_2025_YUSHAN_8025", category: "代表性競賽與 AI", img: aicupCover },
  { name: "好棒棒攝影師", description: "拍照時直接在手機畫面看到即時美感分數，幫助使用者調整構圖並抓住適合按下快門的時機；所有分析都在裝置上完成，不必上傳照片。", tech: ["Flutter", "PyTorch", "MobileNetV3", "TFLite"], url: "https://github.com/xixa3333/aesthetic_rating_camera", category: "代表性競賽與 AI", img: aestheticCameraCover },
  { name: "書法家與書體辨識", description: "在手寫板寫下一個中文字，或上傳已裁切的書法圖片，系統便會同時推測書法家與書體，讓使用者快速探索作品風格。", tech: ["PyTorch", "Multi-task Learning", "Flask", "Docker"], url: "https://github.com/xixa3333/Calligraphy-AI", category: "代表性競賽與 AI", img: calligraphyCover },
  { name: "雲端智能防盜門鎖系統", description: "提供 RFID、人臉辨識與雲端控制等開門方式；遇到未授權進入時會立即警示、拍下現場影像並通知屋主。", tech: ["LinkIt 7697", "IoT", "Face Recognition", "Cloud"], url: "https://github.com/xixa3333/Cloud-intelligent-anti-theft-door-lock-system", category: "電腦視覺與智慧系統", img: cloudLockCover },
  { name: "公共物聯網機器學習分析", description: "自動閱讀災情通報中的地點與文字描述，協助將大量通報快速分到正確類別，讓後續整理與應變更有效率。", tech: ["Python", "MLP", "Random Forest", "EMIS"], url: "https://github.com/xixa3333/Applying-Machine-Learning-to-Public-Internet-of-Things", category: "電腦視覺與智慧系統", img: publicIotCover },
  { name: "通用影像壓縮器", description: "使用者可以依需求選擇「照片高壓縮率」、「影像完整還原」或「一般檔案無損壓縮」，在檔案大小與畫質之間取得合適平衡。", tech: ["C", "DCT / DPCM", "LZ77", "Huffman"], url: "https://github.com/xixa3333/Universal-Image-Compressor", category: "電腦視覺與智慧系統", img: imageCompressorCover },
  { name: "高速公路壅塞分析", description: "透過互動式頁面比較不同年度、平日與週末的高速公路車流，依路段篩選並下載結果，快速找出長期交通量較高的區域。", tech: ["R", "Shiny", "Data Validation", "Visualization"], url: "https://github.com/xixa3333/congestion-analysis", category: "電腦視覺與智慧系統", img: congestionCover },
  { name: "OpenCV 多步驟影像處理", description: "將圖片自動去除背景、調整大小並放到指定的新背景中，同時展示每個處理階段，方便理解影像如何一步步完成轉換。", tech: ["Python", "OpenCV", "NumPy"], url: "https://github.com/xixa3333/P-Chart", category: "電腦視覺與智慧系統", img: opencvCover },
  { name: "飲食營養管理系統", description: "記錄每天吃了什麼後，系統會計算距離熱量與營養目標還差多少，並依飲食偏好、過敏原和當日缺口推薦下一餐。", tech: ["TypeScript", "Cloudflare D1", "Python ETL", "GitHub Actions"], url: "https://github.com/xixa3333/nutrition-app", category: "網頁與實用工具", img: nutritionCover },
  { name: "GPA 網站", description: "集中記錄每學期的課程、分數與學分，自動換算不同制度的 GPA，並用趨勢圖和圓餅圖掌握成績變化及畢業學分進度。", tech: ["React", "TypeScript", "Cloudflare D1", "Drizzle"], url: "https://github.com/xixa3333/GPA-website", category: "網頁與實用工具", img: gpaCover },
  { name: "成績監控小幫手", description: "不用反覆登入校務系統查看成績；程式會持續監控頁面，在老師公布或更新分數時立即寄送 Email 通知。", tech: ["Python", "Browser Automation", "Email Notification"], url: "https://github.com/xixa3333/Score_Monitor_Release", category: "網頁與實用工具", img: scoreMonitorCover },
  { name: "食物抽籤", description: "不知道今天吃什麼時，可以依所在地點、想吃的類型、評分、距離、價位與營業狀態篩選附近餐廳，再交給網站隨機決定。", tech: ["HTML", "CSS", "JavaScript", "Google Places"], url: "https://github.com/xixa3333/Food_Lottery", category: "網頁與實用工具", img: foodLotteryCover },
  { name: "自動填寫教學意見", description: "登入後自動找出尚未完成的教學評量，批次選擇預設答案並處理所有科目，減少期末重複點選的時間。", tech: ["Python", "Browser Automation", "Windows"], url: "https://github.com/xixa3333/Teaching_advice", category: "網頁與實用工具", img: teachingAdviceCover },
  { name: "計算機", description: "除了日常四則運算，也能直接計算指數、對數、三角函數、百分比與階乘，並支援鍵盤輸入及角度單位轉換。", tech: ["C#", "Windows Forms", "Desktop"], url: "https://github.com/xixa3333/calculator", category: "網頁與實用工具", img: calculatorCover },
  { name: "俄羅斯方塊 2048", description: "滑動、旋轉並保留彩色方塊，讓同色方塊連在一起消除得分；可挑戰兩種模式、全球排行榜，或和朋友使用相同種子公平競賽。", tech: ["Lua", "Solar2D", "Cross-platform", "Game Testing"], url: "https://github.com/xixa3333/Tetris2048", category: "遊戲與程式練習", img: tetrisCover },
  { name: "勇者鬥惡龍", description: "在文字冒險中替勇者命名、逐關挑戰惡龍，透過升級能力及運用破甲、治癒、淬毒等技能，最後迎戰最強 BOSS。", tech: ["C++", "Turn-based Combat", "CLI Game"], url: "https://github.com/xixa3333/Dragon-Quest", category: "遊戲與程式練習", img: dragonQuestCover },
  { name: "迷宮遊戲", description: "每次遊玩都會產生不同迷宮；玩家可以調整難度與地圖大小，切換第三視角，必要時還能使用槌子破壞擋路的障礙物。", tech: ["Python", "Tkinter", "Procedural Generation"], url: "https://github.com/xixa3333/maze", category: "遊戲與程式練習", img: mazeCover },
  { name: "踩地雷", description: "提供簡單、普通與困難三種模式，支援首次點擊避雷、插旗、空白區域自動展開與計時，下載後不需安裝 Python 即可遊玩。", tech: ["Python", "Tkinter", "PyInstaller"], url: "https://github.com/xixa3333/Step_Mine", category: "遊戲與程式練習", img: minesweeperCover },
];
