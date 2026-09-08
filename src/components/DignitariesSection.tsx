"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConvocation } from "@/context/ConvocationContext";



export default function DignitariesSection() {
  const { data, year } = useConvocation();
  const { INSTITUTE_INFO } = data.info;
    const cm = data.dignitaries.find((d: any) => d.badge === 'Chief Minister' || d.name === 'Shri Nitish Kumar');
  const chair = data.dignitaries.find((d: any) => d.badge === 'Chairperson' || d.badge === 'Presiding Officer' || d.name === 'Shri Ashok Kumar Modi');
  const dir = data.dignitaries.find((d: any) => d.badge === 'Director' || d.badge === 'Chief Academic Officer' || d.name === 'Prof. Pradip Kumar Jain');
  const dignitariesList = [cm, chair, dir].filter(Boolean);
  return (
    <section id="dignitaries" className="pt-20 sm:pt-24 pb-20 sm:pb-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-900">
            Honourable <span className="text-blue-700">Dignitaries</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
            Presiding leadership and esteemed guests for the {INSTITUTE_INFO.edition.split(" ")[0]} Convocation Ceremony of NIT Patna.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {dignitariesList.map((person: any, idx: number) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center cursor-pointer relative overflow-hidden justify-between"
            >
              <div className="w-full flex flex-col items-center">


                {/* Circular Image */}
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden mb-5 border-2 border-amber-300/80 shadow-lg bg-slate-100 group-hover:scale-105 transition-transform duration-300">
                  <Image src={person.image} alt={person.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                
                {/* Text */}
                <h3 className="text-xl font-bold font-serif text-slate-900 mb-1 leading-snug group-hover:text-blue-700 transition-colors duration-200">
                  {person.name}
                </h3>
                <p className="text-xs font-bold text-amber-800 mb-1">
                  {person.badge === "Chief Guest" ? "Chief Guest" : (person.badge === "Chief Minister" ? "Chief Minister" : (person.designation || person.badge))}
                </p>
                <p className="text-xs text-slate-500 mb-6">
                  {person.badge === "Chief Guest" ? (person.designation === "Chief Guest" ? person.role : person.designation) : person.role}
                </p>
              </div>

              {/* Action Button */}
              {/* <Link 
                href="/dignitaries" 
                className="w-full py-2.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors border border-slate-200 cursor-pointer block"
              >
                View Dignitary Profile
              </Link> */}
            </div>
          ))}
        </div>

        {/* Link to Full Dignitaries Page */}
        <div className="mt-12 text-center">
          <Link
            href="/dignitaries"
            className="inline-flex items-center space-x-2 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors group cursor-pointer"
          >
            <span>View All National Patrons, Deans &amp; Convocation Committees</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
