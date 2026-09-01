"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  GraduationCap, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  FileText,
  ChevronRight,
  RotateCw
} from "lucide-react";
import { INSTITUTE_INFO } from "@/lib/souvenirData";

export default function HeroSection() {
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] text-slate-900 pt-28 sm:pt-36 pb-0 border-b border-slate-200/50">
      {/* Soft Ambient Glows for Modern Depth */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-16 lg:pb-20">
          
          {/* Left Column: Heading, Subtitle & Stat Cards */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Giant Display Title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-sans font-extrabold tracking-tight leading-[1.05] text-slate-900">
                Celebrating<br/>
                <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-sans font-medium text-slate-500 max-w-lg leading-relaxed">
                Honouring the scholarly perseverance of doctoral, postgraduate, and undergraduate candidates at India&apos;s 6th oldest engineering institution.
              </p>
            </div>

            {/* Three Metric / Stat Cards in a row */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {/* Card 1 */}
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 text-center shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 mx-auto mb-3 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  14th
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Edition
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 text-center shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 mx-auto mb-3 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {INSTITUTE_INFO.totalGraduates}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Graduates
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 text-center shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 mx-auto mb-3 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {INSTITUTE_INFO.goldMedals}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Medalists
                </div>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/graduates"
                className="inline-flex items-center space-x-2 bg-[#0F172A] hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-slate-900/20 transition-all duration-200 cursor-pointer"
              >
                <span>Search Graduate Directory</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Flipping Chief Guest Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md perspective-1000 group cursor-pointer"
                 onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Outer Frosted Rounded Frame */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white/90 transition-all duration-300 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
                
                {/* 3D Flipping Inner Card Container */}
                <div 
                  className={`relative w-full aspect-[4/5] transform-style-3d transition-transform duration-700 ease-in-out ${
                    isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                  }`}
                >
                  
                  {/* FRONT FACE: Chief Guest Photo & Title */}
                  <div className="absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-200 to-slate-300 shadow-inner">
                    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/souvenir/nitish_kumar_hd.png"
                        alt="Dr. Abhay Karandikar - Chief Guest"
                        className="w-full h-full object-cover object-top scale-102"
                      />

                      {/* Dark gradient overlay at bottom of photo */}
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent" />

                      {/* Chief Guest Badge & Name on the image */}
                      <div className="absolute bottom-5 left-5 right-5 text-left z-20">
                        <span className="inline-block bg-[#F3A712] text-white font-extrabold text-[11px] tracking-wider uppercase px-3.5 py-1 rounded-full shadow-xs mb-2">
                          CHIEF GUEST
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">
                          Dr. Abhay Karandikar
                        </h3>
                      </div>

                      {/* Subtle flip hint button */}
                      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white/90 border border-white/30 shadow-xs">
                        <RotateCw className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE: Chief Guest Biography & Vision */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#0E204E] via-[#0B1A3E] to-[#07112B] text-white p-6 sm:p-7 flex flex-col shadow-2xl border border-blue-500/20">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-white leading-tight">
                          Visionary Educator,
                        </h3>
                        <h3 className="text-xl font-serif font-bold bg-gradient-to-r from-orange-400 via-rose-400 to-red-500 bg-clip-text text-transparent leading-tight">
                          Innovator &amp; Administrator
                        </h3>
                      </div>

                      <ul className="space-y-3 pt-2 text-[13px] text-slate-200/95 leading-relaxed font-sans">
                        <li className="flex items-start">
                          <span className="text-slate-400 mr-2 text-base leading-none">&bull;</span>
                          <span>Indian Educator, Engineer, Innovator, and Administrator best known for his contributions to the Telecommunications and Technology Ecosystem in India.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-slate-400 mr-2 text-base leading-none">&bull;</span>
                          <span>Serving as a full-time Member of NITI Aayog, the Government of India's premier policy think tank since May 2026.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-slate-400 mr-2 text-base leading-none">&bull;</span>
                          <span>Served as the Secretary, Department of Science and Technology, Government of India from October 2023 to May 2026.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4-Segment Full Width Announcement Strip matching Souvenir */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-xl relative z-20">
        {/* Segment 1: Deep Blue - Important Announcement */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 sm:p-5 flex items-center justify-between space-x-3 border-r border-blue-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                IMPORTANT
              </div>
              <div className="text-sm font-bold leading-tight text-white">
                Announcement
              </div>
            </div>
          </div>
          <button 
            onClick={() => setShowPdfModal(true)}
            className="inline-flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors border border-white/10 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View PDF</span>
          </button>
        </div>

        {/* Segment 2: Indigo - Full Dress Rehearsal */}
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white p-4 sm:p-5 flex items-center space-x-3 border-r border-indigo-700/50">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5 text-indigo-300" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
              FULL DRESS REHEARSAL
            </div>
            <div className="text-sm font-bold leading-tight text-white">
              Saturday, December 27, 2025
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
              08:00 AM Sharp
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
              Main Campus, NIT Patna
            </div>
          </div>
        </div>
      </div>

      {/* PDF Announcement Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700">Official Notice</span>
                <h3 className="font-serif font-bold text-xl text-slate-900">
                  XIV Convocation 2025
                </h3>
              </div>
              <button
                onClick={() => setShowPdfModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                <strong>Order of Ceremony (Dec 27, 2025):</strong> The 14th Annual Convocation of the National Institute of Technology Patna will be held on Saturday, December 27, 2025 at the Main Campus (Mahendru, Ashok Rajpath, Patna).
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                <li><strong>Chief Guest:</strong> Hon’ble Chief Minister of Bihar Shri Nitish Kumar.</li>
                <li><strong>Presided by:</strong> Shri Ashok Kumar Modi, Chairperson, BOG &amp; Prof. Pradip Kumar Jain, Director.</li>
                <li><strong>Academic Dress Code:</strong> Traditional Indian attire with official ceremonial stole.</li>
                <li><strong>Registration:</strong> Degree recipients must confirm in-person attendance to receive allocated seating and entry QR passes.</li>
              </ul>
            </div>
            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowPdfModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Close
              </button>
              <Link
                href="/programme"
                onClick={() => setShowPdfModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-700 text-white hover:bg-blue-800"
              >
                View Full Programme
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
