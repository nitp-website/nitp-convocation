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

export default function DignitariesPageClient({ data }: { data: { year?: string; dignitaries: Dignitary[]; info: { INSTITUTE_INFO: { edition?: string; date?: string; bihtaCampus?: string } }; committees: { committees: any[]; deans: Dean[] } } }) {
  const ALL_DIGNITARIES: Dignitary[] = data.dignitaries || [];
  const administrativeDeans: Dean[] = data.committees?.deans || [];
  const commiteesList = data.committees?.committees || [];

  const [expandedCommittee, setExpandedCommittee] = useState<string | null>(commiteesList[0]?.id || "management");

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
        {data.info?.INSTITUTE_INFO?.bihtaCampus && (
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
        )}

        {/* Administrative Deans (Rendered only when populated for archived editions) */}
        {administrativeDeans && administrativeDeans.length > 0 && (
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
        )}

        {/* Convocation Coordination Committees */}
        {commiteesList && commiteesList.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-700 shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Convocation Coordination Committees
                </h3>
                <p className="text-xs text-slate-500">
                  Official committees and sub-committees constituted for the {data.info?.INSTITUTE_INFO?.edition || `${data.year || '2026'} Convocation Ceremony`}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {commiteesList.map((comm: any) => {
                const isExpanded = expandedCommittee === comm.id;
                const leadMember = comm.members?.find((m: any) => m.role === 'Chairman') || 
                                   comm.members?.find((m: any) => m.role === 'Convenor' || m.role === 'Convener') || 
                                   comm.members?.[0];

                return (
                  <div 
                    key={comm.id} 
                    className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => setExpandedCommittee(isExpanded ? null : comm.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 bg-slate-50/80 hover:bg-slate-100/90 text-left transition-colors cursor-pointer"
                    >
                      <div className="pr-4">
                        <h4 className="font-serif font-bold text-base sm:text-lg text-slate-900">
                          {comm.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 font-sans">
                          {comm.members?.length} Members &bull; {leadMember?.role || 'Lead'}: <span className="font-semibold text-slate-700">{leadMember?.name}</span>
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-4 sm:p-6 bg-white border-t border-slate-200/80 space-y-4">
                        {/* Box Details Table matching official notification */}
                        <div className="overflow-x-auto rounded-xl border border-slate-200">
                          <table className="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 text-[11px] sm:text-xs uppercase tracking-wider font-bold">
                                <th className="py-3 px-3.5 sm:px-4 w-12 text-center">#</th>
                                <th className="py-3 px-3.5 sm:px-4">Name</th>
                                <th className="py-3 px-3.5 sm:px-4">Designation / Department</th>
                                <th className="py-3 px-3.5 sm:px-4 w-36 text-center">Role</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-800">
                              {comm.members?.map((m: any, mIdx: number) => {
                                const roleNormalized = (m.role || '').toLowerCase();
                                const isChairman = roleNormalized === 'chairman';
                                const isConvenor = roleNormalized === 'convenor' || roleNormalized === 'convener';
                                const isCoConvenor = roleNormalized === 'co-convenor' || roleNormalized === 'co-convener';
                                const isCoordinator = roleNormalized === 'coordinator';

                                return (
                                  <tr 
                                    key={mIdx} 
                                    className="hover:bg-blue-50/40 transition-colors"
                                  >
                                    <td className="py-3 px-3.5 sm:px-4 text-center font-mono text-xs text-slate-400 font-semibold">
                                      {m.slNo || mIdx + 1}
                                    </td>
                                    <td className="py-3 px-3.5 sm:px-4 font-bold text-slate-900">
                                      {m.name}
                                    </td>
                                    <td className="py-3 px-3.5 sm:px-4 text-slate-600">
                                      {m.designation}
                                    </td>
                                    <td className="py-3 px-3.5 sm:px-4 text-center">
                                      <span className={`inline-block text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md ${
                                        isChairman 
                                          ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                                          : isConvenor 
                                          ? 'bg-blue-100 text-blue-900 border border-blue-200' 
                                          : isCoConvenor 
                                          ? 'bg-indigo-100 text-indigo-900 border border-indigo-200' 
                                          : isCoordinator 
                                          ? 'bg-purple-100 text-purple-900 border border-purple-200' 
                                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                                      }`}>
                                        {m.role}
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
