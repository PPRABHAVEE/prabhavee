"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Users, Target, Award, Sparkles, Sprout, Globe, TrendingUp } from "lucide-react";
import logo from '../app/assets/logo.png';

export default function StakeholderEngagement() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const leftExperts = [
    { name: "Sumana Bhattacharya", role: "Adjunct Professor, National Institute of Advanced Studies" },
    { name: "Tawni Trushna", role: "Scientist-C, Environmental Health & Epidemiology" },
    { name: "Vijeta Rattani", role: "PhD, Consultant, working on issues of Climate Change and Natural Resource Management" },
    { name: "Sweta Banerjee", role: "Country Lead, BRAC International" },
    { name: "Dr. Ramnik Ahuja", role: "Public Health Specialist, Advisory Board Member, Pinkishe Foundation" },
    { name: "Deepjyoti Nath", role: "Chief Executive Officer, Infinite Cycle" },
    { name: "Marcella D'Souza", role: "Director, Watershed Organisation Trust (WOTR)" }
  ];

  const rightProfessionals = [
    { name: "Vikram Jain", role: "Director, FSG" },
    { name: "Snigdha Mann", role: "Founder, SoBoho.official" },
    { name: "Anjali Rajput & Aparna", role: "Sanjhe Sapne" },
    { name: "Kedareswar Choudhury", role: "CEO, Darbar Sahitya Sansada" },
    { name: "Garvi Dhar", role: "Independent Ethnographer, Ex-Urban Clap Director, Impacted Data Technologies | Founder, Udyogini" },
    { name: "Shilpi Singh", role: "Manager, Women Centre of Excellence, Jagriti Enterprise Centre" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-red-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200/30 to-orange-100/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-200/40 to-red-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-50/20 to-orange-50/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-20 w-4 h-4 bg-red-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-300 opacity-60"></div>
      <div className="absolute bottom-32 left-40 w-5 h-5 bg-red-300 rounded-full animate-bounce delay-700 opacity-60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <Sparkles className="w-7 h-7 text-red-500 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Stakeholder{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                Engagement
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </span>
            <br />
            <span className="text-gray-700">&</span> Initiatives
          </h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Facilitating <strong className="font-medium text-red-500 text-xl font-style: italic "> multi-stakeholder dialogue</strong> to advance shared priorities and collective action.
          </p>
        </div>
        <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-2xl p-10 mb-16 hover:shadow-3xl transition-all duration-500 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Sprout className="w-7 h-7 text-white" />
                </div>
                <div>
                  <Image src={logo} alt="PRABHAVEE Logo"
                    width={220}
                    height={60}
                    className="mb-1 rounded-md object-contain"
                  />
                  <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-1"></div>
                </div>
              </div>
              <p className="italic text-gray-600 text-lg font-medium pl-4 border-l-4 border-red-500/30">
                "Engaged with Stakeholders across Diverse Thematic Areas"
              </p>
            </div>
            <div className="relative group/badge">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover/badge:opacity-40 transition-opacity"></div>
              <div className="relative flex flex-col justify-center bg-gradient-to-br from-red-50 via-orange-50 to-red-50 border-2 border-red-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-red-600" />
                  <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Recognition
                  </p>
                </div>
                <p className="text-xl text-gray-900 font-black leading-tight">
                  WICCI Delhi External Affairs Council (DEAC)
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                  <p className="text-red-600 font-bold text-lg">(2024)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, value: "13+", label: "Experts" },
            { icon: Target, value: "10+", label: "Domains" },
            { icon: Globe, value: "5+", label: "Organizations" },
            { icon: TrendingUp, value: "2024", label: "Active Year" }
          ].map((stat, idx) => (
            <div key={idx} className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div 
            className="relative group bg-white rounded-3xl p-10 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            onMouseEnter={() => setHoveredCard('left')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 transition-opacity duration-500 ${hoveredCard === 'left' ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-100/50 to-transparent rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="flex items-center gap-3 text-2xl font-black text-gray-900">
                  <div className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Experts
                </h4>
                <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-red-600">{leftExperts.length}</span>
                </div>
              </div>
              <div className="space-y-5">
                {leftExperts.map((expert, idx) => (
                  <div key={idx} className="group/item relative pl-6 py-3 transition-all duration-300 hover:pl-8">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-75"></div>
                    
                    <p className="font-bold text-red-700 text-xl mb-1 group-hover/item:text-red-600 transition-colors">
                      {expert.name}
                    </p>
                    <p className="text-gray-600 text-base font-medium leading-relaxed">
                      {expert.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div 
            className="relative group bg-white rounded-3xl p-10 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            onMouseEnter={() => setHoveredCard('right')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 transition-opacity duration-500 ${hoveredCard === 'right' ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-100/50 to-transparent rounded-br-full"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="flex items-center gap-3 text-2xl font-black text-gray-900">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Experts
                </h4>
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-orange-600">{rightProfessionals.length}</span>
                </div>
              </div>
              <div className="space-y-5">
                {rightProfessionals.map((professional, idx) => (
                  <div key={idx} className="group/item relative pl-6 py-3 transition-all duration-300 hover:pl-8">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                    
                    <p className="font-bold text-orange-700 text-xl mb-1 group-hover/item:text-orange-600 transition-colors">
                      {professional.name}
                    </p>
                    <p className="text-gray-600 text-base font-medium leading-relaxed">
                      {professional.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-50 to-red-50 border border-gray-200 rounded-full shadow-lg">
            <Sparkles className="w-5 h-5 text-red-500" />
            <p className="text-gray-600 text-sm font-medium">
              These collaborations reflect <span className="font-bold text-red-600"> P/ PRABHAVEE's</span> growing network of professionals
              committed to driving positive, inclusive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}