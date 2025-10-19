"use client";

import React, { useState } from "react";
import {
  Globe,
  BookOpen,
  ChevronDown,
  Shield,
  Users,
  Lightbulb,
  FileText,
  Building2,
  GraduationCap,
  CheckCircle2,
  TrendingUp,
  LayoutList,
  Activity
} from "lucide-react";

const Accordion = ({ id, title, subtitle, icon: Icon, children, open, onToggle }) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
      open ? 'shadow-lg border-2 border-amber-600' : 'shadow-md border border-slate-300 hover:border-slate-400'
    }`}>
      <button
        aria-expanded={open}
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between gap-4 p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        <div className="flex items-center gap-5">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
            open ? 'bg-gradient-to-br from-amber-600 to-amber-700 shadow-lg scale-110' : 'bg-slate-800'
          } text-white`}>
            <Icon className="w-7 h-7" />
          </div>
          <div className="text-left">
            <div className="text-xl font-bold text-slate-900">{title}</div>
            {subtitle && <div className="text-sm text-slate-600 mt-1.5">{subtitle}</div>}
          </div>
        </div>
        <ChevronDown
          className={`w-6 h-6 transition-all duration-300 ${
            open ? 'rotate-180 text-amber-600' : 'text-slate-400'
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="px-7 pb-7 text-slate-700 leading-relaxed space-y-4 bg-gradient-to-b from-slate-50 to-slate-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function LegalFirmPage() {
  const [openId, setOpenId] = useState("gender");
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="relative overflow-hidden pt-12">
         <div className="relative mb-10">
            <div className="absolute inset-0 bg-gradient-to-br from-red-300 via-orange-50 to-yellow-200 opacity-60"></div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-[10%] w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-[15%] w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-100"></div>
                <div className="absolute bottom-10 left-[20%] w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
            </div>
            <div className="relative text-center px-4 py-16 lg:py-20">
                <div className="flex justify-center gap-4 mb-8">
                <div className="transform hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-2xl bg-white shadow-lg border border-red-100">
                    <GraduationCap className="w-8 h-8 text-red-600" />
                    </div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300 mt-6">
                    <div className="p-4 rounded-2xl bg-white shadow-lg border border-orange-100">
                    <Users className="w-8 h-8 text-orange-600" />
                    </div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-2xl bg-white shadow-lg border border-yellow-100">
                    <Lightbulb className="w-8 h-8 text-yellow-600" />
                    </div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300 mt-6">
                    <div className="p-4 rounded-2xl bg-white shadow-lg border border-red-100">
                    <TrendingUp className="w-8 h-8 text-red-600" />
                    </div>
                </div>
                </div>
                <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-8">
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    Strategic. Multi-Stakeholder. Sustainable.
                </span>
                </h1>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur border border-red-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 mb-2">
                    Partnering for Purpose
                  </div>
                  <div className="text-sm text-gray-600">
                    Driving collaboration and shared value for meaningful change.
                  </div>
                </div>
                <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-2">
                    Strengthening Institutions
                  </div>
                  <div className="text-sm text-gray-600">
                    Building resilient systems and leadership for long-term impact.
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="px-6 pb-7">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Practice Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-6">
              <Accordion
                id="gender"
                title="Gender, Social Justice & Child Rights"
                subtitle="Women, PoSH, Child protection"
                icon={Shield}
                open={openId === "gender"}
                onToggle={toggle}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Women & Child Rights</strong>
                      <ul className="mt-2 ml-4 space-y-2 text-slate-700 list-decimal">
                        <li>PoSH (Prevention of Sexual Harassment) at the Workplace.</li>
                        <li>Child Rights, Protection &amp; Safeguard practices.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">External Member of Internal Committee of PoSH</strong>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion
                id="strategic"
                title="Strategic Capacity Building"
                subtitle="Scalable programs for organisations & professionals"
                icon={BookOpen}
                open={openId === "strategic"}
                onToggle={toggle}
              >
                <p className="mb-4 text-slate-700 font-medium">
                 Our intiatives in capacity-building:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-slate-700"> Businesses of all sizes: <strong>Corporates, MSMEs, SMEs, Small Business Owners, Brands, Suppliers, and other stakeholders</strong> in the value chain.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-slate-700"> <strong>Young aspiring Professionals in Policy </strong>.</span>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion
                id="dialogue"
                title="Multi-stakeholder Dialogue & Convenings"
                subtitle="Roundtables, research launches, stakeholder consultations"
                icon={FileText}
                open={openId === "dialogue"}
                onToggle={toggle}
              >
                <p className="mb-5 text-slate-700 font-medium">
                   We foster and nurture collaboration with diverse stakeholder groups within the ecosystem and establish strategic partnerships and networks for initiatives. We achieve this through various <strong>formats and activities:</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <LayoutList className="w-5 h-5 text-amber-600" />
                        Formats
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Roundtables & ideation meetings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Training programs and Multi-stakeholder convenings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Report launches for new knowledge.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Research ideas and Contribution to consultations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Providing expert input and feedback.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Stakeholder interviews.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-amber-600" />
                      Activities
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Organising Events &amp; Workshops.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Speaking engagements, facilitation talks and dialogues.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Delivering lectures and training: Behavioral and Leadership development.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">Mentorship - Higher academic and industry engagements.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-slate-700">NGO and Social Purpose Organisation: Advisory, Strategic Guidance and Advisory Board Member.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5 p-5 bg-amber-50 border-l-4 border-amber-600 rounded-lg">
                  <p className="text-slate-700 leading-relaxed">
                    The objective is to foster cross-sector collaborations and alliances for shared learning and best practices, and create a shared platform for exchanging views and advancing public discourse.
                  </p>
                </div>
              </Accordion>
            </div>
            <aside className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-slate-100">
                    <GraduationCap className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">What Drives Us</div>
                    <div className="text-xs text-slate-600">The foundation of our purpose and vision</div>
                  </div>
                </div>
                <div className="py-5 px-4 bg-gradient-to-br from-amber-50 to-slate-50 rounded-lg border-l-4 border-amber-600">
                  <p className="text-base text-slate-800 font-semibold italic leading-relaxed text-center">
                    "Empowering Sustainable Progress through Strategic Capacity Building"
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-5">
                  <Building2 className="w-5 h-5 text-amber-600" />
                  <h5 className="text-sm font-bold text-slate-900">Partners & Memberships</h5>
                </div>
                <div className="flex flex-wrap gap-2.5 mb-5">
                  <span className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-sm">
                    AIMA
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border-2 border-slate-200">
                    IPN, SATTVA Initiative
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-amber-100 text-amber-900 text-xs font-semibold border-2 border-amber-200">
                    ATMA
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border-2 border-slate-200">
                    eLearnPOSH.com
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-sm">
                    UNGCNI
                  </span>
                </div>
                <a
                  href="/networking"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold transition-all duration-300 border-2 border-slate-200"
                >
                  <Globe className="w-4 h-4" /> View Full Network
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}