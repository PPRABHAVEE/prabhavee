import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Pending from "@/components/site/Pending";
import { pageMeta } from "@/lib/meta";
import { SERVICES, NONPROFIT_SERVICES, OFFERINGS, ENGAGE_MODELS, ENGAGE_ACTIVITIES } from "@/content/site";

export const metadata = pageMeta("Professional services", "Regulatory risk and compliance advisory, policy and advocacy, research and convenings, training and capacity building, strategic programmes, governance and PoSH consultancy.", "/services");

const enc = (s) => encodeURIComponent(s);

export default function Services() {
  return (
    <>
      <PageIntro crumb="Services" title="Practice areas." lede="Advisory, facilitation, capacity building and strategic programmes for businesses, institutions and social purpose organisations: context-specific, actionable and sustainable solutions tailored to each organisation’s needs." />
      <nav className="subnav" aria-label="Practice areas"><div className="wrap">
        {SERVICES.map((s) => <a key={s.slug} href={`#${s.slug}`}>{s.title}</a>)}
        <a href="#nonprofit">For non-profits</a><a href="#engage">How we engage</a>
      </div></nav>

      <div className="wrap" style={{ paddingBlock: "20px 40px" }}>
        {SERVICES.map((s, i) => (
          <section className="svc" id={s.slug} key={s.slug}>
            <div><span className="kicker">0{i + 1}</span><h2>{s.title}</h2></div>
            <div>
              <p className="big">{s.body}</p>
              {s.items.length ? <><h4>Key services</h4><ul className="ticks">{s.items.map((x) => <li key={x}>{x}</li>)}</ul></> : null}
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
          <div className="sec-head"><div><span className="eyebrow">For non-profits and social enterprises</span><h2>Legal, compliance and partnership support.</h2></div><p>Services for nonprofit organisations, Section 8 companies, CSR foundations, start-ups and early-stage NGOs, and social entrepreneurs.</p></div>
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
          <div className="sec-head"><div><span className="eyebrow">Offerings &amp; how we engage</span><h2>Operationalising human rights due diligence.</h2></div><p>Helping organisations operationalise human rights due diligence through governance advisory, supplier capability building programmes and strategic multi-stakeholder engagement.</p></div>
          <div className="cols-2">
            <div><span className="kicker">Offerings</span><ul className="ticks" style={{ marginTop: 12 }}>{OFFERINGS.map((o) => <li key={o}>{o}</li>)}</ul></div>
            <div><span className="kicker">Engagement models</span><ul className="ticks" style={{ marginTop: 12 }}>{ENGAGE_MODELS.map((o) => <li key={o}>{o}</li>)}</ul>
              <p style={{ marginTop: 22 }}>Terms are discussed directly. <Link className="link" href="/contact">Write to us to discuss</Link></p></div>
          </div>
          <span className="figs-label">Knowledge, training and facilitation activities</span>
          <div className="cols-3">{ENGAGE_ACTIVITIES.map(([h, t]) => <div className="row row--plain" key={h} style={{ borderTop: "1px solid var(--line)" }}><div><h3 style={{ fontSize: 18 }}>{h}</h3><p>{t}</p></div></div>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
