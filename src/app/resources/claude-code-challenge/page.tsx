import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import DeployAutomationSection from '@/components/DeployAutomationSection';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata = {
  title: '30 Days of Claude Code | AY Automate',
  description: "Follow Walid's daily LinkedIn challenge - interactive presentations on mastering Claude Code for your business. One day at a time, from zero to full automation.",
};

interface ClaudeDay {
  href: string;
  day: string;
  title: string;
  desc: string;
  status: string;
}

export default function ClaudeCodeChallengePage() {
  // Read data from json file
  const dataPath = path.join(process.cwd(), 'src/data/claude-days.json');
  let days: ClaudeDay[] = [];
  try {
    const fileContent = fs.readFileSync(dataPath, 'utf8');
    days = JSON.parse(fileContent);
  } catch (error) {
    console.error('Error loading claude days data:', error);
  }

  // Separate Day 1 from the rest
  const day1 = days.length > 0 ? days[0] : null;
  const remainingDays = days.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-[73px]">
        {/* Header section */}
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 py-8 sm:py-12">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Home
            </Link>
            
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-purple/10 border border-primary-purple/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary-purple" aria-hidden="true">
                  <path d="M12 19h8" />
                  <path d="m4 17 6-6-6-6" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">30 Days of Claude Code</h1>
                <p className="text-muted-foreground mt-2 max-w-2xl text-base sm:text-lg">
                  Follow Walid&#39;s daily LinkedIn challenge - interactive presentations on mastering Claude Code for your business. One day at a time, from zero to full automation.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 text-xs sm:text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                Daily drops at 10am
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                5 min each
              </span>
              <a href="https://www.linkedin.com/in/walid-boulanouar/" target="_blank" rel="noopener noreferrer" className="text-primary-purple hover:underline font-medium">
                Follow Walid on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 py-10">
          {/* Main feature - Day 1 */}
          {day1 && (
            <div className="mb-12">
              <a href={day1.href} target="_blank" rel="noopener noreferrer" className="block">
                <div className="group relative rounded-2xl border border-border p-6 sm:p-8 transition-all hover:border-primary-purple/50 bg-card hover:bg-card/80 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-purple/5 blur-[100px] pointer-events-none group-hover:bg-primary-purple/10 transition-colors opacity-0 group-hover:opacity-100" />
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary-purple/20 text-primary-purple rounded-full text-xs font-bold uppercase tracking-widest border border-primary-purple/30">
                          Day 1
                        </span>
                        <span className="text-muted-foreground text-sm flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75 rounded-full" />
                            <span className="relative inline-flex h-2 w-2 bg-emerald-500 rounded-full" />
                          </span>
                          {day1.status}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary-purple transition-colors">
                        {day1.title}
                      </h2>
                      <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
                        {day1.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary-purple/10 flex items-center justify-center group-hover:bg-primary-purple/20 transition-colors group-hover:scale-110 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-purple" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* Grid section */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-purple">Core series</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground font-mono">Days 2-30</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {remainingDays.map((day: ClaudeDay, idx: number) => (
              <a key={idx} href={day.href} target={day.href.startsWith('http') ? '_blank' : undefined} rel={day.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <div className="group relative rounded-xl border p-4 sm:p-5 transition-all border-border bg-card hover:border-primary-purple/50 hover:bg-card/80 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs sm:text-sm font-mono font-medium text-primary-purple">
                        Day {day.day}
                      </span>
                      {day.status !== 'Locked' && (
                        <>
                          <span className="text-muted-foreground text-[10px] sm:text-xs">•</span>
                          <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] sm:text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                              <path d="M12 6v6l4 2" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            {day.day} min
                          </div>
                        </>
                      )}
                    </div>
                    {day.status === 'Locked' ? (
                      <div className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full border border-border text-muted-foreground bg-muted/50">
                        Locked
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-primary-purple/10 flex items-center justify-center group-hover:bg-primary-purple/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 text-primary-purple group-hover:translate-x-0.5 transition-all" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className={`font-semibold text-sm sm:text-base leading-snug ${day.status === 'Locked' ? 'text-muted-foreground' : 'text-foreground'}`}>
                    {day.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed flex-grow">
                    {day.desc.replace(/&#x27;/g, "'")}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
