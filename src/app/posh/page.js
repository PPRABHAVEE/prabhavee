import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import PillarTabs from "@/components/posh/PillarTabs";
import Pending from "@/components/site/Pending";
import { pageMeta } from "@/lib/meta";
import deck from "@/content/deck.json";

export const metadata = pageMeta("PoSH consultancy & services", "PoSH advisory, training, compliance and external member services under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.", "/posh");

// Retained from the current website (feedback: PoSH content is fine)
const PILLARS = [
  { kind: "consultation", title: "PoSH consultation", text: "Strategy development and foundational support to establish a legally sound framework.", items: ["Formation of PoSH Internal Committee", "Design and drafting of PoSH policy", "Annual report filing support", "Drafting and documentation", "Inquiry proceedings and report drafting support", "PoSH audit: documentation, compliance, developing standard operating procedures (SOP) and other procedures followed by an organisation", "Ongoing guidance, insights and recommendations", "Legal and compliance support"] },
  { kind: "training", title: "PoSH certification", text: "Accreditation and training programmes for individuals and various organisational entities.", items: ["PoSH certification for individuals (open to all)", "Train the Trainer (ToT) certification", "PoSH training programmes for early-stage NGOs, sector-specific NGOs, corporate foundations, companies, for-profit entities and Section 8 companies"] },
  { kind: "training", title: "PoSH capacity building", text: "Focused training to empower internal stakeholders with practical knowledge.", items: ["Capacity building for Internal Committee members, targeted at corporates, for-profit organisations and non-profit organisations"] },
  { kind: "support", title: "External member services", text: "Continuous legal, advisory and hands-on support for ongoing compliance, including quarterly legal and advisory support on different aspects of PoSH implemented by the company.", items: ["Expert legal knowledge (guidance on the application of the provisions of the Act and rules)", "Support with policy development strategies, drafting, reviewing, recommendations and ongoing compliance", "Assist in handling complaints, cases, interviews, documentation and reports", "Support in delivering training within the organisation", "Participate in capacity-building initiatives as an IC external member", "Ongoing legal support and advisory services to the organisation"] },
];
const WHY = [["End-to-end PoSH support", "From policy drafting and Internal Committee (IC) constitution to capacity building, inquiry support and annual compliance."], ["Contextualised and inclusive approach", "Frameworks and training customised to your organisation’s context and workforce."], ["Effective and engaging trainings", "Interactive, scenario-based sessions that build awareness, accountability and confidence."], ["IC capacity building and advisory", "Support to strengthen IC functioning, inquiries and decision-making."]];

export default function Posh() {
  return (
    <>
      <PageIntro crumb="Services / PoSH consultancy & services" title="Safeguarding workplaces with integrity." lede="Empowering organisations to create inclusive, legally compliant and safe workplace environments. Our PoSH services are anchored in deep legal expertise and go beyond theoretical training to practical, implementable solutions." />
      <section className="sec">
        <div className="wrap split">
          <div><span className="eyebrow">The law</span><h2>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</h2>
            <p>Anumita Sarkar is registered with the Ministry of Women &amp; Child Development, Government of India, and serves as an External Member of PoSH Internal Committees.</p></div>
          <div className="cols-2" style={{ gap: "0 36px" }}>{WHY.map(([h, t]) => <div className="row row--plain" key={h} style={{ borderTop: "2px solid var(--green)" }}><div><h3>{h}</h3><p>{t}</p></div></div>)}</div>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Our core service pillars</span><h2>Choose the support your organisation needs.</h2></div></div>
          <PillarTabs pillars={PILLARS} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="figs figs--4" style={{ marginBottom: 54 }}>
            <div><b>70+</b><span>organisations empowered through PoSH training</span></div>
            <div><b>15+</b><span>participants at the July 2026 mid-year PoSH review roundtable</span></div>
            <div><b>1150+</b><span>individuals trained</span></div>
            <div><b>3</b><span>PoSH PRO programmes with Yellow Spark</span></div>
          </div>
          <details className="list">
            <summary>Organisations we have trained ({deck.poshClients.length})</summary>
            <ul className="cols-list">{deck.poshClients.map((c) => <li key={c}>{c}</li>)}</ul>
          </details>
          <Pending title="Counts">70+ is the deck PDF figure; the PowerPoint says 60+ and the list of names has {deck.poshClients.length} distinct organisations. Confirm which to publish.</Pending>
          <div className="cols-2" style={{ marginTop: 50 }}>
            <div><h3 style={{ fontSize: 24 }}>Mid-year PoSH review consultation</h3><p>Safe Workplaces by Design: a leadership imperative in risk governance. Reframing PoSH beyond a compliance mandate as part of organisational risk governance, designing safety and accountability, and reading PoSH through the ESG and BRSR lens.</p><a className="link" href="/docs/building-better-governance-2026.pdf" target="_blank" rel="noopener">Read the outcomes report (PDF)</a></div>
            <div><h3 style={{ fontSize: 24 }}>PoSH PRO programmes</h3><p>Two-day online programmes on PoSH and its application at the workplace, co-organised with Yellow Spark.</p><Link className="link" href="/posh_workshop">About PoSH Pro</Link> &nbsp; <a className="link" href="/docs/prabhavee-posh-brochure.pdf" download>PoSH brochure (PDF)</a></div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
