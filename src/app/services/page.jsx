import Services from "@/components/services/service";
import Head from "next/head";

export default function BackgroundPage() {
  const hash = typeof window !== "undefined" ? window.location.hash : null;

  return (
  <>
    <Head>
       <link rel="canonical" href="https://www.prabhaveepfsi.org/services" />
        {hash && <meta name="robots" content="noindex, follow" />}
    </Head>
    <Services/>
  </>  
  );
}