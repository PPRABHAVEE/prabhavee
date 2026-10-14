import { Manrope, Libre_Caslon_Display } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { SITE } from "@/content/site";
import "./globals.css";

const body = Manrope({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const display = Libre_Caslon_Display({ variable: "--font-display", subsets: ["latin"], weight: "400", display: "swap" });

const DESCRIPTION =
  "P/ PRABHAVEE is a strategy and management consultancy advising businesses, institutions and social purpose organisations on responsible business, workplace governance, human rights and social sustainability.";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "P/ PRABHAVEE | Partner for Social Impact", template: "%s | P/ PRABHAVEE" },
  description: DESCRIPTION,
  keywords: ["Prabhavee", "Prabhavee PFSi", "Business and Human Rights", "Responsible business", "PoSH training", "PoSH consultancy", "Human rights due diligence", "ESG", "Social Impact", "Supply chain compliance India"],
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "P/ PRABHAVEE | Partner for Social Impact",
    description: DESCRIPTION,
    url: SITE.url,
    siteName: "P/ Prabhavee",
    images: [{ url: `${SITE.url}/images/banner.png`, width: 1200, height: 630, alt: "P/ PRABHAVEE" }],
    locale: "en_IN",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
  // Preview builds (review markers on) are kept out of search engines.
  ...(process.env.NEXT_PUBLIC_SHOW_PENDING === "1" ? { robots: { index: false, follow: false } } : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "P/ Prabhavee",
              url: SITE.url,
              logo: `${SITE.url}/images/logo.png`,
              email: SITE.email,
              sameAs: [SITE.linkedinCompany, SITE.linkedinFounder],
              description: DESCRIPTION,
            }),
          }}
        />
      </body>
    </html>
  );
}
