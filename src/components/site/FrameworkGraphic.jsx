import { APPROACH, FRAMEWORK_SHORT } from "@/content/site";

// Articulation → Alignment → Actualisation (deck slides 11-14) as three linked stages.
export default function FrameworkGraphic() {
  return (
    <ol className="fw" aria-label="The 3-part framework">
      {APPROACH.map((a, i) => (
        <li className="fw-step" key={a.k}>
          <span className="fw-n">0{i + 1}</span>
          <b className="fw-k">{a.k}</b>
          <span className="fw-s">{FRAMEWORK_SHORT[i]}</span>
          <span className="fw-c">{a.steps.length} steps</span>
        </li>
      ))}
    </ol>
  );
}
