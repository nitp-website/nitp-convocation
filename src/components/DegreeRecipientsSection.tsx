"use client";

import React from "react";
import { GraduationCap, BookOpen, FlaskConical, Users } from "lucide-react";

export default function DegreeRecipientsSection() {
  const stats = [
    {
      label: "UNDERGRADUATE",
      value: "1057",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      label: "POSTGRADUATE",
      value: "780",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      label: "RESEARCH",
      value: "193",
      icon: <FlaskConical className="w-5 h-5" />
    },
    {
      label: "TOTAL",
      value: "2030",
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F2F4F5] border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header styling matching Image 3 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-3">
            <div className="w-8 h-0.5 bg-[#8B1A1A]"></div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#111827]">
              DEGREE <span className="text-[#8B1A1A]">RECIPIENTS</span>
            </h2>
            <div className="w-8 h-0.5 bg-[#8B1A1A]"></div>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-[0.2em]">
            Convocating in the Year 2026
          </p>
        </div>

        {/* Cards matching Image 3 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 shadow-sm p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1"
            >
              <div className="text-slate-400 mb-4">
                {stat.icon}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
