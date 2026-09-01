"use client";

import React from "react";
import { GraduationCap, BookOpen, FlaskConical, Users } from "lucide-react";

export default function DegreeRecipientsSection() {
  const stats = [
    {
      label: "UNDERGRADUATE",
      value: "1057",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      label: "POSTGRADUATE",
      value: "780",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      label: "RESEARCH",
      value: "193",
      icon: <FlaskConical className="w-6 h-6" />
    },
    {
      label: "TOTAL",
      value: "2030",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="recipients" className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-[#F1F5F9] border-y border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-[2px] bg-blue-700"></div>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-slate-900">
              DEGREE <span className="text-blue-700">RECIPIENTS</span>
            </h2>
            <div className="w-8 h-[2px] bg-blue-700"></div>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">
            Convocating in the Year 2026
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-100 rounded-3xl shadow-lg shadow-slate-200/50 p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200/70 group"
            >
              <div className="text-slate-400 mb-5 bg-slate-50 p-3 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                {stat.label}
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
