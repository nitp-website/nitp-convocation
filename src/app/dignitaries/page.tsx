import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import DignitariesClient from "./DignitariesClient";
import { ConvocationProvider } from "@/context/ConvocationContext";

export default async function DignitariesPage() {
  const data = await getConvocationData("2025");
  if (!data) notFound();
  return (
    <ConvocationProvider data={data} year="2025">
      <DignitariesClient data={data} />
    </ConvocationProvider>
  );
}

