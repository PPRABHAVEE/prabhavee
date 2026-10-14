"use client";
import { useEffect, useState } from "react";
import dims from "@/content/img-dims.json";

// Slow crossfade between real event photos. The incoming photo fades in over the outgoing one
// (which stays fully opaque underneath), so the picture never dips to the background colour.
// Reduced-motion visitors see the first photo only.
export default function HeroSlides({ slides, interval = 8000 }) {
  const [s, setS] = useState({ i: 0, prev: -1 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || slides.length < 2) return;
    const t = setInterval(() => setS((c) => ({ i: (c.i + 1) % slides.length, prev: c.i })), interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);

  return (
    <div className="hero-media">
      {slides.map(([src, alt], n) => (
        <img
          key={src}
          src={src}
          srcSet={dims[src.replace(".webp", "-sm.webp")] ? `${src.replace(".webp", "-sm.webp")} 640w, ${src} 1400w` : undefined}
          sizes="(max-width: 880px) 100vw, 48vw"
          width={dims[src]?.[0]}
          height={dims[src]?.[1]}
          loading={n === 0 ? undefined : "eager"}
          decoding="async"
          alt={n === s.i ? alt : ""}
          aria-hidden={n === s.i ? undefined : true}
          className={`slide${n === s.i ? " is-active" : n === s.prev ? " is-prev" : ""}`}
          fetchPriority={n === 0 ? "high" : undefined}
        />
      ))}
    </div>
  );
}
