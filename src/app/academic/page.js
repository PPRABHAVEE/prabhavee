import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Pending from "@/components/site/Pending";
import Img from "@/components/site/Img";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Academic collaborations", "How P/ PRABHAVEE works with universities and academic institutions: Jindal Global University, TNNLU, NDIM and more, through research, workshops and courses.", "/academic");

// From her events sheet (rows typed Academic collaboration) and the pitch deck.
const ACAD = [
  { logo: ["/img/logos/jsjc.png", "Jindal School of Journalism and Communication logo"], photo: ["/img/jindal-jindal-1.webp", "Participants at the Jindal School of Journalism and Communication workshop"], n: "Jindal School of Journalism and Communication, O.P. Jindal Global University", y: "2026", items: ["2-day workshop on Corporate Accountability, Business Reporting and Human Rights, co-organised with New Imaginations: Centre for Peace, Conflict and Justice, at JGU Campus, Sonipat", "The Business of Human Rights: unpacking linkages between corporate accountability, rights-based frameworks and the Fourth Estate"] },
  { logo: ["/img/logos/cbhr-tnnlu.png", "Centre for Business and Human Rights, TNNLU logo"], photo: ["/img/tnnlu-tnnlu.webp", "Participants at a TNNLU and CBHR multi-stakeholder consultation"], n: "Tamil Nadu National Law University: Centre for Business and Human Rights (CBHR)", y: "2025–2026", items: ["Academic and policy research initiative with CBHR, TNNLU and Sustaim Consulting: ‘Local Economies, Global Values: MSMEs Driving Gender Equity in South India’", "Opening high-level plenary, expert consultations and multi-stakeholder dialogue series"] },
  { photo: ["/img/ndim-posh-ndim-3.webp", "Faculty and staff at a PoSH training session at the New Delhi Institute of Management"], n: "New Delhi Institute of Management (NDIM)", y: "2026", items: ["Empanelled consultant for the PoSH Internal Committee: PoSH training and capacity building for faculty and staff"] },
  { photo: ["/img/ev/24-1.webp", "Online guest lecture on the legal and policy framework around social aspects of ESG compliance"], n: "Guru Gobind Singh Indraprastha University, with EHS Guru Sustainable Solutions", y: "2025–2026", items: ["ESG Compliance Lead Course: Module VI and Parts I and II on the legal and policy framework around social aspects in India (Batch 3)"] },
];
const OTHERS = ["Nirma University, Ahmedabad", "Centre for Communication Governance, National Law University Delhi", "Centre for Excellence in CSR and Corporate Citizenship, Indian Institute of Corporate Affairs", "IMT Ghaziabad", "Centre of Ethics, Responsible Organisation & ESG initiatives (CERO), Management Development Institute"];

export default function Academic() {
  return (
    <>
      <PageIntro crumb="Services / Academic collaborations" title="Academic collaborations." lede="We consult and collaborate with academic institutions and universities. Research, teaching and practice come together." />
      <section className="sec">
        <div className="wrap">
          <h2 className="sr-only">Collaborations</h2>
          {ACAD.map((a) => (
            <div className="acad" key={a.n}><div>{a.photo ? <div className="acad-ph"><Img src={a.photo[0]} alt={a.photo[1]} sizes="(max-width: 880px) 100vw, 40vw" /></div> : null}{a.logo ? <Img className="acad-logo" src={a.logo[0]} alt={a.logo[1]} /> : null}<span className="kicker">{a.y}</span><h3>{a.n}</h3></div><ul>{a.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
          ))}
          <div className="acad"><div><span className="kicker">Also engaged with</span><h3>Other institutions</h3></div><ul>{OTHERS.map((i) => <li key={i}>{i}</li>)}</ul></div>
          <p style={{ marginTop: 30 }}><Link className="btn" href="/events?cat=Academic%20collaborations">See academic engagements in Events</Link></p>
          <Pending title="Confirm the list">The deck states six academic institutions and universities. Four are shown from her events sheet; the others are named elsewhere in the deck. Please confirm the six and any additions.</Pending>
        </div>
      </section>
      <CtaBand next={["See academic engagements", "/events?cat=Academic%20collaborations"]} />
    </>
  );
}
