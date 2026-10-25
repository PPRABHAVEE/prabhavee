import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";

function PolicyText({ text }) {
  const parts = text.split(/(anumita@prabhavee\.org|https:\/\/www\.prabhaveepfsi\.org\/)/g);
  return parts.map((part, i) => part === "anumita@prabhavee.org" ? <a key={i} href={`mailto:${part}`}>{part}</a> : part === "https://www.prabhaveepfsi.org/" ? <a key={i} href={part}>{part}</a> : part);
}

function PolicyBlocks({ section }) {
  const listRanges = {
    "2. Information We Collect": [[1, 7], [8, 13]],
    "3. How We Use Your Information": [[1, 7]],
    "5. Information Sharing": [[1, 4]],
    "6. Third-party service providers, individual consultants": [[1, 3]],
    "7. Retention": [[1, 5]],
    "11. Your Choices": [[1, 4]],
  };
  const ranges = listRanges[section.heading] || [];
  return section.blocks.map((text, i) => {
    const range = ranges.find(([start, end]) => i >= start && i < end);
    if (range) return i === range[0] ? <ul key={i}>{section.blocks.slice(...range).map((item) => <li key={item}><PolicyText text={item} /></li>)}</ul> : null;
    return <p key={i}><PolicyText text={text} /></p>;
  });
}

export default function PolicyPage({ policy }) {
  return <>
    <PageIntro crumb="Website policies" title={policy.title} />
    <section className="sec">
      <div className="wrap policy-layout">
        <nav className="policy-nav" aria-label="Website policies">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-notice">Cookie Notice</Link>
          <Link href="/disclaimer">Website Disclaimer</Link>
        </nav>
        <article className="policy-copy">
          <p className="policy-updated">Last Updated: {policy.updated}</p>
          {policy.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><PolicyBlocks section={section} /></section>)}
        </article>
      </div>
    </section>
  </>;
}
