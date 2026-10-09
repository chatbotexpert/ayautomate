import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CallToActionSection from "@/components/CallToActionSection";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Developers for Hire: Hire AI Engineers in 2-4 Weeks',
  description: 'AI engineers for hire, placed in 2-4 weeks from $60K/year with a 90-day replacement guarantee. Or hire a small AI team. Book a free call.',
  keywords: 'hire ai developer, hire ai developers, hire ai engineer, ai developers for hire, ai engineers for hire, hire ai development team, hire ai development agency',
  alternates: {
    canonical: 'https://www.ayautomate.com/services/hire-ai-developers',
  }
};

export default function HireAiDevelopersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        
        {/* HERO SECTION */}
        <section className="relative z-10 min-h-[88vh] overflow-hidden border-b border-border bg-background text-foreground">
          <div className="absolute inset-0">
            <div
              aria-hidden={true}
              className="absolute inset-0 pointer-events-none bg-no-repeat bg-cover bg-center opacity-60 dark:opacity-40 "
              style={{
                backgroundImage:
                  "url('https://www.ayautomate.com/hero-pixel-mountains.webp')",
              }}
            ></div>
            <div
              aria-hidden={true}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 55% 70% at 25% 50%, var(--background) 0%, color-mix(in srgb, var(--background) 90%, transparent) 45%, color-mix(in srgb, var(--background) 45%, transparent) 80%, transparent 100%)",
              }}
            ></div>
            <div
              aria-hidden={true}
              className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-background to-transparent"
            ></div>
            <div className="absolute inset-0  bg-[size:24px_24px] opacity-40 pointer-events-none"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-4 py-24 sm:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] min-h-[60vh]">
              <div
                className="max-w-3xl min-w-0"
              >
                <div className="inline-flex items-center gap-2 border border-primary-purple/30 bg-background/70 px-3 py-1 mb-7 backdrop-blur-sm">
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-foreground">
                    <span className="inline-flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full"></span>
                        <span className="relative inline-flex h-2 w-2 bg-primary-purple rounded-full"></span>
                      </span>
                      HIRE AI DEVELOPERS
                    </span>
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-foreground">
                  AI developers for hire:
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-foreground">
                    {" "}
                    hire AI engineers in 2-4 weeks, from $60,000 a year
                  </span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  Hire AI engineers from our own bench, placed in 2-4 weeks, from $60,000/year. If the fit is wrong, we replace them at no extra cost within 90 days. A comparable US hire takes 3-6 months to start. Need 1 to 5 AI developers? See the <Link href="/golden-offer" className="text-primary-purple hover:underline">Golden Offer</Link>.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-primary-purple hover:text-white px-6 sm:px-8 py-6 text-base font-bold uppercase tracking-widest transition-all duration-300 shadow-2xl"
                  >
                    GET MATCHED WITH AN AI ENGINEER
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-5 w-5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                  <a
                    className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground hover:bg-muted hover:border-primary-purple/50 px-6 sm:px-8 py-6 text-base font-bold uppercase tracking-widest transition-colors bg-background/80"
                    href="#hire-options"
                  >
                    COMPARE THE TWO WAYS TO HIRE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-5 w-5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground max-w-xl">
                  Free call, no commitment. Wrong fit? Replaced free within 90 days. Built for a sample of 40+ named companies. See the client list.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative border border-border bg-background/72 backdrop-blur-md p-6 shadow-[0_24px_100px_rgba(0,0,0,0.12)]">
                  <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    OPERATIONAL FOCUS
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary-purple/40 pl-4 py-1">
                      <div className="text-sm font-semibold text-foreground">
                        Developers from our own team, not a freelance marketplace
                      </div>
                    </div>
                    <div className="border-l-2 border-primary-purple/40 pl-4 py-1">
                      <div className="text-sm font-semibold text-foreground">
                        2-4 week placement window
                      </div>
                    </div>
                    <div className="border-l-2 border-primary-purple/40 pl-4 py-1">
                      <div className="text-sm font-semibold text-foreground">
                        90-day replacement guarantee
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAMS WE WORK WITH */}
        <section className="bg-background/50 border-t border-border-strong text-foreground relative py-16">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <div className="flex flex-col gap-6 text-center items-center">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft font-semibold">
                TEAMS WE WORK WITH
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-5xl w-full justify-items-center mx-auto">
                <div className="flex h-12 w-[120px] items-center justify-center px-2 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <img alt="Sage" loading="lazy" width="140" height="56" className="max-h-full max-w-full object-contain" src="https://www.ayautomate.com/clients/sage.png" />
                </div>
                <div className="flex h-12 w-[120px] items-center justify-center px-2 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <img alt="Wonderbox" loading="lazy" width="140" height="56" className="max-h-full max-w-full object-contain" src="https://www.ayautomate.com/clients/wonderbox.png" />
                </div>
                <div className="flex h-12 w-[120px] items-center justify-center px-2 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <img alt="Neoday" loading="lazy" width="140" height="56" className="max-h-full max-w-full object-contain" src="https://www.ayautomate.com/clients/neoday.png" />
                </div>
                <div className="flex h-12 w-[120px] items-center justify-center px-2 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <img alt="XGrowth" loading="lazy" width="140" height="56" className="max-h-full max-w-full object-contain" src="https://www.ayautomate.com/clients/xgrowth.png" />
                </div>
                <div className="flex h-12 w-[120px] items-center justify-center px-2 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <img alt="Arcads" loading="lazy" width="140" height="56" className="max-h-full max-w-full object-contain" src="https://www.ayautomate.com/clients/arcads.png" />
                </div>
                <div className="flex h-12 w-[120px] items-center justify-center px-2 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <img alt="Just Russel" loading="lazy" width="140" height="56" className="max-h-full max-w-full object-contain" src="https://www.ayautomate.com/clients/justrussel.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIRE AI ENGINEERS: WHAT YOU ARE ACTUALLY BUYING */}
        <section id="hire-options" className="bg-background/50 border-t border-border-strong text-foreground relative py-20">
          <div className="w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-8">
              HIRE AI ENGINEERS: WHAT YOU ARE ACTUALLY BUYING
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Searching for AI developers for hire or an AI engineer for hire? In 2026 that usually means one of two things: bringing on an AI-native engineer who directs a fleet of coding agents to cover the output of a small team, or bringing on a small AI engineering team to execute a defined roadmap. Both are staffing decisions, not a tool purchase, you are still hiring a person who is accountable for what ships.
              </p>
              <p>
                AY Automate places both. <Link href="/services/engineer-placement" className="text-primary-purple hover:underline">Engineer Placement</Link> is for hiring one developer. <Link href="/golden-offer" className="text-primary-purple hover:underline">The Golden Offer</Link> is for hiring a small team, 1 to 5 engineers, across three role types. Every developer we place comes from our own bench, already trained to orchestrate coding agents, not a generic staffing or freelance pool.
              </p>
              <p>
                Not sure which role you need? Read AI engineer vs ML engineer and our guide on how to hire AI engineers. Still comparing sourcing options? See the best places to hire AI developers.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT THE DEVELOPERS YOU HIRE BUILD WITH */}
        <section className="bg-background/50 border-t border-border-strong text-foreground relative py-20">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft font-semibold mb-4">
                  WHAT THE DEVELOPERS YOU HIRE BUILD WITH
                </p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em] mb-4">
                  They arrive with their agents already trained.
                </h3>
                <p className="text-base md:text-lg text-foreground leading-snug">
                  <span className="italic text-primary-purple font-semibold">Claude Code</span> is the brain, MCP connects to your tools, agent tooling handles the scaffolding. One developer we place ships like several normal hires.
                </p>
              </div>
              <ul className="lg:col-span-8 divide-y divide-border-subtle border-y border-border-strong">
                <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                  <span className="text-xs tabular-nums text-text-soft font-semibold">01</span>
                  <div className="relative h-7 w-7 shrink-0 opacity-90"><img alt="Claude Code" loading="lazy" src="https://www.ayautomate.com/clients/claude.png" className="object-contain w-full h-full" /></div>
                  <span className="text-base md:text-lg font-bold text-foreground">Claude Code</span>
                  <span className="text-xs md:text-sm text-text-muted text-right">the brain · subagents · MCP</span>
                </li>
                <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                  <span className="text-xs tabular-nums text-text-soft font-semibold">02</span>
                  <div className="relative h-7 w-7 shrink-0 opacity-90"><img alt="Anthropic" loading="lazy" src="https://www.ayautomate.com/clients/anthropic.png" className="object-contain w-full h-full" /></div>
                  <span className="text-base md:text-lg font-bold text-foreground">Anthropic</span>
                  <span className="text-xs md:text-sm text-text-muted text-right">managed agents · runtime</span>
                </li>
                <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                  <span className="text-xs tabular-nums text-text-soft font-semibold">03</span>
                  <div className="relative h-7 w-7 shrink-0 opacity-90"><img alt="Cursor" loading="lazy" src="https://www.ayautomate.com/clients/cursor.png" className="object-contain w-full h-full" /></div>
                  <span className="text-base md:text-lg font-bold text-foreground">Cursor</span>
                  <span className="text-xs md:text-sm text-text-muted text-right">IDE pair-programming</span>
                </li>
                <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                  <span className="text-xs tabular-nums text-text-soft font-semibold">04</span>
                  <div className="relative h-7 w-7 shrink-0 opacity-90"><img alt="n8n" loading="lazy" src="https://www.ayautomate.com/clients/n8n.png" className="object-contain w-full h-full" /></div>
                  <span className="text-base md:text-lg font-bold text-foreground">n8n</span>
                  <span className="text-xs md:text-sm text-text-muted text-right">cron · webhooks · glue</span>
                </li>
                <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                  <span className="text-xs tabular-nums text-text-soft font-semibold">05</span>
                  <div className="relative h-7 w-7 shrink-0 opacity-90"><img alt="E2B" loading="lazy" src="https://www.ayautomate.com/clients/e2b.png" className="object-contain w-full h-full" /></div>
                  <span className="text-base md:text-lg font-bold text-foreground">E2B</span>
                  <span className="text-xs md:text-sm text-text-muted text-right">sandboxed compute</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ONE DEVELOPER OR A TEAM OF 1 TO 5? */}
        <section className="bg-background/50 border-t border-border-strong text-foreground relative py-20">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
              ONE DEVELOPER OR A TEAM OF 1 TO 5?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl leading-relaxed">
              Choose Engineer Placement for one defined gap: 2-4 weeks, from $60,000/year. Choose the Golden Offer when your roadmap needs more than one role, 1 to 5 engineers under one accountable lead. Both use our own bench and the same 90-day guarantee. Need an engineer embedded in your team instead? See <Link href="/services/engineer-placement" className="text-primary-purple hover:underline">forward deployed engineers</Link>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border bg-card p-8 hover:border-primary-purple/50 transition-colors">
                <div className="w-12 h-12 bg-muted flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-purple"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-primary-purple mb-2">ENGINEER PLACEMENT</div>
                <h3 className="text-2xl font-bold mb-4">Hire one AI developer</h3>
                <p className="text-muted-foreground mb-8">A single AI-native engineer joins your team and orchestrates a fleet of coding agents to cover a whole team's output. Best when you need one dedicated hire, not a new team.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-purple"><polyline points="20 6 9 17 4 12"></polyline></svg>From $60,000/year</li>
                  <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-purple"><polyline points="20 6 9 17 4 12"></polyline></svg>2-4 week placement</li>
                  <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-purple"><polyline points="20 6 9 17 4 12"></polyline></svg>90-day replacement guarantee</li>
                </ul>
                <Link href="/services/engineer-placement" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary-purple hover:text-white transition-colors">
                  SEE HOW PLACEMENT WORKS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
              <div className="border border-border bg-card p-8 hover:border-primary-purple/50 transition-colors">
                <div className="w-12 h-12 bg-muted flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-purple"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-primary-purple mb-2">GOLDEN OFFER</div>
                <h3 className="text-2xl font-bold mb-4">Hire a small AI team</h3>
                <p className="text-muted-foreground mb-8">Assemble 1 to 5 engineers across our full bench, Forward Deployed Engineer, GTM Engineer, or AI Automation Architect, run by one accountable engineer instead of a rotating pool.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-purple"><polyline points="20 6 9 17 4 12"></polyline></svg>1-5 engineers, three role types</li>
                  <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-purple"><polyline points="20 6 9 17 4 12"></polyline></svg>Same nearshore bench, same guarantee</li>
                  <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-purple"><polyline points="20 6 9 17 4 12"></polyline></svg>Best for a full roadmap, not one role</li>
                </ul>
                <Link href="/golden-offer" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary-purple hover:text-white transition-colors">
                  SEE THE GOLDEN OFFER <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI DEVELOPERS WE PLACE MOST */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-24 sm:py-32 overflow-hidden transition-colors duration-500">
          <div
            className="absolute inset-0  bg-[size:24px_24px] pointer-events-none"
            style={{ opacity: "var(--grid-opacity)" }}
          ></div>
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 tracking-tight text-foreground">
                AI DEVELOPERS WE PLACE MOST
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                Every developer builds with Claude Code and agent tooling, not just their own two hands.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative bg-card border border-border p-6 overflow-hidden transition-all duration-300 hover:border-primary-purple/50 shadow-sm">
                <div className="absolute inset-0 bg-[size:24px_24px] pointer-events-none opacity-40"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-foreground leading-tight">
                    n8n automation expert
                  </h3>
                  <div className="mb-6 flex flex-col gap-2 items-start">
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      WORKFLOW AUTOMATION
                    </span>
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      INTEGRATION ARCHITECTURE
                    </span>
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      TECH STACK CONNECTIVITY
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    Builds the integrations and automation systems that connect your tech stack, then runs a fleet of agents to maintain and extend them.
                  </p>
                </div>
              </div>
              <div className="group relative bg-card border border-border p-6 overflow-hidden transition-all duration-300 hover:border-primary-purple/50 shadow-sm">
                <div className="absolute inset-0 bg-[size:24px_24px] pointer-events-none opacity-40"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-foreground leading-tight">
                    Full stack engineer
                  </h3>
                  <div className="mb-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      FRONTEND
                    </span>
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      BACKEND
                    </span>
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      DATABASES
                    </span>
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      DEPLOYMENT
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    Owns frontend, backend, databases, and deployment end to end, using Claude Code and agent tooling to ship at the pace of a small team.
                  </p>
                </div>
              </div>
              <div className="group relative bg-card border border-border p-6 overflow-hidden transition-all duration-300 hover:border-primary-purple/50 shadow-sm">
                <div className="absolute inset-0 bg-[size:24px_24px] pointer-events-none opacity-40"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-foreground leading-tight">
                    AI engineer
                  </h3>
                  <div className="mb-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      LLM INTEGRATION
                    </span>
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      MACHINE LEARNING
                    </span>
                    <span className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">
                      PRODUCTION SYSTEMS
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    Integrates LLMs and builds the agents that turn AI concepts into systems running in production, not a slide deck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE VET BEFORE YOU MEET A DEVELOPER */}
        <section className="bg-background/50 border-t border-border-strong text-foreground relative py-20">
          <div className="w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-8">
              HOW WE VET BEFORE YOU MEET A DEVELOPER
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We assess technical depth, agent-orchestration experience, and team fit before you meet a candidate, so you skip sourcing and interviews. Developers come from our own bench, not a marketplace. If the fit still is not right, we replace them at no extra cost within 90 days.
              </p>
            </div>
          </div>
        </section>

      </div>
      <FooterSection />
    </div>
  );
}