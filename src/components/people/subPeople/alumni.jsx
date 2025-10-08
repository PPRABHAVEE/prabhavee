import React, { useState } from 'react';
import { GraduationCap, Briefcase, Building2 } from 'lucide-react';

export default function AlumniSection() {
  const [hoveredId, setHoveredId] = useState(null);

  const alumni = [
    {
      id: 1,
      name: "Khushi Garg",
      role: "Research Assistant",
      degree: "B.A.LL.B.",
      institution: "Army Institute of Law, Mohali",
      color: "from-red-500 to-red-600"
    },
    {
      id: 2,
      name: "Manvi Tayal",
      role: "Research Assistant",
      degree: "Master's of Public Health",
      institution: "Indian Institute of Public Health, Gandhinagar",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5 flex gap-4 items-center justify-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 shadow-lg">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Alumni
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {alumni.map((person) => (
            <div
              key={person.id}
              className="relative group"
              onMouseEnter={() => setHoveredId(person.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-out"
                style={{
                  transform: hoveredId === person.id ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredId === person.id 
                    ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                    : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  className={`h-2 bg-gradient-to-r ${person.color} transition-all duration-500`}
                  style={{
                    height: hoveredId === person.id ? '8px' : '8px'
                  }}
                />
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 transition-colors duration-300">
                      {person.name}
                    </h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-gray-400 to-transparent rounded-full transition-all duration-500"
                      style={{
                        width: hoveredId === person.id ? '80px' : '64px'
                      }}
                    />
                  </div>
                  <div 
                    className="flex items-start gap-3 mb-4 transition-all duration-500"
                    style={{
                      opacity: hoveredId === person.id ? 1 : 0.9,
                      transform: hoveredId === person.id ? 'translateX(4px)' : 'translateX(0)'
                    }}
                  >
                    <div className="mt-1 p-2 bg-red-50 rounded-lg">
                      <Briefcase className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Position</p>
                      <p className="text-lg font-semibold text-gray-800">{person.role}</p>
                    </div>
                  </div>
                  <div 
                    className="flex items-start gap-3 mb-4 transition-all duration-500 delay-75"
                    style={{
                      opacity: hoveredId === person.id ? 1 : 0.9,
                      transform: hoveredId === person.id ? 'translateX(4px)' : 'translateX(0)'
                    }}
                  >
                    <div className="mt-1 p-2 bg-gray-50 rounded-lg">
                      <GraduationCap className="w-4 h-4 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Degree</p>
                      <p className="text-lg font-semibold text-gray-800">{person.degree}</p>
                    </div>
                  </div>
                  <div 
                    className="flex items-start gap-3 transition-all duration-500 delay-100"
                    style={{
                      opacity: hoveredId === person.id ? 1 : 0.9,
                      transform: hoveredId === person.id ? 'translateX(4px)' : 'translateX(0)'
                    }}
                  >
                    <div className="mt-1 p-2 bg-red-50 rounded-lg">
                      <Building2 className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Institution</p>
                      <p className="text-base font-medium text-gray-700 leading-relaxed">
                        {person.institution}
                      </p>
                    </div>
                  </div>
                </div>
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: hoveredId === person.id ? 1 : 0,
                    border: '2px solid',
                    borderImage: 'linear-gradient(135deg, #F0F0F0, #F0F0F0) 1'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}