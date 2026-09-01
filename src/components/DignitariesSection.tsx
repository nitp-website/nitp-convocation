"use client";

import React from "react";

const dignitaries = [
  {
    name: "Shri Nitish Kumar",
    role: "Chief Guest",
    subrole: "Hon'ble Chief Minister of Bihar",
    image: "/images/souvenir/nitish_kumar_hd.png",
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
    <section className="py-16 bg-[#FBF9F5] text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl font-sans font-bold text-[#0D5C9E]">
            Dignitaries
          </h2>
          <div className="flex justify-center">
            <span className="w-16 h-[3px] bg-[#D32F2F]" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {dignitaries.map((person, idx) => (
            <div 
              key={idx} 
              className="bg-[#F8F9FA] rounded-[3rem] rounded-tr-md rounded-bl-md p-8 border border-[#0D5C9E]/30 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              {/* Circular Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md bg-slate-200">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top" />
              </div>
              
              {/* Text */}
              <h3 className="text-[15px] sm:text-base font-bold font-sans text-slate-900 uppercase tracking-widest mb-2 leading-tight">
                {person.name}
              </h3>
              <p className="text-sm font-semibold text-slate-700 mb-1">
                {person.role}
              </p>
              <p className="text-xs text-slate-500 mb-6">
                {person.subrole}
              </p>

              {/* Action Button */}
              <button className="mt-auto px-6 py-1.5 bg-[#0D5C9E] hover:bg-[#0a467a] text-white text-xs font-semibold rounded-full transition-colors">
                View Profile
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
