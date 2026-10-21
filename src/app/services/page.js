import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import AudienceMap from "@/components/site/AudienceMap";
import PhotoBand from "@/components/site/PhotoBand";
import { pageMeta } from "@/lib/meta";
import Fold from "@/components/site/Fold";
import { SERVICES, OFFERINGS, ENGAGE_MODELS, ENGAGE_ACTIVITIES } from "@/content/site";

export const metadata = pageMeta("Professional services", "Regulatory risk and compliance, policy and advocacy, research, training, strategic programmes, governance and PoSH consultancy for businesses and institutions.", "/services");

const enc = (s) => encodeURIComponent(s);
// Which audience each area serves (deck slide 20).
const FOR = { "regulatory-risk": "Businesses, brands & suppliers", "policy-advocacy": "Businesses, brands & suppliers", "policy-research": "Universities, research centres & think tanks", "strategic-programmes": "Universities, research centres & think tanks", "training-capacity": "Universities, research centres & think tanks", "governance-boards": "Social purpose organisations", "multi-stakeholder": "Social purpose organisations; Businesses, brands & suppliers", posh: "Businesses, brands & suppliers" };

export default function Services() {
  return (
    <>
      <PageIntro crumb="Services" title="Practice areas." lede="Advisory, facilitation, capacity building and strategic programmes. For businesses, institutions and social purpose organisations. Practical solutions, tailored to each organisation’s needs." image={{ src: "/img/banner-forum-session.webp", alt: "A session in progress at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026", caption: "A session at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok", position: "center 50%" }} />
      <nav className="subnav" aria-label="Practice areas"><div className="wrap">
        {SERVICES.map((s) => <a key={s.slug} href={`#${s.slug}`}>{s.title}</a>)}
        <a href="#engage">How we engage</a>
      </div></nav>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Find your fit</span><h2>Start with who you are.</h2></div><p>Three kinds of organisation. Each gets a different mix of our work.</p></div>
          <AudienceMap />
        </div>
      </section>
      <PhotoBand src="/img/unrbhr-forum-2026-55531628986-0223b14d31-c.webp" alt="A working session at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026" caption="A working session at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok" position="center 45%" />

      <div className="wrap" style={{ paddingBlock: "36px 0" }}>
        {SERVICES.map((s, i) => (
          <section className="svc" id={s.slug} key={s.slug}>
            <span className="kicker svc-index">0{i + 1}</span>
            <div><h2>{s.title}</h2>{FOR[s.slug] ? <p className="for">For: {FOR[s.slug]}</p> : null}</div>
            <div>
              <p className="big">{s.body}</p>
              {s.items.length ? <><h3 className="sv-h">Key services</h3><ul className="ticks">{s.items.map((x) => <li key={x}>{x}</li>)}</ul></> : null}
              {s.benefit ? <p className="benefit"><b>Business benefit.</b> {s.benefit}</p> : null}
              {s.link ? <p style={{ marginTop: 22 }}><Link className="link" href={s.link[1]}>{s.link[0]}</Link></p> : null}
            </div>
          </section>
        ))}
      </div>

      <section className="sec sec--mist" id="engage">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Offerings &amp; how we engage</span><h2>Operationalising human rights due diligence.</h2></div><p>Helping organisations operationalise Human Rights Due Diligence through governance advisory, supplier capability building programme and strategic multi-stakeholder engagement.</p></div>
          <div className="cols-2">
            <div><span className="kicker">Offerings</span><ul className="ticks" style={{ marginTop: 12 }}>{OFFERINGS.map((o) => <li key={o}>{o}</li>)}</ul></div>
            <div><span className="kicker">Engagement models</span><ul className="ticks" style={{ marginTop: 12 }}>{ENGAGE_MODELS.map((o) => <li key={o}>{o}</li>)}</ul>
              <p style={{ marginTop: 22 }}>We discuss terms directly. <Link className="link" href="/contact">Explore a partnership</Link></p></div>
          </div>
          <Fold title="Knowledge, training and facilitation activities">
            <span className="figs-label fold-title">Knowledge, training and facilitation activities</span>
            <div className="cols-3">{ENGAGE_ACTIVITIES.map(([h, t]) => <div className="row row--plain" key={h} style={{ borderTop: "1px solid var(--line)" }}><div><h3>{h}</h3><p>{t}</p></div></div>)}</div>
          </Fold>
        </div>
      </section>
      <CtaBand next={["See who we serve", "/whoWeServe"]} />
    </>
  );
}
