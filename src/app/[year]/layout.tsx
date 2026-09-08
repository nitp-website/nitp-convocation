export const dynamicParams = false;

export function generateStaticParams() {
  return [{ year: '2024' }, { year: '2025' }];
}

export default async function YearLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ year: string }>;
}) {
  return <>{children}</>;
}
