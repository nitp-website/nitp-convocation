"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserCheck, Star, Shield, Award, Sparkles, Building, Landmark } from "lucide-react";
import { DIGNITARIES } from "@/lib/souvenirData";

export default function DignitariesPage() {
  const administrativeDeans = [
    { name: "Dr. Asit Narayan", designation: "Registrar & Member Secretary" },
    { name: "Prof. M.P. Singh", designation: "Dean (Academic)" },
    { name: "Prof. Ramesh Kumar", designation: "Dean (Research & Consultancy)" },
    { name: "Prof. Prakash Chandra", designation: "Dean (Faculty Welfare)" },
    { name: "Prof. Sanjeev Sinha", designation: "Dean (Planning & Development)" },
    { name: "Prof. Prabhat Kumar", designation: "Dean (Student Welfare) & Head - CCIS" },
    { name: "Dr. Sanjay Kumar", designation: "Dean (Outreach & Alumni Affairs)" }
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col font-sans text-slate-900">
      {/* Unified Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16 px-6 text-center shadow-inner relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 mb-2">
            <UserCheck className="w-3.5 h-3.5 mr-1.5" /> INSTITUTIONAL PATRONS &amp; LEADERSHIP
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-white">
            Distinguished Dignitaries
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Presiding over the 14th Convocation Ceremony of National Institute of Technology Patna (December 27, 2025).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 flex-1 w-full">
        {/* National & State Dignitaries Grid with Official Photos from Souvenir */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              HONOURED PRESENCE
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Dignitaries on Dias
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIGNITARIES.map((person, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-sm border border-slate-200 p-7 flex flex-col items-center text-center relative hover:shadow-xl hover:border-amber-400/60 transition-all group overflow-hidden"
              >
                {person.badge && (
                  <span className="absolute top-4 right-4 bg-amber-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs z-10">
                    {person.badge}
                  </span>
                )}
                
                {/* Official Photo from Souvenir */}
                <div className="relative w-32 h-36 rounded-2xl overflow-hidden bg-slate-100 mb-5 border-2 border-amber-300/80 shadow-md group-hover:scale-105 transition-transform">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="text-xl font-bold font-serif text-slate-900 mb-1 leading-snug">{person.name}</h3>
                <p className="text-xs font-bold text-amber-800 mb-1">{person.designation}</p>
                <p className="text-xs text-slate-600 font-medium">{person.role}</p>
                <p className="text-[11px] text-slate-400 mt-2">{person.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bihta Campus Dedication Highlight Banner */}
        <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-200/80 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-800 shrink-0">
            <Building className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Institutional Milestone
            </span>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Bihta Campus (125 Acres) Dedicated to the Nation
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The newly developed 125-acre Bihta Campus of NIT Patna was dedicated to the Nation by Hon’ble Prime Minister Shri Narendra Modi on 4th October 2025, in the presence of Minister of Education Shri Dharmendra Pradhan and Chief Minister of Bihar Shri Nitish Kumar.
            </p>
          </div>
        </section>

        {/* Administrative Deans Table */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              Institute Administration &amp; Deans
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {administrativeDeans.map((dean, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-400/40 transition-colors"
              >
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{dean.name}</h4>
                  <p className="text-xs text-blue-700 font-medium mt-0.5">{dean.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
