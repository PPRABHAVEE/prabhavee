import Events from "@/components/events/events";
import Head from "next/head";
export default function BackgroundPage() {
 
  return( 
  <>
   <Head>
      <title>Events, Dialogues & Engagements | Ethical Leadership & Social Impact</title>

      <meta
        name="description"
        content="Explore global events, dialogues, and stakeholder engagements that promote ethical leadership, sustainable development, and social impact. Filter by year, search topics, and discover impactful initiatives."
      />

      <meta
        name="keywords"
        content="events, social impact, ethical leadership, sustainable development, global dialogues, stakeholder engagement, conferences, workshops, seminars, activities"
      />
      <link rel="canonical" href="https://www.prabhaveepfsi.org/events" />
    </Head>
    <Events />;
  </>
  )
}