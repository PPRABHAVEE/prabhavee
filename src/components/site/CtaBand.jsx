import Link from "next/link";

// Closing band. `next` is the natural next page to read; the primary action is always to write to the firm.
export default function CtaBand({ title = "Let’s discuss how we can help.", next }) {
  return (
    <section className="closing">
      <div className="wrap">
        <div>
          <span className="eyebrow">Write to us to discuss</span>
          <h2>{title}</h2>
        </div>
        <div className="closing-actions">
          <Link className="btn btn--red" href="/contact">Write to us</Link>
          {next ? <Link className="link link--light" href={next[1]}>{next[0]}</Link> : null}
        </div>
      </div>
    </section>
  );
}
