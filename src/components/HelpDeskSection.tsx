"use client";

import React from "react";
import { Briefcase, Mail, Phone, Users, ShieldCheck, MapPin } from "lucide-react";

export default function HelpDeskSection() {
  return (
    <section id="helpdesk" className="pt-20 sm:pt-24 pb-20 sm:pb-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-slate-900 tracking-tight">
            Help Desk &amp; Committee Contacts
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
            Assistance for graduating students, dignitaries, and attending family members during the 14th Convocation Ceremony.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Registration & MIS */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-xs">
                  <Mail className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-700 tracking-wider block">Sub-Committee</span>
                  <h3 className="font-sans font-bold text-xl text-slate-900">
                    Registration &amp; MIS
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                For issues regarding student registration, attendance verification, or digital QR entry passes:
                <br />
                <span className="text-slate-800 font-semibold mt-1 block">itteam[at]nitp.ac.in</span>
                <span className="text-slate-500 text-xs block mt-1">Convenor: Dr. B. Balaji Naik | MIS: Shri Akash Kumar</span>
              </p>
            </div>
            <div className="bg-blue-50/70 rounded-2xl px-4 py-3.5 w-full border border-blue-100">
              <span className="text-blue-900 text-xs sm:text-sm font-bold tracking-wide flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-700" />
                Phone: +91-612-2371715 (Ext. 240)
              </span>
            </div>
          </div>

          {/* Card 2: Degree & Stole Management */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-600 transition-all duration-300 shadow-xs">
                  <Briefcase className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-amber-700 tracking-wider block">Examination Cell</span>
                  <h3 className="font-sans font-bold text-xl text-slate-900">
                    Degree Preparation
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                For degree folders, stole distribution, medals sequence, or rehearsal schedule queries:
                <br />
                <span className="text-slate-800 font-semibold mt-1 block">academic-office[at]nitp.ac.in</span>
                <span className="text-slate-500 text-xs block mt-1">Convenor: Dr. B.C. Sahana | Dy. Registrar: Mrs. Bobby</span>
              </p>
            </div>
            <div className="bg-amber-50/70 rounded-2xl px-4 py-3.5 w-full border border-amber-100">
              <span className="text-amber-900 text-xs sm:text-sm font-bold tracking-wide flex items-center">
                <Phone className="w-4 h-4 mr-2 text-amber-700" />
                Phone: +91-612-2371920 (Ext. 115)
              </span>
            </div>
          </div>

          {/* Card 3: Accommodation & Venue */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300 shadow-xs">
                  <MapPin className="w-6 h-6 text-indigo-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-indigo-700 tracking-wider block">Campus Facility</span>
                  <h3 className="font-sans font-bold text-xl text-slate-900">
                    Venue &amp; Logistics
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                For guest reception, campus transport from Patna Junction / Airport, and hostel accommodation:
                <br />
                <span className="text-slate-800 font-semibold mt-1 block">chiefwardenoffice[at]nitp.ac.in</span>
                <span className="text-slate-500 text-xs block mt-1">Venue: Dr. M. Haque | Transport: Dr. Bambam Kumar</span>
              </p>
            </div>
            <div className="bg-indigo-50/70 rounded-2xl px-4 py-3.5 w-full border border-indigo-100">
              <span className="text-indigo-900 text-xs sm:text-sm font-bold tracking-wide flex items-center">
                <Phone className="w-4 h-4 mr-2 text-indigo-700" />
                Phone: +91-612-2371715 (General)
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
