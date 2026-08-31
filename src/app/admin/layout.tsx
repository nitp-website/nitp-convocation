import Link from "next/link";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col shadow-xl z-10 hidden md:flex">
        <div className="p-6 flex items-center space-x-3 border-b border-white/10">
          <div className="w-9 h-9 bg-white rounded-full p-0.5 flex items-center justify-center shadow-md shrink-0">
            <img src="/logo.png" alt="NIT Patna Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-serif text-xl font-bold tracking-wider">Admin Panel</span>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto text-sm font-medium">
          <p className="px-4 text-xs text-gray-300 uppercase tracking-wider mb-2 mt-4">Core</p>
          <Link href="/admin" className="block px-4 py-2.5 rounded-md bg-white/10 text-accent">
            Dashboard
          </Link>
          <Link href="/admin/convocations" className="block px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
            Convocations
          </Link>
          <Link href="/admin/students" className="block px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
            Students & Degrees
          </Link>
          <Link href="/admin/registrations" className="block px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
            Registrations
          </Link>
          
          <p className="px-4 text-xs text-gray-300 uppercase tracking-wider mb-2 mt-6">Operations</p>
          <Link href="/admin/passes" className="block px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
            Passes & Seating
          </Link>
          <Link href="/admin/awards" className="block px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
            Awards & Honours
          </Link>
          <Link href="/admin/attendance" className="block px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
            Event Attendance
          </Link>

          <p className="px-4 text-xs text-gray-300 uppercase tracking-wider mb-2 mt-6">System</p>
          <Link href="/admin/users" className="block px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
            Access Management
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10 text-xs text-gray-300">
          Logged in as <br/>
          <span className="font-bold text-white">Super Admin</span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 border-b border-gray-200 shrink-0">
          <h2 className="text-lg font-bold text-primary">XIV Convocation 2025</h2>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-500 hover:text-primary">Support</button>
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
