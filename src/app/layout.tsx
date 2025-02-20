import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/navbar/Navbar";
import MainNav from "@/components/main-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umid Kiran - Empowering Specially Abled Children",
  description:
    "Umid Kiran is a program dedicated to supporting and empowering specially abled children through various initiatives and therapies.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <MainNav />
        {children}
      </body>
    </html>
  );
}
