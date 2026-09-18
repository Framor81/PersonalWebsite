import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollColor from "./components/scrollColor";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francisco Morales Puente",
  description:
    "AI Native Software Engineer at Accenture and Pomona College graduate in Computer Science and Mathematics. Building at the intersection of software, data, AI, and human-centered technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollColor />
        {children}
      </body>
    </html>
  );
}
