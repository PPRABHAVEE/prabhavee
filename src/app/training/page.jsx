import Training from "@/pages/trainingCap";
import Head from "next/head";
export default function BackgroundPage() {
  return(
  <>
   <Head>
      <title>Training & Capacity Building | PRABHAVEE – Partner for Social Impact</title>
      <meta 
        name="description" 
        content="Explore PRABHAVEE's training and capacity building initiatives for corporates, MSMEs, young professionals, and social sector organisations. Learn about workshops, multi-stakeholder dialogues, strategic advisory, and programs empowering sustainable progress." 
      />
      <meta 
        name="keywords" 
        content="PRABHAVEE training, AIMA, IPN, SATTVA Intiative, ATMA, eLearnPoSH.com, UNGCNI, Capacity building programs India, Corporate training India, MSME workshops, Social sector professional development, Strategic advisory India, Multi-stakeholder dialogue, Leadership development India, Policy and governance training, Women & child rights workshops, Social impact programs India, Skill development initiatives" 
      />
      <link 
        rel="canonical" 
        href="https://www.prabhaveepfsi.org/training" 
      />
    </Head>  
    <Training/>;
  </>
  )
}