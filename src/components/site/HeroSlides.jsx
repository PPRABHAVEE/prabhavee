"use client";
import { useEffect, useState } from "react";

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
          alt={n === s.i ? alt : ""}
          aria-hidden={n === s.i ? undefined : true}
          className={`slide${n === s.i ? " is-active" : n === s.prev ? " is-prev" : ""}`}
          fetchPriority={n === 0 ? "high" : undefined}
        />
      ))}
    </div>
  );
}
