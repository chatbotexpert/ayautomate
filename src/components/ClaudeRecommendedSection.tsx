import React from 'react';

export default function ClaudeRecommendedSection() {
  return (
    <section className="bg-[#09090b] py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
        <div className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
            RECOMMENDED SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[ 
              { title: 'AI Agent Development', desc: 'Build production-grade AI agents' },
              { title: 'OpenClaw & NemoClaw Setup', desc: 'Enterprise agent security stack' },
              { title: 'Custom Training', desc: 'AI upskilling for your team' },
              { title: 'Automation Maintenance', desc: 'Ongoing support & monitoring' }
            ].map((item, i) => (
              <div key={i} className="bg-[#111118] border border-white/5 p-6 hover:bg-white/5 transition-colors cursor-pointer">
                <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
            RELATED READING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[ 
              { title: 'Claude Code Security Audit: Ship AI Code Safely', desc: 'The full guide behind this service' },
              { title: '7 Claude Code Security Risks', desc: 'The vulnerabilities we audit for and fix' },
              { title: 'AI Agent Production Readiness Checklist', desc: 'What to check before an agent touches production' }
            ].map((item, i) => (
              <div key={i} className="bg-[#111118] border border-white/5 p-6 hover:bg-white/5 transition-colors cursor-pointer">
                <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
