"use client";
import { useEffect, useRef } from "react";

// A section that stays fully open on desktop and folds behind a heading on phones and small tablets,
// so long lists do not make the page endless. Without JavaScript it simply stays open.
export default function Fold({ title, red = false, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 880px)");
    const apply = () => { if (ref.current) ref.current.open = !mq.matches; };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return (
    <details className={`fold${red ? " fold--red" : ""}`} ref={ref} open>
      <summary>{title}</summary>
      <div className="fold-body">{children}</div>
    </details>
  );
}
