"use client";

import { useState } from 'react';

const testimonials = [
  {
    quote: "“The team is super fast - sometimes we had to slow them down. We managed to scale the company without investing into hiring.”",
    name: "Elie Salame",
    title: "COO, Adstronaut.io",
    image: "https://www.ayautomate.com/images/clients/faces/elie-salame.png"
  },
  {
    quote: "“Fantastic and quite hassle-free. Watch the end-of-day review, give a couple of points of feedback, and it would be fixed the next day.”",
    name: "Connor Miller",
    title: "Systems Engineer / Founder, Uniworx",
    image: "https://ui-avatars.com/api/?name=Connor+Miller&background=random"
  },
  {
    quote: "“They operate exactly like a high-performing senior developer on our team. The agents they built save us hundreds of hours a month.”",
    name: "Ana María Martínez",
    title: "CEO, Easyclick",
    image: "https://ui-avatars.com/api/?name=Ana+Maria&background=random"
  }
];

export default function MiniTestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="flex flex-col relative w-full h-full min-h-[160px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote absolute -left-2 sm:left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 text-primary-purple/30 -z-10 rotate-180"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
      
      {testimonials.map((t, idx) => (
        <div key={idx} className={`transition-opacity duration-500 absolute top-0 left-0 w-full ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
          <blockquote className="pl-6 sm:pl-8 text-sm sm:text-lg lg:text-xl italic text-foreground leading-relaxed font-medium">
            {t.quote}
          </blockquote>
          <figcaption className="mt-4 sm:mt-6 flex items-center gap-2.5 sm:gap-3 pl-6 sm:pl-8">
            <span className="relative inline-block h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm">
              <img src={t.image} alt={t.name} width="48" height="48" className="h-full w-full object-cover"/>
            </span>
            <div className="text-left">
              <p className="text-xs sm:text-base font-semibold text-foreground leading-tight">{t.name}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight mt-0.5">{t.title}</p>
            </div>
          </figcaption>
        </div>
      ))}
      
      {/* Spacer to push dots down relative to absolute content */}
      <div className="h-[140px] sm:h-[180px] w-full"></div>

      <div className="mt-2 flex gap-1.5 pl-8 z-20">
        {testimonials.map((_, idx) => (
          <button 
            key={idx}
            type="button" 
            aria-label={`Show quote ${idx + 1}`} 
            className="p-2.5 -m-1 flex items-center cursor-pointer"
            onClick={() => setActiveIndex(idx)}
          >
            <span aria-hidden="true" className={`block h-1.5 rounded-full transition-all ${idx === activeIndex ? 'w-6 bg-primary-purple' : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'}`}></span>
          </button>
        ))}
      </div>
    </div>
  );
}
