import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import DignitariesClient from "./DignitariesClient";

export default async function DignitariesPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const data = getConvocationData(year);
  if (!data) notFound();
  return <DignitariesClient data={data} year={year} />;
}
