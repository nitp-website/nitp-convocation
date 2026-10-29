"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Search,
  Tag
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

export default function NoticesClient({ 
  data 
}: { 
  data: { 
    year?: string; 
    notices?: NoticeItem[]; 
    info?: { 
      INSTITUTE_INFO?: { 
        nameEnglish?: string; 
        edition?: string; 
        editionRoman?: string; 
        date?: string 
      } 
    } 
  } 
}) {
  const notices: NoticeItem[] = useMemo(() => data.notices || [], [data.notices]);
  const currentYear = data.year || "2026";
  const { INSTITUTE_INFO } = data.info || {};
  const isCurrentYear = currentYear === "2026";

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(notices.map((n) => n.category).filter(Boolean)))];
  }, [notices]);

  // Filter notices based on category and search query
  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesCategory = activeCategory === "All" || notice.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        notice.title.toLowerCase().includes(q) ||
        notice.summary.toLowerCase().includes(q) ||
        (notice.referenceNo && notice.referenceNo.toLowerCase().includes(q)) ||
        notice.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [notices, activeCategory, searchQuery]);

  const getCategoryColor = (cat: string) => {
    switch (cat?.toLowerCase()) {
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
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col font-sans text-slate-900">
      {/* Unified Navigation */}
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white pt-32 sm:pt-36 pb-16 px-6 text-center shadow-inner relative overflow-hidden">
        {/* Ambient subtle glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <Bell className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>Convocation Secretariat</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="font-bold text-white">{currentYear} Edition</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-white">
            {isCurrentYear ? "Notices & Official Circulars" : `Archived Circulars (${currentYear})`}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Procedural guidelines, schedule notifications, degree verification circulars, and official orders for the {INSTITUTE_INFO?.edition || `${currentYear} Convocation`}.
          </p>

          <div className="pt-2 text-xs font-mono text-blue-300">
            Total Circulars: <span className="text-white font-bold">{notices.length}</span> Published
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full space-y-8">
        {/* Search and Category Filter Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search circular by title, ref no., keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          {categories.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200/80">
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 px-2.5 py-1 uppercase tracking-wider">
                <Tag className="w-3 h-3" />
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
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
        {filteredNotices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredNotices.map((notice, idx) => (
              <div
                key={notice.id || idx}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 relative group ${
                  notice.isUrgent
                    ? "border-amber-300 ring-1 ring-amber-200/70"
                    : "border-slate-200/90 hover:border-blue-300"
                }`}
              >
                {/* Top Accent Strip for Urgent items */}
                {notice.isUrgent && (
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-t-full" />
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

                    <div className="flex items-center text-slate-500 text-xs font-semibold gap-1.5 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-blue-700" />
                      <span>{notice.date}</span>
                    </div>
                  </div>

                  {/* Reference Number */}
                  {notice.referenceNo && (
                    <div className="text-[11px] font-mono text-slate-500 mb-2 font-medium tracking-tight">
                      Ref: {notice.referenceNo}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-blue-900 transition-colors leading-snug mb-3">
                    {notice.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {notice.summary}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
                  <button
                    onClick={() => setSelectedNotice(notice)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-semibold transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-700" />
                    <span>Read Details</span>
                  </button>

                  {notice.fileUrl && notice.fileUrl !== "#" && (
                    <a
                      href={notice.fileUrl}
                      target={notice.isExternal ? "_blank" : undefined}
                      rel={notice.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-semibold transition-colors shadow-xs"
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
                  )}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              No matching circulars found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              No notices match your current search query or category filter. Try clearing your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-blue-900 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Notice Modal */}
        {selectedNotice && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
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
                      Convocation Secretariat • {INSTITUTE_INFO?.editionRoman || `${currentYear} Convocation`}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
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
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-900 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Close Notice
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Unified Footer */}
      <Footer />
    </div>
  );
}
