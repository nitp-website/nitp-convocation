"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, FlaskConical, Users, ArrowRight } from "lucide-react";
import { useConvocation } from "@/context/ConvocationContext";

export default function DegreeRecipientsSection() {
  const { data } = useConvocation();
  if (!data) return null;
  const { INSTITUTE_INFO } = data.info;

  const isNumeric = (val: any) => {
    if (typeof val === "number") return true;
    if (typeof val === "string" && /^\d+[\d,]*\+?$/.test(val.trim())) return true;
    return false;
  };

  const stats = [
    {
      label: "UNDERGRADUATE",
      value: INSTITUTE_INFO.ugGraduates,
      subtext: "B.Tech & B.Arch Candidates",
      icon: <GraduationCap className="w-6 h-6" />,
      numericBadge: `${INSTITUTE_INFO.ugGraduates || 0} Degrees`,
      pendingBadge: "B.Tech & B.Arch"
    },
    {
      label: "POSTGRADUATE",
      value: INSTITUTE_INFO.pgGraduates,
      subtext: "M.Tech, M.Arch and MURP Candidates",
      icon: <BookOpen className="w-6 h-6" />,
      numericBadge: `${INSTITUTE_INFO.pgGraduates || 0} Degrees`,
      pendingBadge: "M.Tech / M.Arch"
    },
    {
      label: "DOCTORAL (Ph.D.)",
      value: INSTITUTE_INFO.phdScholars,
      subtext: "Doctor of Philosophy Scholars",
      icon: <FlaskConical className="w-6 h-6" />,
      numericBadge: `${INSTITUTE_INFO.phdScholars || 0} Scholars`,
      pendingBadge: "Ph.D. Research"
    },
    {
      label: "TOTAL GRADUATES",
      value: INSTITUTE_INFO.totalGraduates,
      subtext: "Conferred Across 11 Departments",
      icon: <Users className="w-6 h-6" />,
      numericBadge: `${INSTITUTE_INFO.totalGraduates || 0} Recipients`,
      pendingBadge: "Class of 2026"
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
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => {
            const hasNumber = isNumeric(stat.value);
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-3xl shadow-lg shadow-slate-200/40 p-6 sm:p-7 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-300 group"
              >
                <div className="w-full flex flex-col items-center">
                  <div className="text-slate-400 mb-4 bg-slate-50 p-3.5 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300 shadow-xs">
                    {stat.icon}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-widest mb-1 uppercase">
                    {stat.label}
                  </div>
                  
                  {hasNumber ? (
                    <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight my-2 font-mono">
                      {stat.value}
                    </div>
                  ) : (
                    <div className="my-2.5 py-2 px-3 rounded-2xl bg-amber-50/90 border border-amber-200/80 text-amber-900 flex items-center justify-center gap-1.5 shadow-xs w-full">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                      </span>
                      <span className="text-xs sm:text-sm font-bold tracking-tight text-center leading-snug">
                        {stat.value || "Pending Clearance"}
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-slate-500 font-medium mb-4">
                    {stat.subtext}
                  </p>
                </div>
                
                <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                  hasNumber 
                    ? "text-blue-700 bg-blue-50/80 border-blue-100" 
                    : "text-amber-800 bg-amber-50 border-amber-200/70"
                }`}>
                  {hasNumber ? stat.numericBadge : stat.pendingBadge}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <Link
            href={data.year === "2026" ? "/graduates" : `/${data.year}/graduates`}
            className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-blue-700/20 hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>
              {INSTITUTE_INFO.isUpcoming 
                ? "Browse Graduate Directory (Coming Soon)" 
                : `Browse Full ${INSTITUTE_INFO.totalGraduates || 0} Graduate & Scholar Directory`}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
