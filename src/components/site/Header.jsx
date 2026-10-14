"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/content/site";

export default function Header() {
  const path = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  const on = (href) => (path === href ? "page" : undefined);
  const groupOn = (g) => (path === g.href || g.items.some(([, h]) => h === path) ? "page" : undefined);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-in">
        <Link className="brand" href="/" aria-label="P/ PRABHAVEE home">
          <span className="brand-mark">P/</span>
          <span><b className="brand-name">PRABHAVEE</b><small className="brand-sub">PARTNER FOR SOCIAL IMPACT</small></span>
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <nav id="site-nav" className={`nav${open ? " open" : ""}`} aria-label="Main navigation">
          {NAV.map((g) =>
            g.items.length ? (
              <div className="dd" key={g.label}>
                <Link href={g.href} aria-current={groupOn(g)}>{g.label}</Link>
                <div className="sub">
                  {g.items.map(([t, h]) => <Link key={h} href={h} aria-current={on(h)}>{t}</Link>)}
                </div>
              </div>
            ) : (
              <Link key={g.label} href={g.href} aria-current={on(g.href)}>{g.label}</Link>
            )
          )}
          <Link className="btn btn--sm" href="/contact">Contact us</Link>
        </nav>
      </div>
    </header>
  );
}
