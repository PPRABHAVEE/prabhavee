import Link from "next/link";
import Orbit from "@/components/site/Orbit";
import Pending from "@/components/site/Pending";
import EnquiryForm from "@/components/site/EnquiryForm";
import CountUp from "@/components/site/CountUp";
import FrameworkGraphic from "@/components/site/FrameworkGraphic";
import JourneyStrip from "@/components/site/JourneyStrip";
import { LogoRow, Credentials } from "@/components/site/TrustStrip";
import { SERVICES, STATS, INDUSTRIES, FLAGSHIPS, PILLARS, PARTNER_GROUPS } from "@/content/site";

const HERO = [
  ["/img/unrbhr-forum-2026-55529117037-f155f3b5a1-c.jpg", "Delegates at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026"],
  ["/img/jindal-jindal-1.jpg", "Participants at a workshop with the Jindal School of Journalism and Communication"],
  ["/img/ungcni-ilo-ilo-ungcni-workshop-rbc-2025.jpg", "Participants at the ILO and UN Global Compact Network India workshop on responsible business conduct, 2025"],
];

export default function Home() {
  const flagships = FLAGSHIPS.filter((f) => f.img).slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">P/ PRABHAVEE — PARTNER FOR SOCIAL IMPACT</span>
          <h1>Strategic advisors for <em>responsible business</em>, workplace governance and human rights.</h1>
          <p className="hero-lede">We help businesses manage regulatory and human rights risk across operations and supply chains.</p>
          <p className="hero-reg">Registered with the Ministry of Women &amp; Child Development, Government of India.</p>
          <div className="hero-actions">
            <a className="btn btn--red" href="#enquiry">Write to us</a>
            <Link className="link" href="/services">Explore our services</Link>
          </div>
        </div>
        <div className="hero-media">
          {HERO.map(([src, alt], i) => <img key={src} src={src} alt={alt} fetchPriority={i === 0 ? "high" : undefined} />)}
        </div>
      </section>
      <div className="hero-figs"><div className="wrap">{STATS.network.map((s) => <div key={s.t}><b><CountUp value={s.n} /></b><span>{s.t}</span></div>)}</div></div>

      <div className="wrap"><LogoRow /></div>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Where policy, law and business strategy meet.</h2>
          </div>
          <div>
            <p className="big">P/ PRABHAVEE is an independent strategy and management consultancy based in Delhi. We advance human rights and responsible business.</p>
            <p>Lawyer Anumita Sarkar founded the practice in 2022. We offer strategic advisory, multi-stakeholder initiatives, consultation and facilitation, training and capacity building, and strategic programmes.</p>
            <p>We focus on the social and governance dimensions of ESG. That is where regulation, labour standards, business practice and stakeholder expectations meet. We turn that into strategies for engagement and influence.</p>
            <Link className="link" href="/background">Read about our practice</Link>
          </div>
        </div>
      </section>

      <section className="sec sec--green">
        <div className="wrap vision-grid">
          <Orbit />
          <div>
            <span className="eyebrow">Vision &amp; mission</span>
            <h2>The Centre of Excellence in Strategic Capacity Building.</h2>
            <div className="vm"><h3>Our vision</h3><p>To be the Centre of Excellence in Strategic Capacity Building, advancing rights-based development and responsible business conduct.</p></div>
            <div className="vm"><h3>Our mission</h3><p>To serve as a trusted strategic partner, enabling businesses to embed responsible business practices and human rights commitments at the core of decision-making through strategy, systems and accountability.</p></div>
            <ul className="legend">
              <li><b>Legal advisory</b>Professional legal and policy advice</li>
              <li><b>Capacity building</b>Strategic training and programmes</li>
              <li><b>Social impact</b>Business and human rights</li>
              <li><b>Law &amp; policy research</b>Knowledge and policy influence</li>
            </ul>
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
            <div><span className="eyebrow">Practice areas</span><h2>Advisory, facilitation and capacity building.</h2></div>
            <p>Practical, context-specific solutions. Tailored to each organisation.</p>
          </div>
          {SERVICES.map((s, i) => (
            <Link className="svc-row" key={s.slug} href={`/services#${s.slug}`}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.short}</p><span className="go">Explore</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Impact in numbers</span><h2>A record across policy, training and partnerships.</h2></div>
          </div>
          <div className="figs figs--6">{STATS.engagements.map((s) => <div key={s.t}><b><CountUp value={s.n} /></b><span>{s.t}</span></div>)}</div>
          <Pending title="Which numbers">The deck PDF says 1150+ trained, 6 academic institutions and 70+ PoSH organisations. The deck PowerPoint, brochure and client list support 1100+, 5 and about 60. The PDF figures are shown. Confirm with Anumita.</Pending>
        </div>
      </section>

      <section className="sec sec--green">
        <div className="wrap split">
          <div>
            <span className="eyebrow">PoSH consultancy &amp; services</span>
            <h2>Safeguarding workplaces with integrity.</h2>
            <p className="big">Advisory, training and External Member services for PoSH Internal Committees.</p>
            <div className="act"><small>The Act</small>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</div>
            <p style={{ marginTop: 28 }}><Link className="btn btn--red" href="/posh">Explore PoSH services</Link></p>
          </div>
          <div className="rows">
            {[["Expert-led training", "Programmes tailored to your organisation."], ["Compliance audits", "Checks for legal compliance and best practice."], ["Advisory solutions", "Guidance to build an inclusive, safe culture."], ["External member services", "Legal and advisory support for ongoing compliance."]].map(([h, t], i) => (
              <div className="row" key={h}><span className="n">0{i + 1}</span><div><h3>{h}</h3><p>{t}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="eyebrow">5-pillar approach to impact</span>
            <h2>How we build lasting impact.</h2>
          </div>
          <div className="rows">{PILLARS.map((p, i) => <div className="row" key={p}><span className="n">0{i + 1}</span><h3>{p}</h3></div>)}</div>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Who we serve</span><h2>Businesses, institutions and social purpose organisations.</h2></div>
            <Link className="link" href="/whoWeServe">See who we serve in full</Link>
          </div>
          <div className="cols-3">
            {PARTNER_GROUPS.map((g) => (
              <div className="row row--plain" key={g.who} style={{ borderTop: "2px solid var(--green)" }}><div><h3>{g.who}</h3><p>{g.gets.join(" · ")}</p></div></div>
            ))}
          </div>
          <span className="figs-label">Industry focus</span>
          <ul className="industries">{INDUSTRIES.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Our journey in brief</span><h2>Four years of work.</h2></div>
            <Link className="link" href="/journey">Read the full timeline</Link>
          </div>
          <JourneyStrip />
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Flagship programmes 2025–26</span><h2>Convenings, workshops and consultations.</h2></div>
            <Link className="link" href="/events">See all engagements</Link>
          </div>
          <div className="cards">
            {flagships.map((f) => (
              <article className="card" key={f.title}>
                <div className="im"><img src={f.img} alt="" loading="lazy" /></div>
                <div className="bd"><span className="when">{f.when}</span><h3>{f.title}</h3><p>{f.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--green" id="enquiry">
        <div className="wrap enq">
          <div>
            <span className="eyebrow">Get involved</span>
            <h2>Write to us to discuss.</h2>
            <p className="big">Tell us about your organisation. Tell us what support you need. We discuss terms directly.</p>
            <p style={{ marginTop: 28, fontSize: 16 }}>Based in: India<br />Pan-India &amp; global collaborations</p>
          </div>
          <EnquiryForm idPrefix="home" />
        </div>
      </section>
    </>
  );
}
