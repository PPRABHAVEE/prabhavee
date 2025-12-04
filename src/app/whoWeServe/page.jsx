import WhoWeServe from "@/pages/WhoWeServe";
import Head from "next/head";
export default function BackgroundPage() {
  return(
  <>
   <Head>
      <title>Who We Serve | PRABHAVEE – Partner for Social Impact</title>
      <meta 
        name="description" 
        content="Discover the organisations and businesses PRABHAVEE collaborates with, including NGOs, social enterprises, corporates, MSMEs, brands, and research institutions. Learn how our strategic capacity building and policy dialogue initiatives advance social impact in India." 
      />
      <meta 
        name="keywords" 
        content="PRABHAVEE collaborators, Who we serve PRABHAVEE, Social impact organisations India, NGOs and civil society India, Social enterprises India, Corporate partnerships India, MSME support programs, Brands and suppliers collaboration, Research collaborations India, Multi-stakeholder engagement, Capacity building initiatives, Policy dialogue India, Social impact partnerships" 
      />
      <link 
        rel="canonical" 
        href="https://www.prabhaveepfsi.org/whoWeServe" 
      />
    </Head> 
    <WhoWeServe />;
  </>
  )
}