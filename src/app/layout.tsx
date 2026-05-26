import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Acha Goodness | Full-Stack Software Engineer",
  description: "Professional portfolio of Acha Goodness, an experienced Full-Stack Software Engineer with 5+ years of experience specializing in high-performance web and mobile app development using React, Next.js, Node.js, React Native, and TypeScript.",
  keywords: ["Acha Goodness", "Software Engineer", "Full Stack Developer", "Frontend Engineer", "Next.js", "React Native", "TypeScript", "Lagos Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
