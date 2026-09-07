"use client";

import React from "react";
import { FileText, ScrollText, ShieldCheck } from "lucide-react";

export default function DownloadsSection() {
  const documents = [
    {
      id: 1,
      title: "Order of Ceremonial Programme",
      description: "Detailed minute-by-minute ceremonial order, academic procession protocol, and schedule of events for the ceremony.",
      type: "Official Notice",
      badge: "Ceremony Guide",
      icon: <ScrollText className="w-6 h-6 text-blue-600" />,
      actionText: "View Schedule",
      href: "/#schedule"
    },
    {
      id: 2,
      title: "Dress Code & Stole Guidelines",
      description: "Mandatory Indian formal attire specifications and stole colors (Maroon for Ph.D, Navy for PG, Golden Yellow for UG).",
      type: "Protocol",
      badge: "Dress Code",
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      actionText: "View Guidelines",
      href: "/graduates"
    },
    {
      id: 3,
      title: "Convocation Pledge (दीक्षान्त प्रतिज्ञा)",
      description: "The solemn national integration and professional ethics pledge taken by all graduating students.",
      type: "Solemn Oath",
      badge: "Ethics Oath",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      actionText: "Read Pledge",
      href: "/#schedule"
    },
  ];

  return (
    <section id="downloads" className="py-20 sm:py-24 bg-white text-slate-900 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Ceremonial Guidelines &amp; Protocols
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Official instructions, order of proceedings, dress code specifications, and the solemn convocation pledge.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-blue-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {doc.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    {doc.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 leading-snug mb-2 font-serif">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  {doc.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                <span className="text-xs font-semibold text-slate-500">
                  {doc.type}
                </span>
                <a
                  href={doc.href}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100 px-3.5 py-1.5 rounded-xl border border-blue-200/60 cursor-pointer"
                >
                  <span>{doc.actionText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
