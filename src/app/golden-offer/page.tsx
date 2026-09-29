"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import DeployAutomationSection from "@/components/DeployAutomationSection";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Play, Star } from "lucide-react";

export default function GoldenOfferPage() {
  const faces = [
    "/images/clients/faces/ana-maria-martinez.webp",
    "/images/clients/faces/connor-miller.jpg",
    "/images/clients/faces/elie-salame.png",
    "/images/clients/faces/jim-adams.webp",
    "/images/clients/faces/jurgen-swaans.jpg",
    "/images/clients/faces/mohamed-el-hannaoui.jpg",
    "/images/clients/faces/othmane-khadri.jpg",
    "/images/clients/faces/pablo-smolders.jpg",
    "/images/clients/faces/wytze-de-haan.jpg",
    "/images/clients/faces/zyad-mouniri.png"
  ];

  const certifications = [
    "/images/certifications/anthropic-claude-certified-architect.png",
    "/images/certifications/clay-enterprise-partner.png",
    "/images/certifications/google-partner.png",
    "/images/certifications/make-certified-partner.webp",
    "/images/certifications/microsoft-ai-industry-leader.png",
    "/images/certifications/microsoft-certified-fundamentals.png",
    "/images/certifications/n8n-certified-expert-partner.png"
  ];

  const faqs = [
    { q: "How fast can I hire AI developers?", a: "Most teams are live within days. Once we align on your stack and roadmap on the kickoff call, your senior AI engineer and the agent fleet start shipping in your repo the same week." },
    { q: "What is the difference between hiring AI developers here and a marketplace like Upwork?", a: "Marketplaces connect you to individual freelancers you still have to vet, manage, and coordinate. We assign one senior AI engineer who orchestrates a fleet of AI agents, so you get the output of a dedicated AI development team without the sourcing, interviewing, or day-to-day management." },
    { q: "Do I get a dedicated AI development team?", a: "Yes. Your engineer works exclusively on your roadmap, backed by a fleet of agents handling scaffolding, testing, and deployment in parallel. It functions as a dedicated AI development team, run by one accountable engineer instead of a rotating bench." },
    { q: "Can one engineer really replace a 5-person team?", a: "One engineer plus a coordinated fleet of AI agents can cover the ground a 5-person team used to: feature work, QA, deployment, and monitoring running in parallel instead of in sequence. The engineer directs the fleet and owns the output." },
    { q: "What can your AI agents build?", a: "Product features end to end, internal tools, workflow automations, GTM pipelines, and agentic systems wired into your existing stack through MCP connectors. See the roles above for the exact skill sets we deploy." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-foreground font-sans selection:bg-[#facc15]/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#facc15]/20 bg-[#facc15]/10 text-[#facc15] text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse"></span>
            Open for new client teams
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Looking to Hire <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#fbbf24]">AI Developers?</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            One senior AI engineer, orchestrating a fleet of AI agents, ships what a Dedicated AI Development Team of five would take months to build. Live in days. Led by ex-IBM founders, not recruiters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/consultation" className="w-full sm:w-auto px-8 py-4 bg-[#facc15] hover:bg-[#fbbf24] text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2">
              Book a Free Strategy Call
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Video Section */}
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111] aspect-video">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src="/cursor-agent.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent flex flex-col justify-end p-8 text-left">
              <h3 className="text-xl font-bold text-white mb-2">They don't arrive alone. They arrive with their agents.</h3>
              <p className="text-gray-400 text-sm">Watch our engineers use Cursor to build in minutes what takes hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faces Strip */}
      <section className="py-12 border-t border-b border-white/5 bg-[#0f0f15]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by the operators behind</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {faces.slice(0,8).map((face, i) => (
              <div key={i} className="relative group">
                <img src={face} alt="Client" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#1a1a24] object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="py-12 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Certified Experts In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {certifications.map((cert, i) => (
              <img key={i} src={cert} alt="Certification" className="h-10 md:h-14 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why hiring AI developers the traditional way is broken.</h2>
            <p className="text-xl text-gray-400 font-light">The old model of hiring a 5-person team is slow, expensive, and obsolete.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111116] border border-red-500/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full"></div>
              <h3 className="text-xl font-bold text-white mb-4 text-red-400">The Traditional Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400"><span className="text-red-500">✕</span> Spend 3 months interviewing</li>
                <li className="flex items-start gap-3 text-gray-400"><span className="text-red-500">✕</span> Hire 5 mid-level engineers</li>
                <li className="flex items-start gap-3 text-gray-400"><span className="text-red-500">✕</span> Spend $600k+ in salaries</li>
                <li className="flex items-start gap-3 text-gray-400"><span className="text-red-500">✕</span> Manage daily standups</li>
              </ul>
            </div>
            
            <div className="bg-[#111116] border border-[#facc15]/30 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(250,204,21,0.05)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#facc15]/10 blur-3xl rounded-full"></div>
              <h3 className="text-xl font-bold text-white mb-4 text-[#facc15]">The AY Automate Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0" /> Live in your repo next week</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0" /> 1 senior engineer + AI fleet</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0" /> Fraction of the cost</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0" /> You get results, not standups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-white/5 bg-[#0f0f15]">
        <div className="max-w-3xl mx-auto px-6 text-center mb-16">
          <p className="text-sm font-bold text-[#facc15] tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Everything you need to know before you hire AI developers.</h2>
        </div>

        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#111116] border border-white/5 rounded-xl p-6 md:p-8 hover:border-white/10 transition-colors">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-4">
                  <span className="text-[#facc15]">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[#facc15]/5"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Hire AI Developers <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-[#fbbf24]">this month?</span>
          </h2>
          <Link href="/consultation" className="inline-flex px-10 py-5 bg-[#facc15] hover:bg-[#fbbf24] text-black text-lg font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] items-center justify-center gap-3">
            Book your kickoff call
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
