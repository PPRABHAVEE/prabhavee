import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Pending from "@/components/site/Pending";
import { pageMeta } from "@/lib/meta";
import Img from "@/components/site/Img";

export const metadata = pageMeta("External consultants & alumni", "External consultants and alumni of P/ PRABHAVEE.", "/people/consultant");

const ALUM = [["Khushi Garg", "Research Assistant", "Student, B.A.LL.B., Army Institute of Law, Mohali"], ["Manvi Tayal", "Research Assistant", "Student, Master’s of Public Health, Indian Institute of Public Health, Gandhinagar"], ["Rohaan Thyagaraju V", "Final Year Law Student", "Symbiosis International University, Hyderabad"]];

export default function Consultants() {
  return (
    <>
      <PageIntro crumb="People / Consultants & alumni" title="External consultants and alumni." />
      <section className="sec">
        <div className="wrap cols-2">
          <div>
            <h2 className="eyebrow">External consultants</h2>
            <div className="id-card"><Img src="/img/amrita-sarkar.webp" sizes="240px" priority alt="Amrita Sarkar" style={{ width: 240, aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", marginBottom: 22 }} /><h3>Amrita Sarkar</h3><p style={{ fontSize: 17 }}>Advisor, Advocate-on-Record, Supreme Court of India</p>
              <div className="btnrow"><a className="btn" href="https://www.linkedin.com/in/amrita-sarkar-aor" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div>
            <Pending title="Email button">Her feedback says to retain the email button; the address was not provided.</Pending>
          </div>
          <div>
            <h2 className="eyebrow">Our alumni</h2>
            {ALUM.map(([n, p, i]) => <div className="alum" key={n}><h3>{n}</h3><p><b>{p}</b><br />{i}</p></div>)}
          </div>
        </div>
      </section>
      <CtaBand next={["Meet the founder", "/people/founder"]} />
    </>
  );
}
