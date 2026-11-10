import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Menu, X, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/site/gallery";
import { validEnquiry } from "@/components/site/enquiry";
import { heroImage, teamImage, regionImage, logo, projects, t, PHONE, PHONE_HREF, CONTACT, companyName, type Lang, type Category } from "@/components/site/content";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Barakat Al Jinan Company | Construction in Erbil, Iraq" },
    { name: "description", content: "Barakat Al Jinan Company builds villas, facades, interiors, kitchens and pools across Kurdistan and Iraq. Based in Erbil since 2009. Call 0750 444 1747." },
    { property: "og:title", content: "Barakat Al Jinan Company | Construction in Erbil, Iraq" },
    { property: "og:description", content: "Villas, facades, interiors, kitchens and pools across Iraq. Construction and architecture from Erbil since 2009." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: companyName, telephone: "+9647504441747", foundingDate: "2009", address: { "@type": "PostalAddress", streetAddress: "Empire - Pearl P4", addressLocality: "Irbil", addressCountry: "IQ" }, geo: { "@type": "GeoCoordinates", latitude: 36.192081, longitude: 43.960754 }, sameAs: [CONTACT.instagram, CONTACT.facebook], areaServed: ["Erbil", "Duhok", "Soran", "Sulaymaniyah", "Kirkuk", "Baghdad"] }) }] }),
  component: Index,
});
const wrap = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";
const cta = "h-auto min-h-12 rounded-[3px] px-6 py-3 text-[15px] font-semibold whitespace-normal shadow-none";
function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [ready, setReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Category | "all">("all");
  const [active, setActive] = useState<number | null>(null);
  const [status, setStatus] = useState<"error" | "success" | null>(null);
  const c = t[lang];
  useEffect(() => {
    try { const saved = localStorage.getItem("barakat-language"); if (saved === "en" || saved === "ar" || saved === "ku") setLang(saved); } catch { /* Storage can be disabled. */ }
    setReady(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "ku" ? "ckb" : lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    if (ready) { try { localStorage.setItem("barakat-language", lang); } catch { /* Storage can be disabled. */ } }
  }, [lang, ready]);
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } }), { threshold: 0.06 });
    nodes.forEach((node) => { if (!node.classList.contains("revealed")) { node.classList.add("reveal-ready"); observer.observe(node); } });
    return () => observer.disconnect();
  }, [filter]);
  const links = [["projects", c.nav.projects], ["services", c.nav.services], ["about", c.nav.about], ["contact", c.nav.contact]] as const;
  const shown = projects.filter((p) => filter === "all" || p.cat === filter);
  const languageSwitch = <div className="flex items-center gap-1" role="group" aria-label="Language">
    {(["en", "ku", "ar"] as Lang[]).map((l) => <Button key={l} variant="ghost" className={`h-9 px-2 hover:bg-transparent hover:text-foreground ${lang === l ? "font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-8" : "text-muted-foreground"}`} aria-pressed={lang === l} onClick={() => { setLang(l); setStatus(null); }}>{l === "en" ? "EN" : l === "ku" ? "کوردی" : "عربي"}</Button>)}
  </div>;
  const social = <div className="flex flex-wrap gap-x-6 gap-y-3"><a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><Instagram size={17} />{c.instagram}</a><a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><Facebook size={17} />{c.facebook}</a></div>;
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = new FormData(e.currentTarget);
    const values = { name: String(form.get("name") ?? ""), phone: String(form.get("phone") ?? ""), city: String(form.get("city") ?? ""), message: String(form.get("message") ?? "") };
    setStatus(validEnquiry(values) ? "success" : "error");
  }
  return <div className="bg-background text-foreground">
    <header className={`sticky top-0 z-40 border-b bg-background ${scrolled || open ? "border-border" : "border-transparent"}`}>
      <div className={`${wrap} flex h-24 items-center justify-between gap-4`}>
        <a href="#top" aria-label={companyName} className="shrink-0"><img src={logo.url} width={872} height={621} alt={companyName} className="h-[72px] w-[102px] object-contain" /></a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">{links.map(([id, label]) => <a key={id} href={`#${id}`} className="text-[15px] font-medium hover:underline decoration-primary underline-offset-8">{label}</a>)}{languageSwitch}<Button asChild className={cta}><a href={PHONE_HREF}>{c.call}</a></Button></nav>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={c.menu} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav id="mobile-menu" aria-label="Mobile navigation" className={`${wrap} mobile-menu flex flex-col items-start gap-4 pb-6 lg:hidden`}>{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}{languageSwitch}<Button asChild className={cta}><a href={PHONE_HREF}>{c.call}</a></Button></nav>}
    </header>
    <main>
      <section id="top" className="hero relative w-full overflow-hidden">
        <img src={heroImage} width={1080} height={939} alt={projects[7]?.[lang]} fetchPriority="high" className="hero-photo absolute inset-0 h-full w-full object-cover object-center" />
        <div className="hero-shade absolute inset-0" />
        <div className={`${wrap} relative flex h-full flex-col justify-end pb-12 sm:pb-16`}>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.15] text-ink-foreground sm:text-5xl lg:text-6xl">{c.heroTitle}</h1>
          <p className="mt-5 max-w-xl text-lg text-ink-foreground">{c.heroSub}</p>
          <div className="mt-7 flex flex-wrap gap-3"><Button asChild className={cta}><a href="#projects">{c.viewProjects}</a></Button><Button asChild variant="outline" className={`${cta} border-ink-foreground bg-transparent text-ink-foreground hover:bg-ink-foreground hover:text-ink`}><a href="#contact">{c.quote}</a></Button></div>
        </div>
      </section>
      <section id="about" className="py-20 sm:py-28"><div className={`${wrap} grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
        <div data-reveal><p className="text-sm font-semibold text-muted-foreground"><span className="me-3 inline-block h-px w-8 align-middle bg-primary" />{c.since}</p><h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">{c.aboutTitle}</h2>{c.about.map((p) => <p key={p} className="mt-5 text-muted-foreground">{p}</p>)}</div>
        <img data-reveal src={teamImage} alt={c.services[1]?.[0]} width={960} height={835} loading="lazy" decoding="async" className="aspect-[6/5] w-full rounded-[3px] object-cover" />
      </div></section>
      <section id="services" className="bg-ink py-20 text-ink-foreground sm:py-28"><div className={wrap}><h2 data-reveal className="text-3xl font-semibold sm:text-4xl">{c.servicesTitle}</h2><div className="mt-10 grid gap-x-16 md:grid-cols-2">{c.services.map(([title, desc]) => <div data-reveal key={title} className="border-b border-ink-border py-7"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-ink-muted">{desc}</p></div>)}</div></div></section>
      <section id="projects" className="py-20 sm:py-28"><div className={wrap}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><h2 className="text-3xl font-semibold sm:text-4xl">{c.projectsTitle}</h2><div className="flex flex-wrap gap-x-5 gap-y-2" role="group" aria-label={c.projectsTitle}>{(["all", "construction", "facades", "interiors"] as const).map((f) => <Button variant="ghost" key={f} aria-pressed={filter === f} onClick={() => { setFilter(f); setActive(null); }} className={`h-auto rounded-none border-b-2 px-0 pb-2 hover:bg-transparent hover:text-foreground ${filter === f ? "border-primary text-foreground" : "border-transparent text-muted-foreground"}`}>{c.filters[f]}</Button>)}</div></div>
        <div className="mt-10 columns-1 gap-8 sm:columns-2 lg:columns-3">{shown.map((p, i) => <figure data-reveal key={p.src} className="mb-9 break-inside-avoid"><Button variant="ghost" aria-label={p[lang]} className="project-photo block h-auto w-full overflow-hidden rounded-[3px] p-0 hover:bg-transparent" onClick={() => setActive(i)}><img src={p.src} alt={p[lang]} width={p.width} height={p.height} loading="lazy" decoding="async" className="h-auto w-full" /></Button><figcaption className="mt-3 text-[15px] text-muted-foreground">{p[lang]}</figcaption></figure>)}</div>
      </div></section>
      <section className="bg-ink text-ink-foreground"><div className="grid md:grid-cols-2"><img data-reveal src={regionImage} width={1080} height={939} alt={projects[0]?.[lang]} loading="lazy" className="aspect-[6/5] h-full w-full object-cover" /><div data-reveal className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20"><h2 className="max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">{c.regionsTitle}</h2><p className="mt-6 max-w-md text-lg leading-loose text-ink-muted">{c.regionsCities}</p></div></div></section>
      <section id="contact" className="py-20 sm:py-28"><div className={`${wrap} grid gap-12 lg:grid-cols-2 lg:gap-20`}>
        <div data-reveal><h2 className="text-3xl font-semibold sm:text-4xl">{c.contactTitle}</h2><p className="mt-5 max-w-lg text-muted-foreground">{c.contactText}</p><dl className="mt-8"><dt className="text-sm text-muted-foreground">{c.phone}</dt><dd className="mt-1 text-2xl"><a href={PHONE_HREF} dir="ltr" className="inline-block hover:underline">{PHONE}</a></dd><dt className="mt-7 text-sm text-muted-foreground">{c.office}</dt><dd className="mt-1">{c.officeVal}</dd></dl><Button asChild className={`${cta} mt-7`}><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">{c.whatsapp}<ArrowUpRight className="rtl:-scale-x-100" /></a></Button><div className="mt-8">{social}</div></div>
        <div><iframe src={CONTACT.embed} title={c.mapTitle} width="600" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="aspect-[5/3] w-full border-0" /><a href={CONTACT.map} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm hover:underline">{c.openMap}<ArrowUpRight size={16} className="rtl:-scale-x-100" /></a>
          <form className="mt-10" onSubmit={submit} noValidate><h3 className="text-xl font-semibold">{c.formTitle}</h3><div className="mt-5 grid gap-5 sm:grid-cols-2">{([['name',c.name,'text'],['phone',c.phone,'tel'],['city',c.city,'text']] as const).map(([id,label,type]) => <label key={id} className={id === 'city' ? 'sm:col-span-2' : ''}><span className="mb-2 block text-sm">{label}</span><input name={id} type={type} required autoComplete={id === 'phone' ? 'tel' : id === 'name' ? 'name' : 'address-level2'} aria-describedby={status === 'error' ? 'form-status' : undefined} /></label>)}<label className="sm:col-span-2"><span className="mb-2 block text-sm">{c.message}</span><textarea name="message" rows={4} required minLength={10} aria-describedby={status === 'error' ? 'form-status' : undefined} /></label></div><Button type="submit" className={`${cta} mt-5`}>{c.send}</Button>{status && <p id="form-status" role={status === 'error' ? 'alert' : 'status'} className={`mt-4 text-sm ${status === 'error' ? 'text-destructive' : 'text-foreground'}`}>{status === 'error' ? c.validation : c.success}</p>}</form>
        </div>
      </div></section>
    </main>
    <footer className="border-t border-border py-8"><div className={`${wrap} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}><img src={logo.url} width={872} height={621} alt={companyName} className="h-16 w-[90px] object-contain" /><div className="flex flex-col gap-3 text-sm"><a href={PHONE_HREF} dir="ltr" className="self-start hover:underline">{PHONE}</a>{social}</div><div className="text-sm text-muted-foreground"><p>{c.since}</p><p className="mt-1">© {companyName}</p></div></div></footer>
    {active !== null && <Gallery items={shown} index={active} setIndex={setActive} lang={lang} />}
  </div>;
}
