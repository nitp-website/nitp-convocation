"use client";

import React from "react";

export default function ConvocationOverview() {
  return (
    <section id="overview" className="py-20 sm:py-24 bg-white text-slate-900 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
            Convocation Overview
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
            14th Annual Convocation
          </h2>
        </div>

        <div className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
          <p>
            The National Institute of Technology Patna takes immense pride in celebrating the academic achievements of our graduating class at the 14th Annual Convocation Ceremony. 
          </p>
          <p className="mt-4">
            Scheduled for Saturday, December 27, 2025, at the Main Campus Auditorium, the event will be graced by our Honourable Chief Guest, Shri Nitish Kumar, Chief Minister of Bihar. Over 1,200 graduates will be conferred their degrees, with 12 exceptional students receiving Gold Medals for their outstanding academic merit.
          </p>
        </div>

      </div>
    </section>
  );
}
