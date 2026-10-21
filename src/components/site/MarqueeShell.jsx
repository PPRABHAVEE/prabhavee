// Wraps the logo ticker with its title. The ticker pauses on hover and keyboard focus (see globals.css).
export default function MarqueeShell({ title, children }) {
  return (
    <div className="logorow">
      <div className="logorow-head">
        <span className="logorow-t">{title}</span>
      </div>
      <div className="marquee" role="group" aria-label={title} tabIndex={0}>{children}</div>
    </div>
  );
}
