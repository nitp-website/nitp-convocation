"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t-[4px] border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shadow-md shrink-0">
                <img
                  src="/logo.png"
                  alt="Institute Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-sans font-bold text-white text-base leading-tight tracking-wide">
                  National Institute of Technology Patna
                </h4>
                <p className="text-[11px] text-blue-400 font-bold tracking-widest uppercase mt-0.5">
                  NIT Patna
                </p>
              </div>
            </div>
            <p className="text-[13px] text-slate-400 leading-relaxed font-sans">
              An Institution of National Importance under the Ministry of Education, Government of India.
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
                  Home
                </Link>
              </li>
              <li>
                <Link href="/graduates" className="hover:text-white transition-colors duration-200">
                  Search Graduate Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h5 className="text-white font-sans font-bold text-sm uppercase tracking-widest">
              Resources
            </h5>
            <ul className="space-y-2.5 text-[13px] text-slate-400 font-medium">
              <li>
                <a href="https://www.nitp.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 inline-flex items-center space-x-1.5 group">
                  <span>Official Institute Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h5 className="text-white font-sans font-bold text-sm uppercase tracking-widest">
              Contact
            </h5>
            <div className="space-y-3 text-[13px] text-slate-400">
              <p className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:convocation@nitp.ac.in" className="hover:text-white transition-colors duration-200 font-medium">convocation@nitp.ac.in</a>
              </p>
              <p className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="font-medium">+91 612 237 1715</span>
              </p>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Ashok Rajpath, Mahendru<br />
                  Patna, Bihar — 800005, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] sm:text-xs text-slate-500 gap-4 font-medium tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} National Institute of Technology Patna. All Rights Reserved.
          </p>
          <p className="text-slate-400">
            Developed by{" "}
            <Link 
              href="/wdc" 
              className="text-slate-200 hover:text-white font-semibold underline underline-offset-4 decoration-blue-500/40 hover:decoration-blue-400 transition-colors"
            >
              WDC, NIT Patna
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
