import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import EventsExplorer from "@/components/events/EventsExplorer";
import { pageMeta } from "@/lib/meta";
import { FLAGSHIPS } from "@/content/site";
import events from "@/content/events.json";

export const metadata = pageMeta("Events", "Forums, trainings, consultations and dialogues P/ PRABHAVEE has taken part in, 2022 to 2026.", "/events");

export default function Events() {
  const years = events.flatMap((e) => e.year.match(/20\d\d/g) || []).sort();
  return (
    <>
      <PageIntro crumb="Engagements / Events" title="Forums, trainings, consultations and dialogues." lede={`${events.length} engagements across ${years[0]}–${years[years.length - 1]}, in the formats and roles that show how we engage.`} />
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Flagship programmes 2025–26</span><h2>Nine programmes we convened and hosted.</h2></div></div>
          <div className="cards">
            {FLAGSHIPS.map((f) => (
              <article className="card" key={f.title + f.when}>
                {f.img ? <div className="im"><img src={f.img} alt="" loading="lazy" /></div> : <div className="im im--text">P/</div>}
                <div className="bd"><span className="when">{f.when}{f.upcoming ? <span className="badge">UPCOMING</span> : null}</span><h3>{f.title}</h3><p>{f.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <EventsExplorer events={events} />
      <CtaBand />
    </>
  );
}
