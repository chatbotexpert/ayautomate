import React from 'react';

const OurTeamSection = () => {
  return (
    <section className="bg-[#0C0C12] py-32 w-full overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section (Left Aligned) */}
        <div className="text-left mb-32 max-w-5xl">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8082C1]"></span>
              <span className="text-[10px] font-bold text-[#8F8F99] uppercase tracking-[0.2em]">
                OUR TEAM
              </span>
            </span>
          </div>

          <h2 className="text-5xl md:text-[80px] lg:text-[90px] font-bold mb-8 tracking-tight leading-[1.0] text-white">
            The Minds Behind the Machines<br/>
            Powering <span className="text-[#8082C1] italic font-semibold">Your Automation</span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#8F8F99] leading-[1.6] max-w-xl font-normal mt-10">
            A lean team of builders, strategists, and engineers obsessed with<br/>
            one thing<br/>
            Making AI work for your business, not the other way around.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Member 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-[#8082C1]/20 shadow-[0_0_40px_rgba(128,130,193,0.05)] transition-all duration-500 group-hover:border-[#8082C1]/60 group-hover:shadow-[0_0_60px_rgba(128,130,193,0.15)]">
                <img 
                  src="/images/team/team-walid.webp" 
                  alt="Boulanouar Walid" 
                  loading="lazy" 
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover" 
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <h3 className="text-[20px] md:text-[22px] font-bold text-white tracking-tight">Boulanouar Walid</h3>
              <p className="text-[11px] text-[#8082C1] font-bold uppercase tracking-[0.15em] pb-1">CEO</p>
              <p className="text-[13px] text-[#8F8F99] leading-[1.6] max-w-[240px] mx-auto font-medium">
                Sets the vision, builds client relationships, and makes sure every solution delivers real business impact.
              </p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-[#8082C1]/20 shadow-[0_0_40px_rgba(128,130,193,0.05)] transition-all duration-500 group-hover:border-[#8082C1]/60 group-hover:shadow-[0_0_60px_rgba(128,130,193,0.15)]">
                <img 
                  src="/images/team/team-adel.webp" 
                  alt="Adel Dahani" 
                  loading="lazy" 
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover" 
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <h3 className="text-[20px] md:text-[22px] font-bold text-white tracking-tight">Adel Dahani</h3>
              <p className="text-[11px] text-[#8082C1] font-bold uppercase tracking-[0.15em] pb-1">CTO | Ex IBM</p>
              <p className="text-[13px] text-[#8F8F99] leading-[1.6] max-w-[240px] mx-auto font-medium">
                Ex-IBM AI engineer and enterprise architect. Owns the technical architecture behind every automation and AI agent system we ship.
              </p>
            </div>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-[#8082C1]/20 shadow-[0_0_40px_rgba(128,130,193,0.05)] transition-all duration-500 group-hover:border-[#8082C1]/60 group-hover:shadow-[0_0_60px_rgba(128,130,193,0.15)]">
                <img 
                  src="/images/team/david-arnaux.png" 
                  alt="David Arnaux" 
                  loading="lazy" 
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover" 
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <h3 className="text-[20px] md:text-[22px] font-bold text-white tracking-tight">David Arnaux</h3>
              <p className="text-[11px] text-[#8082C1] font-bold uppercase tracking-[0.15em] pb-1">Co-Founder</p>
              <p className="text-[13px] text-[#8F8F99] leading-[1.6] max-w-[240px] mx-auto font-medium">
                Co-founder and partner leading enterprise strategy, helping large organizations adopt AI and turn it into real, measurable business outcomes.
              </p>
            </div>
          </div>

          {/* Member 4 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-[#8082C1]/20 shadow-[0_0_40px_rgba(128,130,193,0.05)] transition-all duration-500 group-hover:border-[#8082C1]/60 group-hover:shadow-[0_0_60px_rgba(128,130,193,0.15)]">
                <img 
                  src="/images/team/vetted-engineers.webp" 
                  alt="20+ Vetted Engineers" 
                  loading="lazy" 
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover" 
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <h3 className="text-[20px] md:text-[22px] font-bold text-white tracking-tight">20+ Vetted Engineers</h3>
              <p className="text-[11px] text-[#8082C1] font-bold uppercase tracking-[0.15em] pb-1">AI Experts Agents</p>
              <p className="text-[13px] text-[#8F8F99] leading-[1.6] max-w-[240px] mx-auto font-medium">
                Handpicked specialists deployed on-demand. Vetted through real builds, not resumes.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurTeamSection;
