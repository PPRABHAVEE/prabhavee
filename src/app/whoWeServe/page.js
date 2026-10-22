import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/meta";
import AudienceMap from "@/components/site/AudienceMap";
import { TARGET_CLIENTS, INDUSTRIES } from "@/content/site";
import Img from "@/components/site/Img";

export const metadata = pageMeta("Who we serve & collaborate with", "Businesses, brands and suppliers, universities and research centres, and social purpose organisations. Target clients and industry focus.", "/whoWeServe");

const ALONGSIDE = ["Lawyers", "Academia", "Policy experts", "Sustainability and ESG professionals", "Industry bodies", "Business chambers", "Think tanks", "Educational institutions"];

export default function WhoWeServe() {
  return (
    <>
      <PageIntro compact crumb="Who we serve" title="Who we serve and collaborate with." lede="We partner with organisations to shape responsible business practices, strengthen institutional capabilities and advance social impact through strategic capacity building, policy engagement and multi-stakeholder collaboration." image={{ src: "/img/banner-forum-stage.webp", alt: "Participants on stage after a session at the UN Responsible Business and Human Rights Forum", caption: "At the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026, Bangkok", position: "center 40%" }} />
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Partners &amp; collaborations</span><h2>Three partner groups. Three pathways to collaboration.</h2></div></div>
          <AudienceMap withPhotos cards />
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Our collaborators</span><h2>Who we work alongside.</h2></div><p>We work with them on projects and initiatives across business and human rights.</p></div>
          <div className="alongside">
            <blockquote className="convenor">We seek to be the ‘Convenor’ of this larger public discourse, bringing these voices into one conversation on business and human rights.</blockquote>
            <ul className="along">{ALONGSIDE.map((n, i) => <li key={n}><span className="along-n">0{i + 1}</span><span className="along-t">{n}</span></li>)}</ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Target clients</span><h2>Who benefits most.</h2></div><p>Businesses and supply chain stakeholders navigating evolving human rights due diligence requirements, responsible sourcing expectations and international market standards.</p></div>
          <ol className="benefit">{TARGET_CLIENTS.map((c, i) => <li key={c}><span className="benefit-n">0{i + 1}</span><span className="benefit-t">{c}</span></li>)}</ol>
        </div>
      </section>
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head"><div><span className="eyebrow">Industries</span><h2>Sectoral focus.</h2></div></div>
          <div className="sector">
            <Img className="sector-img" src="/img/deck/supply-chain-collage.webp" sizes="100vw" alt="Garment, leather and manufacturing workplaces across supply chains" />
            <ul className="sector-grid">{INDUSTRIES.map((i, n) => <li key={i}><span>0{n + 1}</span>{i}</li>)}</ul>
          </div>
        </div>
      </section>
      <CtaBand next={["See the practice areas", "/services"]} />
    </>
  );
}
