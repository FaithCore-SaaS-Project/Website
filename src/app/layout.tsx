import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | FaithCore",
    default: "FaithCore – Church Management System",
  },
  description:
    "FaithCore helps churches streamline members, finances, certificates, events, and communications — all in one secure ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col bg-[#f8f9ff] text-[#111827] antialiased`}>
        {children}
      </body>
    </html>
  );
}

