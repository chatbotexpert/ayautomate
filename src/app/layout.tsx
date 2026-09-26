import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayautomate - Automate Your Workflows",
  description: "Clone of Ayautomate website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lexend.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300 bg-white dark:bg-[#0E0E14]">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <div className="relative flex flex-col min-h-screen">
            {/* Left and Right Global Borders */}
            <div className="fixed left-0 top-0 bottom-0 w-4 md:w-6 lg:w-8 bg-white dark:bg-[#0E0E14] border-r border-gray-200 dark:border-white/10 z-[60] pointer-events-none transition-colors duration-300"></div>
            <div className="fixed right-0 top-0 bottom-0 w-4 md:w-6 lg:w-8 bg-white dark:bg-[#0E0E14] border-l border-gray-200 dark:border-white/10 z-[60] pointer-events-none transition-colors duration-300"></div>
            
            <div className="px-4 md:px-6 lg:px-8 flex flex-col flex-grow">
              <Navbar />
              <main className="flex-grow flex flex-col w-full">{children}</main>
            </div>
          </div>
          
          {/* Fixed Chat Widget */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-[100]">
            <button className="flex items-center gap-3 bg-[#1e1c22] text-white px-6 py-3 rounded-md text-[15px] font-bold shadow-2xl border border-gray-800/50 hover:bg-[#252229] transition-colors">
              <svg className="w-5 h-5 text-[#8082C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              Ask us anything
            </button>
            <div className="flex items-center gap-3 bg-[#1e1c22] pl-3 pr-4 py-2 rounded-md shadow-2xl border border-gray-800/50">
              <span className="text-gray-400 text-sm">←</span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-inner cursor-pointer">
                 {/* Mascot placeholder */}
                 <span className="text-xl">👾</span>
              </div>
            </div>
          </div>

          
        </ThemeProvider>
      </body>
    </html>
  );
}
