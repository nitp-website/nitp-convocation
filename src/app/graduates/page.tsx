"use client";

import React, { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Search, 
  GraduationCap, 
  Medal, 
  BookOpen, 
  FlaskConical, 
  Building2, 
  Sparkles, 
  UserCheck, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Copy,
  Check,
  Download
} from "lucide-react";

interface Graduate {
  name: string;
  roll: string;
  prog: string;
  dept: string;
  honor?: string | null;
  image?: string | null;
}

export default function GraduatesDirectory() {
  const [graduates, setGraduates] = useState<Graduate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "PHD" | "PG" | "UG" | "MEDALIST">("ALL");
  const [selectedDept, setSelectedDept] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState<Graduate | null>(null);
  const [copiedRoll, setCopiedRoll] = useState(false);
  const pageSize = 30;

  useEffect(() => {
    fetch("/data/graduates_all.json")
      .then((res) => res.json())
      .then((data: Graduate[]) => {
        setGraduates(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load graduates:", err);
        setLoading(false);
      });
  }, []);

  const departments = useMemo(() => {
    const set = new Set<string>();
    graduates.forEach((g) => {
      if (g.dept) set.add(g.dept);
    });
    return Array.from(set).sort();
  }, [graduates]);

  const filteredGraduates = useMemo(() => {
    return graduates.filter((student) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        student.name.toLowerCase().includes(q) ||
        student.roll.toLowerCase().includes(q) ||
        student.dept.toLowerCase().includes(q);

      let matchesCategory = true;
      if (selectedCategory === "PHD") {
        matchesCategory = student.prog === "Ph.D";
      } else if (selectedCategory === "PG") {
        matchesCategory = student.prog === "M.Tech" || student.prog === "M.Arch" || student.prog === "MURP";
      } else if (selectedCategory === "UG") {
        matchesCategory = student.prog === "B.Tech" || student.prog === "B.Arch";
      } else if (selectedCategory === "MEDALIST") {
        matchesCategory = Boolean(student.honor);
      }

      const matchesDept = selectedDept === "ALL" || student.dept === selectedDept;

      return matchesSearch && matchesCategory && matchesDept;
    });
  }, [graduates, searchQuery, selectedCategory, selectedDept]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedDept]);

  const totalPages = Math.ceil(filteredGraduates.length / pageSize);
  const paginatedGraduates = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredGraduates.slice(start, start + pageSize);
  }, [filteredGraduates, currentPage]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRoll(true);
    setTimeout(() => setCopiedRoll(false), 2000);
  };



  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-slate-900">
      {/* Unified Navbar */}
      <Navbar />

      {/* Hero Banner Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white pt-32 sm:pt-36 pb-14 px-4 sm:px-6 lg:px-8 shadow-inner relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-3 relative z-10">
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-white">
            Directory of Degree Recipients
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Search and verify all 985 degree recipients across Ph.D, Post-Graduate, and Under-Graduate programmes of NIT Patna.
          </p>
        </div>
      </section>

      {/* Search & Filters Area */}
      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "ALL", label: "All Candidates", count: graduates.length, icon: <GraduationCap className="w-4 h-4" /> },
            { id: "PHD", label: "Ph.D Scholars", count: 136, icon: <FlaskConical className="w-4 h-4" /> },
            { id: "PG", label: "Postgraduates (M.Tech/M.Arch/MURP)", count: 111, icon: <BookOpen className="w-4 h-4" /> },
            { id: "UG", label: "Undergraduates (B.Tech/B.Arch)", count: 738, icon: <Building2 className="w-4 h-4" /> },
            { id: "MEDALIST", label: "Gold Medalists", count: 14, icon: <Medal className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                selectedCategory === tab.id
                  ? "bg-blue-700 text-white shadow-md shadow-blue-700/20 scale-102"
                  : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                selectedCategory === tab.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-sm border border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, roll number, or department..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-3 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Department Filter */}
          <div>
            <select 
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none bg-white focus:ring-2 focus:ring-blue-700 cursor-pointer"
            >
              <option value="ALL">All Departments ({departments.length})</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter & Active Filter Tags */}
        <div className="flex flex-wrap justify-between items-center text-xs font-semibold text-slate-500 px-1 gap-2">
          <span>
            Showing <strong className="text-slate-900">{filteredGraduates.length}</strong> of {graduates.length} degree recipients
          </span>
          {(searchQuery || selectedCategory !== "ALL" || selectedDept !== "ALL") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
                setSelectedDept("ALL");
              }}
              className="text-blue-700 hover:underline font-bold cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Loading Skeleton or Empty State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200 animate-pulse space-y-4">
                <div className="w-16 h-16 bg-slate-200 rounded-2xl mx-auto" />
                <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto" />
                <div className="h-3 bg-slate-200 rounded w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : filteredGraduates.length === 0 ? (
          <div className="bg-white rounded-3xl p-14 text-center border border-slate-200 space-y-3">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No degree recipients found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search query, department filter, or degree category.
            </p>
          </div>
        ) : (
          /* Graduates Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedGraduates.map((student, idx) => (
              <div
                key={student.roll + idx}
                onClick={() => setSelectedStudent(student)}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-300 transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Gold Medalist Accent Badge */}
                {student.honor && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-2xl shadow-xs flex items-center space-x-1 z-10">
                    <Medal className="w-3 h-3" />
                    <span>Medalist</span>
                  </div>
                )}

                <div>
                  {/* Top row with avatar/photo and basic info */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-300/80 shadow-sm group-hover:scale-105 transition-transform">
                      <img 
                        src="/images/default_graduate.png" 
                        alt="Graduate" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                          student.prog === "Ph.D"
                            ? "bg-rose-50 text-rose-800 border border-rose-200"
                            : (student.prog.startsWith("M.") || student.prog === "MURP")
                            ? "bg-indigo-50 text-indigo-800 border border-indigo-200"
                            : "bg-blue-50 text-blue-800 border border-blue-200"
                        }`}>
                          {student.prog}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-500">
                          {student.roll}
                        </span>
                      </div>
                      
                      <h3 className="text-base font-bold text-slate-900 font-serif leading-snug group-hover:text-blue-700 transition-colors truncate">
                        {student.prog === "Ph.D" && !student.name.startsWith("Dr.") ? `Dr. ${student.name}` : student.name}
                      </h3>

                      {/* Branch Name below Student Name */}
                      <p className="text-xs font-semibold text-slate-600 flex items-center mt-1">
                        <Building2 className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                        <span className="truncate">{student.dept}</span>
                      </p>
                    </div>
                  </div>

                  {/* Citation / Award Note */}
                  {student.honor && (
                    <div className="mt-3 p-2.5 rounded-xl bg-amber-50 border border-amber-200/70 text-[11px] font-semibold text-amber-900 leading-snug">
                      {student.honor}
                    </div>
                  )}
                </div>


              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-3 pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 disabled:opacity-40 hover:bg-slate-50 cursor-pointer inline-flex items-center space-x-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <span className="text-xs font-semibold text-slate-600">
              Page <strong className="text-slate-900">{currentPage}</strong> of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 disabled:opacity-40 hover:bg-slate-50 cursor-pointer inline-flex items-center space-x-1"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </main>

      {/* Candidate Details Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 animate-in fade-in zoom-in duration-150 relative">
            
            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 text-xl font-bold cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header / Avatar */}
            <div className="flex items-center space-x-5 pb-4 border-b border-slate-100">
              <div className="w-20 h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-400 shadow-md">
                <img
                  src="/images/default_graduate.png"
                  alt="Graduate"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold bg-blue-50 text-blue-800 px-2.5 py-1 rounded-md border border-blue-200">
                  {selectedStudent.prog}
                </span>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  {selectedStudent.prog === "Ph.D" && !selectedStudent.name.startsWith("Dr.") ? `Dr. ${selectedStudent.name}` : selectedStudent.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  NIT Patna &bull; XIV Convocation 2025
                </p>
              </div>
            </div>

            {/* Details Table */}
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Roll Number:</span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-bold text-slate-900">{selectedStudent.roll}</span>
                  <button
                    onClick={() => copyToClipboard(selectedStudent.roll)}
                    className="text-slate-400 hover:text-blue-700 cursor-pointer"
                    title="Copy Roll Number"
                  >
                    {copiedRoll ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Department:</span>
                <span className="font-semibold text-slate-900 text-right max-w-[250px]">{selectedStudent.dept}</span>
              </div>



              {selectedStudent.honor && (
                <div className="py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium block mb-1">Academic Distinction / Medal:</span>
                  <span className="font-bold text-amber-900 bg-amber-50 p-2 rounded-xl block border border-amber-200">
                    {selectedStudent.honor}
                  </span>
                </div>
              )}


            </div>

            {/* Modal Actions */}
            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
