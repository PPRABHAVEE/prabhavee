import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/meta";
import { TRAINING, TRAINING_FOR, CONVENING_FORMATS, CONVENING_ACTIVITIES } from "@/content/site";
import Img from "@/components/site/Img";
import PhotoBand from "@/components/site/PhotoBand";

export const metadata = pageMeta("Training & capacity building", "Training and capacity building: PoSH, ethics and compliance, supplier capability, and business and human rights for journalists. Multi-stakeholder convenings.", "/training");

export default function Training() {
  return (
    <>
      <PageIntro compact crumb="Services / Training & capacity building" title="Training and capacity building." lede="We design strategic learning and capacity-building initiatives that strengthen individual capabilities, build institutional capacity and foster collaboration for sustainable impact." image={{ src: "/img/banner-jsjc-session.webp", alt: "A training session in progress at the Jindal School of Journalism and Communication", caption: "A session at the Jindal School of Journalism and Communication", position: "center 40%" }} />
      <PhotoBand src="/img/ev/7-1.webp" alt="Participants at the business integrity and ESG orientation training by UN Global Compact Network India" caption="Stakeholder at Business Integrity and ESG orientation training, UN Global Compact Network India" position="center 35%" />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Programmes</span><h2>Building capabilities.</h2></div><p>Practical learning for employees, leaders, businesses and media professionals.</p></div>
          <div className="trn-grid">
            {TRAINING.map((t, i) => (
              <article className="trn-card" key={t.h}>
                <span className="trn-n">0{i + 1}</span>
                <h3>{t.h}</h3>
                <ul className="trn-list">{t.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="trn-for">
            <span className="trn-for-l">Who our programmes are for</span>
            <ul>{TRAINING_FOR.map((x, i) => <li key={x}><span>0{i + 1}</span>{x}</li>)}</ul>
            <Link className="btn btn--ghost" href="/events?cat=Training%20%26%20capacity%20building">See our training engagements</Link>
          </div>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="split">
            <span className="eyebrow">Multi-stakeholder dialogue &amp; convenings</span>
          <div><h2>Roundtables, research launches, stakeholder consultations.</h2>
              <p>We nurture collaboration with diverse stakeholder groups. We build strategic partnerships and networks for initiatives. The aim is cross-sector alliances for shared learning and best practice. We also create a shared platform for exchanging views and advancing public discourse.</p></div>
            <Img className="conv-photo" src="/img/ev/5-1.webp" sizes="(max-width: 880px) 100vw, 50vw" alt="Participants at a P/ PRABHAVEE multi-stakeholder roundtable discussion" />
          </div>
          <div className="conv-lists">
            <section className="conv-panel" aria-labelledby="conv-f"><h3 id="conv-f"><span>Formats</span></h3><ul>{CONVENING_FORMATS.map((x) => <li key={x}>{x}</li>)}</ul></section>
            <section className="conv-panel" aria-labelledby="conv-a"><h3 id="conv-a"><span>Activities</span></h3><ul>{CONVENING_ACTIVITIES.map((x) => <li key={x}>{x}</li>)}</ul></section>
          </div>
        </div>
      </section>
      <CtaBand next={["See training engagements", "/events?cat=Training%20%26%20capacity%20building"]} />
    </>
  );
}
