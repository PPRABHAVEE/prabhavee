import Link from "next/link";
import { SITE } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark">P/</span>
            <span><b className="brand-name">PRABHAVEE</b><small className="brand-sub">PARTNER FOR SOCIAL IMPACT</small></span>
          </Link>
          <p>{SITE.strapline}</p>
        </div>
        <div>
          <span className="eyebrow">Explore</span>
          <Link href="/background">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/whoWeServe">Who we serve</Link>
          <Link href="/events">Events</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/people/founder">Founder</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <span className="eyebrow">Get in touch</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <p>{SITE.location}</p>
          <a href={SITE.linkedinCompany} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div>
          <span className="eyebrow">Opportunities</span>
          <Link href="/contact?interest=Internship">Internship<small>Hands-on experience in social impact law and policy.</small></Link>
          <Link href="/contact?interest=Partner%20with%20us">Partner with us<small>Collaborate on initiatives that advance responsible business practices.</small></Link>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© 2026 {SITE.name} – {SITE.tagline}. All rights reserved.</span>
        <span>{SITE.registered}</span>
      </div>
    </footer>
  );
}
