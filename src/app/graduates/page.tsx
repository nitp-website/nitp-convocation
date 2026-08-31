import React from "react";
import Link from "next/link";

export default function GraduatesDirectory() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-offwhite">
      {/* Header (Simplified for subpage) */}
      <header className="bg-primary text-white shadow-md py-4 px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary text-xs shadow-inner">
            NITP
          </div>
          <h1 className="text-xl font-serif text-white tracking-wide">
            XIV Convocation
          </h1>
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/graduates" className="text-accent transition-colors border-b-2 border-accent pb-1">Graduates</Link>
          <Link href="/awards" className="hover:text-accent transition-colors">Awards</Link>
        </nav>
      </header>

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary mb-3">Graduate Directory</h2>
          <p className="text-gray-600 max-w-2xl">
            Search the official directory of degree recipients for the 14th Convocation. You can filter by department, programme, or search directly by name and roll number.
          </p>
        </div>
      </div>

      {/* Search & Filters Area */}
      <main className="flex-1 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Search by Name or Roll Number..." 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>
          <div className="w-full md:w-64">
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm outline-none bg-white">
              <option>All Programmes</option>
              <option>B.Tech</option>
              <option>B.Arch</option>
              <option>M.Tech</option>
              <option>Ph.D</option>
            </select>
          </div>
          <div className="w-full md:w-64">
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm outline-none bg-white">
              <option>All Departments</option>
              <option>Computer Science & Engineering</option>
              <option>Civil Engineering</option>
              <option>Electrical Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Electronics & Communication</option>
              <option>Architecture & Planning</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Mock Student Cards based on PDF data */}
            {[
              { name: "Harsh Nandan Verma", roll: "2106216", prog: "B.Tech", dept: "Computer Science & Engineering", honor: "Director's Gold Medal" },
              { name: "Dhiresh Kumar", roll: "2323010", prog: "M.Tech", dept: "Civil Engineering", honor: "President's Gold Medal" },
              { name: "Shipra Verma", roll: "2330003", prog: "PGPAP", dept: "Architecture & Planning", honor: "Director's Gold Medal" },
              { name: "Ritika Kumari", roll: "2103049", prog: "B.Tech", dept: "Civil Engineering", honor: "K.N. Rohatgi Gold Medal" },
              { name: "Amit Kumar", roll: "2334008", prog: "M.Tech", dept: "Mechanical Engineering", honor: "Director's Gold Medal" },
              { name: "Padala Venkata Rama Reddy", roll: "2106136", prog: "B.Tech", dept: "Computer Science & Engineering", honor: null },
            ].map((student, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className="text-xs font-bold text-gray-400 font-mono tracking-wider">{student.roll}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{student.name}</h3>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">{student.prog}</p>
                  <p className="text-sm text-gray-600">{student.dept}</p>
                </div>
                {student.honor && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">
                      🏅 {student.honor}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 bg-white">Previous</button>
            <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-bold shadow-sm">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 bg-white">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 bg-white">3</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 bg-white">Next</button>
          </div>
        </div>
      </main>
    </div>
  );
}
