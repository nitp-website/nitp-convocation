import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import GraduatesClient from "./GraduatesClient";

export default async function GraduatesPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const data = getConvocationData(year);
  if (!data) notFound();
  return <GraduatesClient data={data} year={year} />;
}
