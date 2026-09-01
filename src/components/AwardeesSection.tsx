"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Award, Medal, ChevronRight } from "lucide-react";
import { UG_GOLD_MEDALISTS, PG_GOLD_MEDALISTS, Medalist } from "@/lib/souvenirData";

export default function AwardeesSection() {
  const [activeTab, setActiveTab] = useState<"ug" | "pg">("ug");

  const currentAwardees: Medalist[] = activeTab === "ug" ? UG_GOLD_MEDALISTS : PG_GOLD_MEDALISTS;

  return (
    <section id="awardees" className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            <Award className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-700">Roll of Honour</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold text-slate-900 tracking-tight">
            Awards &amp; Honours
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium">
            Recognising outstanding academic achievement across all disciplines.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-200/50 p-1.5 rounded-2xl shadow-inner border border-slate-200/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("ug")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "ug"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Undergraduate</span>
            </button>
            <button
              onClick={() => setActiveTab("pg")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "pg"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Medal className="w-4 h-4" />
              <span>Postgraduate</span>
            </button>
          </div>
        </div>

        {/* Clean Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentAwardees.slice(0, 6).map((awardee, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer"
            >
              <div className="flex items-center space-x-5">
                <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden bg-slate-100 border-[3px] border-amber-400 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {awardee.image ? (
                    <img
                      src={awardee.image}
                      alt={awardee.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-sans text-xl font-bold bg-slate-100">
                      {awardee.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-slate-900 text-lg leading-tight mb-1 group-hover:text-blue-700 transition-colors duration-200">
                    {awardee.name}
                  </h4>
                  <p className="text-sm font-medium text-slate-500 mb-2">
                    {awardee.dept}
                  </p>
                  <p className="text-[11px] text-amber-700 font-bold uppercase tracking-wider bg-amber-50 inline-flex px-2.5 py-1 rounded-md self-start border border-amber-200/50">
                    {awardee.award.length > 35 ? awardee.badge : awardee.award}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
