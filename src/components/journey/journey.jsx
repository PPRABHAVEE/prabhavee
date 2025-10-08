"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Award, Globe, Lightbulb, ChevronDown, ExternalLink, BookOpen, CalendarCheck, UserCheck, MessageSquareText, Handshake } from 'lucide-react';

const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const milestones = [
    {
      year: "2022",
      month: "MAY",
      title: "CONCEPTUALIZED AT NSRCEL",
      subtitle: "The Beginning of Our Vision",
      description: "PRABHAVEE - Partner for Social Impact was conceptualized at the NSRCEL Women Startup Program 2022 (IIM Bangalore). ",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      location: "Online",
      category: "Foundation"
    },
    {
      year: "2024",
      month: "SEPTEMBER",
      title: "ADVISORY BOARD APPOINTMENT",
      subtitle: "Strategic Leadership Role",
      description: "PRABHAVEE's Founding Lawyer, Anumita Sarkar, joined the Advisory Board of Darbar Sahitya Sasada (DSS), a grassroots NGO based in Odisha. This marked our commitment to grassroots development and social impact.",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
      location: "Odisha",
      category: "Leadership"
    },
    {
      year: "2024",
      month: "SEPTEMBER",
      title: "INTERNATIONAL CONFERENCE",
      subtitle: "Global Engagement",
      description: "Delegate the 5-days International Conference 'United Nations Responsible Business and Human Rights Forum, Asia-Pacific 2024' in Bangkok, Thailand. Engaged with diverse stakeholder representatives from South Asia & Asia-Pacific countries globally.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      location: "Bangkok, Thailand",
      category: "International"
    },
    {
      year: "2024",
      month: "NOVEMBER",
      title: "DIALOGUE ON DEVELOPMENT MANAGEMENT",
      subtitle: "Platform Delegate",
      description: "PRABHAVEE - Partner for Social Impact during ISDM's Annual Flagship Event 'Dialogue on Development Management'. Anumita also completed the Women on Boards Program (WoB) from Indian School of Development Management (ISDM) - Cohort 5.",
      icon: <MessageSquareText className="w-6 h-6" />,
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
      location: "In-person",
      category: "Delegate"
    },
    {
    year: "2025",
    month: "MAY",
    title: "Partnerships & Collaborations",
    subtitle: "Establishing Networks with Eco-System Partners",
    description: "Initiated and strengthened partnerships and collaborations with diverse eco-system partners to broaden our impact and drive shared goals.",
    icon: <Handshake className="w-6 h-6" />,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    location: "PAN-India",
    category: "Partnership",
  },
  {
    year: "2025",
    month: "MAY",
    title: "Research Initiatives",
    subtitle: "Policy Dialogue & Academic Research Collaboration",
    description: "Launched research initiatives fostering policy dialogue, academic collaboration, and evidence-based practice in social impact.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "from-gray-600 to-gray-700",
    bgColor: "bg-gray-50",
    textColor: "text-gray-700",
    location: "PAN-India",
    category: "Research",
  },
  {
    year: "2025",
    month: "MAY",
    title: "Events & Workshops",
    subtitle: "Internal & Young Leaders Council, AIMA",
    description: "Organized and participated in key events and workshops, including collaborations with the Young Leaders Council at AIMA.",
    icon: <CalendarCheck className="w-6 h-6" />,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    location: "Online and In-person",
    category: "Event",
  }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.index]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
  );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-13">
      {/* Header Section */}
      <div className="relative py-16 bg-gradient-to-tr from-red-50/70 via-white via-60% to-gray-200 overflow-hidden">
        <div className="absolute left-1/2 -top-28 -translate-x-1/2 w-[700px] h-56 bg-red-100 opacity-30 blur-2xl pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#181c25] mb-6">
              Strategic <span className="text-red-600">Milestones</span>
            </h1>
            <div className="mx-auto max-w-xl mb-4">
              <span className="inline-block px-7 py-2.5 rounded-full text-white bg-gradient-to-r from-red-600 via-red-500 to-gray-900 shadow font-semibold text-lg tracking-wide">
                Empowering Progress Through Purposeful Evolution
              </span>
            </div>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              From vision to impact, explore our defining achievements and turning points.
            </p>
          </div>
        </div>
        {/* Timeline Section */}
        <div className="relative py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-500 via-gray-400 to-red-500 h-700 opacity-40"></div>
              <div className="space-y-20">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0;
                  const isActive = isVisible[index];
                  return (
                    <div
                      key={index}
                      data-index={index}
                      className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} 
                        transition-all duration-1000 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <div className={`w-5/12 ${isEven ? 'pr-12' : 'pl-12'}`}>
                        <div className={`relative ${milestone.bgColor} p-8 rounded-3xl shadow-lg border border-gray-100 
                          hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}>
                          <div className="absolute -top-4 left-6">
                            <span className={`px-4 py-2 text-sm font-semibold bg-gradient-to-r ${milestone.color} 
                              text-white rounded-full shadow-lg`}>
                              {milestone.category}
                            </span>
                          </div>
                          <div className={`flex items-center gap-4 mb-6 ${!isEven ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-14 h-14 bg-gradient-to-br ${milestone.color} rounded-2xl 
                              flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                              <div className="text-white">
                                {milestone.icon}
                              </div>
                            </div>
                            <div className={`flex-1 ${!isEven ? 'text-right' : ''}`}>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                <MapPin className="w-4 h-4" />
                                <span>{milestone.location}</span>
                              </div>
                              <h3 className={`text-2xl font-bold ${milestone.textColor} mb-1`}>
                                {milestone.title}
                              </h3>
                              <p className="text-lg text-gray-600 font-medium">
                                {milestone.subtitle}
                              </p>
                            </div>
                          </div>
                          <p className={`text-gray-700 leading-relaxed ${!isEven ? 'text-right' : ''}`}>
                            {milestone.description}
                          </p>
                          <div className={`absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 
                            transition-all duration-300 ${isEven ? '-right-4' : '-left-4'}`}>
                            <div className={`w-4 h-4 bg-gradient-to-br ${milestone.color} rotate-45 shadow-lg`}></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full 
                          flex items-center justify-center shadow-xl border-4 border-white 
                          hover:scale-125 transition-all duration-300 cursor-pointer group`}>
                          <Calendar className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
                        </div>
                      </div>
                      <div className={`w-5/12 ${isEven ? 'pl-12' : 'pr-12'}`}>
                        <div className={`${!isEven ? 'text-right' : ''}`}>
                          <div className="text-6xl font-bold text-gray-900 mb-2">
                            {milestone.month}
                          </div>
                          <div className="text-8xl font-black text-gray-300 leading-none">
                            {milestone.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
      </div>
  );
};

export default JourneyTimeline;