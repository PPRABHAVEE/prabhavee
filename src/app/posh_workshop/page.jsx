import Posh_Project from "@/components/projects/poshProject";
import Head from "next/head";
export default function BackgroundPage() {

  return( 
   <>
  <Head>
    <title>PoSH Pro Workshop | PRABHAVEE – Partner for Social Impact</title>
    <meta
      name="description"
      content="PoSH Pro — a 2-day online workshop by PRABHAVEE in collaboration with Yellow Spark, designed to build practical expertise in PoSH law, compliance, Internal Committee functioning, and workplace safety. Ideal for law students, HR practitioners, and compliance professionals."
    />
    <meta
      name="keywords"
      content="Anumita Sarker, Yellow Spark, PoSH, Deepam Yogi, Aparna Khandwala, Suruchi Kumar, Sandhya Advani, PoSH Pro workshop, PoSH training India, Prevention of Sexual Harassment workshop, Workplace safety compliance training, PoSH law practical training, Internal Committee training, HR compliance workshop, Legal capacity building India, PoSH Pro PRABHAVEE, Yellow Spark HR consulting, Online PoSH certificate workshop"
    />
    <link
      rel="canonical"
      href="https://www.prabhaveepfsi.org/posh_workshop"
    />
  </Head>
    <Posh_Project />;
  </>
  )
}