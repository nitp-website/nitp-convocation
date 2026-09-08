import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import AwardsClient from "./AwardsClient";

export default async function AwardsPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const data = getConvocationData(year);
  if (!data) notFound();
  return <AwardsClient data={data} year={year} />;
}
