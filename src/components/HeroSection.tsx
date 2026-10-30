"use client";

import Link from "next/link";
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

  if (!data) return null;
  const INSTITUTE_INFO = data.info?.INSTITUTE_INFO || {};
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
                  Ph.D. Scholars
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Convocation Notice Board (Replacing Chief Guest) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-lg bg-gradient-to-b from-[#0F1D38] via-[#0B172E] to-[#071022] text-white rounded-[2.5rem] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-blue-400/30 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
              
              {/* Soft ambient background glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                    <Bell className="w-5 h-5 text-amber-400 animate-bounce" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-serif font-bold text-white tracking-wide">
                        Official Notice Board
                      </h3>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    </div>
                    <span className="text-[11px] text-blue-300 font-mono block">
                      {INSTITUTE_INFO.editionRoman || 'Convocation'} &bull; Live Circulars
                    </span>
                  </div>
                </div>

                <Link 
                  href={data.year === "2026" ? "/notices" : `/${data.year}/notices`}
                  className="text-xs font-semibold text-amber-300 hover:text-white flex items-center gap-1 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 cursor-pointer"
                >
                  <span>All ({notices.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Active Notices List */}
              <div className="space-y-3 my-4 relative z-10 flex-1">
                {notices.slice(0, 3).map((notice: any, idx: number) => (
                  <div
                    key={notice.id || idx}
                    onClick={() => setSelectedNotice(notice)}
                    className="group/item p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 transition-all duration-200 cursor-pointer flex flex-col gap-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-amber-400/20 text-amber-300 text-[11px] font-bold font-mono flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                          {notice.category || "Official Circular"}
                        </span>
                      </div>
                      {notice.isNew && (
                        <span className="bg-red-500 text-white px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider shadow-xs">
                          NEW
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover/item:text-amber-200 transition-colors leading-snug line-clamp-2">
                      {notice.title}
                    </h4>

                    <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1.5 border-t border-white/5 font-mono">
                      <span>{notice.date}</span>
                      <span className="text-blue-300 group-hover/item:text-amber-300 flex items-center gap-1 font-sans font-bold text-xs">
                        <span>Read Notice</span>
                        <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Quick Links */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 relative z-10">
                <Link
                  href={data.year === "2026" ? "/awards" : `/${data.year}/awards`}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Browse 2026 Medalists &rarr;</span>
                </Link>
                <Link
                  href={data.year === "2026" ? "/notices" : `/${data.year}/notices`}
                  className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Circulars Archive</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
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

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
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
      )}
    </section>
  );
}
