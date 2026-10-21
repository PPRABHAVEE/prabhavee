import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import Img from "@/components/site/Img";
import { pageMeta } from "@/lib/meta";
import { NETWORK_BLOCKS } from "@/content/site";
import { LogoRow } from "@/components/site/TrustStrip";

export const metadata = pageMeta("Networks & collaborations", "Ongoing and past networks, mentorship roles and strategic collaborations of P/ PRABHAVEE across the UN system, universities, industry bodies and civil society.", "/networking");

// Short mark for a crest/badge: the bracketed acronym, a short lead word before a comma, or an explicit override.
const MARKS = { "UN Global Compact Network India": "UNGC", "Teaching Business and Human Rights Forum": "TBHR", "eLearnPOSH.com": "eLP", "New Delhi Institute of Management (NDIM)": "NDIM", "Womennovator": "WN", "Institute of Directors (IOD)": "IOD" };
function mark(name) {
  if (MARKS[name]) return MARKS[name];
  const paren = name.match(/\(([A-Za-z.]+)\)/);
  if (paren) return paren[1];
  const lead = name.split(",")[0];
  if (lead.length <= 6) return lead;
  return lead.split(/\s+/).map((w) => w[0]).join("").slice(0, 4).toUpperCase();
}

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
          <LogoRow title="Our collaborators" />
        </div>
      </section>

      {NETWORK_BLOCKS.map((b, bi) => (
        <section className={bi % 2 === 0 ? "sec sec--mist" : "sec"} key={b.eyebrow}>
          <div className="wrap">
            <div className="sec-head"><div><span className="eyebrow">{b.eyebrow}</span><h2>{b.h2}</h2></div>{b.lede ? <p>{b.lede}</p> : null}</div>
            {b.categories.map((c) => (
              <div className="cat" key={c.title}>
                <div className="cat-h"><h3>{c.title}</h3>{c.subtitle ? <span>{c.subtitle}</span> : null}</div>
                {bi === 0 ? (
                  <ul className={`net-grid${c.items.length < 3 ? " net-grid--2" : ""}`}>{c.items.map(([n, o, r, href]) => (
                    <li className="net-card" key={n + r}>
                      <div className="net-top"><span className="net-crest" aria-hidden="true">{mark(n)}</span><span className="net-role">{r}</span></div>
                      <h4>{n}</h4>
                      <p>{o}</p>
                      {href ? <a className="link" href={href} target="_blank" rel="noopener noreferrer">View profile on eLearnPOSH<span className="sr-only"> (opens in a new tab)</span></a> : null}
                    </li>
                  ))}</ul>
                ) : (
                  <ul className="mem-grid">{c.items.map(([n, o, r]) => (
                    <li className="mem-tile" key={n + r}>
                      <span className="mem-mark" aria-hidden="true">{mark(n)}</span>
                      <h4>{n}</h4>
                      <p>{o}</p>
                      <span className="mem-role">{r}</span>
                    </li>
                  ))}</ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
      <CtaBand next={["See strategic milestones", "/journey"]} />
    </>
  );
}
