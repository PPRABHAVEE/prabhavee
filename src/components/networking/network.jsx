"use client";
import React, { useState, useRef } from 'react'
import { Users, Handshake, Award, Briefcase, ExternalLink, Star, Building, Globe, ArrowRight, BookOpen, Target } from "lucide-react";
import OrgStats from '@/components/stats/stats';
const NetworkPartnerships = () => {
  const partnershipsRef = useRef(null);
  const membershipsRef = useRef(null);
  const [activeNetworkSection, setActiveNetworkSection] = useState(0);
  const [activeMembershipSection, setActiveMembershipSection] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const networkSections = [
    {
      title: "Network Partner",
      subtitle: "Strategic network collaborations",
      icon: <Globe className="w-8 h-8 text-white" />,
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
        },{
          name: "eLearnPOSH.com",
          org: "Digital Learning Platform",
          type: "EdTech Collaboration",
          badge: "Learning Partner"
        }
      ],
      color: "from-blue-500 to-blue-600",
      stats: { count: "5", label: "Network Partners" }
    },
    {
      title: "Mentorship",
      subtitle: "Guiding next generation leaders",
      icon: <Users className="w-8 h-8 text-white" />,
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
      color: "from-green-500 to-green-600",
      stats: { count: "4", label: "Mentorship Programs" }
    },
    {
      title: "Knowledge Partner",
      subtitle: "Sharing expertise & insights",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      items: [
        {
          name: "Yellow Spark Solutions LLP",
          org: "Strategic Consulting",
          type: "Business Knowledge",
          badge: "Knowledge Partner"
        }
      ],
      color: "from-amber-400 to-amber-500",
      stats: { count: "1", label: "Knowledge Partners" }
    },
    {
      title: "Ecosystem / Business associations",
      subtitle: "Industry and ecosystem participation",
      icon: <Target className="w-8 h-8 text-white" />,
      items: [
        {
          name: "Anti-Corruption Collective Action Working Group Member (ACCA)",
          org: "United Nations Global Compact Network India (UNGCNI)",
          type: "Anti-Corruption Initiative",
          badge: "Working Group Member"
        }
      ],
      color: "from-orange-500 to-orange-600",
      stats: { count: "1", label: "Business Associations" }
    }
  ];
  const membershipSections = [
    {
      title: "Memberships",
      subtitle: "Professional affiliations & certifications",
      icon: <Award className="w-8 h-8 text-white" />,
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
        },{
          name:"Indian Society for Training and Development (ISTD)",
          badge:"Member",
        }
      ],
      color: "from-red-500 to-red-600",
      stats: { count: "3", label: "Professional Memberships" }
    },
    {
      title: "Trusted by",
      subtitle: "Organizations that trust our expertise",
      icon: <Handshake className="w-8 h-8 text-white" />,
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
      color: "from-gray-700 to-gray-800",
      stats: { count: "3", label: "Trusted Partnerships" }
    },
    {
      title: "Industry Mentorship",
      subtitle: "Mentoring programs & initiatives",
      icon: <Users className="w-8 h-8 text-white" />,
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
          name: "Womenovator",
          org: "Global Incubator for Women",
          type: "Women Empowerment",
          badge: "Global Mentor"
        }
      ],
      color: "from-blue-500 to-blue-600",
      stats: { count: "4", label: "Mentorship Programs" }
    },
    {
      title: "Brand Collaboration",
      subtitle: "Strategic brand partnerships",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      items: [
        {
          name: "Young Leaders Council (YLC)",
          org: "All India Management Association (AIMA)",
          type: "Strategic Alliance",
          badge: "Brand Partner"
        }
      ],
      color: "from-purple-500 to-purple-600",
      stats: { count: "1", label: "Brand Collaborations" }
    }
  ];
  const FloatingOrbitSection = ({ sections, activeSection, setActiveSection, title, subtitle, description }) => (
    <div className="relative pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              {title}<br />
              <span className="text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text">
                {subtitle}
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              {description}
            </p>
          </div>
          <div className="flex-1 relative h-96 lg:h-[500px]">
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center 
                shadow-2xl animate-pulse">
                <Building className="w-12 h-12 text-white" />
              </div>
              {sections.map((section, index) => {
                const angle = (index * 90) - 45;
                const radius = 120;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                return (
                  <div
                    key={index}
                    className="absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 
                      transition-all duration-500 hover:scale-110 cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      animationDelay: `${index * 0.5}s`
                    }}
                    onClick={() => setActiveSection(index)}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${section.color} rounded-2xl 
                      flex items-center justify-center shadow-lg`}>
                      {section.icon}
                    </div>
                  </div>
                );
              })}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#374151" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                {sections.map((_, index) => {
                  const angle = (index * 90) - 45;
                  const radius = 120;
                  const x = Math.cos(angle * Math.PI / 180) * radius + 50;
                  const y = Math.sin(angle * Math.PI / 180) * radius + 50;
                  return (
                    <line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={`${x}%`}
                      y2={`${y}%`}
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const SectionSelector = ({ sections, activeSection, setActiveSection }) => (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left
                ${activeSection === index 
                  ? 'bg-red-600 border-red-500 text-white' 
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-red-500 hover:bg-gray-700'
                }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                  ${activeSection === index ? 'bg-white/20' : 'bg-gray-700'}`}>
                  {section.icon}
                </div>
                <span className="font-semibold">{section.title}</span>
              </div>
              <p className={`text-sm ${activeSection === index ? 'text-red-100' : 'text-gray-400'}`}>
                {section.subtitle}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const ContentSection = ({ sections, activeSection, sectionType }) => (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {sections[activeSection].title}
          </h2>
          <p className="text-xl text-gray-600">
            {sections[activeSection].subtitle}
          </p>
        </div>
        <div 
          className="relative flex justify-center items-center h-52"
          onMouseLeave={() => {
            setHovered(null);
            setHoveredSection(null);
          }}
        >
          <div className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-red-200 z-0"></div>
          <div className="relative z-10 flex space-x-10 overflow-x-auto scrollbar-hide px-4 py-6">
            {sections[activeSection].items.map((item, idx) => (
              <div
                key={`${sectionType}-${item.name}-${idx}`}
                className="relative group cursor-pointer"
                onMouseEnter={(e) => {
                  setHovered(idx);
                  setHoveredSection(sectionType);
                  setMousePos({ x: e.clientX, y: e.clientY });
                }}
                onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => {
                  setHovered(null);
                  setHoveredSection(null);
                }}
              >
                <div className={`flex flex-col items-center bg-gradient-to-br
                  ${sections[activeSection].color}
                  px-7 py-3 rounded-full shadow-sm text-white font-semibold text-base 
                  transition-all duration-300 min-w-[200px]`}>
                  <span className="flex items-center gap-2">
                    {sections[activeSection].icon}
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <FloatingOrbitSection
        sections={networkSections}
        activeSection={activeNetworkSection}
        setActiveSection={setActiveNetworkSection}
        title="Our Networks &"
        subtitle="Partners"
        description="PRABHAVEE - Partner for Social Impact collaborates and maintains strategic partnerships with leading organizations:"
      />
      <div ref={partnershipsRef}>
        <SectionSelector
          sections={networkSections}
          activeSection={activeNetworkSection}
          setActiveSection={setActiveNetworkSection}
        />
        <ContentSection
          sections={networkSections}
          activeSection={activeNetworkSection}
          sectionType="networks"
        />
      </div>
      <div className="bg-gray-100 py-16">
        <FloatingOrbitSection
          sections={membershipSections}
          activeSection={activeMembershipSection}
          setActiveSection={setActiveMembershipSection}
          title="Our Memberships"
          subtitle="Supporters | Collaborations"
          description="Empowering Sustainable progress through Strategic Capacity Building with our trusted memberships and collaborations:"
        />
      </div>
      <div ref={membershipsRef}>
        <SectionSelector
          sections={membershipSections}
          activeSection={activeMembershipSection}
          setActiveSection={setActiveMembershipSection}
        />
        <ContentSection
          sections={membershipSections}
          activeSection={activeMembershipSection}
          sectionType="memberships"
        />
      </div>
      {hovered !== null && hoveredSection && (
        <div
          className="fixed z-[100] w-80 bg-white rounded-2xl py-4 px-6 shadow-2xl border border-red-100 text-left pointer-events-none transition-all duration-200"
          style={{
            top: mousePos.y + 24,
            left: Math.min(mousePos.x, window.innerWidth - 340),
            maxWidth: "90vw"
          }}
        >
          {hoveredSection === 'networks' && (
            <>
              <div className="text-gray-900 font-bold text-lg mb-1">
                {networkSections[activeNetworkSection].items[hovered].name}
              </div>
              <div className="mb-1 text-sm text-gray-600">{networkSections[activeNetworkSection].items[hovered].org}</div>
              <div className="mb-3 text-xs italic text-gray-400">{networkSections[activeNetworkSection].items[hovered].type}</div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${networkSections[activeNetworkSection].color} text-white`}>
                {networkSections[activeNetworkSection].items[hovered].badge}
              </span>
            </>
          )}
          {hoveredSection === 'memberships' && (
            <>
              <div className="text-gray-900 font-bold text-lg">
                {membershipSections[activeMembershipSection].items[hovered].name}
              </div>
              <div className="mb-1 text-sm text-gray-600">{membershipSections[activeMembershipSection].items[hovered].org}</div>
              <div className="mb-3 text-xs italic text-gray-400">{membershipSections[activeMembershipSection].items[hovered].type}</div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${membershipSections[activeMembershipSection].color} text-white`}>
                {membershipSections[activeMembershipSection].items[hovered].badge}
              </span>
            </>
          )}
        </div>
      )}
      <OrgStats></OrgStats>
    </div>
  );
}

export default NetworkPartnerships;