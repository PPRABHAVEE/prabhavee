import { JOURNEY } from "@/content/site";

// Seven points, 2022 to 2026, on one line (stacks on phones).
export default function JourneyStrip() {
  return (
    <ol className="jr" aria-label="Our journey, 2022 to 2026">
      {JOURNEY.map((j) => (
        <li key={j.t + j.y} className={j.upcoming ? "is-upcoming" : undefined}>
          <span className="jr-y">{j.y}{j.upcoming ? <em className="badge">UPCOMING</em> : null}</span>
          <b className="jr-t">{j.t}</b>
          <span className="jr-d">{j.d}</span>
        </li>
      ))}
    </ol>
  );
}
