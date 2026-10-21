import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/meta";
import AudienceMap from "@/components/site/AudienceMap";
import { TARGET_CLIENTS, INDUSTRIES } from "@/content/site";
import Img from "@/components/site/Img";

export const metadata = pageMeta("Who we serve & collaborate with", "Businesses, brands and suppliers, universities and research centres, and social purpose organisations. Target clients and industry focus.", "/whoWeServe");

export default function WhoWeServe() {
  return (
    <>
      <PageIntro crumb="Who we serve" title="Who we serve and collaborate with." lede="We partner with organisations to shape responsible business practices, strengthen institutional capabilities and advance social impact through strategic capacity building, policy engagement and multi-stakeholder collaboration." image={{ src: "/img/banner-forum-stage.webp", alt: "Participants on stage after a session at the UN Responsible Business and Human Rights Forum", caption: "At the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok", position: "center 40%" }} />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Partners &amp; collaborations</span><h2>Three partner groups. Three pathways to collaboration.</h2></div></div>
          <AudienceMap withPhotos />
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap split">
          <span className="eyebrow">Our collaborators</span>
          <div><h2>Who we work alongside.</h2></div>
          <div><p className="big">We collaborate with lawyers, academia, policy experts, sustainability and ESG professionals, industry bodies, business chambers, think tanks and educational institutions.</p><p>We work with them on projects and initiatives across business and human rights. We seek to be the ‘Convenor’ of this larger public discourse.</p></div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Target clients</span><h2>Who benefits most.</h2></div><p>Businesses and supply chain stakeholders navigating evolving human rights due diligence requirements, responsible sourcing expectations and international market standards.</p></div>
          <div className="tiles">{TARGET_CLIENTS.map((c, i) => <div key={c}><span>0{i + 1}</span>{c}</div>)}</div>
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Industries</span><h2>Sectoral focus.</h2></div></div>
          <ul className="industries">{INDUSTRIES.map((i) => <li key={i}>{i}</li>)}</ul>
          <Img src="/img/deck/supply-chain-collage.webp" sizes="100vw" alt="Garment, leather and manufacturing workplaces across supply chains" style={{ width: "100%", maxHeight: 360, objectFit: "cover", marginTop: 50 }} />
        </div>
      </section>
      <CtaBand next={["See the practice areas", "/services"]} />
    </>
  );
}
