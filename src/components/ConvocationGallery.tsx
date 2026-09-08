"use client";
import { useConvocation } from "@/context/ConvocationContext";

import React, { useState } from "react";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Award, Sparkles } from "lucide-react";

interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  aspect: string;
  themeColor: string;
  svgScene: "medal" | "carpet" | "procession" | "podium" | "citation" | "female_medal" | "hall";
}

export default function ConvocationGallery() {
  const { data, year } = useConvocation();
  const { INSTITUTE_INFO } = data?.info || { INSTITUTE_INFO: { editionRoman: "Convocation", date: "" } };

  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const galleryItems: GalleryPhoto[] = [
    {
      id: 1,
      title: "Conferral of Gold Medal to Academic Topper",
      category: "Awards & Honours",
      aspect: "aspect-[4/3]",
      themeColor: "from-amber-700/80 to-amber-900/90",
      svgScene: "medal",
    },
    {
      id: 2,
      title: "Grand Ceremonial Entrance & Red Carpet",
      category: "Campus & Ambience",
      aspect: "aspect-[4/3]",
      themeColor: "from-rose-700/80 to-rose-900/90",
      svgScene: "carpet",
    },
    {
      id: 3,
      title: "Academic Procession of Dignitaries & Senate",
      category: "Dignitaries on Dais",
      aspect: "aspect-[4/3]",
      themeColor: "from-blue-800/80 to-indigo-950/90",
      svgScene: "procession",
    },
    {
      id: 4,
      title: "Inspiring Convocation Address at the Dais",
      category: "Ceremony Keynote",
      aspect: "aspect-[4/3]",
      themeColor: "from-amber-600/80 to-orange-800/90",
      svgScene: "podium",
    },
    {
      id: 5,
      title: "Presentation of Institute Memento to Chief Guest",
      category: "Ceremony Highlights",
      aspect: "aspect-[4/3]",
      themeColor: "from-slate-800/80 to-slate-950/90",
      svgScene: "citation",
    },
    {
      id: 6,
      title: "Conferral of Degrees & Certificates",
      category: "Degree Conferral",
      aspect: "aspect-[4/3]",
      themeColor: "from-red-800/80 to-maroon-950/90",
      svgScene: "female_medal",
    },
    {
      id: 7,
      title: "Assembly of Graduating Batch & Faculty",
      category: "Convocation Hall",
      aspect: "aspect-[4/3]",
      themeColor: "from-indigo-900/80 to-slate-950/90",
      svgScene: "hall",
    },
    {
      id: 8,
      title: "Celebratory Moments of the Class of {year}",
      category: "Graduation Joy",
      aspect: "aspect-[4/3]",
      themeColor: "from-amber-700/80 to-orange-950/90",
      svgScene: "medal",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Image 2 */}
        <div className="text-center mb-14 space-y-4">
          <span className="block text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-[0.25em]">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black text-slate-950">
            Convocation Moments
          </h2>
          <div className="flex justify-center pt-2">
            <span className="w-24 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-red-600 rounded-full" />
          </div>
        </div>

        {/* 8-Photo Grid matching Image 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/80 bg-slate-100 aspect-[4/3]"
            >
              {/* Dynamic Photo Scene Rendering */}
              <GalleryScene scene={photo.svgScene} title={photo.title} />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {photo.category}
                </span>
                <h4 className="text-sm font-semibold leading-tight line-clamp-2 mt-0.5">
                  {photo.title}
                </h4>
                <div className="flex items-center space-x-1 text-[11px] text-slate-300 mt-2">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-white/20 aspect-[16/10] shadow-2xl">
              <GalleryScene scene={galleryItems[selectedPhoto].svgScene} title={galleryItems[selectedPhoto].title} isLarge />
            </div>

            <div className="flex justify-between items-center text-white px-2">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {galleryItems[selectedPhoto].category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-serif">
                  {galleryItems[selectedPhoto].title}
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedPhoto((prev) => (prev! > 0 ? prev! - 1 : galleryItems.length - 1))}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedPhoto((prev) => (prev! < galleryItems.length - 1 ? prev! + 1 : 0))}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryScene({ scene, title, isLarge = false }: { scene: string; title: string; isLarge?: boolean }) {
  const { data, year } = useConvocation();
  const { INSTITUTE_INFO } = data?.info || { INSTITUTE_INFO: { editionRoman: "XIV Convocation", date: "" } };

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      {scene === "medal" && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="bgMedal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF8F0" />
              <stop offset="100%" stopColor="#F5E8D6" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bgMedal)" />
          {/* Banner in background */}
          <rect x="20" y="20" width="360" height="60" fill="#9C2626" rx="8" opacity="0.1" />
          <text x="200" y="55" fill="#9C2626" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="serif">
            {INSTITUTE_INFO.editionRoman} • NATIONAL INSTITUTE OF TECHNOLOGY
          </text>
          {/* Dignitary (Left) */}
          <path d="M70 300 C70 200 110 170 170 170 C190 170 210 185 220 230 Z" fill="#1E293B" />
          <circle cx="150" cy="130" r="30" fill="#FDE68A" />
          {/* Stole on Dignitary */}
          <path d="M135 170 L135 280 L145 280 L145 170 Z M165 170 L165 280 L175 280 L175 170 Z" fill="#F59E0B" />
          {/* Degree Folder Handover */}
          <polygon points="190,190 270,170 280,240 200,260" fill="#1E3A8A" />
          <text x="235" y="220" fill="#FBBF24" fontSize="10" fontWeight="bold" textAnchor="middle">DEGREE</text>
          {/* Student Recipient (Right) */}
          <path d="M330 300 C330 200 290 170 240 170 C220 170 205 185 200 230 Z" fill="#FFFDF8" stroke="#E2E8F0" />
          <circle cx="260" cy="130" r="28" fill="#FDE68A" />
          {/* Convocation Stole on student */}
          <path d="M245 170 L245 280 L255 280 L255 170 Z M270 170 L270 280 L280 280 L280 170 Z" fill="#DC2626" />
          {/* Gold Medal on student neck */}
          <circle cx="260" cy="200" r="10" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
        </svg>
      )}

      {scene === "carpet" && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="carpetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#991B1B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="#0F172A" />
          {/* Perspective Archway Ceiling */}
          <polygon points="50,0 350,0 300,100 100,100" fill="#D97706" opacity="0.3" />
          <polygon points="100,100 300,100 250,160 150,160" fill="#D97706" opacity="0.5" />
          {/* Flower Garlands & Hanging Lights */}
          <circle cx="100" cy="50" r="10" fill="#F59E0B" />
          <circle cx="200" cy="40" r="12" fill="#FBBF24" />
          <circle cx="300" cy="50" r="10" fill="#F59E0B" />
          {/* Red Carpet */}
          <polygon points="160,160 240,160 380,300 20,300" fill="url(#carpetGrad)" />
          {/* Side Floral Planters */}
          <rect x="10" y="220" width="30" height="80" fill="#166534" rx="5" />
          <rect x="360" y="220" width="30" height="80" fill="#166534" rx="5" />
          <text x="200" y="270" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="serif" opacity="0.8">
            NIT PATNA CONVOCATION
          </text>
        </svg>
      )}

      {scene === "procession" && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <rect width="400" height="300" fill="#1E293B" />
          {/* Stage Backing with Year 2025 */}
          <text x="200" y="70" fill="#F59E0B" fontSize="24" fontWeight="bold" textAnchor="middle" fontFamily="serif">
            {INSTITUTE_INFO.editionRoman}
          </text>
          {/* Dignitaries Standing in Row */}
          {[60, 130, 200, 270, 340].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="140" r="18" fill="#FDE68A" />
              <path d={`M${x - 20} 300 C${x - 20} 200 ${x - 10} 180 ${x} 180 C${x + 10} 180 ${x + 20} 200 ${x + 20} 300 Z`} fill="#0F172A" />
              {/* Golden ceremonial stole */}
              <path d={`M${x - 8} 180 L${x - 8} 270 L${x - 2} 270 L${x - 2} 180 Z M${x + 2} 180 L${x + 2} 270 L${x + 8} 270 L${x + 8} 180 Z`} fill={i % 2 === 0 ? "#F59E0B" : "#DC2626"} />
            </g>
          ))}
        </svg>
      )}

      {scene === "podium" && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <rect width="400" height="300" fill="#FFFDF8" />
          {/* Backdrop Graphic */}
          <circle cx="320" cy="100" r="60" fill="#E0F2FE" />
          <text x="320" y="110" fill="#0284C7" fontSize="28" fontWeight="bold" textAnchor="middle">{year}</text>
          {/* Speaker at Podium */}
          <circle cx="180" cy="100" r="22" fill="#FDE68A" />
          <path d="M140 220 C140 140 160 130 180 130 C200 130 220 140 220 220 Z" fill="#1E293B" />
          {/* Floral Bouquet on Podium */}
          <path d="M100 180 Q180 150 260 180 L240 300 L120 300 Z" fill="#78350F" />
          <circle cx="140" cy="170" r="14" fill="#EF4444" />
          <circle cx="170" cy="165" r="16" fill="#F59E0B" />
          <circle cx="200" cy="165" r="15" fill="#FFFFFF" stroke="#E2E8F0" />
          <circle cx="225" cy="170" r="14" fill="#EF4444" />
          {/* Microphones */}
          <line x1="165" y1="140" x2="175" y2="120" stroke="#000000" strokeWidth="2.5" />
          <line x1="195" y1="140" x2="185" y2="120" stroke="#000000" strokeWidth="2.5" />
        </svg>
      )}

      {scene === "citation" && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <rect width="400" height="300" fill="#991B1B" />
          {/* Stage Lighting & Dignitaries Group */}
          <text x="200" y="60" fill="#FEF08A" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="serif">
            PRESENTATION OF INSTITUTIONAL CITATION
          </text>
          {/* 3 Dignitaries handing memento */}
          <g>
            <circle cx="130" cy="130" r="20" fill="#FDE68A" />
            <path d="M100 300 C100 190 120 170 140 170 C150 170 160 180 160 300 Z" fill="#1E293B" />
            <circle cx="200" cy="130" r="22" fill="#FDE68A" />
            <path d="M170 300 C170 190 190 170 210 170 C220 170 230 180 230 300 Z" fill="#0F172A" />
            <circle cx="270" cy="130" r="20" fill="#FDE68A" />
            <path d="M240 300 C240 190 260 170 280 170 C290 170 300 180 300 300 Z" fill="#1E293B" />
            {/* Glowing Golden Trophy / Memento in center */}
            <polygon points="185,180 215,180 210,230 190,230" fill="#F59E0B" />
            <circle cx="200" cy="175" r="12" fill="#FBBF24" />
          </g>
        </svg>
      )}

      {scene === "female_medal" && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <rect width="400" height="300" fill="#F8FAFC" />
          {/* Dignitary & Female Graduate */}
          <g>
            {/* Dignitary on Right */}
            <circle cx="270" cy="120" r="24" fill="#FDE68A" />
            <path d="M230 300 C230 180 250 160 270 160 C290 160 310 180 310 300 Z" fill="#1E293B" />
            <path d="M260 160 L260 280 L266 280 L266 160 Z M276 160 L276 280 L282 280 L282 160 Z" fill="#F59E0B" />
            {/* Female Student on Left */}
            <circle cx="130" cy="120" r="22" fill="#FDE68A" />
            <path d="M100 300 C100 180 120 160 140 160 C150 160 160 180 160 300 Z" fill="#FFFDF8" stroke="#E2E8F0" />
            <path d="M125 160 L125 280 L130 280 L130 160 Z M138 160 L138 280 L143 280 L143 160 Z" fill="#991B1B" />
            {/* Gold Medal and Certificate */}
            <polygon points="160,180 240,180 235,250 165,250" fill="#FFFFFF" stroke="#D97706" strokeWidth="3" />
            <circle cx="200" cy="205" r="8" fill="#F59E0B" />
          </g>
        </svg>
      )}

      {scene === "hall" && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <rect width="400" height="300" fill="#0B1329" />
          {/* Stage in Background */}
          <polygon points="50,100 350,100 380,180 20,180" fill="#1E293B" />
          <rect x="120" y="60" width="160" height="40" fill="#9C2626" rx="4" />
          <text x="200" y="85" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">NIT PATNA AUDITORIUM</text>
          {/* Audience / Graduates Rows */}
          {[190, 225, 260].map((y, rowIdx) => (
            <g key={rowIdx}>
              {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, colIdx) => (
                <circle key={colIdx} cx={x} cy={y} r="10" fill={colIdx % 2 === 0 ? "#FDE68A" : "#FBBF24"} />
              ))}
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}
