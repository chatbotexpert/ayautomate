"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function AIAgentDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#05050A] text-foreground font-sans selection:bg-primary-purple/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden border-b border-[#1F1F2E]">
        {/* Mountain Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen bg-center bg-cover"
          style={{
            backgroundImage: "url('https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/pixel-mountains.webp')"
          }}
        />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
                  <path d="M7 7h.01"/>
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  AI AGENT DEVELOPMENT AGENCY
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight mb-8">
                <span className="text-white">AI agent<br/>development, </span>
                <span className="text-[#9D9ECE]">built<br/>to survive<br/>production</span>
              </h1>

              <p className="text-lg sm:text-xl text-text-muted leading-relaxed mb-10 max-w-2xl">
                Custom AI agents wired into your CRM, APIs and internal data that do the work, not just answer questions. Each one is tested against real cases, runs sandboxed with permission limits, and waits for human approval on high-risk actions. For founders and ops or engineering leads who got burned by a demo. One senior engineer directs a fleet of AI agents to build it.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
                <Link href="/consultation?utm_source=site&utm_medium=cta&utm_campaign=ai-agent-development" className="group flex h-14 w-full sm:w-auto items-center justify-center gap-3 bg-white px-8 font-bold uppercase tracking-wider text-black transition-all hover:bg-gray-200">
                  <span className="text-xs">GET YOUR FREE AGENT ARCHITECTURE AUDIT</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>

                <Link href="#work" className="group flex h-14 w-full sm:w-auto items-center justify-center gap-3 bg-[#13131A] border border-[#2A2A35] px-8 font-bold uppercase tracking-wider text-white transition-all hover:bg-[#1A1A24]">
                  <span className="text-xs">SEE CLIENT WORK</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>

              <div className="text-sm text-text-soft leading-relaxed max-w-2xl">
                Worried it breaks in production? IDC data reported by bex.co (Sept 10, 2026) puts about 88% of enterprise AI proofs of concept as never reaching production. The audit names the one workflow worth building first, and the guardrails it needs, before any code.<br/><br/>
                Built for a sample of 40+ named companies. <Link href="#work" className="underline hover:text-white transition-colors">See the client list.</Link>
              </div>
            </div>

            {/* Right Column - Operational Focus Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#111116]/90 backdrop-blur-sm border border-[#1F1F2E] p-8 lg:p-10">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-soft mb-8">
                  OPERATIONAL FOCUS
                </h3>
                
                <ul className="space-y-6">
                  {[
                    "Tested against real cases before it ships",
                    "Sandboxed, with human approval on high-risk actions",
                    "One engineer, a fleet of AI agents, not a bench of juniors",
                    "Deep API integration with your stack",
                    "Measurable hours saved in week one"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1.5 h-full w-[2px] self-stretch bg-white/20"></div>
                      <span className="text-sm sm:text-base font-medium text-white/90 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
