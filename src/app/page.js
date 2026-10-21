import Link from "next/link";
import EnquiryForm from "@/components/site/EnquiryForm";
import CountUp from "@/components/site/CountUp";
import HeroSlides from "@/components/site/HeroSlides";
import FrameworkGraphic from "@/components/site/FrameworkGraphic";
import PillarsGraphic from "@/components/site/PillarsGraphic";
import JourneyStrip from "@/components/site/JourneyStrip";
import { LogoRow, Credentials } from "@/components/site/TrustStrip";
import { SITE, ENQUIRY, SERVICES, STATS, INDUSTRIES, FLAGSHIPS, PARTNER_GROUPS, FOUNDER } from "@/content/site";
import Img from "@/components/site/Img";
import Orbit from "@/components/site/Orbit";
import IntersectionGraphic from "@/components/site/IntersectionGraphic";

const HERO = [
  ["/img/unrbhr-forum-2026-55529117037-f155f3b5a1-c.webp", "Delegates at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026"],
  ["/img/jindal-jindal-1.webp", "Participants at a workshop with the Jindal School of Journalism and Communication"],
  ["/img/ungcni-ilo-ilo-ungcni-workshop-rbc-2025.webp", "Participants at the ILO and UN Global Compact Network India workshop on responsible business conduct, 2025"],
  ["/img/banner-forum-stage.webp", "Participants on stage after a session at the UN Responsible Business and Human Rights Forum"],
  ["/img/banner-unrbhr-2026-anumita1.webp", "Delegates at the welcome sign of the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026"],
  ["/img/banner-home-hall.webp", "Participants gathered in a conference hall under the United Nations emblem"],
  ["/img/banner-home-bangkok-2024.webp", "A delegate at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2024, Bangkok", "center 62%"],
  ["/img/banner-home-esg-rollup.webp", "Roll-up banner for the Business Integrity and ESG Orientation Training with UN Global Compact Network India, The Lalit, New Delhi", "center 38%"],
  ["/img/banner-home-aima-conclave.webp", "A guest at the AIMA National Leadership Conclave and Managing India Awards, New Delhi", "center 55%"],
];

export default function Home() {
  const flagships = FLAGSHIPS.filter((f) => f.img).slice(0, 4);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Advisory and strategy consulting</span>
          <h1>Strategic advisors for <em>responsible business</em>, workplace governance, business &amp; human rights and social sustainability.</h1>
          <p className="hero-lede">We partner with businesses to identify and navigate regulatory risks, strengthen governance and compliance, and develop practical strategies to address human rights risks, respond to stakeholder expectations, and advance responsible business practices across operations and supply chains.</p>
          <p className="hero-reg">Registered with the Ministry of Women &amp; Child Development, Government of India.</p>
          <div className="hero-actions">
            <a className="btn btn--red" href="#enquiry">Start a conversation</a>
            <Link className="link" href="/services">Explore our services</Link>
          </div>
        </div>
        <HeroSlides slides={HERO} />
      </section>
      <div className="hero-figs"><div className="wrap">{STATS.network.map((s) => <div key={s.t}><b><CountUp value={s.n} /></b><span>{s.t}</span></div>)}</div></div>

      <div className="wrap"><LogoRow /></div>

      <section className="sec who">
        <div className="wrap">
          <span className="eyebrow">Who we are</span>
          <div className="who-grid">
            <div className="who-copy">
              <h2>Where policy, law and business strategy meet.</h2>
              <p className="big">P/ PRABHAVEE, founded in 2022, is an advisory and strategy consulting practice working at the intersection of policy, law, communication, and business strategy.</p>
              <p>Lawyer Anumita Sarkar founded the practice. We offer strategic advisory, multi-stakeholder initiatives, consultation and facilitation, training and capacity building, and strategic programmes.</p>
              <p>We focus on the social and governance dimensions of ESG. That is where regulation, labour standards, business practice and stakeholder expectations meet. We turn that into strategies for engagement and influence. We seek to be the ‘Convenor’ of this larger public discourse.</p>
              <p className="who-fields-note">We practise at the intersection of public policy, law, communication, society and business strategy.</p>
            <div className="founder-card">
              <span className="fc-photo"><Img src="/img/founder.webp" sizes="96px" alt="Anumita Sarkar, founder of P/ PRABHAVEE" /></span>
              <div>
                <b>{FOUNDER.name}</b>
                <small>{FOUNDER.role}</small>
              </div>
              <div className="links"><Link className="link" href="/background">Read about our practice</Link><Link className="link" href="/people/founder">Meet the founder</Link></div>
            </div>
            </div>
            <div className="who-art"><IntersectionGraphic /></div>
          </div>
        </div>
      </section>

      <section className="sec sec--green vm-sec">
        <div className="wrap">
          <div className="vm-grid">
          <div className="vm-main">
          <span className="eyebrow">Vision &amp; mission</span>
          <h2 className="vm-head">The Centre of Excellence in Strategic Capacity Building.</h2>
          <div className="vm-rows">
            <div className="vm-row">
              <div className="vm-lab"><span className="vm-no" aria-hidden="true">01</span><h3>Our vision</h3></div>
              <p>To be the Centre of Excellence in Strategic Capacity Building, advancing rights-based development and responsible business conduct.</p>
            </div>
            <div className="vm-row">
              <div className="vm-lab"><span className="vm-no" aria-hidden="true">02</span><h3>Our mission</h3></div>
              <p>To serve as a trusted strategic partner, enabling businesses to embed responsible business practices and human rights commitments at the core of decision-making through strategy, systems and accountability.</p>
            </div>
          </div>
          </div>
          <div className="vm-art"><Orbit /></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Our approach</span><h2>Three stages. One framework.</h2></div>
            <p>Our advice is grounded in Indian regulatory expectations. It aligns with global frameworks, standards and best practice.</p>
          </div>
          <FrameworkGraphic />
          <p style={{ marginTop: 36 }}><Link className="link" href="/background#approach">See every step of the framework</Link></p>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Credentials</span><h2>Registered. Empanelled. Contributing.</h2></div>
            <p>Recognised by government. Active in global standard-setting.</p>
          </div>
          <Credentials />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Practice areas</span><h2>Advisory, facilitation and capacity building.</h2><p className="sec-sub">Practical, context-specific solutions. Tailored to each organisation.</p></div>
          </div>
          <div className="svc-cards">
            {SERVICES.map((s, i) => (
              <Link className="svc-card" key={s.slug} href={`/services#${s.slug}`}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="go" aria-hidden="true">↓</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Impact in numbers</span><h2>A record across policy, training and partnerships.</h2></div>
          </div>
          <div className="figs figs--6">{STATS.engagements.map((s) => <div key={s.t}><b><CountUp value={s.n} /></b><span>{s.t}</span></div>)}</div>
        </div>
      </section>

      <section className="sec sec--green posh-band">
        <div className="wrap">
          <span className="eyebrow">PoSH training &amp; compliance support</span>
          <div className="posh-top">
            <div className="posh-copy">
              <h2>Safeguarding workplaces with integrity.</h2>
              <p className="big">Advisory, training and External Member services for PoSH Internal Committees.</p>
              <div className="act"><small>The Act</small>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</div>
              <p className="posh-cta"><Link className="btn btn--red" href="/posh">Explore PoSH services</Link></p>
            </div>
            <figure className="posh-photo">
              <Img src="/img/ndim-posh-ndim-3.webp" alt="Faculty and staff at a PoSH training session at the New Delhi Institute of Management" sizes="(max-width: 1100px) 100vw, 640px" />
              <figcaption>PoSH training for faculty and staff, New Delhi Institute of Management</figcaption>
            </figure>
          </div>
          <div className="posh-tiles">
            {[["Expert-led training", "Programmes tailored to your organisation."], ["Compliance audits", "Checks for legal compliance and best practice."], ["Advisory solutions", "Guidance to build an inclusive, safe culture."], ["External member services", "Legal and advisory support for ongoing compliance."]].map(([h, t], i) => (
              <div className="posh-tile" key={h}><span className="n" aria-hidden="true">0{i + 1}</span><h3>{h}</h3><p>{t}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">5-pillar approach to impact</span><h2>How we build lasting impact.</h2></div>
            <p>Five pillars. One purpose: stronger institutions and responsible business.</p>
          </div>
          <PillarsGraphic />
        </div>
      </section>

      <section className="sec sec--green">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Who we serve</span><h2>Businesses, institutions and social purpose organisations.</h2></div>
            <Link className="link link--light" href="/whoWeServe">See who we serve in full</Link>
          </div>
          <div className="ws-cards">
            {PARTNER_GROUPS.map((g, i) => (
              <article className="ws-card" key={g.who}>
                <span className="n" aria-hidden="true">0{i + 1}</span>
                <h3>{g.who}</h3>
                <ul>{g.gets.map((x) => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
          <span className="figs-label ws-label">Industries</span>
          <ul className="ws-ind">{INDUSTRIES.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Since 2022</span><h2>Our journey in brief.</h2></div>
            <Link className="link" href="/journey">Read the full timeline</Link>
          </div>
          <JourneyStrip />
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Flagship programmes 2025–26</span><h2>Convenings, workshops and consultations.</h2></div>
          </div>
          <div className="cards cards--4">
            {flagships.map((f) => (
              <article className="card" key={f.title}>
                <div className="im"><Img src={f.img} alt="" sizes="(max-width: 620px) 100vw, (max-width: 1180px) 50vw, 330px" style={f.pos ? { objectPosition: f.pos } : undefined} /></div>
                <div className="bd"><span className="when">{f.when}</span><h3>{f.title}</h3><p>{f.text}</p></div>
              </article>
            ))}
          </div>
          <p className="sec-more"><Link className="btn" href="/events">See all engagements</Link></p>
        </div>
      </section>

      <section className="sec sec--tint" id="enquiry">
        <div className="wrap enq">
          <span className="eyebrow">Get involved</span>
          <div className="enq-copy">
            <h2>{ENQUIRY.heading}</h2>
            <p className="big">{ENQUIRY.lead}</p>
            <p>{ENQUIRY.statement}</p>
            <p className="enq-where">Based in: India<br />Pan-India and global collaborations</p>
          </div>
          <EnquiryForm idPrefix="home" />
        </div>
      </section>
    </>
  );
}
