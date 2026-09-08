"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { 
  Menu, 
  X,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const params = useParams();
  const router = useRouter();
  const year = typeof params?.year === 'string' ? params.year : '2025';

  const navLinks = [
    { name: "Home", href: `/${year}` },
    { name: "Dignitaries", href: `/${year}/dignitaries` },
    { name: "Medals & Honours", href: `/${year}/awards` },
    { name: "Graduate Directory", href: `/${year}/graduates` },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg shadow-black/5 rounded-2xl mx-auto max-w-7xl transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Institute Logo and Bilingual Brand */}
          <Link href={`/${year}`} className="flex items-center space-x-3.5 group cursor-pointer">
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
                <span>{year === "2025" ? "XIV Convocation 2025" : "XIII Convocation 2024"}</span>
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
          </nav>
          {/* Edition Selector */}
          <div className="hidden lg:flex items-center space-x-3 border-l border-slate-200 pl-6 ml-2">
            <div className="relative group">
              <select 
                value={year}
                onChange={(e) => {
                  const newYear = e.target.value;
                  const currentPath = pathname.replace(`/${year}`, '') || '/';
                  router.push(`/${newYear}${currentPath === '/' ? '' : currentPath}`);
                }}
                className="appearance-none bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold py-2 pl-3 pr-8 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/30 cursor-pointer shadow-sm hover:bg-slate-100 transition-colors"
              >
                <option value="2025">14th Edition (2025)</option>
                <option value="2024">13th Edition (2024)</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>


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
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 rounded-b-2xl shadow-xl animate-in slide-in-from-top duration-200">
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

          {/* Mobile Edition Selector */}
          <div className="px-4 py-3 border-t border-slate-100 mt-2">
            <label className="text-xs font-bold text-slate-500 mb-1.5 block">Edition Archive</label>
            <div className="relative">
              <select 
                value={year}
                onChange={(e) => {
                  const newYear = e.target.value;
                  const currentPath = pathname.replace(`/${year}`, '') || '/';
                  setMobileMenuOpen(false);
                  router.push(`/${newYear}${currentPath === '/' ? '' : currentPath}`);
                }}
                className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold py-2.5 pl-3 pr-8 rounded-xl outline-none"
              >
                <option value="2025">14th Edition (2025)</option>
                <option value="2024">13th Edition (2024)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
