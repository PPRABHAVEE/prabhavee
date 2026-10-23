import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Pending from "@/components/site/Pending";
import Img from "@/components/site/Img";
import PhotoBand from "@/components/site/PhotoBand";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Resources", "Videos, brochures, reports and submissions from P/ PRABHAVEE: the GCNI impact report, PoSH governance outcomes, and EU and UN consultation inputs.", "/resources");

const VIDS = [
  ["UN Responsible Business and Human Rights Forum", "ux0yvv89Pl0", "Spotlight session on corruption and human rights: integrating anti-corruption into HRDD (Bangkok, 14–17 September 2026)."],
  ["Young Leaders Council, AIMA", "IBE52ZSN69U", "Online session: India’s Economic Growth: Powered by Innovation and Fair Play (moderator, 2025)"],
  ["Jindal School of Journalism and Communication", "Nsdxj1KCyIM", "The Business of Human Rights: unpacking linkages between corporate accountability, rights-based frameworks and the Fourth Estate (2026)"],
  ["Centre for Business and Human Rights, TNNLU", "3776A3TawDs", "Multi-stakeholder dialogue series: Local Economies, Global Values: MSMEs Driving Gender Equity in South India (2025)"],
];
const BROCHURES = [["P/ PRABHAVEE brochure", "Empowering organisations through strategic advisory, capacity building, facilitation and strategic programmes.", "prabhavee-brochure.pdf"], ["PoSH: advisory, training, compliance & litigation support", "End-to-end PoSH support for workplaces.", "prabhavee-posh-brochure.pdf"]];
const REPORTS = [
  ["GCNI ACCA Project Impact Report", "Global Compact Network India · June 2025 · Siemens Integrity Initiative. Anumita contributed to country network surveys and interviews as a working-group member.", "gcni-acca-project-impact-report-2025.pdf", "GCNI · 2025", "https://globalcompact.in/wp-content/uploads/2025/06/GCNI-TFR-Project-Impact-Report.pdf"],
  ["Building Better Governance: Consultation Outcomes Report", "Mid-year PoSH review: Safe Workplaces by Design · P/ PRABHAVEE · August 2026.", "building-better-governance-2026.pdf", "P/ PRABHAVEE · 2026"],
  ["Anti-Corruption Collective Action Playbook Training: Workshop Report", "UN Global Compact Network India · September 2022. Anumita participated in the training.", "acca-playbook-workshop-report-2022.pdf", "UNGCNI · 2022"],
];
const EXT = [
  ["Forced labour: guidelines on the implementation of the EU rules", "European Commission public consultation, 2026", "https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/16292-Forced-labour-guidelines-on-the-implementation-of-the-EU-rules/F33378062_en"],
  ["Corporate Sustainability Due Diligence: development of guidelines", "European Commission public consultation, 2026", "https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14445-Corporate-sustainability-due-diligence-development-of-guidelines/public-consultation_en"],
  ["Submission to the UN Working Group on Business and Human Rights", "Call for inputs for the 81st session of the UN General Assembly: Corporate Governance, Business and Human Rights", "https://www.ohchr.org/sites/default/files/documents/issues/business/cfis/ga81/subm-corporate-governance-business-priv-sect-13-p-prabhavee-partner-social-impa-mpact.pdf"],
  ["Power Dynamics and ‘Consent’ in Hierarchical Workplaces: Rethinking Research Ethics in Higher Education", "Published by eLearnPOSH, 2026", "https://elearnposh.com/tag/posh/"],
  ["Second Ideation Meeting report: anti-corruption strategies and ethical business practices in MSMEs", "UN Global Compact Network India, 2023", "https://globalcompact.in/wp-content/uploads/2023/09/GS_Second-Ideation-Meeeting-Report.pdf"],
];

export default function Resources() {
  return (
    <>
      <PageIntro compact crumb="Engagements / Resources" title="Videos, brochures, reports and submissions." lede="Watch our sessions. Download our brochures. Read the reports and submissions we have contributed to." />
      <PhotoBand natural src="/img/banner-excellence-in-multi-stakeholder-2.webp" alt="A collage of P/ PRABHAVEE workshops, consultations and convenings, and of the supply chains they address" caption="Workshops, consultations and convenings across our partners" />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Videos</span><h2>Watch and listen.</h2></div></div>
          <div className={`res-grid${VIDS.length % 3 === 1 ? " res-grid--4" : ""}`}>
            {VIDS.map(([t, id, d]) => (
              <div className="res" key={id}>
                <a className="th" href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer"><img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" /><span className="badge">WATCH</span></a>
                <div className="res-body"><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Brochures</span><h2>Download.</h2></div></div>
          <div className="res-grid res-grid--2">{BROCHURES.map(([t, d, f]) => <div className="res res--wide" key={f}><div className="cover"><span>P/</span><small>PARTNER FOR SOCIAL IMPACT · PDF</small></div><div className="res-body"><h3>{t}</h3><p>{d}</p><a className="link" href={`/docs/${f}`} download>Download brochure</a></div></div>)}</div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Publications &amp; reports</span><h2>Reports.</h2></div></div>
          <div className="res-grid">{REPORTS.map(([t, d, f, tag, url]) => <div className="res" key={f}><a className="docth" href={url || `/docs/${f}`} target="_blank" rel="noopener noreferrer" aria-label={`Open ${t} (PDF)`}><Img src={`/img/covers/${f.replace(".pdf", "")}.webp`} alt={`Cover of ${t}`} sizes="(max-width: 620px) 70vw, 280px" /></a><div className="res-body"><span className="kicker">{tag}</span><h3>{t}</h3><p>{d}</p><a className="link" href={url || `/docs/${f}`} target="_blank" rel="noopener noreferrer">Read the report (PDF)</a></div></div>)}</div>
          <Pending title="Missing report">The P/ PRABHAVEE and YLC AIMA report named in her feedback was not among the files received.</Pending>
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">External links</span><h2>Consultations &amp; submissions.</h2></div></div>
          <ol className="extlist">{EXT.map(([t, d, u], i) => <li key={u}><span className="ext-n">{String(i + 1).padStart(2, "0")}</span><div><b>{t}</b><small>{d}</small></div><a className="ext-open" href={u} target="_blank" rel="noopener noreferrer">Open<span className="sr-only"> {t} (opens in a new tab)</span></a></li>)}</ol>
        </div>
      </section>
      <CtaBand next={["See the practice areas", "/services"]} />
    </>
  );
}
