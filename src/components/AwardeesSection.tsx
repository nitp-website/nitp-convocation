"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Award, Medal, ChevronRight } from "lucide-react";
import { UG_GOLD_MEDALISTS, PG_GOLD_MEDALISTS, Medalist } from "@/lib/souvenirData";

export default function AwardeesSection() {
  const [activeTab, setActiveTab] = useState<"ug" | "pg">("ug");

  const currentAwardees: Medalist[] = activeTab === "ug" ? UG_GOLD_MEDALISTS : PG_GOLD_MEDALISTS;

  return (
    <section id="awardees" className="py-20 sm:py-28 bg-white text-slate-900 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Awards & Honours
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Recognising outstanding academic achievement.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 p-1 rounded-xl shadow-inner border border-slate-200">
            <button
              onClick={() => setActiveTab("ug")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
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
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentAwardees.slice(0, 6).map((awardee, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 transition-all hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="flex items-start space-x-5">
                <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden bg-slate-200 border-2 border-amber-500">
                  {awardee.image ? (
                    <img
                      src={awardee.image}
                      alt={awardee.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-serif text-xl font-bold bg-slate-100">
                      {awardee.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-slate-900 text-lg leading-tight mb-1">
                    {awardee.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-0.5">
                    {awardee.dept}
                  </p>
                  <p className="text-xs text-amber-700 font-medium bg-amber-50 inline-flex px-2 py-0.5 rounded-md self-start mt-2">
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
