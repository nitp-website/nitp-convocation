"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import { ChevronDown, ExternalLink, Calendar, Check, History } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useConvocation } from "@/context/ConvocationContext";

interface ConvocationArchiveItem {
  year: string;
  edition: string;
  editionRoman: string;
  date: string;
  isCurrent?: boolean;
  externalLink?: string;
}

const ARCHIVE_EDITIONS: ConvocationArchiveItem[] = [
  {
    year: "2025",
    edition: "14th Convocation",
    editionRoman: "XIV",
    date: "Dec 27, 2025",
    isCurrent: true,
  },
  {
    year: "2024",
    edition: "13th Convocation",
    editionRoman: "XIII",
    date: "Dec 28, 2024",
    isCurrent: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [archiveDropdownOpen, setArchiveDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const params = useParams();
  const router = useRouter();
  const { data, year: ctxYear } = useConvocation();

  const activeYear = typeof params?.year === "string" 
    ? params.year 
    : (ctxYear || "2025");

  // Determine section to preserve across year switches (e.g. /graduates, /awards, /dignitaries)
  const getSubSection = () => {
    if (!pathname) return "";
    const clean = pathname.replace(/^\/(2024|2025|archive\/\d+)/, "");
    return clean.startsWith("/") ? clean : clean ? `/${clean}` : "";
  };

  const getTargetUrlForYear = (targetYear: string) => {
    const subSection = getSubSection();
    if (targetYear === "2025") {
      return subSection ? `/2025${subSection}` : "/";
    }
    return `/${targetYear}${subSection}`;
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setArchiveDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { 
      name: "Home", 
      href: activeYear === "2025" ? "/" : `/${activeYear}` 
    },
    { 
      name: "Dignitaries", 
      href: activeYear === "2025" ? "/dignitaries" : `/${activeYear}/dignitaries` 
    },
    { 
      name: "Medals & Honours", 
      href: activeYear === "2025" ? "/awards" : `/${activeYear}/awards` 
    },
    { 
      name: "Graduate Directory", 
      href: activeYear === "2025" ? "/graduates" : `/${activeYear}/graduates` 
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" || path === `/${activeYear}`) {
      return pathname === "/" || pathname === `/${activeYear}`;
    }
    return pathname === path;
  };

  const currentEditionDisplay = activeYear === "2024" 
    ? '"XIII Convocation 2024"' 
    : '"XIV Convocation 2025"';

  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-white/75 backdrop-blur-xl border border-white/50 shadow-lg shadow-black/5 rounded-2xl mx-auto max-w-7xl transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Institute Logo and Bilingual Brand */}
          <Link 
            href={activeYear === "2025" ? "/" : `/${activeYear}`} 
            className="flex items-center space-x-3.5 group cursor-pointer"
          >
            {/* Institute Emblem Logo */}
            <div className="relative w-14 h-14 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="NIT Patna Crest"
                fill
                className="object-contain"
                sizes="56px"
                priority
              />
            </div>

            {/* Institution Typography */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                राष्ट्रीय प्रौद्योगिकी संस्थान पटना
              </span>
              <span className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-tight">
                National Institute of Technology Patna
              </span>
              <span className="text-[10px] text-amber-800 font-bold tracking-wider uppercase flex items-center space-x-1">
                <span>{currentEditionDisplay}</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-[14px] font-semibold text-slate-700">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 cursor-pointer relative py-1 ${
                    active
                      ? "text-blue-700 font-bold"
                      : "text-slate-700 hover:text-blue-700"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Previous Convocations Dropdown (Desktop) */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setArchiveDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[13px] font-bold tracking-wide transition-all cursor-pointer ${
                  archiveDropdownOpen
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-slate-100/80 hover:bg-slate-200/80 text-slate-800 border-slate-200"
                }`}
                aria-haspopup="true"
                aria-expanded={archiveDropdownOpen}
              >
                <History className="w-3.5 h-3.5 text-amber-600" />
                <span>PREVIOUS CONVOCATIONS</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${archiveDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Enhanced Dropdown Menu inspired by IIT Delhi */}
              {archiveDropdownOpen && (
                <div className="absolute right-0 mt-3 w-88 sm:w-96 bg-slate-950/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl border border-slate-800 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3.5 py-2 text-[10px] font-bold tracking-widest uppercase text-amber-400 flex items-center justify-between border-b border-slate-800/80 mb-1.5">
                    <span>Convocation Editions</span>
                    <span className="text-[10px] text-slate-500 font-medium">Select Year</span>
                  </div>

                  <div className="space-y-1">
                    {ARCHIVE_EDITIONS.map((item) => {
                      const isSelected = activeYear === item.year;
                      return (
                        <button
                          key={item.year}
                          onClick={() => {
                            setArchiveDropdownOpen(false);
                            router.push(getTargetUrlForYear(item.year));
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-all cursor-pointer group ${
                            isSelected
                              ? "bg-amber-500/15 border border-amber-500/35 text-white"
                              : "hover:bg-slate-800/70 border border-transparent text-slate-300 hover:text-white"
                          }`}
                        >
                          {/* Left: Year & Edition */}
                          <div className="flex items-center gap-2.5">
                            <span className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                              {item.year}
                            </span>
                            <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                              {item.edition}
                            </span>
                            {item.isCurrent && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30 whitespace-nowrap">
                                Current
                              </span>
                            )}
                          </div>

                          {/* Right: Date & Status */}
                          <div className="flex items-center gap-2.5 shrink-0">
                            <span className="text-xs text-slate-400 whitespace-nowrap font-medium flex items-center gap-1.5 font-mono">
                              <Calendar className="w-3.5 h-3.5 text-slate-500" />
                              {item.date}
                            </span>
                            <div className="w-4 h-4 flex items-center justify-center">
                              {isSelected && (
                                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/85 backdrop-blur-xl border-t border-slate-100/80 px-4 pt-3 pb-6 space-y-2 rounded-b-2xl shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  active ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Previous Convocations Archive Section */}
          <div className="pt-3 border-t border-slate-200/80 mt-2">
            <div className="px-4 pb-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <History className="w-3.5 h-3.5 text-amber-600" />
                <span>Previous Convocations</span>
              </span>
              <span className="text-[10px] text-slate-400 font-normal">Select Edition</span>
            </div>
            <div className="space-y-1 px-2">
              {ARCHIVE_EDITIONS.map((item) => {
                const isSelected = activeYear === item.year;
                return (
                  <button
                    key={item.year}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      router.push(getTargetUrlForYear(item.year));
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-amber-500/15 border border-amber-500/30 text-amber-900 font-semibold"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{item.year}</span>
                      <span className="text-xs text-slate-500">({item.edition})</span>
                      {item.isCurrent && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 font-bold">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 font-mono whitespace-nowrap">{item.date}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

