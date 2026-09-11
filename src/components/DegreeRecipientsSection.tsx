"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, FlaskConical, Users, ArrowRight, Sparkles } from "lucide-react";
import { useConvocation } from "@/context/ConvocationContext";

export default function DegreeRecipientsSection() {
  const { data } = useConvocation();
  if (!data) return null;
  const { INSTITUTE_INFO, PROGRAMME_EVENTS, STOLE_GUIDELINES } = data.info;
  const DIGNITARIES = data.dignitaries;

  const stats = [
    {
      label: "UNDERGRADUATE",
      value: INSTITUTE_INFO.ugGraduates,
      subtext: "B.Tech & B.Arch Candidates",
      icon: <GraduationCap className="w-6 h-6" />,
      badge: "738 Degrees"
    },
    {
      label: "POSTGRADUATE",
      value: INSTITUTE_INFO.pgGraduates,
      subtext: "M.Tech, M.Arch and MURP Candidates",
      icon: <BookOpen className="w-6 h-6" />,
      badge: "111 Degrees"
    },
    {
      label: "DOCTORAL (Ph.D)",
      value: INSTITUTE_INFO.phdScholars,
      subtext: "Doctor of Philosophy Scholars",
      icon: <FlaskConical className="w-6 h-6" />,
      badge: "136 Scholars"
    },
    {
      label: "TOTAL GRADUATES",
      value: INSTITUTE_INFO.totalGraduates,
      subtext: "Conferred Across 11 Departments",
      icon: <Users className="w-6 h-6" />,
      badge: "985 Recipients"
    }
  ];

  return (
    <section id="recipients" className="pt-20 sm:pt-24 pb-20 sm:pb-24 bg-[#F1F5F9] border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <span className="h-[2px] sm:h-[3px] w-8 sm:w-14 bg-blue-700 rounded-full shrink-0" />
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-900">
              DEGREE <span className="text-blue-700">RECIPIENTS</span>
            </h2>
            <span className="h-[2px] sm:h-[3px] w-8 sm:w-14 bg-blue-700 rounded-full shrink-0" />
          </div>
          {/* <p className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider max-w-lg mx-auto">
            {INSTITUTE_INFO.edition.split(" ")[0]} Annual Convocation Batch of National Institute of Technology Patna
          </p> */}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl shadow-lg shadow-slate-200/40 p-7 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-300 group"
            >
              <div className="w-full flex flex-col items-center">
                <div className="text-slate-400 mb-4 bg-slate-50 p-3.5 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300 shadow-xs">
                  {stat.icon}
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight my-1">
                  {stat.value}
                </div>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  {stat.subtext}
                </p>
              </div>
              
              <span className="inline-block text-[10px] font-bold text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-full border border-blue-100">
                {stat.badge}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/graduates"
            className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-blue-700/20 hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>Browse Full 985 Graduate &amp; Scholar Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
