"use client";
import { useConvocation } from "@/context/ConvocationContext";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ExternalLink, Download, MapPin, GlobeIcon } from "lucide-react";

export default function Footer() {
  const convocationCtx = useConvocation();
  const year = "2025";
  const data = convocationCtx?.data;
  const INSTITUTE_INFO = data?.info?.INSTITUTE_INFO || { editionRoman: "XIV Convocation", nirfRank: "53rd in India (Engineering - NIRF 2025)" };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t-[4px] border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Institutional Identity */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="flex flex-col items-center text-center md:items-center lg:items-center">
              <Image
                src="/logo.png"
                alt="NIT Patna Logo"
                width={96}
                height={96}
                className="w-24 h-24 mb-4"
              />
              <div className="space-y-2">
                <p className="font-medium text-center">National Institute of Technology Patna</p>
                <p className="text-sm text-gray-300 text-center">Ashok Rajpath, Mahendru, Patna, Bihar 800005</p>
                <div className="space-y-1 mt-4 pl-[75px]">
                  {/* <p className="flex items-center gap-2 text-sm">
                    <PhoneIcon className="w-4 h-4" /> 0612-2371715
                  </p> */}
                  {/* <p className="flex items-center gap-2 text-sm">
                    <MailIcon className="w-4 h-4" /> info@nitp.ac.in
                  </p> */}
                  <p className="flex items-center gap-2 text-sm">
                    <GlobeIcon className="w-4 h-4" /> www.nitp.ac.in
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://twitter.com/NITPatna1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/nit-patna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/NITPatna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </a>
                  <a href="https://goo.gl/maps/srZ6whpfDGqg85sp6" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <MapPin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
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
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-[13px] text-slate-400 font-medium">
              <li>
                <Link href="/#schedule" className="hover:text-white transition-colors duration-200">
                  Order of Ceremony &amp; Timetable
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Login
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
