"use client";

import React from "react";

export default function ConvocationOverview() {
  return (
    <section id="overview" className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-[#F1F5F9] text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-14 shadow-xl shadow-slate-200/50 border border-white text-center space-y-8">
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              Convocation Overview
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-slate-900 leading-tight tracking-tight">
              14th Annual Convocation
            </h2>
          </div>

          <div className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
            <p>
              The National Institute of Technology Patna takes immense pride in celebrating the academic achievements of our graduating class at the 14th Annual Convocation Ceremony. 
            </p>
            <p className="mt-6">
              Scheduled for Saturday, December 27, 2025, at the Main Campus Auditorium, the event will be graced by our Honourable Chief Guest, Dr. Abhay Karandikar. Over 2,000 graduates will be conferred their degrees, with exceptional students receiving Gold Medals for their outstanding academic merit.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
