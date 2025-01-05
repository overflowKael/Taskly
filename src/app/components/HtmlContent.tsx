"use client";
import { useGlobalContext } from "@/providers";
import { NextUi } from "@/providers";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

export function HtmlContent({ children }: { children: React.ReactNode }) {
  const { theme } = useGlobalContext() ?? { theme: "dark" };

  return (
    <html lang="en" className={`${theme}`} suppressHydrationWarning>


        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >

          <NextUi>
            {children}
          </NextUi>


        </body>


      </html>
  );
}