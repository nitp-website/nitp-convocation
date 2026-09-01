"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Awardees", href: "/#awardees" },
    { name: "Help Desk", href: "/#helpdesk" },
    { name: "Graduates", href: "/graduates" },
  ];

  const isActive = (path: string) => {
    // Basic implementation: Since this is a static site without scrollspy yet, 
    // we only highlight Home and Graduates properly.
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && !path.includes("#") && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-white/80 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5 rounded-2xl mx-auto max-w-7xl transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Institute Logo and Bilingual Brand */}
          <Link href="/" className="flex items-center space-x-3.5 group cursor-pointer">
            {/* Institute Emblem Logo from public/logo.png */}
            <div className="relative w-14 h-14 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
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
                Convocation 2025
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
                  className={`transition-colors duration-200 cursor-pointer font-medium relative py-1 ${
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
        </div>
      )}
    </header>
  );
}
