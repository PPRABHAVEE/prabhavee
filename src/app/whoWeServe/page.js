import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/meta";
import { PARTNER_GROUPS, TARGET_CLIENTS, INDUSTRIES } from "@/content/site";

export const metadata = pageMeta("Who we serve & collaborate with", "Businesses, brands and suppliers, universities and research centres, and social purpose organisations. Target clients and industry focus.", "/whoWeServe");

export default function WhoWeServe() {
  return (
    <>
      <PageIntro crumb="Who we serve" title="Who we serve and collaborate with." lede="We partner with organisations that want to advance social impact and responsible business. We bring strategic capacity building and policy dialogue." />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Partners &amp; collaborations</span><h2>Three groups, three kinds of support.</h2></div><p>We address operational risks that could violate the human rights of people across the supply chain.</p></div>
          <div className="cols-3">
            {PARTNER_GROUPS.map((g, i) => (
              <div className="row row--plain" key={g.who} style={{ borderTop: "2px solid var(--green)", padding: "26px 0" }}>
                <div><span className="kicker">0{i + 1}</span><h3 style={{ fontSize: 24, margin: "8px 0 16px" }}>{g.who}</h3><ul className="ticks ticks--sm">{g.gets.map((x) => <li key={x}>{x}</li>)}</ul></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap split">
          <div><span className="eyebrow">Target clients</span><h2>Who benefits most.</h2></div>
          <ul className="ticks">{TARGET_CLIENTS.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Industry focus</span><h2>Sectors we work across.</h2></div></div>
          <ul className="industries">{INDUSTRIES.map((i) => <li key={i}>{i}</li>)}</ul>
          <img src="/img/deck/supply-chain-collage.jpg" alt="Garment, leather and manufacturing workplaces across supply chains" style={{ width: "100%", maxHeight: 360, objectFit: "cover", marginTop: 50 }} />
        </div>
      </section>
      <CtaBand next={["See the practice areas", "/services"]} />
    </>
  );
}
