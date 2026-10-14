import Link from "next/link";

export default function CtaBand({ title = "Let’s discuss how we can work together." }) {
  return (
    <section className="closing">
      <div className="wrap">
        <div>
          <span className="eyebrow">Write to us to discuss</span>
          <h2>{title}</h2>
        </div>
        <Link className="btn btn--red" href="/contact">Send an enquiry</Link>
      </div>
    </section>
  );
}
