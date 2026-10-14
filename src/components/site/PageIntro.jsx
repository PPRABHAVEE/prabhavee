export default function PageIntro({ crumb, title, lede }) {
  return (
    <section className="intro">
      <div className="wrap">
        <div className="crumb">{crumb}</div>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </section>
  );
}
