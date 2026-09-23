import Navbar from "@/components/Navbar";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CallToActionSection from "@/components/CallToActionSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ToolsMarqueeSection from "@/components/ToolsMarqueeSection";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import OurTeamSection from "@/components/OurTeamSection";
import FreeConsultationSection from "@/components/FreeConsultationSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col overflow-hidden text-black dark:text-[#f0edee] w-full relative h-screen max-h-screen transition-colors duration-500">
        <div aria-hidden={true} className="absolute inset-0 z-[-1] pointer-events-none bg-no-repeat bg-cover bg-top opacity-75 dark:opacity-50" style={{ backgroundImage: "url('/hero-pixel-mountains.webp')" }}></div>
        <div aria-hidden={true} className="absolute inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-white/30 via-white/10 to-white/60 dark:from-[#0E0E14]/30 dark:via-[#0E0E14]/10 dark:to-[#0E0E14]/60"></div>
        
        {/* Decorative Grid Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none dark:hidden" style={{ backgroundImage: "radial-gradient(circle, rgba(120,120,120,0.3) 1.2px, transparent 1.2px)", backgroundSize: "7px 7px", backgroundPosition: "3.5px 3.5px", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 10%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3) 50%, transparent 70%)", maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 10%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3) 50%, transparent 70%)" }}></div>
        <div className="absolute inset-0 z-0 pointer-events-none hidden dark:block" style={{ backgroundImage: "radial-gradient(circle, #f0edee4d 1.2px, transparent 1.2px)", backgroundSize: "7px 7px", backgroundPosition: "3.5px 3.5px", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 10%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3) 50%, transparent 70%)", maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 10%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3) 50%, transparent 70%)" }}></div>
        
        <svg className="absolute w-0 h-0 hidden md:block" aria-hidden={true}><defs><filter id="grid-turbulence" x="0%" y="0%" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="5" stitchTiles="stitch" result="noise"></feTurbulence><feColorMatrix type="saturate" values="0" in="noise" result="mono"></feColorMatrix><feComponentTransfer in="mono" result="faded"><feFuncA type="linear" slope="0.06" intercept="0"></feFuncA></feComponentTransfer><feBlend in="SourceGraphic" in2="faded" mode="overlay"></feBlend></filter></defs></svg>
        
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)", maskImage: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)" }}>
          <div className="absolute inset-0 md:hidden dark:hidden" style={{ backgroundImage: "linear-gradient(rgba(120,120,120,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(120,120,120,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          <div className="absolute inset-0 md:hidden hidden dark:block" style={{ backgroundImage: "linear-gradient(#f0edee24 1px, transparent 1px), linear-gradient(90deg, #f0edee24 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          <div className="absolute inset-0 hidden md:block dark:hidden" style={{ backgroundImage: "linear-gradient(rgba(120,120,120,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(120,120,120,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px", filter: "url(#grid-turbulence)" }}></div>
          <div className="absolute inset-0 hidden md:dark:block" style={{ backgroundImage: "linear-gradient(#f0edee24 1px, transparent 1px), linear-gradient(90deg, #f0edee24 1px, transparent 1px)", backgroundSize: "32px 32px", filter: "url(#grid-turbulence)" }}></div>
        </div>
        
        <div className="absolute inset-0 z-[1] pointer-events-none dark:hidden" style={{ background: "radial-gradient(ellipse 75% 70% at 50% 48%, var(--background) 0%, var(--background) 15%, var(--background) 25%, #ffffff00 75%)" }}></div>
        <div className="absolute inset-0 z-[1] pointer-events-none hidden dark:block" style={{ background: "radial-gradient(ellipse 75% 70% at 50% 48%, var(--background) 0%, var(--background) 15%, var(--background) 25%, #0E0E1400 75%)" }}></div>

        <div className="md:px-6 xl:px-4 flex flex-col w-full max-w-7xl z-10 mx-auto px-4 relative items-center justify-center h-full py-10 sm:py-16 md:py-20 xl:py-8">
          <div className="text-center max-w-5xl mx-auto relative flex-shrink-0 pt-6 sm:pt-16 md:pt-24 xl:pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-7xl font-bold mb-4 sm:mb-8 xl:mb-6 leading-none items-center justify-center">
              <span className="block bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 dark:from-white dark:to-white/40 tracking-tighter mb-2 sm:mb-4 xl:mb-2" style={{ fontFamily: "var(--font-lexend)" }}>
                Scale Your Business
              </span>
              <span className="block text-primary-purple tracking-tighter font-bold my-3 sm:my-6 xl:my-4" style={{ fontFamily: "var(--font-lexend)", fontWeight: 600 }}>
                10X
              </span>
              <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-3xl font-normal text-muted-foreground tracking-normal relative mt-3 sm:mt-4 xl:mt-2 mx-auto w-fit" style={{ fontFamily: "var(--font-lexend)" }}>
                without hiring more staff
                <svg className="absolute left-0 right-0 -bottom-2 w-full h-3 text-primary-purple opacity-70" viewBox="0 0 300 12" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2,7 Q50,3 75,6 T150,7 Q200,10 250,5 T298,7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-[#A89DB0] max-w-2xl mx-auto font-medium leading-relaxed mb-6 sm:mb-10 xl:mb-6">
              We embed a forward deployed engineer inside your team who learns how the work actually happens, then builds the AI systems that take the repetitive tasks off your plate. The leverage of a senior hire, without the headcount.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 xl:gap-4">
              <button className="relative z-20 group inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-6 bg-black dark:bg-[#f0edee] text-white dark:text-[#0E0E14] font-bold uppercase text-xs transition-all hover:bg-[#8082C1] dark:hover:bg-[#8082C1] hover:text-white dark:hover:text-white w-full sm:w-auto sm:min-w-[250px] rounded-none">
                Book a Free Strategy Call
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-right h-5 w-5 group-hover:rotate-45 transition-transform" aria-hidden={true}>
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </button>
              <button className="relative z-20 group inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-6 bg-gray-100 dark:bg-[#130f1a] text-black dark:text-[#f0edee] font-bold uppercase text-xs transition-all hover:bg-gray-200 dark:hover:bg-[#130f1a]/80 hover:text-[#8082c1] dark:hover:text-[#8082c1] w-full sm:w-auto sm:min-w-[250px] rounded-none">
                Explore Solutions
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-right h-5 w-5 group-hover:rotate-45 transition-transform" aria-hidden={true}>
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </button>
            </div>
            
            <p className="mt-4 text-[11px] text-gray-500/70 dark:text-gray-400/70 uppercase tracking-widest font-medium">
              Free · 30 minutes · No commitment
            </p>
            
            <div className="mt-5 text-center">
              <a href="#newsletter" className="relative z-20 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#a0a8e0] underline underline-offset-4 transition-colors">
                Not ready to talk? Get the weekly automation brief →
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent opacity-30 hidden"></div>
      </section>

      {/* Book a Call Button Section */}
      <div className="flex justify-center py-8">
        <button type="button" className="relative z-20 group inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-6 font-bold uppercase text-xs transition-all w-full sm:w-auto sm:min-w-[250px] bg-black dark:bg-[#f0edee] text-white dark:text-black hover:bg-[#8082C1] hover:text-white dark:hover:bg-[#8082C1] dark:hover:text-white">
          Book a Call
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-right h-5 w-5 group-hover:rotate-45 transition-transform" aria-hidden={true}><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
        </button>
      </div>

      {/* Start Here Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 py-6 w-full">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-[#a89db0] mb-4">Start here</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a className="border border-gray-200 dark:border-white/10 p-4 hover:border-black dark:hover:border-white transition-colors group block cursor-pointer" href="/resources/claude-code-challenge">
            <p className="text-sm font-semibold text-black dark:text-[#f0edee] group-hover:text-[#8082C1] dark:group-hover:text-[#8082C1] transition-colors">52-Day Claude Code Challenge</p>
            <p className="text-xs text-gray-500 dark:text-[#a89db0] mt-1">Free: setup, hooks, MCPs, agent swarms. 52 days of real builds.</p>
          </a>
          <a className="border border-gray-200 dark:border-white/10 p-4 hover:border-black dark:hover:border-white transition-colors group block cursor-pointer" href="/case-studies">
            <p className="text-sm font-semibold text-black dark:text-[#f0edee] group-hover:text-[#8082C1] dark:group-hover:text-[#8082C1] transition-colors">Case Studies</p>
            <p className="text-xs text-gray-500 dark:text-[#a89db0] mt-1">Real workflows we automated for clients. Before and after.</p>
          </a>
          <a className="border border-gray-200 dark:border-white/10 p-4 hover:border-black dark:hover:border-white transition-colors group block cursor-pointer" href="/blog">
            <p className="text-sm font-semibold text-black dark:text-[#f0edee] group-hover:text-[#8082C1] dark:group-hover:text-[#8082C1] transition-colors">Blog and Guides</p>
            <p className="text-xs text-gray-500 dark:text-[#a89db0] mt-1">AI agents, models, tools, and automation tactics.</p>
          </a>
        </div>
      </div>
      
      {/* Spacer with Line */}
      <div className="h-24 w-full relative flex items-center justify-center transition-colors duration-500">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent"></div>
      </div>

      {/* Trusted Partners Section */}
      <div className="py-20 w-full relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 dark:bg-[#1a1a24] border border-gray-200 dark:border-white/10 rounded-none text-[#8082C1] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#8082C1]"></div>
            Trusted Partners
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-black to-black/50 dark:from-white dark:to-white/20">
            You're in <span className="text-[#8082C1] italic">Good Company</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-[#a89db0] max-w-2xl mx-auto font-medium leading-relaxed mb-16">
            Powering AI automation for fast-growing US and European enterprises.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "images/clients/ronin-global.webp",
              "images/clients/fleetforward-logo.webp",
              "images/clients/untaylored.webp",
              "images/clients/neoday.webp",
              "images/clients/hello-customer.webp",
              "images/clients/ambry-hill.svg",
              "images/clients/thinkone.webp",
              "images/clients/addictest.svg",
              "images/clients/shems-pub.webp",
              "images/clients/wearview.webp",
              "images/clients/emprende-logo.webp",
              "images/clients/kateb.webp",
              "images/clients/easyclickweb.svg",
              "images/clients/dentakay-logo.svg",
              "images/clients/humanoidz.webp",
              "images/clients/earl-logo.avif"
            ].map((logo, index) => (
              <div key={index} className="bg-[#f8f9fa] dark:bg-[#1a1a24] border border-gray-200 dark:border-white/5 h-28 sm:h-32 flex items-center justify-center p-6 group transition-colors hover:bg-gray-200 dark:hover:bg-[#15121D] hover:border-gray-300 dark:hover:border-white/10 relative">
                <div className="relative w-full h-full flex items-center justify-center">
                  {logo ? (
                    <img 
                      src={`/${logo}`}
                      alt={`Client logo ${index + 1}`} 
                      className={`max-h-full max-w-full object-contain transition-all duration-300 opacity-60 group-hover:opacity-100 ${
                        logo.endsWith('.svg') ? 'dark:invert dark:brightness-110' : ''
                      }`}
                    />
                  ) : (
                    <span className="text-gray-400 dark:text-gray-600 text-xs italic">Logo Missing</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Governments Section */}
      <div className="pb-24 w-full relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-border"></div>
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary-purple/80">TRUSTED BY GOVERNMENTS WORLDWIDE</h3>
            <div className="h-px w-12 bg-border"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="relative opacity-60 hover:opacity-100 transition-all duration-500">
              <img alt="Saudi DGA" src="/images/clients/DGA-Logo.svg" className="h-12 md:h-16 w-auto object-contain transition-all duration-300 dark:invert dark:brightness-110" />
            </div>
            <div className="relative opacity-60 hover:opacity-100 transition-all duration-500">
              <img alt="Maroc Government" src="/images/clients/maroc-gov.svg" className="h-12 md:h-16 w-auto object-contain transition-all duration-300 dark:invert dark:brightness-110" />
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-primary-purple">+30</span>
                <span className="text-muted-foreground font-medium">Companies Served</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-primary-purple">200+</span>
                <span className="text-muted-foreground font-medium">Integrations Deployed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Reviews Section */}
      <div className="py-24 w-full relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-primary-purple/30 bg-primary-purple/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full"></span>
                <span className="relative inline-flex h-2 w-2 bg-primary-purple rounded-full"></span>
              </span>
              <span className="text-xs font-medium text-primary-purple uppercase tracking-widest">Client Reviews</span>
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 tracking-tight">
            <span className="text-foreground">Real Results, </span>
            <span className="text-primary-purple italic">Real Clients</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Hear directly from the businesses we've transformed with AI automation.
          </p>

          {/* Video Carousel */}
          <TestimonialCarousel />
        </div>
      </div>

      {/* Built to Ship Section */}
      <section id="why-us" className="relative bg-background border-t border-border-strong text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 pt-24 sm:pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft font-semibold mb-5">
                Built to ship
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em]">
                We measure success in <span className="italic text-primary-purple">weeks, not slide decks</span>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base md:text-lg text-text-muted leading-snug">
                Real engineers, real agents, real product shipped into your repo. Below is what we actually run for clients, not what we promise on a sales call.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
            {/* Card 1 */}
            <div className="group relative bg-card border border-border-strong overflow-hidden transition-all duration-300 hover:border-primary-purple/40">
              <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border-subtle">
                <span className="h-2 w-2 rounded-full bg-red-500/70"></span>
                <span className="h-2 w-2 rounded-full bg-yellow-500/70"></span>
                <span className="h-2 w-2 rounded-full bg-green-500/70"></span>
                <span className="ml-2 text-[10px] text-text-soft font-mono tracking-tight">ayautomate.dev/agents</span>
                <span className="ml-auto inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-text-soft">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  </span>Live
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <video src="/cursor-agent.webm" className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground leading-snug">Claude Code agents shipping product features</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-card border border-border-strong overflow-hidden transition-all duration-300 hover:border-primary-purple/40">
              <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border-subtle">
                <span className="h-2 w-2 rounded-full bg-red-500/70"></span>
                <span className="h-2 w-2 rounded-full bg-yellow-500/70"></span>
                <span className="h-2 w-2 rounded-full bg-green-500/70"></span>
                <span className="ml-2 text-[10px] text-text-soft font-mono tracking-tight">ayautomate.dev/n8n</span>
                <span className="ml-auto inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-text-soft">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  </span>Live
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <video src="/n8n-hero.webm" className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground leading-snug">n8n revenue automation running 24/7</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-card border border-border-strong overflow-hidden transition-all duration-300 hover:border-primary-purple/40">
              <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border-subtle">
                <span className="h-2 w-2 rounded-full bg-red-500/70"></span>
                <span className="h-2 w-2 rounded-full bg-yellow-500/70"></span>
                <span className="h-2 w-2 rounded-full bg-green-500/70"></span>
                <span className="ml-2 text-[10px] text-text-soft font-mono tracking-tight">ayautomate.dev/make</span>
                <span className="ml-auto inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-text-soft">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  </span>Live
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <video src="/make-hero.webm" className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground leading-snug">Make orchestrations across your stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Capabilities Bento Grid — "5 Ways We Automate Your Business Growth" */}
      <CapabilitiesSection />

      {/* Call To Action — "Fix what's slowing you down" */}
      <CallToActionSection />

      {/* Tools Marquee — "Powerful Tools, Expert Implementation" */}
      <ToolsMarqueeSection />

      {/* Our Solutions — "Innovation Level: High" */}
      <OurSolutionsSection />

      {/* How We Work — "Everything You Need to Become an AI-First Company" */}
      <HowWeWorkSection />

      {/* Our Team — "The Minds Behind the Machines" */}
      <OurTeamSection />

      {/* Free Consultation */}
      <FreeConsultationSection />

      {/* FAQ — "Get Your Questions Answered" */}
      <FAQSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
