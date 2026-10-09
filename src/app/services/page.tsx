import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata = {
  title: 'AI Services & Training | AY Automate',
  description: 'Comprehensive AI services including hands-on workshops, expert engineer placement, and custom training programs. Transform your team and accelerate AI adoption.',
};

const services = [
  {
    category: 'Automate',
    items: [
      { name: 'AI Agent Development', desc: 'Production agents that ship and ship again', href: '/services/ai-agent-development', icon: 'bot' },
      { name: 'Custom Workflow Automation', desc: 'n8n, Make, or custom, wired into your stack', href: '/services/custom-workflow-automation', icon: 'workflow' },
      { name: 'Custom Automation', desc: 'End-to-end automation for any process', href: '/services/custom-automation', icon: 'zap' },
      { name: 'RAG Pipeline Development', desc: 'Retrieval pipelines tuned for your domain', href: '/services/rag-pipeline-architecture-development', icon: 'database' },
      { name: 'Automation Maintenance', desc: 'Ongoing support, monitoring, evolution', href: '/services/automation-maintenance-support', icon: 'wrench' },
    ],
  },
  {
    category: 'Build',
    items: [
      { name: 'SaaS MVP Development', desc: 'Ship a real product, not a demo', href: '/services/saas-mvp-development', icon: 'layers' },
      { name: 'OpenClaw & NemoClaw', desc: 'Enterprise setup of our internal stack', href: '/services/openclaw-nemoclaw', icon: 'building' },
      { name: 'Claude Code Security Audit', desc: 'Lock down your AI dev environment', href: '/services/claude-code-security-audit', icon: 'shield' },
    ],
  },
  {
    category: 'Grow',
    items: [
      { name: 'Team Augmentation', desc: 'AI-native engineers, placed in 2 to 4 weeks', href: '/services/hire-ai-developers', icon: 'users' },
      { name: 'AI Strategy & Fractional CAIO', desc: 'Where to invest your AI dollar', href: '/services/ai-strategy', icon: 'compass' },
      { name: 'AI Workshops', desc: 'Up-level your team in one week', href: '/services/ai-workshops', icon: 'graduation' },
      { name: 'Custom Training', desc: 'Hands-on programs tailored to your stack', href: '/services/custom-training', icon: 'book' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative z-10 py-24 sm:py-32 border-b border-border">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block border border-primary-purple/30 bg-primary-purple/10 px-3 py-1 mb-8 backdrop-blur-sm">
                <span className="text-xs font-bold tracking-[0.2em] text-foreground uppercase">Our Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight text-foreground leading-[1.1]">
                AI services that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-foreground">
                  ship, not slide.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                One senior engineer, backed by a fleet of AI agents, builds the automation, agents, and infrastructure your team needs to scale without hiring.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        {services.map((category) => (
          <section key={category.category} className="py-16 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
              <div className="mb-10">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary-purple">
                  {category.category}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="group relative border border-border bg-background/50 p-6 transition-all duration-300 hover:border-primary-purple/40 hover:bg-muted/30"
                  >
                    <div className="mb-4">
                      <div className="w-10 h-10 border border-border bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary-purple group-hover:border-primary-purple/40 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-purple transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary-purple opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        <CallToActionSection />
        <FooterSection />
      </div>
    </div>
  );
}
