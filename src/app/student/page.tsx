import React from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, FileText, QrCode, User, MapPin } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Student Welcome Header Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 border-t-4 border-t-primary">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Eligible Candidate
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">
                XIV Convocation 2025
              </span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-gray-900 mt-2">Welcome, Harsh Nandan Verma</h2>
            <p className="text-sm text-gray-600 mt-1">
              Roll No: <span className="font-mono font-bold text-gray-900">2106216</span> &bull; Computer Science & Engineering (B.Tech)
            </p>
          </div>
          <Link
            href="/student/pass"
            className="inline-flex items-center space-x-2 bg-accent text-primary font-bold px-5 py-2.5 rounded-xl shadow-sm hover:bg-accent-dark transition-all transform hover:scale-105 text-sm whitespace-nowrap"
          >
            <QrCode className="w-4 h-4" />
            <span>View Digital Pass</span>
          </Link>
        </div>

        {/* Advisory / Status Notice */}
        <div className="mt-8 flex items-start p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-bold">Registration Confirmed</h4>
            <p className="text-emerald-800 mt-0.5 text-xs">
              Your in-person attendance request has been confirmed. Your digital pass and seat assignment (Block A, Row 03, Seat 14) are ready.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Flow Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50/80 border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">
            Convocation Lifecycle Progress
          </h3>
          <span className="text-xs font-semibold text-primary font-mono">100% Completed</span>
        </div>
        <div className="p-8">
          {/* Visual Step Progress */}
          <div className="relative">
            <div className="overflow-hidden h-2 mb-6 text-xs flex rounded-full bg-gray-200">
              <div
                style={{ width: "100%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-primary to-accent"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-bold text-gray-700">
              <div className="text-primary flex flex-col items-center">
                <CheckCircle2 className="w-4 h-4 mb-1 text-primary" />
                <span>1. Profile Verified</span>
              </div>
              <div className="text-primary flex flex-col items-center">
                <CheckCircle2 className="w-4 h-4 mb-1 text-primary" />
                <span>2. Registered</span>
              </div>
              <div className="text-primary flex flex-col items-center">
                <CheckCircle2 className="w-4 h-4 mb-1 text-primary" />
                <span>3. Admin Approved</span>
              </div>
              <div className="text-emerald-600 flex flex-col items-center">
                <CheckCircle2 className="w-4 h-4 mb-1 text-emerald-600" />
                <span>4. Pass Issued</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/student/pass"
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <QrCode className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-gray-900 mb-1">Entry & Seating Pass</h4>
            <p className="text-xs text-gray-500">Download or print your barcode pass with hall block and row coordinates.</p>
          </div>
          <span className="text-xs font-bold text-primary mt-4 inline-block group-hover:underline">
            Open Pass &rarr;
          </span>
        </Link>

        <Link
          href="/student/register"
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-gray-900 mb-1">Registration Details</h4>
            <p className="text-xs text-gray-500">Review your registered guest count and postal degree dispatch preferences.</p>
          </div>
          <span className="text-xs font-bold text-primary mt-4 inline-block group-hover:underline">
            View / Edit Form &rarr;
          </span>
        </Link>

        <Link
          href="/programme"
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-gray-900 mb-1">Schedule & Venue</h4>
            <p className="text-xs text-gray-500">Check reporting timelines, academic procession schedule, and robe guidelines.</p>
          </div>
          <span className="text-xs font-bold text-primary mt-4 inline-block group-hover:underline">
            See Timeline &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
