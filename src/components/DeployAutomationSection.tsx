import React from 'react';
import { Zap, ArrowUpRight, Calendar } from 'lucide-react';

const DeployAutomationSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0C0C12] py-32 md:py-40 flex flex-col items-center justify-center text-center">
      {/* Background grids / effects if needed */}
      <div className="absolute inset-x-0 top-0 h-[50%] bg-[linear-gradient(to_bottom,transparent_50%,#8082C1_100%)] origin-bottom transition-all duration-[2s] ease-out opacity-10" style={{ transform: 'rotateX(20deg) scale(2) translateZ(-200px)' }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(159,163,243,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(159,163,243,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_top,black,transparent)] animate-[grid-scroll_4s_linear_infinite]"></div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[50%] bg-[linear-gradient(to_top,transparent_50%,#8082C1_100%)] origin-top transition-all duration-[2s] ease-out opacity-10" style={{ transform: 'rotateX(-20deg) scale(2) translateZ(-200px)' }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(159,163,243,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(159,163,243,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)] animate-[grid-scroll_4s_linear_infinite_reverse]"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div className="w-[600px] h-[600px] bg-[#8082C1]/5 rounded-full blur-3xl transition-all duration-1000 scale-100 opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[1px] bg-[#8082C1] shadow-[0_0_100px_#8082C1] blur-sm transition-all duration-1000 scale-100"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
        {/* Gateway Badge */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#8082C1]/30 bg-[#8082C1]/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-[#8082C1] opacity-50 rounded-full"></span>
              <span className="relative inline-flex h-2 w-2 bg-[#8082C1] rounded-full"></span>
            </span>
            <span className="text-xs font-medium text-[#8082C1] uppercase tracking-widest">
              AUTOMATION GATEWAY
            </span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-10 leading-[1.0]">
          <span className="block mb-2">DEPLOY</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#8082C1] to-[#4F46E5] transition-all duration-500">
            AUTOMATION
          </span>
        </h2>

        {/* Status Line */}
        <p className="text-sm sm:text-lg md:text-xl text-[#8F8F99] mb-16 max-w-xl mx-auto leading-relaxed font-sans px-4 sm:px-0">
          <span className="text-[#8082C1]">&gt;</span> System status:{' '}
          <span className="text-white font-bold break-all sm:break-normal">READY_FOR_DEPLOYMENT</span>
          <br />
          Transform your business operations today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-yellow-500 text-black font-bold text-base sm:text-lg tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.5)]">
            <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Initialize Automation
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5 group-hover:translate-x-2 transition-transform"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
          </button>
          
          <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-5 border-2 border-[#1F1F2E] bg-[#12121A] text-[#8F8F99] hover:text-white hover:border-[#8082C1] hover:bg-[#8082C1]/10 transition-all duration-300 uppercase text-xs font-sans tracking-widest rounded-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
            <span>Book Free Call</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,#8082C1_50%)] bg-[length:100%_4px] pointer-events-none z-50 opacity-10"></div>
    </section>
  );
};

export default DeployAutomationSection;
