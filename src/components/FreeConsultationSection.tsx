"use client";

import React, { useState } from 'react';

const testimonials = [
  {
    quote: "“The team is super fast - sometimes we had to slow them down. We managed to scale the company without investing into hiring.”",
    name: "Elie Salame",
    title: "COO, Adstronaut.io",
    image: "https://www.ayautomate.com/images/clients/faces/elie-salame.png"
  },
  {
    quote: "“Because of our collaboration with AY Automate, we're able to deliver and build full SaaS solutions in a matter of weeks.”",
    name: "Wytze de Haan",
    title: "Co-founder, Part of Narrative",
    image: "https://www.ayautomate.com/images/clients/faces/wytze-de-haan.jpg"
  },
  {
    quote: "“Fantastic and quite hassle-free. Watch the end-of-day review, give a couple of points of feedback, and it would be fixed the next day.”",
    name: "Connor Miller",
    title: "Systems Engineer / Founder, Uniworx",
    image: "https://www.ayautomate.com/images/clients/faces/connor-miller.jpg"
  },
  {
    quote: "“We needed a very specific role and AY Automate helped us get an AI engineer pretty fast - someone who got quickly into our processes and our team.”",
    name: "Othmane Khadri",
    title: "Founder, Earleads.com",
    image: "https://www.ayautomate.com/images/clients/faces/othmane-khadri.jpg"
  },
  {
    quote: "“We asked AY to build our MVP, and they did it in one month. Very responsive, very quick in their delivery.”",
    name: "Jim Adams",
    title: "CEO, MeetLexi",
    image: "https://www.ayautomate.com/images/clients/faces/jim-adams.webp"
  },
  {
    quote: "“Their communication is fast and easy. The team is very skilled and works quickly - you can really see the quality in what they deliver.”",
    name: "Ana Maria Martinez",
    title: "Founder, EasyClickWeb",
    image: "https://www.ayautomate.com/images/clients/faces/ana-maria-martinez.webp"
  },
  {
    quote: "“One of his engineers joined me and built the product fully focused alongside me. After 30 days we had a working prototype - super cool, very impressive.”",
    name: "Roald Larsen",
    title: "CEO, Untaylored",
    image: "https://www.ayautomate.com/images/clients/faces/roald-larsen.jpg"
  },
  {
    quote: "“I'm partnering with Walid and his team across every enterprise company I work with. They are basically the best wrapper of Claude Code.”",
    name: "David Arnoux",
    title: "Founder, GrowthTribe / Humanoidz",
    image: "https://www.ayautomate.com/images/clients/faces/david-arnoux.jpg" 
  },
  {
    quote: "“We needed an end-to-end product - front-end, back-end, infrastructure, data model. One engineer handled all of it and delivered in 30 days.”",
    name: "Roald Larsen",
    title: "CEO, Untaylored",
    image: "https://www.ayautomate.com/images/clients/faces/roald-larsen.jpg"
  }
];

export default function FreeConsultationSection({ 
        badgeText = 'AI Agent Audit', 
        titlePart1 = 'Deploy your first ', 
        titlePart2 = 'autonomous agent.', 
        subtitle = 'Book a free 30-min call and we will map the agent architecture, tools, data access, and first workflow worth automating.',
        calendarTitle = 'Free Strategy Call',
        calendarSubtitle,
        sectionId = 'ai-agent-booking'
    }: { 
        badgeText?: string, 
        titlePart1?: string, 
        titlePart2?: string, 
        subtitle?: string,
        calendarTitle?: string,
        calendarSubtitle?: React.ReactNode,
        sectionId?: string
    }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id={sectionId} className="bg-background/50 border-t border-border text-foreground relative py-24 sm:py-32 overflow-hidden transition-colors duration-500 "><div aria-hidden={true} className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-40" style={{"backgroundImage": "url('https://www.ayautomate.com/bg-mountain-pixel.webp')","backgroundRepeat":"repeat-x","backgroundPosition":"center bottom","backgroundSize":"auto 100%"}}></div><div aria-hidden={true} className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/40 via-background/70 to-background/40"></div><div aria-hidden={true} className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-background to-transparent"></div><div className="absolute inset-0  bg-[size:24px_24px] pointer-events-none" style={{"opacity":"var(--grid-opacity)"}}></div><div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4 xl:px-4">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 border border-primary-purple/30 bg-primary-purple/10 px-3 py-1 mb-8 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-purple"></span>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary-purple">{badgeText}</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium tracking-tight text-foreground mb-8 leading-[1.1]">
              {titlePart1} <span className="text-primary-purple italic">{titlePart2}</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto">
              {subtitle}
            </p>
          </div><div className="group relative flex flex-col lg:flex-row border border-border bg-card transition-all duration-300 overflow-hidden shadow-xl" ><div className="absolute inset-0  bg-[size:24px_24px] pointer-events-none" style={{"opacity":"var(--grid-opacity)"}}></div><div className="absolute top-0 left-0 w-[3px] h-[3px] border-t border-l border-primary-purple/50 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div><div className="absolute bottom-0 right-0 w-[3px] h-[3px] border-b border-r border-primary-purple/50 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div><div className="absolute top-0 right-0 w-40 h-40 bg-primary-purple/5 blur-[80px] pointer-events-none group-hover:bg-primary-purple/10 transition-colors opacity-0 group-hover:opacity-100"></div><div className="relative z-20 flex-1 min-w-0 p-8 lg:p-12">
            <div className="mb-8">
              <h3 className="mb-4 text-2xl md:text-4xl font-semibold text-foreground tracking-tight">Book a 30min Free Strategy Call</h3>
              <p className="mb-3 text-muted-foreground text-lg leading-relaxed">In this call, we'll walk through your project scope, timeline, and goals - so we can both check if we're a fit. No obligation, no slide deck, just a working session.</p>
              <p className="mb-6 text-sm text-muted-foreground">Don't want a call? Email <a href="mailto:walid@ayautomate.com" className="text-primary-purple font-medium hover:underline">walid@ayautomate.com</a></p>
              
              <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[&gt;svg]:px-3 relative bg-background border border-border text-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:border-primary-purple hover:bg-muted overflow-hidden group/btn">
                <span className="relative z-10 flex items-center gap-2">Book Now<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
                <span className="absolute inset-0 bg-primary-purple/10 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></span>
              </button>
            </div>
            
            <div className="space-y-2.5 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-center gap-2.5 lg:gap-3">
                <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-muted border border-border flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary-purple" aria-hidden={true}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </div>
                <span className="text-sm font-semibold tracking-wide">Opportunity Map</span>
              </div>
              <div className="flex items-center gap-2.5 lg:gap-3">
                <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-muted border border-border flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary-purple" aria-hidden={true}><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                </div>
                <span className="text-sm font-semibold tracking-wide">Implementation Path</span>
              </div>
              <div className="flex items-center gap-2.5 lg:gap-3">
                <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-muted border border-border flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary-purple" aria-hidden={true}><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                </div>
                <span className="text-sm font-semibold tracking-wide">Fast Follow-Up</span>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <svg className="w-10 h-10 text-muted-foreground/30 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden={true}><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
              <div className="relative min-h-[140px]">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                    <p className="text-lg italic text-foreground leading-relaxed font-medium mb-6">{testimonial.quote}</p>
                    <div className="flex items-center gap-4">
                      <img src={testimonial.image} alt={testimonial.name} width="48" height="48" className="rounded-full bg-muted border border-border object-cover object-top h-12 w-12" />
                      <div>
                        <h4 className="font-semibold text-foreground text-base leading-tight">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground leading-tight mt-0.5">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button key={idx} onClick={() => setActiveIndex(idx)} className={`block h-1.5 rounded-full transition-all ${activeIndex === idx ? 'w-6 bg-primary-purple' : 'w-1.5 bg-muted-foreground/30'}`} aria-label={`Go to testimonial ${idx + 1}`}></button>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex gap-2">
              <span className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video w-3.5 h-3.5" aria-hidden={true}><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
                Video Call
              </span>
              <span className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-3.5 h-3.5" aria-hidden={true}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Phone Call
              </span>
              <span className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square w-3.5 h-3.5" aria-hidden={true}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                In-Person
              </span>
            </div>
            <div className="mt-12 overflow-hidden border-t border-border pt-12">
               <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 font-semibold mb-6">WE'VE CREATED PRODUCTS FEATURED IN</p>
               <div style={{"maskImage":"linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 8%, rgb(0,0,0) 92%, rgba(0,0,0,0) 100%)","WebkitMaskImage":"linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 8%, rgb(0,0,0) 92%, rgba(0,0,0,0) 100%)"}} className="relative w-full overflow-hidden">
                  <ul style={{"width":"max-content","animation":"ay-marquee 35s linear infinite"}} className="flex items-center gap-x-8 py-2">
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={false} title="Y Combinator" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/ycombinator.png" alt="Y Combinator" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={false} title="a16z" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/a16z.png" alt="a16z" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={false} title="HackerOne" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/hackerone.svg" alt="HackerOne" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={false} title="BBC" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/bbc.svg" alt="BBC" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={false} title="FBM" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/fbm.svg" alt="FBM" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={false} title="France TV" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/france-tv.png" alt="France TV" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={false} title="Le Parisien" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/leparisien.svg" alt="Le Parisien" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={true} title="Y Combinator" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/ycombinator.png" alt="" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={true} title="a16z" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/a16z.png" alt="" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={true} title="HackerOne" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/hackerone.svg" alt="" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={true} title="BBC" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/bbc.svg" alt="" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={true} title="FBM" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/fbm.svg" alt="" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={true} title="France TV" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/france-tv.png" alt="" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                     <li className="flex h-10 w-[150px] sm:h-12 sm:w-[170px] items-center justify-center"><div aria-hidden={true} title="Le Parisien" className="flex h-full w-full items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100"><img src="https://www.ayautomate.com/images/press/leparisien.svg" alt="" width="170" height="48" loading="lazy" className="max-h-full max-w-full object-contain"/></div></li>
                  </ul>
               </div>
            </div>
          </div>
<div className="relative z-20 flex-1 min-w-0 p-8 lg:p-12 flex items-center justify-center overflow-hidden"><div aria-hidden={true} className="absolute inset-0 pointer-events-none bg-no-repeat bg-cover bg-center" style={{"backgroundImage": "url('https://www.ayautomate.com/bg-mountain-pixel.webp')"}}></div><div aria-hidden={true} className="absolute inset-0 pointer-events-none" style={{"background":"radial-gradient(ellipse 70% 55% at 50% 55%, color-mix(in srgb, var(--card) 78%, transparent) 0%, color-mix(in srgb, var(--card) 30%, transparent) 55%, transparent 85%)"}}></div><div className="relative z-10 w-full max-w-md"><div className="rounded-2xl border border-primary-purple/20 bg-card p-3 shadow-sm transition-all duration-500 ease-out group-hover:scale-[1.01]"><div className="rounded-xl border border-border bg-background p-7 sm:p-8 transition-colors group-hover:border-primary-purple/40"><div className="flex items-center gap-3 mb-4"><span className="relative inline-block h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary-purple/40 bg-primary-purple/10"><img alt="Walid Boulanouar" loading="lazy" width="40" height="40" decoding="async"  className="h-full w-full object-cover" style={{"color":"transparent"}}  src="https://www.ayautomate.com/images/downloaded/team-walid.webp"/></span><div className="flex flex-col leading-tight"><p className="text-sm font-medium text-foreground">Walid Boulanouar</p><a href="https://www.linkedin.com/in/walid-boulanouar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] text-primary-purple hover:underline mt-0.5"><svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden={true}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"></path></svg>View LinkedIn</a></div></div><h4 className="text-2xl font-bold text-foreground mb-5 tracking-tight">{calendarTitle}</h4>{calendarSubtitle ? (<p className="text-sm text-muted-foreground leading-relaxed mb-6">{calendarSubtitle}</p>) : (<p className="text-sm text-muted-foreground leading-relaxed mb-6"><span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-muted-foreground uppercase mb-4 block">30 MINUTES &middot; GOOGLE MEET &middot; FREE</span>No fixed packages, no sales pitch. <strong className="text-foreground font-semibold">You leave with a scoped plan, call or not.</strong></p>)}<form className="space-y-3 mb-6"><div><label htmlFor="bc-name" className="sr-only">Your name</label><input id="bc-name" type="text" required={true} placeholder="Your name" autoComplete="name" className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary-purple/60 focus:outline-none focus:ring-1 focus:ring-primary-purple/30 disabled:opacity-60" value=""/></div><div><label htmlFor="bc-email" className="sr-only">Work email</label><input id="bc-email" type="email" required={true} placeholder="Work email" autoComplete="email" className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary-purple/60 focus:outline-none focus:ring-1 focus:ring-primary-purple/30 disabled:opacity-60" value=""/></div><button type="submit" disabled={true} className="group/cta inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-purple px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-purple/90 disabled:opacity-60">Continue to pick a time<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" aria-hidden={true}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></form><div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground border-t border-border pt-5"><div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4 text-muted-foreground" aria-hidden={true}><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg><span>30min</span></div><div className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded bg-foreground text-background text-[9px] font-bold">Cal</span><span>Google Meet</span></div></div></div></div></div></div></div><div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground font-medium" ><div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4 text-primary-purple" aria-hidden={true}><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg><span>Usually responds in 1 hour</span></div><div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 text-primary-purple" aria-hidden={true}><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg><span>No commitment required</span></div></div></div></section>
  );
}
