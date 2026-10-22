import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/meta";
import { FOUNDER, FOUNDER_MORE, SITE } from "@/content/site";
import deck from "@/content/deck.json";
import { LinkedInIcon, MailIcon } from "@/components/site/Icons";

// From the pitch deck, slide 6.
const ADVISES = ["Regulatory risk and compliance", "Social sustainability", "Labour rights", "PoSH", "Gender, diversity and inclusion", "Governance", "Ethics and compliance", "Business integrity", "Corporate accountability", "Human rights", "Responsible business"];
// Her list of 19 Oct 2026, in her order.
const COLLABS = ["NEW IMAGINATIONS: Centre for Peace, Conflict and Justice of Jindal School of Journalism & Communication at O.P. Jindal Global University", "Centre for Business and Human Rights, Tamil Nadu National Law University (TNNLU)", "Centre for Communication Governance, National Law University Delhi", "New Delhi Institute of Management (NDIM)", "EHS GURU Sustainable Solutions Pvt. Ltd.", "Centre for Excellence in CSR and Corporate Citizenship, Indian Institute of Corporate Affairs (IICA)", "Haqdarshak Empowerment Solutions Pvt. Ltd.", "ATMA - An Accelerator for NGOs", "UN Global Compact Network India (UNGCNI)"];
const EXPERIENCE = ["Law practice", "Corporate", "LegalTech: governance, risk and compliance solutions", "Global publishing and information services", "Consulting", "Academia and universities", "Public policy office", "A non-profit accelerator", "Social enterprise", "NGO advisory boards"];
import Img from "@/components/site/Img";
import { Credentials } from "@/components/site/TrustStrip";

export const metadata = pageMeta("Founder: Anumita Sarkar", "Anumita Sarkar, lawyer, independent policy and strategic advisor and founder of P/ PRABHAVEE, with close to 20 years across law, policy, ESG and human rights.", "/people/founder");

const PARTNER_TO = ["Civil Society Organisations", "Law Universities and Law Schools", "Legal Research Institutions", "Public Policy Institutions and Offices", "Academic Research Centres and Think Tanks", "Policy Research and Advocacy Organisations"];

export default function Founder() {
  return (
    <>
      <PageIntro compact crumb="People / Founder" title="About the founder." image={{ src: "/img/banner-unrbhr-anumita.webp", alt: "Anumita Sarkar standing at the welcome sign of the UN Responsible Business and Human Rights Forum, Bangkok", caption: "Anumita Sarkar at the UN Responsible Business and Human Rights Forum, Bangkok", position: "center 30%" }} />
      <section className="sec fd">
        <div className="wrap fd-profile">
          <figure className="fd-photo"><Img src="/img/founder.webp" alt={FOUNDER.name} sizes="(max-width: 880px) 100vw, 40vw" priority /></figure>
          <div className="fd-bio">
            <span className="eyebrow">Founder</span>
            <h2>{FOUNDER.name}</h2>
            <p className="role">{FOUNDER.role}</p>
            <div className="btnrow">
              <a className="btn btn--ico" href={SITE.linkedinFounder} target="_blank" rel="noopener noreferrer"><LinkedInIcon size={16} />LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
              <a className="btn btn--ghost btn--ico" href={`mailto:${SITE.email}`}><MailIcon size={16} />Email</a>
            </div>
            <div className="stack">{FOUNDER.bio.map((p) => <p key={p} className="big">{p}</p>)}</div>
          </div>
        </div>
      </section>

      <section className="sec sec--mist fd">
        <div className="wrap">
          <div className="fd-adv">
            <div><span className="eyebrow">What she advises on</span><p className="pull">Building powerful collaborations. Designing high-impact capacity-building programmes.</p></div>
            <div>
              <ul className="fd-ledger">{ADVISES.map((a, i) => <li key={a}><span>{String(i + 1).padStart(2, "0")}</span>{a}</li>)}</ul>
              <p className="fd-note">Leading organisations invite her to deliver lectures on ESG, CSR, and business and human rights.</p>
            </div>
          </div>
          <h3 className="fd-label">Experience across</h3>
          <ul className="fd-tiles">{EXPERIENCE.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, "0")}</span>{x}</li>)}</ul>
          <h3 className="fd-label">Areas of expertise</h3>
          <ul className="fd-ledger fd-ledger--3">{FOUNDER_MORE.expertise.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, "0")}</span>{x}</li>)}</ul>
        </div>
      </section>

      <section className="sec fd">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Awards &amp; recognitions</span><h2>Recognised for impact and delivery.</h2></div></div>
          <div className="fd-media">
            <figure className="fd-fig"><Img src="/img/founder-impact.webp" alt="Receiving an award at a Wolters Kluwer India event" sizes="(max-width: 980px) 100vw, 40vw" /></figure>
            <ul className="fd-awards fd-awards--2">{FOUNDER_MORE.awards.map((a, i) => <li key={a}><span>{String(i + 1).padStart(2, "0")}</span><p>{a}</p></li>)}</ul>
          </div>
        </div>
      </section>

      <section className="sec sec--mist fd">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Collaborations, consulting and engagements</span></div></div>
          <div className="fd-media fd-media--flip">
            <figure className="fd-fig"><Img src="/img/founder-collaborations.webp" alt="Participants at the Workshop on Trends in Data Governance in India and the EU, New Delhi" sizes="(max-width: 980px) 100vw, 40vw" /></figure>
            <ol className="fd-ledger fd-ledger--1">{COLLABS.map((c, i) => <li key={c}><span>{String(i + 1).padStart(2, "0")}</span>{c}</li>)}</ol>
          </div>
        </div>
      </section>

      <section className="sec fd">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Strategic partner to</span></div></div>
          <div className="fd-media">
            <figure className="fd-fig"><Img src="/img/founder-partner.webp" alt="Receiving a Women on Boards Programme certificate at the Indian School of Development Management" sizes="(max-width: 980px) 100vw, 40vw" /></figure>
            <ol className="fd-ledger fd-ledger--1">{PARTNER_TO.map((c, i) => <li key={c}><span>{String(i + 1).padStart(2, "0")}</span>{c}</li>)}</ol>
          </div>
        </div>
      </section>

      <section className="sec sec--mist fd fd-cred">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Credentials</span><h2>Registered. Empanelled. Contributing.</h2></div></div>
          <Credentials />
        </div>
      </section>

      <section className="sec fd">
        <div className="wrap fd-duo">
          <article className="fd-card">
            <span className="eyebrow">Academic &amp; professional training</span>
            <p>{FOUNDER.training}</p><p>{FOUNDER.certs}</p>
            <details className="list">
              <summary>Full list of degrees, programmes and certifications</summary>
              {FOUNDER_MORE.credentials.map((g) => <div key={g.h} className="fd-cred-group"><span className="kicker">{g.h}</span><ul className="ticks ticks--sm">{g.items.map((x) => <li key={x}>{x}</li>)}</ul></div>)}
            </details>
          </article>
          <article className="fd-card">
            <span className="eyebrow">Alumni network</span>
            <div className="fd-alum"><Img src="/img/logos/itcilo-alumni.png" alt="ITCILO Alumni Network member badge" style={{ width: 96, height: 96 }} /><p>Member of the <a className="link" href="https://alumni.itcilo.org/profile/ac41076bf00061978360c80278e455c043f7bbf6" target="_blank" rel="noopener noreferrer">International Training Centre of the ILO (ITCILO) Alumni Network</a> since 2021.</p></div>
            <p>Cohort 5, Women on Boards Programme, Indian School of Development Management (ISDM).</p>
          </article>
        </div>
      </section>
      <CtaBand next={["Read about our approach", "/background#approach"]} />
    </>
  );
}
