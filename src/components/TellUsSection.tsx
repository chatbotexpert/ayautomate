import React from 'react';

export default function TellUsSection() {
  return (
    <section className="border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Tell us what your team repeats every week
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl leading-relaxed">
              Bring one repetitive task. We tell you if it should be an n8n workflow, an
              agent, or left alone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#ai-agent-booking"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-primary-purple hover:text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-none shadow-sm"
              >
                Book a free 30-min call
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
              <a 
                href="/services/ai-strategy"
                className="inline-flex items-center justify-center gap-2 border border-border bg-transparent text-foreground hover:bg-muted px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-none"
              >
                Run the workflow audit
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Related
            </h3>
            
            <div className="space-y-8 border-l border-border pl-6">
              
              <div className="group block">
                <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-primary-purple transition-colors">
                  n8n consulting
                </h4>
                <p className="text-sm text-muted-foreground">
                  n8n design, audits and handover.
                </p>
              </div>

              <div className="group block">
                <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-primary-purple transition-colors">
                  AI automation consulting
                </h4>
                <p className="text-sm text-muted-foreground">
                  Roadmap first, build second.
                </p>
              </div>

              <div className="group block">
                <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-primary-purple transition-colors">
                  Automation payback calculator
                </h4>
                <p className="text-sm text-muted-foreground">
                  Estimate hours saved and payback.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
