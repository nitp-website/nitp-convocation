"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Search, Filter, AlertCircle, Clock, CheckCircle } from "lucide-react";

interface RegistrationItem {
  registration_id: string;
  roll_number: string;
  full_name: string;
  department: string;
  programme: string;
  status: "DRAFT" | "SUBMITTED" | "APPROVED" | "REJECTED";
  attending_in_person: number | boolean;
  guest_count: number;
  created_at: string;
}

export default function AdminRegistrationsPage() {
  const [registrations, setRegistrations] = useState<RegistrationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data fallback for mock/demo if API is empty
  const mockData: RegistrationItem[] = [
    {
      registration_id: "reg-1",
      roll_number: "2106216",
      full_name: "Harsh Nandan Verma",
      department: "Computer Science & Engineering",
      programme: "B.Tech",
      status: "SUBMITTED",
      attending_in_person: 1,
      guest_count: 2,
      created_at: "2025-12-05T10:30:00Z"
    },
    {
      registration_id: "reg-2",
      roll_number: "2323010",
      full_name: "Dhiresh Kumar",
      department: "Civil Engineering",
      programme: "M.Tech",
      status: "APPROVED",
      attending_in_person: 1,
      guest_count: 1,
      created_at: "2025-12-04T14:15:00Z"
    },
    {
      registration_id: "reg-3",
      roll_number: "2103049",
      full_name: "Ritika Kumari",
      department: "Civil Engineering",
      programme: "B.Tech",
      status: "APPROVED",
      attending_in_person: 1,
      guest_count: 2,
      created_at: "2025-12-03T09:20:00Z"
    },
    {
      registration_id: "reg-4",
      roll_number: "2005028",
      full_name: "Priya Mishra",
      department: "Architecture & Planning",
      programme: "B.Arch",
      status: "SUBMITTED",
      attending_in_person: 0,
      guest_count: 0,
      created_at: "2025-12-05T16:45:00Z"
    },
    {
      registration_id: "reg-5",
      roll_number: "2101043",
      full_name: "Asad Rahman",
      department: "Mechanical Engineering",
      programme: "B.Tech",
      status: "REJECTED",
      attending_in_person: 1,
      guest_count: 2,
      created_at: "2025-12-02T11:00:00Z"
    }
  ];

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/admin/registrations");
        const json = await res.json();
        if (json.success && json.data && json.data.length > 0) {
          setRegistrations(json.data);
        } else {
          setRegistrations(mockData);
        }
      } catch (e) {
        setRegistrations(mockData);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleStatusChange = (id: string, newStatus: "APPROVED" | "REJECTED") => {
    setRegistrations(prev =>
      prev.map(r => (r.registration_id === id ? { ...r, status: newStatus } : r))
    );
  };

  const filtered = registrations.filter(r => {
    const matchesFilter = filterStatus === "ALL" || r.status === filterStatus;
    const matchesSearch =
      r.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.roll_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-gray-900">Registration Approvals</h1>
          <p className="text-sm text-gray-500 mt-1">
            Review and approve student convocation attendance requests.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors shadow-sm">
            Bulk Approve Selected
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, roll no, department..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto">
          {["ALL", "SUBMITTED", "APPROVED", "REJECTED"].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                filterStatus === status
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Registrations Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Programme & Dept</th>
                <th className="px-6 py-4">Attendance</th>
                <th className="px-6 py-4">Guests</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    Loading registrations...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No registrations found matching criteria.
                  </td>
                </tr>
              ) : (
                filtered.map(r => (
                  <tr key={r.registration_id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{r.full_name}</div>
                      <div className="text-xs text-gray-500 font-mono">{r.roll_number}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 font-medium">{r.programme}</div>
                      <div className="text-xs text-gray-500">{r.department}</div>
                    </td>
                    <td className="px-6 py-4">
                      {r.attending_in_person ? (
                        <span className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          In-Person
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                          Postal Dispatch
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {r.guest_count}
                    </td>
                    <td className="px-6 py-4">
                      {r.status === "APPROVED" && (
                        <span className="inline-flex items-center text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                          <CheckCircle className="w-3.5 h-3.5 mr-1" /> Approved
                        </span>
                      )}
                      {r.status === "SUBMITTED" && (
                        <span className="inline-flex items-center text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                          <Clock className="w-3.5 h-3.5 mr-1" /> Pending Review
                        </span>
                      )}
                      {r.status === "REJECTED" && (
                        <span className="inline-flex items-center text-xs font-bold text-red-700 bg-red-100 px-2.5 py-1 rounded-full">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" /> Rejected
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      {r.status === "SUBMITTED" && (
                        <>
                          <button
                            onClick={() => handleStatusChange(r.registration_id, "APPROVED")}
                            className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                            title="Approve"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleStatusChange(r.registration_id, "REJECTED")}
                            className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                            title="Reject"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
