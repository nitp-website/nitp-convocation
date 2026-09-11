import { getConvocationData } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import DignitariesClient from "./DignitariesClient";

export default async function DignitariesPage() {
  const data = await getConvocationData();
  if (!data) notFound();
  return <DignitariesClient data={data} />;
}
