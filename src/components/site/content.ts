// All copy, photos and contact details live in this file. To change something, edit it here.
// Photos are real files in /public/photos (see README). Replace a file with the same name, or change the id below.

export type Lang = "en" | "ku" | "ar";
export type Category = "construction" | "facades" | "interiors";

export const SITE_URL = "https://barakat-al-ginan.pages.dev";
export const PHONE = "0750 444 1747";
export const PHONE_HREF = "tel:+9647504441747";
export const companyName = "Barakat Al Jinan Company";

export const logo = { url: "/photos/logo.webp", width: 720, height: 513 };

export type Project = { id: string; src: string; cat: Category; en: string; ar: string; ku: string; width: number; height: number };
const p = (id: string, width: number, height: number, cat: Category, en: string, ar: string, ku: string): Project => ({ id, src: `/photos/${id}.webp`, cat, en, ar, ku, width, height });

// Order matters: the grid fills column by column, so this order keeps every column mixed and about the same height.
export const projects: Project[] = [
  p("villa-pool", 1080, 940, "construction", "Villa with pool and garden", "فيلا مع مسبح وحديقة", "ڤیلا لەگەڵ مەلەوانگە و باخ"),
  p("night-facade", 1080, 940, "facades", "Carved stone facade at night", "واجهة حجرية منحوتة ليلاً", "ڕووکارە بەردینەکە لە شەودا"),
  p("white-villa", 1080, 1208, "construction", "White villa, rounded corners", "فيلا بيضاء بزوايا دائرية", "ڤیلای سپی بە گۆشەی خڕ"),
  p("entrance-hall", 1080, 940, "interiors", "Entrance hall with wall panelling", "مدخل مع تكسيات جدارية", "هۆڵی چوونەژوورەوە بە پانێڵی دیوار"),
  p("kitchen-install", 1080, 940, "interiors", "Kitchen installation", "تركيب مطبخ", "دامەزراندنی چێشتخانە"),
  p("wood-corridor", 1080, 1208, "interiors", "Timber slat wall with lighting", "جدار خشبي مع إضاءة", "دیواری دارین بە ڕووناکی"),
  p("classic-villa", 1080, 940, "facades", "Classic white facade", "واجهة كلاسيكية بيضاء", "ڕووکاری سپی کلاسیکی"),
  p("stone-column-villa", 1080, 940, "construction", "Modern villa, stone and glass", "فيلا حديثة بالحجر والزجاج", "ڤیلای مۆدێرن بە بەرد و شووشە"),
  p("bathroom", 1080, 940, "interiors", "Marble bathroom", "حمام رخامي", "حەمامی مەڕمەڕ"),
  p("curved-villa", 1080, 1208, "construction", "Villa with curved terraces", "فيلا بشرفات منحنية", "ڤیلا بە تەراسی چەماوە"),
  p("glass-doors-hall", 1080, 940, "interiors", "Glazed double doors in a panelled hall", "أبواب زجاجية مزدوجة في ممر مكسو", "دەرگای شووشەیی لە هۆڵی پانێڵکراو"),
  p("travertine-villa", 1080, 940, "construction", "Villa with stone wall and timber canopy", "فيلا بجدار حجري وسقف خشبي", "ڤیلا بە دیواری بەرد و سەقفی دار"),
  p("glazing-install", 960, 836, "facades", "Window and glazing installation", "تركيب النوافذ والزجاج", "دامەزراندنی پەنجەرە و شووشە"),
  p("facade-crane", 960, 836, "construction", "Painting a facade from a lift", "طلاء واجهة من منصة رفع", "ڕەنگکردنی ڕووکار بە ئامێری بەرزکەرەوە"),
  p("sculpted-wall", 850, 1208, "facades", "Villa with curved walls", "فيلا بجدران منحنية", "ڤیلا بە دیواری چەماوە"),
  p("arched-lounge", 1080, 1208, "interiors", "Lounge with arched panels", "صالة بأقواس جدارية", "هۆڵ بە پانێڵی کەوانەیی"),
  p("grey-doors", 1080, 940, "interiors", "Panelled doors and joinery", "أبواب ونجارة", "دەرگا و دارتاشی"),
  p("slat-villa", 1080, 940, "construction", "Two-storey villa with panel cladding", "فيلا من طابقين بتكسية ألواح", "ڤیلای دوو نهۆمی بە پانێڵ"),
  p("sculpted-olive", 1080, 1208, "facades", "Plaster entrance with olive tree", "مدخل جصي مع شجرة زيتون", "چوونەژوورەوە بە دار زەیتوون"),
];

const project = (id: string) => projects.find((x) => x.id === id) as Project;
export const heroProject = project("classic-villa"); // full-width hero photo
export const teamProject = project("facade-crane"); // team photo in the intro
export const regionProject = project("villa-pool"); // photo in the dark band

export const CONTACT = {
  whatsapp: "https://wa.me/9647504441747",
  instagram: "https://www.instagram.com/barakatalginan.company/",
  facebook: "https://www.facebook.com/profile.php?id=61567296646562",
  map: "https://www.google.com/maps?q=36.192081,43.960754",
  embed: "https://maps.google.com/maps?q=36.192081,43.960754&z=15&output=embed",
};

const en = {
  nav: { projects: "Projects", services: "Services", about: "About", contact: "Contact" },
  call: "Call Us",
  heroTitle: "We build villas, facades and interiors across Iraq.",
  heroSub: "Construction and architecture since 2009, based in Erbil.",
  viewProjects: "View Projects",
  quote: "Request a Quote",
  aboutTitle: "A construction company from Erbil",
  about: [
    "Barakat Al Jinan Company was founded in 2009 in Erbil. We build complete projects, from the concrete structure to the last coat of paint, the kitchen and the pool.",
    "Our own crews handle the work on site, so one team is responsible for the whole job. We work in Erbil, Duhok, Soran, Sulaymaniyah, Kirkuk and Baghdad.",
  ],
  since: "Since 2009",
  servicesTitle: "What we do",
  services: [
    ["Villa and house construction", "Complete houses built from foundations and structure through to handover."],
    ["Facades and exterior finishing", "Stone, plaster and cladding facades, cornices, columns and exterior lighting."],
    ["Interior finishing", "Plastering, wall panelling, ceilings, flooring, painting and lighting."],
    ["Kitchens and joinery", "Made-to-measure kitchens, wardrobes, doors and timber details."],
    ["Pools and landscaping", "Swimming pools, terraces, garden walls, planting and lawns."],
    ["Design and supervision", "Architectural design, 3D visuals and site supervision during construction."],
  ],
  projectsTitle: "Projects",
  filters: { all: "All", construction: "Construction", facades: "Facades", interiors: "Interiors" },
  contactTitle: "Tell us about your project",
  contactText: "Call us or send a message with the location, the size of the plot and what you want to build. We will get back to you to arrange a visit.",
  phone: "Phone",
  office: "Office",
  officeVal: "Empire - Pearl P4, Irbil, Iraq",
  regionsTitle: "Work across Kurdistan and Iraq",
  regionsCities: "Erbil (head office), Duhok, Soran, Sulaymaniyah, Kirkuk, Baghdad",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  facebook: "Facebook",
  openMap: "Open in Google Maps",
  mapTitle: "Barakat Al Jinan office in Erbil",
  name: "Name",
  city: "City",
  message: "Message",
  send: "Send message",
  formTitle: "Project enquiry",
  errName: "Please enter your name.",
  errPhone: "Please enter a valid phone number.",
  errCity: "Please enter your city.",
  errMessage: "Please write a few words about the project.",
  successTitle: "Thank you.",
  success: "Your message is ready. Press the button below to send it to us on WhatsApp and we will call you back.",
  sendWa: "Send on WhatsApp",
  edit: "Edit message",
  waIntro: "Hello Barakat Al Jinan, I would like to ask about a project.",
  close: "Close photo",
  next: "Next photo",
  previous: "Previous photo",
  menu: "Menu",
  skip: "Skip to content",
  rights: "Barakat Al Jinan Company, For Construction and Architectural.",
};
type Dict = typeof en;

const ku: Dict = {
  nav: { projects: "پڕۆژەکان", services: "خزمەتگوزارییەکان", about: "دەربارەی ئێمە", contact: "پەیوەندی" },
  call: "پەیوەندیمان پێوە بکە",
  heroTitle: "ڤیلا، ڕووکار و ناوەوەی بینا لە سەرانسەری عێراق دروست دەکەین.",
  heroSub: "بیناسازی و تەلارسازی لە ساڵی 2009ەوە، بنکەکەمان لە هەولێرە.",
  viewProjects: "پڕۆژەکان ببینە",
  quote: "داوای نرخ بکە",
  aboutTitle: "کۆمپانیایەکی بیناسازی لە هەولێر",
  about: [
    "کۆمپانیای بەرەکات ئەلجینان لە ساڵی 2009 لە هەولێر دامەزراوە. پڕۆژەکان بە تەواوی جێبەجێ دەکەین، لە پێکهاتەی کۆنکرێتییەوە تا ڕەنگ، چێشتخانە و مەلەوانگە.",
    "تیمەکانی خۆمان کارەکان جێبەجێ دەکەن. لە هەولێر، دهۆک، سۆران، سلێمانی، کەرکووک و بەغدا کار دەکەین.",
  ],
  since: "لە ساڵی 2009ەوە",
  servicesTitle: "خزمەتگوزارییەکانمان",
  services: [
    ["دروستکردنی ڤیلا و خانوو", "لە بناغە و پێکهاتەوە تا تەواوکردن و ڕادەستکردن."],
    ["ڕووکار و تەواوکردنی دەرەوە", "ڕووکاری بەرد، گەچ، ستوون و ڕووناکی دەرەوە."],
    ["تەواوکردنی ناوەوە", "گەچ، دیوار، میچەک، زەوی، ڕەنگ و ڕووناکی."],
    ["چێشتخانە و دارتاشی", "چێشتخانە، دۆڵاب و دەرگا بە پێی پێوانە."],
    ["مەلەوانگە و باخچەسازی", "مەلەوانگە، تەراس، دیواری باخ و چاندن."],
    ["دیزاین و چاودێری", "دیزاینی تەلارسازی، وێنەی سێ ڕەهەندی و چاودێری کار."],
  ],
  projectsTitle: "پڕۆژەکان",
  filters: { all: "هەموو", construction: "بیناسازی", facades: "ڕووکار", interiors: "ناوەوە" },
  contactTitle: "دەربارەی پڕۆژەکەت بۆمان بڵێ",
  contactText: "شوێن، ڕووبەری زەوی و ئەوەی دەتەوێت دروستی بکەیت بۆمان بنێرە. پەیوەندیت پێوە دەکەین بۆ ڕێکخستنی سەردانێک.",
  phone: "تەلەفۆن",
  office: "نووسینگە",
  officeVal: "ئیمپایەر - پێڕڵ P4، هەولێر، عێراق",
  regionsTitle: "کار لە کوردستان و عێراق",
  regionsCities: "هەولێر (نووسینگەی سەرەکی)، دهۆک، سۆران، سلێمانی، کەرکووک، بەغدا",
  whatsapp: "واتساپ",
  instagram: "ئینستاگرام",
  facebook: "فەیسبووک",
  openMap: "لە نەخشەی گووگڵ بیکەرەوە",
  mapTitle: "نووسینگەی بەرەکات ئەلجینان لە هەولێر",
  name: "ناو",
  city: "شار",
  message: "نامە",
  send: "نامە بنێرە",
  formTitle: "پرسیار دەربارەی پڕۆژە",
  errName: "تکایە ناوەکەت بنووسە.",
  errPhone: "تکایە ژمارەی تەلەفۆنێکی دروست بنووسە.",
  errCity: "تکایە شارەکەت بنووسە.",
  errMessage: "تکایە چەند وشەیەک دەربارەی پڕۆژەکە بنووسە.",
  successTitle: "سوپاس.",
  success: "نامەکەت ئامادەیە. دوگمەی خوارەوە دابگرە بۆ ناردنی بە واتساپ، ئێمەش پەیوەندیت پێوە دەکەین.",
  sendWa: "بە واتساپ بینێرە",
  edit: "دەستکاریکردنی نامە",
  waIntro: "سڵاو بەرەکات ئەلجینان، دەمەوێت دەربارەی پڕۆژەیەک بپرسم.",
  close: "داخستنی وێنە",
  next: "وێنەی دواتر",
  previous: "وێنەی پێشوو",
  menu: "لیست",
  skip: "بازبدە بۆ ناوەڕۆک",
  rights: "کۆمپانیای بەرەکات ئەلجینان.",
};

const ar: Dict = {
  nav: { projects: "المشاريع", services: "الخدمات", about: "من نحن", contact: "اتصل بنا" },
  call: "اتصل بنا",
  heroTitle: "نبني الفلل والواجهات والتصاميم الداخلية في أنحاء العراق.",
  heroSub: "إنشاءات وعمارة منذ عام 2009، ومقرنا في أربيل.",
  viewProjects: "عرض المشاريع",
  quote: "اطلب عرض سعر",
  aboutTitle: "شركة إنشاءات من أربيل",
  about: [
    "تأسست شركة بركات الجنان عام 2009 في أربيل. ننفذ المشاريع كاملة، من الهيكل الخرساني حتى آخر طبقة طلاء والمطبخ والمسبح.",
    "فرق العمل الخاصة بنا تنفذ الأعمال في الموقع، لذا فريق واحد مسؤول عن المشروع بالكامل. نعمل في أربيل ودهوك وسوران والسليمانية وكركوك وبغداد.",
  ],
  since: "منذ 2009",
  servicesTitle: "خدماتنا",
  services: [
    ["بناء الفلل والمنازل", "منازل كاملة من الأساسات والهيكل حتى التسليم."],
    ["الواجهات والتشطيبات الخارجية", "واجهات حجر وجص وتكسيات، كرانيش وأعمدة وإضاءة خارجية."],
    ["التشطيبات الداخلية", "لياسة وتكسيات جدارية وأسقف وأرضيات وصبغ وإضاءة."],
    ["المطابخ والنجارة", "مطابخ وخزائن وأبواب وتفاصيل خشبية حسب القياس."],
    ["المسابح وتنسيق الحدائق", "مسابح وتراسات وأسوار حدائق وزراعة ومسطحات خضراء."],
    ["التصميم والإشراف", "تصميم معماري وصور ثلاثية الأبعاد وإشراف على الموقع أثناء التنفيذ."],
  ],
  projectsTitle: "المشاريع",
  filters: { all: "الكل", construction: "الإنشاءات", facades: "واجهات", interiors: "داخلي" },
  contactTitle: "حدثنا عن مشروعك",
  contactText: "اتصل بنا أو أرسل رسالة بالموقع ومساحة الأرض وما تريد بناءه، وسنتواصل معك لترتيب زيارة.",
  phone: "الهاتف",
  office: "المكتب",
  officeVal: "إمباير - بيرل P4، أربيل، العراق",
  regionsTitle: "نعمل في كوردستان والعراق",
  regionsCities: "أربيل (المكتب الرئيسي)، دهوك، سوران، السليمانية، كركوك، بغداد",
  whatsapp: "واتساب",
  instagram: "إنستغرام",
  facebook: "فيسبوك",
  openMap: "افتح في خرائط جوجل",
  mapTitle: "مكتب بركات الجنان في أربيل",
  name: "الاسم",
  city: "المدينة",
  message: "الرسالة",
  send: "إرسال الرسالة",
  formTitle: "استفسار عن مشروع",
  errName: "يرجى إدخال الاسم.",
  errPhone: "يرجى إدخال رقم هاتف صحيح.",
  errCity: "يرجى إدخال المدينة.",
  errMessage: "يرجى كتابة بضع كلمات عن المشروع.",
  successTitle: "شكراً لك.",
  success: "رسالتك جاهزة. اضغط الزر أدناه لإرسالها إلينا عبر واتساب وسنتصل بك.",
  sendWa: "إرسال عبر واتساب",
  edit: "تعديل الرسالة",
  waIntro: "مرحباً بركات الجنان، أود الاستفسار عن مشروع.",
  close: "إغلاق الصورة",
  next: "الصورة التالية",
  previous: "الصورة السابقة",
  menu: "القائمة",
  skip: "انتقل إلى المحتوى",
  rights: "شركة بركات الجنان للإنشاءات والمعمار.",
};

export const t: Record<Lang, Dict> = { en, ku, ar };
