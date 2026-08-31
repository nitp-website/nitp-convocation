import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AwardeesOrbit from "@/components/AwardeesOrbit";
import CeremonySchedule from "@/components/CeremonySchedule";
import ConvocationGallery from "@/components/ConvocationGallery";
import HelpDeskSection from "@/components/HelpDeskSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FBF9F5] text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      {/* Official Sticky Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Image 1) */}
        <HeroSection />

        {/* 2. Medals & Honours / Awardees Constellation Section (Images 2, 3, 4) */}
        <AwardeesOrbit />

        {/* 3. Programme / Day of the Ceremony Schedule Section (Image 5) */}
        <CeremonySchedule />

        {/* 4. Glimpse of Convocation Photo Gallery Section (Image 6) */}
        <ConvocationGallery />

        {/* 5. Help Desk & FAQ Section */}
        <HelpDeskSection />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
