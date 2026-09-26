"use client";
import React, { useEffect, useState, useRef } from 'react';

const steps = [
  {
    tag: "01",
    eyebrow: "The before",
    text: "The old answer was a senior full-stack hire. Three months to hire, six months to onboard, twelve months to ship the roadmap. By the time the seat was filled, the market had already moved."
  },
  {
    tag: "02",
    eyebrow: "The shift",
    text: "AI software engineering is being rewritten in real time. Coding stopped being the bottleneck the moment Claude Code, MCP, and sandboxed agents matured. The bottleneck moved to orchestration."
  },
  {
    tag: "03",
    eyebrow: "Our move",
    text: "Our engineers are not full-stack. They are orchestrators of agents. Generalists trained in-house to wire Claude Code, n8n, MCP connectors, and E2B into systems that ship. One human driving a bench of subagents."
  },
  {
    tag: "04",
    eyebrow: "The proof",
    text: "Same bench ships for Sage on Monday and a solo founder on Tuesday. The multiplier is the stack, not the seniority. That is why we deploy across publicly listed enterprise and bedroom operators without changing model."
  },
  {
    tag: "05",
    eyebrow: "The promise",
    text: "Month one is fully refundable. Test it. Embed an engineer. Ship a whole product. If month one does not land, you get it back. No conversations, no exit fee, no notice beyond the current month."
  }
];

export default function ScrollExecutionSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [subProgress, setSubProgress] = useState(0);
  const containerRef = useRef(null);

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
        setSubProgress(1); // fully complete
      } else {
        const progress = scrolled / scrollDistance; // 0.0 to 1.0
        const exactStep = progress * steps.length;
        const step = Math.floor(exactStep);
        const sub = exactStep - step;
        
        setCurrentStep(Math.min(step, steps.length - 1));
        setSubProgress(step === steps.length ? 1 : sub);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentText = steps[currentStep].text;
  
  // To make it smoother, we reveal text character by character based on subProgress
  // Usually the text might pause at the end, so let's say the first 80% of scroll types it out, 
  // and the last 20% it stays fully typed.
  const typingProgress = Math.min(1, subProgress / 0.8);
  const charsToShow = Math.max(1, Math.floor(currentText.length * typingProgress));
  const displayedText = currentText.slice(0, charsToShow);

  return (
    <section className="mb-12 pt-6 border-t border-border-subtle relative">
      <div ref={containerRef} className="relative h-[400vh] w-full">
        
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
                <span className="text-primary-purple transition-all duration-300">{steps[currentStep].eyebrow}</span>
                <span className="text-text-soft tabular-nums">· {steps[currentStep].tag} / 05</span>
              </div>
              
              <p className="text-xl md:text-2xl lg:text-[28px] leading-[1.4] tracking-[-0.01em] text-foreground font-medium text-left mx-auto max-w-[80%] min-h-[120px]">
                {displayedText}
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