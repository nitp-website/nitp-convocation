"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  FileText, 
  Award, 
  CheckCircle2, 
  Shirt,
  Download
} from "lucide-react";
import { PROGRAMME_EVENTS, INSTITUTE_INFO } from "@/lib/souvenirData";

export default function ProgrammePage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col font-sans text-slate-900">
      {/* Official Unified Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0F172A] via-[#111C38] to-[#0A1024] text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
            <Calendar className="w-3.5 h-3.5" />
            <span>SATURDAY, DECEMBER 27, 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight">
            Programme &amp; Schedule
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Official sequence of proceedings for the 14th Convocation Ceremony of National Institute of Technology Patna.
          </p>

          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-3xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">Reporting Time</div>
                <div className="text-sm font-bold text-white">08:00 AM Sharp</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-400/20 text-blue-400 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">Rehearsal</div>
                <div className="text-sm font-bold text-white">09:00 AM (Mandatory)</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-rose-400/20 text-rose-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-rose-300 uppercase tracking-wider">Venue</div>
                <div className="text-sm font-bold text-white">Main Auditorium, NITP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Single Unified Timeline & Essential Info */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full space-y-16">
        
        {/* Single Official Order of Events Timeline */}
        <section>
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 font-sans">
              MINUTE-BY-MINUTE CEREMONIAL ORDER
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Order of Events (XIV Convocation)
            </h2>
            <div className="flex items-center justify-center space-x-1 pt-1">
              <span className="w-6 h-1 bg-amber-500 rounded-full" />
              <span className="w-12 h-1 bg-blue-700 rounded-full" />
              <span className="w-6 h-1 bg-amber-500 rounded-full" />
            </div>
          </div>

          <div className="relative border-l-2 border-amber-500/40 ml-4 sm:ml-32 space-y-7 py-2">
            {PROGRAMME_EVENTS.map((ev, index) => (
              <div key={index} className="relative pl-7 sm:pl-9 group">
                {/* Timeline node marker */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-amber-500 group-hover:border-blue-700 transition-colors shadow-xs" />
                
                {/* Time Indicator on Left for larger displays */}
                <div className="sm:absolute sm:-left-36 sm:top-1 text-xs sm:text-sm font-bold font-mono text-amber-800 sm:w-28 sm:text-right mb-1 sm:mb-0">
                  {ev.time}
                </div>

                {/* Event Card */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-md group-hover:border-amber-300/80 transition-all">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                      Sequence #{index + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 sm:hidden">
                      {ev.time}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif leading-snug">
                    {ev.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 Guidance Cards: Dress Code, Verification, Seating */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-800 mb-2">
              <Shirt className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900">Ceremonial Dress Code</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Traditional Indian attire: White/Off-white Kurta-Pyjama / Dhoti for boys; White/Off-white Saree or Salwar-Kameez for girls, worn with the official Institute Stole.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-800 mb-2">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900">Security &amp; Entry Pass</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Entry into the convocation hall requires the student&apos;s government Photo ID along with the verified Digital Pass generated from the portal.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-800 mb-2">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900">Mandatory Rehearsal</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Participation in the Full Dress Rehearsal at 09:00 AM on December 27, 2025 is compulsory for all degree recipients receiving medals or degrees in-person.
            </p>
          </div>
        </section>

        {/* Solemn Pledge Card matching Souvenir */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-50/60 to-amber-50 p-8 sm:p-10 rounded-3xl border border-amber-200/80 shadow-sm text-center">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
            <Award className="w-4 h-4 text-amber-700" />
            <span>दीक्षान्त प्रतिज्ञा</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950 mb-3">
            Solemn Convocation Pledge
          </h3>
          <p className="text-base sm:text-lg text-amber-900/90 italic max-w-2xl mx-auto mb-4 font-serif leading-relaxed">
            &ldquo;संस्थान का सिद्धान्त &lsquo;श्रमोऽनवरत चेष्टाय&rsquo; मेरे जीवन का मार्गदर्शक सिद्धान्त रहेगा। मैं अपनी विद्या और कौशल का उपयोग समाज, राष्ट्र और मानवता की सेवा में करूंगा।&rdquo;
          </p>
          <p className="text-xs text-amber-800 font-medium">
            Administered by the Director to all Ph.D, Master&apos;s, and Bachelor&apos;s degree candidates during the solemn confirmation of degrees.
          </p>
        </section>

      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
