import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sharetech",
});

export const metadata: Metadata = {
  title: "My world!",
  description: "Some topics about technology, computers, robotics and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={shareTechMono.variable}>
      <body className='font-orbitron'>
        <Header />
        <main className='min-h-screen bg-[url("/img/bg.jpg")] bg-cover bg-center flex flex-col items-center justify-center '>
          {children}
        </main>
      </body>
    </html>
  );
}
