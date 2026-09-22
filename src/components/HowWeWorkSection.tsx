import React from 'react';
import { Search, Map, Settings, TrendingUp } from 'lucide-react';

export default function HowWeWorkSection() {
  return (
    <>
      {/* Dark Band for the Book a Call Button */}
      <section className="bg-[#0F0F15] py-12 border-t border-border-strong w-full">
        <div className="flex justify-center">
          <a
            href="https://cal.com/walidboulanouar/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-primary-purple hover:text-white"
          >
            BOOK A CALL
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17h10V7"/><path d="M17 17 7 7"/></svg>
          </a>
        </div>
      </section>

      {/* Main How We Work Section */}
      <section id="how-work-container" className="bg-[#0C0C12] border-t border-[#1F1F2E] text-foreground relative py-24 sm:py-32 overflow-hidden transition-colors duration-500">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">

          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold mb-6 tracking-tight leading-[1.1] text-white">
              Everything You Need to Become an<br/>
              <span className="text-[#8082C1] italic font-semibold">AI-First Company</span>
            </h2>
            
            <p className="text-[17px] text-[#8F8F99] max-w-2xl mx-auto font-normal leading-relaxed mt-6">
              Expert guidance, custom AI implementation, and hands-on training to help you adopt AI the right way.
            </p>
          </div>

          {/* Timeline Stepper */}
          <div className="relative mb-8 pt-8">
            {/* Connecting Line */}
            <div className="absolute top-[44px] left-[44px] right-[44px] h-[1px] bg-[#1F1F2E] hidden md:block z-0"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block">
                {/* The horizontal connecting line */}
                <div className="absolute top-12 left-0 right-0 h-[2px] bg-[#1F1F2E] z-0 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#8082C1] via-[#F59E0B] to-[#8082C1] relative" style={{ width: '25%' }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#8082C1] shadow-[0_0_20px_#8082C1]"></div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 relative z-10">
                  
                  {/* Step 1 */}
                  <div className="relative">
                    <button className="w-full text-left transition-all duration-300 group cursor-default">
                      <div className="relative mb-6 flex items-center justify-center transition-all duration-300 scale-110">
                        <div className="absolute w-24 h-24 rounded-full transition-all duration-300 bg-[#8082C1]/20 border-2 border-[#8082C1] shadow-xl"></div>
                        <div className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 bg-[#8082C1] text-white shadow-lg">
                          <Search className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="space-y-3 px-2">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#8082C1]">01</span>
                            <span className="text-xs font-medium text-[#8082C1]">Week 1</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 transition-colors text-white">Discovery</h3>
                          <p className="text-sm font-medium leading-relaxed text-[#8082C1]">Free audit identifies automation opportunities</p>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <button className="w-full text-left transition-all duration-300 group cursor-pointer">
                      <div className="relative mb-6 flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-105">
                        <div className="absolute w-24 h-24 rounded-full transition-all duration-300 bg-[#12121A] border-2 border-[#1F1F2E] group-hover:border-[#8082C1]/50"></div>
                        <div className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 bg-[#0C0C12] text-[#8F8F99] group-hover:text-[#8082C1] border border-[#1F1F2E]">
                          <Map className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="space-y-3 px-2">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#8F8F99]/60">02</span>
                            <span className="text-xs font-medium text-[#8F8F99]/60">Week 2</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 transition-colors text-[#8F8F99] group-hover:text-white">Strategy</h3>
                          <p className="text-sm font-medium leading-relaxed text-[#8F8F99]/60">Custom roadmap delivered</p>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <button className="w-full text-left transition-all duration-300 group cursor-pointer">
                      <div className="relative mb-6 flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-105">
                        <div className="absolute w-24 h-24 rounded-full transition-all duration-300 bg-[#12121A] border-2 border-[#1F1F2E] group-hover:border-[#8082C1]/50"></div>
                        <div className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 bg-[#0C0C12] text-[#8F8F99] group-hover:text-[#8082C1] border border-[#1F1F2E]">
                          <Settings className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="space-y-3 px-2">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#8F8F99]/60">03</span>
                            <span className="text-xs font-medium text-[#8F8F99]/60">Weeks 3-8</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 transition-colors text-[#8F8F99] group-hover:text-white">Implementation</h3>
                          <p className="text-sm font-medium leading-relaxed text-[#8F8F99]/60">Automation built & tested</p>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Step 4 */}
                  <div className="relative">
                    <button className="w-full text-left transition-all duration-300 group cursor-pointer">
                      <div className="relative mb-6 flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-105">
                        <div className="absolute w-24 h-24 rounded-full transition-all duration-300 bg-[#12121A] border-2 border-[#1F1F2E] group-hover:border-[#8082C1]/50"></div>
                        <div className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 bg-[#0C0C12] text-[#8F8F99] group-hover:text-[#8082C1] border border-[#1F1F2E]">
                          <TrendingUp className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="space-y-3 px-2">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#8F8F99]/60">04</span>
                            <span className="text-xs font-medium text-[#8F8F99]/60">Ongoing</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 transition-colors text-[#8F8F99] group-hover:text-white">Optimization</h3>
                          <p className="text-sm font-medium leading-relaxed text-[#8F8F99]/60">Continuous improvement & support</p>
                        </div>
                      </div>
                    </button>
                  </div>

                </div>

                {/* Detail Card */}
                <div className="mt-12">
                  <div className="bg-[#0C0C12] border border-[#1F1F2E] p-8 md:p-12 hover:border-[#8082C1]/50 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
                    <div className="absolute top-0 left-0 w-[3px] h-[3px] border-t border-l border-[#8082C1]/50 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
                    <div className="absolute bottom-0 right-0 w-[3px] h-[3px] border-b border-r border-[#8082C1]/50 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-1 space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#8082C1]"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                            <span className="text-xs font-sans uppercase tracking-widest text-[#8082C1]">Duration</span>
                          </div>
                          <p className="text-lg font-semibold text-white">Week 1</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#8082C1]"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                            <span className="text-xs font-sans uppercase tracking-widest text-[#8082C1]">Deliverable</span>
                          </div>
                          <p className="text-base font-medium text-[#8F8F99]">Free Audit Report</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#8082C1]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                            <span className="text-xs font-sans uppercase tracking-widest text-[#8082C1]">Your Involvement</span>
                          </div>
                          <p className="text-base font-medium text-[#8F8F99]">30-min consultation call</p>
                        </div>
                      </div>
                      
                      <div className="md:col-span-1">
                        <h4 className="text-sm font-sans uppercase tracking-widest text-[#8082C1] mb-4">What We Do</h4>
                        <ul className="space-y-3">
                          {[
                            "Comprehensive workflow analysis",
                            "Bottleneck identification",
                            "ROI opportunity assessment",
                            "Custom automation roadmap"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#8082C1] flex-shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                              <span className="text-[#8F8F99] font-medium text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="md:col-span-1">
                        <div className="bg-[#12121A] border border-[#1F1F2E] p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F59E0B]"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            <span className="text-xs font-sans uppercase tracking-widest text-[#F59E0B]">Next Step</span>
                          </div>
                          <p className="text-base font-semibold text-white">Custom strategy delivered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20 mb-8">
            <button className="bg-[#1A1A2E]/60 border border-[#2B2B40] text-white px-8 py-3 text-[13px] font-semibold tracking-wide hover:bg-[#2B2B40] transition-all duration-300 flex items-center gap-2 rounded-sm shadow-sm">
              Start Your Journey 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </section>

      {/* Section for Newsletter Box - Distinct Background Band */}
      <section className="bg-[#12121A] py-16 border-t border-[#1F1F2E] w-full flex justify-center">
        <div className="w-full max-w-[700px] px-4 sm:px-6">
          <div className="bg-[#181824] border border-[#2B2B40] border-t-[3px] border-t-[#8082C1] p-6 sm:p-8 relative overflow-hidden shadow-2xl rounded-sm">
            <p className="text-[10px] font-bold text-[#8082C1] uppercase tracking-[0.2em] mb-3">FREE WEEKLY BRIEF</p>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight mb-3">Steal our production automations</h3>
            <p className="text-[13px] sm:text-[14px] text-[#9CA3AF] mb-8 leading-relaxed max-w-[600px]">
              The exact n8n flows, Claude Code setups, and prompts we ship for clients, broken down step by step. No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-[600px]">
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="flex-1 bg-[#0A0A10] border border-[#2B2B40] px-4 py-3 text-[13px] focus:outline-none focus:border-[#8082C1] text-white placeholder:text-[#6B7280] rounded-sm"
              />
              <button className="bg-[#8082C1] text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#6869A6] transition-colors rounded-sm whitespace-nowrap">
                GET THE TEARDOWNS
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
