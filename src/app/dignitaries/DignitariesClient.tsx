"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Building, Users, ChevronDown, ChevronUp } from "lucide-react";

interface Dignitary {
  name: string;
  designation: string;
  role: string;
  org: string;
  image: string;
  badge: string;
  highlight?: boolean;
}

interface Dean {
  name: string;
  designation: string;
}

export default function DignitariesPageClient({ data }: { data: { dignitaries: Dignitary[]; info: { INSTITUTE_INFO: { edition?: string; date?: string } }; committees: { committees: any[]; deans: Dean[] } },  }) {
  const ALL_DIGNITARIES: Dignitary[] = data.dignitaries || [];
  const administrativeDeans: Dean[] = data.committees?.deans || [];
  const commiteesList = data.committees?.committees || [];

  const [expandedCommittee, setExpandedCommittee] = useState<string | null>("degree_prep");

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col font-sans text-slate-900">
      {/* Unified Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white pt-32 sm:pt-36 pb-16 px-6 text-center shadow-inner relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-white">
            Distinguished Dignitaries
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Presiding over the {data.info?.INSTITUTE_INFO?.edition || "Annual Convocation Ceremony"} of National Institute of Technology Patna ({data.info?.INSTITUTE_INFO?.date || "2024"}).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 flex-1 w-full">
        {/* National & State Dignitaries Grid with Official Photos from Souvenir */}
        <section>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_DIGNITARIES.map((person: any, idx: any) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-sm border border-slate-200/90 p-7 flex flex-col items-center text-center relative hover:shadow-xl hover:border-amber-400/60 transition-all duration-200 group overflow-hidden"
              >

                
                {/* Official Photo from Souvenir */}
                <div className="relative w-32 h-36 rounded-2xl overflow-hidden bg-slate-100 mb-5 border-2 border-amber-300/80 shadow-md group-hover:scale-105 transition-transform">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="text-xl font-bold font-serif text-slate-900 mb-1 leading-snug">{person.name}</h3>
                <p className="text-xs font-bold text-amber-800 mb-1">{person.designation}</p>
                <p className="text-xs text-slate-600 font-medium">{person.role}</p>
                <p className="text-[11px] text-slate-400 mt-2">{person.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bihta Campus Dedication Highlight Banner */}
        
        <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-200/80 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-800 shrink-0 shadow-xs">
            <Building className="w-8 h-8" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md">
                NATIONAL MILESTONE &bull; 4TH OCTOBER 2025
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              125-Acre Bihta Campus Dedicated to the Nation
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The Bihta Campus of NIT Patna was dedicated to the Nation by Hon’ble Prime Minister <strong>Shri Narendra Modi</strong> on 4th October 2025 in the august presence of Minister of Education Shri Dharmendra Pradhan, Chief Minister of Bihar Shri Nitish Kumar, Union Minister Shri Jual Oram, Union MoS (IC) Shri Jayant Choudhary, Union MoS (Education) Shri Sukanta Majumdar, and Speaker Bihar Vidhan Sabha Shri Nand Kishor Yadav.
            </p>
          </div>
        </section>

        {/* Administrative Deans */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/90">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-700 shadow-xs">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Institute Administration &amp; Deans
              </h3>
              <p className="text-xs text-slate-500">Executive administration of NIT Patna</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {administrativeDeans.map((dean: any, idx: any) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-300 transition-colors"
              >
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{dean.name}</h4>
                  <p className="text-xs text-blue-700 font-medium mt-0.5">{dean.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Convocation Coordination Committees from Booklet */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/90 space-y-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-700 shadow-xs">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Convocation Coordination Committees
              </h3>
              <p className="text-xs text-slate-500">Official sub-committees constituted for the {data.info?.INSTITUTE_INFO?.edition || "14th Convocation Ceremony"}</p>
            </div>
          </div>

          <div className="space-y-4">
            {commiteesList.map((comm: any) => {
              const isExpanded = expandedCommittee === comm.id;
              return (
                <div 
                  key={comm.id} 
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedCommittee(isExpanded ? null : comm.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 bg-slate-50/70 hover:bg-slate-100/80 text-left transition-colors cursor-pointer"
                  >
                    <div>
                      <h4 className="font-bold text-base text-slate-900">{comm.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {comm.members.length} Members &bull; Convenor: {comm.members[0].name}
                      </p>
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>

                  {isExpanded && (
                    <div className="p-5 bg-white border-t border-slate-100 space-y-4">
                      {comm.duties && (
                        <div>
                          <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-1.5">
                            BRIEF DUTIES
                          </span>
                          <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                            {comm.duties.map((duty: any, dIdx: any) => (
                              <li key={dIdx}>{duty}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-2">
                          COMMITTEE MEMBERS
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                          {comm.members.map((m: any, mIdx: any) => (
                            <div key={mIdx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                              <span className="font-bold text-slate-900 block">{m.name}</span>
                              <span className="text-slate-500 block text-[11px]">{m.designation}</span>
                              <span className={`inline-block mt-1 text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                                m.role === 'Convenor' ? 'bg-blue-100 text-blue-800' : m.role === 'Co-Convenor' ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-200 text-slate-700'
                              }`}>
                                {m.role}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
