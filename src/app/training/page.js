import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/meta";
import { TRAINING, CONVENING_FORMATS, CONVENING_ACTIVITIES } from "@/content/site";
import Img from "@/components/site/Img";

export const metadata = pageMeta("Training & capacity building", "Training and institutional capacity building: PoSH, ethics and compliance, supplier capability programmes, and business and human rights for journalists. Multi-stakeholder dialogue and convenings.", "/training");

export default function Training() {
  return (
    <>
      <PageIntro crumb="Services / Training & capacity building" title="Training and capacity building." lede="Strategic, multi-stakeholder and sustainable. We build resilient systems and leadership for long-term impact. We drive collaboration and shared value for meaningful change." />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Programmes</span><h2>What we train on.</h2></div><p>Practical learning for employees, leaders, suppliers and media professionals.</p></div>
          <div className="cols-2">
            {TRAINING.map((t, i) => (
              <div className="row row--plain" key={t.h} style={{ borderTop: "2px solid var(--green)", padding: "26px 0 34px" }}>
                <div><span className="kicker">0{i + 1}</span><h3 style={{ fontSize: 24, margin: "8px 0 14px" }}>{t.h}</h3>
                  <ol className="ticks ticks--sm" style={{ paddingLeft: 0 }}>{t.items.map((x) => <li key={x}>{x}</li>)}</ol></div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 18 }}><Link className="link" href="/events?cat=Training%20%26%20capacity%20building">See our training engagements</Link></p>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="split">
            <div><span className="eyebrow">Multi-stakeholder dialogue &amp; convenings</span><h2>Roundtables, research launches, stakeholder consultations.</h2>
              <p>We nurture collaboration with diverse stakeholder groups. We build strategic partnerships and networks for initiatives. The aim is cross-sector alliances for shared learning and best practice. We also create a shared platform for exchanging views and advancing public discourse.</p></div>
            <Img src="/img/banner-excellence-in-multi-stakeholder-2.webp" sizes="(max-width: 880px) 100vw, 60vw" alt="Participants at a P/ PRABHAVEE multi-stakeholder session" style={{ width: "100%" }} />
          </div>
          <div className="cols-2" style={{ marginTop: 54 }}>
            <div><span className="kicker">Formats</span><ul className="ticks" style={{ marginTop: 12 }}>{CONVENING_FORMATS.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div><span className="kicker">Activities</span><ul className="ticks" style={{ marginTop: 12 }}>{CONVENING_ACTIVITIES.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </div>
        </div>
      </section>
      <CtaBand next={["See training engagements", "/events?cat=Training%20%26%20capacity%20building"]} />
    </>
  );
}
