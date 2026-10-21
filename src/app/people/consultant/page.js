import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import Img from "@/components/site/Img";
import { LinkedInIcon, MailIcon } from "@/components/site/Icons";

export const metadata = pageMeta("External consultants & alumni", "External consultants and alumni of P/ PRABHAVEE, including an Advocate-on-Record at the Supreme Court of India and research alumni from law and public health.", "/people/consultant");

const ALUM = [["Khushi Garg", "Army Institute of Law, Mohali"], ["Manvi Tayal", "Indian Institute of Public Health, Gandhinagar"], ["Rohaan Thyagaraju V", "Symbiosis International University, Hyderabad"]];

export default function Consultants() {
  return (
    <>
      <PageIntro crumb="People / Consultants & alumni" title="External consultants and alumni." />
      <section className="sec">
        <div className="wrap cols-2">
          <div>
            <h2 className="eyebrow">External consultants</h2>
            <div className="id-card"><Img src="/img/amrita-sarkar.webp" sizes="240px" priority alt="Amrita Sarkar" style={{ width: 240, aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", marginBottom: 22 }} /><h3>Amrita Sarkar</h3><p style={{ fontSize: 17 }}>Advisor, Advocate-on-Record, Supreme Court of India</p>
              <div className="btnrow"><a className="btn btn--ico" href="https://www.linkedin.com/in/amrita-sarkar-aor" target="_blank" rel="noopener noreferrer"><LinkedInIcon size={16} />LinkedIn<span className="sr-only"> (opens in a new tab)</span></a><a className="btn btn--ghost btn--ico" href="mailto:amritasarkar.adv@gmail.com"><MailIcon size={16} />Email</a></div></div>
          </div>
          <div>
            <h2 className="eyebrow">Our alumni</h2>
            {ALUM.map(([n, i]) => <div className="alum-card" key={n}><span className="mono" aria-hidden="true">{n.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span><div><h3>{n}</h3><p>{i}</p></div></div>)}
            <div className="joinbox"><h3>Join our team.</h3><p>Explore the intersection of law, policy, human rights and responsible business.</p><Link className="btn btn--red" href="/contact?interest=Internship">Ask about internships</Link></div>
          </div>
        </div>
      </section>
      <CtaBand next={["Meet the founder", "/people/founder"]} />
    </>
  );
}
