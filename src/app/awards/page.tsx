import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import AwardsClient from "./AwardsClient";
import { ConvocationProvider } from "@/context/ConvocationContext";

export default async function AwardsPage() {
  const data = await getConvocationData("2026");
  if (!data) notFound();
  return (
    <ConvocationProvider data={data} year="2026">
      <AwardsClient data={data} />
    </ConvocationProvider>
  );
}

