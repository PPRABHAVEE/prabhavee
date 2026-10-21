import PageIntro from "@/components/site/PageIntro";
import EnquiryForm from "@/components/site/EnquiryForm";
import { pageMeta } from "@/lib/meta";
import { SITE, ENQUIRY } from "@/content/site";
import { LinkedInIcon, MailIcon } from "@/components/site/Icons";

export const metadata = pageMeta("Contact us", "Contact P/ PRABHAVEE, a Delhi strategy consultancy, for advisory, training, PoSH or collaboration enquiries. Write to us and we reply directly.", "/contact");

export default function Contact() {
  return (
    <>
      <PageIntro compact crumb="Contact us" title={ENQUIRY.heading} lede={`${ENQUIRY.lead} ${ENQUIRY.statement}`} image={{ src: "/img/banner-forum-speakers.webp", alt: "Speakers standing together after a session at the UN Responsible Business and Human Rights Forum", caption: "Speakers after a session at the UN Responsible Business and Human Rights Forum", position: "center 30%" }} />
      <section className="sec">
        <div className="wrap enq enq--contact">
          <aside className="contact-card">
            <span className="eyebrow"><span>Get in touch</span></span>
            <h2>A conversation is a good place to start.</h2>
            <p>For advisory, training or collaboration enquiries, write to:</p>
            <a className="link link--ico" href={`mailto:${SITE.email}`}><MailIcon size={16} />{SITE.email}</a>
            <hr />
            <span className="eyebrow">Our reach</span>
            
            <a className="link link--ico" href={SITE.linkedinCompany} target="_blank" rel="noopener noreferrer"><LinkedInIcon size={16} />Connect on LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
          </aside>
          <EnquiryForm idPrefix="contact" />
        </div>
      </section>
    </>
  );
}
