"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const PER = 6;

function Lightbox({ gal, onClose }) {
  const [i, setI] = useState(gal.i);
  const closeRef = useRef(null);
  const n = gal.photos.length;
  const step = useCallback((d) => setI((x) => (x + d + n) % n), [n]);

  useEffect(() => {
    const prevFocus = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = overflow; prevFocus?.focus?.(); };
  }, [onClose, step]);

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`Photos: ${gal.title}`} onClick={onClose}>
      <div className="lb-in" onClick={(e) => e.stopPropagation()}>
        <img src={gal.photos[i]} alt={`${gal.title}, photo ${i + 1} of ${n}`} />
        <div className="lb-bar">
          <span>{gal.title}<small>{i + 1} / {n}</small></span>
          <span className="lb-btns">
            {n > 1 ? <><button type="button" onClick={() => step(-1)} aria-label="Previous photo">‹</button><button type="button" onClick={() => step(1)} aria-label="Next photo">›</button></> : null}
            <button type="button" ref={closeRef} onClick={onClose} aria-label="Close photos">Close</button>
          </span>
        </div>
      </div>
    </div>
  );
}

function Tile({ ev, onOpen }) {
  const links = [
    ...ev.links.map((l) => ({ href: l, label: l.includes("youtube") ? "Watch" : "Read more" })),
    ...(ev.doc ? [{ href: ev.doc.href, label: ev.doc.label }] : []),
  ];
  const photos = ev.photos && ev.photos.length ? ev.photos : ev.photo ? [ev.photo] : [];
  return (
    <article className={`ev${photos.length ? " has-ph" : ""}`}>
      {photos.length ? (
        <button type="button" className="ph" onClick={(e) => onOpen({ photos, i: 0, title: ev.title }, e.currentTarget)} aria-label={`View ${photos.length} ${photos.length === 1 ? "photo" : "photos"}: ${ev.title}`}>
          <img src={photos[0]} alt="" loading="lazy" />
          {photos.length > 1 ? <span className="ph-n">{photos.length} photos</span> : <span className="ph-n">View photo</span>}
        </button>
      ) : null}
      <div className="meta">
        {ev.upcoming ? <span className="badge">UPCOMING</span> : null}
        <span>{ev.year}</span><i>/</i><span>{ev.type}</span>
      </div>
      <h3>{ev.title}</h3>
      <p className="role">{ev.role}</p>
      {links.length ? <div className="links">{links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}</div> : null}
    </article>
  );
}

export default function EventsExplorer({ events }) {
  const cats = useMemo(() => [...new Set(events.map((e) => e.category))].sort(), [events]);
  const years = useMemo(() => [...new Set(events.flatMap((e) => e.year.match(/20\d\d/g) || []))].sort().reverse(), [events]);
  const [cat, setCat] = useState("");
  const [year, setYear] = useState("");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [gal, setGal] = useState(null);
  const closeGal = useCallback(() => setGal(null), []);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("cat")) setCat(p.get("cat"));
    if (p.get("year")) setYear(p.get("year"));
  }, []);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return events.filter((e) =>
      (!cat || e.category === cat) &&
      (!year || (e.year.match(/20\d\d/g) || []).includes(year)) &&
      (!s || `${e.title} ${e.type} ${e.role}`.toLowerCase().includes(s)));
  }, [events, cat, year, q]);

  const pages = Math.max(1, Math.ceil(list.length / PER));
  const cur = Math.min(page, pages);
  const shown = list.slice((cur - 1) * PER, cur * PER);
  const go = (p) => { setPage(p); document.getElementById("ev-grid")?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const reset = (fn) => (e) => { fn(e.target.value); setPage(1); };

  return (
    <div className="wrap">
      {gal ? <Lightbox gal={gal} onClose={closeGal} /> : null}
      <div className="filters">
        <div><label htmlFor="f-cat">Type of engagement</label>
          <select id="f-cat" value={cat} onChange={reset(setCat)}><option value="">All types</option>{cats.map((c) => <option key={c}>{c}</option>)}</select></div>
        <div><label htmlFor="f-year">Year</label>
          <select id="f-year" value={year} onChange={reset(setYear)}><option value="">All years</option>{years.map((y) => <option key={y}>{y}</option>)}</select></div>
        <div><label htmlFor="f-q">Search</label>
          <input id="f-q" type="search" value={q} onChange={reset(setQ)} placeholder="Forum, role, organisation" /></div>
        <span className="count" aria-live="polite">{list.length} {list.length === 1 ? "engagement" : "engagements"}</span>
      </div>
      <div className="ev-grid" id="ev-grid">{shown.map((e) => <Tile key={e.n} ev={e} onOpen={setGal} />)}</div>
      {list.length === 0 ? <p className="empty">No engagements match these filters.</p> : null}
      {pages > 1 ? (
        <div className="pager" aria-label="Pages">
          <button type="button" disabled={cur === 1} onClick={() => go(cur - 1)}>Previous</button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button type="button" key={n} aria-label={`Page ${n}`} aria-current={n === cur ? "true" : undefined} onClick={() => go(n)}>{n}</button>
          ))}
          <button type="button" disabled={cur === pages} onClick={() => go(cur + 1)}>Next</button>
        </div>
      ) : null}
    </div>
  );
}
