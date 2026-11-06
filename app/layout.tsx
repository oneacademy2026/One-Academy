import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Academy - Build Skills. Shape Your Future.",
  description:
    "Learn in-demand technology skills through hands-on projects, industry-focused courses, and expert mentorship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F7FBFE] text-slate-800 selection:bg-[#60C1E5]/30">
        {children}
      </body>
    </html>
  );
}
