import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import AwardsClient from "./AwardsClient";

export default async function AwardsPage() {
  const data = await getConvocationData();
  if (!data) notFound();
  return <AwardsClient data={data} />;
}
