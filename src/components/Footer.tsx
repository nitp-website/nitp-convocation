"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t-4 border-amber-500">
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
                <h4 className="font-serif font-bold text-white text-base leading-tight">
                  National Institute of Technology Patna
                </h4>
                <p className="text-[11px] text-amber-400/90 font-medium">
                  NIT Patna
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              An Institution of National Importance under the Ministry of Education, Government of India.
            </p>
          </div>

          {/* Column 2: Convocation Links */}
          <div className="space-y-3">
            <h5 className="text-white font-serif font-bold text-sm uppercase tracking-wider">
              Convocation
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#schedule" className="hover:text-amber-400 transition-colors">
                  Programme
                </Link>
              </li>
              <li>
                <Link href="/#awardees" className="hover:text-amber-400 transition-colors">
                  Awardees
                </Link>
              </li>
              <li>
                <Link href="/graduates" className="hover:text-amber-400 transition-colors">
                  Graduates
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-amber-400 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h5 className="text-white font-serif font-bold text-sm uppercase tracking-wider">
              Resources
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/#downloads" className="hover:text-amber-400 transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/#helpdesk" className="hover:text-amber-400 transition-colors">
                  Help Desk
                </Link>
              </li>
              <li>
                <a href="https://www.nitp.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors inline-flex items-center space-x-1">
                  <span>Official Institute Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h5 className="text-white font-serif font-bold text-sm uppercase tracking-wider">
              Contact
            </h5>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:convocation@nitp.ac.in" className="hover:text-amber-400">convocation@nitp.ac.in</a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5" />
                <span>+91 612 237 1715</span>
              </p>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  Ashok Rajpath, Mahendru<br />
                  Patna, Bihar — 800005, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} National Institute of Technology Patna. All Rights Reserved.
          </p>
          <p className="text-slate-400">
            Designed &amp; Developed by Web Development Cell, NIT Patna
          </p>
        </div>

      </div>
    </footer>
  );
}
