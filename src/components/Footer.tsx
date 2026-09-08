// @ts-nocheck
"use client";
import { useConvocation } from "@/context/ConvocationContext";

import React from "react";
import Link from "next/link";
import { ExternalLink, Download, MapPin } from "lucide-react";

export default function Footer() {
  const convocationCtx = useConvocation();
  const year = convocationCtx?.year || "2025";
  const data = convocationCtx?.data;
  const INSTITUTE_INFO = data?.info?.INSTITUTE_INFO || { editionRoman: "XIV Convocation", nirfRank: "53rd in India (Engineering - NIRF 2025)" };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t-[4px] border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md shrink-0">
                <img
                  src="/logo.png"
                  alt="NIT Patna Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-sans font-bold text-white text-base leading-tight tracking-wide">
                  National Institute of Technology Patna
                </h4>
                <p className="text-[11px] text-blue-400 font-bold tracking-widest uppercase mt-0.5">
                  {INSTITUTE_INFO.editionRoman}
                </p>
              </div>
            </div>
            <p className="text-[13px] text-slate-400 leading-relaxed font-sans">
              An Institution of National Importance under Ministry of Education, Government of India. India&apos;s 6th oldest engineering institute (Est. 1886). {INSTITUTE_INFO.nirfRank}.
            </p>
          </div>

          {/* Column 2: Convocation Links */}
          <div className="space-y-4">
            <h5 className="text-white font-sans font-bold text-sm uppercase tracking-widest">
              Convocation
            </h5>
            <ul className="space-y-2.5 text-[13px] text-slate-400 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home &bull; {INSTITUTE_INFO.editionRoman.split(" ")[0]} Edition
                </Link>
              </li>
              <li>
                <Link href="/dignitaries" className="hover:text-white transition-colors duration-200">
                  Dignitaries on Dais &amp; Committees
                </Link>
              </li>
              <li>
                <Link href="/awards" className="hover:text-white transition-colors duration-200">
                  Medals &amp; Roll of Honour
                </Link>
              </li>
              <li>
                <Link href="/graduates" className="hover:text-white transition-colors duration-200">
                  Graduate &amp; Ph.D Directory (985)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h5 className="text-white font-sans font-bold text-sm uppercase tracking-widest">
              Resources &amp; Downloads
            </h5>
            <ul className="space-y-2.5 text-[13px] text-slate-400 font-medium">
              <li>
                <Link href="/#schedule" className="hover:text-white transition-colors duration-200">
                  Order of Ceremony &amp; Timetable
                </Link>
              </li>
              <li>
                <Link href="/wdc" className="hover:text-white transition-colors duration-200">
                  Web Development Cell (WDC)
                </Link>
              </li>
              <li>
                <a href="https://www.nitp.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 inline-flex items-center space-x-1.5 group">
                  <span>Official Institute Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map */}
          <div className="space-y-4">
            <h5 className="text-white font-sans font-bold text-sm uppercase tracking-widest">
              Location
            </h5>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/80 shadow-lg group bg-slate-900">
              <iframe
                title="NIT Patna Location Map"
                src="https://maps.google.com/maps?q=National%20Institute%20of%20Technology%20Patna,%20Ashok%20Rajpath,%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105 opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-2.5 left-2.5 z-10">
                <a
                  href="https://maps.google.com/?q=National+Institute+of+Technology+Patna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-white/95 hover:bg-white text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200 cursor-pointer"
                >
                  <MapPin className="w-3 h-3 text-red-600" />
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
            {/* <p className="text-[12px] text-slate-400 leading-snug">
              NIT Patna, Ashok Rajpath, Mahendru, Patna, Bihar &ndash; 800 005
            </p> */}
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] sm:text-xs text-slate-500 gap-4 font-medium tracking-wide">
          <div>
            &copy; 2026 National Institute of Technology Patna. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/wdc" className="hover:text-blue-400 transition-colors">
              Designed &amp; Developed by Web Development Cell (WDC), NIT Patna
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
