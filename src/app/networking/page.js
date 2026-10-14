import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Pending from "@/components/site/Pending";
import { pageMeta } from "@/lib/meta";
import deck from "@/content/deck.json";

export const metadata = pageMeta("Networks & collaborations", "The networks, memberships and strategic collaborations of P/ PRABHAVEE.", "/networking");

// Her feedback: these six are past networks and memberships.
const PAST_MATCH = ["Young Leaders Council", "United Nations Global Compact Network India", "Indian Institute of Corporate Affairs (IICA)", "Indian Society for Training and Development"];
const PAST_EXTRA = ["Institute of Directors (IOD)", "Womennovator"];
const ROLES = [["Mentor", "Young Leaders Council (YLC), AIMA", "Leadership development"], ["Global mentor", "Womennovator, Global Incubator for Women", "Women empowerment"], ["Platform mentor", "G20 Women Entrepreneurship Platform (WEP), Niti Aayog, GoI", "Government initiative"], ["Industry mentor", "New Delhi Institute of Management (NDIM)", "Educational mentorship"], ["Working group member", "Anti-Corruption Collective Action Working Group, UNGCNI", "Anti-corruption initiative"]];
const LOGOS = [["yellow-spark", "Yellow Spark"], ["sustaim", "Sustaim Consulting"], ["jsjc", "Jindal School of Journalism and Communication"], ["new-imaginations", "New Imaginations"], ["cbhr-tnnlu", "Centre for Business and Human Rights, TNNLU"], ["tnnlu", "Tamil Nadu National Law University"]];

export default function Networking() {
  const isPast = (n) => PAST_MATCH.some((p) => n.startsWith(p) || n === p);
  return (
    <>
      <PageIntro crumb="About / Networks & collaborations" title="Networks and strategic collaborations." lede="We work with leading organisations. Together we drive change and sustainable development across industries." />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Strategic collaborations</span><h2>Organisations we work with.</h2></div><p>{deck.collaborations.length} organisations across the UN system, academia, industry bodies, research centres and civil society.</p></div>
          <div className="logo-strip" style={{ marginBottom: 50 }}>
            <img className="wide" src="/img/logos/un-agencies.png" alt="ILO, UN Women, IOM, UNEP, UNICEF, UN Human Rights and UNDP Business and Human Rights Asia" />
            {LOGOS.map(([f, a]) => <img key={f} src={`/img/logos/${f}.png`} alt={a} />)}
          </div>
          <ul className="collab">{deck.collaborations.map((c) => <li key={c}><span>{c}</span>{isPast(c) ? <span className="tag">Past</span> : null}</li>)}</ul>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div><span className="eyebrow">Mentorship &amp; working groups</span><h2>Guiding the next generation.</h2><p>Roles Anumita Sarkar holds with partner organisations.</p></div>
          <ul className="ticks">
            {ROLES.map(([r, o, d]) => <li key={o}><b>{o}</b><br /><span style={{ color: "var(--muted)", fontSize: 15 }}>{r} · {d}</span></li>)}
          </ul>
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap split">
          <div><span className="eyebrow">Past networks &amp; memberships</span><h2>Where we have been members.</h2></div>
          <div>
            <ul className="ticks">
              <li>Young Leaders Council (YLC), All India Management Association (AIMA)</li>
              <li>UN Global Compact Network India (UNGCNI)</li>
              <li>Indian Institute of Corporate Affairs (IICA)</li>
              <li>Indian Society for Training and Development (ISTD), Delhi Chapter</li>
              {PAST_EXTRA.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <Pending title="UNGCNI">She marked UNGCNI as past, but the founder profile says she has been a member of its Anti-Corruption Collective Action Working Group since 2022. Confirm.</Pending>
          </div>
        </div>
      </section>
      <CtaBand next={["See strategic milestones", "/journey"]} />
    </>
  );
}
