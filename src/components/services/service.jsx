"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Scale, Users, Handshake, GraduationCap, FileText, Megaphone, Shield, Building2, CheckCircle2, Sparkles, Search, Landmark, ScrollText } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
export default function ProfessionalServices() {
  const [openCards, setOpenCards] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [expandedService, setExpandedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedText, setDisplayedText] = useState('Search for any service...');
  const typingTexts = [
    'Search for any service...',
    'Try "Governance and Board Leadership"',
    'Try "Legal and Compliance"',
    'Try "Training & Capacity Building"',
    'Try "Law and Policy Research"',
  ];
  const searchParams = typeof window !== "undefined"
  ? new URLSearchParams(window.location.search)
  : null;

  const serviceParam = searchParams?.get("service");

    useEffect(() => {
    if (serviceParam) {
        const idMap = {
        "governance-board-leadership": "governance",
        "legal-compliance": "legal",
        "partnerships-alliances": "partnerships",
        "training-capacity-building": "training",
        "law-policy-research": "research",
        "strategic-communication": "communication"
        };
        const id = idMap[serviceParam];
        if (id) {
        setOpenCards(prev => ({ ...prev, [id]: true }));
        setTimeout(() => {
            const el = document.getElementById(`service-${id}`);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 250);
        }
    }
    }, [serviceParam]);

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    const typingSpeed = 100;
    const pause = 2000;

    const type = () => {
      if (charIndex < typingTexts[index].length) {
        currentText = typingTexts[index].substring(0, charIndex + 1);
        setDisplayedText(currentText);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          charIndex = 0;
          index = (index + 1) % typingTexts.length;
          type();
        }, pause);
      }
    };
    type();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'governance',
      icon:  Landmark,
      title: 'Governance and Board Leadership',
      color: 'red',
      subtitle: 'Strategic Planning & Institutional Excellence',
      description: 'Strategic Planning, Guidance with applicability of laws and regulations for compliance, strategic guidance on institutionalising systems, procedures, policies in an organisation, Board Development & Leadership Capacity Building initiatives.',
      features: [
        'Strategy Development & Implementation.',
        'Compliance Management.',
        'Systems & Procedures Institutionalization.',
        'Board Development Programs.',
        'Leadership Capacity Building.'
      ]
    },
    {
      id: 'legal',
      icon: Scale,
      title: 'Legal and Compliance',
      color: 'gray',
      subtitle: 'Comprehensive Legal Advisory Services',
      description: 'Comprehensive legal and compliance advisory services for nonprofit organisations, Section 8 companies, CSR Foundation, start-ups and early-stage NGOs, social entrepreneurs.',
      features: [
        'Entity Setup & Registration.',
        'Income Tax, FCRA & Allied Laws Compliance.',
        'Legal documentation, agreement drafting, and review of key policies and frameworks.',
        'Conducting periodic compliance audits and regulatory checks.',
        'Due Diligence for donors, partners, and other individual funders.',
        'Compliance with CSR Laws and regulations.'
      ]
    },
    {
      id: 'partnerships',
      icon: Handshake,
      title: 'Partnerships and Alliances',
      color: 'red',
      subtitle: 'Strategic Collaboration & Donor Engagement',
      description: 'Strategic guidance to craft effective partnership strategies and build a diverse portfolio of meaningful collaborations with donors, CSR foundations, corporates, individual supporters, and other potential partners aligned with the organization’s strategic priorities.',
      features: [
        'Partnership Strategy Development.',
        'Donor & CSR Foundation Engagement.',
        'High-Quality Proposal Development.',
        'Impact & Narrative Reporting.',
        'Funder Alignment & Expectations Management.',
        'Long-term Collaboration Support.'
      ]
    },
    {
      id: 'training',
      icon: GraduationCap,
      title: 'Training & Capacity Building',
      color: 'gray',
      subtitle: 'Fostering Collaborative Learning Spaces',
      description: 'Building capacities and fostering a collaborative learning space through expert-led training programs, workshops, and focused group discussions tailored to stakeholder needs, alongside leadership development programs. organize and facilitate multi-stakeholder dialogues and convenings.',
      features: [
        'Prevention of Sexual Harassment (PoSH) Training.',
        'Child Protection & Safeguarding Practices.',
        'Masterclasses & Workshops.',
        'Life-skills & Behavioral Training.',
        'Mentorship Programs.'
      ]
    },
    {
      id: 'research',
      icon: ScrollText,
      title: 'Law and Policy Research',
      color: 'red',
      subtitle: 'Knowledge Generation & Policy Influence',
      description: 'Generating new knowledge, undertaking research on laws and regulations, policies and facilitating policy dialogues to influence systemic change and inform practice. Providing expert policy inputs through consultations and knowledge contributions to decision-makers and key stakeholders.',
      features: [
        'Research on Laws & Regulations',
        'Policy Analysis & Development',
        'Stakeholder Consultations Facilitation',
        'Expert Policy Input to Decision Makers',
        'Knowledge & Expertise Contribution',
        'Systemic Change Advocacy'
      ]
    },
    {
      id: 'communication',
      icon: Megaphone,
      title: 'Strategic Communication & Advocacy',
      color: 'gray',
      subtitle: 'Impactful Messaging & Stakeholder Engagement',
      description: 'Building clear, consistent, and impactful messaging to advance the organisations mission and expand outreach and strengthen stakeholder engagement by raising awareness, influencing perceptions, shaping policy or public opinion, and strengthening relationships with key audiences.',
      features: [
        'Communication Strategy Development.',
        'Outreach Plan Design & Implementation.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-300">
      <section className="pt-32 pb-15 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-12 transition-all duration-600"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.3, 50)}px)`,
              opacity: Math.max(0, 1 - scrollY / 400)
            }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-red-100 to-amber-100 rounded-full border border-red-100 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500 animate-bounce" />
              <span className="text-sm font-medium text-red-700 tracking-wide">Professional Services & Strategy Consulting</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-xl">
               Consulting for Purposeful Progress
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
               Partnering with organizations to shape governance, strengthen compliance, and inspire sustainable change.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-6 py-3 glass-bg rounded-xl shadow border border-amber-200 flex flex-col items-center">
                <div className="text-2xl font-bold text-red-500">6</div>
                <div className="text-sm text-gray-600">Core Services</div>
              </div>
              <div className="px-6 py-3 glass-bg rounded-xl shadow border border-amber-200 flex flex-col items-center">
                <div className="text-2xl font-bold text-amber-500">∞</div>
                <div className="text-sm text-gray-600">Impact Created</div>
              </div>
              <div className="px-6 py-3 glass-bg rounded-xl shadow border border-amber-200 flex flex-col items-center">
                <div className="text-2xl font-bold text-red-500">360°</div>
                <div className="text-sm text-gray-600">Solutions</div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-5 p-8 glass-bg rounded-2xl shadow-xl border-2 border-red-300">
            <p className="text-lg text-gray-800 leading-relaxed">
              PRABHAVEE's practice focuses on delivering <span className="font-semibold text-red-500">context-specific, actionable, and sustainable solutions</span> through proprietary frameworks and approaches tailored to each organization's unique needs.
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-10 relative">
            <div className="relative">
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={displayedText}
                className="w-full py-4 pl-12 pr-4 text-lg rounded-2xl shadow-lg border-2 border-red-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 placeholder-gray-500 bg-white/90"
                />
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-red-500">
                <Search className="w-6 h-6" />
                </div>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              Our Core Practice Areas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-red-500 mx-auto rounded-xl"></div>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {services
            .filter((service) => service.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((service, index) => {
                const Icon = service.icon;
                const isOpen = !!openCards[service.id];
                const bgColor = service.color === 'red'
                ? 'bg-gradient-to-br from-red-50 to-amber-50'
                : 'bg-gradient-to-br from-gray-50 to-gray-100';
                const borderColor = service.color === 'red' ? 'border-red-200' : 'border-gray-200';
                const iconBg = service.color === 'red' ? 'bg-gradient-to-tr from-red-500 to-amber-400' : 'bg-gray-800';
                const accentColor = service.color === 'red' ? 'text-red-600' : 'text-gray-800';

                return (
                <div
                id={`service-${service.id}`}
                    key={service.id}
                    className={`group relative card-glow ${bgColor} rounded-2xl border-2 ${borderColor} transition-all duration-500 hover:shadow-2xl overflow-hidden shadow-md`}
                    style={{
                    transform: `translateY(${Math.max(0, (scrollY - 300) * 0.02 - index * 10)}px)`,
                    opacity: Math.min(1, (scrollY + 200) / (200 + index * 50))
                    }}
                >
                    <div className={`absolute inset-0 hover-gradient group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-0`} />
                    <div className="relative z-10 p-8 md:p-10">
                    <div className="flex items-start gap-6 mb-6">
                        <div className={`flex-shrink-0 w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 glass-bg`}>
                        <Icon className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                            <h3 className={`text-2xl md:text-3xl font-bold ${accentColor} mb-2`}>
                                {service.title}
                            </h3>
                            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                                {service.subtitle}
                            </p>
                            </div>
                            <button
                            onClick={() =>
                                setOpenCards((prev) => ({
                                ...prev,
                                [service.id]: !prev[service.id]
                                }))
                            }
                            className={`ml-4 p-2 rounded-lg ${service.color === 'red' ? 'hover:bg-red-200 bg-red-50' : 'hover:bg-gray-200 bg-gray-50'} transition-colors group`}
                            >
                            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90 scale-110 text-amber-500' : 'group-hover:scale-110 text-red-500'}`} />
                            </button>
                        </div>
                        </div>
                    </div>

                    <p className="text-gray-800 leading-relaxed mb-6 text-lg">{service.description}</p>

                    <div className={`transition-all duration-500 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="pt-6 border-t-2 border-gradient-red">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-amber-500" />
                            Key Services & Deliverables
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white/90 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow glass-bg">
                                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.color === 'red' ? 'text-red-500' : 'text-amber-500'}`} />
                                <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                            </div>
                            ))}
                        </div>
                        {service.experts && (
                            <div className="mt-6 p-4 bg-white/90 rounded-lg border-l-4 border-amber-500 glass-bg">
                            <p className="text-sm text-gray-800 leading-relaxed">
                                <span className="font-semibold">🤝 {service.experts}</span>
                            </p>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
                );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
