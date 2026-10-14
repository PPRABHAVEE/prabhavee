import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import FrameworkGraphic from "@/components/site/FrameworkGraphic";
import PhotoBand from "@/components/site/PhotoBand";
import JourneyStrip from "@/components/site/JourneyStrip";
import { Credentials } from "@/components/site/TrustStrip";
import { pageMeta } from "@/lib/meta";
import { APPROACH, FRAMEWORKS, FOCUS_AREAS, STRENGTHS, BENEFITS, STATS } from "@/content/site";

export const metadata = pageMeta("Who we are", "A strategy and management consultancy at the intersection of public policy, law, communication, society and business strategy. Approach, frameworks, strengths and contribution to global standard-setting.", "/background");

const CORE = ["Regulatory Risk and Compliance Advisory", "Policy, Strategic Communication and Advocacy", "Compliance Programme Design and Training", "Multi-stakeholder Facilitation and Convenings", "Training and Institutional Capacity-building", "Events, Forums & Strategic Collaborations", "Strategic Programme and Learning Initiatives"];
// Retained from the current website
const CHALLENGES = [
  ["BRSR reporting quality", "BRSR reporting is uneven, and non-financial data is under-disclosed. Despite government efforts, companies lack policy commitment and awareness of the NGRBC. They struggle to self-regulate with accurate, verifiable human rights disclosures."],
  ["Academic research gap", "Civil society and CSR data lacks pathways into academic research, with minimal legal fraternity and faculty contributions."],
  ["MSME / SME capacity", "SMEs and MSMEs lack awareness and legal capacity. They struggle with contractual liability, HRDD, procurement risks, purchasing practices and supply-chain human rights violations."],
  ["Fragmented legal expertise", "Business and human rights expertise is scattered. In-house counsel, sustainability officers, commercial lawyers and human rights practitioners are not yet networked for a focused practice in India."],
];
const INITIATIVES = ["Policy input and engagement with government and the private sector", "Stakeholder and public consultation", "Comments on draft regulations, guidance and standards development", "Collaboration with organisations to publish reports that drive policy change", "Dialogues, closed-door deliberations and public events", "Capacity-building workshops and training", "International forums, events and speaking engagements", "Mentorship and guest lectures for students and emerging industry leaders", "Participation in stakeholder interviews and surveys, contributing to industry reports", "Representation in conferences: ecosystem coalition and consensus-building", "Strategic consultations and advisory"];
const THEMES = ["Business & human rights", "Responsible business conduct & practices", "Transparency & corporate accountability", "Governance, ethics and business integrity", "Decent work and protection of migrant workers", "Responsible recruitment practices", "Child rights, protection & safeguard strategies and practices", "Child labour", "Social protection, financial inclusion and livelihood", "Mental health & well-being", "Women’s entrepreneurship development", "Gender, diversity, inclusion", "Prevention of sexual harassment at the workplace (PoSH)"];

export default function About() {
  return (
    <>
      <PageIntro crumb="About" title="Who we are." lede="P/ PRABHAVEE is an independent strategy and management consultancy based in Delhi. We advance human rights and responsible business through strategic advisory, multi-stakeholder initiatives, facilitation, training and strategic programmes." />
      <nav className="subnav" aria-label="On this page"><div className="wrap">
        <a href="#background">Background</a><a href="#approach">Approach</a><a href="#expertise">Consulting expertise</a><a href="#frameworks">Frameworks</a><a href="#strengths">Strengths</a><a href="#contribution">Contribution</a><a href="#context">Context</a>
      </div></nav>

      <section className="sec" id="background">
        <div className="wrap split">
          <div><span className="eyebrow">Background</span><h2>Responsible business is a shared risk.</h2></div>
          <div>
            <p className="big">It demands clarity on how stakeholders understand their roles, responsibilities, influence and impact on people across value chains. P/ PRABHA means impact. PRABHAVEE influences.</p>
            <p>We help organisations interpret and navigate risk. We strengthen governance and accountability. We embed ethical systems, processes and practices across operations and supply chains. And we translate responsible business commitments into action through strategic advisory, training and capacity building, facilitation and strategic programmes.</p>
            <p>We work with companies of all sizes, academic institutions, civil society organisations, research and advocacy centres, multi-stakeholder platforms, UN agencies, working groups and coalitions. Together we turn the complexity of business and human rights into actionable strategy. P/ PRABHAVEE was founded in 2022.</p>
          </div>
        </div>
      </section>

      <PhotoBand src="/img/ev/25-1.webp" alt="Participants at the amfori and Confederation of Indian Industry workshop on trade and sustainability" caption="Trade and sustainability workshop, amfori and the Confederation of Indian Industry" position="center 38%" />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Our journey in brief</span><h2>Four years of work.</h2></div><p>From a start-up programme to a practice that convenes policy dialogue.</p></div>
          <JourneyStrip />
          <p style={{ marginTop: 36 }}><Link className="link" href="/journey">Read the full timeline</Link></p>
        </div>
      </section>

      <section className="sec sec--mist" id="approach">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Our approach</span><h2>A 3-part framework.</h2></div><p>Our strategic advisory practice is grounded in Indian regulatory expectations aligned with global frameworks, regulations, standards and best practices.</p></div>
          <FrameworkGraphic />
          <div className="approach" style={{ marginTop: 56 }}>
            {APPROACH.map((a, i) => (
              <div key={a.k}><span className="kicker">0{i + 1}</span><div className="k">{a.k}</div><p>{a.lead}</p><ol className="steps">{a.steps.map((s) => <li key={s}>{s}</li>)}</ol></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="expertise">
        <div className="wrap split">
          <div><span className="eyebrow">Consulting expertise</span><h2>Seven core consulting areas.</h2><p>Our work focuses on the Social and Governance dimensions of ESG, where regulatory developments, responsible business conduct, business practices and stakeholder expectations intersect.</p><Link className="link" href="/services">See our practice areas</Link></div>
          <div>
            <div className="rows">{CORE.map((c, i) => <div className="row" key={c}><span className="n">{String.fromCharCode(65 + i)}</span><h3>{c}</h3></div>)}</div>
            <span className="figs-label">Key focus areas</span>
            <ul className="chips">{FOCUS_AREAS.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="sec sec--mist" id="frameworks">
        <div className="wrap split">
          <div><span className="eyebrow">Aligning with national and global frameworks</span><h2>Indian regulation, read with global standards.</h2><p>We align with local laws and regulations, the UN Guiding Principles on Business and Human Rights, the OECD Due Diligence Guidance for Responsible Conduct, and emerging international due diligence laws, requirements and regulatory mandates across jurisdictions.</p></div>
          <ul className="ticks">{FRAMEWORKS.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </section>

      <section className="sec" id="strengths">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Our strengths</span><h2>Close to 20 years of experience.</h2></div><p>A decade in knowledge, communication, strategy and partnerships.</p></div>
          <div className="cols-2">
            <div><span className="kicker">Experience</span><ul className="ticks" style={{ marginTop: 12 }}>{STRENGTHS.experience.map((s) => <li key={s}>{s}</li>)}</ul>
              <span className="kicker" style={{ display: "block", marginTop: 34 }}>Decade in knowledge, communication, strategy &amp; partnerships</span><ul className="ticks" style={{ marginTop: 12 }}>{STRENGTHS.decade.map((s) => <li key={s}>{s}</li>)}</ul></div>
            <div><span className="kicker">Industries &amp; sectors</span><ul className="ticks ticks--sm" style={{ marginTop: 12 }}>{STRENGTHS.industries.map((s) => <li key={s}>{s}</li>)}</ul>
              <span className="kicker" style={{ display: "block", marginTop: 34 }}>Network, stakeholder relations &amp; collaborations</span><ul className="ticks ticks--sm" style={{ marginTop: 12 }}>{STRENGTHS.network.map((s) => <li key={s}>{s}</li>)}</ul></div>
          </div>
          <span className="figs-label">Multi-disciplinary team</span>
          <p className="big" style={{ maxWidth: "none" }}>We strengthen corporate accountability by embedding responsible practices that uphold and protect the voices of rights-holders. We keep expanding our network. We partner with lawyers, regulatory and compliance professionals, advocates specialising in labour and employment laws, workplace safety and investigations, remediation and grievance mechanisms, DEI, PoSH, policy experts and researchers, business and human rights specialists, sustainability consultants, SA8000-certified auditors, human rights due diligence (HRDD) experts, industry consultants with deep sectoral insights and experience, and academics working at the intersection of business and human rights.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Credentials</span><h2>Registered. Empanelled. Contributing.</h2></div></div>
          <Credentials />
        </div>
      </section>

      <section className="sec sec--green">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Business benefits</span><h2>What organisations gain.</h2></div></div>
          <div className="rows">{BENEFITS.map(([h, t], i) => <div className="row" key={h}><span className="n">0{i + 1}</span><div><h3>{h}</h3><p>{t}</p></div></div>)}</div>
        </div>
      </section>

      <section className="sec" id="contribution">
        <div className="wrap split">
          <div><span className="eyebrow">Contribution to standards and policy</span><h2>Engaging at global and national level.</h2></div>
          <div>
            <p>P/ PRABHAVEE contributes to global standard-setting and policy processes. We take part regularly in Global Reporting Initiative (GRI) standards consultations, including the GRI Topic Standard Project for Labor. That work shapes disclosures on non-discrimination and equal opportunity, diversity and inclusion, labor rights in business relationships, freedom of association and collective bargaining, child labor and forced labor.</p>
            <p>We also contribute to national and international policy. We make written submissions to the UN Working Group on Business and Human Rights. We contributed to the report to the 81st session of the UN General Assembly on Corporate Governance, Business and Human Rights. We hold pre-forum consultations with UNDP’s Business and Human Rights Asia-Pacific team ahead of the annual UN Responsible Business and Human Rights Forums. And we make submissions to the European Commission on the EU Forced Labour Regulation and the Corporate Sustainability Due Diligence Directive (CSDDD).</p>
            <p>These engagements advance responsible business conduct. They strengthen corporate accountability. And they integrate human rights due diligence into governance frameworks and business practices.</p>
            <div className="figs figs--4" style={{ marginTop: 34 }}>{STATS.engagements.slice(0, 3).concat(STATS.engagements.slice(3, 4)).map((s) => <div key={s.t}><b>{s.n}</b><span>{s.t}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="sec sec--mist" id="context">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Positioning in the ecosystem</span><h2>Where regulation meets practice.</h2></div><p>In India, CSR law requires companies to spend 2% of average net profits on social welfare. Frameworks like the NGRBC and BRSR are making responsible business and human rights central. Yet efforts remain fragmented across sectors and stakeholders.</p></div>
          <span className="kicker">Challenges we address</span>
          <div className="cols-2" style={{ marginTop: 14 }}>{CHALLENGES.map(([h, t]) => <div className="row row--plain" key={h}><div><h3>{h}</h3><p>{t}</p></div></div>)}</div>
          <div className="cols-2" style={{ marginTop: 60 }}>
            <div><span className="kicker">Our key initiatives</span><ol className="ticks" style={{ marginTop: 12, paddingLeft: 0 }}>{INITIATIVES.map((t) => <li key={t}>{t}</li>)}</ol></div>
            <div><span className="kicker">Thematic areas</span><ul className="chips" style={{ marginTop: 14 }}>{THEMES.map((t) => <li key={t}>{t}</li>)}</ul></div>
          </div>
        </div>
      </section>
      <CtaBand next={["See the practice areas", "/services"]} />
    </>
  );
}
