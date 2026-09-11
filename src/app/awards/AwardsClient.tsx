"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Trophy, 
  Medal, 
  Award, 
  Star, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  ScrollText,
  Filter
} from "lucide-react";


type MedalCategory = "ALL" | "PRESIDENT" | "INSTITUTE" | "MERIT" | "BEST_GRAD" | "ENDOWMENT";

export default function AwardsPageClient({ data }: { data: any }) {
  const { medals, info } = data;
  const UG_GOLD_MEDALISTS = medals?.UG_GOLD_MEDALISTS || [];
  const PG_GOLD_MEDALISTS = medals?.PG_GOLD_MEDALISTS || [];
  const BEST_GRADUATES = medals?.BEST_GRADUATES || [];

  const [activeCategory, setActiveCategory] = useState<MedalCategory>("ALL");
  const [instituteSubTab, setInstituteSubTab] = useState<"ALL" | "UG" | "PG">("ALL");

  // Filter Institute Gold Medalists (UG branch toppers + PG branch toppers that received Institute Gold Medal)
  const ugInstituteMedalists = UG_GOLD_MEDALISTS;
  const pgInstituteMedalists = (PG_GOLD_MEDALISTS || []).filter((m: any) => m.award?.includes("Gold Medal"));
  
  const ugPresidentMedalist = (UG_GOLD_MEDALISTS || []).find((m: any) => m.award?.includes("President"));
  const pgPresidentMedalist = PG_GOLD_MEDALISTS.find((m: any) => m.award?.includes("President"));
  // Academic Merit Certificates (Certificate of Excellence)
  const academicMeritCertificates = (PG_GOLD_MEDALISTS || []).filter((m: any) => m.award?.includes("Certificate"));

  const endowmentAwards = medals.ENDOWMENT_AWARDS || [];

  const categories: { id: MedalCategory; label: string; count: number; icon: React.ElementType }[] = [
    { id: "ALL", label: "All Medals & Honours", count: 18, icon: Filter },
    { id: "PRESIDENT", label: "President's Gold Medal", count: 2, icon: Trophy },
    { id: "INSTITUTE", label: "Institute Gold Medal", count: 10, icon: Medal },
    { id: "MERIT", label: "Academic Merit Certificate", count: 2, icon: ScrollText },
    { id: "BEST_GRAD", label: "Best Graduate (Boy & Girl)", count: 2, icon: Star },
    { id: "ENDOWMENT", label: "K. N. Rohatgi & Endowments", count: 2, icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col font-sans text-slate-900">
      {/* Unified Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-amber-800 via-amber-900 to-slate-950 text-white pt-32 sm:pt-36 pb-16 px-6 text-center shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight text-white">
            Medals &amp; Honours Directory
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Celebrating supreme academic excellence and institute distinctions conferred upon the graduating class of NIT Patna.
          </p>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <div className="sticky top-16 z-30 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-amber-200/60 py-3 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat: any) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-amber-600 text-white shadow-sm shadow-amber-600/30 font-bold"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-amber-50/70 border border-slate-200/80"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-amber-600"}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Detailed Award Directory */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 flex-1 w-full">

        {/* 1. PRESIDENT'S GOLD MEDAL */}
        {(activeCategory === "ALL" || activeCategory === "PRESIDENT") && (ugPresidentMedalist || pgPresidentMedalist) && (
          <section id="president-gold-medal" className="scroll-mt-32">
            <div className="bg-gradient-to-br from-amber-500/10 via-amber-100/40 to-amber-500/5 rounded-3xl p-6 sm:p-8 border border-amber-300/90 shadow-sm relative overflow-hidden">
              <div className="flex items-center space-x-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 text-white flex items-center justify-center font-bold shadow-md">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-900 bg-amber-200/70 px-2.5 py-0.5 rounded-md inline-block mb-1">
                    HIGHEST ACADEMIC HONOUR
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                    President&apos;s Gold Medal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Conferred upon the Overall Toppers across the entire Institute for securing the highest CGPA.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* UG Overall Topper */}
                                {ugPresidentMedalist && (
                <div className="bg-white rounded-2xl p-6 border border-amber-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5 group">
                  <div className="w-24 h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-400 shadow-md group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={ugPresidentMedalist.image || "/images/default_graduate.png"}
                      alt={ugPresidentMedalist.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-amber-900 bg-amber-100 uppercase rounded-md mb-2">
                      OVERALL TOPPER • UNDERGRADUATE (UG)
                    </span>
                    <h4 className="text-lg font-serif font-bold text-slate-900 leading-tight">
                      {ugPresidentMedalist.name}
                    </h4>
                    <p className="text-xs font-mono font-semibold text-slate-500 mt-1 mb-2">
                      Roll No: {ugPresidentMedalist.roll}
                    </p>
                    <p className="text-sm font-bold text-blue-800 pb-3 border-b border-amber-100">
                      {ugPresidentMedalist.dept} (B.Tech / B.Arch)
                    </p>
                    <p className="text-xs font-medium text-amber-800 mt-3 leading-relaxed">
                      Recipient of {ugPresidentMedalist.award}
                    </p>
                  </div>
                </div>
                )}
                {pgPresidentMedalist && (
                <div className="bg-white rounded-2xl p-6 border border-amber-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5 group">
                  <div className="w-24 h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-400 shadow-md group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={pgPresidentMedalist.image || "/images/default_graduate.png"}
                      alt={pgPresidentMedalist.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-amber-900 bg-amber-100 uppercase rounded-md mb-2">
                      OVERALL TOPPER • POSTGRADUATE (PG)
                    </span>
                    <h4 className="text-lg font-serif font-bold text-slate-900 leading-tight">
                      {pgPresidentMedalist.name}
                    </h4>
                    <p className="text-xs font-mono font-semibold text-slate-500 mt-1 mb-2">
                      Roll No: {pgPresidentMedalist.roll}
                    </p>
                    <p className="text-sm font-bold text-blue-800 pb-3 border-b border-amber-100">
                      {pgPresidentMedalist.dept} (M.Tech / M.Arch / MURP)
                    </p>
                    <p className="text-xs font-medium text-amber-800 mt-3 leading-relaxed">
                      Recipient of {pgPresidentMedalist.award}
                    </p>
                  </div>
                </div>
                )}
              </div>
            </div>
          </section>
        )}
        
        {/* 2. INSTITUTE GOLD MEDAL */}
        {(activeCategory === "ALL" || activeCategory === "INSTITUTE") && (ugInstituteMedalists.length > 0 || pgInstituteMedalists.length > 0) && (
          <section id="institute-gold-medal" className="scroll-mt-32 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-200 to-amber-100 text-amber-800 flex items-center justify-center font-bold shadow-sm">
                    <Medal className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">
                    Institute Gold Medal
                  </h3>
                </div>
                <p className="text-sm text-slate-500 max-w-2xl">
                  Awarded to branch toppers of each undergraduate and postgraduate discipline (Director's Gold Medal).
                </p>
              </div>

              {/* Sub-filter tabs */}
              <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200 self-start sm:self-auto">
                <button
                  onClick={() => setInstituteSubTab("ALL")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    instituteSubTab === "ALL"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  All ({ugInstituteMedalists.length + pgInstituteMedalists.length})
                </button>
                <button
                  onClick={() => setInstituteSubTab("UG")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    instituteSubTab === "UG"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Undergraduate ({ugInstituteMedalists.length})
                </button>
                <button
                  onClick={() => setInstituteSubTab("PG")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    instituteSubTab === "PG"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Postgraduate ({pgInstituteMedalists.length})
                </button>
              </div>
            </div>

            {/* Undergraduate List */}
            {(instituteSubTab === "ALL" || instituteSubTab === "UG") && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Undergraduate Branch Toppers (B.Tech / B.Arch)
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ugInstituteMedalists.map((med: any, idx: any) => (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl shadow-sm border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-amber-300 transition-all duration-200 group"
                    >
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-300 shadow-sm group-hover:scale-105 transition-transform">
                            <img
                              src={med.image}
                              alt={med.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            {med.badge && <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/70 block mb-1 truncate">{med.badge}</span>}
                            <h4 className="text-base font-bold text-slate-900 font-serif leading-snug truncate">
                              {med.name}
                            </h4>
                            {med.roll && <p className="text-xs font-mono text-slate-400">Roll: {med.roll}</p>}
                          </div>
                        </div>
                        
                        <p className="text-xs font-semibold text-blue-800 mb-2">{med.dept}</p>
                        <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-medium leading-relaxed">
                          {med.award}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between items-center">
                        <span>Programme: <strong>B.Tech / B.Arch</strong></span>
                        <span className="text-amber-700 font-bold">Gold Medal</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Postgraduate List */}
            {(instituteSubTab === "ALL" || instituteSubTab === "PG") && (
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Postgraduate Branch Toppers (M.Tech / M.Arch)
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pgInstituteMedalists.map((med: any, idx: any) => (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl shadow-sm border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-amber-300 transition-all duration-200 group"
                    >
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-300 shadow-sm group-hover:scale-105 transition-transform">
                            <img
                              src={med.image}
                              alt={med.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            {med.badge && <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/70 block mb-1 truncate">{med.badge}</span>}
                            <h4 className="text-base font-bold text-slate-900 font-serif leading-snug truncate">
                              {med.name}
                            </h4>
                            {med.roll && <p className="text-xs font-mono text-slate-400">Roll: {med.roll}</p>}
                          </div>
                        </div>
                        
                        <p className="text-xs font-semibold text-blue-800 mb-2">{med.dept}</p>
                        <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-medium leading-relaxed">
                          {med.award}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between items-center">
                        <span>Programme: <strong>M.Tech / M.Arch</strong></span>
                        <span className="text-amber-700 font-bold">Gold Medal</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 3. ACADEMIC MERIT CERTIFICATE */}
        {(activeCategory === "ALL" || activeCategory === "MERIT") && academicMeritCertificates.length > 0 && (
          <section id="academic-merit-certificate" className="scroll-mt-32 space-y-6">
            <div className="flex items-center space-x-3.5 border-b border-slate-200 pb-4">
              <div className="w-11 h-11 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-xs">
                <ScrollText className="w-6 h-6 text-indigo-700" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  Academic Merit Certificate
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Awarded to postgraduate branch toppers for outstanding academic performance (Certificate of Excellence).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicMeritCertificates.map((med: any, idx: any) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-indigo-200/80 hover:shadow-xl hover:border-indigo-400 transition-all duration-200 flex flex-col sm:flex-row items-center sm:items-start gap-5 group"
                >
                  <div className="w-20 h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-indigo-400 shadow-sm group-hover:scale-105 transition-transform">
                    <img
                      src={med.image}
                      alt={med.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1 text-center sm:text-left">
                    {med.badge && <span className="text-[10px] font-bold text-indigo-900 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200 inline-block uppercase tracking-wider">{med.badge}</span>}
                    <h4 className="text-xl font-bold text-slate-900 font-serif leading-tight">
                      {med.name}
                    </h4>
                    {med.roll && <p className="text-xs font-mono font-semibold text-slate-500">Roll No: {med.roll}</p>}
                    <p className="text-sm font-bold text-blue-800">
                      {med.dept}
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                      {med.award}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. BEST GRADUATE STUDENTS (BOY & GIRL) */}
        {(activeCategory === "ALL" || activeCategory === "BEST_GRAD") && BEST_GRADUATES.length > 0 && (
          <section id="best-graduate-students" className="scroll-mt-32 space-y-6">
            <div className="flex items-center space-x-3.5 border-b border-slate-200 pb-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 shadow-xs">
                <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  Best Graduate Students (Boy &amp; Girl), 2025
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Conferred with a sum of Rs. 10,001/- along with an Official Letter of Appreciation.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BEST_GRADUATES.map((bg: any, idx: any) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 shadow-sm border border-amber-200/90 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
                >
                  {/* Photo */}
                  <div className="w-32 h-36 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-400 shadow-md group-hover:scale-105 transition-transform">
                    <img
                      src={bg.image}
                      alt={bg.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-1.5">
                    {bg.title && <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full">{bg.title}</span>}
                    <h4 className="text-2xl font-bold text-slate-900 font-serif leading-tight">
                      {bg.name}
                    </h4>
                    {bg.roll && <p className="text-xs font-mono font-bold text-slate-500">Roll No: {bg.roll}</p>}
                    <p className="text-sm font-semibold text-blue-800">
                      {bg.dept}
                    </p>
                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 mt-2">
                      <strong className="text-slate-900">Prize Award:</strong>{" "}
                      <span className="font-extrabold text-amber-700">{bg.cash}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. K. N. ROHATGI MEDAL & ENDOWMENT MEDALS */}
        {(activeCategory === "ALL" || activeCategory === "ENDOWMENT") && endowmentAwards.length > 0 && (
          <section id="kn-rohatgi-endowments" className="scroll-mt-32 space-y-6">
            <div className="flex items-center space-x-3.5 border-b border-slate-200 pb-4">
              <div className="w-11 h-11 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-700 shadow-xs">
                <Sparkles className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  K. N. Rohatgi Medal &amp; Endowment Medals
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Prestigious endowments established by eminent alumni and donors of NIT Patna.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {endowmentAwards.map((endow: any, idx: any) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 hover:shadow-xl transition-all duration-200 flex flex-col sm:flex-row items-center sm:items-start gap-5 group"
                >
                  <div className="w-20 h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-rose-300 shadow-sm group-hover:scale-105 transition-transform">
                    <img
                      src={endow.image}
                      alt={endow.awardee}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1 text-center sm:text-left">
                    {endow.badge && <span className="text-[10px] font-bold text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200 inline-block uppercase tracking-wider">{endow.badge}</span>}
                    <h4 className="text-lg font-bold text-slate-900 font-serif leading-tight">
                      {endow.title}
                    </h4>
                    <p className="text-xs font-bold text-slate-700">
                      Awardee: <span className="text-blue-800 font-extrabold">{endow.awardee}</span> (Roll: {endow.roll})
                    </p>
                    <p className="text-xs text-blue-700 font-semibold">
                      Department: {endow.dept}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">
                      {endow.citation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
