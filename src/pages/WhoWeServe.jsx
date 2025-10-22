"use client";
import React from 'react';
import { ChevronDown, Users, Zap, BookOpen, Handshake, Briefcase, Globe, BarChart, MessageSquare } from 'lucide-react';

const collaborationData = [
    {
        main: { title: 'Nonprofit & For-profit organisations', icon: Handshake },
        segments: [
            'NGOs & Civil Society Organisations',
            'Social Impact Entrepreneurs & Startups',
            'Social Enterprises'
        ],
    },
    {
        main: { title: 'Research Collaborations', icon: BookOpen },
        segments: [
            'Think Tanks, Research Centres, Centre of Excellence (CoE)',
            'Educational Institutions, University',
            'Public Policy Offices, Industry Association & Other Research initiatives',
        ],
    },
    {
        main: { title: 'Training, Partnerships, Policy Dialogue, Stakeholder Engagement', icon: MessageSquare },
        segments: [
            'Companies & Other Corporate Entities',
            'Brands, Suppliers across diverse sectors',
            'MSMEs, Small-business owners and other enterprises',
        ],
    },
];
const CollaborationCard = ({ data, isLast, delay }) => {
    const IconComponent = data.main.icon;
    return (
        <div 
            className="flex flex-col items-center flex-1 min-w-[280px]"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="bg-white border-2 border-red-500 rounded-lg p-6 w-full shadow-lg transition duration-500 hover:shadow-xl hover:border-red-600">
                <div className="flex items-center justify-center space-x-3">
                    <IconComponent className="w-9 h-6 text-red-500" />
                    <h4 className="text-xl font-bold text-gray-800 text-center">{data.main.title}</h4>
                </div>
            </div>
            <div className="flex justify-center my-4">
                <ChevronDown className="w-8 h-8 text-red-500 animate-bounce" />
            </div>
            <div className="w-full space-y-4 pt-2">
                {data.segments.map((segment, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 border border-gray-300 rounded-md p-4 w-full text-gray-700 transition duration-300 hover:bg-gray-100"
                    >
                        <div className="flex items-start space-x-2">
                            <div className="mt-1 w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                            <p className="text-sm font-medium">{segment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
const WhoWeServePage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-300 pt-8">
        <header className="py-15 bg-gradient-to-r from-neutral-100 via-white to-red-50 shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-neutral-900 mb-4 tracking-tight leading-tight drop-shadow">
              Who We Serve <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-neutral-800">& Collaborate</span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-neutral-800 max-w-4xl mx-auto">
              We partner with ambitious organisations whose aim is to advance <span className="text-red-600 font-semibold">social impact</span>, leveraging our expertise in <b>Strategic Capacity Building</b> and <b>Policy Dialogue</b>.
            </p>
          </div>
        </header>

        <section className="py-10 max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-red-500 inline-block pb-1 text-center md:text-left">
            Our Beneficiary Segments
          </h3>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center md:text-left">
            We work with both <span className="font-semibold text-blue-800">nonprofit</span> and <span className="font-semibold text-orange-600">for-profit organisations</span> whose aim is to advance social impact. Here are the two segments of beneficiaries we serve by collaborating with our ecosystem partners:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative bg-white rounded-2xl shadow-xl p-10 border-l-8 border-red-500 overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all">
              <div className="flex items-center mb-4">
                <span className="inline-flex justify-center items-center mr-3 bg-red-100 text-red-500 rounded-full p-3">
                  <Zap className="w-6 h-6" />
                </span>
                <h4 className="text-2xl font-extrabold text-red-600">
                  A. Social Impact Organisations
                </h4>
              </div>
              <ul className="space-y-3 text-gray-800 text-base mt-6 list-disc ml-10">
                <li>NGOs & Civil Society Organisations</li>
                <li>Social Impact Entrepreneurs & Startups</li>
                <li>Social Enterprises</li>
                <li>Corporate Foundations</li>
              </ul>
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-tl from-red-200 to-yellow-100 opacity-30" />
            </div>
            <div className="relative bg-white rounded-2xl shadow-xl p-10 border-l-8 border-gray-800 overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all">
              <div className="flex items-center mb-4">
                <span className="inline-flex justify-center items-center mr-3 bg-gray-200 text-gray-800 rounded-full p-3">
                  <Briefcase className="w-6 h-6" />
                </span>
                <h4 className="text-2xl font-extrabold text-gray-800">
                  B. Businesses, Brands, Suppliers
                </h4>
              </div>
              <ul className="space-y-3 text-gray-800 text-base mt-6 list-disc ml-10">
                <li>Companies & Other Corporate Entities</li>
                <li>Brands and suppliers across diverse sectors</li>
                <li>MSMEs, SMEs, and other enterprises</li>
              </ul>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 opacity-20" />
            </div>
          </div>
          <div className="mt-16 flex items-center justify-center">
            <div className="p-8 rounded-xl bg-gradient-to-r from-red-50 to-white border-2 border-red-600 shadow-md max-w-6xl text-center">
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                  We address various operational challenges and risks in the business that carry real and potential risks of violating the human rights of the people across the supply chain.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
                  Our Collaboration Ecosystem
              </h3>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-between items-stretch">
                  {collaborationData.map((data, index) => (
                      <CollaborationCard 
                          key={index} 
                          data={data} 
                          isLast={index === collaborationData.length - 1}
                          delay={(index * 200)} 
                      />
                  ))}
              </div>
          </div>
        </section>
    </div>
    );
};
export default WhoWeServePage;