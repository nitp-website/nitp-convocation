"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Download, Printer, QrCode, ShieldCheck, MapPin, Calendar, Clock, AlertTriangle } from "lucide-react";

export default function StudentPassPage() {
  const passRef = useRef<HTMLDivElement>(null);

  // Mock student pass details
  const passData = {
    passId: "NITP-CONV25-78921",
    studentName: "Harsh Nandan Verma",
    rollNumber: "2106216",
    programme: "Bachelor of Technology (B.Tech)",
    department: "Computer Science & Engineering",
    convocationEdition: "XIV Convocation 2025",
    date: "Saturday, December 27, 2025",
    reportingTime: "08:30 AM IST",
    venue: "Main Convocation Hall, NIT Patna Campus",
    seating: {
      block: "Block A (UG Gold & CSE)",
      row: "Row 03",
      seat: "Seat 14"
    },
    guestCount: 2,
    passStatus: "VERIFIED & CONFIRMED",
    specialHonour: "President's & Director's Gold Medalist"
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 print:hidden">
        <div>
          <Link href="/student" className="text-primary text-sm font-semibold hover:underline inline-block mb-1">
            &larr; Back to Student Dashboard
          </Link>
          <h1 className="text-2xl font-bold font-serif text-gray-900">Official Convocation Pass</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 shadow-sm transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Entry Advisory */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-3 text-amber-900 text-sm print:hidden">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold">Mandatory Event Day Instructions:</p>
          <p className="text-xs text-amber-800 mt-0.5">
            Please carry a printed or digital copy of this pass along with your Institute Identity Card or valid Government Photo ID (Aadhar/Passport). Entry closes strictly at 09:30 AM.
          </p>
        </div>
      </div>

      {/* Printable Pass Container */}
      <div
        ref={passRef}
        className="bg-white rounded-2xl shadow-md border-2 border-primary/20 overflow-hidden max-w-2xl mx-auto print:shadow-none print:border print:m-0 print:max-w-full"
      >
        {/* Pass Header Banner */}
        <div className="bg-primary text-white p-6 relative overflow-hidden flex justify-between items-center border-b-4 border-accent">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-widest text-accent font-bold mb-1">
              National Institute of Technology Patna
            </div>
            <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
              {passData.convocationEdition}
            </h2>
            <p className="text-xs text-gray-200 mt-0.5">Official Degree Recipient Entry Pass</p>
          </div>
          <div className="w-14 h-14 bg-white rounded-full p-1 flex items-center justify-center shadow-md shrink-0 border-2 border-accent">
            <img src="/logo.png" alt="NIT Patna Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Pass Body */}
        <div className="p-8 space-y-6">
          {/* Status & ID Badge */}
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
            <div>
              <span className="text-xs text-gray-500 font-mono">PASS ID:</span>
              <span className="ml-2 font-bold font-mono text-gray-900 text-sm">{passData.passId}</span>
            </div>
            <span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" /> {passData.passStatus}
            </span>
          </div>

          {/* Student Profile Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 font-medium">Graduate Name</p>
              <p className="text-lg font-bold text-gray-900 font-serif">{passData.studentName}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Roll Number</p>
              <p className="text-lg font-bold font-mono text-primary">{passData.rollNumber}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Academic Programme</p>
              <p className="text-sm font-semibold text-gray-800">{passData.programme}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Department</p>
              <p className="text-sm font-semibold text-gray-800">{passData.department}</p>
            </div>
          </div>

          {/* Seating Matrix Box */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
              Allocated Hall Seating
            </h4>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white p-3 rounded-lg border border-primary/10 shadow-xs">
                <span className="text-xs text-gray-500 block">Block</span>
                <span className="text-sm font-bold text-gray-900">{passData.seating.block}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-primary/10 shadow-xs">
                <span className="text-xs text-gray-500 block">Row</span>
                <span className="text-base font-bold text-primary font-mono">{passData.seating.row}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-primary/10 shadow-xs">
                <span className="text-xs text-gray-500 block">Seat</span>
                <span className="text-base font-bold text-primary font-mono">{passData.seating.seat}</span>
              </div>
            </div>
          </div>

          {/* Event Schedule & Logistics details */}
          <div className="border-t border-gray-100 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <span>{passData.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Reporting: <strong>{passData.reportingTime}</strong></span>
            </div>
            <div className="flex items-center space-x-2 sm:col-span-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>{passData.venue}</span>
            </div>
          </div>

          {/* QR Code Verification Section */}
          <div className="border-t-2 border-dashed border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold text-gray-900 uppercase">Verification Barcode</p>
              <p className="text-xs text-gray-500 max-w-xs mt-0.5">
                Scan at Security Gate 1 & Hall Entry 2 for electronic attendance logging.
              </p>
              <p className="text-xs font-mono text-gray-400 mt-2">Accompanying Guests: {passData.guestCount}</p>
            </div>
            {/* Visual QR Code Placeholder */}
            <div className="w-24 h-24 bg-gray-50 border-2 border-gray-800 rounded-lg p-2 flex flex-col items-center justify-center text-gray-800">
              <QrCode className="w-16 h-16" />
              <span className="text-[9px] font-mono font-bold tracking-tighter">NITP-SCAN</span>
            </div>
          </div>
        </div>

        {/* Pass Footer */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 text-center text-[11px] text-gray-500">
          This is a computer-generated pass. Valid only for authorized degree recipients of NIT Patna.
        </div>
      </div>
    </div>
  );
}
