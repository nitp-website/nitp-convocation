"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { 
  Award, 
  GraduationCap, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  FileText,
  Bell,
  ArrowRight,
  Download,
  CheckCircle2,
  Building2,
  X
} from "lucide-react";
import { useConvocation } from "@/context/ConvocationContext";

export default function HeroSection() {
  const { data } = useConvocation();
  const [selectedNotice, setSelectedNotice] = useState<any | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!data) return null;
  const INSTITUTE_INFO = data.info?.INSTITUTE_INFO || {};
  const DIGNITARIES = data.dignitaries;
  const notices = data.notices || [];

  const isNumeric = (val: any) => {
    if (typeof val === "number") return true;
    if (typeof val === "string" && /^\d+[\d,]*\+?$/.test(val.trim())) return true;
    return false;
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] text-slate-900 pt-28 sm:pt-36 pb-0 border-b border-slate-200/50">
      {/* Soft Ambient Glows for Modern Depth */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-16 lg:pb-20">
          
          {/* Left Column: Heading, Subtitle, Stat Cards & Live Notice Board */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Giant Display Title */}
            <div className="space-y-3 sm:space-y-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-sans font-medium tracking-tight bg-gradient-to-r from-[#D97706] via-[#BE185D] to-[#3730A3] bg-clip-text text-transparent">
                {INSTITUTE_INFO.edition || `Convocation ${data.year || '2026'}`}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.1] text-slate-950 whitespace-nowrap flex items-baseline gap-x-2 sm:gap-x-3.5">
                <span>Celebrating</span>
                <span className="bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#3730A3] bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-base sm:text-xl lg:text-2xl font-sans italic tracking-normal pt-1">
                <span className="text-[#4338CA] font-semibold">&ldquo;The Stage is set for the </span>
                <span className="bg-gradient-to-r from-[#EA580C] via-[#DC2626] to-[#E11D48] bg-clip-text text-transparent font-bold">
                  Leaders of Tomorrow
                </span>
                <span className="text-[#4338CA] font-semibold">&rdquo;</span>
              </p>

              <p className="text-sm sm:text-base font-sans font-medium text-slate-600 max-w-lg leading-relaxed pt-2">
                Honouring the scholarly perseverance of doctoral, postgraduate, and undergraduate candidates at India&apos;s 6th oldest engineering institution.
              </p>
            </div>

            {/* Metric / Stat Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {/* Card 1 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-3xl font-extrabold text-slate-900">
                  {INSTITUTE_INFO?.edition?.split(" ")[0]}
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Convocation
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                {isNumeric(INSTITUTE_INFO?.totalGraduates) ? (
                  <div className="text-xl sm:text-3xl font-extrabold text-slate-900 truncate">
                    {INSTITUTE_INFO?.totalGraduates}
                  </div>
                ) : (
                  <div className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight py-1">
                    {INSTITUTE_INFO?.totalGraduates || "In Progress"}
                  </div>
                )}
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Graduates
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                {isNumeric(INSTITUTE_INFO?.phdScholars) ? (
                  <div className="text-xl sm:text-3xl font-extrabold text-slate-900 truncate">
                    {INSTITUTE_INFO?.phdScholars}
                  </div>
                ) : (
                  <div className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight py-1">
                    {INSTITUTE_INFO?.phdScholars || "Pending Clearance"}
                  </div>
                )}
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wider mt-1">
                  Ph.D Scholars
                </div>
              </div>
            </div>

            {/* Live Convocation Notice Board (Option 2 - First Sight of View) */}
            {notices.length > 0 && (
              <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-4 sm:p-5 border border-blue-400/25 shadow-xl shadow-blue-950/20 max-w-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Notice Board Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2.5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <Bell className="w-4 h-4 text-amber-400" />
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                      Official Notice Board
                    </h3>
                  </div>
                  <a 
                    href="#notices" 
                    className="text-[11px] font-semibold text-blue-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>All Circulars ({notices.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Top Notices */}
                <div className="space-y-2 relative z-10">
                  {notices.slice(0, 2).map((notice: any, idx: number) => (
                    <div 
                      key={notice.id || idx}
                      onClick={() => setSelectedNotice(notice)}
                      className="group/item flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <span className="w-5 h-5 rounded-md bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-semibold text-white group-hover/item:text-amber-200 transition-colors line-clamp-1 leading-snug">
                            {notice.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-slate-300 mt-0.5 font-mono">
                            <span>{notice.date}</span>
                            {notice.referenceNo && (
                              <>
                                <span>•</span>
                                <span className="text-blue-300">{notice.referenceNo}</span>
                              </>
                            )}
                            {notice.isNew && (
                              <span className="bg-red-500/20 text-red-300 px-1.5 py-0.2 rounded text-[9px] font-bold border border-red-500/30">
                                NEW
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNotice(notice);
                        }}
                        className="shrink-0 text-[11px] font-bold text-blue-200 group-hover/item:text-white bg-blue-600/30 group-hover/item:bg-blue-600 px-2.5 py-1.5 rounded-xl transition-all flex items-center gap-1 border border-blue-400/30 cursor-pointer"
                      >
                        <FileText className="w-3 h-3" />
                        <span>Read</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: 3D Flipping Chief Guest Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              className="relative w-full max-w-sm sm:max-w-md perspective-1000 group cursor-pointer select-none"
              onClick={() => setIsFlipped(!isFlipped)}
              role="button"
              tabIndex={0}
              aria-label="Toggle Chief Guest information card"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsFlipped(!isFlipped);
                }
              }}
            >
              {/* Outer Frosted Rounded Frame */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white/90 transition-all duration-300 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
                
                {/* 3D Flipping Inner Card Container */}
                <div 
                  className={`relative w-full aspect-[4/5] transform-style-3d transition-transform duration-700 ease-in-out ${
                    isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                  }`}
                >
                  
                  {/* FRONT FACE: Chief Guest Photo & Title */}
                  <div 
                    className="absolute inset-0 backface-hidden rotate-y-0 rounded-[2rem] overflow-hidden bg-slate-950 shadow-inner z-10"
                    style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
                  >
                    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                      <Image
                        src={DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.image || "/images/default_avatar.png"}
                        alt={`${DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.name || "Chief Guest"} - Chief Guest`}
                        fill
                        className="object-cover object-top scale-102"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        loading="eager"
                      />

                      {/* Dark gradient overlay at bottom of photo */}
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

                      {/* Chief Guest Badge & Name on the image */}
                      <div className="absolute bottom-5 left-5 right-5 text-left pointer-events-none">
                        <span className="inline-block bg-[#F3A712] text-slate-950 font-extrabold text-[11px] tracking-wider uppercase px-3.5 py-1 rounded-full shadow-xs mb-2">
                          CHIEF GUEST
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-tight">
                          {DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.name || "Chief Guest"}
                        </h3>
                        <p className="text-xs text-amber-300 font-semibold mt-1">
                          {(() => { const cg = DIGNITARIES.find((d: any) => d.badge === "Chief Guest"); return cg ? (cg.designation === "Chief Guest" ? cg.role : cg.designation) : ""; })()}
                        </p>
                      </div>


                    </div>
                  </div>

                  {/* BACK FACE: Chief Guest Biography & Vision */}
                  <div 
                    className="absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#0E204E] via-[#0B1A3E] to-[#07112B] text-white p-6 sm:p-7 flex flex-col shadow-2xl border border-blue-500/20 justify-between"
                    style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                          CHIEF GUEST ADDRESS
                        </span>

                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                          {DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.name || "Chief Guest"}
                        </h3>
                        <h4 className="text-xs sm:text-sm font-medium text-amber-300 mt-0.5">
                          {(() => { const cg = DIGNITARIES.find((d: any) => d.badge === "Chief Guest"); return cg ? (cg.designation === "Chief Guest" ? cg.role : cg.designation) : ""; })()}
                        </h4>
                      </div>

                      <ul className="space-y-3 pt-2 text-[12px] sm:text-[13px] text-slate-200/95 leading-relaxed font-sans">
                        {DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.bio?.map((point: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-400 mr-2 text-base leading-none">&bull;</span>
                            <span>{point}</span>
                          </li>
                        )) || (
                          <li className="flex items-start">
                            <span className="text-amber-400 mr-2 text-base leading-none">&bull;</span>
                            <span>Delivered the Convocation Keynote Address to the {INSTITUTE_INFO.editionRoman.split(" ")[0]} graduating batch of NIT Patna.</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-[11px] text-amber-200/80 font-mono">
                      {INSTITUTE_INFO.editionRoman} &bull; NIT Patna
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4-Segment Full Width Announcement Strip matching Souvenir */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-xl relative z-20">
        {/* Segment 1: Deep Blue - Important Announcement */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 sm:p-5 flex items-center justify-between space-x-3 border-r border-blue-700/50">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-blue-300" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                IMPORTANT
              </div>
              <div className="text-sm font-bold leading-tight text-white truncate">
                {notices[0]?.referenceNo || "Official Notice"}
              </div>
            </div>
          </div>
          <button 
            onClick={() => setSelectedNotice(notices[0] || null)}
            className="inline-flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors border border-white/10 cursor-pointer shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Notice</span>
          </button>
        </div>

        {/* Segment 2: Indigo - Full Dress Rehearsal */}
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white p-4 sm:p-5 flex items-center space-x-3 border-r border-indigo-700/50">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5 text-indigo-300" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
              CEREMONY DATE
            </div>
            <div className="text-sm font-bold leading-tight text-white">
              {INSTITUTE_INFO.date}
            </div>
          </div>
        </div>

        {/* Segment 3: Slate - Reporting Time */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 sm:p-5 flex items-center space-x-3 border-r border-slate-700/50">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-slate-300" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
              REPORTING TIME
            </div>
            <div className="text-sm font-bold leading-tight text-white">
              {INSTITUTE_INFO.reportingTime}
            </div>
          </div>
        </div>

        {/* Segment 4: Navy - Venue */}
        <div className="bg-gradient-to-r from-slate-950 to-black text-white p-4 sm:p-5 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-slate-400" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              VENUE
            </div>
            <div className="text-sm font-bold leading-tight text-white">
              {INSTITUTE_INFO.venue.split(",")[0]}
            </div>
          </div>
        </div>
      </div>

      {/* Official Notice Reader Modal */}
      {selectedNotice && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedNotice(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Official Header */}
            <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-6 relative">
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                    {INSTITUTE_INFO?.nameEnglish || "National Institute of Technology Patna"}
                  </h4>
                  <p className="text-[11px] text-blue-300">
                    Convocation Secretariat • {INSTITUTE_INFO?.editionRoman || `${data.year || '2026'} Convocation`}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-400/20 text-amber-200 border border-amber-400/30">
                  {selectedNotice.category || "Official Circular"}
                </span>
                {selectedNotice.referenceNo && (
                  <span className="font-mono text-[11px] text-blue-200 bg-white/10 px-2 py-0.5 rounded">
                    Ref: {selectedNotice.referenceNo}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-blue-700" />
                  Published: {selectedNotice.date}
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Senate Approved
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-black text-slate-950 leading-tight">
                {selectedNotice.title}
              </h3>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 text-sm text-slate-700 leading-relaxed space-y-3">
                <p className="font-semibold text-slate-900">
                  Official Executive Summary &amp; Instructions:
                </p>
                <p className="leading-relaxed whitespace-pre-line">
                  {selectedNotice.summary}
                </p>
              </div>

              {/* Special CTA if this is the Topper / Medals notification */}
              {(selectedNotice.category?.toLowerCase().includes("medal") || selectedNotice.title?.toLowerCase().includes("topper")) && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-amber-100/60 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                      Academic Honours Directory
                    </h5>
                    <p className="text-xs text-amber-800">
                      Explore the list of President&apos;s Gold Medalists and Branch Toppers.
                    </p>
                  </div>
                  <Link
                    href={data.year === "2026" ? "/awards" : `/${data.year}/awards`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shrink-0 shadow-sm"
                  >
                    <span>View Medalists</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              <div className="bg-blue-50/60 rounded-2xl p-4 border border-blue-100 flex items-start gap-3 text-xs text-blue-900">
                <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Important Compliance Note:</span>
                  All prospective degree recipients are advised to adhere to guidelines and submit any representations to the Dean (Academic) within the prescribed timeline.
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Signatory Authority</span>
                  <span className="text-sm font-bold text-slate-900">{selectedNotice.signedBy || "Dean (Academic Affairs)"}</span>
                  <span className="text-xs text-slate-500 block">NIT Patna Main Campus</span>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  {selectedNotice.fileUrl && selectedNotice.fileUrl !== "#" && (
                    <a
                      href={selectedNotice.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Attachment</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedNotice(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Close Notice
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
