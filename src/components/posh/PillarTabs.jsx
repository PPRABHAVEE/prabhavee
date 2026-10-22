"use client";
import { useState } from "react";

export default function PillarTabs({ pillars }) {
  const [f, setF] = useState("all");
  const tabs = [["all", "All"], ["consultation", "Consultation"], ["training", "Training"], ["support", "Support"]];
  return (
    <>
      <div className="tabs" role="group" aria-label="Filter service pillars">
        {tabs.map(([k, l]) => <button key={k} type="button" aria-pressed={f === k} onClick={() => setF(k)}>{l}</button>)}
      </div>
      {pillars.filter((p) => f === "all" || p.kind === f).map((p) => (
        <section className="plr" key={p.title}>
          <div className="plr-side">
            <span className="plr-kind">{p.kind === "consultation" ? "Consultation" : p.kind === "training" ? "Training" : "Support"}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
          <ul className="plr-items">{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </section>
      ))}
    </>
  );
}
