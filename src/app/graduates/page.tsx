import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import GraduatesClient from "./GraduatesClient";
import { ConvocationProvider } from "@/context/ConvocationContext";

export default async function GraduatesPage() {
  const data = await getConvocationData("2026");
  if (!data) notFound();
  return (
    <ConvocationProvider data={data} year="2026">
      <GraduatesClient data={data} />
    </ConvocationProvider>
  );
}

