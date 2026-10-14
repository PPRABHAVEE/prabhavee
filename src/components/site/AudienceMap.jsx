import Link from "next/link";
import Img from "@/components/site/Img";
import { MEGA, PARTNER_GROUPS } from "@/content/site";

// Three audiences from the deck (slide 20): who they are, what they receive, and where to read more.
const PHOTOS = ["/img/ev/25-1.webp", "/img/jindal-jindal-1.webp", "/img/ev/17-1.webp"];
const ALTS = ["Participants at the amfori and Confederation of Indian Industry trade and sustainability workshop", "Participants at a workshop with the Jindal School of Journalism and Communication", "Participants at a P/ PRABHAVEE mentorship programme"];

export default function AudienceMap({ withPhotos = false }) {
  return (
    <div className="aud">
      {MEGA.columns.map((c, i) => (
        <article className="aud-card" key={c.heading}>
          {withPhotos ? <div className="aud-ph"><Img src={PHOTOS[i]} alt={ALTS[i]} sizes="(max-width: 880px) 100vw, 33vw" /></div> : null}
          <span className="kicker">0{i + 1}</span>
          <h3>{PARTNER_GROUPS[i].who}</h3>
          <span className="aud-h">What they receive</span>
          <ul className="aud-gets">{PARTNER_GROUPS[i].gets.map((g) => <li key={g}>{g}</li>)}</ul>
          <span className="aud-h">Where to start</span>
          <ul className="ticks ticks--sm">{c.links.map(([t, h]) => <li key={t}><Link href={h}>{t}</Link></li>)}</ul>
        </article>
      ))}
    </div>
  );
}
