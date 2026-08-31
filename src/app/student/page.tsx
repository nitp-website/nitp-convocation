import React from "react";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 border-t-4 border-t-primary">
        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-2">Welcome, Ankit Kumar</h2>
        <p className="text-gray-600">Roll No: 2101003 | Mechanical Engineering (B.Tech)</p>
        
        <div className="mt-8 flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
          <div className="mr-4 text-2xl">⚠️</div>
          <div>
            <h4 className="font-bold">Action Required</h4>
            <p className="text-sm mt-1">Your registration for the 14th Convocation is incomplete. Please confirm your attendance details before December 20, 2025.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-8 py-4">
          <h3 className="font-bold text-gray-800">Registration Status</h3>
        </div>
        <div className="p-8">
          <div className="relative">
            {/* Progress Bar (Visual Only) */}
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
            </div>
            <div className="flex justify-between text-xs font-bold text-gray-500">
              <span className="text-primary">Profile Verified</span>
              <span>Submit Details</span>
              <span>Admin Review</span>
              <span>Pass Generated</span>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-primary-light transition-all transform hover:scale-105">
              Complete Registration Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
