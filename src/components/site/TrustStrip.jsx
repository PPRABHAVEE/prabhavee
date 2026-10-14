import { CREDENTIALS, LOGOS } from "@/content/site";

export function LogoRow({ title = "Worked with and alongside" }) {
  return (
    <div className="logorow">
      <span className="logorow-t">{title}</span>
      <div className="logo-strip">
        <img className="wide" src="/img/logos/un-agencies.png" alt="ILO, UN Women, IOM, UNEP, UNICEF, UN Human Rights and UNDP Business and Human Rights Asia" loading="lazy" />
        {LOGOS.map(([f, a]) => <img key={f} src={`/img/logos/${f}.png`} alt={a} loading="lazy" />)}
      </div>
    </div>
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
