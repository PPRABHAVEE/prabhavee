import Link from "next/link";

// Closing band. `next` is the natural next page to read; the primary action is always to write to the firm.
export default function CtaBand({ title = "Have a strategic priority in mind? Let’s turn intent into action.", next }) {
  return (
    <section className="closing">
      <div className="wrap">
        <span className="eyebrow">Explore a partnership</span>
        <div>
          <h2>{title}</h2>
        </div>
        <div className="closing-actions">
          <Link className="btn btn--red" href="/contact">Start a conversation</Link>
          {next ? <Link className="link link--light" href={next[1]}>{next[0]}</Link> : null}
        </div>
      </div>
    </section>
  );
}
