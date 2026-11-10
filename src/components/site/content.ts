import poolGarden from "@/assets/optimized/pool-garden.webp.asset.json";
import entranceHall from "@/assets/optimized/entrance-hall.webp.asset.json";
import facadeCrane from "@/assets/optimized/facade-crane.webp.asset.json";
import glazing from "@/assets/optimized/glazing.webp.asset.json";
import kitchen from "@/assets/optimized/kitchen.webp.asset.json";
import nightFacade from "@/assets/optimized/night-facade.webp.asset.json";
import bathroom from "@/assets/optimized/bathroom.webp.asset.json";
import classicVilla from "@/assets/optimized/classic-villa.webp.asset.json";
import greyDoors from "@/assets/optimized/grey-doors.webp.asset.json";
import livingRoom from "@/assets/optimized/living-room.webp.asset.json";
import sculptedVilla from "@/assets/optimized/sculpted-villa.webp.asset.json";
import sculptedEntrance from "@/assets/optimized/sculpted-entrance.webp.asset.json";
import whiteVilla from "@/assets/optimized/white-villa.webp.asset.json";
import woodCorridor from "@/assets/optimized/wood-corridor.webp.asset.json";
import archedLounge from "@/assets/optimized/arched-lounge.webp.asset.json";
import roundedVilla from "@/assets/optimized/rounded-villa.webp.asset.json";
import stoneVilla from "@/assets/optimized/stone-villa.webp.asset.json";
import darkVilla from "@/assets/optimized/dark-villa.webp.asset.json";
import villaEntrance from "@/assets/optimized/villa-entrance.webp.asset.json";
export { default as logo } from "@/assets/optimized/logo.webp.asset.json";

export const heroImage = classicVilla.url;
export const teamImage = facadeCrane.url;

export type Lang = "en" | "ku" | "ar";
export type Category = "construction" | "facades" | "interiors";

export const PHONE = "0750 444 1747";
export const PHONE_HREF = "tel:+9647504441747";

export type Project = { src: string; cat: Category; en: string; ar: string; ku: string; width: number; height: number };
export const projects: Project[] = [
  { src: poolGarden.url, cat: "construction", en: "Villa with pool and garden", ar: "فيلا مع مسبح وحديقة", ku: "ڤیلا لەگەڵ مەلەوانگە و باخ", width: 1080, height: 939 },
  { src: stoneVilla.url, cat: "construction", en: "Modern villa, stone and glass", ar: "فيلا حديثة بالحجر والزجاج", ku: "ڤیلای مۆدێرن بە بەرد و شووشە", width: 1080, height: 939 },
  { src: entranceHall.url, cat: "interiors", en: "Entrance hall with wall panelling", ar: "مدخل مع تكسيات جدارية", ku: "هۆڵی چوونەژوورەوە", width: 1080, height: 939 },
  { src: nightFacade.url, cat: "facades", en: "Carved stone facade at night", ar: "واجهة حجرية منحوتة ليلاً", ku: "ڕووکارە بەردینەکە لە شەودا", width: 1080, height: 939 },
  { src: kitchen.url, cat: "construction", en: "Kitchen installation", ar: "تركيب مطبخ", ku: "دامەزراندنی چێشتخانە", width: 1080, height: 939 },
  { src: sculptedVilla.url, cat: "construction", en: "Villa with curved walls", ar: "فيلا بجدران منحنية", ku: "ڤیلا بە دیواری چەماوە", width: 1080, height: 1174 },
  { src: bathroom.url, cat: "interiors", en: "Marble bathroom", ar: "حمام رخامي", ku: "حەمامی مەڕمەڕ", width: 1080, height: 939 },
  { src: classicVilla.url, cat: "facades", en: "Classic white facade", ar: "واجهة كلاسيكية بيضاء", ku: "ڕووکاری سپی کلاسیکی", width: 1080, height: 939 },
  { src: woodCorridor.url, cat: "interiors", en: "Timber slat wall with lighting", ar: "جدار خشبي مع إضاءة", ku: "دیواری دارین بە ڕووناکی", width: 1080, height: 1174 },
  { src: darkVilla.url, cat: "construction", en: "Two-storey villa", ar: "فيلا من طابقين", ku: "ڤیلای دوو نهۆمی", width: 1080, height: 939 },
  { src: greyDoors.url, cat: "construction", en: "Panelled doors and joinery", ar: "أبواب ونجارة", ku: "دەرگا و دارتاشی", width: 1080, height: 939 },
  { src: sculptedEntrance.url, cat: "facades", en: "Plaster entrance with olive tree", ar: "مدخل جصي مع شجرة زيتون", ku: "چوونەژوورەوە بە دار زەیتوون", width: 1080, height: 1174 },
  { src: archedLounge.url, cat: "interiors", en: "Lounge with arched panels", ar: "صالة بأقواس جدارية", ku: "هۆڵ بە کەوانەکان", width: 1080, height: 1174 },
  { src: whiteVilla.url, cat: "construction", en: "White villa, rounded corners", ar: "فيلا بيضاء بزوايا دائرية", ku: "ڤیلای سپی", width: 1080, height: 1174 },
  { src: glazing.url, cat: "facades", en: "Window and glazing installation", ar: "تركيب النوافذ والزجاج", ku: "دامەزراندنی پەنجەرە و شووشە", width: 960, height: 835 },
  { src: livingRoom.url, cat: "interiors", en: "Living room finishing", ar: "تشطيب غرفة معيشة", ku: "تەواوکردنی ژووری دانیشتن", width: 1080, height: 939 },
  { src: roundedVilla.url, cat: "construction", en: "Villa facade with balconies", ar: "واجهة فيلا مع شرفات", ku: "ڕووکاری ڤیلا بە باڵکۆن", width: 1080, height: 1174 },
];

export const CONTACT = { whatsapp: "https://wa.me/9647504441747", instagram: "https://www.instagram.com/barakatalginan.company/", facebook: "https://www.facebook.com/profile.php?id=61567296646562", map: "https://www.google.com/maps?q=36.192081,43.960754", embed: "https://maps.google.com/maps?q=36.192081,43.960754&z=15&output=embed" };
export const regionImage = poolGarden.url;
export const companyName = "Barakat Al Jinan Company";
export const t = {
  en: {
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
    areas: "We work in",
    areasVal: "Erbil, Duhok, Soran, Sulaymaniyah, Kirkuk, Baghdad",
    regionsTitle: "Work across Kurdistan and Iraq",
    regionsCities: "Erbil (head office), Duhok, Soran, Sulaymaniyah, Kirkuk, Baghdad",
    whatsapp: "WhatsApp", instagram: "Instagram", facebook: "Facebook", openMap: "Open in Google Maps", mapTitle: "Barakat Al Jinan office in Erbil",
    name: "Name", city: "City", message: "Message", send: "Check message", formTitle: "Project enquiry",
    validation: "Please enter your name, a valid phone number, city and a message of at least 10 characters.",
    success: "Your message is ready. This form does not send messages; please contact us by WhatsApp or phone.",
    close: "Close photo", next: "Next photo", previous: "Previous photo", menu: "Menu",
    rights: "Barakat Al Jinan Company, For Construction and Architectural.",
  },
  ku: {
    nav: { projects: "پڕۆژەکان", services: "خزمەتگوزارییەکان", about: "دەربارەی ئێمە", contact: "پەیوەندی" },
    call: "پەیوەندیمان پێوە بکە", heroTitle: "ڤیلا، ڕووکار و ناوەوەی بینا لە سەرانسەری عێراق دروست دەکەین.",
    heroSub: "بیناسازی و تەلارسازی لە ساڵی 2009ەوە، بنکەکەمان لە هەولێرە.", viewProjects: "پڕۆژەکان ببینە", quote: "داوای نرخ بکە",
    aboutTitle: "کۆمپانیایەکی بیناسازی لە هەولێر", since: "لە ساڵی 2009ەوە",
    about: ["کۆمپانیای بەرەکات ئەلجینان لە ساڵی 2009 لە هەولێر دامەزراوە. پڕۆژەکان بە تەواوی جێبەجێ دەکەین، لە پێکهاتەی کۆنکرێتییەوە تا ڕەنگ، چێشتخانە و مەلەوانگە.", "تیمەکانی خۆمان کارەکان جێبەجێ دەکەن. لە هەولێر، دهۆک، سۆران، سلێمانی، کەرکووک و بەغدا کار دەکەین."],
    servicesTitle: "خزمەتگوزارییەکانمان", services: [
      ["دروستکردنی ڤیلا و خانوو", "لە بناغە و پێکهاتەوە تا تەواوکردن و ڕادەستکردن."],
      ["ڕووکار و تەواوکردنی دەرەوە", "ڕووکاری بەرد، گەچ، ستوون و ڕووناکی دەرەوە."],
      ["تەواوکردنی ناوەوە", "گەچ، دیوار، میچەک، زەوی، ڕەنگ و ڕووناکی."],
      ["چێشتخانە و دارتاشی", "چێشتخانە، دۆڵاب و دەرگا بە پێی پێوانە."],
      ["مەلەوانگە و باخچەسازی", "مەلەوانگە، تەراس، دیواری باخ و چاندن."],
      ["دیزاین و چاودێری", "دیزاینی تەلارسازی، وێنەی سێ ڕەهەندی و چاودێری کار."],
    ],
    projectsTitle: "پڕۆژەکان", filters: { all: "هەموو", construction: "بیناسازی", facades: "ڕووکار", interiors: "ناوەوە" },
    contactTitle: "دەربارەی پڕۆژەکەت بۆمان بڵێ", contactText: "شوێن، ڕووبەری زەوی و ئەوەی دەتەوێت دروستی بکەیت بۆمان بنێرە.",
    phone: "تەلەفۆن", office: "نووسینگە", officeVal: "ئیمپایەر - پێڕڵ P4، هەولێر، عێراق", areas: "شوێنەکانی کار", areasVal: "هەولێر، دهۆک، سۆران، سلێمانی، کەرکووک، بەغدا",
    regionsTitle: "کار لە کوردستان و عێراق", regionsCities: "هەولێر (نووسینگەی سەرەکی)، دهۆک، سۆران، سلێمانی، کەرکووک، بەغدا",
    whatsapp: "واتساپ", instagram: "ئینستاگرام", facebook: "فەیسبووک", openMap: "لە نەخشەی گووگڵ بیکەرەوە", mapTitle: "نووسینگەی بەرەکات ئەلجینان لە هەولێر",
    name: "ناو", city: "شار", message: "نامە", send: "نامەکە بپشکنە", formTitle: "پرسیار دەربارەی پڕۆژە",
    validation: "تکایە ناو، ژمارەی تەلەفۆنی دروست، شار و نامەیەکی لانیکەم 10 پیت بنووسە.",
    success: "نامەکەت ئامادەیە. ئەم فۆڕمە نامە نانێرێت؛ بە واتساپ یان تەلەفۆن پەیوەندیمان پێوە بکە.",
    close: "داخستنی وێنە", next: "وێنەی دواتر", previous: "وێنەی پێشوو", menu: "لیست", rights: "کۆمپانیای بەرەکات ئەلجینان.",
  },
  ar: {
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
    areas: "مناطق العمل",
    areasVal: "أربيل، دهوك، سوران، السليمانية، كركوك، بغداد",
    regionsTitle: "نعمل في كوردستان والعراق",
    regionsCities: "أربيل (المكتب الرئيسي)، دهوك، سوران، السليمانية، كركوك، بغداد",
    whatsapp: "واتساب", instagram: "إنستغرام", facebook: "فيسبوك", openMap: "افتح في خرائط جوجل", mapTitle: "مكتب بركات الجنان في أربيل",
    name: "الاسم", city: "المدينة", message: "الرسالة", send: "تحقق من الرسالة", formTitle: "استفسار عن مشروع",
    validation: "يرجى إدخال الاسم ورقم هاتف صحيح والمدينة ورسالة من 10 أحرف على الأقل.",
    success: "رسالتك جاهزة. هذا النموذج لا يرسل الرسائل؛ تواصل معنا عبر واتساب أو الهاتف.",
    close: "إغلاق الصورة", next: "الصورة التالية", previous: "الصورة السابقة", menu: "القائمة",
    rights: "شركة بركات الجنان للإنشاءات والمعمار.",
  },
};
