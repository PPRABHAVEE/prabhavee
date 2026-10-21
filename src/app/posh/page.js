import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import PillarTabs from "@/components/posh/PillarTabs";
import PhotoBand from "@/components/site/PhotoBand";
import Img from "@/components/site/Img";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("PoSH training & compliance support", "PoSH advisory, training, compliance and external member services under the Sexual Harassment of Women at Workplace Act, 2013.", "/posh");

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
      <PageIntro crumb="Services / PoSH training & compliance support" title="Safeguarding workplaces with integrity." lede="We help organisations create inclusive, legally compliant and safe workplaces. Our PoSH services rest on deep legal expertise. They go beyond theory to practical, workable solutions." />
      <section className="sec">
        <div className="wrap split">
          <span className="eyebrow">The law</span>
          <div><h2>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</h2>
            <p>Anumita Sarkar is registered with the Ministry of Women &amp; Child Development, Government of India. She serves as an External Member of PoSH Internal Committees.</p></div>
          <div className="cols-2" style={{ gap: "0 36px" }}>{WHY.map(([h, t]) => <div className="row row--plain" key={h} style={{ borderTop: "2px solid var(--green)" }}><div><h3>{h}</h3><p>{t}</p></div></div>)}</div>
        </div>
      </section>

      <PhotoBand src="/img/ndim-posh-ndim-3.webp" alt="Faculty and staff at a PoSH training session at the New Delhi Institute of Management" caption="PoSH training for faculty and staff, New Delhi Institute of Management" position="center 55%" />
      <section className="sec sec--mist" style={{ marginTop: 44 }}>
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Our core service pillars</span><h2>Choose the support your organisation needs.</h2></div></div>
          <PillarTabs pillars={PILLARS} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="figs figs--4" style={{ marginBottom: 34 }}>
            <div><b>70+</b><span>organisations empowered through PoSH training</span></div>
            <div><b>15+</b><span>participants at the July 2026 mid-year PoSH review roundtable</span></div>
            <div><b>1150+</b><span>individuals trained</span></div>
            <div><b>9</b><span>flagship programmes convened and hosted, 2025–26</span></div>
          </div>
          <div className="cols-2 posh-programmes" style={{ marginTop: 32 }}>
            <Img src="/img/banner-governance-poster.webp" alt="Poster: Annual Roundtable 2026, Safe Workplaces by Design, a leadership imperative in risk governance" sizes="(max-width: 880px) 100vw, 320px" style={{ width: 240, marginBottom: 22 }} /><div><h3>Mid-year PoSH review consultation</h3><p>Reframes PoSH as a strategic governance priority rather than a compliance obligation, exploring workplace grey zones, organisational risk areas and Internal Committee accountability. Examines PoSH through an ESG and BRSR lens, highlighting its growing relevance as investor-visible governance data and a measure of organisational responsibility and accountability.</p><a className="link" href="/docs/building-better-governance-2026.pdf" target="_blank" rel="noopener">Read the outcomes report (PDF)</a></div>
            <div><h3>PoSH PRO programmes</h3><p>Two-day online programmes on PoSH at the workplace, co-organised with Yellow Spark.</p><a className="link" href="/docs/prabhavee-posh-brochure.pdf" download>PoSH brochure (PDF)</a></div>
          </div>
        </div>
      </section>
      <CtaBand next={["See our engagements", "/events"]} />
    </>
  );
}
