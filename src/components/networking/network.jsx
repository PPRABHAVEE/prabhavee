"use client";
import React, { useState, useRef } from 'react';
import { Users, Handshake, Award, Briefcase, ExternalLink, Star, Building, Globe, ArrowRight, BookOpen, Target, ChevronRight } from "lucide-react";

const NetworkPartnerships = () => {
  const [activeNetworkSection, setActiveNetworkSection] = useState(0);
  const [activeMembershipSection, setActiveMembershipSection] = useState(0);
  const networkContentRef = useRef(null);
  const membershipContentRef = useRef(null);


  const networkSections = [
    {
      title: "Network Partner",
      subtitle: "Strategic network collaborations",
      icon: <Globe className="w-6 h-6" />,
      items: [
        {
          name: "Young Leaders Council (YLC)",
          org: "All India Management Association (AIMA)",
          type: "Leadership Network",
          badge: "Network Partner"
        },
        {
          name: "UN Global Compact Network India",
          org: "United Nations Initiative",
          type: "Global Network",
          badge: "Network Member"
        },
        {
          name: "Affiliate, Teaching Business and Human Rights Forum",
          org: "Academic Network",
          type: "Education Alliance",
          badge: "Affiliate"
        },
        {
          name: "India Partner Network (IPN)",
          org: "Sattva Initiative",
          type: "Impact Network",
          badge: "Partner"
        },
        {
          name: "ATMA - An Accelerator for NGOs",
          org: "NGO Ecosystem",
          type: "NGO Network",
          badge: "Accelerator Partner"
        },
        {
          name: "eLearnPOSH.com",
          org: "E-Learning Provider (PoSH)",
          type: "E-learning, Training",
          badge: "Learning Partner"
        }
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Mentorship",
      subtitle: "Guiding next generation leaders",
      icon: <Users className="w-6 h-6" />,
      items: [
        {
          name: "Young Leaders Council (YLC)",
          org: "AIMA",
          type: "Leadership Development",
          badge: "Mentor"
        },
        {
          name: "Womennnovator",
          org: "Global Incubator for Women",
          type: "Women Empowerment",
          badge: "Global Mentor"
        },
        {
          name: "G20 Women Entrepreneurship Platform (WEP)",
          org: "Niti Ayog, GoI",
          type: "Government Initiative",
          badge: "Platform Mentor"
        },
        {
          name: "New Delhi Institute of Management (NDIM)",
          org: "Academic Institution",
          type: "Educational Mentorship",
          badge: "Industry Mentor"
        }
      ],
      color: "green",
      gradient: "from-green-500 to-green-700"
    },
    {
      title: "Knowledge Partner",
      subtitle: "Sharing expertise & insights",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        {
          name: "Yellow Spark Solutions LLP",
          org: "Strategic Consulting",
          type: "Business Knowledge",
          badge: "Knowledge Partner"
        }
      ],
      color: "amber",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      title: "Ecosystem / Business associations",
      subtitle: "Industry and ecosystem participation",
      icon: <Target className="w-6 h-6" />,
      items: [
        {
          name: "Anti-Corruption Collective Action Working Group Member (ACCA)",
          org: "United Nations Global Compact Network India (UNGCNI)",
          type: "Anti-Corruption Initiative",
          badge: "Working Group Member"
        }
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-700"
    }
  ];

  const membershipSections = [
    {
      title: "Memberships",
      subtitle: "Professional affiliations & certifications",
      icon: <Award className="w-6 h-6" />,
      items: [
        {
          name: "Young Leaders Council (YLC)",
          org: "All India Management Association (AIMA)",
          type: "Leadership Program",
          badge: "Active Member"
        },
        {
          name: "Member, M.IOD",
          org: "Institute of Directors (IOD)",
          type: "Professional Body",
          badge: "Certified Member"
        },
        {
          name: "Indian Institute of Corporate Affairs (IICA)",
          org: "Government Institute",
          type: "Corporate Governance",
          badge: "Member"
        },
        {
          name: "Indian Society for Training and Development (ISTD), Delhi Chapter",
          org: "Non-profit organisation",
          type: "Training",
          badge: "Member"
        }
      ],
      color: "red",
      gradient: "from-red-500 to-red-700"
    },
    {
      title: "Trusted by",
      subtitle: "Organizations that trust our expertise",
      icon: <Handshake className="w-6 h-6" />,
      items: [
        {
          name: "ATMA - An Accelerator for NGOs",
          org: "NGO Development",
          type: "Capacity Building",
          badge: "Trusted Partner"
        },
        {
          name: "India Partner Network (IPN)",
          org: "a SATTVA Initiative",
          type: "Impact Network",
          badge: "Trusted Member"
        },
        {
          name: "eLearnPOSH.com",
          org: "Digital Learning Platform",
          type: "EdTech",
          badge: "Trusted Collaborator"
        }
      ],
      color: "gray",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      title: "Industry Mentorship",
      subtitle: "Mentoring programs & initiatives",
      icon: <Users className="w-6 h-6" />,
      items: [
        {
          name: "G20 Women Entrepreneurship Platform (WEP)",
          org: "Niti Ayog, GoI",
          type: "Government Initiative",
          badge: "Industry Mentor"
        },
        {
          name: "Young Leaders Council (YLC)",
          org: "All India Management Association (AIMA)",
          type: "Leadership Development",
          badge: "Program Mentor"
        },
        {
          name: "New Delhi Institute of Management (NDIM)",
          org: "Academic Institution",
          type: "Educational Partnership",
          badge: "Industry Mentor"
        },
        {
          name: "Womennnovator",
          org: "Global Incubator for Women",
          type: "Women Empowerment",
          badge: "Global Mentor"
        }
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Brand Collaboration",
      subtitle: "Strategic brand partnerships",
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        {
          name: "Young Leaders Council (YLC)",
          org: "All India Management Association (AIMA)",
          type: "Strategic Alliance",
          badge: "Brand Partner"
        },{
          name: "Yellow Spark Solutions LLP",
          org: "Strategic Consulting",
          type: "Business Knowledge",
          badge: "Knowledge Partner"
        }
      ],
      color: "purple",
      gradient: "from-amber-400 to-amber-600"
    }
  ];

  const HeroSection = ({ title, subtitle, description }) => (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-28 md:pb-26 pb-15 overflow-hidden pt-28 md:pt-40">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title} <br />
            <span className="bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  const TabNavigation = ({ sections, activeSection, setActiveSection, contentRef }) => (
  <div className="bg-white border-b border-gray-200 top-0 z-40 shadow-sm">
    <div className="max-w-7xl mx-auto md:px-6 px-0">
      <div className="flex flex-wrap items-center justify-center text-lg">
        <div className="hidden md:flex overflow-x-auto scrollbar-hide">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`flex items-center justify-center gap-3 px-6 py-6 border-b-2 transition-all duration-300 whitespace-nowrap
                ${activeSection === index
                  ? 'border-red-600 text-red-600 bg-red-200'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
            >
              <div className={`p-2 rounded-lg transition-colors ${
                activeSection === index ? 'bg-red-50' : 'bg-gray-50'
              }`}>
                {section.icon}
              </div>
              <div className="text-left text-base">
                <div className="font-semibold text-sm">{section.title}</div>
                <div className="text-xs opacity-70">{section.items.length} {section.items.length === 1 ? "Section" : "Sections"}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="md:hidden w-full">
          {sections.map((section, index) => (
            <button
              key={index}
                onClick={() => {
                setActiveSection(index);
                if (activeSection !== index && contentRef?.current) {
                  setTimeout(() => {
                    contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 150);
                }
              }}
              className={`flex gap-3 items-start w-full text-left px-6 py-4 border-b-2 transition-all duration-300
                ${activeSection === index
                  ? 'border-red-600 text-red-600 bg-red-200'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
              <div className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                activeSection === index ? 'bg-red-50' : 'bg-gray-100'
              }`}>
                {section.icon}
              </div>
              <div className='text-left text-lg'>
                <div className="text-base font-semibold">{section.title}</div>
                <div className="text-xs opacity-70">{section.items.length} {section.items.length === 1 ? "Section" : "Sections"}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);
  const PartnerCard = ({ item, gradient, index }) => (
    <div 
      className={`group relative bg-white rounded-2xl border border-gray-200 hover:${gradient} transition-all duration-300 hover:shadow-xl overflow-hidden`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className={`text-lg font-bold text-gray-900 mb-2 group-hover:${gradient} transition-colors`}>
              {item.name}
            </h3>
            {item.org && (
              <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                <Building className="w-4 h-4" />
                {item.org}
              </p>
            )}
            {item.type && (
              <p className="text-xs text-gray-500 italic">{item.type}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${gradient} text-white`}>
            {item.badge}
          </span>
        </div>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
    </div>
  );
  const ContentGrid = ({ sections, activeSection , contentRef}) => (
    <div ref={contentRef} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {sections[activeSection].title}
          </h2>
          <p className="text-gray-600">
            {sections[activeSection].subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections[activeSection].items.map((item, idx) => (
            <PartnerCard
              key={idx}
              item={item}
              gradient={sections[activeSection].gradient}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Our Networks &"
        subtitle="Strategic Partnerships"
        description=" P/ PRABHAVEE - Partner for Social Impact collaborates with leading organizations to drive meaningful change and sustainable development across industries."
      />
      <TabNavigation
        sections={networkSections}
        activeSection={activeNetworkSection}
        setActiveSection={setActiveNetworkSection}
        contentRef={networkContentRef}
      />
      <ContentGrid
        sections={networkSections}
        activeSection={activeNetworkSection}
        contentRef={networkContentRef}        
      />
      <HeroSection
        title="Our Memberships &"
        subtitle="Trusted Collaborations"
        description="Empowering sustainable progress through strategic capacity building with our trusted memberships and professional affiliations."
      />
      <TabNavigation
        sections={membershipSections}
        activeSection={activeMembershipSection}
        setActiveSection={setActiveMembershipSection}
        contentRef={membershipContentRef}
      />
      <ContentGrid
        sections={membershipSections}
        activeSection={activeMembershipSection}
        contentRef={membershipContentRef}
      />
    </div>
  );
};
export default NetworkPartnerships;