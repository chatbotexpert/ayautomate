"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Users, CheckCircle2, Clock, ArrowUpRight, MessageSquare, Phone, MapPin } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";

const testimonials = [
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
  }
];

export default function FreeConsultationSection({ 
    badgeText = 'Free Consultation', 
    titlePart1 = 'See What Your Team Can Hand to ', 
    titlePart2 = 'AI Agents', 
    subtitle = 'Book a free 30-minute call. One of our senior engineers maps your workflows and shows you exactly what a fleet of AI agents could take off your plate, measured in hours back to your team. You keep the roadmap, whether we work together or not.' 
}: { 
    badgeText?: string, 
    titlePart1?: string, 
    titlePart2?: string, 
    subtitle?: string 
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <section id="ai-agent-booking" className="bg-background/50 border-t border-border text-foreground relative py-24 sm:py-32 overflow-hidden transition-colors duration-500 ">
      <div aria-hidden={true} className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-40" style={{"backgroundImage": "url('https://www.ayautomate.com/bg-mountain-pixel.webp')","backgroundRepeat":"repeat-x","backgroundPosition":"center bottom","backgroundSize":"auto 100%"}}></div>
      <div aria-hidden={true} className="absolute inset-0 bg-background/90 dark:bg-background/90 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24" style={{"opacity":1,"transform":"none"}}>
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-primary-purple/30 bg-primary-purple/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-purple"></span>
              </span>
              <span className="text-xs font-semibold text-primary-purple uppercase tracking-widest">{badgeText}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50 dark:from-white dark:to-white/20">
            <span className="text-foreground">{titlePart1}</span>
            <span className="text-primary-purple italic">{titlePart2}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Book a free 30-minute call. One of our senior engineers maps your workflows and shows you exactly what a fleet of AI agents could take off your plate, measured in hours back to your team. You keep the roadmap, whether we work together or not.
          </p>
        </div>

        <div className="group relative flex flex-col lg:flex-row border border-border bg-card transition-all duration-300 overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" style={{ opacity: 1 }}></div>
          <div className="absolute top-0 left-0 w-[3px] h-[3px] border-t border-l border-primary-purple/50 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
          <div className="absolute bottom-0 right-0 w-[3px] h-[3px] border-b border-r border-primary-purple/50 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-purple/5 blur-[80px] pointer-events-none group-hover:bg-primary-purple/10 transition-colors opacity-0 group-hover:opacity-100"></div>
          
          <div className="relative z-20 flex-1 min-w-0 p-8 lg:p-12">
            <div className="mb-8">
              <h3 className="mb-4 text-2xl md:text-4xl font-semibold text-foreground tracking-tight">Book a Free 30-Minute Call</h3>
              <p className="mb-3 text-muted-foreground text-lg leading-relaxed">We'll map your workflows and show you exactly what a fleet of AI agents, run by one senior engineer, could take off your team's plate. No slide deck, no sales pitch. Just a working session, and a plan you can use whether we work together or not.</p>
              <p className="mb-6 text-sm text-muted-foreground">Don't want a call? Email <a href="mailto:walid@ayautomate.com" className="text-primary-purple font-medium hover:underline">walid@ayautomate.com</a></p>
              
              <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[&gt;svg]:px-3 relative bg-background border border-border text-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:border-primary-purple hover:bg-muted overflow-hidden group/btn">
                <span className="relative z-10 flex items-center gap-2">Book a Free Call<ArrowUpRight className="w-5 h-5" /></span>
                <span className="absolute inset-0 bg-primary-purple/10 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></span>
              </button>
            </div>
            
            <p className="lg:hidden text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-3 text-center">What you get</p>
            
            <div className="space-y-2.5 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-center gap-2.5 lg:gap-3">
                <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-muted border border-border flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary-purple" />
                </div>
                <span className="text-sm font-semibold tracking-wide">Free 30-Minute Strategy Call</span>
              </div>
              <div className="flex items-center gap-2.5 lg:gap-3">
                <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-muted border border-border flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary-purple" />
                </div>
                <span className="text-sm font-semibold tracking-wide">Scoped Automation Roadmap</span>
              </div>
              <div className="flex items-center gap-2.5 lg:gap-3">
                <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-muted border border-border flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary-purple" />
                </div>
                <span className="text-sm font-semibold tracking-wide">Same-Day Response</span>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <svg className="w-10 h-10 text-muted-foreground/30 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
              <div className="relative min-h-[120px]">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                    <p className="text-lg italic text-muted-foreground mb-6">"{testimonial.quote.replace(/^“|”$/g, '')}"</p>
                    <div className="flex items-center gap-4">
                      <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full bg-muted border border-border object-cover object-top h-12 w-12" />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button key={idx} onClick={() => setActiveIndex(idx)} className={`w-2 h-2 rounded-full transition-colors ${activeIndex === idx ? 'bg-primary-purple' : 'bg-muted-foreground/30'}`} aria-label={`Go to testimonial ${idx + 1}`}></button>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex gap-2">
              <span className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-sm">
                <MessageSquare className="w-3.5 h-3.5" /> Video Call
              </span>
              <span className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-sm">
                <Phone className="w-3.5 h-3.5" /> Phone Call
              </span>
              <span className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-sm">
                <MapPin className="w-3.5 h-3.5" /> In-Person
              </span>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-4">PRODUCTS WE'VE BUILT HAVE BEEN FEATURED BY</p>
              <div className="flex items-center gap-6">
                <div className="w-8 h-8 rounded bg-[#F26522] flex items-center justify-center text-white font-bold text-xs"><span className="leading-none" style={{fontFamily: 'serif'}}>Y</span></div>
                <div className="h-5 text-red-600 font-bold italic tracking-tighter" style={{fontSize: '20px', lineHeight: '1'}}>a16z</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-5/12 border-t lg:border-t-0 lg:border-l border-border bg-card/50 backdrop-blur-sm relative overflow-hidden flex flex-col p-2 lg:p-6 min-h-[600px] lg:min-h-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 to-transparent pointer-events-none"></div>
            <div className="relative w-full h-full rounded-md overflow-hidden bg-card border border-border/50 shadow-sm flex flex-col">
              <Cal
                calLink="walid-boulanouar/15min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "dark" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
