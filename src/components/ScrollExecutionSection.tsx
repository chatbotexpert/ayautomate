"use client";
import React, { useEffect, useState, useRef } from 'react';
import { RotateCcw } from 'lucide-react';

const steps = [
  {
    tag: "01",
    eyebrow: "The before",
    content: [
      <span className="inline-flex items-center gap-1 rounded bg-white/5 px-1.5 py-0.5 text-primary-purple border border-white/10 text-[0.85em] align-middle">3 mo <span className="opacity-50 text-[10px]">--</span></span>,
      " to hire, ",
      <span className="inline-flex items-center gap-1 rounded bg-white/5 px-1.5 py-0.5 text-primary-purple border border-white/10 text-[0.85em] align-middle">6 mo <span className="opacity-50 text-[10px]">--</span></span>,
      " to onboard, ",
      <span className="inline-flex items-center gap-1 rounded bg-white/5 px-1.5 py-0.5 text-primary-purple border border-white/10 text-[0.85em] align-middle">12 mo <span className="opacity-50 text-[10px]">--</span></span>,
      " to ship the roadmap. By the time the seat was filled, the ",
      <span className="inline-block text-primary-purple transform -rotate-45 align-middle">→</span>,
      " market had already moved."
    ]
  },
  {
    tag: "02",
    eyebrow: "The shift",
    content: [
      "Coding stopped being the bottleneck the moment ",
      <img src="https://www.ayautomate.com/clients/claude.png" className="inline-block w-[1em] h-[1em] align-middle rounded-sm" />,
      " Claude Code, ",
      <img src="https://www.ayautomate.com/clients/mcp.svg" className="inline-block w-[1em] h-[1em] align-middle" />,
      " MCP, and sandboxed agents matured. The bottleneck moved to orchestration."
    ]
  },
  {
    tag: "03",
    eyebrow: "Our move",
    content: [
      "Generalists trained in-house to wire ",
      <img src="https://www.ayautomate.com/clients/claude.png" className="inline-block w-[1em] h-[1em] align-middle rounded-sm" />,
      " Claude Code, ",
      <img src="https://www.ayautomate.com/clients/n8n.png" className="inline-block w-[1em] h-[1em] align-middle rounded-sm" />,
      " n8n, ",
      <img src="https://www.ayautomate.com/clients/mcp.svg" className="inline-block w-[1em] h-[1em] align-middle" />,
      " MCP connectors, and ",
      <img src="https://www.ayautomate.com/clients/e2b.png" className="inline-block w-[1em] h-[1em] align-middle rounded-sm" />,
      " E2B into systems that ship. One human driving a bench of subagents."
    ]
  },
  {
    tag: "04",
    eyebrow: "The proof",
    content: [
      "The multiplier is the stack, not the seniority. That is why we deploy across ",
      <strong className="font-bold text-white">publicly listed enterprise</strong>,
      " and ",
      <strong className="font-bold text-white">bedroom operators</strong>,
      " without changing model."
    ]
  },
  {
    tag: "05",
    eyebrow: "The promise",
    content: [
      "Embed an engineer. Ship a whole product. If ",
      <RotateCcw className="inline-block w-[0.8em] h-[0.8em] transform -rotate-45 align-middle text-text-soft" />,
      " month one does not land, you get it back. No conversations, no exit fee, no notice beyond the current month."
    ]
  }
];

const flattenContent = (contentArray: any[]) => {
  let allItems: any[] = [];
  contentArray.forEach((item: any) => {
      if (typeof item === 'string') {
          const chars = item.split('');
          chars.forEach(char => {
              allItems.push({ type: 'char', value: char });
          });
      } else {
          allItems.push({ type: 'jsx', value: item });
      }
  });
  return allItems;
};

export default function ScrollExecutionSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [subProgress, setSubProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollDistance = height - windowHeight;
      const scrolled = -top;
      
      if (scrolled <= 0) {
        setCurrentStep(0);
        setSubProgress(0);
      } else if (scrolled >= scrollDistance) {
        setCurrentStep(steps.length - 1);
        setSubProgress(1);
      } else {
        const progress = scrolled / scrollDistance;
        const exactStep = progress * steps.length;
        const step = Math.floor(exactStep);
        const sub = exactStep - step;
        
        setCurrentStep(Math.min(step, steps.length - 1));
        setSubProgress(step === steps.length ? 1 : sub);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStepData = steps[currentStep];
  const items = flattenContent(currentStepData.content);
  
  // Make typing finish a bit early in the scroll cycle to avoid trailing
  const typingProgress = Math.min(1, subProgress / 0.85);
  const charsToShow = Math.floor(typingProgress * items.length);
  const displayedItems = items.slice(0, charsToShow);

  return (
    <section className="mb-12 pt-6 border-t border-border-subtle relative">
      <div ref={containerRef} className="relative h-[600vh] w-full">
        
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
          
          <div className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none overflow-hidden">
             <div className="w-[800px] h-[400px] bg-primary-purple blur-[120px] rounded-full mix-blend-screen opacity-15"></div>
          </div>

          <div className="w-full max-w-4xl mx-auto text-center px-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft font-semibold mb-6">
              Across 45+ companies shipped · Enterprise to solo operators
            </p>
            <h3 className="text-4xl sm:text-6xl lg:text-[80px] font-bold leading-[0.95] tracking-[-0.03em] text-balance">
              The new moat is <span className="italic text-primary-purple">speed of execution</span>.
            </h3>
            
            <div className="mt-12 max-w-3xl mx-auto h-[180px] flex flex-col items-center justify-center">
              <div className="flex items-baseline justify-center gap-4 mb-4 text-[11px] uppercase tracking-[0.18em] font-semibold">
                <span className="text-primary-purple transition-all duration-300 uppercase">{currentStepData.eyebrow}</span>
                <span className="text-text-soft tabular-nums">· {currentStepData.tag} / 05</span>
              </div>
              
              <p className="text-xl md:text-2xl lg:text-[28px] leading-[1.4] tracking-[-0.01em] text-foreground font-medium text-center mx-auto max-w-[95%] min-h-[120px]">
                {displayedItems.map((item, i) => {
                    if (item.type === 'jsx') {
                        return <React.Fragment key={i}>{item.value}</React.Fragment>;
                    }
                    return <span key={i}>{item.value}</span>;
                })}
                <span aria-hidden={true} className="inline-block w-[3px] h-[0.95em] align-[-2px] ml-[3px] bg-primary-purple animate-pulse"></span>
              </p>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto flex gap-2">
              {steps.map((_, i) => {
                let barWidth = '0%';
                if (currentStep > i) {
                  barWidth = '100%';
                } else if (currentStep === i) {
                  barWidth = `${subProgress * 100}%`;
                }

                return (
                  <div key={i} className="flex-1 h-[3px] bg-border-strong overflow-hidden rounded-full transition-opacity duration-300" style={{ opacity: currentStep === i ? 1 : 0.4 }}>
                    <div 
                      className="h-full bg-primary-purple" 
                      style={{ width: barWidth }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}