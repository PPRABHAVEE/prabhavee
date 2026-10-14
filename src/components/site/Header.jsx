"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, MEGA, SITE } from "@/content/site";

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

  // Escape closes an open dropdown or mega-menu and returns focus to its top-level link.
  const closeMenus = (e) => {
    if (e.key !== "Escape") return;
    const dd = e.target.closest?.(".dd");
    if (dd) { dd.querySelector(":scope > a")?.focus(); e.target.blur?.(); dd.classList.add("is-dismissed"); setTimeout(() => dd.classList.remove("is-dismissed"), 400); }
  };
  const on = (href) => (path === href ? "page" : undefined);
  const groupOn = (g) => (path === g.href || g.items.some(([, h]) => h === path) ? "page" : undefined);

  return (
    <>
      <aside className="util" aria-label="Registration and contact details">
        <div className="util-in">
          <span>{SITE.registered}</span>
          <span className="util-links">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.linkedinCompany} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </div>
      </aside>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header-in">
          <Link className="brand" href="/">
            <span className="brand-mark">P/</span>
            <span><b className="brand-name">PRABHAVEE</b><small className="brand-sub">PARTNER FOR SOCIAL IMPACT</small></span>
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
          <nav id="site-nav" className={`nav${open ? " open" : ""}`} aria-label="Main navigation" onKeyDown={closeMenus}>
            {NAV.map((g) => {
              if (g.label === "Services") {
                return (
                  <div className="dd dd--mega" key={g.label}>
                    <Link href={g.href} aria-current={groupOn(g)}>{g.label}</Link>
                    <div className="mega">
                      <div className="mega-in">
                        <p className="mega-intro">{MEGA.intro}</p>
                        <div className="mega-cols">
                          {MEGA.columns.map((c) => (
                            <div key={c.heading}>
                              <span className="mega-h">{c.heading}</span>
                              {c.links.map(([t, h]) => <Link key={t} href={h}>{t}</Link>)}
                            </div>
                          ))}
                        </div>
                        <div className="mega-foot">{MEGA.footer.map(([t, h]) => <Link key={t} href={h}>{t}</Link>)}</div>
                      </div>
                    </div>
                  </div>
                );
              }
              return g.items.length ? (
                <div className="dd" key={g.label}>
                  <Link href={g.href} aria-current={groupOn(g)}>{g.label}</Link>
                  <div className="sub">{g.items.map(([t, h]) => <Link key={h} href={h} aria-current={on(h)}>{t}</Link>)}</div>
                </div>
              ) : (
                <Link key={g.label} href={g.href} aria-current={on(g.href)}>{g.label}</Link>
              );
            })}
            <Link className="btn btn--sm" href="/contact">Contact us</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
