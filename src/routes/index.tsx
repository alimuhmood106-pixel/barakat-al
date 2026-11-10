import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { heroImage, teamImage, logo, projects, t, PHONE, PHONE_HREF, type Lang, type Category } from "@/components/site/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barakat Al Jinan Company | Construction in Erbil since 2009" },
      { name: "description", content: "Villas, facades, interiors, kitchens and pools built across Iraq by Barakat Al Jinan Company, Erbil, since 2009." },
      { property: "og:title", content: "Barakat Al Jinan Company | Construction in Erbil" },
      { property: "og:description", content: "Villas, facades, interiors, kitchens and pools across Iraq since 2009." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btn = "inline-flex items-center justify-center rounded-[3px] px-6 py-3 text-[15px] font-semibold transition-colors";
const wrap = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Category | "all">("all");
  const c = t[lang];

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const links = [["projects", c.nav.projects], ["services", c.nav.services], ["about", c.nav.about], ["contact", c.nav.contact]] as const;
  const shown = projects.filter((p) => filter === "all" || p.cat === filter);
  const LangSwitch = () => (
    <div className="flex items-center gap-2 text-sm">
      {(["en", "ar"] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span className="text-border">|</span>}
          <button onClick={() => setLang(l)} className={lang === l ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}>
            {l === "en" ? "EN" : "عربي"}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-background text-foreground">
      <header className={`sticky top-0 z-40 bg-background transition-[border-color] ${scrolled || open ? "border-b border-border" : "border-b border-transparent"}`}>
        <div className={`${wrap} flex h-20 items-center justify-between gap-6`}>
          <a href="#top" className="flex shrink-0 items-center"><img src={logo.url} alt="Barakat Al Jinan Company" className="h-12 w-auto" /></a>
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-[15px] font-medium text-foreground/80 underline-offset-[6px] decoration-primary decoration-2 hover:text-foreground hover:underline">{label}</a>
            ))}
            <LangSwitch />
            <a href={PHONE_HREF} className={`${btn} bg-primary text-primary-foreground hover:bg-foreground hover:text-background`}>{c.call}</a>
          </nav>
          <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        <div className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}>
          <div className={`${wrap} flex flex-col gap-4 pb-6`}>
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-lg font-medium">{label}</a>
            ))}
            <LangSwitch />
            <a href={PHONE_HREF} className={`${btn} self-start bg-primary text-primary-foreground`}>{c.call}</a>
          </div>
        </div>
      </header>

      <section id="top" className="relative h-[calc(100svh-5rem)] min-h-[520px] w-full overflow-hidden">
        <img src={heroImage} alt="Modern villa entrance with stone wall and garden steps" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--overlay)_75%,transparent),transparent)]" />
        <div className={`${wrap} relative flex h-full flex-col justify-end pb-14 sm:pb-20`}>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink-foreground sm:text-6xl">{c.heroTitle}</h1>
          <p className="mt-5 max-w-xl text-lg text-ink-foreground/85">{c.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-primary text-primary-foreground hover:bg-ink-foreground`}>{c.viewProjects}</a>
            <a href="#contact" className={`${btn} border border-ink-foreground/70 text-ink-foreground hover:border-primary hover:text-primary`}>{c.quote}</a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 sm:py-32">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div>
            <p className="text-sm font-semibold text-muted-foreground"><span className="me-3 inline-block h-px w-8 align-middle bg-primary" />{c.since}</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">{c.aboutTitle}</h2>
            {c.about.map((p) => <p key={p} className="mt-5 max-w-[34rem] text-muted-foreground">{p}</p>)}
          </div>
          <img src={teamImage} alt="Our team finishing a stone facade from a crane basket" className="aspect-[4/3.4] w-full rounded-[3px] object-cover" />
        </div>
      </section>

      <section id="services" className="bg-ink py-24 text-ink-foreground sm:py-32">
        <div className={wrap}>
          <h2 className="text-3xl font-semibold tracking-[-0.015em] sm:text-4xl">{c.servicesTitle}</h2>
          <div className="mt-12 grid gap-x-16 border-t border-ink-border md:grid-cols-2 md:border-t-0">
            {c.services.map(([title, desc], i) => (
              <div key={title} className={`border-b border-ink-border py-7 ${i < 2 ? "md:border-t" : ""}`}>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-ink-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 sm:py-32">
        <div className={wrap}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold tracking-[-0.015em] sm:text-4xl">{c.projectsTitle}</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {(["all", "villas", "facades", "interiors", "kitchens"] as const).map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={`border-b-2 pb-1 text-[15px] font-medium transition-colors ${filter === f ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                  {c.filters[f]}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3">
            {shown.map((p) => (
              <figure key={p.src} className="mb-10 break-inside-avoid">
                <img src={p.src} alt={p.en} loading="lazy" className="w-full rounded-[3px]" />
                <figcaption className="mt-3 text-[15px] text-muted-foreground">{p[lang]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink py-24 text-ink-foreground sm:py-32">
        <div className={`${wrap} grid gap-12 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.015em] sm:text-4xl">{c.contactTitle}</h2>
            <p className="mt-5 max-w-lg text-ink-muted">{c.contactText}</p>
            <a href={PHONE_HREF} className={`${btn} mt-8 bg-primary text-primary-foreground hover:bg-ink-foreground`}>{c.call}</a>
          </div>
          <dl className="border-t border-ink-border">
            {[[c.phone, <a href={PHONE_HREF} dir="ltr" className="hover:text-primary">{PHONE}</a>], [c.office, c.officeVal], [c.areas, c.areasVal]].map(([k, v], i) => (
              <div key={i} className="grid gap-1 border-b border-ink-border py-6 sm:grid-cols-[10rem_1fr]">
                <dt className="text-sm text-ink-muted">{k}</dt>
                <dd className="text-lg">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={`${wrap} mt-24 flex flex-col gap-4 border-t border-ink-border pt-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between`}>
          <img src={logo.url} alt="Barakat Al Jinan Company" className="h-10 w-auto self-start" />
          <p>© {new Date().getFullYear()} {c.rights}</p>
        </div>
      </section>
    </div>
  );
}
