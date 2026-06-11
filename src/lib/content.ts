import type {
  AudienceItem,
  CaseCard,
  FooterLink,
  KnowledgeItem,
  Material,
  PreviewCard,
  ResultItem,
} from "@/types";

export const CASES: CaseCard[] = [
  {
    name: "Smart Ecom",
    badgeLabel: "Напрямок робіт: повний комплекс у напрямку комунікацій.",
    badgeValue: "Ринки США та Польщі",
    image: "/case/1.jpg",
  },
  {
    name: "Gentle Hurricane",
    badgeLabel: "Повний комплекс у напрямку комунікацій.",
    badgeValue: "Ринок США.",
    image: "/case/2.png",
  },
  {
    name: "ELLA&EDEN",
    badgeLabel: "Напрямок робіт: повний комплекс у напрямку комунікацій.",
    badgeValue: "Ринок США",
    image: "/case/3.png",
  },
  {
    name: "WauDog",
    badgeLabel: "Повний комплекс у напрямку комунікацій.",
    badgeValue: "Ринок Польщі",
    image: "/case/4.jpg",
  },
  {
    name: "NORBA",
    badgeLabel: "Go-to-market стратегія",
    badgeValue: "для ринку США",
    image: "/case/5.jpg",
  },
  {
    name: "Mosqitter",
    badgeLabel: "Go-to-market стратегія, брейнсторм сесія",
    badgeValue: "для ринку США",
    image: "/case/6.jpg",
  },
  {
    name: "Cutluxe",
    badgeLabel: "Повний комплекс у напрямку комунікацій.",
    badgeValue: "Ринок США",
    image: "/case/7.jpg",
  },
];

export const CASES_BRANDS = [
  "WAUDOG",
  "NORBA",
  "MonoPan",
  "ELLABADEN",
  "CuBcie",
  "NUMOOV",
  "SaltWear",
  "LOKKO",
] as const;

export const KNOWLEDGE_ITEMS: KnowledgeItem[] = [
  {
    num: "01",
    segments: [
      { text: "Найнеобхідніші " },
      { text: "рекомендації перед виходом", bold: true },
      { text: " на нові ринки" },
    ],
  },
  {
    num: "02",
    segments: [
      { text: "Підготовка власного продукту /", bold: true },
      { text: " послуги під міжнародне гео для масового споживача" },
    ],
  },
  {
    num: "03",
    segments: [
      { text: "Як " },
      { text: "обрати найкращі ринки", bold: true },
      { text: " для розширення" },
    ],
  },
  {
    num: "04",
    segments: [
      { text: "Найнеобхідніші маркетингові інструменти для міжнародної арени" },
    ],
  },
  {
    num: "05",
    segments: [
      { text: "Як розрахувати " },
      { text: "unit-економіку", bold: true },
      { text: " та передбачити " },
      { text: "комерційну перспективу", bold: true },
      { text: " бренду на новому гео" },
    ],
  },
  {
    num: "06",
    segments: [
      { text: "Оцінка " },
      { text: "готовності бізнесу", bold: true },
      { text: ' без "фейкових амбіцій"' },
    ],
  },
  {
    num: "07",
    segments: [
      { text: "Особливості ринку США", bold: true },
      { text: ": ментальність і поведінка аудиторії" },
    ],
  },
  {
    num: "08",
    segments: [
      { text: "Ми сформували тест у форматі " },
      {
        text: "чек-апу, який найкраще підсвітить готовність вашого бізнесу",
        bold: true,
      },
      { text: " або його точки росту." },
    ],
  },
];

export const RESULTS_ITEMS: ResultItem[] = [
  {
    segments: [
      { text: "Обрати продукт чи послугу,", bold: true },
      { text: " з якими варто виходити на новий ринок " },
      { text: "із більшою вірогідністю комерційного успіху", bold: true },
    ],
  },
  {
    segments: [
      { text: "Прораховувати", bold: true },
      { text: " математику, тобто " },
      { text: "рентабельність бізнесу на новому гео", bold: true },
    ],
  },
  {
    segments: [
      { text: "Можливість " },
      {
        text: "обрати найкращий ринок для розширення вашого бізнесу",
        bold: true,
      },
      { text: " з меншими ризиками для продукту та ніші" },
    ],
  },
  {
    segments: [
      { text: "Розуміння, " },
      { text: "як збирати найнеобхідніші дані", bold: true },
      { text: " та працювати з ними" },
    ],
  },
  {
    segments: [
      { text: "Реальні приклади та робочі зразки документів,", bold: true },
      { text: " які залишаються у вас для структурної роботи" },
    ],
  },
];

export const MATERIALS: Material[] = [
  { text: "документ з усіма формулами для прорахунків бізнесу" },
  { text: "покроковий приклад виходу на новий ринок (у форматі Excel)" },
  { text: "приклад того, як прорахувати unit-економіку" },
  { text: "приклади АВС-аналізу, BCG-матриці, SWOT-аналізу" },
  {
    text: "інструкції щодо роботи з : SimilarWeb, Google Keyword Planner, Google Trends, Trend Hero та аналізу ER",
  },
  { text: "аудіо-подкасти" },
  { text: "доступ до чату протягом 12 місяців  та багато іншого 🤝" },
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  { text: "Підприємці, які планують вихід на міжнародні ринки" },
  { text: "Власники бізнесів, які хочуть масштабуватися за межі своєї країни" },
  { text: "СЕО та фаундери, які шукають нові точки зростання для компанії" },
  { text: "Маркетологи, які відповідають за запуск і розвиток нових ринків" },
  {
    text: "CMO (директори з маркетингу), які формують міжнародну стратегію бренду",
  },
  { text: "Керівники з розвитку бізнесу та міжнародних продажів" },
  { text: "E-commerce бренди, які планують експансію на нові ринки" },
  {
    text: "Компанії, які вже працюють за кордоном і хочуть посилити свої результати",
  },
  {
    text: "Фахівці, які цікавляться сучасним маркетингом та хочуть розширити свою експертизу в міжнародному бізнесі",
  },
];

export const HEADER_NAV_LINKS: FooterLink[] = [
  { label: "Про інтенсив", href: "#knowledge" },
  { label: "Отримати доступ", href: "#how-it-looks" },
  { label: "Формат", href: "#format" },
  { label: "Хто ми", href: "#who-we-are" },
];

export const FOOTER_NAV_LINKS: FooterLink[] = [
  { label: "Отримати доступ", href: "#how-it-looks" },
  { label: "Формат", href: "#format" },
  { label: "Хто ми", href: "#who-we-are" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and conditions", href: "/terms-and-conditions" },
  { label: "Про інтенсив", href: "#knowledge" },
];

export const FOOTER_CONTACTS = {
  email: "individualistua@gmail.com",
  phone: "+48 889 705 849",
} as const;

export const AUTHOR_EDUCATION = [
  "Інститут журналістики ім. Тараса Шевченка. Спеціалізація: журналістика (м. Київ)",
  "Підвищення кваліфікації Sorbonne Université. Спеціалізація: Communication RSE, communication responsable et réputation (м. Париж)",
  "National Center for Public Territorial Function (CNFPT) «Соціальна та солідарна економіка» (Страсбург)",
  "Київська школа економіки «Аналіз даних в MS Excel»",
  "International Business Management Institute (IBMI), «Стратегія і операційні дії» (Німеччина)",
] as const;

export const PREVIEW_CARDS: PreviewCard[] = [
  { num: "01", bold: "Готові шаблони", text: "для практичного аналізу" },
  {
    num: "02",
    bold: "Аудіо-подкасти",
    text: ", які зручно слухати без прив'язки до часу й місця, у власному темпі",
  },
  { num: "03", bold: "Покрокові інструкції" },
];

export const PRICING = {
  label: "Оплата:",
  amount: "$49,99",
  note: "*акційна ціна діє протягом 2 тижнів",
} as const;
