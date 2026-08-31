import Link from "next/link";
import React from "react";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
      {/* Top Navbar */}
      <header className="h-16 bg-primary text-white shadow-md flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center space-x-4">
          <div className="w-9 h-9 bg-white rounded-full p-0.5 flex items-center justify-center shadow-inner shrink-0">
            <img src="/logo.png" alt="NIT Patna Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-lg font-serif tracking-wide hidden sm:block">
            Student Portal - XIV Convocation
          </h1>
        </div>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Public Site</Link>
          <button className="bg-white text-primary px-3 py-1.5 rounded shadow-sm hover:bg-gray-100 transition-colors">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-4xl">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-500 shrink-0">
        &copy; {new Date().getFullYear()} National Institute of Technology Patna. All Rights Reserved.
      </footer>
    </div>
  );
}
