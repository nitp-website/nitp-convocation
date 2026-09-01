import React from "react";
import Navbar from "@/components/Navbar";
import FlashNews from "@/components/FlashNews";
import HeroSection from "@/components/HeroSection";
import DignitariesSection from "@/components/DignitariesSection";
import AwardeesSection from "@/components/AwardeesSection";
import DegreeRecipientsSection from "@/components/DegreeRecipientsSection";
import ConvocationGallery from "@/components/ConvocationGallery";
import DownloadsSection from "@/components/DownloadsSection";
import HelpDeskSection from "@/components/HelpDeskSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. Official Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2, 3, 4. Hero Section + Stats + Announcement Strip */}
        <HeroSection />
        
        {/* Flash News Banner placed directly under Hero section */}
        <FlashNews />

        {/* Dignitaries */}
        <DignitariesSection />

        {/* 6. Medals & Honours / Clean Grid Section */}
        <AwardeesSection />

        {/* Degree Recipients Stats */}
        <DegreeRecipientsSection />

        {/* 9. Convocation Moments Gallery Section */}
        <ConvocationGallery />

        {/* 10. Downloads Section */}
        <DownloadsSection />

        {/* 11. Help Desk & FAQ Section */}
        <HelpDeskSection />
      </main>

      {/* 12. Institutional Footer */}
      <Footer />
    </div>
  );
}
