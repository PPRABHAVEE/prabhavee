import Stakeholder from "@/pages/stakeholderInt";
import Head from "next/head";
export default function BackgroundPage() {
  return(
   <>
    <Head>
      <title>Stakeholders | PRABHAVEE – Partner for Social Impact</title>
      <meta 
        name="description" 
        content="Meet PRABHAVEE stakeholders including Sumana Bhattacharya, Vikram Jain, Sweta Banerjee, Dr. Ramnik Ahuja, and other experts driving social impact in India across climate change, public health, women's empowerment, and community development." 
      />
      <meta 
        name="keywords" 
        content="PRABHAVEE stakeholders, Social impact experts India, NGO advisory board India, Climate change consultants India, Public health specialists India, Women's empowerment leaders India, Social entrepreneurship India, Community development initiatives, Sustainable development experts India, Civil society partnerships, Social impact professionals network, Policy advocacy India" 
      />
      <link 
        rel="canonical" 
        href="https://www.prabhaveepfsi.org/stakeholder" 
      />
    </Head>  
    <Stakeholder/>;
  </>
  )
}