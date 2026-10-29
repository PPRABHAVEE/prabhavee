import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import EventsExplorer from "@/components/events/EventsExplorer";
import { pageMeta } from "@/lib/meta";
import { FLAGSHIPS } from "@/content/site";
import events from "@/content/events.json";
import Img from "@/components/site/Img";

export const metadata = pageMeta("Events", "Selected engagements, 2022–2026: forums, trainings, consultations and dialogues P/ PRABHAVEE has taken part in, filterable by type and year, with photos.", "/events");

export default function Events() {
  const years = events.flatMap((e) => e.year.match(/20\d\d/g) || []).sort();
  return (
    <>
      <PageIntro crumb="Engagements / Events" title="Forums, trainings, consultations and dialogues." lede={`Selected engagements, ${years[0]}–${years[years.length - 1]}. A snapshot of our work, contributions, and roles across diverse initiatives.`} image={{ src: "/img/banner-unrbhr-2026-anumita1.webp", alt: "Three delegates at the welcome sign of the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026", caption: "At the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok", position: "center 60%" }} />
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Flagship programmes 2025–26</span><h2>Nine programmes convened and hosted.</h2></div></div>
          <div className="cards">
            {[...FLAGSHIPS].sort((a, b) => Number(Boolean(b.upcoming)) - Number(Boolean(a.upcoming))).map((f) => (
              <article className="card" key={f.title + f.when}>
                {f.img2 ? <div className="im im--duo"><Img src={f.img} alt="Speakers for the year-end consultation and governance masterclass" sizes="(max-width: 620px) 50vw, 210px" /><Img src={f.img2} alt="Speaker biographies for the year-end consultation and governance masterclass" sizes="(max-width: 620px) 50vw, 210px" /></div> : f.img ? <div className="im"><Img src={f.img} alt="" sizes="(max-width: 620px) 100vw, (max-width: 1180px) 50vw, 420px" style={f.pos ? { objectPosition: f.pos } : undefined} /></div> : <div className="im im--text">P/</div>}
                <div className="bd">
                  <span className="when">{f.when}{f.upcoming ? <span className="badge">UPCOMING</span> : null}</span><h3>{f.title}</h3><p>{f.text}</p>{f.links ? <div className="fl-links">{f.links.map(([l, h]) => <a className="link fl-link" key={h} href={h} target="_blank" rel="noopener noreferrer">{l}<span className="sr-only"> (opens in a new tab)</span></a>)}</div> : null}
                  {f.more ? (
                    <details className="fl-more">
                      <summary>Programme details</summary>
                      {f.more.facts ? <ul>{f.more.facts.map((x) => <li key={x}>{x}</li>)}</ul> : null}
                      {f.more.speakers ? <><h4>Speakers</h4><ul>{f.more.speakers.map(([n, r]) => <li key={n}><b>{n}</b>, {r}</li>)}</ul></> : null}
                      {f.more.takeaways ? <><h4>Key takeaways</h4><ul>{f.more.takeaways.map(([t, d]) => <li key={t}><b>{t}</b>: {d}</li>)}</ul></> : null}
                      {f.more.profile ? <><h4>Participant profile</h4><ul>{f.more.profile.map((x) => <li key={x}>{x}</li>)}</ul></> : null}
                      {f.more.publication ? <p className="pub"><a className="link" href={f.more.publication[1]} download>{f.more.publication[0]} (PDF)</a></p> : null}
                    </details>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <EventsExplorer events={events} />
      <CtaBand next={["Reports and mentions", "/resources"]} />
    </>
  );
}
