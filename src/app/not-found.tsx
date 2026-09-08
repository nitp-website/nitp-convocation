"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileQuestion, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col font-sans text-slate-900">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6 pt-36 pb-12">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/90 text-center space-y-6 relative overflow-hidden group">
          {/* Progress bar line at the top */}
          <div 
            className="absolute top-0 left-0 h-1.5 bg-amber-500 transition-all duration-1000 ease-linear" 
            style={{ width: `${((5 - countdown) / 5) * 100}%` }} 
          />
          
          <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto text-amber-600 shadow-sm border border-amber-100 group-hover:scale-105 transition-transform">
            <FileQuestion className="w-10 h-10" />
          </div>
          
          <div className="space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
              Error 404
            </span>
            <h1 className="text-3xl font-serif font-bold text-slate-900">Page Not Found</h1>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
              We couldn&apos;t find the convocation archive or page you were looking for. The link might be broken or that edition doesn&apos;t exist yet.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-500 mb-5 flex justify-center items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Redirecting to the latest Convocation in <span className="text-slate-800 font-extrabold bg-slate-100 px-2 py-0.5 rounded-md">{countdown}</span> seconds
            </p>
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200 shadow-sm"
            >
              <span>Return to Home Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
