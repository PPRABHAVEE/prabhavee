import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Img from "@/components/site/Img";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Academic collaborations", "How P/ PRABHAVEE works with universities and academic institutions: Jindal Global University, TNNLU, NDIM and more, through research, workshops and courses.", "/academic");

// The six institutions: four from her events sheet (accepted in her reply of 16 Oct 2026), plus the IICA CSR centre (event 33) and Nirma University, both named in the pitch deck (page 8); Nirma is the sixth she named.
const ACAD = [
  { logo: ["/img/logos/jsjc.png", "Jindal School of Journalism and Communication logo"], photo: ["/img/jindal-jindal-1.webp", "Participants at the Jindal School of Journalism and Communication workshop"], n: "Jindal School of Journalism and Communication, O.P. Jindal Global University", y: "2026", items: ["2-day workshop on Corporate Accountability, Business Reporting and Human Rights, co-organised with New Imaginations: Centre for Peace, Conflict and Justice, at JGU Campus, Sonipat", "The Business of Human Rights: unpacking linkages between corporate accountability, rights-based frameworks and the Fourth Estate"] },
  { logo: ["/img/logos/cbhr-tnnlu.png", "Centre for Business and Human Rights, TNNLU logo"], photo: ["/img/tnnlu-tnnlu.webp", "Participants at a TNNLU and CBHR multi-stakeholder consultation"], n: "Tamil Nadu National Law University: Centre for Business and Human Rights (CBHR)", y: "2025–2026", items: ["Academic and policy research initiative with CBHR, TNNLU and Sustaim Consulting: ‘Local Economies, Global Values: MSMEs Driving Gender Equity in South India’", "Opening high-level plenary, expert consultations and multi-stakeholder dialogue series"] },
  { photo: ["/img/ndim-posh-ndim-3.webp", "Faculty and staff at a PoSH training session at the New Delhi Institute of Management"], n: "New Delhi Institute of Management (NDIM)", y: "2026", items: ["Empanelled consultant for the PoSH Internal Committee: PoSH training and capacity building for faculty and staff"] },
  { photo: ["/img/ev/24-1.webp", "Online guest lecture on the legal and policy framework around social aspects of ESG compliance"], n: "Guru Gobind Singh Indraprastha University, with EHS Guru Sustainable Solutions Pvt. Ltd.", y: "Faculty, 2025 and 2026", items: [{ t: "ESG Compliance Lead Course: Module VI and Parts I and II on the legal and policy framework around social aspects in India (Batch 3)", href: "https://ehsguru.com/esg-compliance-lead-certification-course" }] },
  { mark: "IICA", n: "Centre for Excellence in CSR and Corporate Citizenship, Indian Institute of Corporate Affairs (IICA)", y: "2026", items: ["Expert session on CSR and Branding for Management students: 6-month IICA-WNS Ybrant CSR, ESG & Sustainability Certificate Programme"] },
  { mark: "NU", n: "Centre for Social Justice and Institute of Law, Nirma University", items: [{ t: "Lecture on the topic Corporate Responsibility in Indian Law at a two-day seminar for LLM students titled “Beyond Disclosure: ESG and Business and Human Rights in India” held on 14 and 15 October 2026 at the Institute of Law, Ahmedabad.", href: "https://law.nirmauni.ac.in/news-events/two-day-seminar-titled-beyond-disclosure-esg-and-business-and-human-rights-in-india/" }] },
];

function AcadItems({ items }) {
  return <ul className="acad-items">{items.map((i) => <li key={i.t || i}>{i.t || i}{i.href ? <> <a className="link" href={i.href} target="_blank" rel="noopener noreferrer">Read more<span className="sr-only"> (opens in a new tab)</span></a></> : null}</li>)}</ul>;
}

export default function Academic() {
  return (
    <>
      <PageIntro compact crumb="Services / Academic collaborations" title="Academic collaborations." lede="We consult and collaborate with academic institutions and universities. Research, teaching and practice come together." image={{ src: "/img/banner-jsjc-workshop.webp", alt: "A workshop at the Jindal School of Journalism and Communication", caption: "Workshop at the Jindal School of Journalism and Communication", position: "center 55%" }} />
      <section className="sec">
        <div className="wrap">
          <h2 className="sr-only">Collaborations</h2>
          <div className="acad-feats">
            {ACAD.slice(0, 2).map((a, i) => (
              <article className={`acad-feat${i % 2 ? " acad-feat--flip" : ""}`} key={a.n}>
                <div className="acad-feat-ph"><Img src={a.photo[0]} alt={a.photo[1]} sizes="(max-width: 880px) 100vw, 45vw" /></div>
                <div className="acad-feat-body">
                  <div className="acad-feat-top">{a.logo ? <Img className="acad-logo" src={a.logo[0]} alt={a.logo[1]} /> : null}{a.y ? <span className="acad-year">{a.y}</span> : null}</div>
                  <h3>{a.n}</h3>
                  <AcadItems items={a.items} />
                </div>
              </article>
            ))}
          </div>
          <div className="acad-grid">
            {ACAD.slice(2).map((a) => (
              <article className="acad-card" key={a.n}>
                {a.photo ? <div className="acad-card-ph"><Img src={a.photo[0]} alt={a.photo[1]} sizes="(max-width: 880px) 100vw, 40vw" /></div> : <div className="acad-card-ph acad-card-ph--mark" aria-hidden="true"><span>{a.mark}</span></div>}
                <div className="acad-card-body">
                  {a.y ? <span className="acad-year">{a.y}</span> : null}
                  <h3>{a.n}</h3>
                  <AcadItems items={a.items} />
                </div>
              </article>
            ))}
          </div>
          <p className="acad-more"><Link className="btn" href="/events?cat=Academic%20collaborations">See academic engagements in Events</Link></p>
        </div>
      </section>
      <CtaBand next={["See academic engagements", "/events?cat=Academic%20collaborations"]} />
    </>
  );
}
