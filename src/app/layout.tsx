import type { Metadata } from "next";
import "./globals.css";
import { GlobalContextProvider } from "@/providers";
import { HtmlContent } from "./components/HtmlContent";


export const metadata : Metadata = {
  title: "Taskly",
  description: "Taskly is a simple and intuitive to-do list app that allows you to create, manage, and track your tasks effortlessly.",
  keywords: "taskly, to-do list, task list, todo list, task manager, to-do manager, productivity, time management, project management, personal management, simple to-do list, simple task list, simple todo list, simple task manager, simple to-do manager, simple productivity, simple time management, simple project management, simple personal management",
};


export default function RootLayout({
  children}:  {children: React.ReactNode} 
  
) {


  return (
    <GlobalContextProvider>
      <HtmlContent >
        {children}
      </HtmlContent>
      
    </GlobalContextProvider>

  );
}


