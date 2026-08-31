"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Award, Medal, ChevronRight } from "lucide-react";
import { UG_GOLD_MEDALISTS, PG_GOLD_MEDALISTS, Medalist } from "@/lib/souvenirData";

export default function AwardeesOrbit() {
  const [activeTab, setActiveTab] = useState<"ug" | "pg">("ug");

  const currentAwardees: Medalist[] = activeTab === "ug" ? UG_GOLD_MEDALISTS : PG_GOLD_MEDALISTS;

  return (
    <section id="awardees" className="py-20 sm:py-28 bg-[#FBF9F5] text-slate-900 relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-amber-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-amber-800 font-sans">
            MEDALS &amp; HONOURS 2024–25
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            List of Awardees
          </h2>
          {/* Accent Underline Bar */}
          <div className="flex items-center justify-center space-x-1 pt-1">
            <span className="w-6 h-1 bg-amber-500 rounded-full" />
            <span className="w-12 h-1 bg-blue-700 rounded-full" />
            <span className="w-6 h-1 bg-amber-500 rounded-full" />
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200/80">
            <button
              onClick={() => setActiveTab("ug")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "ug"
                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md scale-102"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Undergraduate (UG) Medalists</span>
            </button>
            <button
              onClick={() => setActiveTab("pg")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "pg"
                  ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md scale-102"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Medal className="w-4 h-4" />
              <span>Postgraduate (PG) Medalists</span>
            </button>
          </div>
        </div>

        {/* Constellation View matching Reference Image (Desktop & Large Screens) */}
        <div className="relative max-w-6xl mx-auto h-[860px] hidden md:flex items-center justify-center">
          
          {/* Concentric Ambient Light Rings */}
          <div className="absolute w-[520px] h-[520px] rounded-full border border-amber-300/25 pointer-events-none" />
          <div className="absolute w-[720px] h-[720px] rounded-full border border-amber-200/35 pointer-events-none" />

          {/* Central Circular Medallion matching Reference Screenshot */}
          <div className="relative z-20 w-56 h-56 sm:w-64 sm:h-64 rounded-full flex flex-col items-center justify-center p-6 text-center transition-all duration-500 shadow-[0_0_70px_rgba(251,191,36,0.35)] bg-gradient-to-b from-[#FFFDF5] via-[#FFFBEB] to-[#FEF3C7] border-[5px] border-[#F59E0B]">
            {/* Golden Ribbon Icon */}
            <svg 
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#C05621] mb-1.5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>

            {/* GOLD / SILVER Main Text */}
            <div className="text-3xl sm:text-4xl font-sans font-extrabold tracking-wider uppercase leading-none text-[#B45309]">
              {activeTab === "ug" ? "GOLD" : "PG GOLD"}
            </div>

            {/* MEDALISTS Subtitle */}
            <div className="text-xs sm:text-[13px] font-sans font-bold tracking-[0.28em] uppercase mt-2 text-[#334155]">
              MEDALISTS
            </div>
          </div>

          {/* Orbiting Satellite Profiles matching Reference Shape & Positions */}
          
          {/* 1. Top-Center Node */}
          {currentAwardees[0] && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center group cursor-pointer z-30">
              <AwardeeAvatar awardee={currentAwardees[0]} />
              <AwardeeInfo awardee={currentAwardees[0]} />
            </div>
          )}

          {/* 2. Top-Left Node */}
          {currentAwardees[1] && (
            <div className="absolute top-12 left-6 lg:left-16 flex flex-col items-center text-center group cursor-pointer z-30">
              <AwardeeAvatar awardee={currentAwardees[1]} />
              <AwardeeInfo awardee={currentAwardees[1]} />
            </div>
          )}

          {/* 3. Top-Right Node */}
          {currentAwardees[2] && (
            <div className="absolute top-12 right-6 lg:right-16 flex flex-col items-center text-center group cursor-pointer z-30">
              <AwardeeAvatar awardee={currentAwardees[2]} />
              <AwardeeInfo awardee={currentAwardees[2]} />
            </div>
          )}

          {/* 4. Middle-Left Node */}
          {currentAwardees[3] && (
            <div className="absolute top-1/2 -translate-y-1/4 left-2 lg:left-8 flex flex-col items-center text-center group cursor-pointer z-30">
              <AwardeeAvatar awardee={currentAwardees[3]} />
              <AwardeeInfo awardee={currentAwardees[3]} />
            </div>
          )}

          {/* 5. Middle-Right Node */}
          {currentAwardees[4] && (
            <div className="absolute top-1/2 -translate-y-1/4 right-2 lg:right-8 flex flex-col items-center text-center group cursor-pointer z-30">
              <AwardeeAvatar awardee={currentAwardees[4]} />
              <AwardeeInfo awardee={currentAwardees[4]} />
            </div>
          )}

          {/* 6. Bottom-Center Node */}
          {currentAwardees[5] && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center text-center group cursor-pointer z-30">
              <AwardeeAvatar awardee={currentAwardees[5]} />
              <AwardeeInfo awardee={currentAwardees[5]} />
            </div>
          )}
        </div>

        {/* Responsive Grid for Mobile Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:hidden">
          {currentAwardees.map((awardee, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-xs p-6 rounded-3xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center space-y-3"
            >
              <AwardeeAvatar awardee={awardee} />
              <AwardeeInfo awardee={awardee} />
            </div>
          ))}
        </div>

        {/* View All Awardees Callout */}
        <div className="text-center mt-12">
          <Link
            href="/awards"
            className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3 rounded-xl border border-slate-300 shadow-sm transition-all hover:shadow hover:-translate-y-0.5 text-sm"
          >
            <span>Explore Complete Medals, Citations &amp; Honours</span>
            <ChevronRight className="w-4 h-4 text-amber-600" />
          </Link>
        </div>

      </div>
    </section>
  );
}

function AwardeeAvatar({ awardee }: { awardee: Medalist }) {
  return (
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-white shadow-md transition-transform duration-300 group-hover:scale-105 border-[4px] border-[#F59E0B]">
      <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
        {awardee.image ? (
          <img
            src={awardee.image}
            alt={awardee.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold font-serif text-xl">
            {awardee.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
          </div>
        )}
      </div>
    </div>
  );
}

function AwardeeInfo({ awardee }: { awardee: Medalist }) {
  return (
    <div className="mt-3 space-y-0.5 max-w-[220px]">
      {/* Name: Bold text */}
      <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
        {awardee.name}
      </h4>
      {/* Branch / Degree: Medium text */}
      <p className="text-xs sm:text-[13px] font-medium text-slate-600 leading-snug">
        {awardee.dept}
      </p>
      {/* Award Title: Amber/Orange text */}
      <p className="text-xs sm:text-[12px] font-medium text-[#C05621] leading-snug">
        {awardee.award.length > 35 ? awardee.badge : awardee.award}
      </p>
    </div>
  );
}
