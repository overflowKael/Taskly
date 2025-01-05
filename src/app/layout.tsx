"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextUi } from "@/providers";
import { GlobalContextProvider } from "@/providers";
import { useGlobalContext } from "@/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const generateMetadata: Metadata = {
  title: "Taskly",
  description: "Taskly is a simple and intuitive to-do list app that allows you to create, manage, and track your tasks effortlessly.",
  keywords: "taskly, to-do list, task list, todo list, task manager, to-do manager, productivity, time management, project management, personal management, simple to-do list, simple task list, simple todo list, simple task manager, simple to-do manager, simple productivity, simple time management, simple project management, simple personal management",
};


export default function RootLayout({
  children}:  {children: React.ReactNode} 
  
) {


  return (
    <GlobalContextProvider>
      <HtmlContent>
        {children}
      </HtmlContent>
      
    </GlobalContextProvider>

  );
}


function HtmlContent({ children }: { children: React.ReactNode }) {
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