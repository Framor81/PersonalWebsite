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
  title: "Francisco Personal Website",
  description: "My Personal Website!",
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
