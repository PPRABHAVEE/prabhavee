"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, MapPin, Mail, Users, Award, Target, BookOpen, Briefcase, Scale, Heart, Globe, Phone, Quote, Landmark, ScrollText, Linkedin } from 'lucide-react';
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import about from '@/app/assets/about.jpg';
import vision from '@/app/assets/vision.png';
import mission from '@/app/assets/mission.png';
import founder from '@/app/assets/founder.jpg';
import OrgStats from '@/components/stats/stats';

const PrabhaveeWebsite = () => {
  const [activeTab, setActiveTab] = useState("approach");
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);
  const icons = [BookOpen, Users, Globe, Award, Target];

  const pillars = [
    {
      title: "Research, Development & Knowledge Dissemination",
      bullets: [
        "Collaborate with researchers, scholars, academia, public policy consultants, and civil society organisations.",
        "To undertake evidence-based research generating data, evidence, insights & recommendations.",
      ],
    },
    {
      title: "Training Excellence & Lifelong Learning",
      bullets: [
        "Delivering training programs, curating and launching expert-led workshops.",
        "Facilitating focused group discussions and leading other strategic intiatives, including leadership development programs.",
      ],
    },
    {
      title: "Strategic Partnerships for Sustainable Long-term Impact",
      bullets: [
        "Partner with Academic Institutions, diverse industries, businesses, brands, suppliers, sector-specific experts, NGOs, civil society organisations, CSR implementing agencies, and social impact consulting firms.",
        "Foster multi-stakeholder dialogue and build a robust platform for sustained engagement, collaborative knowledge co-creation, and the sharing of best practices."
      ],
    },
    {
      title: "Institutional Development & Strong and Effective Governance",
      bullets: [
        "Strengthen governance frameworks within Nonprofit Legal and Advisory Boards.",
        "Ensure compliance with laws and regulatory standards, and offer strategic support and guidance to develop and institutionalise robust systems and processes.",
        "Enhance accountability, transparency, and long-term sustainability.",
      ],
    },
    {
      title: "Standardisation & Best Practices",
      bullets: [
        "Build, convene, and foster an ecosystem of practitioners aligned with thematic focus areas we focus on.",
        "Co-create and document innovative approaches, strategic frameworks, evidence-based pathways, insights, and practical recommendations.",
        "Integrate evolving international standards and global recognized guidance across all programs and service offerings for quality and accountability in all the intiatives and programs.",
      ],
    },
  ];

  const tabs = [
    { id: "approach", label: "Our Approach", icon: Target },
    { id: "partners", label: "Collaborations", icon: Users },
    { id: "focus", label: "Focus Areas", icon: Globe },
    { id: "engagements", label: "Engagements", icon: BookOpen },
  ]

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      const section = canvas.parentNode;
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasDimensions()

    const shapes = []
    const colors = [
      "rgba(220, 38, 38, 0.2)", 
      "rgba(239, 68, 68, 0.15)", 
      "rgba(248, 113, 113, 0.1)", 
      "rgba(254, 202, 202, 0.08)" 
    ]

    for (let i = 0; i < 4; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 250 + 120,
        color: colors[i],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      shapes.forEach((shape) => {
        shape.x += shape.vx
        shape.y += shape.vy
        if (shape.x < -shape.radius || shape.x > canvas.width + shape.radius) shape.vx *= -1
        if (shape.y < -shape.radius || shape.y > canvas.height + shape.radius) shape.vy *= -1
        ctx.beginPath()
        ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2)
        ctx.fillStyle = shape.color
        ctx.fill()
      })
    }
    animate()

    window.addEventListener("resize", setCanvasDimensions)
    return () => window.removeEventListener("resize", setCanvasDimensions)
  }, [])

  return (
    <div className="min-h-screen bg-white pt-15">
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white" aria-label="Hero Section">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" role="presentation" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-12 py-20 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Expert Legal & <br/> <span className="text-red-400">Strategic Advisory</span>
            </h1>
            <div className="h-16 text-lg md:text-xl font-medium text-red-200">
              <Typewriter
                words={[
                  "Empowering sustainable progress through strategic capacity building.",
                  "Strengthening governance, partnerships, and advocacy."
                ]}
                typeSpeed={40}
                deleteSpeed={20}
                delaySpeed={2000}
                loop={true}
              />
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div >
                  <Scale className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Legal Advisory</h3>
                  <p className="text-gray-300">Professional Legal and Policy Advisory Services</p>
                </div>
                <div >
                  <Users className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Capacity Building</h3>
                  <p className="text-gray-300">Strategic Training and Programs</p>
                </div>
                <div >
                  <Globe className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
                  <p className="text-gray-300">Business and Human <br></br>Rights</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full hidden lg:flex justify-center items-center lg:w-1/2 pl-25 pt-0">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute inset-0 border-4 border-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full shadow-2xl shadow-red-500/20"></div>
              </div>
              <div className="absolute inset-[8%] animate-[spin_50s_linear_infinite]">
                <div className="absolute inset-0 border-2 border-dashed border-red-400/50 rounded-full"></div>
                <div className="absolute -top-1 left-1/2 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-2000"></div>
                <div className="absolute top-1/2 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-3000"></div>
              </div>
              <div className="absolute inset-[20%] animate-[spin_35s_linear_infinite_reverse]">
                <div className="absolute inset-0 border border-red-300/40 rounded-full bg-gradient-to-r from-red-500/5 to-transparent"></div>
              </div>
              <div className="absolute inset-[32%] animate-[spin_25s_linear_infinite]">
                <div className="absolute inset-0 border-2 border-solid border-red-200/30 rounded-full bg-white/5 backdrop-blur-sm"></div>
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 group">
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md p-4 rounded-full shadow-xl border border-white/10 hover:scale-110 transition-all duration-300">
                  <Scale className="w-6 h-6 text-red-200 group-hover:text-red-100" />
                </div>
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-50"></div>
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 group">
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md p-4 rounded-full shadow-xl border border-white/10 hover:scale-110 transition-all duration-300">
                  <Users className="w-6 h-6 text-red-200 group-hover:text-red-100" />
                </div>
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-50"></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 group">
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md p-4 rounded-full shadow-xl border border-white/10 hover:scale-110 transition-all duration-300">
                  <Globe className="w-6 h-6 text-red-200 group-hover:text-red-100" />
                </div>
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-50"></div>
              </div>
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 group">
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md p-4 rounded-full shadow-xl border border-white/10 hover:scale-110 transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-red-200 group-hover:text-red-100" />
                </div>
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-50"></div>
              </div>
              <div className="absolute inset-[35%] group">
                <div className="w-full h-full bg-gradient-to-br from-white/25 to-white/5 backdrop-blur-lg rounded-full shadow-2xl border border-white/20 flex items-center justify-center hover:scale-105 transition-all duration-500">
                  <Target className="w-12 h-12 text-red-300 group-hover:text-red-200 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-red-500/30 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              </div>
              <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-red-300 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-pink-300 rounded-full animate-ping delay-1500"></div>
              <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-red-300 rounded-full animate-ping delay-2500"></div>
            </div>
          </div> 
        </div>
      </section>
      {/* About Us Section */}
      <section id ="about" className="w-full mx-auto px-4  md:px-17 lg:px-17 py-10 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative h-[270px] sm:h-[340px] md:h-[420px] flex items-center justify-center">
            <div className="absolute top-0 left-0 w-30 h-30 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-[#1a365d] opacity-80 rounded-lg shadow-xl" />
            <div className="absolute -top-4 sm:-top-6 right-3 sm:right-6 w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-orange-400 rounded-lg shadow-lg" />
            <div className="absolute bottom-0 left-5 sm:left-10 w-36 h-20 sm:w-44 sm:h-16 md:w-60 md:h-24 bg-[#1a365d] rounded-lg shadow-xl" />
            <div className="absolute bottom-5 right-0 w-14 h-27 sm:w-16 sm:h-32 md:w-20 md:h-40 bg-red-400 rounded-lg" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-full w-[260px] sm:w-[340px] md:w-[440px]">
              <Image
                height={150}
                width={440}
                src={about}
                alt="Message illustration"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] tracking-tight leading-snug text-center md:text-left">
              About  P/ PRABHAVEE
            </h1>
            <p className="text-lg text-gray-700 text-center md:text-left mb-6 md:mb-0">
              <span className="font-semibold text-[#1a365d]"> P/ PRABHAVEE – Partner for Social Impact</span> is a Professional Advisory and Strategy Consulting practice based in Delhi. We deliver legal, policy, and strategic advisory services to organizations in the social impact sector. Our mission is to equip organisations with strategies and insights to strengthen institutional capacity, governance, and partnerships — enabling sustainable growth and long-term impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border-t-4 border-[#e53e3e] transition">
                <h3 className="text-xl font-semibold text-[#e53e3e] mb-3">Our approach</h3>
                <p className="mb-4">
                  We equip impact organisations with insights, policies, recommendations, leadership strategies and training they need to build lasting impact:
                </p>
                <ul className="list-disc list-inside text-base text-gray-700">
                  <li>NGOs & For-Profit Entities.</li>
                  <li>Social Enterprises.</li>
                  <li>MSMEs & SMEs.</li>
                  <li>Brands & Suppliers.</li>
                </ul>
                <p className="mt-4 text-base"> With expertise in <span className="font-medium">governance, compliance, partnerships, communication, stakeholder engagement, and capacity-building</span>,  P/ PRABHAVEE operates at the intersection of{" "} <span className="font-medium">policy and practice</span>. </p>
              </div>
              <div className="bg-white p-6 pb-4 rounded-xl shadow-md hover:shadow-lg border-t-4 border-[#1a365d] transition pt-5">
                <h3 className="text-lg font-semibold text-[#1a365d]">Our Work & Partnerships</h3>
                <p className="mb-1 text-lg">Focus areas include:</p>
                <ul className="list-disc list-inside  text-sm text-gray-700">
                  <li>Business & Human Rights.</li>
                  <li>Responsible Business Conduct & Corporate Accountability.</li>
                  <li>Governance, Ethics & Business Integrity.</li>
                  <li>Decent Work and Protection of Migrant Workers.</li>
                  <li>Social Protection, Financial Inclusion & Women’s Entrepreneurship Development, Livelihoods.</li>
                  <li>Mental health and Well-being.</li>
                  <li>Gender, Diversity, Inclusion & PoSH Laws.</li>
                </ul>
                <p className="mt-1 text-base">
                  We collaborate with <span className="font-medium">Lawyers, Academia, Policy Experts, Sustainability &amp;
                ESG Professionals, Industry bodies, Business chambers, Think Tanks, and Educational Institutions</span> on various projects and initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="py-12 bg-red-600 text-white px-4 md:px-0">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <Quote className="absolute -top-6 -left-6 w-10 h-10 text-white-600 rotate-180" />
            <div className="relative border-2 border-white-600 rounded-br-[80px] rounded-tl-[80px] p-10">
              <blockquote className="text-xl font-style: italic md:text-2xl text-white-700 font-light text-center leading-relaxed">
                We seek to be the  <span className="font-semibold">‘Convenor’ </span> 
                of this larger public discourse.
              </blockquote>
            </div>
            <Quote className="absolute -bottom-6 -right-6 w-10 h-10 text-white-600" />
          </div>
        </div>
      </section>
      {/* Vision & Mission */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 py-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow text-center">
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      height={60}
                      width={160}
                      src={vision}
                      alt="Vision illustration"
                      className="rounded-2xl text-center"
                    />
                  </div>
                  <p className="text-gray-700 text-base ">
                    To be the Centre of Excellence (CoE) in Strategic Capacity Building—advancing rights-based
                    development and responsible business. </p>
                </div>
                {/* Mission Card */}
                <div className="bg-white p-13 rounded-lg w-full max-w-lg text-center shadow">
                  <div className="flex justify-center items-center mb-6">
                    <Image
                      height={60}
                      width={180}
                      src={mission}
                      alt="Vision illustration"
                      className="rounded-2xl text-center"
                    />
                  </div>
                  <p className="text-gray-700 text-base">
                    To enable organizations to increase their outreach and capacity by disseminating knowledge,
                    insights, and best practices. </p>
              </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
      <div className='text-center my-5 border-2 border-red-500 bg-red-300 rounded-lg p-4 max-w-5xl mx-auto'>
          <p className="text-gray-700 text-base">Over the next decade, <strong> P/ PRABHAVEE</strong> will serve as a hub for
            knowledge exchange and a transformative learning experience for impact leaders and organizations.
          </p>
      </div>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        From Vision to Reality
      </h2>
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border transition ${
                activeTab === id
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>
        {/* Content */}
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl mx-auto text-gray-700 leading-relaxed text-center md:text-left">
          {activeTab === "approach" && (
            <p>
            To achieve our vision, <strong> P/ PRABHAVEE engages with sector-specific stakeholders—companies, MSMEs, SMEs, Small Business Owners, Researchers, lawyers, CSOs, Journalists, </strong>and 
            more—to identify critical gaps and needs in research, data, generate insights and information, training and capacity-building to <strong>address pressing issues to sensitize and
            influence change. </strong>
            </p>
          )}
          {activeTab === "partners" && (
            <p>
              We collaborate with <strong>Lawyers, Academic Researchers, Scholars,
              Policy Experts, Sustainability and ESG professionals, Centres of Excellence(CoEs),
              Industry Associations, Business Chambers, Think Tanks, and
              Educational Institutions</strong> on various initiatives : Research and generating evidence and insights, Policy and Strategic Advisory, Training,
              Capacity Building, Co-creation of Knowledge, Stakeholder Dialogue and Engagements,
              Peer-learning and Sharing of Best practices.
            </p>
          )}
          {activeTab === "focus" && (
            <div className='text-left'>
              <ul className="list-disc pl-5 space-y-2">
                <li>Business & Human Rights.</li>
                <li>Responsible Business Conduct.</li>
                <li>Transparency, and Corporate Accountability.</li>
                <li>Governance, Ethics & Business Integrity.</li>
                <li>Decent Work & Migrant Worker&apos;s Protection.</li>
                <li>Social Protection, Social Justice & Inclusion.</li>
              </ul>
            </div>
          )}
          {activeTab === "engagements" && (
            <p>
              We actively contribute to <strong>Roundtable Conferences, Discussion
              and Ideation Meetings, Stakeholder Dialogues, UN Consultations, and Working Groups</strong>,
              to contribute to larger dialogues. Through these engagements, we seek to 
              <strong> advance the evolving ESG landscape with a focused lens on critical issues discussed in &quot;Focus Areas&quot;.</strong>
            </p>
          )}
        </div>
      </div>
      </section>
    <OrgStats />
      {/* 5-Pillar Approach */}
      <section id="pillars" className="py-10 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">5-Pillar Approach to Impact</h2>
            {/* Pillar blocks */}
            <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 gap-3">
              {pillars.map((pillar, idx) => {
                const Icon = icons[idx];
                return (
                  <React.Fragment key={idx}>
                    <div
                      className={`
                        flex flex-col items-center p-8 rounded-lg bg-gray-800 cursor-pointer 
                        transition-colors duration-200 hover:bg-red-800
                        ${activeIndex === idx ? "border-2 border-red-500" : ""}
                      `}
                      onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(idx)}
                      onMouseLeave={() => window.innerWidth >= 768 && setActiveIndex(null)}
                      onClick={() => window.innerWidth < 768 && setMobileActiveIndex(mobileActiveIndex === idx ? null : idx)}
                      tabIndex={0}
                    >
                      <Icon className="h-12 w-12 text-red-400 mb-4" />
                      <h3 className="text-lg font-semibold mb-3 text-center">{pillar.title}</h3>
                    </div>
                    <div
                      className={`
                        md:hidden transition-all duration-300 w-full
                        ${mobileActiveIndex === idx ? "max-h-[400px] opacity-100 my-3" : "max-h-0 opacity-0 overflow-hidden"}
                      `}
                    >
                      {mobileActiveIndex === idx && (
                        <div className="bg-red-800 rounded-md p-5 text-sm">
                          <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                          <ul className="list-disc list-inside ml-4 space-y-2">
                            {pillar.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div 
              className={`transition-all duration-300 mt-0 ${activeIndex !== null ? "max-h-[400px] opacity-100 mt-8" : "max-h-0 opacity-0 overflow-hidden"}`}
              aria-live="polite"
            >
              {activeIndex !== null && (
                <div className="bg-red-800 rounded-md p-8">
                  <h3 className="text-2xl font-bold mb-4">{pillars[activeIndex].title}</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
                    {pillars[activeIndex].bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Professional Services */}
      <section id="professional-services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Professional Services & Strategy Consulting
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Governance & Board Leadership",
                  description:
                    "Strategic planning, Compliance guidance, Board development & Capacity building.",
                  icon: Landmark,
                  link: "/governance-board-leadership",
                },
                {
                  title: "Legal & Compliance",
                  description:
                    "Entity setup, FCRA, CSR laws, Due diligence, and Ongoing legal support.",
                  icon: Briefcase,
                  link: "/legal-compliance",
                },
                {
                  title: "Partnerships & Alliances",
                  description:
                    "Strategic partnership strategies, Donor engagement, and Proposal development.",
                  icon: Users,
                  link: "/partnerships-alliances",
                },
                {
                  title: "Training & Capacity Building",
                  description:
                    "PoSH training, Child protection, Masterclasses, and Leadership development.",
                  icon: BookOpen,
                  link: "/training-capacity-building",
                },
                {
                  title: "Law & Policy Research",
                  description:
                    "Research on laws, Regulations, Policy dialogues, and Expert consultations.",
                  icon: ScrollText,
                  link: "/law-policy-research",
                },
                {
                  title: "Strategic Communication",
                  description:
                    "Communication planning, Outreach strategies, and Stakeholder engagement.",
                  icon: Globe,
                  link: "/strategic-communication",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow group relative"
                >
                  <service.icon className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-8">{service.description}</p>
                 <a
                  href={`/services?service=${service.title
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/\s+/g, "-")}`}
                  className="md:opacity-0 group-hover:opacity-100 transition-opacity text-red-600 font-medium absolute bottom-6 left-6 text-center"
                >
                  Learn More &rarr;
                </a>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="/services"
                className="inline-block px-8 py-3 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* People Section */}
      <section id="people" className="py-10 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className=" text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-900">Leadership Spotlight</h2>
            <div className="text-center md:text-left flex flex-col md:flex-row bg-white rounded-2xl shadow-xl p-10 items-center group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-10 relative">
                <div className="p-1.5 rounded-3xl bg-gradient-to-tr from-red-400 via-red-600 to-amber-500 shadow-xl transition-all duration-300">
                  <Image
                    height={180}
                    width={170}
                    src={founder}
                    alt="Anumita Sarkar"
                    className="rounded-2xl object-fill w-[180px] h-[180px] "
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white shadow text-xs font-semibold text-gray-600 mt-2 animate-fadeIn hidden md:block">
                  Founder
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    Anumita Sarkar
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mb-2 justify-center md:justify-start">
                    <p className="text-red-600 font-semibold">
                      Founding Lawyer – Policy and Strategic Advisor
                    </p>
                    <a
                      href="https://www.linkedin.com/in/advocateanumitasarkar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    >
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>Connect</span>
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 transition-opacity duration-300 group-hover:opacity-90">
                 Strategic Leader with nearly two decades of diverse sectoral and functional expertise in Research, Advisory Editorial & Knowledge Management, Strategy Development, Partnerships and Stakeholder Engagement. Focused on ESG, Business and Human Rights, Corporate Accountability, Governance, Ethics and Business Integrity.
                </p>
                <a
                  href="/people/founder"
                  className="inline-block mt-2 px-7 py-2 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-yellow-600 text-white font-semibold rounded-full shadow-lg transition duration-200"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PrabhaveeWebsite;