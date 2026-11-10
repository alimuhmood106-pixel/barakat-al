import poolGarden from "@/assets/pool-garden.jpg.asset.json";
import entranceHall from "@/assets/entrance-hall.jpg.asset.json";
import facadeCrane from "@/assets/facade-crane.jpg.asset.json";
import glazing from "@/assets/glazing.jpg.asset.json";
import kitchen from "@/assets/kitchen.jpg.asset.json";
import nightFacade from "@/assets/night-facade.jpg.asset.json";
import bathroom from "@/assets/bathroom.jpg.asset.json";
import classicVilla from "@/assets/classic-villa.jpg.asset.json";
import greyDoors from "@/assets/grey-doors.jpg.asset.json";
import livingRoom from "@/assets/living-room.jpg.asset.json";
import sculptedVilla from "@/assets/sculpted-villa.jpg.asset.json";
import sculptedEntrance from "@/assets/sculpted-entrance.jpg.asset.json";
import whiteVilla from "@/assets/white-villa.jpg.asset.json";
import woodCorridor from "@/assets/wood-corridor.jpg.asset.json";
import archedLounge from "@/assets/arched-lounge.jpg.asset.json";
import roundedVilla from "@/assets/rounded-villa.jpg.asset.json";
import stoneVilla from "@/assets/stone-villa.jpg.asset.json";
import darkVilla from "@/assets/dark-villa.jpg.asset.json";
import villaEntrance from "@/assets/villa-entrance.jpg.asset.json";
export { default as logo } from "@/assets/logo.png.asset.json";

export const heroImage = villaEntrance.url;
export const teamImage = facadeCrane.url;

export type Lang = "en" | "ar";
export type Category = "villas" | "facades" | "interiors" | "kitchens";

export const PHONE = "+964 750 444 1700";
export const PHONE_HREF = "tel:+9647504441700";

type P = { src: string; cat: Category; en: string; ar: string };
export const projects: P[] = [
  { src: poolGarden.url, cat: "kitchens", en: "Villa with pool and garden", ar: "فيلا مع مسبح وحديقة" },
  { src: stoneVilla.url, cat: "villas", en: "Modern villa, stone and glass", ar: "فيلا حديثة بالحجر والزجاج" },
  { src: entranceHall.url, cat: "interiors", en: "Entrance hall with wall panelling", ar: "مدخل مع تكسيات جدارية" },
  { src: nightFacade.url, cat: "facades", en: "Carved stone facade at night", ar: "واجهة حجرية منحوتة ليلاً" },
  { src: kitchen.url, cat: "kitchens", en: "Kitchen installation", ar: "تركيب مطبخ" },
  { src: sculptedVilla.url, cat: "villas", en: "Villa with curved walls", ar: "فيلا بجدران منحنية" },
  { src: bathroom.url, cat: "interiors", en: "Marble bathroom", ar: "حمام رخامي" },
  { src: classicVilla.url, cat: "facades", en: "Classic white facade", ar: "واجهة كلاسيكية بيضاء" },
  { src: woodCorridor.url, cat: "interiors", en: "Timber slat wall with lighting", ar: "جدار خشبي مع إضاءة" },
  { src: darkVilla.url, cat: "villas", en: "Two-storey villa", ar: "فيلا من طابقين" },
  { src: greyDoors.url, cat: "kitchens", en: "Panelled doors and joinery", ar: "أبواب ونجارة" },
  { src: sculptedEntrance.url, cat: "facades", en: "Plaster entrance with olive tree", ar: "مدخل جصي مع شجرة زيتون" },
  { src: archedLounge.url, cat: "interiors", en: "Lounge with arched panels", ar: "صالة بأقواس جدارية" },
  { src: whiteVilla.url, cat: "villas", en: "White villa, rounded corners", ar: "فيلا بيضاء بزوايا دائرية" },
  { src: glazing.url, cat: "facades", en: "Window and glazing installation", ar: "تركيب النوافذ والزجاج" },
  { src: livingRoom.url, cat: "interiors", en: "Living room finishing", ar: "تشطيب غرفة معيشة" },
  { src: roundedVilla.url, cat: "villas", en: "Villa facade with balconies", ar: "واجهة فيلا مع شرفات" },
];

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
    filters: { all: "All", villas: "Villas", facades: "Facades", interiors: "Interiors", kitchens: "Kitchens, pools & joinery" },
    contactTitle: "Tell us about your project",
    contactText: "Call us or send a message with the location, the size of the plot and what you want to build. We will get back to you to arrange a visit.",
    phone: "Phone",
    office: "Office",
    officeVal: "Erbil, Kurdistan Region, Iraq",
    areas: "We work in",
    areasVal: "Erbil, Duhok, Soran, Sulaymaniyah, Kirkuk, Baghdad",
    rights: "Barakat Al Jinan Company, For Construction and Architectural.",
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
    filters: { all: "الكل", villas: "فلل", facades: "واجهات", interiors: "داخلي", kitchens: "مطابخ ومسابح ونجارة" },
    contactTitle: "حدثنا عن مشروعك",
    contactText: "اتصل بنا أو أرسل رسالة بالموقع ومساحة الأرض وما تريد بناءه، وسنتواصل معك لترتيب زيارة.",
    phone: "الهاتف",
    office: "المكتب",
    officeVal: "أربيل، إقليم كوردستان، العراق",
    areas: "مناطق العمل",
    areasVal: "أربيل، دهوك، سوران، السليمانية، كركوك، بغداد",
    rights: "شركة بركات الجنان للإنشاءات والمعمار.",
  },
};
