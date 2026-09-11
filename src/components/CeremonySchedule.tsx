// @ts-nocheck
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  ShieldAlert, 
  FileText, 
  Clock, 
  Download, 
  Calendar, 
  CheckCircle2 
} from "lucide-react";
import { useConvocation } from "@/context/ConvocationContext";

export default function CeremonySchedule() {
  const { data } = useConvocation();
  const { INSTITUTE_INFO, PROGRAMME_EVENTS, STOLE_GUIDELINES } = data.info;
  const DIGNITARIES = data.dignitaries;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-[#0F172A] via-[#111C38] to-[#0A1024] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14 text-left">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Day of the <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">Ceremony</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Official order of ceremonial proceedings for graduating students, guests, and families attending the {INSTITUTE_INFO.edition.split(" ")[0]} Convocation at Main Campus, NIT Patna.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: 3 Glowing Cards matching Image 5 */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Venue Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/15 shadow-xl hover:border-blue-400/40 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-300">
                    VENUE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    Main Campus Auditorium
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 pt-1 leading-relaxed">
                    NIT Patna, Mahendru, Ashok Rajpath, Patna – 800 005 (Bihar)
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Important Note Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/15 shadow-xl hover:border-amber-400/40 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-amber-400" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                    IMPORTANT NOTE
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 pt-1 leading-relaxed">
                    All graduating candidates and guests must carry their Photo Identity Proof and verified Digital Pass for entry verification and hall seating.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Detailed Schedule Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/15 shadow-xl hover:border-rose-400/40 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-rose-400" />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-300">
                      DETAILED SCHEDULE
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 pt-1 leading-relaxed">
                      Download or view the complete minute-by-minute ceremonial order as published in the Souvenir draft.
                    </p>
                  </div>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center space-x-2 bg-white text-slate-900 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-100 transition-all shadow-md"
                  >
                    <span>View Official Order</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Glowing Timeline matching Souvenir PDF */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 space-y-7 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-amber-400 before:via-blue-500 before:to-amber-500/20">
              
              {PROGRAMME_EVENTS.slice(0, 7).map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Marker Dot */}
                  <div className="absolute -left-[19px] sm:-left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-400 ring-4 ring-amber-400/30 group-hover:scale-125 transition-transform" />

                  {/* Time Badge */}
                  <div className="text-xs font-mono font-bold text-amber-400 tracking-wider mb-0.5">
                    {item.time}
                  </div>

                  {/* Event Title */}
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title || item.event}
                  </h3>

                  {/* Event Description */}
                  {item.description && <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">{item.description}</p>}
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>

      {/* Official Schedule Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {INSTITUTE_INFO.edition.split(" ")[0]} Convocation Programme (Official Souvenir Draft)
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Ceremonial Order of Events
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-white font-bold text-2xl"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              {PROGRAMME_EVENTS.map((ev, i) => (
                <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-bold text-white font-serif text-sm sm:text-base">{i + 1}. {ev.title || ev.event}</div>
                    {ev.description && <div className="text-xs text-slate-400 mt-0.5">{ev.description}</div>}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400 shrink-0 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {ev.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-slate-400">NIT Patna • {INSTITUTE_INFO.date}</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300"
              >
                Close Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
