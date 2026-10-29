import { getConvocationData, getAvailableConvocations } from "@/lib/dataFetcher";
import { notFound } from "next/navigation";
import NoticesClient from "@/app/notices/NoticesClient";
import { ConvocationProvider } from "@/context/ConvocationContext";

export async function generateStaticParams() {
  return getAvailableConvocations().map((c) => ({ year: c.year }));
}

export default async function YearNoticesPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const data = await getConvocationData(year);
  if (!data) notFound();
  return (
    <ConvocationProvider data={data} year={year}>
      <NoticesClient data={data} />
    </ConvocationProvider>
  );
}
