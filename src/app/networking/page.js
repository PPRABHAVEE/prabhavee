import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Pending from "@/components/site/Pending";
import Img from "@/components/site/Img";
import { pageMeta } from "@/lib/meta";
import { LOGOS } from "@/content/site";
import deck from "@/content/deck.json";

export const metadata = pageMeta("Networks & collaborations", "Networks, mentorship roles and 45 strategic collaborations of P/ PRABHAVEE across the UN system, universities, industry bodies and civil society.", "/networking");

// Her feedback: these networks and memberships are past.
const PAST_MATCH = ["Young Leaders Council", "United Nations Global Compact Network India", "Indian Institute of Corporate Affairs (IICA)", "Indian Society for Training and Development"];
const PAST_EXTRA = ["Institute of Directors (IOD)", "Womennovator"];
const ROLES = [["Mentor", "Young Leaders Council (YLC), AIMA", "Leadership development"], ["Global mentor", "Womennovator, Global Incubator for Women", "Women empowerment"], ["Platform mentor", "G20 Women Entrepreneurship Platform (WEP), Niti Aayog, GoI", "Government initiative"], ["Industry mentor", "New Delhi Institute of Management (NDIM)", "Educational mentorship"], ["Working group member", "Anti-Corruption Collective Action Working Group, UNGCNI", "Anti-corruption initiative"]];

// Groups for the deck's list of collaborations (slides 31-33). Numbers are positions in deck.json.
const GROUPS = [
  ["UN system, standards & policy bodies", [0, 3, 11, 22, 24, 25, 28]],
  ["Universities, research centres & think tanks", [1, 6, 7, 8, 9, 12, 20, 30, 32, 34, 41, 42, 44]],
  ["Industry bodies, networks & platforms", [4, 10, 18, 19, 21, 23]],
  ["Companies & enterprise partners", [13, 15, 16, 17, 26, 27, 35]],
  ["Civil society & community organisations", [2, 5, 14, 29, 31, 33, 36, 37, 38, 39, 40, 43]],
];

export default function Networking() {
  const list = deck.collaborations;
  const isPast = (n) => PAST_MATCH.some((p) => n.startsWith(p));
  return (
    <>
      <PageIntro crumb="About / Networks & collaborations" title="Networks and strategic collaborations." lede="We work with leading organisations. Together we drive change and sustainable development across industries." image={{ src: "/img/banner-forum-speakers.webp", alt: "Four speakers in front of a presentation screen at the UN Responsible Business and Human Rights Forum", caption: "At the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok", position: "center 35%" }} />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Strategic collaborations</span><h2>Organisations we work with.</h2></div>
            <p>{list.length} organisations across the UN system, academia, industry bodies, research centres and civil society.</p>
          </div>
          <div className="logo-strip" style={{ marginBottom: 56 }}>
            <Img className="wide" src="/img/logos/un-agencies.png" alt="ILO, UN Women, IOM, UNEP, UNICEF, UN Human Rights and UNDP Business and Human Rights Asia" sizes="760px" />
            {LOGOS.map(([f, a]) => <Img key={f} src={`/img/logos/${f}.png`} alt={a} />)}
          </div>
          {GROUPS.map(([title, idx]) => (
            <div className="cat" key={title}>
              <div className="cat-h"><h3>{title}</h3><span>{idx.length} organisations</span></div>
              <ul className="collab">{idx.map((i) => <li key={list[i]}><span>{list[i]}</span>{isPast(list[i]) ? <span className="tag">Past</span> : null}</li>)}</ul>
            </div>
          ))}
          <Pending title="Grouping">The five groups are our own, applied to the deck’s list of 45. The deck gives no categories. Please confirm they are right.</Pending>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap split">
          <div><span className="eyebrow">Mentorship &amp; working groups</span><h2>Guiding the next generation.</h2><p>Roles Anumita Sarkar holds with partner organisations.</p></div>
          <ul className="ticks">
            {ROLES.map(([r, o, d]) => <li key={o}><b>{o}</b><br /><span style={{ color: "var(--muted)", fontSize: 15 }}>{r} · {d}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="sec">
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
