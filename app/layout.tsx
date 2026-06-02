import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samet Uzgoz | IT Portfolio",
  description:
    "Personal portfolio of Samet Uzgoz — IT student and web developer based in Melbourne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
