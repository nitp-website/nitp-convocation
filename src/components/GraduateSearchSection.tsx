"use client";

import React, { useState, useMemo } from "react";
import { Search, Loader2 } from "lucide-react";
import { GRADUATES_LIST } from "@/lib/souvenirData";

export default function GraduateSearchSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Simplified debounce without complex hooks
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsLoading(true);
    setHasSearched(true);
  };

  const filteredGraduates = useMemo(() => {
    if (!debouncedSearch.trim()) return [];
    
    const lowerSearch = debouncedSearch.toLowerCase();
    
    return GRADUATES_LIST.filter(grad => 
      grad.name.toLowerCase().includes(lowerSearch) ||
      grad.roll.toLowerCase().includes(lowerSearch) ||
      grad.dept.toLowerCase().includes(lowerSearch)
    ).slice(0, 10); // Limit to 10 for performance in UI
  }, [debouncedSearch]);

  return (
    <section id="graduates" className="py-20 sm:py-28 bg-[#FBF9F5] text-slate-900 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Find a Graduate
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
            Search the official convocation graduate directory by name, roll number, or department.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-12 py-4 border-2 border-slate-200 rounded-2xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-amber-500 transition-colors shadow-sm text-base sm:text-lg"
            placeholder="Search by name, roll number..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {isLoading && (
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Loader2 className="h-5 w-5 text-amber-500 animate-spin" />
            </div>
          )}
        </div>

        {/* Results Area */}
        <div className="max-w-2xl mx-auto">
          {hasSearched && debouncedSearch.trim() !== "" && !isLoading && filteredGraduates.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm">
              <p className="text-slate-800 font-medium text-lg mb-2">No results found.</p>
              <div className="text-sm text-slate-500 space-y-1">
                <p>Try searching using:</p>
                <ul className="list-disc inline-block text-left pl-5">
                  <li>Full/partial name</li>
                  <li>Roll number</li>
                  <li>Department</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredGraduates.map((grad, idx) => (
                <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-300 transition-colors">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{grad.name}</h3>
                    <div className="text-sm font-medium text-slate-500 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                      <span>Roll: {grad.roll}</span>
                      <span>{grad.prog}</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{grad.dept}</p>
                  </div>
                  {grad.honor && (
                    <div className="shrink-0 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-lg text-center">
                      {grad.honor}
                    </div>
                  )}
                </div>
              ))}
              
              {hasSearched && filteredGraduates.length === 10 && (
                <p className="text-center text-xs text-slate-500 mt-4">
                  Showing top 10 results. Please refine your search.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
