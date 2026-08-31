"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

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
                  राष्ट्रीय प्रौद्योगिकी संस्थान पटना
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              An Institution of National Importance under the Ministry of Education, Government of India.
            </p>
            <p className="text-xs text-slate-400">
              <strong>Campus:</strong> Ashok Rajpath, Mahendru, Patna, Bihar — 800005, India.
            </p>
          </div>

          {/* Column 2: Convocation Links */}
          <div className="space-y-3">
            <h5 className="text-white font-serif font-bold text-sm uppercase tracking-wider">
              Convocation 2025
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Convocation Home
                </Link>
              </li>
              <li>
                <Link href="/programme" className="hover:text-amber-400 transition-colors">
                  Ceremony Programme &amp; Schedule
                </Link>
              </li>
              <li>
                <Link href="/awards" className="hover:text-amber-400 transition-colors">
                  Medalists &amp; List of Awardees
                </Link>
              </li>
              <li>
                <Link href="/graduates" className="hover:text-amber-400 transition-colors">
                  Graduates Directory
                </Link>
              </li>
              <li>
                <Link href="/dignitaries" className="hover:text-amber-400 transition-colors">
                  Dignitaries on Dias
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Student & Administration Services */}
          <div className="space-y-3">
            <h5 className="text-white font-serif font-bold text-sm uppercase tracking-wider">
              Portals &amp; Verification
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/student" className="hover:text-amber-400 transition-colors">
                  Degree Recipient Portal Login
                </Link>
              </li>
              <li>
                <Link href="/student/pass" className="hover:text-amber-400 transition-colors">
                  Digital Entry QR Pass
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-amber-400 transition-colors">
                  Convocation Admin Panel
                </Link>
              </li>
              <li>
                <Link href="/admin/registrations" className="hover:text-amber-400 transition-colors">
                  Registration Approvals Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Help Desk & Inquiries */}
          <div className="space-y-3">
            <h5 className="text-white font-serif font-bold text-sm uppercase tracking-wider">
              Emergency &amp; Help Desk
            </h5>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                <strong>Email:</strong> <a href="mailto:convocation@nitp.ac.in" className="text-amber-400 hover:underline">convocation@nitp.ac.in</a>
              </p>
              <p>
                <strong>Help Desk:</strong> +91 612 237 1715
              </p>
              <p>
                <strong>Security Control:</strong> +91 612 237 0180
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                For in-person queries, visit the Academic Section Help Desk at Administrative Block.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} National Institute of Technology Patna. All Rights Reserved.
          </p>
          <p className="text-slate-400">
            Designed &amp; Developed for the 14th Convocation Ceremony
          </p>
        </div>

      </div>
    </footer>
  );
}
