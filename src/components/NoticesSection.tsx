"use client";

import React, { useState } from "react";
import { useConvocation } from "@/context/ConvocationContext";
import { 
  Bell, 
  Calendar, 
  FileText, 
  Download, 
  ExternalLink, 
  ShieldAlert, 
  Sparkles, 
  X, 
  CheckCircle2, 
  Building2,
  Clock
} from "lucide-react";

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: string;
  isNew?: boolean;
  isUrgent?: boolean;
  summary: string;
  fileUrl?: string;
  isExternal?: boolean;
  signedBy?: string;
  referenceNo?: string;
}

export default function NoticesSection() {
  const { data, year } = useConvocation();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  if (!data) return null;
  const notices: NoticeItem[] = data.notices || [];

  if (notices.length === 0) {
    return null; // Gracefully omit if an archived year doesn't have notices
  }

  const { INSTITUTE_INFO } = data.info || {};
  const isCurrentYear = year === "2026" || !year;

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(notices.map((n) => n.category)))];

  const filteredNotices = activeCategory === "All" 
    ? notices 
    : notices.filter((n) => n.category === activeCategory);

  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "rehearsal & stole":
      case "rehearsal":
        return "bg-amber-50 text-amber-800 border-amber-200/80";
      case "degree verification":
      case "degree dispatch":
        return "bg-blue-50 text-blue-800 border-blue-200/80";
      case "campus protocol":
      case "logistics":
        return "bg-purple-50 text-purple-800 border-purple-200/80";
      case "live broadcast":
        return "bg-rose-50 text-rose-800 border-rose-200/80";
      case "medals & honours":
        return "bg-emerald-50 text-emerald-800 border-emerald-200/80";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <section id="notices" className="pt-10 pb-20 bg-gradient-to-b from-white via-slate-50/60 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Bell className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
              <span>Official Announcements</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="font-bold text-blue-900">{year} Edition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-950 tracking-tight">
              {isCurrentYear ? "Notices & Circulars" : `Archived Circulars (${year})`}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Mandatory notifications, procedural guidelines, schedule updates, and circulars issued by the Convocation Secretariat.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          {categories.length > 2 && (
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-white text-blue-900 shadow-xs border border-slate-200/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 relative group ${
                notice.isUrgent
                  ? "border-amber-300 ring-1 ring-amber-200/70"
                  : "border-slate-200/90 hover:border-blue-300"
              }`}
            >
              {/* Top Accent Strip for Urgent items */}
              {notice.isUrgent && (
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-t-full"></div>
              )}

              <div>
                {/* Meta Bar: Category + Date + Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${getCategoryColor(notice.category)}`}>
                      {notice.category}
                    </span>
                    {notice.isNew && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-extrabold uppercase tracking-wider animate-pulse">
                        <Sparkles className="w-2.5 h-2.5" />
                        New
                      </span>
                    )}
                    {notice.isUrgent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider">
                        <ShieldAlert className="w-2.5 h-2.5" />
                        Important
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-slate-600 text-xs font-semibold gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{notice.date}</span>
                  </div>
                </div>

                {/* Reference Number */}
                {notice.referenceNo && (
                  <div className="text-[11px] font-mono text-slate-600 mb-2 font-medium tracking-tight">
                    Ref: {notice.referenceNo}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold font-sans text-slate-900 group-hover:text-blue-900 transition-colors leading-snug mb-3">
                  {notice.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {notice.summary}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-600 font-medium">
                  <span className="text-slate-500 text-[11px] block">Issued by:</span>
                  <span className="font-semibold text-slate-700">{notice.signedBy || "Convocation Secretariat"}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedNotice(notice)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 font-semibold transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-700" />
                    <span>Read Details</span>
                  </button>

                  {notice.fileUrl && notice.fileUrl !== "#" ? (
                    <a
                      href={notice.fileUrl}
                      target={notice.isExternal ? "_blank" : undefined}
                      rel={notice.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-blue-700 text-white font-semibold transition-colors shadow-xs"
                    >
                      {notice.isExternal ? (
                        <>
                          <span>Watch</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </>
                      )}
                    </a>
                  ) : null}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Notice Modal for Reading Full Official Circular */}
        {selectedNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
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
                      Convocation Secretariat • {INSTITUTE_INFO?.editionRoman || `${year} Convocation`}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${getCategoryColor(selectedNotice.category)}`}>
                    {selectedNotice.category}
                  </span>
                  {selectedNotice.referenceNo && (
                    <span className="font-mono text-[11px] text-blue-200 bg-white/10 px-2 py-0.5 rounded">
                      {selectedNotice.referenceNo}
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
                    Official Executive Summary & Instructions:
                  </p>
                  <p className="leading-relaxed">
                    {selectedNotice.summary}
                  </p>
                </div>

                <div className="bg-blue-50/60 rounded-2xl p-4 border border-blue-100 flex items-start gap-3 text-xs text-blue-900">
                  <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Important Compliance Note:</span>
                    All graduating candidates are required to strictly adhere to the ceremonial protocol, stole decorum, and reporting timelines notified above.
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Signatory Authority</span>
                    <span className="text-sm font-bold text-slate-900">{selectedNotice.signedBy || "Dean (Academic Affairs)"}</span>
                    <span className="text-xs text-slate-500 block">NIT Patna Main Campus</span>
                  </div>

                  <button
                    onClick={() => setSelectedNotice(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-900 text-white font-semibold text-xs transition-colors self-end sm:self-auto cursor-pointer"
                  >
                    Close Notice
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
