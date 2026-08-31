import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XIV Convocation 2025 | National Institute of Technology Patna",
  description: "Official Digital Management & Information Platform for the 14th Convocation Ceremony of NIT Patna.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
