"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  FileCheck, 
  Shirt, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  ShieldCheck
} from "lucide-react";

export default function HelpDeskSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the mandatory dress code for the Convocation?",
      a: "Male graduates: White/Off-white Kurta with Pyjama/Dhoti. Female graduates: White/Off-white Saree with red/golden border or Salwar-Kameez. The ceremonial institutional stole will be provided at the designated distribution counter upon showing your digital pass."
    },
    {
      q: "How do I download my digital entry pass and seat allocation?",
      a: "Log in to the Student Portal with your Institute Roll Number and registered password. Complete the verification steps to generate and download your entry QR pass."
    },
    {
      q: "Are accompanying parents/guests allowed inside the Main Auditorium?",
      a: "Each registered graduate is permitted up to two accompanying guests. Guests must carry photo ID proof and enter through Gate 2 into the upper viewing gallery."
    },
    {
      q: "When will the degree certificates be distributed to graduates?",
      a: "Medalists and Ph.D candidates receive degrees on stage from the Chief Guest and Director. All other degree recipients will receive their verified degree folders from departmental counters immediately following the closing ceremony."
    }
  ];

  return (
    <section id="helpdesk" className="py-16 sm:py-20 bg-[#F4F6F9] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ASSISTANCE &amp; GUIDELINES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Convocation Help Desk
          </h2>
          <p className="text-sm text-slate-600">
            Have questions regarding entry passes, ceremonial attire, timings, or guest seating? Our support cell is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Support Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Contact Support */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-serif font-bold text-lg text-slate-900">
                Convocation Support Cell
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Helpline</div>
                    <a href="mailto:convocation@nitp.ac.in" className="font-semibold text-blue-700 hover:underline">
                      convocation@nitp.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Academic Desk Numbers</div>
                    <div className="font-semibold text-slate-800">
                      +91 612 237 1715 / +91 612 237 0180
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Physical Help Desk Location</div>
                    <div className="font-semibold text-slate-800">
                      Academic Section, Administrative Block, NIT Patna
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Student Quick Pass Portal */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md space-y-3">
              <div className="flex items-center space-x-2 text-amber-300 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>DEGREE RECIPIENT PORTAL</span>
              </div>
              <h4 className="font-serif font-bold text-xl text-white">
                Verify Your Seating &amp; Digital QR Pass
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Log in with your roll number to confirm in-person attendance, register guest details, and download your entry barcode.
              </p>
              <Link
                href="/student"
                className="inline-flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all mt-2"
              >
                <span>Access Student Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-4">
              Frequently Asked Questions
            </h3>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left font-serif font-semibold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
