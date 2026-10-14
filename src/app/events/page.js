import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import EventsExplorer from "@/components/events/EventsExplorer";
import { pageMeta } from "@/lib/meta";
import { FLAGSHIPS } from "@/content/site";
import events from "@/content/events.json";
import Img from "@/components/site/Img";

export const metadata = pageMeta("Events", "57 forums, trainings, consultations and dialogues P/ PRABHAVEE has taken part in from 2022 to 2026, filterable by type and year, with photos.", "/events");

export default function Events() {
  const years = events.flatMap((e) => e.year.match(/20\d\d/g) || []).sort();
  return (
    <>
      <PageIntro crumb="Engagements / Events" title="Forums, trainings, consultations and dialogues." lede={`${events.length} engagements from ${years[0]} to ${years[years.length - 1]}. Each shows how we take part, and in what role.`} image={{ src: "/img/banner-unrbhr-2026-anumita1.webp", alt: "Three delegates at the welcome sign of the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026", caption: "At the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok", position: "center 60%" }} />
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Flagship programmes 2025–26</span><h2>Nine programmes we convened and hosted.</h2></div></div>
          <div className="cards">
            {FLAGSHIPS.map((f) => (
              <article className="card" key={f.title + f.when}>
                {f.img ? <div className="im"><Img src={f.img} alt="" sizes="(max-width: 620px) 100vw, (max-width: 1180px) 50vw, 420px" /></div> : <div className="im im--text">P/</div>}
                <div className="bd"><span className="when">{f.when}{f.upcoming ? <span className="badge">UPCOMING</span> : null}</span><h3>{f.title}</h3><p>{f.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <EventsExplorer events={events} />
      <CtaBand next={["Read our reports", "/resources"]} />
    </>
  );
}
