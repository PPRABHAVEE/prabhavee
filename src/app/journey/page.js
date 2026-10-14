import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Img from "@/components/site/Img";
import JourneyStrip from "@/components/site/JourneyStrip";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Strategic milestones", "Defining achievements and turning points of P/ PRABHAVEE, with stakeholder engagement and initiatives.", "/journey");

// Retained from the current website (feedback: keep as its own page; merge stakeholder engagement before May 2025)
const MS = [
  ["May 2022", "Foundation · Online", "Conceptualised at NSRCEL", "The beginning of our vision", "P/ PRABHAVEE – Partner for Social Impact was conceptualised at the NSRCEL Women Startup Program 2022 (IIM Bangalore)."],
  ["September 2024", "Leadership · Odisha", "Advisory board appointment", "Strategic leadership", "P/ PRABHAVEE’s Founding Lawyer, Anumita Sarkar, joined the Advisory Board of Darbar Sahitya Sansada (DSS), a grassroots NGO based in Odisha, marking our commitment to grassroots development and social impact.", ["/img/ev/20-1.webp", "An executive body meeting of Darbar Sahitya Sansada"]],
  ["September 2024", "Delegate · Bangkok, Thailand", "International conference", "Global engagement", "Delegate at the 5-day International Conference ‘United Nations Responsible Business and Human Rights Forum, Asia-Pacific 2024’ in Bangkok, engaging with stakeholder representatives from South Asia and Asia-Pacific countries.", ["/img/ev/1-1.webp", "The venue of the UN Responsible Business and Human Rights Forum, Asia-Pacific 2024, Bangkok"]],
  ["November 2024", "Delegate · In-person", "Dialogue on Development Management", "Platform delegate", "P/ PRABHAVEE took part in ISDM’s annual flagship event ‘Dialogue on Development Management’. Anumita also completed the Women on Boards Program (WoB) from the Indian School of Development Management (ISDM), Cohort 5."],
  ["May 2025", "Partnership · Pan-India", "Partnerships & collaborations", "Establishing networks with ecosystem partners", "Initiated and strengthened partnerships and collaborations with diverse ecosystem partners to broaden our impact and drive shared goals."],
  ["May 2025", "Research · Pan-India", "Research initiatives", "Policy dialogue & academic research collaboration", "Launched research initiatives fostering policy dialogue, academic collaboration and evidence-based practice in social impact."],
  ["May 2025", "Event · Online and in-person", "Events & workshops", "Internal events and the Young Leaders Council, AIMA", "Organised and participated in key events and workshops, including collaborations with the Young Leaders Council at AIMA."],
];
const EXPERTS = [["Sumana Bhattacharya", "Adjunct Professor, National Institute of Advanced Studies"], ["Tawni Trushna", "Scientist-C, Environmental Health & Epidemiology"], ["Vijeta Rattani", "PhD, Consultant, working on issues of climate change and natural resource management"], ["Sweta Banerjee", "Country Lead, BRAC International"], ["Dr. Ramnik Ahuja", "Public Health Specialist, Advisory Board Member, Pinkishe Foundation"], ["Deepjyoti Nath", "Chief Executive Officer, Infinite Cycle"], ["Marcella D’Souza", "Director, Watershed Organisation Trust (WOTR)"], ["Vikram Jain", "Director, FSG"], ["Snigdha Mann", "Founder, SoBoho.official"], ["Anjali Rajput & Aparna", "Sanjhe Sapne"], ["Kedareswar Choudhury", "CEO, Darbar Sahitya Sansada"], ["Garvi Dhar", "Independent Ethnographer, Ex-Urban Clap Director, Impacted Data Technologies | Founder, Udyogini"], ["Shilpi Singh", "Manager, Women Centre of Excellence, Jagriti Enterprise Centre"]];

export default function Journey() {
  return (
    <>
      <PageIntro crumb="About / Strategic milestones" title="Empowering progress through purposeful evolution." lede="From vision to impact. Our defining achievements and turning points." />
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">At a glance</span><h2>2022 to 2026.</h2></div><p>Seven turning points. The full story is below.</p></div>
          <JourneyStrip />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2 className="sr-only">Timeline, 2022 to 2025</h2>
          <ol className="timeline">
            {MS.map(([w, s, tag, h, t, ph]) => (
              <li key={h}><div className="when">{w}<small>{s}</small></div><div><span className="kicker">{tag}</span><h3>{h}</h3><p>{t}</p>{ph ? <div className="tl-photo"><Img src={ph[0]} alt={ph[1]} sizes="420px" /></div> : null}</div></li>
            ))}
          </ol>
        </div>
      </section>
      <section className="sec sec--mist" id="stakeholder">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Stakeholder engagement &amp; initiatives · before May 2025</span><h2>Engaged with stakeholders across diverse thematic areas.</h2></div><p>We facilitate multi-stakeholder dialogue. It advances shared priorities and collective action.</p></div>
          <div className="figs figs--4" style={{ marginBottom: 46 }}>
            <div><b>13+</b><span>experts</span></div><div><b>10+</b><span>domains</span></div><div><b>5+</b><span>organisations</span></div><div><b>2024</b><span>active year. Recognition: WICCI Delhi External Affairs Council (DEAC)</span></div>
          </div>
          <div className="cols-3">{EXPERTS.map(([n, r]) => <div className="row row--plain" key={n} style={{ borderTop: "1px solid var(--line)" }}><div><h3 style={{ fontSize: 19 }}>{n}</h3><p>{r}</p></div></div>)}</div>
          <p style={{ marginTop: 30, maxWidth: "62ch" }}>These collaborations reflect P/ PRABHAVEE’s growing network of professionals committed to driving positive, inclusive change.</p>
        </div>
      </section>
      <CtaBand next={["See our events", "/events"]} />
    </>
  );
}
