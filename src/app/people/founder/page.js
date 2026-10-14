import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/meta";
import { FOUNDER, SITE } from "@/content/site";
import deck from "@/content/deck.json";

// From the pitch deck, slide 6.
const ADVISES = ["Regulatory risk and compliance", "Social sustainability", "Labour rights", "PoSH", "Gender, diversity and inclusion", "Governance", "Ethics and compliance", "Business integrity", "Corporate accountability", "Human rights", "Responsible business"];
const EXPERIENCE = ["Law practice", "Corporate", "LegalTech: governance, risk and compliance solutions", "Global publishing and information services", "Consulting", "Academia and universities", "A public policy office", "A non-profit accelerator", "Social enterprise", "NGO advisory boards"];
import Img from "@/components/site/Img";
import { Credentials } from "@/components/site/TrustStrip";

export const metadata = pageMeta("Founder: Anumita Sarkar", "Anumita Sarkar, lawyer, independent policy and strategic advisor and founder of P/ PRABHAVEE, with close to 20 years across law, policy, ESG and human rights.", "/people/founder");

export default function Founder() {
  return (
    <>
      <PageIntro crumb="People / Founder" title="About the founder." />
      <section className="sec">
        <div className="wrap person">
          <div><Img src="/img/founder.webp" alt={FOUNDER.name} sizes="(max-width: 880px) 100vw, 40vw" priority /></div>
          <div>
            <h2 style={{ fontSize: "clamp(44px,5vw,70px)", marginBottom: 10 }}>{FOUNDER.name}</h2>
            <p className="role">{FOUNDER.role}</p>
            <div className="btnrow">
              <a className="btn" href={SITE.linkedinFounder} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn btn--ghost" href={`mailto:${SITE.email}`}>Email</a>
            </div>
            <div className="stack">{FOUNDER.bio.map((p) => <p key={p} className="big" style={{ fontSize: 18 }}>{p}</p>)}</div>
          </div>
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="split">
            <div><span className="eyebrow">What she advises on</span><p className="pull">Building powerful collaborations. Designing high-impact training and capacity-building programmes.</p></div>
            <div><ul className="chips">{ADVISES.map((a) => <li key={a}>{a}</li>)}</ul>
              <p style={{ marginTop: 26 }}>Leading organisations often invite her to deliver lectures on ESG, CSR, and business and human rights.</p></div>
          </div>
          <span className="figs-label">Experience across</span>
          <div className="exp">{EXPERIENCE.map((x) => <div key={x}>{x}</div>)}</div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Credentials</span><h2>Registered. Empanelled. Contributing.</h2></div></div>
          <Credentials />
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap cols-2">
          <div><span className="eyebrow">Academic &amp; professional training</span><p>{FOUNDER.training}</p><p>{FOUNDER.certs}</p></div>
          <div><span className="eyebrow">Alumni network</span><div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 36 }}><Img src="/img/logos/itcilo-alumni.png" alt="ITCILO Alumni Network member badge" style={{ width: 96, height: 96 }} /><p style={{ margin: 0 }}>Member of the International Training Centre of the ILO (ITCILO) Alumni Network since 2021.</p></div><span className="eyebrow">Organisations engaged with</span><ul className="ticks ticks--sm">{deck.founderOrgs.map((o) => <li key={o}>{o.replace(/;$/, "")}</li>)}</ul></div>
        </div>
      </section>
      <CtaBand next={["Read about our approach", "/background#approach"]} />
    </>
  );
}
