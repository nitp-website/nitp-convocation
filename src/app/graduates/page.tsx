"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Filter, GraduationCap, Medal, BookOpen, UserCheck, ShieldCheck, Mail } from "lucide-react";

export default function GraduatesDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProgramme, setSelectedProgramme] = useState("ALL");
  const [selectedDept, setSelectedDept] = useState("ALL");

  const graduatesData = [
    // Medalists & Branch Toppers (UG & PG)
    { name: "Harsh Nandan Verma", roll: "2106216", prog: "B.Tech", dept: "Computer Science & Engineering", honor: "President’s Gold Medal & Director’s Gold Medal (Overall UG Topper)", image: "/images/souvenir/ug_harsh_nandan_verma.png", email: "harshv.ug21.cs@nitp.ac.in" },
    { name: "Dhiresh Kumar", roll: "2323010", prog: "M.Tech", dept: "Civil Engineering", honor: "President’s Gold Medal & Director’s Gold Medal (Overall PG Topper)", image: "/images/souvenir/pg_dhiresh_kumar.png", email: "dhireshk.pg23.ce@nitp.ac.in" },
    { name: "Ritika Kumari", roll: "2103049", prog: "B.Tech", dept: "Civil Engineering", honor: "Director’s Gold Medal, K.N. Rohatgi Gold Medal & BCE Gold Medal", image: "/images/souvenir/ug_ritika_kumari.png", email: "ritikak.ug21.ce@nitp.ac.in" },
    { name: "Amit Kumar", roll: "2334008", prog: "M.Tech", dept: "Mechanical Engineering", honor: "Director’s Gold Medal", image: "/images/souvenir/pg_amit_kumar.png", email: "amitk.pg23.me@nitp.ac.in" },
    { name: "Prachi Maurya", roll: "2340002", prog: "M.Tech", dept: "Electronics & Communication Engineering", honor: "Director’s Gold Medal", image: "/images/souvenir/pg_prachi_maurya.png", email: "prachim.pg23.ec@nitp.ac.in" },
    { name: "Shipra Verma", roll: "2330003", prog: "PGPAP", dept: "Architecture & Planning", honor: "Director’s Gold Medal", image: "/images/souvenir/pg_shipra_verma.png", email: "shiprav.pg23.ar@nitp.ac.in" },
    { name: "Himanshu Kumar Sahu", roll: "2102076", prog: "B.Tech", dept: "Electrical Engineering", honor: "Director’s Gold Medal", image: "/images/souvenir/ug_himanshu_sahu.png", email: "himanshus.ug21.ee@nitp.ac.in" },
    { name: "Asad Rahman", roll: "2101043", prog: "B.Tech", dept: "Mechanical Engineering", honor: "Director’s Gold Medal", image: "/images/souvenir/ug_asad_rahman.png", email: "asadr.ug21.me@nitp.ac.in" },
    { name: "Priya Mishra", roll: "2005028", prog: "B.Arch", dept: "Architecture & Planning", honor: "Director’s Gold Medal", image: "/images/souvenir/ug_priya_mishra.png", email: "priyam.ug20.ar@nitp.ac.in" },
    { name: "Dwibhashyam Sai Buchi Surya Pawan", roll: "2104041", prog: "B.Tech", dept: "Electronics & Communication Engineering", honor: "Director’s Gold Medal", image: "/images/souvenir/ug_dwibhashyam_pawan.png", email: "dwibhashyams.ug21.ec@nitp.ac.in" },
    { name: "Thandava Purandeswar Reddy", roll: "2106064", prog: "B.Tech", dept: "Computer Science & Engineering", honor: "Best Graduate (Boy)", image: "/images/souvenir/best_grad_boy_thandava.png", email: "thandavap.ug21.cs@nitp.ac.in" },
    { name: "Anand Setu", roll: "2005021", prog: "B.Arch", dept: "Architecture & Planning", honor: "Best Graduate (Girl)", image: "/images/souvenir/best_grad_girl_anand_setu.png", email: "anands.ug20.ar@nitp.ac.in" },
    { name: "Gautam Singh", roll: "2322002", prog: "M.Tech", dept: "Electrical Engineering", honor: "Certificate of Excellence", image: "/images/souvenir/pg_gautam_singh.png", email: "gautams.pg23.ee@nitp.ac.in" },
    { name: "Arunish Kumar", roll: "2354008", prog: "M.Tech", dept: "Computer Science & Engineering", honor: "Certificate of Excellence", image: "/images/souvenir/pg_arunish_kumar.png", email: "arunishk.pg23.cs@nitp.ac.in" },

    // Ph.D Scholars with Real Souvenir Photos
    { name: "Dr. Rahul Kumar", roll: "195PH02", prog: "Ph.D", dept: "Applied Physics and Materials Engineering", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/195PH02.png", email: "rahulk.phd19.ph@nitp.ac.in" },
    { name: "Dr. Ambedkar Kumar Verma", roll: "195PH03", prog: "Ph.D", dept: "Applied Physics and Materials Engineering", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/195PH03.png", email: "ambedkarkumarv.phd19.ph@nitp.ac.in" },
    { name: "Dr. Sibasish Mandal", roll: "205PH002", prog: "Ph.D", dept: "Applied Physics and Materials Engineering", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/205PH002.png", email: "sibasishm.phd20.ph@nitp.ac.in" },
    { name: "Dr. Deepti", roll: "205PH003", prog: "Ph.D", dept: "Applied Physics and Materials Engineering", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/205PH003.png", email: "deepti.phd20.ph@nitp.ac.in" },
    { name: "Dr. Somnath Das", roll: "205PH012", prog: "Ph.D", dept: "Applied Physics and Materials Engineering", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/205PH012.png", email: "somnathd.ph21.ph@nitp.ac.in" },
    { name: "Dr. Swetika Porwal", roll: "205AR007", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/205AR007.png", email: "swetikap.phd20.ar@nitp.ac.in" },
    { name: "Dr. Smita Rashmi", roll: "205AR009", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/205AR009.png", email: "smitar.phd20.ar@nitp.ac.in" },
    { name: "Dr. Anushri Barman", roll: "205AR011", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/205AR011.png", email: "anushrib.phd20.ar@nitp.ac.in" },
    { name: "Dr. Ruma Kalla", roll: "205AR017", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/205AR017.png", email: "rumak.ph21.ar@nitp.ac.in" },
    { name: "Dr. Anushree Bhagat", roll: "205AR018", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/205AR018.png", email: "anushreeb.ph21.ar@nitp.ac.in" },
    { name: "Dr. Kirti Gupta", roll: "205AR032", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/205AR032.png", email: "kirtig.ph21.ar@nitp.ac.in" },
    { name: "Dr. Pooja Mishra", roll: "215AR008", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/215AR008.png", email: "poojam.ph21.ar@nitp.ac.in" },
    { name: "Dr. Shanu Raina", roll: "215AR009", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/215AR009.png", email: "shanur.ph21.ar@nitp.ac.in" },
    { name: "Dr. Vineet Shrivastava", roll: "215AR011", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/215AR011.png", email: "vineets.ph21.ar@nitp.ac.in" },
    { name: "Dr. Ruchi", roll: "215AR017", prog: "Ph.D", dept: "Architecture & Planning", honor: "Doctor of Philosophy", image: "/images/souvenir/phd/215AR017.png", email: "ruchi.ph21.ar@nitp.ac.in" },

    // Additional Graduate Recipients
    { name: "Padala Venkata Rama Reddy", roll: "2106136", prog: "B.Tech", dept: "Computer Science & Engineering", honor: null, email: "padalar.ug21.cs@nitp.ac.in" },
    { name: "Prakhar Atulya", roll: "2006042", prog: "B.Tech", dept: "Computer Science & Engineering", honor: null, email: "prakhara.ug20.cs@nitp.ac.in" },
    { name: "Ramanuj Yadav", roll: "2106016", prog: "B.Tech", dept: "Computer Science & Engineering", honor: null, email: "ramanujy.ug21.cs@nitp.ac.in" },
    { name: "Abhishek Sharma", roll: "2106033", prog: "B.Tech", dept: "Computer Science & Engineering", honor: null, email: "abhisheks.ug21.cs@nitp.ac.in" },
    { name: "Ayush Agrawal", roll: "2106053", prog: "B.Tech", dept: "Computer Science & Engineering", honor: null, email: "ayusha.ug21.cs@nitp.ac.in" },
    { name: "Kartik Kumar", roll: "2106072", prog: "B.Tech", dept: "Computer Science & Engineering", honor: null, email: "kartikk.ug21.cs@nitp.ac.in" },
    { name: "Shubham Prakash", roll: "2233005", prog: "M.Tech", dept: "Civil Engineering", honor: null, email: "shubhamp.pg22.ce@nitp.ac.in" },
    { name: "Adarsh Kumar", roll: "2323016", prog: "M.Tech", dept: "Civil Engineering", honor: null, email: "adarshk.pg23.ce@nitp.ac.in" },
    { name: "Mohini Singh", roll: "2354001", prog: "M.Tech", dept: "Computer Science & Engineering", honor: null, email: "mohinis.pg23.cs@nitp.ac.in" },
    { name: "Kumari Suman", roll: "2229004", prog: "M.Tech", dept: "Electronics & Communication Engineering", honor: null, email: "kumaris.pg22.ec@nitp.ac.in" },
    { name: "Jeet Prakash", roll: "2334001", prog: "M.Tech", dept: "Mechanical Engineering", honor: null, email: "jeetp.pg23.me@nitp.ac.in" },
  ];

  const filteredGraduates = graduatesData.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.dept.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesProgramme = selectedProgramme === "ALL" || student.prog === selectedProgramme;
    const matchesDept = selectedDept === "ALL" || student.dept === selectedDept;

    return matchesSearch && matchesProgramme && matchesDept;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-slate-900">
      {/* Official Unified Navbar */}
      <Navbar />

      {/* Search & Filters Area */}
      <main className="flex-1 pt-28 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by candidate name, roll number, or department..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
            />
          </div>

          <div>
            <select 
              value={selectedProgramme}
              onChange={(e) => setSelectedProgramme(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none bg-white focus:ring-2 focus:ring-blue-700"
            >
              <option value="ALL">All Programmes</option>
              <option value="B.Tech">B.Tech (Bachelor of Technology)</option>
              <option value="B.Arch">B.Arch (Bachelor of Architecture)</option>
              <option value="M.Tech">M.Tech (Master of Technology)</option>
              <option value="PGPAP">PGPAP / M.Arch (2 Years)</option>
              <option value="Ph.D">Doctor of Philosophy (Ph.D)</option>
            </select>
          </div>

          <div>
            <select 
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none bg-white focus:ring-2 focus:ring-blue-700"
            >
              <option value="ALL">All Departments</option>
              <option value="Computer Science & Engineering">Computer Science & Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electronics & Communication Engineering">Electronics & Communication</option>
              <option value="Architecture & Planning">Architecture & Planning</option>
              <option value="Applied Physics and Materials Engineering">Applied Physics & Materials</option>
            </select>
          </div>
        </div>

        {/* Results Header Count */}
        <div className="flex justify-between items-center text-xs font-semibold text-slate-500 px-1">
          <span>Showing {filteredGraduates.length} Degree Recipients</span>
          {(searchQuery || selectedProgramme !== "ALL" || selectedDept !== "ALL") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedProgramme("ALL");
                setSelectedDept("ALL");
              }}
              className="text-blue-700 hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Results Grid with Official Photos */}
        {filteredGraduates.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No degree recipients found</h3>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your search query or department filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGraduates.map((student, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-blue-600/40 transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3">
                      {student.image ? (
                        <div className="w-14 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-sm">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-16 rounded-xl bg-gradient-to-tr from-blue-100 to-indigo-100 text-blue-800 font-bold font-serif text-base flex items-center justify-center shrink-0 border border-blue-200">
                          {student.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                        </div>
                      )}
                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-serif leading-snug">
                          {student.name}
                        </h3>
                        <p className="text-xs font-mono font-bold text-blue-900 mt-0.5">
                          {student.roll}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 shrink-0">
                      {student.prog}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium">{student.dept}</p>
                  
                  {student.email && (
                    <p className="text-[11px] text-slate-400 font-mono mt-1 truncate">
                      {student.email}
                    </p>
                  )}
                </div>

                {student.honor ? (
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80">
                      <Medal className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{student.honor}</span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                    Degree Recipient &bull; XIV Convocation 2025
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
