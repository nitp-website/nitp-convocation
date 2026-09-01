"use client";

import React from "react";

const dignitaries = [
  {
    name: "Dr. Abhay Karandikar",
    role: "Chief Guest",
    subrole: "Member of NITI Aayog",
    image: "/images/souvenir/nitish_kumar_hd.png", // Keep same image reference as before per user context
  },
  {
    name: "Shri Ashok Kumar Modi",
    role: "Chairperson, Board of Governors",
    subrole: "NIT Patna",
    image: "/images/souvenir/ashok_modi.png",
  },
  {
    name: "Prof. Pradip Kumar Jain",
    role: "Director",
    subrole: "NIT Patna",
    image: "/images/souvenir/pradip_jain.png",
  }
];

export default function DignitariesSection() {
  return (
    <section id="dignitaries" className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center items-center space-x-3 mb-2">
            <span className="w-8 h-[2px] bg-blue-700" />
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight">
              Honourable <span className="text-blue-700">Dignitaries</span>
            </h2>
            <span className="w-8 h-[2px] bg-blue-700" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {dignitaries.map((person, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Circular Image */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-[3px] border-white shadow-lg bg-slate-100 group-hover:scale-105 transition-transform duration-300">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top" />
              </div>
              
              {/* Text */}
              <h3 className="text-base sm:text-lg font-bold font-sans text-slate-900 uppercase tracking-wide mb-1 leading-tight group-hover:text-blue-700 transition-colors duration-200">
                {person.name}
              </h3>
              <p className="text-sm font-semibold text-blue-700 mb-1">
                {person.role}
              </p>
              <p className="text-xs text-slate-500 mb-8">
                {person.subrole}
              </p>

              {/* Action Button */}
              <button className="mt-auto px-6 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full transition-colors border border-slate-200 cursor-pointer">
                View Profile
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
