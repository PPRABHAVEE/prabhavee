import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Pending from "@/components/site/Pending";
import AudienceMap from "@/components/site/AudienceMap";
import PhotoBand from "@/components/site/PhotoBand";
import { pageMeta } from "@/lib/meta";
import { SERVICES, NONPROFIT_SERVICES, OFFERINGS, ENGAGE_MODELS, ENGAGE_ACTIVITIES } from "@/content/site";

export const metadata = pageMeta("Professional services", "Regulatory risk and compliance advisory, policy and advocacy, research and convenings, training and capacity building, strategic programmes, governance and PoSH consultancy.", "/services");

const enc = (s) => encodeURIComponent(s);
// Which audience each area serves (deck slide 20).
const FOR = { "regulatory-risk": "Businesses, brands & suppliers", "policy-advocacy": "Businesses, brands & suppliers", "policy-research": "Universities, research centres & think tanks", "strategic-programmes": "Universities, research centres & think tanks", "training-capacity": "Universities, research centres & think tanks", "governance-boards": "Social purpose organisations", "multi-stakeholder": "Social purpose organisations", posh: "Businesses, brands & suppliers" };

export default function Services() {
  return (
    <>
      <PageIntro crumb="Services" title="Practice areas." lede="Advisory, facilitation, capacity building and strategic programmes. For businesses, institutions and social purpose organisations. Practical solutions, tailored to each organisation’s needs." image={{ src: "/img/banner-forum-session.webp", alt: "A session in progress at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026", caption: "A session at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok", position: "center 50%" }} />
      <nav className="subnav" aria-label="Practice areas"><div className="wrap">
        {SERVICES.map((s) => <a key={s.slug} href={`#${s.slug}`}>{s.title}</a>)}
        <a href="#nonprofit">For non-profits</a><a href="#engage">How we engage</a>
      </div></nav>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Find your fit</span><h2>Start with who you are.</h2></div><p>Three kinds of organisation. Each gets a different mix of our work.</p></div>
          <AudienceMap />
        </div>
      </section>
      <PhotoBand src="/img/unrbhr-forum-2026-55531628986-0223b14d31-c.webp" alt="A working session at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026" caption="A working session at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok" position="center 45%" />

      <div className="wrap" style={{ paddingBlock: "70px 40px" }}>
        {SERVICES.map((s, i) => (
          <section className="svc" id={s.slug} key={s.slug}>
            <div><span className="kicker">0{i + 1}</span><h2>{s.title}</h2>{FOR[s.slug] ? <p className="for">For: {FOR[s.slug]}</p> : null}</div>
            <div>
              <p className="big">{s.body}</p>
              {s.items.length ? <><h3 className="sv-h">Key services</h3><ul className="ticks">{s.items.map((x) => <li key={x}>{x}</li>)}</ul></> : null}
              {s.benefit ? <p className="benefit"><b>Business benefit.</b> {s.benefit}</p> : null}
              <p style={{ marginTop: 22, display: "flex", gap: 26, flexWrap: "wrap" }}>
                {s.link ? <Link className="link" href={s.link[1]}>{s.link[0]}</Link> : null}
                <Link className="link" href={`/contact?interest=${enc(s.title)}`}>Discuss this service</Link>
              </p>
            </div>
          </section>
        ))}
      </div>

      <section className="sec sec--mist" id="nonprofit">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">For non-profits and social enterprises</span><h2>Legal, compliance and partnership support.</h2></div><p>For non-profit organisations, Section 8 companies, CSR foundations, start-ups, early-stage NGOs and social entrepreneurs.</p></div>
          <div className="cols-2">
            {NONPROFIT_SERVICES.map((s) => (
              <div key={s.slug}><h3 style={{ fontSize: 24 }}>{s.title}</h3><p>{s.body}</p><ul className="ticks ticks--sm">{s.items.map((x) => <li key={x}>{x}</li>)}</ul><p style={{ marginTop: 18 }}><Link className="link" href={`/contact?interest=${enc(s.title)}`}>Discuss this service</Link></p></div>
            ))}
          </div>
          <Pending title="Confirm with Anumita">These two groups come from the current website and are not in the pitch deck. They are kept so no existing service disappears.</Pending>
        </div>
      </section>

      <section className="sec" id="engage">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Offerings &amp; how we engage</span><h2>Operationalising human rights due diligence.</h2></div><p>We help organisations put human rights due diligence into practice. We use governance advisory, supplier capability programmes and strategic multi-stakeholder engagement.</p></div>
          <div className="cols-2">
            <div><span className="kicker">Offerings</span><ul className="ticks" style={{ marginTop: 12 }}>{OFFERINGS.map((o) => <li key={o}>{o}</li>)}</ul></div>
            <div><span className="kicker">Engagement models</span><ul className="ticks" style={{ marginTop: 12 }}>{ENGAGE_MODELS.map((o) => <li key={o}>{o}</li>)}</ul>
              <p style={{ marginTop: 22 }}>We discuss terms directly. <Link className="link" href="/contact">Write to us to discuss</Link></p></div>
          </div>
          <span className="figs-label">Knowledge, training and facilitation activities</span>
          <div className="cols-3">{ENGAGE_ACTIVITIES.map(([h, t]) => <div className="row row--plain" key={h} style={{ borderTop: "1px solid var(--line)" }}><div><h3 style={{ fontSize: 18 }}>{h}</h3><p>{t}</p></div></div>)}</div>
        </div>
      </section>
      <CtaBand next={["See who we serve", "/whoWeServe"]} />
    </>
  );
}
