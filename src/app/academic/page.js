import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Pending from "@/components/site/Pending";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Academic collaborations", "Consulting and collaborations of P/ PRABHAVEE with academic institutions and universities.", "/academic");

// From her events sheet (rows typed Academic collaboration) and the pitch deck.
const ACAD = [
  { n: "Jindal School of Journalism and Communication, O.P. Jindal Global University", y: "2026", items: ["2-day workshop on Corporate Accountability, Business Reporting and Human Rights, co-organised with New Imaginations: Centre for Peace, Conflict and Justice, at JGU Campus, Sonipat", "The Business of Human Rights: unpacking linkages between corporate accountability, rights-based frameworks and the Fourth Estate"] },
  { n: "Tamil Nadu National Law University: Centre for Business and Human Rights (CBHR)", y: "2025–2026", items: ["Academic and policy research initiative with CBHR, TNNLU and Sustaim Consulting: ‘Local Economies, Global Values: MSMEs Driving Gender Equity in South India’", "Opening high-level plenary, expert consultations and multi-stakeholder dialogue series"] },
  { n: "New Delhi Institute of Management (NDIM)", y: "2026", items: ["Empanelled consultant for the PoSH Internal Committee: PoSH training and capacity building for faculty and staff"] },
  { n: "Guru Gobind Singh Indraprastha University, with EHS Guru Sustainable Solutions", y: "2025–2026", items: ["ESG Compliance Lead Course: Module VI and Parts I and II on the legal and policy framework around social aspects in India (Batch 3)"] },
];
const OTHERS = ["Nirma University, Ahmedabad", "Centre for Communication Governance, National Law University Delhi", "Centre for Excellence in CSR and Corporate Citizenship, Indian Institute of Corporate Affairs", "IMT Ghaziabad", "Centre of Ethics, Responsible Organisation & ESG initiatives (CERO), Management Development Institute"];

export default function Academic() {
  return (
    <>
      <PageIntro crumb="Services / Academic collaborations" title="Academic collaborations." lede="Consulting and collaborations with academic institutions and universities, bringing research, teaching and practice together." />
      <section className="sec">
        <div className="wrap">
          {ACAD.map((a) => (
            <div className="acad" key={a.n}><div><span className="kicker">{a.y}</span><h3>{a.n}</h3></div><ul>{a.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
          ))}
          <div className="acad"><div><span className="kicker">Also engaged with</span><h3>Other institutions</h3></div><ul>{OTHERS.map((i) => <li key={i}>{i}</li>)}</ul></div>
          <p style={{ marginTop: 30 }}><Link className="btn" href="/events?cat=Academic%20collaborations">See academic engagements in Events</Link></p>
          <Pending title="Confirm the list">The deck states six academic institutions and universities. Four are shown from her events sheet; the others are named elsewhere in the deck. Please confirm the six and any additions.</Pending>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
