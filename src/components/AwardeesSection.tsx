"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Award, Medal, ArrowRight } from "lucide-react";
import { useConvocation } from "@/context/ConvocationContext";


export default function AwardeesSection() {
  const { data } = useConvocation();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"ug" | "pg">("ug");

  if (!data) return null;
  const INSTITUTE_INFO = data.info?.INSTITUTE_INFO || {};
  const UG_GOLD_MEDALISTS = data.medals?.UG_GOLD_MEDALISTS || [];
  const PG_GOLD_MEDALISTS = data.medals?.PG_GOLD_MEDALISTS || [];

  const currentAwardees: any[] = activeTab === "ug" ? UG_GOLD_MEDALISTS : PG_GOLD_MEDALISTS;
  const isComingSoon = UG_GOLD_MEDALISTS.length === 0 && PG_GOLD_MEDALISTS.length === 0;
  const awardsLink = data.year === "2026" ? "/awards" : `/${data.year}/awards`;

  return (
    <section id="awardees" className="pt-20 sm:pt-24 pb-20 sm:pb-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Honours • {data.year || "2026"}</span>
          </div> */}
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-slate-900 tracking-tight">
            Awards &amp; Honours
          </h2>
        </div>

        {isComingSoon ? (
          /* Coming Soon Card */
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-amber-200/90 shadow-xl shadow-slate-200/50 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-8 h-8 text-amber-600 animate-pulse" />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-widest">
                Under Senate Finalization
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900">
                Medals &amp; Honours Coming Soon
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                The official list of President&apos;s Gold Medalists, Institute Branch Toppers, and Endowment Awardees for the {INSTITUTE_INFO.editionRoman || "XV Convocation"} is currently being compiled.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
              <Link
                href="/2025/awards"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-900 text-white transition-colors"
              >
                <span>Browse 2025 Medalists</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/2024/awards"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors"
              >
                <span>Browse 2024 Medalists</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Tab Switcher */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-slate-200/60 p-1.5 rounded-2xl shadow-inner border border-slate-200/50 backdrop-blur-sm">
                <button
                  onClick={() => setActiveTab("ug")}
                  className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === "ug"
                      ? "bg-white text-slate-900 shadow-md"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Undergraduate Medalists ({(UG_GOLD_MEDALISTS || []).length})</span>
                </button>
                <button
                  onClick={() => setActiveTab("pg")}
                  className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === "pg"
                      ? "bg-white text-slate-900 shadow-md"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <Medal className="w-4 h-4 text-indigo-600" />
                  <span>Postgraduate Medalists ({(PG_GOLD_MEDALISTS || []).length})</span>
                </button>
              </div>
            </div>

            {/* Clean Premium Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentAwardees.slice(0, 6).map((awardee, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm shadow-slate-200/40 hover:shadow-xl hover:border-amber-300 transition-all duration-200 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-center space-x-5">
                    <div className="w-20 h-24 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border-2 border-amber-400 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      {awardee.image ? (
                        <img
                          src={awardee.image}
                          alt={awardee.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 font-sans text-xl font-bold bg-slate-100">
                          {awardee.name.split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider bg-amber-50 px-2.5 py-0.5 rounded-md self-start border border-amber-200/70 mb-1.5">
                        {awardee.badge}
                      </span>
                      <h4 className="font-bold text-slate-900 text-base leading-tight mb-1 group-hover:text-blue-700 transition-colors duration-200 font-serif">
                        {awardee.name}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mb-1">
                        Roll: {awardee.roll}
                      </p>
                      <p className="text-xs font-semibold text-slate-600">
                        {awardee.dept}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-600 leading-snug font-medium">
                    {awardee.award}
                  </div>
                </div>
              ))}
            </div>

            {/* Link to Full Awards Page (hidden on awards page) */}
            {!pathname?.includes("/awards") && (
              <div className="mt-12 text-center">
                <Link
                  href={awardsLink}
                  className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-2xl border border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>View All Medal Citations, Best Graduate Prizes &amp; Endowments</span>
                  <ArrowRight className="w-4 h-4 text-blue-700" />
                </Link>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}
