"use client";

import React, { useState } from "react";
import {
  Globe,
  Megaphone,
  BookOpen,
  ChevronDown,
   GraduationCap, Users, Lightbulb, TrendingUp
} from "lucide-react";

const Accordion = ({ id, title, subtitle, icon: Icon, children, open, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        aria-expanded={open}
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between gap-4 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-tr from-red-500 to-amber-400 text-white shadow-md">
            <Icon className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="text-lg font-semibold text-gray-900">{title}</div>
            {subtitle && <div className="text-sm text-gray-500 mt-1">{subtitle}</div>}
          </div>
        </div>

        <ChevronDown
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`px-6 pb-6 transition-all duration-300 ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="pt-2 text-gray-700 leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function TrainingPage() {
  const [openId, setOpenId] = useState("gender"); 
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 pt-12">
      <section >
        <div className="relative mb-10 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100 opacity-60"></div>
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
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    Build. Empower. Transform.
                </span>
                </h1>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur border border-red-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl font-bold text-red-600 mb-2">Strategic</div>
                    <div className="text-sm text-gray-600">Capacity Building</div>
                </div>
                <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl font-bold text-orange-600 mb-2">Multi-Stakeholder</div>
                    <div className="text-sm text-gray-600">Dialogue & Training</div>
                </div>
                <div className="group p-6 rounded-2xl bg-white/80 backdrop-blur border border-yellow-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">Sustainable</div>
                    <div className="text-sm text-gray-600">Impact Programs</div>
                </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 px-20 pb-8">
          <div className="lg:col-span-2 space-y-6">
            <Accordion
              id="gender"
              title="Gender, Social Justice & Child Rights"
              subtitle="Women, PoSH, Child protection"
              icon={Users}
              open={openId === "gender"}
              onToggle={toggle}
            >
              <ul className="list-disc pl-8">
                <li><strong>Women & Child Rights</strong>
                    <ul className="py-3">
                        <li>a. PoSH (Prevention of Sexual Harassment) at the Workplace.</li>
                        <li>b. Child Rights, Protection &amp; Safeguard practices.</li>
                    </ul>
                </li>
                <li><strong>External Member of Internal Committee of PoSH</strong></li>
              </ul>
            </Accordion>
            <Accordion
              id="strategic"
              title="Strategic Capacity Building"
              subtitle="Scalable programs for organisations & professionals"
              icon={BookOpen}
              open={openId === "strategic"}
              onToggle={toggle}
            >
              <p>
                Our intiatives in capacity-building:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Businesses of all sizes: <strong>Corporates, MSMEs, SMEs, Small Business Owners, Brands, Suppliers, and other stakeholders</strong> in the value chain.</li>
                <li><strong>Media Professionals, Journalists, Reporters, CSO Communicators, Campaigners.</strong></li>
                <li><strong>Young aspiring Professionals in Policy </strong> —-Fellowships.</li>
              </ul>
            </Accordion>
            <Accordion
              id="dialogue"
              title="Multi-stakeholder Dialogue & Convenings"
              subtitle="Roundtables, research launches, stakeholder consultations"
              icon={Megaphone}
              open={openId === "dialogue"}
              onToggle={toggle}
            >
              <p>
               We foster and nurture collaboration with diverse stakeholder groups within the ecosystem and establish strategic partnerships and networks for initiatives. We achieve this through various <strong>formats and activities:</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-800">Formats</h4>
                  <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                    <li>Roundtables & ideation meetings.</li>
                     <li>Training programs and Multi-stakeholder convenings.</li>
                    <li>Report launches for new knowledge.</li>
                    <li>Research ideas and Contribution to consultations.</li>
                    <li>Providing expert input and feedback.</li>
                    <li>Stakeholder interviews.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-800">Activities</h4>
                  <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                    <li>Organising Events &amp; Workshops.</li>
                    <li>Speaking engagements, facilitation talks and dialogues.</li>
                    <li>Delivering lectures and training: Behavioral and Leadership development.</li>
                    <li>Mentorship - Higher academic and industry engagements.</li>
                    <li>NGO and Social Purpose Organisation: Advisory, Strategic Guidance and Advisory and Legal Board Leadership.</li>
                    </ul>
                </div>
              </div>
              <p className="mt-3 text-base text-gray-600">
              The objective is to foster cross-sector collaborations and alliances for shared learning and best practices, and create a shared platform for exchanging views and advancing public discourse.
            </p>
            </Accordion>
          </div>
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-tr from-red-500 to-amber-400 text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">What Drives Us</div>
                  <div className="text-sm text-gray-600">The foundation of our purpose and vision</div>
                </div>
              </div>
              <div className="mt-4 text-base text-gray-700 font-medium text-center font-style: italic">
                Empowering Sustainable Progress through Strategic Capacity Building
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <h5 className="text-sm font-semibold text-gray-800">Partners & Memberships</h5>
              <div className="mt-3 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-medium border border-red-200">AIMA</span>
                <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-sm font-medium border border-gray-300">IPN</span>
                <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-sm font-medium border border-rose-200">SATTVA Initiative</span>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium border border-amber-200">ATMA</span>
                <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium border border-gray-200">eLearnPOSH.com</span>
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-200">UNGCNI</span>
              </div>
            <div className="flex items-center justify-center">
                <a
                    href="/networking"
                    className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-amber-400 text-white text-sm font-semibold shadow hover:scale-[1.02] transition-transform"
                >
                    <Globe className="w-4 h-4" /> View full network
                </a>
            </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
