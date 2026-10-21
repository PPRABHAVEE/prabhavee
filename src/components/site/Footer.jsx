import Link from "next/link";
import { SITE } from "@/content/site";
import { LinkedInIcon, MailIcon } from "@/components/site/Icons";

// Footer: brand row (logo, strapline, contact icons), three equal columns (Explore, Get in touch, Opportunities), legal row.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <img className="brand-logo" src="/images/logo-mark-reversed.png" width="405" height="135" alt="P/ PRABHAVEE, Partner for Social Impact" />
            </Link>
            <p>{SITE.strapline}</p>
          </div>
          <div className="social" aria-label="Contact P/ PRABHAVEE">
            <a href={SITE.linkedinCompany} target="_blank" rel="noopener noreferrer" aria-label="P/ PRABHAVEE on LinkedIn (opens in a new tab)"><LinkedInIcon size={20} /></a>
            <a href={`mailto:${SITE.email}`} aria-label={`Email ${SITE.email}`}><MailIcon size={20} /></a>
          </div>
        </div>

        <div className="foot-cols">
          <nav className="foot-col" aria-label="Explore">
            <h2 className="eyebrow">Explore</h2>
            <ul>
              <li><Link href="/background">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/whoWeServe">Who we serve</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/people/founder">Founder</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </nav>
          <div className="foot-col">
            <h2 className="eyebrow">Get in touch</h2>
            <ul>
              <li><a href={`mailto:${SITE.email}`}><MailIcon size={16} />{SITE.email}</a></li>
              <li><a href={SITE.linkedinCompany} target="_blank" rel="noopener noreferrer"><LinkedInIcon size={16} />LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>
              <li className="foot-text">{SITE.location}</li>
            </ul>
          </div>
          <div className="foot-col">
            <h2 className="eyebrow">Opportunities</h2>
            <ul>
              <li><Link href="/contact?interest=Internship">Internship</Link><small>Explore the intersection of law, policy, human rights and responsible business.</small></li>
              <li><Link href="/contact?interest=Partner%20with%20us">Partner with us</Link><small>Collaborate on initiatives that advance responsible business practices.</small></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 {SITE.name} – {SITE.tagline}. All rights reserved.</span>
          <span>{SITE.registered}</span>
        </div>
      </div>
    </footer>
  );
}
