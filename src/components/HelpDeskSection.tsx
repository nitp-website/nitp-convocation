"use client";

import React from "react";
import { Briefcase, Mail, Phone } from "lucide-react";

export default function HelpDeskSection() {
  return (
    <section id="helpdesk" className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="text-blue-700 text-xs font-bold uppercase tracking-widest">
            HELP DESK
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold text-slate-900 tracking-tight">
            Contact &amp; Support
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Accommodation */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group cursor-pointer">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900">
                  Accommodation
                </h3>
              </div>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                Contact the Office of the Chief Warden at<br />
                <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">chiefwardenoffice[at]nitp.ac.in</span>
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl px-4 py-3.5 w-full border border-amber-100/50 group-hover:bg-amber-100/50 transition-colors">
              <span className="text-amber-700 text-sm font-bold tracking-wide">
                Contact No: 0731-6603468
              </span>
            </div>
          </div>

          {/* Card 2: Registration */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group cursor-pointer">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <Mail className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900">
                  Registration
                </h3>
              </div>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                For registration issues, email <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">itteam[at]nitp.ac.in</span> or call the help desk.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl px-4 py-3.5 w-full border border-amber-100/50 group-hover:bg-amber-100/50 transition-colors">
              <span className="text-amber-700 text-sm font-bold tracking-wide">
                Contact No: 0731-6603540
              </span>
            </div>
          </div>

          {/* Card 3: General Support */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group cursor-pointer">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900">
                  General Support
                </h3>
              </div>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                For any other queries or assistance regarding Convocation, contact us at <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">academic-office[at]nitp.ac.in</span>
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl px-4 py-3.5 w-full border border-amber-100/50 group-hover:bg-amber-100/50 transition-colors">
              <span className="text-amber-700 text-sm font-bold tracking-wide">
                Contact No: 0731-6603405
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
