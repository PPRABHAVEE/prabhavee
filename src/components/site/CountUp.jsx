"use client";
import { useEffect, useRef, useState } from "react";

// Counts a figure such as "1150+" or "12" up once, when it first scrolls into view.
// Server-rendered text is the final value, so the page is complete without JavaScript or with reduced motion.
export default function CountUp({ value }) {
  const m = String(value).match(/^(\D*)([\d,]+)(.*)$/);
  const ref = useRef(null);
  const [shown, setShown] = useState(null);
  useEffect(() => {
    if (!m || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const end = parseInt(m[2].replace(/,/g, ""), 10);
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 2000;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 4);
        setShown(Math.round(end * eased));
        if (p < 1) requestAnimationFrame(tick); else setShown(null);
      };
      setShown(0); requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  if (!m) return <span>{value}</span>;
  const fmt = (n) => (m[2].includes(",") ? n.toLocaleString("en-IN") : String(n));
  return <span ref={ref}>{m[1]}{shown === null ? m[2] : fmt(shown)}{m[3] ? <span className="sfx">{m[3]}</span> : null}</span>;
}
