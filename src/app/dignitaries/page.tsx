import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import DignitariesClient from "./DignitariesClient";
import { ConvocationProvider } from "@/context/ConvocationContext";

export default async function DignitariesPage() {
  const data = await getConvocationData("2026");
  if (!data) notFound();
  return (
    <ConvocationProvider data={data} year="2026">
      <DignitariesClient data={data} />
    </ConvocationProvider>
  );
}

