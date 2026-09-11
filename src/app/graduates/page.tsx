import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import GraduatesClient from "./GraduatesClient";

export default async function GraduatesPage() {
  const data = await getConvocationData();
  if (!data) notFound();
  return <GraduatesClient data={data} />;
}
