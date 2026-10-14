import { PILLARS } from "@/content/site";

// The 5-pillar approach to impact, drawn as five pillars under one roof.
export default function PillarsGraphic() {
  return (
    <div className="pillars">
      <div className="pillars-roof">Lasting impact</div>
      <ol className="pillars-cols">
        {PILLARS.map((p, i) => (
          <li key={p}><span className="pillars-n">0{i + 1}</span><b>{p}</b></li>
        ))}
      </ol>
      <div className="pillars-base">Strategic capacity building</div>
    </div>
  );
}
