import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Img from "@/components/site/Img";
import { pageMeta } from "@/lib/meta";
import { LOGOS, NETWORK_BLOCKS } from "@/content/site";

export const metadata = pageMeta("Networks & collaborations", "Ongoing and past networks, mentorship roles and strategic collaborations of P/ PRABHAVEE across the UN system, universities, industry bodies and civil society.", "/networking");

export default function Networking() {
  return (
    <>
      <PageIntro crumb="About / Networks & collaborations" title="Networks and strategic collaborations." lede="We work with leading organisations. Together we drive change and sustainable development across industries." image={{ src: "/img/banner-networks-aima-2026.webp", alt: "A group photo at the AIMA 68th Foundation Day and 18th National Management Day, February 2024", caption: "AIMA 68th Foundation Day and 18th National Management Day, New Delhi, February 2024", position: "center 35%" }} />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Strategic collaborations</span><h2>Organisations we work with.</h2></div>
            <p>Across the UN system, academia, research centres and civil society.</p>
          </div>
          <div className="logo-strip">
            <Img className="wide" src="/img/logos/un-agencies.png" alt="ILO, UN Women, IOM, UNEP, UNICEF, UN Human Rights and UNDP Business and Human Rights Asia" sizes="760px" />
            {LOGOS.map(([f, a]) => <Img key={f} src={`/img/logos/${f}.png`} alt={a} />)}
          </div>
        </div>
      </section>

      {NETWORK_BLOCKS.map((b, bi) => (
        <section className={bi % 2 === 0 ? "sec sec--mist" : "sec"} key={b.eyebrow}>
          <div className="wrap">
            <div className="sec-head"><div><span className="eyebrow">{b.eyebrow}</span><h2>{b.h2}</h2></div>{b.lede ? <p>{b.lede}</p> : null}</div>
            {b.categories.map((c) => (
              <div className="cat" key={c.title}>
                <div className="cat-h"><h3>{c.title}</h3>{c.subtitle ? <span>{c.subtitle}</span> : null}</div>
                <ul className="collab">{c.items.map(([n, o, r, href]) => <li key={n + r}><span>{n}<small>{o} · {r}</small>{href ? <small><a className="link" href={href} target="_blank" rel="noopener noreferrer">View profile on eLearnPOSH</a></small> : null}</span></li>)}</ul>
              </div>
            ))}
          </div>
        </section>
      ))}
      <CtaBand next={["See strategic milestones", "/journey"]} />
    </>
  );
}
