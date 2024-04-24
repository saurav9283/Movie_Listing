"use client";
import { ThemeProvider } from "next-themes";

export default function provider({children}) {
  return (
    <ThemeProvider defaultTheam = "systum" attribute="class"> 
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen  transition-colors duration-300">{children}</div>
    </ThemeProvider>
  );
}
