"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ShieldCheck
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Schedule", href: "/programme" },
    { name: "Awardees", href: "/awards" },
    { name: "Graduates List", href: "/graduates" },
    { name: "Help Desk", href: "/#helpdesk" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Institute Logo and Bilingual Brand */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            {/* Institute Emblem Logo from public/logo.png */}
            <div className="relative w-14 h-14 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="Institute Logo"
                className="w-full h-full object-contain"
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
              <span className="text-[10px] text-amber-700 font-semibold tracking-wider uppercase">
                14th Annual Convocation Ceremony
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-slate-700">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors font-medium relative py-1 ${
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

          {/* Right Action Button: Student Portal / Pass */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/student"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-semibold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md hover:from-blue-800 hover:to-indigo-900 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Student Pass</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  active ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/student"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-semibold px-4 py-2.5 rounded-xl text-sm shadow-sm w-full"
            >
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Student Portal & Pass</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
