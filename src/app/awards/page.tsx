"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AwardeesSection from "@/components/AwardeesSection";
import { Award, Medal, Trophy, Star, Search, Filter, Sparkles } from "lucide-react";
import { UG_GOLD_MEDALISTS, PG_GOLD_MEDALISTS, BEST_GRADUATES } from "@/lib/souvenirData";

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col font-sans text-slate-900">
      {/* Unified Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-amber-700 via-amber-800 to-slate-900 text-white py-16 px-6 text-center shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 mb-2">
            <Trophy className="w-3.5 h-3.5 mr-1.5" /> ACADEMIC MEDALS &amp; DISTINCTIONS
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-white">
            Medals &amp; Honours (2024–25)
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base max-w-2xl mx-auto">
            Official list of President&apos;s Gold Medalists, Director&apos;s Gold Medalists, Institute Honours, and Best Graduate awardees of NIT Patna.
          </p>
        </div>
      </section>

      {/* Clean Grid Section */}
      <AwardeesSection />

      {/* Main Detailed Award Directory with Real Photographs */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 flex-1 w-full">
        
        {/* Special Honours: Best Graduate Boy & Girl */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Best Graduate Students (Boy &amp; Girl), 2024–25
              </h3>
              <p className="text-xs text-slate-500">
                Awarded with a cash prize of Rs. 10,001/- along with a Letter of Appreciation.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BEST_GRADUATES.map((bg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-amber-200/80 hover:shadow-xl transition-all relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                {/* Photo */}
                <div className="w-28 h-32 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-400 shadow-md">
                  <img
                    src={bg.image}
                    alt={bg.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full mb-2">
                    {bg.title}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 font-serif mb-0.5">{bg.name}</h4>
                  <p className="text-xs font-mono text-slate-500 mb-1">Roll No: {bg.roll}</p>
                  <p className="text-sm font-semibold text-blue-800 mb-3">{bg.dept}</p>
                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
                    <strong>Award:</strong> <span className="font-bold text-slate-900">{bg.cash}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Undergraduate (UG) Gold Medals */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
              <Medal className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Undergraduate (UG) Medal Recipients (2024–25)
              </h3>
              <p className="text-xs text-slate-500">
                Conferred to the Overall Topper and Department Branch Toppers in Bachelor degrees.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UG_GOLD_MEDALISTS.map((med, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-amber-400/60 transition-all group"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-18 rounded-xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-300 shadow-sm group-hover:scale-105 transition-transform">
                      <img
                        src={med.image}
                        alt={med.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 block mb-1">
                        {med.badge}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 font-serif leading-snug">{med.name}</h4>
                      <p className="text-xs font-mono text-slate-400">Roll: {med.roll}</p>
                    </div>
                  </div>
                  
                  <p className="text-xs font-semibold text-blue-800 mb-2">{med.dept}</p>
                  <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-medium leading-relaxed">
                    {med.award}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  Programme: <span className="font-semibold text-slate-800">Bachelor of Technology / Architecture</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Postgraduate (PG) Gold Medals */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
              <Award className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Postgraduate (PG) Medal &amp; Certificate Recipients (2024–25)
              </h3>
              <p className="text-xs text-slate-500">
                Conferred to the Overall Topper and Department Branch Toppers in Master degrees.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PG_GOLD_MEDALISTS.map((med, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-amber-400/60 transition-all group"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-18 rounded-xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-300 shadow-sm group-hover:scale-105 transition-transform">
                      <img
                        src={med.image}
                        alt={med.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 block mb-1">
                        {med.badge}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 font-serif leading-snug">{med.name}</h4>
                      <p className="text-xs font-mono text-slate-400">Roll: {med.roll}</p>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-blue-800 mb-2">{med.dept}</p>
                  <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-medium leading-relaxed">
                    {med.award}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  Programme: <span className="font-semibold text-slate-800">Master of Technology / M.Arch / MURP</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
