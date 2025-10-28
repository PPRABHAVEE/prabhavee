"use client"
import React, { useState } from 'react';
import { ChevronDown, Users, FileText, Scale, Shield, Heart, Briefcase, BookOpen, Globe, Award, Target, ArrowRight, Gavel, TrendingDown, HandHelping, Wallet, Sparkles, ShieldAlert,Brain } from 'lucide-react';
const background = () => {
  const challenges = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "BRSR Reporting Quality",
      description:
        "Uneven BRSR reporting with under-disclosure of non-financial data persists. Despite government efforts, companies lack policy commitment and awareness of NGRBC, struggling to self-regulate with accurate, verifiable human rights disclosures.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Research Gap",
      description:
        "Civil society and CSR data lacks pathways into academic research, with minimal legal fraternity and faculty contributions.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "MSME/SME Capacity",
      description:
        "SMEs and MSMEs lack awareness and legal capacity to manage contractual liability, HRDD(Human Rights Due Diligence), procurement risks, knowledge of purchasing practices, and supply-chain human rights violation.",
      color: "from-red-400 to-red-400",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Fragmented Legal Expertise",
      description:
        "Business & Human Rights expertise is scattered, like in-house counsel, sustainability officers, commercial lawyers, human rights practitioners are not networked for a focused Business and Human Rights practice in India yet.",
      color: "from-gray-500 to-gray-600",
    },
  ];

  const initiatives = [
    "Policy Input and engagement with Government and Private sector.",
    "Stakeholder and Public consultation.",
    "Comments on draft regulations, guidance and standards development.",
    "Collaboration with organizations to publish reports that drive policy change.",
    "Dialogues and closed-door deliberations and public events.",
    "Capacity building workshops & Training.",
    "International forums/Events/Speaking engagements.",
    "Mentorship & Guest lectures: Students and emerging industry leaders.",
    "Participation in stakeholder interviews, surveys - contributing to industry reports.",
    "Representation in conferences: Ecosystem coalition and consensus-building.",
    "Strategic consultations & advisory."
  ];

  const thematicAreas = [
    { icon: <Scale className="w-5 h-5" />, title: "Business & Human Rights" },
    { icon: <Shield className="w-5 h-5" />, title: "Responsible Business Conduct & Practices" },
    { icon: <FileText className="w-5 h-5" />, title: "Transparency & Corporate Accountability" },
    { icon: <Award className="w-5 h-5" />, title: "Governance, Ethics and Business Integrity" },
    { icon: <Users className="w-5 h-5" />, title: "Decent Work and Protection of Migrant Workers" },
    { icon: <Briefcase className="w-5 h-5" />, title: "Responsible Recruitment Practices" },
    { icon: <Heart className="w-5 h-5" />, title: "Child Rights, Protection & Safeguard strategies and practices" },
    { icon: <HandHelping className="w-5 h-5" />, title: "Child Labour" },
    { icon: <Wallet className="w-5 h-5" />, title: "Social Protection, Financial Inclusion and Livelihood" },
    { icon: <Brain className="w-5 h-5" />, title: "Mental Health & Well-being" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Women's Entrepreneurship Development" },
    { icon: <Shield className="w-5 h-5" />, title: "Gender, Diversity, Inclusion" },
    { icon: <ShieldAlert className="w-5 h-5" />, title: "Prevention of Sexual Harassment at the Workplace (PoSH)" }
  ];
  return (
   <div className="min-h-screen bg-white pt-10">
    <section className="relative bg-gradient-to-br from-gray-200 to-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1a365d] rounded-full opacity-10 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
          Bridging Business, Human Rights & <span className="text-red-600 bg-red-200/60 px-2 rounded-xl">Sustainability</span>
        </h1>
       <div className="flex justify-center mb-12">
          <div className="bg-white/80 border-l-4 border-red-500 shadow-lg px-4 py-5 sm:px-7 sm:py-6 rounded-xl max-w-3xl w-full text-center flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <svg
              className="w-8 h-8 text-red-600 flex-shrink-0 mx-auto sm:mx-0 mb-3 sm:mb-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m2-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-base sm:text-xl text-gray-800 font-medium leading-relaxed">
               P/ PRABHAVEE envisions an{" "}
              <span className="text-red-600 font-semibold">
                integrated, legally informed, research-enabled model
              </span>{" "}
              that brings together legal practitioners, CSOs, policy experts,
              communicators, academic reasearchers and business representatives to
              improve disclosures by the businesses and build capacity across the value
              chain.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-10">
          <div className="flex items-center gap-4">
            <span className="bg-red-50 rounded-full p-4 shadow-md">
              <Scale className="w-9 h-9 text-red-600" />
            </span>
            <div>
              <span className="font-semibold text-gray-900 block text-lg">Policy and Guidance</span>
              <span className="text-gray-600 text-base">Strengthening systems for Business & Human Rights practice</span>
            </div>
          </div>
          <div className="hidden md:block w-10 h-1 rounded-full" />
          <div className="flex items-center gap-4">
            <span className="bg-red-50 rounded-full p-4 shadow-md">
              <Users className="w-9 h-9 text-red-600" />
            </span>
            <div>
              <span className="font-semibold text-gray-900 block text-lg">Multi-Stakeholder</span>
              <span className="text-gray-600 text-base">Bringing together CSOs, academia, businesses, lawyers & policy experts</span>
            </div>
          </div>
          <div className="hidden md:block w-10 h-1 rounded-full bg-gray-200" />
          <div className="flex items-center gap-4">
            <span className="bg-red-50 rounded-full p-4 shadow-md">
              <Target className="w-9 h-9 text-red-600" />
            </span>
            <div>
              <span className="font-semibold text-gray-900 block text-lg">Strategic Impact</span>
              <span className="text-gray-600 text-base">Influencing policy landscape through collective action</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-8 md:py-20 bg-gradient-to-br from-white to-gray-50 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-14">
          <h2 className="text-4xl font-extrabold text-[#1a365d] mb-6">
            Positioning in the Ecosystem
          </h2>
          <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-3xl">
            In India, mandatory Corporate Social Responsibility (CSR) — requiring companies to dedicate 2% of average net profits to social welfare — has shaped the landscape for over a decade. Alongside, evolving frameworks like the <strong>National Guidelines on Responsible Business Conduct (NGRBC)</strong> and the <strong>Business Responsibility and Sustainability Reporting (BRSR)</strong> are making responsible business and human rights central themes for organizations. Yet, fragmented efforts and a lack of unified strategy persist across sectors and stakeholders.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#e53e3e]">Context & Regulatory Shifts</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-base text-left">
                <li>
                  <span className="font-semibold">CSR Law (2013):</span> Companies must allocate 2% of average net profits for community welfare — a transformative benchmark in the region.
                </li>
                <li>
                  <span className="font-semibold">NGRBC & National Action Plan (NAP):</span> India has released a zero draft of its <strong>National Action Plan (NAP) on Business and Human Rights</strong> following multi-stakeholder consultations. The <strong>Indian Institute of Corporate Affairs (IICA)</strong> published the <strong>2018 National Guidelines on Responsible Business Conduct (NGRBC), </strong>aligned with the <strong>2011 NVGs </strong>and <strong>UNGPs</strong>. While <strong>Nepal is the first South Asian country </strong>to adopt and implement its NAP, India is yet to do so. We actively follow this evolving space and look forward to its implementation.
                </li>
                <li>
                  <span className="font-semibold">Rising Participation:</span> <strong>CSOs, NGOs, human rights defenders, CBOs, </strong> and other agencies advancing <strong>workers’ rights and grievances.</strong> Their work covers key areas like <strong>health and safety, worker well-being, responsible supply chains, grievance redressal, fair wages, workplace harassment, child and forced labor, and access to remedies.</strong>
                </li>
              </ul>
            </div>
            <div className="bg-[#f7fafc] border-l-4 border-[#1a365d] rounded-xl p-6 text-base text-gray-800 shadow-sm">
              <p>
                <span className="font-semibold text-[#e53e3e]"> P/ PRABHAVEE</span> aims to bridge these gaps by fostering partnerships among lawyers, legal researchers, and academics experts , at the intersection of business, human rights, and sustainability. We strive to gather diverse perspectives, foster partnerships, and enable multi-stakeholder dialogue to drive legal, institutional, and systemic reforms.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-[#e53e3e]">
              <h3 className="text-xl font-semibold text-[#1a365d] mb-6">Key Stakeholders</h3>
              <div className="grid grid-cols-1 gap-4 text-base">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Civil Society Organisations</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Academia & Researchers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Legal Practitioners</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Businesses</span>
                </div>
              </div>
              <p className="mt-7 text-gray-600 text-[15px]">
                Stakeholders are crucial for a collective, accountable approach—ensuring policy changes are grounded in legal rigor and real-world evidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 md:py-20 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="absolute top-0 left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-10 w-56 h-56 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Challenges We <span className="text-red-600">Address</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through our initiatives, we tackle systemic gaps in the{" "}
              <span className="font-medium text-[#1a365d]">
                business and human rights ecosystem
              </span>
              , driving impact through research, capacity building, and policy engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2 duration-300"
              >
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${challenge.color}`}
              ></div>
              <div className="p-8">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center text-white shadow-md mb-6 group-hover:scale-110 transition`}
                >
                  {challenge.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>
              </div>
            ))}
          </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-3">
            Our Key Initiatives
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Strategic approaches to drive systemic change
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {initiatives.map((initiative, idx) => (
            <div
              key={idx}
              className="relative flex items-start p-6 bg-gray-50 border-[1.5px] border-gray-200 rounded-xl shadow-sm transition-all duration-300
                        hover:shadow-lg hover:-translate-y-1 hover:bg-white hover:border-red-600 group"
            >
              <span className="absolute -top-4 left-4 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-base shadow-md border-4 border-white">
                {idx + 1}
              </span>
              <span className="inline-flex items-center justify-center rounded-full bg-red-50 w-10 h-10 mr-4 group-hover:bg-red-100 transition">
                <ArrowRight className="w-6 h-6 text-red-600" />
              </span>
              <span className="text-gray-800 text-base leading-relaxed">
                {initiative}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thematic Areas</h2>
          <p className="text-xl text-gray-600">Comprehensive focus across critical business and human rights domains</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {thematicAreas.map((area, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="text-red-600">{area.icon}</div>
                <span className="text-gray-800 text-sm font-medium">{area.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}
export default background