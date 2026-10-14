import dims from "@/content/img-dims.json";

// Local image with intrinsic size (no layout shift), a 640px variant for small screens, lazy loading and async decode.
// `priority` marks above-the-fold images.
export default function Img({ src, alt = "", sizes = "(max-width: 880px) 100vw, 50vw", priority = false, ...rest }) {
  const full = dims[src];
  const smSrc = src.endsWith(".webp") ? src.replace(/\.webp$/, "-sm.webp") : null;
  const small = smSrc ? dims[smSrc] : null;
  const srcSet = full && small && small[0] < full[0] ? `${smSrc} ${small[0]}w, ${src} ${full[0]}w` : undefined;
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={full?.[0]}
      height={full?.[1]}
      alt={alt}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      {...rest}
    />
  );
}
