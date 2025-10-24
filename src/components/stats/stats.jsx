"use client";
import { Users, GraduationCap, Globe2, Briefcase, MessageSquare, BarChart3, Network } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    label: "NGOs, CSOs, Social Enterprises, Startups",
    value: "16",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    label: "Education Institutions, Centres of Excellence, Public Policy Office",
    value: "6",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    label: "Multilateral Organisations, UN",
    value: "2",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    label: "Experts, Academicians, Policy Professionals",
    value: "60+",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    label: "Social Impact Strategic Consulting",
    value: "3",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    label: "Policy & Public/Stakeholder Consultation",
    value: "7",
  },
  {
    icon: <Network className="w-6 h-6" />,
    label: "Network, Platforms, Forums",
    value: "12",
  },
  {
    label:"Taining & Capacity Building",
    value:"700+ individuals",
  }
];
export default function OrgStats() {
  return (
    <section className="bg-gradient-to-t from-gray-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading section */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Organization Reach & Engagement
          </h2>
          <span className="inline-block mt-3 bg-gradient-to-r from-red-500 to-amber-400 text-white font-semibold px-5 py-2 rounded-full shadow text-base">
            Empowering Social Impact Across Sectors
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 justify-center">
          {stats.slice(0,4).map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl bg-white shadow-lg px-6 py-8 transition-transform hover:scale-105 hover:shadow-xl border-t-4 border-red-100 min-h-[170px]"
            >
              <span className="block font-semibold text-gray-700 text-base mb-3 text-center">{stat.label}</span>
              <span className="text-4xl font-extrabold text-red-600 drop-shadow-sm mt-auto">{stat.value}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {stats.slice(4,7).map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl bg-white shadow-lg px-6 py-8 transition-transform hover:scale-105 hover:shadow-xl border-t-4 border-red-100 min-h-[170px]"
            >
              <span className="block font-semibold text-gray-700 text-base mb-3 text-center">{stat.label}</span>
              <span className="text-4xl font-extrabold text-red-600 drop-shadow-sm mt-auto">{stat.value}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 ">
          {stats.slice(7).map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl bg-white shadow-lg px-10 py-12 transition-transform hover:scale-105 hover:shadow-xl border-t-4 border-red-100 min-h-[170px]"
            >
              <span className="block font-semibold text-gray-700 text-base text-center">{stat.label}</span>
              <span className="text-2xl font-extrabold text-red-600 drop-shadow-sm mt-auto">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
