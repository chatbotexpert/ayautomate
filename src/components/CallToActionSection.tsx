import React from 'react';
import { Zap, ArrowUpRight, Mail } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section id="get-started" className="relative min-h-[80vh] flex flex-col items-center justify-center py-24 sm:py-32 overflow-hidden text-center bg-background border-t border-border/40">
      {/* The Grid Background */}
      <div 
        className="absolute inset-0 bg-[length:100%_4px] pointer-events-none z-0 opacity-[0.05] dark:opacity-20"
        style={{ backgroundImage: 'linear-gradient(to bottom, transparent 50%, var(--primary-purple) 50%)' }}
      ></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        
        {/* Floating Logos - Spread on hover */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-16 h-20 group perspective-1000 relative">
            <div className="transition-all duration-700 ease-out flex-shrink-0 group-hover:-translate-x-6 sm:group-hover:-translate-x-12 relative z-0">
                <div className="transition-transform hover:scale-110 duration-300 cursor-pointer filter grayscale hover:grayscale-0 opacity-40 hover:opacity-100">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-background/60 backdrop-blur-sm border border-border rounded-lg p-1.5 hover:border-primary-purple/50 transition-colors">
                        <img src="https://img.logo.dev/n8n.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=128&format=png&retina=true" alt="n8n logo" loading="lazy" width="48" height="48" className="h-full w-full object-contain" />
                    </div>
                </div>
            </div>
            
            <div className="transition-all duration-700 ease-out flex-shrink-0 group-hover:-translate-x-3 sm:group-hover:-translate-x-6 relative z-10">
                <div className="transition-transform hover:scale-110 duration-300 cursor-pointer filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-background/60 backdrop-blur-sm border border-border rounded-lg p-1.5 hover:border-primary-purple/50 transition-colors">
                        <img src="https://img.logo.dev/claude.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=128&format=png&retina=true" alt="Claude logo" loading="lazy" width="48" height="48" className="h-full w-full object-contain" />
                    </div>
                </div>
            </div>
            
            <div className="transition-all duration-700 ease-out flex-shrink-0 relative z-20 group-hover:scale-110">
                <div className="transition-transform hover:scale-110 duration-300 cursor-pointer filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center bg-background/80 backdrop-blur-md border border-primary-purple/30 rounded-lg p-2 shadow-[0_0_15px_rgba(128,130,193,0.3)] hover:border-primary-purple transition-all">
                        <img src="https://img.logo.dev/cursor.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=128&format=png&retina=true" alt="Cursor logo" loading="lazy" width="48" height="48" className="h-full w-full object-contain" />
                    </div>
                </div>
            </div>
            
            <div className="transition-all duration-700 ease-out flex-shrink-0 group-hover:translate-x-3 sm:group-hover:translate-x-6 relative z-10">
                <div className="transition-transform hover:scale-110 duration-300 cursor-pointer filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-background/60 backdrop-blur-sm border border-border rounded-lg p-1.5 hover:border-primary-purple/50 transition-colors">
                        <img src="https://img.logo.dev/make.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=128&format=png&retina=true" alt="Make logo" loading="lazy" width="48" height="48" className="h-full w-full object-contain" />
                    </div>
                </div>
            </div>
            
            <div className="transition-all duration-700 ease-out flex-shrink-0 group-hover:translate-x-6 sm:group-hover:translate-x-12 relative z-0">
                <div className="transition-transform hover:scale-110 duration-300 cursor-pointer filter grayscale hover:grayscale-0 opacity-40 hover:opacity-100">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-background/60 backdrop-blur-sm border border-border rounded-lg p-1.5 hover:border-primary-purple/50 transition-colors">
                        <img src="https://img.logo.dev/openai.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&size=128&format=png&retina=true" alt="OpenAI logo" loading="lazy" width="48" height="48" className="h-full w-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
        
        {/* AUTOMATION GATEWAY badge */}
        <div className="mb-12 relative">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary-purple/20 to-transparent -z-10"></div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary-purple/30 bg-[#0E0E14] sm:bg-background/80 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full"></span>
                    <span className="relative inline-flex h-2 w-2 bg-primary-purple rounded-full"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-primary-purple uppercase tracking-[0.2em]">AUTOMATION GATEWAY</span>
            </span>
        </div>
        
        {/* DEPLOY AUTOMATION */}
        <h2 className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-bold tracking-tighter text-foreground mb-8 leading-[0.95] flex flex-col">
            <span className="mb-1 sm:mb-2 text-foreground/90 mix-blend-plus-lighter">DEPLOY</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary-purple via-[#8A8DF0] to-[#5A5CA8] drop-shadow-sm">AUTOMATION</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-16 max-w-xl mx-auto leading-relaxed font-medium">
            <span className="text-primary-purple">&gt;</span> System status: <span className="text-foreground font-bold tracking-wide">READY_FOR_DEPLOYMENT</span><br/>
            Transform your business operations today.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 bg-primary-purple px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-primary-purple/90" href="https://cal.com/walidboulanouar/consultation">
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"></span>
                Book a 15-min call
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <a 
                href="mailto:contact@ayautomate.com" 
                className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 border border-border-strong bg-card text-muted-foreground hover:text-foreground hover:border-primary-purple hover:bg-primary-purple/5 transition-all duration-300 uppercase text-xs sm:text-sm font-semibold tracking-widest rounded-none w-full sm:w-auto"
            >
                <Mail className="w-4 h-4" />
                <span>Book a Free Call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
        </div>
      </div>
    </section>
  );
}
