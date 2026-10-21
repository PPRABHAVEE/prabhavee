import Img from "@/components/site/Img";

// Wide colour photograph with a caption. Only real event photos supplied by the client are used.
export default function PhotoBand({ src, alt, caption, position = "center", natural = false, slim = false }) {
  return (
    <figure className={`band wrap${natural ? " band--natural" : ""}${slim ? " band--slim" : ""}`}>
      <Img src={src} alt={alt} sizes="(max-width: 1380px) 100vw, 1320px" style={{ objectPosition: position }} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
