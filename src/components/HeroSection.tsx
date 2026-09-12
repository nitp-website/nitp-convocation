"use client";

import Image from "next/image";
import React, { useState } from "react";
import { 
  Award, 
  GraduationCap, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  FileText,
  Download
} from "lucide-react";
import { useConvocation } from "@/context/ConvocationContext";

export default function HeroSection() {
  const { data } = useConvocation();
  if (!data) return null;
  const INSTITUTE_INFO = data.info?.INSTITUTE_INFO || {};
  const DIGNITARIES = data.dignitaries;

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
            <div className="space-y-3 sm:space-y-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-sans font-medium tracking-tight bg-gradient-to-r from-[#D97706] via-[#BE185D] to-[#3730A3] bg-clip-text text-transparent">
                Convocation 2025
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.1] text-slate-950 whitespace-nowrap flex items-baseline gap-x-2 sm:gap-x-3.5">
                <span>Celebrating</span>
                <span className="bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#3730A3] bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-base sm:text-xl lg:text-2xl font-sans italic tracking-normal pt-1">
                <span className="text-[#4338CA] font-semibold">&ldquo;The Stage is set for the </span>
                <span className="bg-gradient-to-r from-[#EA580C] via-[#DC2626] to-[#E11D48] bg-clip-text text-transparent font-bold">
                  Leaders of Tomorrow
                </span>
                <span className="text-[#4338CA] font-semibold">&rdquo;</span>
              </p>

              <p className="text-sm sm:text-base font-sans font-medium text-slate-600 max-w-lg leading-relaxed pt-2">
                Honouring the scholarly perseverance of doctoral, postgraduate, and undergraduate candidates at India&apos;s 6th oldest engineering institution.
              </p>
            </div>

            {/* Metric / Stat Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {/* Card 1 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 text-center shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 mx-auto mb-3 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {INSTITUTE_INFO?.edition?.split(" ")[0]}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Convocation
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 text-center shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 mx-auto mb-3 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {INSTITUTE_INFO?.totalGraduates}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Graduates
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 text-center shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 mx-auto mb-3 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {INSTITUTE_INFO?.phdScholars}
                </div>
                <div className="text-xs font-semibold text-slate-500 tracking-wider mt-1">
                  Ph.D Scholars
                </div>
              </div>
            </div>


          </div>

          {/* Right Column: 3D Flipping Chief Guest Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              className="relative w-full max-w-sm sm:max-w-md perspective-1000 group cursor-pointer select-none"
              onClick={() => setIsFlipped(!isFlipped)}
              role="button"
              tabIndex={0}
              aria-label="Toggle Chief Guest information card"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsFlipped(!isFlipped);
                }
              }}
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
                  <div 
                    className="absolute inset-0 backface-hidden rotate-y-0 rounded-[2rem] overflow-hidden bg-slate-950 shadow-inner z-10"
                    style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
                  >
                    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                      <Image
                        src={DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.image || "/images/default_avatar.png"}
                        alt={`${DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.name || "Chief Guest"} - Chief Guest`}
                        fill
                        className="object-cover object-top scale-102"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />

                      {/* Dark gradient overlay at bottom of photo */}
                      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

                      {/* Chief Guest Badge & Name on the image */}
                      <div className="absolute bottom-5 left-5 right-5 text-left pointer-events-none">
                        <span className="inline-block bg-[#F3A712] text-slate-950 font-extrabold text-[11px] tracking-wider uppercase px-3.5 py-1 rounded-full shadow-xs mb-2">
                          CHIEF GUEST
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-tight">
                          {DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.name || "Chief Guest"}
                        </h3>
                        <p className="text-xs text-amber-300 font-semibold mt-1">
                          {(() => { const cg = DIGNITARIES.find((d: any) => d.badge === "Chief Guest"); return cg ? (cg.designation === "Chief Guest" ? cg.role : cg.designation) : ""; })()}
                        </p>
                      </div>


                    </div>
                  </div>

                  {/* BACK FACE: Chief Guest Biography & Vision */}
                  <div 
                    className="absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#0E204E] via-[#0B1A3E] to-[#07112B] text-white p-6 sm:p-7 flex flex-col shadow-2xl border border-blue-500/20 justify-between"
                    style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                          CHIEF GUEST ADDRESS
                        </span>

                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                          {DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.name || "Chief Guest"}
                        </h3>
                        <h4 className="text-xs sm:text-sm font-medium text-amber-300 mt-0.5">
                          {(() => { const cg = DIGNITARIES.find((d: any) => d.badge === "Chief Guest"); return cg ? (cg.designation === "Chief Guest" ? cg.role : cg.designation) : ""; })()}
                        </h4>
                      </div>

                      <ul className="space-y-3 pt-2 text-[12px] sm:text-[13px] text-slate-200/95 leading-relaxed font-sans">
                        {DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.bio?.map((point: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-400 mr-2 text-base leading-none">&bull;</span>
                            <span>{point}</span>
                          </li>
                        )) || (
                          <li className="flex items-start">
                            <span className="text-amber-400 mr-2 text-base leading-none">&bull;</span>
                            <span>Delivered the Convocation Keynote Address to the {INSTITUTE_INFO.editionRoman.split(" ")[0]} graduating batch of NIT Patna.</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-[11px] text-amber-200/80 font-mono">
                      {INSTITUTE_INFO.editionRoman} &bull; NIT Patna
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
                Official Notice
              </div>
            </div>
          </div>
          <button 
            onClick={() => setShowPdfModal(true)}
            className="inline-flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors border border-white/10 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Notice</span>
          </button>
        </div>

        {/* Segment 2: Indigo - Full Dress Rehearsal */}
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white p-4 sm:p-5 flex items-center space-x-3 border-r border-indigo-700/50">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5 text-indigo-300" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
              CEREMONY DATE
            </div>
            <div className="text-sm font-bold leading-tight text-white">
              {INSTITUTE_INFO.date}
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
              {INSTITUTE_INFO.reportingTime}
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
              {INSTITUTE_INFO.venue.split(",")[0]}
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
                  {INSTITUTE_INFO.editionRoman} 2025
                </h3>
              </div>
              <button
                onClick={() => setShowPdfModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-2xl cursor-pointer"
              >
                &times;
              </button>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                <strong>Order of Ceremony ({INSTITUTE_INFO.date}):</strong> {INSTITUTE_INFO.edition} of the National Institute of Technology Patna will be held on {INSTITUTE_INFO.date} at the Main Campus (Mahendru, Ashok Rajpath, Patna).
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                <li><strong>Chief Guest:</strong> {(() => { const cg = DIGNITARIES.find((d: any) => d.badge === "Chief Guest"); return cg ? (cg.designation === "Chief Guest" ? cg.role : cg.designation) : ""; })()} {DIGNITARIES.find((d: any) => d.badge === "Chief Guest")?.name || "Chief Guest"}.</li>
                <li><strong>Presided by:</strong> {DIGNITARIES.find((d: any) => d.badge === 'Chairperson' || d.badge === 'Presiding Officer' || d.name === 'Shri Ashok Kumar Modi')?.name || 'Chairperson, BOG'}, Chairperson, BOG &amp; {DIGNITARIES.find((d: any) => d.badge === 'Director' || d.badge === 'Chief Academic Officer' || d.name === 'Prof. Pradip Kumar Jain')?.name || 'Director'}, Director.</li>
                <li><strong>Academic Dress Code:</strong> Traditional Indian attire with official ceremonial stole.</li>
              </ul>
            </div>
            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowPdfModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
