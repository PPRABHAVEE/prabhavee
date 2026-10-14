import Img from "@/components/site/Img";

// Page header. With `image` it becomes a split header: green copy panel plus a full-colour banner photograph.
export default function PageIntro({ crumb, title, lede, image }) {
  const copy = (
    <div className="wrap">
      <div className="crumb">{crumb}</div>
      <h1>{title}</h1>
      {lede ? <p className="lede">{lede}</p> : null}
    </div>
  );
  if (!image) return <section className="intro">{copy}</section>;
  return (
    <section className="intro intro--img">
      {copy}
      <figure className="intro-media">
        <Img src={image.src} alt={image.alt} sizes="(max-width: 880px) 100vw, 46vw" priority style={{ objectPosition: image.position || "center" }} />
        {image.caption ? <figcaption>{image.caption}</figcaption> : null}
      </figure>
    </section>
  );
}
