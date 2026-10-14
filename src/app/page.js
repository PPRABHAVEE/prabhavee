import Link from "next/link";
import Orbit from "@/components/site/Orbit";
import Pending from "@/components/site/Pending";
import EnquiryForm from "@/components/site/EnquiryForm";
import { APPROACH, SERVICES, STATS, INDUSTRIES, FLAGSHIPS, PILLARS, PARTNER_GROUPS } from "@/content/site";

export default function Home() {
  const flagships = FLAGSHIPS.filter((f) => f.img).slice(0, 3);
  return (
    <>
      <section className="hero">
        <img className="hero-img" src="/img/unrbhr-forum-2026-55529117037-f155f3b5a1-c.jpg" alt="Delegates at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026" fetchPriority="high" />
        <div className="wrap hero-in">
          <span className="eyebrow">P/ PRABHAVEE — PARTNER FOR SOCIAL IMPACT</span>
          <h1>Strategic advisors for <em>responsible business</em>, workplace governance and human rights.</h1>
          <p className="hero-lede">We partner with businesses to identify and understand regulatory risks, strengthen compliance, and implement practical approaches to manage human rights risks and stakeholder expectations across operations and supply chains.</p>
          <div className="hero-actions">
            <a className="btn btn--red" href="#enquiry">Send an enquiry</a>
            <Link className="link" href="/services">Explore our services</Link>
          </div>
        </div>
        <div className="hero-tag">Do Good Business. Build Trust<small>Registered with the Ministry of Women &amp; Child Development</small></div>
        <div className="hero-figs"><div className="wrap">{STATS.network.map((s) => <div key={s.n}><b>{s.n}</b><span>{s.t}</span></div>)}</div></div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>We practice at the intersection of policy, law, communication, society and business strategy.</h2>
          </div>
          <div>
            <p className="big">P/ PRABHAVEE is an independent strategy and management consultancy based in Delhi, advancing human rights and responsible business through strategic advisory, multi-stakeholder initiatives, consultation and facilitation, training and institutional capacity building, and the design and delivery of strategic programmes.</p>
            <p>Founded in 2022 and led by lawyer Anumita Sarkar, our work focuses on the Social and Governance dimensions of ESG, where regulatory developments, responsible business conduct, business practices and stakeholder expectations intersect. We help organisations identify synergies between local regulation, labour standards, business and human rights principles and responsible business practice, and translate these into actionable strategies for engagement and influence.</p>
            <Link className="link" href="/background">More about our practice</Link>
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
              <li><b>Legal advisory</b>Professional legal and policy advisory services</li>
              <li><b>Capacity building</b>Strategic training and programmes</li>
              <li><b>Social impact</b>Business and human rights</li>
              <li><b>Law &amp; policy research</b>Knowledge generation and policy influence</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Our approach</span><h2>Articulation. Alignment. Actualisation.</h2></div>
            <p>Our advisory practice is grounded in Indian regulatory expectations aligned with global frameworks, regulations, standards and best practices.</p>
          </div>
          <div className="approach">
            {APPROACH.map((a) => (
              <div key={a.k}><span className="kicker">{`0${APPROACH.indexOf(a) + 1}`}</span><div className="k">{a.k}</div><p>{a.lead}</p></div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}><Link className="link" href="/background#approach">See each step of the framework</Link></p>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Practice areas</span><h2>Advisory, facilitation and capacity building.</h2></div>
            <p>Context-specific, actionable and sustainable solutions through proprietary frameworks tailored to each organisation’s needs.</p>
          </div>
          {SERVICES.map((s, i) => (
            <Link className="svc-row" key={s.slug} href={`/services#${s.slug}`}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.short}</p><span className="go">Explore</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Impact in numbers</span><h2>A track record across policy, training and partnerships.</h2></div>
          </div>
          <div className="figs figs--6">{STATS.engagements.map((s) => <div key={s.t}><b>{s.n}</b><span>{s.t}</span></div>)}</div>
          <Pending title="Which numbers">The deck PDF says 1150+ trained, 6 academic institutions and 70+ PoSH organisations; the deck PowerPoint, brochure and client list support 1100+, 5 and about 60. The PDF figures are shown. Confirm with Anumita.</Pending>
        </div>
      </section>

      <section className="sec sec--green">
        <div className="wrap split">
          <div>
            <span className="eyebrow">PoSH consultancy &amp; services</span>
            <h2>Safeguarding workplaces with integrity.</h2>
            <p className="big">Prevention of Sexual Harassment of Women at Workplace advisory, training and External Member of PoSH Internal Committee.</p>
            <div className="act"><small>The Act</small>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</div>
            <p style={{ marginTop: 28 }}><Link className="btn btn--red" href="/posh">Explore PoSH services</Link></p>
          </div>
          <div className="rows">
            {[["Expert-led training", "PoSH training programmes tailored to your organisation’s needs."], ["Compliance audits", "Assessments to ensure legal compliance and best practices."], ["Advisory solutions", "Strategic guidance to build an inclusive and safe workplace culture."], ["External member services", "Continuous legal, advisory and hands-on support for ongoing compliance."]].map(([h, t], i) => (
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
            <Link className="link" href="/whoWeServe">Who we serve &amp; collaborate with</Link>
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
            <div><span className="eyebrow">Flagship programmes 2025–26</span><h2>Convenings, workshops and consultations.</h2></div>
            <Link className="link" href="/events">All engagements</Link>
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
            <p className="big">Tell us about your organisation and the support you are looking for. Engagement terms are discussed directly, so please get in touch.</p>
            <p style={{ marginTop: 28, fontSize: 16 }}>Based in: India<br />Pan-India &amp; global collaborations</p>
          </div>
          <EnquiryForm idPrefix="home" />
        </div>
      </section>
    </>
  );
}
