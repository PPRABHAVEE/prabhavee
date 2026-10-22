import Link from "next/link";
import Img from "@/components/site/Img";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import FrameworkGraphic from "@/components/site/FrameworkGraphic";
import JourneyStrip from "@/components/site/JourneyStrip";
import { Credentials } from "@/components/site/TrustStrip";
import Fold from "@/components/site/Fold";
import { pageMeta } from "@/lib/meta";
import DECK from "@/content/deck.json";
import { APPROACH, FRAMEWORKS, FOCUS_AREAS, STRENGTHS, BENEFITS, STATS, CONTEXT } from "@/content/site";

export const metadata = pageMeta("Who we are", "A strategy and management consultancy at the intersection of public policy, law, communication and business strategy. Our approach, frameworks and strengths.", "/background");

const CORE = ["Regulatory risk and compliance advisory", "Policy advisory, partnership strategy, strategic communication and advocacy", "Policy research, analysis and convenings", "Training and institutional capacity building", "Strategic programme design and implementation", "Multi-stakeholder engagement, facilitation and convenings", "Strategic convenings, partnerships and collaborations", "Governance and non-profit board leadership", "Prevention of Sexual Harassment of Women at the Workplace (PoSH) training and compliance support"];
// Retained from the current website
const CHALLENGES = [
  ["BRSR reporting quality", "BRSR reporting is uneven, and non-financial data is under-disclosed. Despite government efforts, companies lack policy commitment and awareness of the NGRBC. They struggle to self-regulate with accurate, verifiable human rights disclosures."],
  ["Academic research gap", "Civil society and CSR data lacks pathways into academic research, with minimal legal fraternity and faculty contributions."],
  ["MSME / SME capacity", "SMEs and MSMEs lack awareness and legal capacity. They struggle with contractual liability, HRDD, procurement risks, purchasing practices and supply-chain human rights violations."],
  ["Fragmented legal expertise", "Business and human rights expertise is scattered. In-house counsel, sustainability officers, commercial lawyers and human rights practitioners are not yet networked for a focused practice in India."],
];
const INITIATIVES = ["Policy input and engagement with government and the private sector", "Stakeholder and public consultation", "Comments on draft regulations, guidance and standards development", "Collaboration with organisations to publish reports that drive policy change", "Dialogues, closed-door deliberations and public events", "Capacity-building workshops and training", "International forums, events and speaking engagements", "Mentorship and guest lectures for students and emerging industry leaders", "Participation in stakeholder interviews and surveys, contributing to industry reports", "Representation in conferences: ecosystem coalition and consensus-building", "Strategic consultations and advisory"];

export default function About() {
  return (
    <>
      <PageIntro compact crumb="About" title="Who we are." lede="P/ PRABHAVEE is an advisory and strategy consulting practice based in Delhi. We advance human rights and responsible business through strategic advisory, multi-stakeholder initiatives, facilitation, training and strategic programmes." image={{ src: "/img/banner-forum-hall.webp", alt: "A working hall at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026", caption: "UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok", position: "center 55%" }} />
      <nav className="subnav" aria-label="On this page"><div className="wrap">
        <a href="#background">Background</a><a href="#approach">Approach</a><a href="#expertise">Consulting expertise</a><a href="#frameworks">Frameworks</a><a href="#strengths">Strengths</a><a href="#contribution">Contribution</a><a href="#context">Context</a>
      </div></nav>

      <section className="sec" id="background">
        <div className="wrap">
          <span className="eyebrow">Background</span>
          <div className="bg-top">
            <div className="bg-lead">
              <h2>Responsible business is a shared risk.</h2>
              <p className="big">It demands clarity on how stakeholders understand their roles, responsibilities, influence and impact on people across value chains.</p>
            </div>
            <p className="bg-name"><span className="bg-red">P/ PRABHA</span> means impact.<br /><span className="bg-red">PRABHAVEE</span> influences.</p>
          </div>
          <div className="bg-cards">
            <div className="bg-points">
            <div className="bg-card"><span className="n" aria-hidden="true">01</span><h3 className="bg-label">What we do</h3><p>We help organisations interpret and navigate risk. We strengthen governance and accountability. We embed ethical systems, processes and practices across operations and supply chains. And we translate responsible business commitments into action through strategic advisory, training and capacity building, facilitation and strategic programmes.</p></div>
            <div className="bg-card"><span className="n" aria-hidden="true">02</span><h3 className="bg-label">Who we work with</h3><p>We work with companies of all sizes, academic institutions, civil society organisations, research and advocacy centres, multi-stakeholder platforms, UN agencies, working groups and coalitions. Together we turn the complexity of business and human rights into actionable strategy. P/ PRABHAVEE was founded in 2022.</p></div>
            </div>
            <figure className="bg-photo"><Img src="/img/ev/25-1.webp" alt="Participants at the amfori and Confederation of Indian Industry workshop on trade and sustainability" sizes="(max-width: 880px) 100vw, 640px" /><figcaption>Trade and sustainability workshop, amfori and the Confederation of Indian Industry</figcaption></figure>
          </div>
        </div>
      </section>


      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Since 2022</span><h2>Our journey in brief.</h2></div><p>From a start-up programme to a practice that convenes policy dialogue.</p></div>
          <JourneyStrip />
          <p style={{ marginTop: 36 }}><Link className="link" href="/journey">Read the full timeline</Link></p>
        </div>
      </section>

      <section className="sec sec--mist" id="approach">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Our approach</span><h2>A 3-part framework.</h2></div><p>Our strategic advisory practice is grounded in Indian regulatory expectations aligned with global frameworks, regulations, standards and best practices.</p></div>
          <FrameworkGraphic />
          <Fold title="See every step of the framework">
          <div className="approach" style={{ marginTop: 36 }}>
            {APPROACH.map((a, i) => (
              <div key={a.k}><span className="kicker">0{i + 1}</span><div className="k">{a.k}</div><p>{a.lead}</p><ol className="steps">{a.steps.map((s) => <li key={s}>{s}</li>)}</ol></div>
            ))}
          </div>
          </Fold>
        </div>
      </section>

      <section className="sec" id="expertise">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Consulting expertise</span><h2>Nine core consulting areas.</h2></div>
            <p>Our work focuses on the Social and Governance dimensions of ESG, where regulatory developments, responsible business conduct, organisational practices and stakeholder expectations intersect. <Link className="link" href="/services">See our practice areas</Link></p>
          </div>
          <ol className="core-grid">{CORE.map((c, i) => <li key={c}><span className="n" aria-hidden="true">{String.fromCharCode(65 + i)}</span><h3>{c}</h3></li>)}</ol>
          <span className="figs-label">Key focus areas</span>
          <ul className="fd-ledger fd-ledger--3 bg-focus">{FOCUS_AREAS.map((f, i) => <li key={f}><span>{String(i + 1).padStart(2, "0")}</span>{f}</li>)}</ul>
        </div>
      </section>

      <section className="sec sec--mist" id="frameworks">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Aligning with national and global frameworks</span><h2>Indian regulation, read with global standards.</h2></div><p>We align with local laws and regulations, the UN Guiding Principles on Business and Human Rights, the OECD Due Diligence Guidance for Responsible Conduct, and emerging international due diligence laws, requirements and regulatory mandates across jurisdictions.</p></div>
          <Fold title="See the frameworks"><ol className="fd-ledger fd-ledger--3 bg-fw">{FRAMEWORKS.map((f, i) => <li key={f}><span>{String(i + 1).padStart(2, "0")}</span>{f}</li>)}</ol></Fold>
        </div>
      </section>

      <section className="sec" id="strengths">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Our strengths</span><h2>Close to 20 years of experience.</h2></div><p>A decade in knowledge, communication, strategy and partnerships.</p></div>
          <Fold title="See our strengths in detail">
          <div className="bg-strengths">
            <div className="bg-scol">
              <section className="conv-panel" aria-labelledby="st-e"><h3 id="st-e"><span>Experience</span></h3><ul>{STRENGTHS.experience.map((x) => <li key={x}>{x}</li>)}</ul></section>
              <section className="conv-panel" aria-labelledby="st-n"><h3 id="st-n"><span>Network, stakeholder relations &amp; collaborations</span></h3><ul>{STRENGTHS.network.map((x) => <li key={x}>{x}</li>)}</ul></section>
            </div>
            <div className="bg-scol">
              <section className="conv-panel" aria-labelledby="st-d"><h3 id="st-d"><span>Decade in knowledge, communication, strategy &amp; partnerships</span></h3><ul>{STRENGTHS.decade.map((x) => <li key={x}>{x}</li>)}</ul></section>
              <section className="conv-panel" aria-labelledby="st-i"><h3 id="st-i"><span>Industries &amp; sectors</span></h3><ul>{STRENGTHS.industries.map((x) => <li key={x}>{x}</li>)}</ul></section>
            </div>
          </div>
          </Fold>
          <div className="bg-team"><span className="eyebrow">Multi-disciplinary team</span>
          <p className="big" style={{ maxWidth: "none" }}>We strengthen corporate accountability by embedding responsible practices that uphold and protect the voices of rights-holders. We keep expanding our network. We partner with lawyers, regulatory and compliance professionals, advocates specialising in labour and employment laws, workplace safety and investigations, remediation and grievance mechanisms, DEI, PoSH, policy experts and researchers, business and human rights specialists, sustainability consultants, SA8000-certified auditors, human rights due diligence (HRDD) experts, industry consultants with deep sectoral insights and experience, and academics working at the intersection of business and human rights.</p></div>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Credentials</span><h2>Registered. Empanelled. Contributing.</h2></div></div>
          <Credentials />
        </div>
      </section>

      <section className="sec sec--green">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">The value we create</span><h2>The value we deliver.</h2></div></div>
          <div className="val-cards">{BENEFITS.map(([h, t], i) => <article className="val-card" key={h}><span>0{i + 1}</span><h3>{h}</h3><p>{t}</p></article>)}</div>
        </div>
      </section>

      <section className="sec" id="contribution">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Contribution to standards and policy</span><h2>Engaging at global and national level.</h2></div></div>
          <Fold title="Read the full statement"><div className="bg-statement">
            <p>P/ PRABHAVEE contributes to global standard-setting and policy processes, including regular participation in Global Reporting Initiative (GRI) standards development consultations, including consultation on the GRI Topic Standard Project for Labor, contributing to the evolution of key labor and human rights disclosures on: Non-discrimination and Equal Opportunity; Diversity and Inclusion; Labor Rights in Business Relationships; Freedom of Association and Collective Bargaining; Child Labor; and Forced Labor.</p>
            <p>P/ PRABHAVEE contributes to national and international policy development through written submissions to the UN Working Group on Business and Human Rights; its contribution to the report to the 81st session of the UN General Assembly on Corporate Governance, Business and Human Rights; pre-forum consultations with UNDP’s Business and Human Rights Asia-Pacific Team in preparation for the annual UN Responsible Business and Human Rights Forums; and submissions to the European Commission on the EU Forced Labour Regulation and Corporate Sustainability Due Diligence Directive (CSDDD).</p>
            <p>These engagements reflect a commitment to advancing responsible business conduct, strengthening corporate accountability, and integrating human rights due diligence into governance frameworks and business practices.</p>
            </div></Fold>
          <div className="posh-stats bg-stats">{STATS.engagements.slice(0, 3).concat(STATS.engagements.slice(3, 4)).map((s) => <div key={s.t}><b>{s.n}</b><span>{s.t}</span></div>)}</div>
          <div className="bg-orgs">            <Fold title="See the organisations we have engaged"><ul className="fd-ledger bg-collabs">{DECK.collaborations.map((o, i) => <li key={o}><span>{String(i + 1).padStart(2, "0")}</span>{o}</li>)}</ul></Fold></div>
        </div>
      </section>

      <section className="sec sec--mist" id="context">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Positioning in the ecosystem</span><h2>Where regulation meets practice.</h2></div><p>{CONTEXT.bridge}</p></div>
          <span className="kicker kicker--red">Context &amp; regulatory shifts</span>
          <div className="ctx-cards ctx-cards--3">{CONTEXT.shifts.map(([h, t], i) => <article className="ctx-card" key={h}><span>0{i + 1}</span><h3>{h}</h3><p>{t}</p></article>)}</div>
          <p className="big" style={{ marginTop: 34, maxWidth: 880 }}>{CONTEXT.closing}</p>
          <span className="kicker" style={{ marginTop: 26, display: "block" }}>Key stakeholders</span>
          <ul className="fd-ledger fd-ledger--3 bg-stake">{CONTEXT.stakeholders.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, "0")}</span>{x}</li>)}</ul>
          <p style={{ marginTop: 28, marginBottom: 38 }}>{CONTEXT.stakeholderNote}</p>
          <Fold title="Challenges we address" red>
          <span className="kicker kicker--red fold-title">Challenges we address</span>
          <div className="ctx-cards ctx-cards--2">{CHALLENGES.map(([h, t], i) => <article className="ctx-card" key={h}><span>0{i + 1}</span><h3>{h}</h3><p>{t}</p></article>)}</div>
          </Fold>
          <div style={{ marginTop: 38 }}>
            <Fold title="Our key initiatives" red>
              <span className="kicker kicker--red fold-title">Our key initiatives</span><ol className="fd-ledger fd-ledger--2 bg-init">{INITIATIVES.map((t, i) => <li key={t}><span>{String(i + 1).padStart(2, "0")}</span>{t}</li>)}</ol>
            </Fold>
          </div>
        </div>
      </section>
      <CtaBand next={["See the practice areas", "/services"]} />
    </>
  );
}
