import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import "./globals.css";
import AppLayout from "@/components/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "P/ PRABHAVEE",
  description: "Partner for Social Impact",
  keywords: [
    "Prabhavee",
    "Prabhavee PFSi",
    "Prabhavee Foundation",
    "Social Impact",
    "Corporate Training",
    "POSH Workshops",
    "CSR Activities",
    "NGO India",
  ],
  openGraph: {
    title: "P/ PRABHAVEE",
    description:
      "PRABHAVEE – Partner for Social Impact empowers businesses, NGOs, and institutions with legal, policy, and strategic solutions that strengthen governance, sustainability, and human rights practices across India.",
    url: "https://www.prabhaveepfsi.org",
    siteName: "P/ Prabhavee",
    images: [
      {
        url: "https://www.prabhaveepfsi.org/images/favicon.ico", 
        width: 1200,
        height: 630,
        alt: "Prabhavee logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons:{
    icon: "./favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <AppLayout>{children}</AppLayout>
        <Footer />

         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "P/ Prabhavee",
              url: "https://www.prabhaveepfsi.org",
              logo: "https://www.prabhaveepfsi.org/images/favicon.ico",
              sameAs: [
                "https://www.linkedin.com/company/prabhavee/posts/?feedView=all&viewAsMember=true",
                "https://www.linkedin.com/in/advocateanumitasarkar/",
              ],
              description:
                "PRABHAVEE – Partner for Social Impact empowers businesses, NGOs, and institutions with legal, policy, and strategic solutions that strengthen governance, sustainability, and human rights practices across India.",
            }),
          }}
        />
      </body>
    </html>
  );
}
