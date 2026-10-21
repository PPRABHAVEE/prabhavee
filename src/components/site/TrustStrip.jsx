import { CREDENTIALS, LOGOS } from "@/content/site";
import Img from "@/components/site/Img";
import MarqueeShell from "@/components/site/MarqueeShell";

const UN_ALT = "ILO, UN Women, IOM, UNEP, UNICEF, UN Human Rights and UNDP Business and Human Rights Asia";

// A slow, endless ticker. The list is rendered twice and the track slides by exactly one copy, so the loop has no jump.
// It pauses on hover or keyboard focus. Reduced-motion visitors get a static row they can scroll by hand (see globals.css).
export function LogoRow({ title = "Strategic collaborations" }) {
  const items = [["un-agencies", UN_ALT, true], ...LOGOS.map(([f, a]) => [f, a, false])];
  return (
    <MarqueeShell title={title}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul className="marquee-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
            {items.map(([f, a, wide]) => (
              <li key={f}><Img className={wide ? "wide" : undefined} src={`/img/logos/${f}.png`} alt={copy === 1 ? "" : a} loading="eager" /></li>
            ))}
          </ul>
        ))}
      </div>
    </MarqueeShell>
  );
}

export function Credentials() {
  return (
    <dl className="cred">
      {CREDENTIALS.map((c) => (
        <div key={c.k}><dt>{c.k}</dt><dd>{c.v}</dd></div>
      ))}
    </dl>
  );
}
