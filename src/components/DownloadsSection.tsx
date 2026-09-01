"use client";

import React from "react";
import { FileText, Download, FileJson } from "lucide-react";

export default function DownloadsSection() {
  const documents = [
    {
      id: 1,
      title: "Official Programme",
      description: "Detailed minute-by-minute ceremonial order and schedule.",
      type: "PDF",
      size: "2.4 MB",
      url: "#",
    },
    {
      id: 2,
      title: "Convocation Invitation",
      description: "Official invitation letter from the Director.",
      type: "PDF",
      size: "1.1 MB",
      url: "#",
    },
    {
      id: 3,
      title: "Guidelines & Instructions",
      description: "Important instructions regarding dress code and seating.",
      type: "PDF",
      size: "800 KB",
      url: "#",
    },
    {
      id: 4,
      title: "Convocation Souvenir",
      description: "Draft souvenir containing lists of graduates and medalists.",
      type: "PDF",
      size: "15.6 MB",
      url: "#",
    },
  ];

  return (
    <section id="downloads" className="py-20 sm:py-24 bg-white text-slate-900 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Downloads
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Official documents, guidelines, and souvenir drafts.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-blue-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 leading-tight mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  {doc.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                <span className="text-xs font-semibold text-slate-500 flex items-center">
                  {doc.type} &middot; {doc.size}
                </span>
                <a
                  href={doc.url}
                  className="inline-flex items-center space-x-1.5 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
