import { redirect } from "next/navigation";
import { getAvailableConvocations } from "@/lib/dataFetcher";

export async function generateStaticParams() {
  return getAvailableConvocations().map((c) => ({ year: c.year }));
}

export default async function ArchiveRedirectPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  redirect(`/${year}`);
}
