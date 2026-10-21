import { ConvocationProvider } from "@/context/ConvocationContext";
import { getConvocationData, getAvailableConvocations } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import React from "react";
import Navbar from "@/components/Navbar";
import FlashNews from "@/components/FlashNews";
import NoticesSection from "@/components/NoticesSection";
import HeroSection from "@/components/HeroSection";
import DignitariesSection from "@/components/DignitariesSection";
import AwardeesSection from "@/components/AwardeesSection";
import DegreeRecipientsSection from "@/components/DegreeRecipientsSection";
import ConvocationGallery from "@/components/ConvocationGallery";
import CeremonySchedule from "@/components/CeremonySchedule";
import HelpDeskSection from "@/components/HelpDeskSection";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const convocations = getAvailableConvocations();
  return convocations.map((c) => ({
    year: c.year,
  }));
}

export default async function YearHomePage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const data = await getConvocationData(year);
  if (!data) notFound();

  return (
    <ConvocationProvider data={data} year={year}>
      <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
        <Navbar />

        <main className="flex-1">
          <HeroSection />
          <FlashNews />
          <NoticesSection />
          <DignitariesSection />
          <AwardeesSection />
          <DegreeRecipientsSection />
          <CeremonySchedule />
          <ConvocationGallery />
          <HelpDeskSection />
        </main>

        <Footer />
      </div>
    </ConvocationProvider>
  );
}
