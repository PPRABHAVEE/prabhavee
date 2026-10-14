import { SITE } from "@/content/site";

// Per-page metadata for the App Router (the previous site used next/head here, which the App Router ignores).
export function pageMeta(title, description, path) {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | ${SITE.name}`, description, url, siteName: "P/ Prabhavee", locale: "en_IN", type: "website" },
  };
}
