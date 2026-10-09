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

        {/* ===== HERO SECTION ===== */}
        <section className="relative z-10 min-h-[88vh] overflow-hidden border-b border-border bg-background text-foreground">
          <div className="absolute inset-0">
            <div aria-hidden={true} className="absolute inset-0 pointer-events-none bg-no-repeat bg-cover bg-center opacity-60 dark:opacity-40" style={{ backgroundImage: "url('https://www.ayautomate.com/hero-pixel-mountains.webp')" }}></div>
            <div aria-hidden={true} className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 70% at 25% 50%, var(--background) 0%, color-mix(in srgb, var(--background) 90%, transparent) 45%, color-mix(in srgb, var(--background) 45%, transparent) 80%, transparent 100%)" }}></div>
            <div aria-hidden={true} className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-background to-transparent"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-4 py-24 sm:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] min-h-[60vh]">
              <div className="max-w-3xl min-w-0">
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    <img src="https://www.ayautomate.com/images/clients/faces/elie-salame.png" alt="Client" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                    <img src="https://www.ayautomate.com/images/clients/faces/florian-saint-omer.png" alt="Client" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                    <img src="https://www.ayautomate.com/images/clients/faces/lukas-klement.png" alt="Client" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                    <img src="https://www.ayautomate.com/images/clients/faces/thomas-van-hollebeke.png" alt="Client" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                    <img src="https://www.ayautomate.com/images/clients/faces/victor-gavalda.png" alt="Client" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">Trusted by 30+ companies</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-foreground">
                  AI developers for hire:
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-foreground">
                    {" "}hire AI engineers in 2-4 weeks, from $60,000 a year
                  </span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  Hire AI engineers from our own bench, placed in 2-4 weeks, from $60,000/year. If the fit is wrong, we replace them at no extra cost within 90 days. A comparable US hire takes 3-6 months to start. Need 1 to 5 AI developers? See the{" "}
                  <Link href="/golden-offer" className="text-primary-purple hover:underline">Golden Offer</Link>.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-primary-purple hover:text-white px-6 sm:px-8 py-6 text-base font-bold uppercase tracking-widest transition-all duration-300 shadow-2xl">
                    GET MATCHED WITH AN AI ENGINEER
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </button>
                  <a className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground hover:bg-muted hover:border-primary-purple/50 px-6 sm:px-8 py-6 text-base font-bold uppercase tracking-widest transition-colors bg-background/80" href="#hire-options">
                    COMPARE THE TWO WAYS TO HIRE
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground max-w-xl">
                  Free call, no commitment. Wrong fit? Replaced free within 90 days. Built for a sample of 40+ named companies. See the client list.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative border border-border bg-background/80 backdrop-blur-md p-6 shadow-[0_24px_100px_rgba(0,0,0,0.12)]">
                  <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">OPERATIONAL FOCUS</div>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary-purple/40 pl-4 py-1">
                      <div className="text-sm font-semibold text-foreground">Developers from our own team, not a freelance marketplace</div>
                    </div>
                    <div className="border-l-2 border-primary-purple/40 pl-4 py-1">
                      <div className="text-sm font-semibold text-foreground">2-4 week placement window</div>
                    </div>
                    <div className="border-l-2 border-primary-purple/40 pl-4 py-1">
                      <div className="text-sm font-semibold text-foreground">90-day replacement guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TEAMS WE WORK WITH ===== */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-16">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <div className="flex flex-col gap-6 text-center items-center">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">TEAMS WE WORK WITH</p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-5xl w-full mx-auto">
                {[
                  { name: 'Sage', src: 'https://www.ayautomate.com/clients/sage.png' },
                  { name: 'Wonderbox', src: 'https://www.ayautomate.com/clients/wonderbox.png' },
                  { name: 'Neoday', src: 'https://www.ayautomate.com/clients/neoday.png' },
                  { name: 'XGrowth', src: 'https://www.ayautomate.com/clients/xgrowth.png' },
                  { name: 'Arcads', src: 'https://www.ayautomate.com/clients/arcads.png' },
                  { name: 'Argil', src: 'https://www.ayautomate.com/clients/argil.svg' },
                  { name: 'Earleads', src: 'https://www.ayautomate.com/clients/earleads.png' },
                  { name: 'Just Russel', src: 'https://www.ayautomate.com/clients/justrussel.svg' },
                ].map(client => (
                  <div key={client.name} className="flex h-12 w-[120px] items-center justify-center px-2 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                    <img alt={client.name} loading="lazy" width="140" height="56" className="max-h-full max-w-full object-contain" src={client.src} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== HIRE AI ENGINEERS: WHAT YOU ARE ACTUALLY BUYING ===== */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-20">
          <div className="w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-8 text-foreground">
              Hire AI engineers: what you are actually buying
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Searching for AI developers for hire or an AI engineer for hire? In 2026 that usually means one of two things: bringing on an AI-native engineer who directs a fleet of coding agents to cover the output of a small team, or bringing on a small AI engineering team to execute a defined roadmap. Both are staffing decisions, not a tool purchase, you are still hiring a person who is accountable for what ships.
              </p>
              <p>
                AY Automate places both.{" "}
                <Link href="/services/engineer-placement" className="text-primary-purple hover:underline">Engineer Placement</Link>{" "}
                is for hiring one developer.{" "}
                <Link href="/golden-offer" className="text-primary-purple hover:underline">The Golden Offer</Link>{" "}
                is for hiring a small team, 1 to 5 engineers, across three role types. Every developer we place comes from our own bench, already trained to orchestrate coding agents, not a generic staffing or freelance pool.
              </p>
              <p>
                Not sure which role you need? Read AI engineer vs ML engineer and our guide on how to hire AI engineers. Still comparing sourcing options? See the best places to hire AI developers.
              </p>
            </div>
          </div>
        </section>

        {/* ===== WHAT THE DEVELOPERS BUILD WITH ===== */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-20">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-4">WHAT THE DEVELOPERS YOU HIRE BUILD WITH</p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em] mb-4">
                  They arrive with their agents already trained.
                </h3>
                <p className="text-base md:text-lg text-foreground leading-snug">
                  <span className="italic text-primary-purple font-semibold">Claude Code</span> is the brain, MCP connects to your tools, agent tooling handles the scaffolding. One developer we place ships like several normal hires.
                </p>
              </div>
              <ul className="lg:col-span-8 divide-y divide-border border-y border-border">
                {[
                  { num: '01', name: 'Claude Code', img: 'https://www.ayautomate.com/clients/claude.png', desc: 'the brain · subagents · MCP' },
                  { num: '02', name: 'Anthropic', img: 'https://www.ayautomate.com/clients/anthropic.png', desc: 'managed agents · runtime' },
                  { num: '03', name: 'Cursor', img: 'https://www.ayautomate.com/clients/cursor.png', desc: 'IDE pair-programming' },
                  { num: '04', name: 'n8n', img: 'https://www.ayautomate.com/clients/n8n.png', desc: 'cron · webhooks · glue' },
                  { num: '05', name: 'E2B', img: 'https://www.ayautomate.com/clients/e2b.png', desc: 'sandboxed compute' },
                ].map(tool => (
                  <li key={tool.num} className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                    <span className="text-xs tabular-nums text-muted-foreground font-semibold">{tool.num}</span>
                    <div className="h-7 w-7 shrink-0 opacity-90 relative"><img alt={tool.name} loading="lazy" src={tool.img} className="object-contain w-full h-full" /></div>
                    <span className="text-base md:text-lg font-bold text-foreground">{tool.name}</span>
                    <span className="text-xs md:text-sm text-muted-foreground text-right">{tool.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== ONE DEVELOPER OR A TEAM OF 1 TO 5? ===== */}
        <section id="hire-options" className="bg-background/50 border-t border-border text-foreground relative py-20">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              One developer or a team of 1 to 5?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl leading-relaxed">
              Choose Engineer Placement for one defined gap: 2-4 weeks, from $60,000/year. Choose the Golden Offer when your roadmap needs more than one role, 1 to 5 engineers under one accountable lead. Both use our own bench and the same 90-day guarantee. Need an engineer embedded in your team instead? See{" "}
              <Link href="/services/engineer-placement" className="text-primary-purple hover:underline">forward deployed engineers</Link>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Engineer Placement Card */}
              <div className="border border-border bg-card p-8 hover:border-primary-purple/50 transition-colors flex flex-col gap-6">
                <div className="w-12 h-12 bg-muted border border-border flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-purple"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-primary-purple mb-2">ENGINEER PLACEMENT</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Hire one AI developer</h3>
                  <p className="text-muted-foreground leading-relaxed">A single AI-native engineer joins your team and orchestrates a fleet of coding agents to cover a whole team's output. Best when you need one dedicated hire, not a new team.</p>
                </div>
                <ul className="space-y-3">
                  {['From $60,000/year', '2-4 week placement', '90-day replacement guarantee'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/services/team-augmentation" className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-purple hover:underline">
                  SEE HOW PLACEMENT WORKS
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
              {/* Golden Offer Card */}
              <div className="border border-border bg-card p-8 hover:border-primary-purple/50 transition-colors flex flex-col gap-6">
                <div className="w-12 h-12 bg-muted border border-border flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-purple"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-primary-purple mb-2">GOLDEN OFFER</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Hire a small AI team</h3>
                  <p className="text-muted-foreground leading-relaxed">Assemble 1 to 5 engineers across our full bench, Forward Deployed Engineer, GTM Engineer, or AI Automation Architect, run by one accountable engineer instead of a rotating pool.</p>
                </div>
                <ul className="space-y-3">
                  {['1-5 engineers, three role types', 'Same nearshore bench, same guarantee', 'Best for a full roadmap, not one role'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/golden-offer" className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-purple hover:underline">
                  SEE THE GOLDEN OFFER
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== AI DEVELOPERS WE PLACE MOST ===== */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[size:24px_24px] pointer-events-none" style={{ opacity: 'var(--grid-opacity)' }}></div>
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-6 tracking-tight text-foreground">AI Developers We Place Most</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every developer builds with Claude Code and agent tooling, not just their own two hands.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'n8n automation expert',
                  tags: ['Workflow Automation', 'Integration Architecture', 'Tech Stack Connectivity'],
                  desc: 'Builds the integrations and automation systems that connect your tech stack, then runs a fleet of agents to maintain and extend them.',
                },
                {
                  title: 'Full stack engineer',
                  tags: ['Frontend', 'Backend', 'Databases', 'Deployment'],
                  desc: 'Owns frontend, backend, databases, and deployment end to end, using Claude Code and agent tooling to ship at the pace of a small team.',
                },
                {
                  title: 'AI engineer',
                  tags: ['LLM Integration', 'Machine Learning', 'Production Systems'],
                  desc: 'Integrates LLMs and builds the agents that turn AI concepts into systems running in production, not a slide deck.',
                },
              ].map(role => (
                <div key={role.title} className="group relative bg-card border border-border p-6 overflow-hidden transition-all duration-300 hover:border-primary-purple/50 shadow-sm">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-5 text-foreground">{role.title}</h3>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {role.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-muted border border-border text-primary-purple text-xs font-bold uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW WE VET ===== */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-20">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              How we vet before you meet a developer
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
              We assess technical depth, agent-orchestration experience, and team fit before you meet a candidate, so you skip sourcing and interviews. Developers come from our own bench, not a marketplace. If the fit still is not right, we replace them at no extra cost within 90 days.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'From our own bench',
                  desc: "Every AI developer we place comes from AY Automate's own team, already trained to orchestrate coding agents, not a generic freelance marketplace.",
                },
                {
                  title: 'Placed in 2-4 weeks',
                  desc: 'Against a 3 to 6 month norm for a comparable US hire: sourcing, interviews, and an offer cycle collapsed into weeks.',
                },
                {
                  title: '90-day replacement guarantee',
                  desc: 'If the fit is not right, we replace the developer at no extra cost inside the first 90 days.',
                },
                {
                  title: 'No sourcing, no interview loop',
                  desc: 'We assess technical depth and team fit before you meet them. You are hiring a vetted engineer, not running a search.',
                },
              ].map(item => (
                <div key={item.title} className="group relative bg-card border border-border p-6 overflow-hidden transition-all duration-300 hover:border-primary-purple/50">
                  <div className="absolute top-0 left-0 w-[3px] h-[3px] border-t border-l border-primary-purple/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-[3px] h-[3px] border-b border-r border-primary-purple/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHAT IT COSTS ===== */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-20">
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              What It Costs to Hire an AI Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              A single-hire comparison against a US in-house engineer. Figures reflect Engineer Placement pricing. For market rates, see our AI engineer hiring cost guide and the AI engineer salary guide 2026.
            </p>
            <div className="border border-border overflow-hidden mb-10">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted/40"></th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted/40">US In-House Hire</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-primary-purple bg-muted/40">AY Automate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Annual Cost', '$150,000+', 'From $60,000'],
                    ['Employer Taxes & Benefits', '~$30,000', '$0'],
                    ['Recruitment Cost', '$20,000-$40,000', '$0'],
                    ['Time to Start', '3-6 months', '2-4 weeks'],
                    ['Fit Risk', 'Yours to manage', '90-day replacement guarantee'],
                  ].map(([label, us, ay]) => (
                    <tr key={label} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">{label}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{us}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary-purple">{ay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mb-12">
              Hiring more than one developer? The Golden Offer is scoped on a kickoff call based on the roles and roadmap.
            </p>

            {/* When this fits / when it does not */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border bg-card p-8">
                <h3 className="text-xl font-bold mb-5 text-foreground">When this fits</h3>
                <ul className="space-y-4">
                  {[
                    'You need to add real capacity fast and cannot wait 3-6 months on a US hiring cycle.',
                    'You want someone who already knows how to direct coding agents, not a developer you have to train into it.',
                    'You want the option to scale from one developer to a small team without switching vendors.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-purple shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border bg-card p-8">
                <h3 className="text-xl font-bold mb-5 text-foreground">When it does not</h3>
                <ul className="space-y-4">
                  {[
                    'You need a fully in-house, on-site employee for reasons outside of output or cost.',
                    'Your work is a one-off project rather than ongoing capacity, see our project-based service pages instead.',
                    'You are not ready to onboard someone into your sprint and tools within a few weeks.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-foreground shrink-0 mt-0.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TELL US WHAT YOU NEED / CTA ===== */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[size:24px_24px] pointer-events-none" style={{ opacity: 'var(--grid-opacity)' }}></div>
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Tell us the AI engineer you need
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Share the stack and the first thing they should ship. We come back with a shortlist plan and a placement timeline.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-primary-purple hover:text-white px-8 py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300">
                    Book a free 30-min call
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground hover:bg-muted px-8 py-5 text-sm font-bold uppercase tracking-widest transition-colors">
                    Compare staffing models
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: 'Engineer placement', desc: 'How embedded placement works and what it costs.' },
                    { title: 'Forward deployed engineers', desc: 'Engineers who sit inside your team.' },
                    { title: 'AI team cost calculator', desc: 'Compare in-house, agency and placement cost.' },
                  ].map(link => (
                    <div key={link.title} className="border border-border bg-card p-4 hover:border-primary-purple/50 transition-colors cursor-pointer">
                      <div className="text-sm font-bold text-foreground mb-1">Related</div>
                      <div className="text-sm font-semibold text-primary-purple mb-1">{link.title}</div>
                      <div className="text-xs text-muted-foreground">{link.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ===== START YOUR PLACEMENT + STRATEGY CALL ===== */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[size:24px_24px] pointer-events-none" style={{ opacity: 'var(--grid-opacity)' }}></div>
          <div className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-background to-transparent"></div>
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            {/* Top CTA text */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 border border-primary-purple/30 bg-background/70 px-3 py-1 mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full"></span>
                  <span className="relative inline-flex h-2 w-2 bg-primary-purple rounded-full"></span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-foreground">FREE HIRING CALL</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground mb-6">
                Start your{" "}
                <span className="text-primary-purple italic">2-4 week placement this week.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Book a free call. You leave knowing whether you need one developer or a small team, and which role fits. Placement runs 2-4 weeks from request to start.
              </p>
            </div>

            {/* Strategy Call + Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border">
              {/* Left: Strategy Call info */}
              <div className="bg-card p-8 md:p-10 border-r border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Book a 30min Free Strategy Call</h3>
                <p className="text-muted-foreground mb-2 leading-relaxed">
                  In this call, we'll walk through your project scope, timeline, and goals - so we can both check if we're a fit. No obligation, no slide deck, just a working session.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Don't want a call? Email{" "}
                  <a href="mailto:walid@ayautomate.com" className="text-primary-purple hover:underline">walid@ayautomate.com</a>
                </p>
                <button className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-primary-purple hover:text-white px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 mb-8">
                  Book Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
                </button>
                <ul className="space-y-4 mb-10">
                  {[
                    { icon: '🗺️', text: 'Opportunity Map' },
                    { icon: '⚡', text: 'Implementation Path' },
                    { icon: '🔄', text: 'Fast Follow-Up' },
                  ].map(item => (
                    <li key={item.text} className="flex items-center gap-3 text-foreground font-medium">
                      <span className="text-base">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                {/* Testimonial */}
                <blockquote className="border-l-2 border-primary-purple/40 pl-5 mb-6">
                  <p className="text-lg font-semibold text-foreground italic leading-snug mb-4">
                    "We needed a very specific role and AY Automate helped us get an AI engineer pretty fast - someone who got quickly into our processes and our team."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted border border-border overflow-hidden">
                      <img src="https://www.ayautomate.com/images/clients/faces/othmane-khadri.png" alt="Othmane Khadri" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">Othmane Khadri</div>
                      <div className="text-xs text-muted-foreground">Founder, Earleads.com</div>
                    </div>
                  </div>
                </blockquote>
                {/* Call options */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { icon: '📹', label: 'Video Call' },
                    { icon: '📞', label: 'Phone Call' },
                    { icon: '🏢', label: 'In-Person' },
                  ].map(opt => (
                    <div key={opt.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{opt.icon}</span> {opt.label}
                    </div>
                  ))}
                </div>
                {/* Featured in */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-4">WE'VE CREATED PRODUCTS FEATURED IN</p>
                  <div className="flex items-center gap-6 flex-wrap">
                    <img src="https://www.ayautomate.com/press/dailymotion.svg" alt="Dailymotion" className="h-6 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
                    <img src="https://www.ayautomate.com/press/fbm.svg" alt="FBM" className="h-6 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
                    <img src="https://www.ayautomate.com/press/france-tv.svg" alt="France TV" className="h-6 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
                  </div>
                </div>
                <p className="mt-6 text-xs text-muted-foreground">Usually responds within 24h. No commitment required.</p>
              </div>

              {/* Right: Booking form */}
              <div className="bg-card p-8 md:p-10 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
                    <img src="https://www.ayautomate.com/images/walid-profile.jpg" alt="Walid Boulanouar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Walid Boulanouar</div>
                    <a href="https://www.linkedin.com/in/walid-boulanouar/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-purple hover:underline">View LinkedIn</a>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-6">AI Developer Hiring Call</h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Share what you need built, then schedule the call directly on this page.
                </p>
                <div className="space-y-4 flex-1">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-purple/50 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-purple/50 transition-colors"
                  />
                  <button className="w-full bg-primary-purple hover:bg-primary-purple/90 text-white px-6 py-3 text-sm font-bold tracking-wide transition-colors flex items-center justify-center gap-2">
                    Continue to pick a time →
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-4">Free call, no commitment. Wrong fit? Replaced free within 90 days.</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      30min
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      Google Meet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="bg-background/50 border-t border-border text-foreground relative py-20">
          <div className="w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-10">
              Hiring an AI Developer: Questions
            </h2>
            <div className="space-y-0 divide-y divide-border border-y border-border">
              {[
                {
                  q: 'Where can I hire AI engineers, and how do you differ from a job board?',
                  a: 'A job board gives you applicants to screen. We place AI engineers from our own team, already assessed for technical depth and agent orchestration, so you skip sourcing and interviews. Placement starts from $60,000/year with a 2-4 week window and a 90-day replacement guarantee.',
                },
                {
                  q: 'Are there AI developers for hire on a freelance or contract basis?',
                  a: 'Our default is a placed engineer who joins your team on an ongoing basis. If you need a defined scope instead of a hire, our AI agent development and custom automation services are project based. Book a call and we route you to whichever fits.',
                },
                {
                  q: 'What does an AI engineer for hire cost compared with a US in-house hire?',
                  a: 'Placement starts from $60,000/year with no recruitment fee. The table on this page compares that with a typical US hire once taxes, benefits and recruiting cost are counted. The staffing model calculator lets you run your own numbers.',
                },
                {
                  q: 'What does it actually mean to "hire an AI developer" in 2026?',
                  a: 'Usually one of two things: adding an AI-native engineer to your team who directs a fleet of coding agents (Claude Code and similar tooling) to cover the output of a small team, or bringing on a small AI engineering team to execute a defined roadmap. AY Automate places both: one engineer through Engineer Placement, or 1 to 5 engineers through the Golden Offer.',
                },
                {
                  q: 'How is this different from a freelance marketplace or a staffing agency?',
                  a: 'Marketplaces and staffing agencies connect you to individual freelancers or candidates you still have to vet, interview, and manage yourself. We place developers directly from our own team, already assessed for technical depth and agent-orchestration experience, so there is no sourcing or interview loop on your side.',
                },
                {
                  q: 'How much does it cost to hire an AI developer?',
                  a: 'Placement through Engineer Placement starts from $60,000/year, with no recruitment fees or employer tax overhead on top. The Golden Offer, for teams hiring more than one engineer, is scoped on a kickoff call based on the roles and roadmap. Both are priced well under a comparable US in-house hire once taxes, benefits, and recruiting costs are included.',
                },
                {
                  q: 'How fast can an AI developer start?',
                  a: 'Most Engineer Placement requests move from discovery to shortlist within a few days, with a 2-4 week window from request to start, against a 3-6 month norm for a US hire. Golden Offer timelines depend on the number of roles and are set on the kickoff call.',
                },
                {
                  q: 'What can the AI developer actually build?',
                  a: 'Product features end to end, internal tools, workflow automations, GTM pipelines, and agentic systems wired into your existing stack. The exact skill set (n8n automation, full-stack engineering, AI/LLM integration) depends on the role you request, see the roles above.',
                },
                {
                  q: 'Should I hire one developer or a small team?',
                  a: 'If you need one dedicated hire to cover a defined gap, start with Engineer Placement. If you have a fuller roadmap or need more than one role, the Golden Offer assembles 1 to 5 engineers across Forward Deployed Engineer, GTM Engineer, and AI Automation Architect roles under one accountable lead. Not sure which fits? Book a call either way, we route you to the right option on it.',
                },
                {
                  q: 'What happens if the developer is not a good fit?',
                  a: 'If the fit is wrong, we replace the developer at no extra cost inside the first 90 days. We check in during onboarding so problems surface early, and we adjust scope first when that solves it.',
                },
              ].map((faq, i) => (
                <details key={i} className="group py-6 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none cursor-pointer">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wide">{faq.q}</span>
                    <span className="text-muted-foreground text-xl font-light shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </div>
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}