import Image from "next/image"; 

 const events = [
    {
      id: 1,
      name: "United Nations Responsible Business and Human Rights Forum, Asia-Pacific 2024, Bangkok",
      year: 2024,
      eventType: "High-level Conference",
      participationType: "Delegate",
      displayType: "carousel",
      images: [
        "/assets/1/1/20240926_200807.jpg",
        "/assets/1/1/20240924_173316.jpg",
        "/assets/1/1/20240924_085924.jpg",
        "/assets/1/1/20240927_145024.jpg"
      ],
      description: "Participated as a delegate in the UN Responsible Business and Human Rights Forum, engaging with stakeholders across Asia-Pacific region on sustainable business practices and human rights integration."
    },
    {
      id: 2,
      name: "POSH PRO: Hosted a 2-Day Online Workshop on PoSH Act and its application at the Workplace in collaboration with Yellow Spark",
      year: 2025,
      eventType: "Training and Capacity Building",
      participationType: "Host, Co-organiser, Facilitator, Convener",
      displayType: "collage",
      images: [
        "./assets/2/IMG-20250925-WA0007.jpg",
        "./assets/2/IMG-20250925-WA0008.jpg",
        "./assets/2/IMG-20250926-WA0003.jpg",
        "./assets/2/Posh Pro.png"
      ],
      description: "Organized and facilitated a comprehensive workshop in collaboration with Yellow Spark, focusing on workplace safety and PoSH Act implementation, training over 100 participants on preventing workplace harassment."
    },
    {
      id: 3,
      name: "84th Global Edition of the Annual Women Economic Forum 2022, Delhi, India",
      year: 2022,
      eventType: "Annual Event",
      participationType: "Speaker",
      displayType: "collage",
      images: [
        "./assets/3/3/IMG-20221228-WA0025.jpg"
      ],
      description: "Delivered a keynote speech on women's economic empowerment and sustainable business practices, engaging with global leaders and changemakers at this prestigious forum."
    },
    {
      id: 4,
      name: "Online Knowledge session on Engaging Youth in Anti-Corruption Efforts organized by the UN Global Compact Network India (UN GCNI)",
      year: 2022,
      eventType: "Working Group Meeting",
      participationType: "Speaker",
      displayType: "collage",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop"
      ],
      description: "Organized by the UN Global Compact Network India (UN GCNI), shared insights on mobilizing youth participation in anti-corruption initiatives and ethical business practices."
    },
    {
      id: 5,
      name: "Ideation Meeting, themed “Promoting Anti-Corruption Strategies and Integrating Ethical Business Practices in Micro, Small, and Medium Enterprises (MSMEs), organized by the UN Global Compact Network India (UN GCNI)",
      year: 2023,
      eventType: "Ideation Meeting with diverse stakeholders",
      participationType: "Stakeholder at the Roundtable",
      displayType: "collage",
      images: [
        "./assets/5/5/Screenshot 2025-10-18 223818.png"
      ],
      description: "Participated in a strategic roundtable focused on integrating ethical business practices in Micro, Small, and Medium enterprises, contributing to policy discussions and framework development."
    },
    {
      id: 6,
      name: "Anti-Corruption Collective Action (ACCA) Playbook Training by UNGCNI",
      year: 2022,
      eventType: "Training",
      participationType: "Participant/Stakeholder",
      displayType: "scroll",
      images: [
        "./assets/6/6/ACCA Playbook Training 1.jpg",
        "./assets/6/6/ACCA Playbook Training.jpg"
      ],
      description: "Completed comprehensive training on the ACCA Playbook, learning frameworks and tools for implementing collective action against corruption in business operations."
    },
    {
      id: 7,
      name: "Business Integrity and ESG Orientation Training – Building Ethical Leadership in ESG & Compliance by UNGCNI",
      year: 2025,
      eventType: "Training and Capacity Building",
      participationType: "Participant/Stakeholder",
      displayType: "scroll",
      images: [
        "./assets/7/ED3A3034.JPG",
        "./assets/7/ED3A3009.JPG",
        "./assets/7/ED3A2454 (1).jpg"
      ],
      description: "Advanced training by UNGCNI focusing on ESG integration, ethical leadership development, and compliance frameworks for sustainable business transformation."
    },
    {
      id: 8,
      name: "Roundtable Conference on BRSR Framework and Sustainability in person, organised by the Centre of Ethics, Responsible Organisation & ESG initiatives (CERO), Management Development Institute",
      year: 2025,
      eventType: "Roundtable conference",
      participationType: "Stakeholder",
      displayType: "carousel",
      images: [
        "./assets/8/8/20250617_135045.jpg",
        "./assets/8/8/CERO.jpg"
      ],
      description: "In-person roundtable organized by the Centre of Ethics, Responsible Business & Sustainability, discussing BRSR framework implementation and sustainability reporting standards."
    },{
       id: 9,
      name: "Online session on “India’s Economic Growth: Powered by Innovation and Fair Play”, hosted by Young Leaders Council (YLC), AIMA",
      year: 2025,
      eventType: "Talk/ fireside chat",
      participationType: "Moderator",
      displayType: "collage",
      images: [
        "./assets/9/9/anumita 1.png"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    },
    {
      id: 10,
      name: "Official Launch of the Ocean Centres India in person, organised by United Nations Global Compact Network India",
      year: 2025,
      eventType: "Launch event",
      participationType: "Stakeholder/ Representing DSS as its Advisory Board Member",
      displayType: "collage",
      images: [
        "./assets/10/10/Ocean Centres Initiative UNGCNI.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    },
     {
      id: 11,
      name: "Annual Report Launch on Worker Safety in the Indian Automotive Manufacturing Sector organised by the Safe in India Foundation (SINF)",
      year: 2025,
      eventType: "Industry Report Launch",
      participationType: "Stakeholder",
      displayType: "collage",
      images: [
         "./assets/11/20250718_135652.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    },   
    {
      id: 12,
      name: "Second Stakeholder Consultation on the Responsible Business Conduct in the Automotive Sector organised by the Indian Institute of Corporate Affairs (IICA)",
      year: 2025,
      eventType: "Stakeholder Consultation",
      participationType: "Stakeholder",
      displayType: "collage",
      images: [
        "./assets/12/12/Screenshot 2025-09-02 152510.png"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    },
     {
      id: 13,
      name: "Appointment - WICCI Delhi External Affairs Council 2024",
      year: 2025,
      eventType: "Official appointment as Council State Vice President ",
      participationType: "Led the council for the term as State Vice President",
      displayType: "collage",
      images: [
        "./assets/13/13/Orientation.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
    {
      id: 14,
      name: "Climate Change and its Impact on Health",
      year: 2024,
      eventType: "Online Webinar",
      participationType: "Led the council for the term as State Vice President",
      displayType: "collage",
      images: [
        "./assets/14/e14-1.jpeg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
     {
      id: 15,
      name: "Road to COP29, Building Climate Resilient Agri-Food Systems - Understanding Climate Change Impact on Food, Nutrition, and Health",
      year: 2024,
      eventType: "Online Webinar",
      participationType: "Led the council for the term as State Vice President",
      displayType: "collage",
      images: [
        "./assets/15/15/IMG-20241127-WA0002.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
    {
      id: 16,
      name: "Half-day Roundtable Discussion on Deconstructing Women’s Economic Empowerment: Bottom-Up Perspectives:",
      subName : [
        "Session 1: Introducing the usability of a bottom-up approach to women’s economic empowerment",
        "Session 2: Facilitating rural women’s participation in the economy",
        "Session 3: Female entrepreneurship",
        "Session 4: Capturing and applying bottom-up perspectives"
      ],
      year: 2024,
      eventType: "Roundtable Discussion",
      participationType: "Led the council for the term as State Vice President",
      displayType: "collage",
      images: [
        "./assets/16/16/Screenshot 2024-11-30 140404.png"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
    {
      id: 17,
      name: "Mentorship Programme 2024: L.E.A.D (Cohort 1): Learn, Educate, Achieve and Discover",
      year: 2024,
      eventType: "Mentor Programme",
      participationType: "Led the council for the term as State Vice President",
      displayType: "carousel",
      images: [
        "./assets/17/17/IMG-20240825-WA0004 (1).jpg",
        "./assets/17/17/IMG_20240827_140834_397.jpg",
        "./assets/17/17/IMG-20241215-WA0005.jpg",
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
    {
      id: 18,
      name: "Member & Mentor, Young Leaders Council (AIMA)",
      year: "2023, 2024 & 2025",
      eventType: "Different participation ",
      participationType: "Member and Mentor",
      displayType: "carousel",
      images: [
        "./assets/18/e18-2.jpeg",
        "./assets/18/e18-1.jpeg",
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
    {
      id: 19,
      name: "Guest Lecture on Collaboration and Teamwork jointly organised by PCTE & AIMA Young Leaders Council ",
      year: 2025,
      eventType: "Online Guest Lecture ",
      participationType: "Guest Lecturer",
      displayType: "carousel",
      images: [
        "./assets/19/e19-1.jpeg",
        "./assets/19/e19-2.jpeg",
        "./assets/19/e19-3.jpeg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
    {
      id: 20,
      name: "Darbar Sahitya Sansada's Executive Body Meeting 2024",
      year: 2024,
      eventType: "Executive Body Meeting",
      participationType: "Advisory Board Member",
      displayType: "collage",
      images: [
        "./assets/20/20/IMG-20240825-WA0011 (1).jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
     {
      id: 21,
      name: "Darbar Sahitya Sansada's Executive Body Meeting 2025",
      year: 2025,
      eventType: "Executive Body Meeting",
      participationType: "Advisory Board Member",
      displayType: "carousel",
      images: [
        "./assets/21/21/Screenshot 2025-09-21 114825.png",
        "./assets/21/21/Screenshot 2025-09-21 114851.png"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
    {
      id: 22,
      name: "Mentor, Women Entrepreneurship Platform, Niti Ayog, Government of India",
      year: 2025,
      eventType: "Mentorship Meeting",
      participationType: "Mentor",
      displayType: "collage",
      images: [
        "./assets/22/Screenshot 2025-10-18 153430.png",
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
     {
      id: 23,
      name: "Connecting Rural Women to Global Value Chains by Good Business Lab",
      year: 2025,
      eventType: "Invite-only Roundtable conference",
      participationType: "Advisory Board Member of Darbar Sahitya Sansada (DSS)",
      displayType: "carousel",
      images: [
        "./assets/23/000.jpg",
        "./assets/23/0.jpg",
        "./assets/23/00.jpg",
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
    {
      id: 24,
      name: "Module VI - Legal & Policy Framework around Social Aspects in India of ESG Compliance Lead Course by EHS GURU Sustainable Solutions Private Limited in collaboration with IP University",
      year: 2025,
      eventType: "Online Guest Lecture",
      participationType: "Guest Lecturer/ Speaker/ Trainer ",
      displayType: "collage",
      images: [
        "./assets/24/1.jpg",
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 
    {
      id: 25,
      name: "Trade and Sustainability Workshop & Conference jointly hosted by Amfori and Confederation of Indian Industry",
      year: 2025,
      eventType: "In-person Workshop & Conference",
      participationType: "Delegate",
      displayType: "carousel",
      images: [
        "./assets/25/Amfori Workshop Trade & Sustainability.jpg",
        "./assets/25/Workshop 4.jpg",
        "./assets/25/Workshop 1.jpg",
        "./assets/25/Workshop 2.jpg",
        "./assets/25/Workshop 5.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
    }, 

  ];

export default events;