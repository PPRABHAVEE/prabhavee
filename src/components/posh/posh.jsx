"use client";
import React, { useState, useEffect } from 'react';
import { ShieldCheck, BookOpen, Users, Zap, Briefcase, FileText, CheckCircle, Lightbulb, ChevronRight, ArrowRight, Star, Award, Target, HeartHandshake, Handshake, Scale, BarChart3, Sparkles } from 'lucide-react';
const BRAND_RED = '#EF4444'; 
const BRAND_DARK = '#1F2937';
const BRAND_LIGHT_RED = '#FEF2F2';
const BRAND_GRADIENT = 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)';

const services = [
    {
      number: "01",
      title: "Expert-Led Training",
      description: "Comprehensive PoSH training programs tailored to your organization's needs."
    },
    {
      number: "02",
      title: "Compliance Audits",
      description: "Thorough assessments to ensure legal compliance and best practices."
    },
    {
      number: "03",
      title: "Advisory Solutions",
      description: "Strategic guidance to build an inclusive and safe workplace culture."
    }
  ];

const poshServices = [
    {
        title: 'PoSH Consultation',
        icon: Handshake,
        category: 'consultation',
        description: 'Strategy development and foundational support to establish a legally sound framework.',
        items: [
            'Formation of PoSH Internal Committee.',
            'Design and drafting PoSH Policy.',
            'Annual Report Filing Support.',
            'Drafting & Documentation.',
            'Inquiry Proceedings and Report Drafting Support.',
            'PoSH Audit: Documentation, Compliance, developing Standard Operating Procedure (SOP), and other procedures followed by an organisation.',
            'Ongoing guidance, insights and recommendations.',
            'Legal and compliance support.',
        ]
    },
    {
        title: 'PoSH Certification',
        icon: Award,
        category: 'training',
        description: 'Accreditation and training programs for individuals and various organizational entities.',
        items: [
            'PoSH Certification for individuals (Open to all).',
            'Train the Trainer (ToT) Certification.',
            'PoSH training programs for:',
        ],
        subCategories: [
            { heading: 'Training for:', list: ['Early-stage NGOs', 'Sector-specific NGOs', 'Corporate Foundation', 'Companies', 'For-profit entities', 'Section 8 Companies'] }
        ]
    },
    {
        title: 'PoSH Capacity Building',
        icon: BarChart3 ,
        category: 'training',
        description: 'Focused training to empower internal stakeholders with practical knowledge.',
        items: [
            'Capacity Building for Internal Committee Members:',
        ],
        subCategories: [
            { heading: 'Targeted at:', list: ['Corporates', 'For-profit organisations', 'Non-profit organisations'] }
        ]
    },
    {
        title: 'External Member Services',
        icon: Scale,
        category: 'support',
        description: 'Continuous legal, advisory, and hands-on support for ongoing compliance.',
        items: [
            'Quarterly legal and advisory support to the company on different aspects of PoSH implemented by the company:',
        ],
        subCategories: [
            { heading: 'Support for:', list: [
            'Expert legal knowledge (guidance on the application of the provisions of the act, rules).',
            'Support with policy development strategies, drafting, reviewing, recommendations, and ongoing compliance.',
            'Assist in handling complaints, cases, interviews, documentation, and reports.',
            'Support in delivering Training within the organisation.',
            'Participate in Capacity Building initiatives as an IC External Member.',
            'Ongoing legal support, advisory services to the organisation.'
        ] }
        ]

    },
];
const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = service.icon;
  return (
    <div
      className={`relative flex flex-col h-full bg-white rounded-2xl shadow-md border border-gray-200 transition-all duration-500 cursor-pointer
        ${isExpanded ? 'col-span-1 lg:col-span-2 row-span-2' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center bg-red-200 border-2 border-red-500 px-3 md:px-0"
            >
              <IconComponent className="w-7 h-7 text-red-500" />
            </div>
            <div className="ml-4">
              <h3 className=" text-xl md:text-2xl font-semibold text-gray-800 mb-1">
                {service.title}
              </h3>
            </div>
          </div>
          <ChevronRight
            className={`w-7 h-7 mt-4 text-gray-400 transition-transform duration-300 ${
              isExpanded ? 'rotate-90' : ''
            }`}
          />
        </div>
        <p className="text-base text-gray-600 leading-relaxed font-medium">
          {service.description}
        </p>
      </div>
      <div
        className={`px-6 pb-6 transition-all duration-700 overflow-hidden ${
          isExpanded ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t-3 border-amber-400 pt-4  ">
          <ul className="space-y-3">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-start text-base text-gray-700 ">
                <CheckCircle className="w-6 h-6 mt-0.5 mr-3 flex-shrink-0 text-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {service.subCategories &&
            service.subCategories.map((cat, catIndex) => (
              <div
                key={catIndex}
                className="mt-4 p-4 rounded-lg bg-gray-50 border border-gray-900 "
              >
                <p className="font-semibold text-gray-800 text-xl text-center mb-3">
                  {cat.heading}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                  {cat.list.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex items-start gap-2 text-gray-700 leading-relaxed"
                    >
                      <div className="mt-2">
                        <Target className="w-4 h-4 text-red-500 shrink-0" />
                      </div>
                      <span className="text-sm sm:text-base font-medium">{subItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
const PoSHServicesPage = () => {
    const [activeTab, setActiveTab] = useState('all');
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white overflow-x-clip">
            <header className=" bg-gradient-to-br from-rose-50 via-orange-50 to-red-50 pt-7 md:pt-10">
                <div className="absolute inset-0 overflow-hidden">
                    <div 
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-40"
                    style={{
                        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, rgba(251, 146, 60, 0.2) 50%, transparent 70%)',
                        animation: 'float 20s ease-in-out infinite'
                    }}
                    ></div>
                    <div 
                    className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, rgba(239, 68, 68, 0.2) 50%, transparent 70%)',
                        animation: 'float 15s ease-in-out infinite reverse'
                    }}
                    ></div>
                    <div 
                    className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-red-200/30 to-orange-200/30 blur-2xl"
                    style={{ animation: 'float 12s ease-in-out infinite' }}
                    ></div>
                    <div 
                    className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-orange-200/30 to-rose-200/30 blur-2xl"
                    style={{ animation: 'float 18s ease-in-out infinite reverse' }}
                    ></div>
                    <div 
                    className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-red-300/20 rounded-2xl rotate-45"
                    style={{ animation: 'spin 30s linear infinite' }}
                    ></div>
                    <div 
                    className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-orange-300/20 rounded-full"
                    style={{ animation: 'pulse 8s ease-in-out infinite' }}
                    ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>
                <div className="relative z-10 max-w-7xl mx-auto lg:px-12 py-20 pb-10">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 border border-red-200 rounded-full shadow-sm">
                            <ShieldCheck className="w-5 h-5 text-red-700" />
                                <span className="text-red-700 text-sm font-semibold">
                                    Safeguarding Workplaces with Integrity
                                </span>
                            </div>
                            <div className="space-y-2">
                            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
                                <span 
                                className="bg-gradient-to-r from-gray-900 via-red-800 to-orange-700 bg-clip-text text-transparent"
                                style={{
                                    backgroundSize: '200% auto',
                                    animation: 'gradient 5s linear infinite'
                                }}
                                >
                                PoSH Consultancy
                                </span>
                                <span className="block text-5xl lg:text-6xl mt-3 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-bold">
                                and Services
                                </span>
                            </h1>
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                                <div className="h-1 w-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium px-4 md:px-0">
                        Empowering organizations to create 
                            <span className="text-red-600 font-semibold"> inclusive</span>, 
                            <span className="text-orange-600 font-semibold"> legally compliant</span>, and 
                            <span className="text-red-700 font-semibold"> safe</span> workplace environments.
                        </p>
                    </div>
                    <div className="space-y-5 px-4 md:px-0">
                        {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-500 border border-white/50 group hover:bg-gradient-to-br hover:from-red-50 hover:to-orange-50/50 hover:-translate-y-1"
                        >
                            {index < services.length - 1 && (
                            <div className="absolute left-9 top-full h-5 w-0.5 bg-gradient-to-b from-red-400 via-orange-400 to-transparent"></div>
                            )}  
                            <div className="flex items-start gap-5">
                            <div className="relative flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                {service.number}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-300">
                                {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                {service.description}
                                </p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500"></div>
                            </div>
                            </div>
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                            <div 
                                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                                }}
                            ></div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <button
                        className="relative group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 via-red-500 to-orange-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 overflow-hidden"
                        onClick={() => {
                        document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <div 
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                        }}
                        ></div>
                        <span className="relative z-10">Explore Services</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </div>
                </div>
            </header>
            <section id="core-services" className="py-17 -mt-10 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className=" text-4xl md:text-5xl font-extrabold mb-4" style={{ color: BRAND_DARK }}>
                            Our Core Service Pillars
                        </h2>
                        <p className="text-gray-600 max-w-4xl mx-auto md:text-xl text-base">
                            Choose from our comprehensive range of services designed to meet your organization's PoSH compliance needs
                        </p>
                    </div>
                    <div className="flex justify-center mb-12 ">
                        <div className="inline-flex bg-gray-200 rounded-full p-1 border border-gray-500">
                            {['all', 'consultation', 'training', 'support'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeTab === tab 
                                            ? 'bg-white text-red-600 shadow-md' 
                                            : 'text-gray-700 hover:text-gray-900'
                                    }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {poshServices
                        .filter(service => activeTab === 'all' ? true : service.category === activeTab)
                        .map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }
      `}</style>
        </div>
    );
};
export default PoSHServicesPage;