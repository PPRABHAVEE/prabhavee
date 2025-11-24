import Journey from "@/components/journey/journey";
import Head from "next/head";

export default function BackgroundPage() {
  return (
  <>
    <Head>
      <link rel="canonical" href="https://www.prabhaveepfsi.org/journey" />
    </Head>
    <Journey />
  </>  
  );
}