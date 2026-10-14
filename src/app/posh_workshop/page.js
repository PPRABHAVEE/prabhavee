import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("PoSH Pro workshop", "PoSH Pro: a 2-day online workshop on the Prevention of Sexual Harassment at Workplace, with Yellow Spark.", "/posh_workshop");

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
        <div className="wrap cols-3" style={{ marginTop: 60, gap: 16 }}>
          {GAL.map((g) => <a key={g} href={`/img/${g}.jpg`} target="_blank" rel="noopener noreferrer"><img src={`/img/${g}.jpg`} alt="PoSH Pro Advanced workshop" loading="lazy" style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover" }} /></a>)}
        </div>
      </section>
      <CtaBand next={["Explore PoSH services", "/posh"]} />
    </>
  );
}
