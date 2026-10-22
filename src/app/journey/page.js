import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Img from "@/components/site/Img";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Strategic milestones", "Milestones of P/ PRABHAVEE from its 2022 founding at NSRCEL, IIM Bangalore, to research initiatives, partnerships and global forums, with stakeholder engagement.", "/journey");

// Retained from the current website (feedback: keep as its own page; merge stakeholder engagement before May 2025)
const MS = [
  ["May 2022", "Foundation · Online", "Conceptualised at NSRCEL", "The beginning of our vision", "P/ PRABHAVEE – Partner for Social Impact was conceptualised at the NSRCEL Women Startup Program 2022 (IIM Bangalore)."],
  ["September 2024", "Leadership · Odisha", "Advisory board appointment", "Strategic leadership", "P/ PRABHAVEE’s Founding Lawyer, Anumita Sarkar, joined Advisory Board of Darbar Sahitya Sansada (DSS), a grassroots NGO based in Odisha, marking our commitment to grassroots development and social impact.", ["/img/ev/20-1.webp", "An executive body meeting of Darbar Sahitya Sansada"]],
  ["September 2024", "Delegate · Bangkok, Thailand", "International conference", "Global engagement", "Delegate at the 5-day International Conference ‘United Nations Responsible Business and Human Rights Forum, Asia-Pacific 2024’ in Bangkok, engaging with stakeholder representatives from South Asia and Asia-Pacific countries.", ["/img/ev/1-1.webp", "The venue of the UN Responsible Business and Human Rights Forum, Asia-Pacific 2024, Bangkok"]],
  ["November 2024", "Delegate · In-person", "Dialogue on Development Management", "Platform delegate", "P/ PRABHAVEE took part in ISDM’s annual flagship event ‘Dialogue on Development Management’. Anumita also completed the Women on Boards Program (WoB) from the Indian School of Development Management (ISDM), Cohort 5."],
  ["May 2025", "Partnership · Pan-India", "Partnerships & collaborations", "Establishing networks with ecosystem partners", "Initiated and strengthened partnerships and collaborations with diverse ecosystem partners to broaden our impact and drive shared goals."],
  ["May 2025", "Research · Pan-India", "Research initiatives", "Policy dialogue & academic research collaboration", "Launched research initiatives fostering policy dialogue, academic collaboration and evidence-based practice in social impact."],
  ["May 2025", "Event · Online and in-person", "Events & workshops", "Internal events and the Young Leaders Council, AIMA", "Organised and participated in key events and workshops, including collaborations with the Young Leaders Council at AIMA."],
];
// Organisation names only (her comment of 19 Oct 2026). Two of the earlier experts were listed without an organisation and are not shown.
const ORGS = ["National Institute of Advanced Studies", "BRAC International", "Pinkishe Foundation", "Infinite Cycle", "Watershed Organisation Trust (WOTR)", "FSG", "SoBoho.official", "Sanjhe Sapne", "Darbar Sahitya Sansada", "Impacted Data Technologies", "Udyogini", "Jagriti Enterprise Centre - Purvanchal"];

export default function Journey() {
  return (
    <>
      <PageIntro compact crumb="About / Strategic milestones" title="Empowering progress through purposeful evolution." lede="From vision to impact. Our defining achievements and turning points." image={{ src: "/img/ev/1-1.webp", alt: "The venue of the UN Responsible Business and Human Rights Forum, Asia-Pacific 2024, Bangkok, with national flags", caption: "UN Responsible Business and Human Rights Forum, Asia-Pacific 2024, Bangkok", position: "center 40%" }} />
      <section className="sec sec--mist">
        <div className="wrap">
          <h2 className="sr-only">Timeline, 2022 to 2025</h2>
          <ol className="tln">
            {MS.map(([w, s, tag, h, t, ph]) => {
              const [mo, yr] = w.split(" ");
              return (
                <li key={h}>
                  <div className="tln-when"><span className="tln-yr">{yr}</span><span className="tln-mo">{mo}</span></div>
                  <span className="tln-node" aria-hidden="true" />
                  <article className="tln-card">
                    <div className="tln-meta"><span className="tln-tag">{tag}</span><span className="tln-sub">{s}</span></div>
                    <h3>{h}</h3>
                    <p>{t}</p>
                    {ph ? <div className="tln-ph"><Img src={ph[0]} alt={ph[1]} sizes="(max-width: 880px) 100vw, 40vw" /></div> : null}
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      <section className="sec" id="stakeholder">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Stakeholder engagement &amp; initiatives · before May 2025</span><h2>Engaged with stakeholders across diverse thematic areas.</h2></div><p>We facilitate multi-stakeholder dialogue. It advances shared priorities and collective action.</p></div>
          <div className="figs figs--4 st-figs">
            <div><b>13+</b><span>experts</span></div><div><b>10+</b><span>domains</span></div><div><b>20+</b><span>organisations</span></div><div><b>2024</b><span>active year. Led WICCI Delhi External Affairs Council (DEAC) as State Vice President</span></div>
          </div>
          <ul className="orgs">{ORGS.map((o, i) => <li key={o}><span>{String(i + 1).padStart(2, "0")}</span>{o}</li>)}</ul>
        </div>
      </section>
      <CtaBand next={["See our events", "/events"]} />
    </>
  );
}
