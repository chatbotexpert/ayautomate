"use client";

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300">
      <div className="bg-white/90 dark:bg-[#0E0E14]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-4 md:px-6 lg:px-8 xl:px-4 py-4 transition-colors duration-300">
        <div className="flex items-center justify-between max-w-7xl mx-auto relative">
          
          <div className="flex items-center">
            <Link href="/">
              <img 
                alt="AY Automate" 
                width="150" 
                height="40" 
                className="h-8 md:h-10 w-auto cursor-pointer ml-2 md:ml-4 object-contain"
                src="https://www.ayautomate.com/ayautomateLogo.webp"
              />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Services Mega Menu */}
            <div className="group relative">
              <button className="text-gray-500 dark:text-[#a89db0] hover:text-black dark:hover:text-[#f0edee] py-2 transition-colors font-medium flex items-center gap-1 cursor-pointer">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:rotate-180">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              
              <div className="absolute top-[100%] left-1/2 -translate-x-[40%] pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
                <div className="w-[1000px] flex border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a24] shadow-xl overflow-hidden">
                  
                  {/* Left Column - Services Links */}
                  <div className="flex-1 border-r border-gray-200 dark:border-white/10 flex flex-col">
                    
                    {/* AUTOMATE */}
                    <div className="p-6 border-b border-gray-200 dark:border-white/5">
                      <div className="mb-4"><span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Automate</span></div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <Link href="/services/ai-agent-development" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">AI Agent Development</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">Production agents that ship and ship again</div>
                          </div>
                        </Link>
                        <Link href="/services/custom-workflow-automation" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v12"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M15 6a9 9 0 0 0-9 9"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">Custom Workflow Automation</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">n8n, Make, or custom, wired into your stack</div>
                          </div>
                        </Link>
                        <Link href="/services/custom-automation" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">Custom Automation</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">End-to-end automation for any process</div>
                          </div>
                        </Link>
                        <Link href="/services/rag-pipeline-architecture-development" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">RAG Pipeline Development</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">Retrieval pipelines tuned for your domain</div>
                          </div>
                        </Link>
                        <Link href="/services/automation-maintenance-support" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">Automation Maintenance</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">Ongoing support, monitoring, evolution</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* BUILD */}
                    <div className="p-6 border-b border-gray-200 dark:border-white/5">
                      <div className="mb-4"><span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Build</span></div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <Link href="/services/saas-mvp-development" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">SaaS MVP Development</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">Ship a real product, not a demo</div>
                          </div>
                        </Link>
                        <Link href="/services/openclaw-nemoclaw" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">OpenClaw & NemoClaw</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">Enterprise setup of our internal stack</div>
                          </div>
                        </Link>
                        <Link href="/services/claude-code-security-audit" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">Claude Code Security Audit</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">Lock down your AI dev environment</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* GROW */}
                    <div className="p-6">
                      <div className="mb-4"><span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Grow</span></div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <Link href="/services/team-augmentation" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">Team Augmentation</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">AI-native engineers, embedded in days</div>
                          </div>
                        </Link>
                        <Link href="/services/ai-strategy" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">AI Strategy & Fractional CAIO</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">Where to invest your AI dollar</div>
                          </div>
                        </Link>
                        <Link href="/services/ai-workshops" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10h20"/><path d="m14 2-2 2-2-2"/><path d="M2 22h20"/><path d="M4 10v12"/><path d="M20 10v12"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">AI Workshops</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">Up-level your team in one week</div>
                          </div>
                        </Link>
                        <Link href="/services/custom-training" className="flex items-start gap-4 p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/link rounded-sm">
                          <div className="text-gray-400 group-hover/link:text-white mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-black dark:text-white group-hover/link:text-white">Custom Training</div>
                            <div className="text-[11px] text-gray-500 dark:text-[#a89db0] mt-1">Hands-on programs tailored to your stack</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Featured */}
                  <div className="w-[320px] bg-gray-50 dark:bg-[#1a1a24] p-6 flex flex-col relative z-10 before:content-[''] before:absolute before:inset-0 before:bg-[#131118]/50 before:-z-10">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">Featured Content</span>
                    <Link href="/services/engineer-placement" className="group/feat block relative overflow-hidden rounded-md mb-6">
                      <div className="aspect-[4/3] w-full relative flex items-center justify-center">
                        <img src="/many-agents-v2.webp" alt="AI-Native Engineers" className="w-full h-full object-cover transition-transform duration-500 group-hover/feat:scale-105" />
                      </div>
                    </Link>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#8b9fd4] mb-2">Featured</div>
                    <div className="text-base font-bold text-black dark:text-white mb-3">AI-Native Engineers</div>
                    <div className="text-[13px] text-gray-500 dark:text-[#a89db0] leading-relaxed mb-6">Embed senior AI-Native engineers directly into your team. Ship faster without the hiring overhead.</div>
                    <Link href="/services/engineer-placement" className="text-[13px] font-bold text-[#8b9fd4] hover:text-[#9baee0] transition-colors flex items-center gap-1 mt-auto">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                  </div>

                </div>

              </div>
            </div>

            {/* Resources Mega Menu */}
            <div className="group relative">
              <button className="text-gray-500 dark:text-[#a89db0] hover:text-black dark:hover:text-[#f0edee] py-2 transition-colors font-medium flex items-center gap-1 cursor-pointer">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:rotate-180">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              
              <div className="absolute top-[100%] left-1/2 -translate-x-[50%] pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
  <div className="w-[1000px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a24] shadow-xl overflow-hidden">
    <div className="grid grid-cols-12"><div className="col-span-12 lg:col-span-8 border-r border-border"><div><div className="bg-muted/40 border-b border-border px-5 py-2"><span className="text-[11px] uppercase tracking-widest text-muted-foreground">Learn</span></div><div className="grid grid-cols-1 md:grid-cols-2"><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30 md:border-r border-border " href="/blog"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-4 w-4" aria-hidden={true}><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">Blog</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">Field notes on shipping AI in production</div></div></Link><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30  " href="/playbooks"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-marked h-4 w-4" aria-hidden={true}><path d="M10 2v8l3-3 3 3V2"></path><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">Playbooks</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">Step-by-step automation playbooks</div></div></Link><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30 md:border-r border-border md:border-b-0" href="/resources/claude-code-challenge"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml h-4 w-4" aria-hidden={true}><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">Claude Code Challenge</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">30 days of hands-on AI dev drops</div></div></Link><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30  md:border-b-0" href="/faq"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-question-mark h-4 w-4" aria-hidden={true}><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">FAQ</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">Quick answers to common questions</div></div></Link></div></div><div><div className="bg-muted/40 border-b border-border px-5 py-2"><span className="text-[11px] uppercase tracking-widest text-muted-foreground">Playbooks</span></div><div className="grid grid-cols-1 md:grid-cols-2"><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30 md:border-r border-border " href="/resources/ai-automation-playbook"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow h-4 w-4" aria-hidden={true}><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">AI Automation Playbook</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">Clean. Build. Run. Our automation process</div></div></Link><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30  " href="/resources/customer-support-workflow"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot h-4 w-4" aria-hidden={true}><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">Customer Support Workflow</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">Three Claude agents with a human in the loop</div></div></Link><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30 md:border-r border-border md:border-b-0" href="/resources/lead-qualification-playbook"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-4 w-4" aria-hidden={true}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">Lead Qualification Playbook</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">Capture, enrich, score, and route leads</div></div></Link><div className="hidden md:block border-b border-border"></div></div></div><div><div className="bg-muted/40 border-b border-border px-5 py-2"><span className="text-[11px] uppercase tracking-widest text-muted-foreground">Explore</span></div><div className="grid grid-cols-1 md:grid-cols-2"><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30 md:border-r border-border " href="/resources/no-code-stack"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes h-4 w-4" aria-hidden={true}><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">No-Code Stack</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">The no-code tools we ship with daily</div></div></Link><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30  " href="/resources/tech-stack"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-4 w-4" aria-hidden={true}><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">Tech Stack</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">200+ tools across our full stack</div></div></Link><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30 md:border-r border-border " href="/tools"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hammer h-4 w-4" aria-hidden={true}><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">Tools</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">Free utilities, calculators, prompts</div></div></Link><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30  " href="/models"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu h-4 w-4" aria-hidden={true}><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">AI Model Directory</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">Compare 297+ models: pricing, speed, benchmarks</div></div></Link><Link className="group flex items-start gap-4 px-5 py-4 border-b border-border transition-colors hover:bg-muted/30 md:border-r border-border md:border-b-0" href="/careers"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground group-hover:text-primary-purple transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check h-4 w-4" aria-hidden={true}><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></span><div className="min-w-0"><div className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">Careers</div><div className="text-xs text-muted-foreground leading-relaxed mt-0.5">Join the AI-native engineering team</div></div></Link><div className="hidden md:block border-b border-border"></div></div></div></div><div className="col-span-12 lg:col-span-4 flex flex-col bg-card"><div className="bg-muted/40 border-b border-border px-5 py-2"><span className="text-[11px] uppercase tracking-widest text-muted-foreground">Featured Content</span></div><div className="flex-1 flex flex-col"><Link className="group block relative overflow-hidden border-b border-border" style={{"background":"radial-gradient(ellipse at 50% 40%, color-mix(in srgb, var(--primary-purple) 24%, transparent) 0%, color-mix(in srgb, var(--primary-purple) 8%, transparent) 60%, transparent 100%), linear-gradient(135deg, color-mix(in srgb, var(--primary-purple) 14%, transparent), color-mix(in srgb, var(--primary-purple) 4%, transparent))"}} href="/resources/claude-code-challenge"><div className="aspect-[16/10] w-full relative"><img src="/ship-product.webp" alt="30 Days of Claude Code" loading="lazy" className="absolute inset-0 h-full w-full object-contain object-center p-3 transition-transform duration-300 group-hover:scale-[1.02]"/></div></Link><div className="flex flex-col flex-1 px-5 py-4"><p className="text-[10px] font-bold uppercase tracking-widest text-primary-purple/70 mb-2">Featured</p><h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">30 Days of Claude Code</h3><p className="text-xs text-muted-foreground leading-relaxed">A free daily challenge to level up your AI development skills, one project at a time.</p><Link className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-purple hover:underline underline-offset-4" href="/resources/claude-code-challenge">Start the challenge <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3 w-3" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></Link></div></div></div></div></div>
</div>
</div>
</div>
<div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors border border-transparent dark:border-gray-800"
            >
              {mounted && currentTheme === 'dark' ? (
                <svg className="w-4 h-4 text-[#8b9fd4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent shadow-xs hover:bg-gray-100 dark:hover:bg-white/5 text-black dark:text-[#f0edee] h-10 px-4 font-medium rounded-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Book a Call
            </button>
            
            <Link href="/golden-offer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm bg-[#f4f1f2] dark:bg-[#161a26] text-black dark:text-white font-medium relative overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 hover:scale-105 rounded-none h-10 px-6" style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.2), 0 0 40px rgba(255, 215, 0, 0.1)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 animate-pulse"></div>
              <span className="relative z-10">Skip the Hiring Grind</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-1 h-4 w-4 relative z-10" aria-hidden={true}>
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="flex lg:hidden items-center gap-2">
            <button className="p-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6">
                <path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
