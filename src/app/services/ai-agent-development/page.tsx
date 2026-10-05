"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import MiniTestimonialSlider from "@/components/MiniTestimonialSlider";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

export default function AIAgentDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#05050A] text-foreground font-sans selection:bg-primary-purple/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden border-b border-[#1F1F2E]">
        {/* Mountain Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
          style={{ backgroundImage: "url('/bg-mountain-pixel.webp')", backgroundRepeat: "repeat-x", backgroundPosition: "center bottom", backgroundSize: "auto 100%" }}
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
            <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 bg-white/5 backdrop-blur-sm text-[11px] font-semibold text-white/60 uppercase tracking-[0.2em] mb-8">
                <Lock className="w-3.5 h-3.5" />
                <span>AI AGENT DEVELOPMENT AGENCY</span>
              </div>

              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.05] mb-6">
                AI agent<br />
                development, <span className="text-[#9D99FF]">built<br />
                to survive<br />
                production</span>
              </h1>

              <p className="text-[17px] text-white/70 max-w-[600px] leading-[1.7] mb-10">
                Custom AI agents wired into your CRM, APIs and internal data that do the work, not just answer questions. Each one is tested against real cases, runs sandboxed with permission limits, and waits for human approval on high-risk actions. For founders and ops or engineering leads who got burned by a demo. One senior engineer directs a fleet of AI agents to build it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                <Link href="/consultation?utm_source=site&utm_medium=cta&utm_campaign=ai-agent-development" className="bg-white hover:bg-gray-100 text-black px-7 py-4 text-[13px] font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  GET YOUR FREE AGENT ARCHITECTURE AUDIT
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#work" className="bg-[#16161D] hover:bg-[#1C1C24] border border-white/10 text-white/90 px-7 py-4 text-[13px] font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 transition-colors">
                  SEE CLIENT WORK
                  <ArrowRight className="w-4 h-4 text-white/50" />
                </Link>
              </div>

              <p className="text-[13px] text-white/50 max-w-[600px] leading-relaxed">
                Worried it breaks in production? IDC data reported by bex.co (Sept 10, 2026) puts about 88% of enterprise AI proofs of concept as never reaching production. The audit names the one workflow worth building first, and the guardrails it needs, before any code.
                <br /><br />
                <Link href="#clients" className="border-b border-white/30 hover:border-white/60 transition-colors pb-0.5">Built for a sample of 40+ named companies. See the client list.</Link>
              </p>
            </div>
            
            {/* Right Column - Operational Focus Box */}
            <div className="lg:col-span-5 relative z-10 w-full flex justify-end">
              <div className="bg-[#12121A] border border-white/10 p-10 w-full max-w-[420px] shadow-2xl mt-8 lg:mt-0">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8 font-semibold">
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
                      <div className="mt-2 h-[18px] w-[2px] shrink-0 bg-white/20"></div>
                      <span className="text-[15px] font-medium text-white/90 leading-[1.6]">
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

      <MiniTestimonialSlider />
      <FooterSection />
    </div>
  );
}
