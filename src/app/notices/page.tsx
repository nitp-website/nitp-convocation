import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import NoticesClient from "./NoticesClient";
import { ConvocationProvider } from "@/context/ConvocationContext";

export default async function NoticesPage() {
  const data = await getConvocationData("2026");
  if (!data) notFound();
  return (
    <ConvocationProvider data={data} year="2026">
      <NoticesClient data={data} />
    </ConvocationProvider>
  );
}
