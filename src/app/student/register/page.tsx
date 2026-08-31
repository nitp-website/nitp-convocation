"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function StudentRegistration() {
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guests, setGuests] = useState(0);
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (attending === null) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      /* In Production:
      await fetch('/api/student/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attendingInPerson: attending, guestCount: guests, dispatchAddress: address, degreeRecipientId: 'mock-id' })
      });
      */
      
      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center max-w-2xl mx-auto mt-10">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Registration Submitted</h2>
        <p className="text-gray-600 mb-8">
          Your convocation registration has been successfully recorded. The administration team will review your details. You will be notified once your digital pass is generated.
        </p>
        <Link href="/student" className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-primary-light transition-colors">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/student" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">
          &larr; Back to Dashboard
        </Link>
        <h2 className="text-3xl font-bold font-serif text-gray-900">Convocation Registration Form</h2>
        <p className="text-gray-500 mt-2">Please complete this form by December 20, 2025.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">1. Attendance Confirmation</h3>
          <div className="space-y-4">
            <label className={`block p-4 border rounded-lg cursor-pointer transition-all ${attending === true ? 'border-primary bg-red-50' : 'border-gray-200 hover:bg-gray-50'}`}>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="attendance" 
                  checked={attending === true}
                  onChange={() => setAttending(true)}
                  className="w-5 h-5 text-primary focus:ring-primary"
                />
                <span className="ml-3 font-medium text-gray-900">Yes, I will attend the ceremony in person at NIT Patna.</span>
              </div>
            </label>
            
            <label className={`block p-4 border rounded-lg cursor-pointer transition-all ${attending === false ? 'border-primary bg-red-50' : 'border-gray-200 hover:bg-gray-50'}`}>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="attendance" 
                  checked={attending === false}
                  onChange={() => setAttending(false)}
                  className="w-5 h-5 text-primary focus:ring-primary"
                />
                <span className="ml-3 font-medium text-gray-900">No, I cannot attend. Please dispatch my degree by post.</span>
              </div>
            </label>
          </div>
        </div>

        {attending === true && (
          <div className="p-8 border-b border-gray-100 bg-gray-50">
            <h3 className="text-lg font-bold text-gray-800 mb-4">2. Guest Details</h3>
            <p className="text-sm text-gray-500 mb-4">You are allowed a maximum of 2 guests to accompany you.</p>
            <div className="max-w-xs">
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
              <select 
                value={guests} 
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none bg-white"
              >
                <option value={0}>0 - No guests</option>
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
              </select>
            </div>
          </div>
        )}

        {attending === false && (
          <div className="p-8 border-b border-gray-100 bg-gray-50">
            <h3 className="text-lg font-bold text-gray-800 mb-4">2. Dispatch Information</h3>
            <div className="flex items-start bg-blue-50 p-4 rounded-md mb-6">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 shrink-0" />
              <p className="text-sm text-blue-800">Your degree will be sent via Speed Post. Ensure the address provided is completely accurate including the PIN code.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Complete Postal Address</label>
              <textarea 
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required={attending === false}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                placeholder="House No, Street, City, State, PIN Code"
              />
            </div>
          </div>
        )}

        <div className="p-8 bg-white flex justify-end">
          <button 
            type="submit" 
            disabled={attending === null || isSubmitting}
            className={`px-8 py-3 rounded-lg font-bold shadow-sm transition-all ${
              attending === null || isSubmitting 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-primary-light hover:scale-105'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </div>
      </form>
    </div>
  );
}
