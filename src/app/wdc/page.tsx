"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, User, ExternalLink, Globe } from "lucide-react";

export default function WDCPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Soft Ambient Glows matching Home Page */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Unified Institutional Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex flex-col items-center relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100/80 mb-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-800">
              Web Development Cell &bull; NIT Patna
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-sans font-extrabold tracking-tight text-slate-900">
            Web Development <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 bg-clip-text text-transparent">Cell</span>
          </h1>
          
          <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-medium pt-2">
            <p>
              Think coding is challenging? Try mastering web design! This sentiment truly captures the spirit of the Web Development Cell at NIT Patna. 🌐
            </p>
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto">
              Our mission is to ensure that the Institute&apos;s digital platforms reach every corner of India, fostering a standard of technical excellence, accessibility, and modern design.
            </p>
          </div>
        </div>

        {/* Two-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* Card 1: Professor In Charge */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center justify-between hover:shadow-2xl hover:shadow-slate-300/60 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
            
            <div className="w-full flex flex-col items-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 text-xs font-bold text-blue-800 mb-8 shadow-xs">
                <GraduationCap className="w-4 h-4 text-blue-700" />
                <span>Professor In Charge</span>
              </div>

              {/* Avatar Photo */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg mb-6 bg-slate-100 shrink-0 group-hover:border-blue-300 transition-all duration-300">
                <img
                  src="/images/wdc/balaji_naik.png"
                  alt="Dr. B Balaji Naik"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Research Areas */}
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2">
                Dr. B Balaji Naik
              </h2>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
                Faculty In Charge
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mb-8 font-medium">
                Cloud Computing, Nature Inspired Algorithms, Edge Computing, Workflow Scheduling Algorithm, Optimization, Quantum Computing
              </p>
            </div>

            {/* Action Button */}
            <a
              href="https://www.nitp.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs inline-flex items-center justify-center space-x-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-2xl shadow-md shadow-slate-900/10 hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-slate-300" />
              <span>View Faculty Profile</span>
            </a>
          </div>

          {/* Card 2: Student Developer */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center justify-between hover:shadow-2xl hover:shadow-slate-300/60 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
            
            <div className="w-full flex flex-col items-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-800 px-4 py-1.5 rounded-full border border-indigo-100 text-xs font-bold mb-8 shadow-xs">
                <User className="w-4 h-4 text-indigo-700" />
                <span>Student Developer</span>
              </div>

              {/* Avatar Photo */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg mb-6 bg-slate-100 shrink-0 group-hover:border-indigo-300 transition-all duration-300">
                <img
                  src="/images/wdc/ashish_kumar.png"
                  alt="Ashish Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Roles */}
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-1">
                Ashish Kumar
              </h2>
              <p className="text-sm font-bold text-indigo-700 mb-2">
                Lead Web Developer
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mb-8 font-medium">
                Database Management, Full Stack Developer
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 w-full">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 text-slate-700 text-xs font-semibold py-2.5 px-3.5 rounded-xl border border-slate-200 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current text-blue-600" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.89-.72-1.6-1.6-1.6Z" />
                </svg>
                <span>View LinkedIn</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 text-slate-700 text-xs font-semibold py-2.5 px-3.5 rounded-xl border border-slate-200 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>Portfolio</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2.5 px-3.5 rounded-xl border border-slate-200 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current text-slate-700" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
                <span>View GitHub</span>
              </a>
            </div>

          </div>

        </div>

      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
