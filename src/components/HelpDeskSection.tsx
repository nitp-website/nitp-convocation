"use client";

import React from "react";
import { Briefcase, Mail, Phone } from "lucide-react";

export default function HelpDeskSection() {
  return (
    <section id="helpdesk" className="py-20 bg-[#F0F4F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-[#134e4a] text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-3">
            HELP DESK
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#0B1527] tracking-tight">
            Contact &amp; Support
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Accommodation */}
          <div className="bg-[#F6F7F9] rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#D9E2F2] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-[#1a365d]" />
                </div>
                <h3 className="font-sans font-bold text-lg text-slate-900">
                  Accommodation
                </h3>
              </div>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-6">
                Contact the Office of the Chief Warden at<br />
                <span className="text-slate-500">chiefwardenoffice[at]nitp.ac.in</span>
              </p>
            </div>
            <div className="bg-[#F3E6D0] rounded-lg px-4 py-3 w-full">
              <span className="text-[#96541D] text-xs font-bold">
                Contact No: 0731-6603468
              </span>
            </div>
          </div>

          {/* Card 2: Registration */}
          <div className="bg-[#F6F7F9] rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#D9E2F2] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#1a365d]" />
                </div>
                <h3 className="font-sans font-bold text-lg text-slate-900">
                  Registration
                </h3>
              </div>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-6">
                For registration issues, email itteam[at]nitp.ac.in or call the help desk.
              </p>
            </div>
            <div className="bg-[#F3E6D0] rounded-lg px-4 py-3 w-full">
              <span className="text-[#96541D] text-xs font-bold">
                Contact No: 0731-6603540
              </span>
            </div>
          </div>

          {/* Card 3: General Support */}
          <div className="bg-[#F6F7F9] rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#D9E2F2] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#1a365d]" />
                </div>
                <h3 className="font-sans font-bold text-lg text-slate-900">
                  General Support
                </h3>
              </div>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-6">
                For any other queries or assistance regarding Convocation, contact us at academic-office[at]nitp.ac.in
              </p>
            </div>
            <div className="bg-[#F3E6D0] rounded-lg px-4 py-3 w-full">
              <span className="text-[#96541D] text-xs font-bold">
                Contact No: 0731-6603405
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
