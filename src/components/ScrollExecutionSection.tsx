"use client";
import React, { useEffect, useState, useRef } from 'react';
import { RotateCcw } from 'lucide-react';

const steps = [
  {
    tag: "01",
    eyebrow: "The before",
    h: "The old answer was a senior full-stack hire.",
    p: "Three months to hire, six months to onboard, twelve months to ship the roadmap. By the time the seat was filled, the market had already moved."
  },
  {
    tag: "02",
    eyebrow: "The shift",
    h: "AI software engineering is being rewritten in real time.",
    p: "Coding stopped being the bottleneck the moment Claude Code, MCP, and sandboxed agents matured. The bottleneck moved to orchestration."
  },
  {
    tag: "03",
    eyebrow: "Our move",
    h: "Our engineers are not full-stack. They are orchestrators of agents.",
    p: "Generalists trained in-house to wire Claude Code, n8n, MCP connectors, and E2B into systems that ship. One human driving a bench of subagents."
  },
  {
    tag: "04",
    eyebrow: "The proof",
    h: "Same bench ships for Sage on Monday and a solo founder on Tuesday.",
    p: "The multiplier is the stack, not the seniority. That is why we deploy across publicly listed enterprise and bedroom operators without changing model."
  },
  {
    tag: "05",
    eyebrow: "The promise",
    h: "Month one is fully refundable. Test it.",
    p: "Embed an engineer. Ship a whole product. If [ICON] month one does not land, you get it back. No conversations, no exit fee, no notice beyond the current month."
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

  // We want to type out the characters.
  // The text is: "h " + "p"
  const hText = currentStepData.h;
  const pText = currentStepData.p;
  const totalChars = hText.length + 1 + pText.length;
  
  // Calculate how many characters to show based on subProgress.
  // We can add a slight buffer (e.g. 0.8) so it finishes typing before the step ends.
  const typingProgress = Math.min(1, subProgress / 0.8);
  const charsToShow = Math.floor(totalChars * typingProgress);
  
  let displayedH = "";
  let displayedP = "";
  
  if (charsToShow <= hText.length) {
    displayedH = hText.slice(0, charsToShow);
  } else {
    displayedH = hText;
    displayedP = pText.slice(0, charsToShow - hText.length - 1);
  }

  // Helper to render P with icon if needed
  const renderP = (text) => {
    if (text.includes('[ICON]')) {
      const parts = text.split('[ICON]');
      return (
        <>
          {parts[0]}
          <RotateCcw className="inline-block w-[0.8em] h-[0.8em] mx-1 transform -rotate-45 text-text-soft" />
          {parts[1]}
        </>
      );
    }
    // Handle partial typing of [ICON] - if it ends with [IC etc.
    const partialMatch = text.match(/\[I?C?O?N?$/);
    if (partialMatch) {
      return text.substring(0, partialMatch.index);
    }
    return text;
  };

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
                <span className="text-primary-purple transition-all duration-300">{currentStepData.eyebrow}</span>
                <span className="text-text-soft tabular-nums">· {currentStepData.tag} / 05</span>
              </div>
              
              <p className="text-xl md:text-2xl lg:text-[28px] leading-[1.4] tracking-[-0.01em] text-foreground font-medium text-center mx-auto max-w-[95%] min-h-[120px]">
                {displayedH && <strong>{displayedH}</strong>}
                {displayedH === hText && " "}
                {displayedP && renderP(displayedP)}
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