"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function FlashNews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const newsItems = [
    "XXIII Convocation 2025 Photograph Link.",
    "XXII Convocation 2024 Photograph Link.",
    "XXIV Convocation 2026 Photograph Link.",
    "Important Notice regarding Registration Deadline.",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8 relative z-20">
      <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-lg shadow-slate-200/40 rounded-2xl flex items-center h-14 relative overflow-hidden pr-2">
        
        {/* Left section: FLASH NEWS label & Left Arrow */}
        <div className="flex items-center h-full bg-blue-50/80 px-3 sm:px-5 shrink-0 z-10 border-r border-blue-100/80">
          <button 
            onClick={scrollLeft}
            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white transition-colors duration-200 shrink-0 mr-3 border border-blue-100 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse hidden sm:block"></div>
            <span className="text-blue-900 font-extrabold text-[11px] sm:text-xs tracking-[0.2em] uppercase whitespace-nowrap hidden sm:block">
              Flash News
            </span>
          </div>
        </div>

        {/* Scrolling/Draggable Content */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 h-full overflow-x-auto hide-scrollbar flex items-center scroll-smooth px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex items-center space-x-14 whitespace-nowrap min-w-max">
            {newsItems.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                <span className="text-red-500 font-bold text-lg leading-none transition-transform group-hover:rotate-90 duration-300">+</span>
                <Link href="#" className="text-slate-600 group-hover:text-blue-700 text-[13px] font-semibold transition-colors duration-200">
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right section: Right Arrow */}
        <div className="h-full flex items-center bg-gradient-to-l from-white via-white/90 to-transparent pl-10 pr-3 shrink-0 z-10 absolute right-0">
          <button 
            onClick={scrollRight}
            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white transition-colors duration-200 shrink-0 border border-blue-100 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
