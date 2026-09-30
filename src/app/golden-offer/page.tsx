"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import DeployAutomationSection from "@/components/DeployAutomationSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GoldenOfferPage() {
  return (
    <div className="min-h-screen bg-[#111115] text-foreground font-sans selection:bg-[#a1a1ff]/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-[#111115]">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#2a2a35] bg-[#1a1a24] text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                OPEN FOR NEW CLIENT TEAMS
              </div>

              <h1 className="text-5xl md:text-[68px] font-bold tracking-tight text-white mb-6 leading-[1.05]">
                Looking to{" "}
                <span className="text-[#a1a1ff] italic font-serif">Hire</span>
                <br />
                <span className="text-[#a1a1ff] italic font-serif">
                  AI Developers?
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
                One senior AI engineer, orchestrating a fleet of AI agents,
                ships what a{" "}
                <strong className="text-white font-medium">
                  Dedicated AI Development Team
                </strong>{" "}
                of five would take months to build. Live in days. Led by ex-IBM
                founders, not recruiters.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
                <Link
                  href="/consultation"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#8b5cf6] to-[#a1a1ff] hover:opacity-90 text-white font-semibold rounded-md transition-all flex items-center justify-center gap-2"
                >
                  Build Your Team Now <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Available for immediate deployment
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-6">
                  TRUSTED BY TEAMS AT
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-60">
                  <img
                    src="/clients/ibm.svg"
                    alt="IBM"
                    className="h-6 object-contain grayscale"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <span className="text-xl font-bold text-gray-300">Sage</span>
                  <span className="text-xl font-bold text-gray-300">
                    Just
                    <br />
                    Russel
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Code Editor UI & Profiles */}
            <div className="relative">
              <div className="bg-[#1e1e24] rounded-lg border border-[#2a2a35] overflow-hidden shadow-2xl">
                {/* Editor Header */}
                <div className="bg-[#18181c] border-b border-[#2a2a35] px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                      LIVE DEMO
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono">
                    ayautomate.dev/team-01
                  </div>
                </div>
                {/* Editor Body */}
                <div className="aspect-[4/3] bg-[#0d0d12] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                  {/* Mock code blocks */}
                  <div className="absolute inset-0 p-6 font-mono text-[11px] text-gray-400 leading-relaxed overflow-hidden">
                    <div className="flex">
                      <div className="w-8 text-gray-700 text-right pr-4 shrink-0 select-none">
                        1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />
                        9<br />
                        10
                        <br />
                        11
                        <br />
                        12
                      </div>
                      <div className="whitespace-pre">
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">agentFleet</span> ={" "}
                        <span className="text-purple-400">await</span>{" "}
                        ai.orchestrate({"{"}
                        <br />
                        {"  "}team: [
                        <span className="text-green-300">'architect'</span>,{" "}
                        <span className="text-green-300">'builder'</span>,{" "}
                        <span className="text-green-300">'qa'</span>],
                        <br />
                        {"  "}context: projectContext,
                        <br />
                        {"  "}tasks: [<br />
                        {"    "}
                        <span className="text-green-300">
                          'build_auth_module'
                        </span>
                        ,<br />
                        {"    "}
                        <span className="text-green-300">
                          'setup_database_schema'
                        </span>
                        ,<br />
                        {"    "}
                        <span className="text-green-300">
                          'deploy_to_staging'
                        </span>
                        <br />
                        {"  "}]<br />
                        {"}"});
                        <br />
                        <br />
                        <span className="text-purple-400">await</span>{" "}
                        agentFleet.execute();
                        <br />
                        <span className="text-gray-500">
                          // Shipping code in parallel...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-[#1e1e24] border border-[#2a2a35] p-3 rounded-lg flex items-center gap-3">
                  <img
                    src="/images/downloaded/team-walid.webp"
                    alt="Walid"
                    className="w-10 h-10 rounded object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://ui-avatars.com/api/?name=W&background=random";
                    }}
                  />
                  <div>
                    <div className="text-sm font-bold text-white">Walid</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                      CO-FOUNDER · CEO
                    </div>
                  </div>
                </div>
                <div className="bg-[#1e1e24] border border-[#2a2a35] p-3 rounded-lg flex items-center gap-3">
                  <img
                    src="/images/downloaded/team-adel.webp"
                    alt="Adel"
                    className="w-10 h-10 rounded object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://ui-avatars.com/api/?name=A&background=random";
                    }}
                  />
                  <div>
                    <div className="text-sm font-bold text-white">Adel</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                      CO-FOUNDER · CTO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why traditional is broken */}
      <section className="py-24 bg-[#111115] border-t border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Stats */}
            <div>
              <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-8">
                THE HIRING GRIND · BY THE NUMBERS
              </p>
              <div className="text-[140px] font-bold text-[#a1a1ff] leading-none mb-4 tracking-tighter">
                95<span className="text-6xl">%</span>
              </div>
              <p className="text-2xl text-white font-medium mb-6">
                of recurring tasks automated for one client in weeks, not
                quarters.
              </p>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4"
              >
                From our omnichannel marketing automation case study
              </Link>
            </div>

            {/* Right: Points */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-12">
                Why hiring AI developers the{" "}
                <span className="text-[#a1a1ff] italic font-serif">
                  traditional way
                </span>{" "}
                is broken.
              </h2>

              <div className="space-y-10">
                <div className="border-t border-[#2a2a35] pt-8">
                  <div className="flex gap-6">
                    <div className="text-2xl font-bold text-gray-600 font-mono">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-200 mb-3">
                        Finding talent is slow & competitive
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        The average time to fill a senior tech role is now 3-6
                        months. By the time you find a candidate, your roadmap
                        is already delayed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#2a2a35] pt-8">
                  <div className="flex gap-6">
                    <div className="text-2xl font-bold text-gray-600 font-mono">
                      02
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-200 mb-3">
                        Managing a bench of freelancers eats your time
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Founders waste hours coordinating contractors and
                        chasing status updates. One senior AI engineer running a
                        fleet of agents removes that overhead, so you get a
                        dedicated AI development team without becoming the
                        project manager.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#2a2a35] pt-8">
                  <div className="flex gap-6">
                    <div className="text-2xl font-bold text-gray-600 font-mono">
                      03
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-200 mb-3">
                        Consistency is rare & risky
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Freelancers ghost. Skills vary. You need proven AI
                        Development Company standards, not guesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Skip the hiring grind */}
      <section className="py-24 bg-[#111115] border-t border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-6">
            THE SHIFT
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
            <h2 className="text-5xl font-bold text-white leading-tight">
              What if you could{" "}
              <span className="text-[#a1a1ff] italic font-serif">skip</span> the
              <br />
              hiring grind?
            </h2>
            <p className="text-lg text-gray-400 max-w-md">
              Stop searching for unicorns or building an AI dev team from
              scratch. Hire AI developers who run a{" "}
              <strong className="text-white">fleet of AI agents</strong> instead
              of a bench of freelancers.
            </p>
          </div>

          <div className="space-y-0">
            <div className="border-t border-b border-[#2a2a35] py-12 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
              <div className="text-4xl font-bold text-gray-600 font-mono w-16">
                01
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Immediate Access
                </h3>
                <p className="text-gray-400 max-w-2xl text-lg">
                  Don't wait 3 months to hire AI developers. One senior AI
                  engineer and a fleet of AI agents deploy within days and start
                  shipping from Day 1.
                </p>
              </div>
              <div className="hidden md:block text-[10px] font-bold text-gray-600 tracking-widest uppercase">
                PILLAR 01
              </div>
            </div>

            <div className="border-b border-[#2a2a35] py-12 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
              <div className="text-4xl font-bold text-gray-600 font-mono w-16">
                02
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Plug-and-Play Excellence
                </h3>
                <p className="text-gray-400 max-w-2xl text-lg">
                  Every engagement runs on proven agent orchestration systems.
                  You get the delivery standard of a dedicated AI development
                  team, built by ex-IBM founders.
                </p>
              </div>
              <div className="hidden md:block text-[10px] font-bold text-gray-600 tracking-widest uppercase">
                PILLAR 02
              </div>
            </div>

            <div className="border-b border-[#2a2a35] py-12 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
              <div className="text-4xl font-bold text-gray-600 font-mono w-16">
                03
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Zero Overhead Scaling
                </h3>
                <p className="text-gray-400 max-w-2xl text-lg">
                  Add agents to the fleet or scale back instantly. No payroll,
                  no long-term contracts, just results from your dedicated AI
                  development team.
                </p>
              </div>
              <div className="hidden md:block text-[10px] font-bold text-gray-600 tracking-widest uppercase">
                PILLAR 03
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How a team lands */}
      <section className="py-24 bg-[#111115] border-t border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="border-b border-[#2a2a35] pb-12 mb-24">
            <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-8">
              HOW A TEAM LANDS · 4 STEPS · ~5 DAYS END TO END
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-bold tracking-wide">
              <span className="text-white">01 Assign</span>
              <span className="text-gray-600">→</span>
              <span className="text-[#a1a1ff]">02 Dedicate (100% Focus)</span>
              <span className="text-gray-600">→</span>
              <span className="text-white">03 Manage & Oversight</span>
              <span className="text-gray-600">→</span>
              <span className="text-white">04 Deliver</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-6">
                HOW OUR ENGINEERS ACTUALLY WORK
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1]">
                They don't arrive alone.
                <br />
                <span className="text-[#a1a1ff] italic font-serif">
                  They arrive with their agents.
                </span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-lg text-gray-400 max-w-md">
                25 AI-native engineers, trained in-house by{" "}
                <strong className="text-white">Walid</strong>. Every one of them
                ships with the same agent stack we use ourselves - that's why
                one of our engineers ships like three normal hires.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="border-t border-[#2a2a35] pt-6">
              <p className="text-[10px] font-bold text-[#a1a1ff] tracking-widest uppercase mb-6">
                01 · DESIGN
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                Architecture before code.
              </h3>
              <p className="text-gray-400 text-lg">
                We audit your stack, decide what runs as an agent, what runs as
                n8n, what stays manual. Roadmap locked in week one.
              </p>
            </div>

            <div className="border-t border-[#2a2a35] pt-6">
              <p className="text-[10px] font-bold text-[#a1a1ff] tracking-widest uppercase mb-6">
                02 · BUILD
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                Live in 10 days, not 10 weeks.
              </h3>
              <p className="text-gray-400 text-lg">
                Engineer embeds in your Slack, gets repo access, ships the first
                working automation in week two. No decks, real output.
              </p>
            </div>

            <div className="border-t border-[#2a2a35] pt-6">
              <p className="text-[10px] font-bold text-[#a1a1ff] tracking-widest uppercase mb-6">
                03 · OPERATE
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                We run it with you, not at you.
              </h3>
              <p className="text-gray-400 text-lg">
                Weekly tuning, new automations, performance dashboards. The
                wedge. We don't hand over and walk away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Stack */}
      <section className="py-24 bg-[#111115] border-t border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-6">
                THE SPINE · 5 TOOLS, ZERO GLUE CODE
              </p>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300 leading-snug">
                <strong className="text-[#a1a1ff]">
                  Claude Code is the brain.
                </strong>{" "}
                Everything else plugs in through MCP. The same opinionated stack
                across every engagement - from bootstrapped founders to publicly
                listed enterprise.
              </h2>
            </div>

            <div className="space-y-0 border-t border-[#2a2a35]">
              {[
                {
                  num: "01",
                  icon: "https://img.logo.dev/anthropic.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=64&format=png&retina=true",
                  name: "Claude Code",
                  desc: "the brain · subagents · hooks · MCP",
                },
                {
                  num: "02",
                  icon: "https://img.logo.dev/anthropic.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=64&format=png&retina=true",
                  name: "Anthropic SDK",
                  desc: "managed agents · runtime",
                },
                {
                  num: "03",
                  icon: "https://img.logo.dev/cursor.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=128&format=png&retina=true",
                  name: "Cursor",
                  desc: "IDE pair-programming with agents",
                },
                {
                  num: "04",
                  icon: "https://img.logo.dev/n8n.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=128&format=png&retina=true",
                  name: "n8n",
                  desc: "cron · webhooks · integration glue",
                },
                {
                  num: "05",
                  icon: "https://img.logo.dev/e2b.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=128&format=png&retina=true",
                  name: "E2B",
                  desc: "sandboxed compute for tool calls",
                },
              ].map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-6 border-b border-[#2a2a35]"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-mono text-gray-600">
                      {tool.num}
                    </span>
                    <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center p-1.5 shrink-0">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <span className="text-xl font-bold text-white">
                      {tool.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 hidden sm:block">
                    {tool.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 py-4 px-6 bg-[#1a1a24] rounded-lg border border-[#2a2a35] max-w-fit">
            <div className="flex -space-x-2">
              <img
                src="/images/downloaded/team-walid.webp"
                className="w-6 h-6 rounded-full border border-[#1a1a24]"
              />
              <img
                src="/images/downloaded/team-adel.webp"
                className="w-6 h-6 rounded-full border border-[#1a1a24]"
              />
            </div>
            <p className="text-sm text-gray-400">
              <strong className="text-white">25 engineers</strong> on the bench.{" "}
              <strong className="text-white">1</strong> dedicated per client.
              Same stack, same standard, every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-32 bg-[#0a0a0f] border-t border-white/5 text-center relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            We're not a staffing agency.
            <br />
            We're{" "}
            <span className="text-[#a1a1ff] italic font-serif">
              Automation Architects.
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            We are a specialized AI Development Company led by engineers, for
            engineers.
          </p>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
