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
      <PageIntro crumb="People / Consultants & alumni" title="External consultants and alumni." lede="The advisors and research alumni who have worked with P/ PRABHAVEE, from law and public health." image={{ src: "/img/banner-jsjc-workshop.webp", alt: "A workshop at the Jindal School of Journalism and Communication", caption: "Workshop at the Jindal School of Journalism and Communication", position: "center 40%" }} />
      <section className="sec">
        <div className="wrap">
          <span className="eyebrow">External consultants</span>
          <div className="cons-card">
            <Img src="/img/amrita-sarkar.webp" sizes="(max-width: 880px) 70vw, 300px" priority alt="Amrita Sarkar" />
            <div className="cons-body">
              <h2>Amrita Sarkar</h2>
              <p className="big">Advisor, Advocate-on-Record, Supreme Court of India</p>
              <div className="btnrow"><a className="btn btn--ico" href="https://www.linkedin.com/in/amrita-sarkar-aor" target="_blank" rel="noopener noreferrer"><LinkedInIcon size={16} />LinkedIn<span className="sr-only"> (opens in a new tab)</span></a><a className="btn btn--ghost btn--ico" href="mailto:amritasarkar.adv@gmail.com"><MailIcon size={16} />Email</a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Our alumni</span><h2>Alumni of the practice.</h2></div><p>Research alumni from law and public health.</p></div>
          <ul className="alum-grid">{ALUM.map(([n, i]) => <li key={n}><span className="mono" aria-hidden="true">{n.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span><h3>{n}</h3><p>{i}</p></li>)}</ul>
        </div>
      </section>

      <section className="sec sec--green">
        <div className="wrap cons-join">
          <div><span className="eyebrow">Join our team</span><h2>Join our team.</h2><p>Explore the intersection of law, policy, human rights and responsible business.</p></div>
          <Link className="btn btn--red" href="/contact?interest=Internship">Ask about internships</Link>
        </div>
      </section>
      <CtaBand next={["Meet the founder", "/people/founder"]} />
    </>
  );
}
