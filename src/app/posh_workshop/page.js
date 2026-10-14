import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/meta";
import Img from "@/components/site/Img";

export const metadata = pageMeta("PoSH Pro workshop", "PoSH Pro: a 2-day online workshop on the Prevention of Sexual Harassment at Workplace, run by P/ PRABHAVEE with Yellow Spark for practitioners and law students.", "/posh_workshop");

const GAL = ["posh-pro-advanced-20", "posh-pro-advanced-21", "posh-pro-advanced-22", "posh-pro-advanced-23", "posh-pro-advanced-trainer-facilitators-meet-the-experts"];

export default function PoshPro() {
  return (
    <>
      <PageIntro crumb="Engagements / PoSH Pro workshop" title="PoSH Pro." lede="A 2-day online workshop on the Prevention of Sexual Harassment at Workplace. Interactive sessions, run with Yellow Spark, Strategic HR Consultants." />
      <section className="sec">
        <div className="wrap split">
          <div><span className="eyebrow">About the workshop</span><h2>Bridging the gap between law and practice.</h2></div>
          <div>
            <p className="big">PoSH Pro bridges the gap between law and practice. It simplifies complex provisions of the Act. And it shows how effective implementation can shape equitable workspaces.</p>
            <p>For law students, it opens the door to a fast-growing field of PoSH consulting and practice. Most law curricula only touch on the theory of the Act. Yet practical expertise in workplace compliance, and in serving on Internal Committees, is increasingly sought after.</p>
            <div className="rows" style={{ marginTop: 28 }}>
              <div className="row row--plain"><div><h3>Expert-led practical training</h3><p>Learn directly from experienced legal professionals, HR experts and corporate trainers who bridge theory and real-world application.</p></div></div>
              <div className="row row--plain"><div><h3>Panel insights</h3><p>Panel discussions with a practising lawyer from a law firm and a senior professional from the corporate sector provide foundational and practical insights into fostering safer and more inclusive work environments.</p></div></div>
            </div>
          </div>
        </div>
        <div className="wrap split" style={{ marginTop: 70 }}>
          <div><span className="eyebrow">The 2025 programme</span><h2>PoSH Pro, 25–26 September.</h2><p>Two afternoons online, 2:30 to 5:00 PM IST. Hosted by P/ PRABHAVEE with Yellow Spark, with special guests from PoSH practice and law.</p></div>
          <Img src="/img/posh-pro-2025-poster.webp" sizes="(max-width: 880px) 100vw, 520px" alt="PoSH Pro poster: 25–26 September, 2:30 PM to 5:00 PM IST, hosted by P/ PRABHAVEE and Yellow Spark" style={{ width: "100%", maxWidth: 520 }} />
        </div>
        <div className="wrap cols-3" style={{ marginTop: 60, gap: 16 }}>
          {GAL.map((g) => <a key={g} href={`/img/${g}.webp`} target="_blank" rel="noopener noreferrer"><Img src={`/img/${g}.webp`} alt="PoSH Pro Advanced workshop" sizes="(max-width: 880px) 100vw, 33vw" style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover" }} /></a>)}
        </div>
      </section>
      <CtaBand next={["Explore PoSH services", "/posh"]} />
    </>
  );
}
