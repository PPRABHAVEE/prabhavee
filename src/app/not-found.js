import Link from "next/link";
import { SITE } from "@/content/site";

export const metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="sec">
      <div className="wrap split">
        <div>
          <span className="eyebrow">Error 404</span>
          <h1 style={{ fontSize: "clamp(44px, 6vw, 84px)" }}>This page has moved or never existed.</h1>
        </div>
        <div>
          <p className="big">Try one of these instead.</p>
          <ul className="ticks">
            <li><Link className="link" href="/">Home</Link></li>
            <li><Link className="link" href="/services">Practice areas</Link></li>
            <li><Link className="link" href="/events">Events and engagements</Link></li>
            <li><Link className="link" href="/resources">Resources and reports</Link></li>
            <li><Link className="link" href="/contact">Write to us</Link></li>
          </ul>
          <p style={{ marginTop: 24 }}>Still stuck? Email <a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
        </div>
      </div>
    </section>
  );
}
