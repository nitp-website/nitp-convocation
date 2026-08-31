import React from "react";

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Overview Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Real-time statistics for the current active convocation.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50">
            Export Report
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-md shadow-sm text-sm font-medium hover:bg-primary-light transition-colors">
            New Announcement
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-primary">
          <p className="text-sm text-gray-500 font-medium">Total Eligible Graduates</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">1,250</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-accent-dark">
          <p className="text-sm text-gray-500 font-medium">Registrations Submitted</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">942</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-green-600">
          <p className="text-sm text-gray-500 font-medium">Passes Generated</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">810</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-blue-600">
          <p className="text-sm text-gray-500 font-medium">Checked In (Event Day)</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Registrations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 col-span-2 flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800">Recent Registrations</h3>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="p-0 overflow-x-auto flex-1">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 font-medium">
                <tr>
                  <th className="px-6 py-3">Roll Number</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Mock Data */}
                {[
                  { roll: "2106136", name: "Padala Venkata", dept: "CSE", status: "Approved" },
                  { roll: "2104092", name: "Aman Kumar", dept: "ECE", status: "Pending" },
                  { roll: "2101001", name: "Milan Kumar", dept: "ME", status: "Approved" },
                  { roll: "2330003", name: "Shipra Verma", dept: "Architecture", status: "Action Req" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono text-gray-600">{row.roll}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                    <td className="px-6 py-4 text-gray-500">{row.dept}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium 
                        ${row.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                          row.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Operational Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-800">Action Items</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex space-x-3 items-start p-3 bg-red-50 text-red-800 rounded-lg">
              <div className="mt-0.5">⚠️</div>
              <div>
                <p className="text-sm font-bold">Unassigned Seats</p>
                <p className="text-xs mt-1">45 approved students do not have seating allocated.</p>
              </div>
            </div>
            <div className="flex space-x-3 items-start p-3 bg-yellow-50 text-yellow-800 rounded-lg">
              <div className="mt-0.5">📝</div>
              <div>
                <p className="text-sm font-bold">Pending Reviews</p>
                <p className="text-xs mt-1">12 registration profiles require manual verification.</p>
              </div>
            </div>
            <div className="flex space-x-3 items-start p-3 bg-blue-50 text-blue-800 rounded-lg">
              <div className="mt-0.5">ℹ️</div>
              <div>
                <p className="text-sm font-bold">Import Data</p>
                <p className="text-xs mt-1">Upload the M.Tech recipient CSV to finalize the directory.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
