import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lang, Project } from "./content";
import { t } from "./content";

export function Gallery({ items, index, setIndex, lang }: { items: Project[]; index: number; setIndex: (i: number | null) => void; lang: Lang }) {
  const ref = useRef<HTMLDialogElement>(null);
  const touch = useRef<number | null>(null);
  const c = t[lang];
  const rtl = lang !== "en";
  const move = (step: number) => setIndex((index + step + items.length) % items.length);
  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    ref.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; if (previous instanceof HTMLElement) previous.focus(); };
  }, []);
  const item = items[index];
  if (!item) return null;
  return <dialog ref={ref} className="photo-dialog" aria-label={item[lang]} onCancel={() => setIndex(null)} onClick={(e) => { if (e.target === e.currentTarget) setIndex(null); }} onKeyDown={(e) => { if (e.key === "ArrowRight") { e.preventDefault(); move(rtl ? -1 : 1); } if (e.key === "ArrowLeft") { e.preventDefault(); move(rtl ? 1 : -1); } }}>
    <Button variant="ghost" size="icon" className="lightbox-close" aria-label={c.close} onClick={() => setIndex(null)}><X /></Button>
    <div className="lightbox-content" onTouchStart={(e) => { touch.current = e.changedTouches[0]?.clientX ?? null; }} onTouchEnd={(e) => { const end = e.changedTouches[0]?.clientX; if (touch.current !== null && end !== undefined && Math.abs(touch.current - end) > 45) move((touch.current > end ? 1 : -1) * (rtl ? -1 : 1)); touch.current = null; }}>
      <img src={item.src} width={item.width} height={item.height} alt={item[lang]} />
      <div className="flex items-center justify-between gap-4 pt-4"><Button variant="ghost" size="icon" aria-label={c.previous} onClick={() => move(-1)}>{rtl ? <ArrowRight /> : <ArrowLeft />}</Button><p className="text-center">{item[lang]}</p><Button variant="ghost" size="icon" aria-label={c.next} onClick={() => move(1)}>{rtl ? <ArrowLeft /> : <ArrowRight />}</Button></div>
    </div>
  </dialog>;
}