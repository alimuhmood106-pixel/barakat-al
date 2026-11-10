import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

/** Below-the-fold photo: sits in its reserved box, then fades in once it has loaded. */
export function FadeImg({ className = "", alt, ...props }: ImgHTMLAttributes<HTMLImageElement> & { alt: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);
  return <img ref={ref} alt={alt} loading="lazy" decoding="async" onLoad={() => setLoaded(true)} className={`fade-img ${loaded ? "is-loaded" : ""} ${className}`} {...props} />;
}
