import POSH from "@/components/posh/posh";
import Head from "next/head";
export default function BackgroundPage() {
  return(
   <>
    <Head>
      <title>PoSH Services | PRABHAVEE – Partner for Social Impact</title>
      <meta 
        name="description" 
        content="PRABHAVEE – Partner for Social Impact offers expert PoSH services including consultation, compliance audits, Internal Committee support, certification programs, and capacity-building training to help organizations create safe, inclusive, and legally compliant workplaces in India." 
      />
      <meta 
        name="keywords" 
        content="PoSH services India, Workplace safety compliance, Prevention of Sexual Harassment training, PoSH consultation, Internal Committee support, PoSH certification, PoSH audit, Corporate compliance consultancy, Safe workplace initiatives, Employee protection law India, IC external member service, PoSH advisory, Capacity building PoSH" 
      />
      <link 
        rel="canonical" 
        href="https://www.prabhaveepfsi.org/posh" 
      />
    </Head>
    <POSH />;
  </>
  )
}