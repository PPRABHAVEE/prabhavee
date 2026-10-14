import PageIntro from "@/components/site/PageIntro";
import EnquiryForm from "@/components/site/EnquiryForm";
import { pageMeta } from "@/lib/meta";
import { SITE } from "@/content/site";

export const metadata = pageMeta("Contact us", "Contact P/ PRABHAVEE for advisory, training or collaboration enquiries.", "/contact");

export default function Contact() {
  return (
    <>
      <PageIntro crumb="Contact us" title="Write to us to discuss." lede="Tell us about your organisation. Tell us what support you need. We discuss terms directly." />
      <section className="sec">
        <div className="wrap enq" style={{ gridTemplateColumns: ".8fr 1.2fr" }}>
          <aside className="contact-card">
            <span className="eyebrow">Get in touch</span>
            <h2>A conversation is a good place to start.</h2>
            <p>For advisory, training or collaboration enquiries, write to:</p>
            <a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <hr />
            <span className="eyebrow">Our reach</span>
            <p>Based in: India<br />Pan-India &amp; global collaborations</p>
            <a className="link" href={SITE.linkedinCompany} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
          </aside>
          <EnquiryForm idPrefix="contact" />
        </div>
      </section>
    </>
  );
}
