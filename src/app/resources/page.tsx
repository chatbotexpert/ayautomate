import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import CallToActionSection from '@/components/CallToActionSection';

export const metadata = {
  title: 'Resources | AY Automate',
  description: 'Free resources, playbooks, and tools to help you automate smarter. From AI automation playbooks to customer support workflows.',
};

const resources = [
  {
    category: 'Learn',
    items: [
      { name: 'Blog', desc: 'Field notes on shipping AI in production', href: '/blog' },
      { name: 'Playbooks', desc: 'Step-by-step automation playbooks', href: '/playbooks' },
      { name: 'Claude Code Challenge', desc: '30 days of hands-on AI dev drops', href: '/resources/claude-code-challenge' },
      { name: 'FAQ', desc: 'Quick answers to common questions', href: '/faq' },
    ],
  },
  {
    category: 'Playbooks',
    items: [
      { name: 'AI Automation Playbook', desc: 'Clean. Build. Run. Our automation process', href: '/resources/ai-automation-playbook' },
      { name: 'Customer Support Workflow', desc: 'Three Claude agents with a human in the loop', href: '/resources/customer-support-workflow' },
      { name: 'Lead Qualification Playbook', desc: 'Automate your lead scoring and routing', href: '/resources/lead-qualification-playbook' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Tech Stack', desc: 'The tools we use and recommend', href: '/resources/tech-stack' },
      { name: 'No-Code Stack', desc: 'Best no-code tools for automation', href: '/resources/no-code-stack' },
      { name: 'Case Studies', desc: 'Real results from real clients', href: '/case-studies' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative z-10 py-24 sm:py-32 border-b border-border">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block border border-primary-purple/30 bg-primary-purple/10 px-3 py-1 mb-8 backdrop-blur-sm">
                <span className="text-xs font-bold tracking-[0.2em] text-foreground uppercase">Resources</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight text-foreground leading-[1.1]">
                Learn how we{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-foreground">
                  ship AI in production.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                Playbooks, case studies, and tools from the teams that build and maintain AI systems every day.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        {resources.map((category) => (
          <section key={category.category} className="py-16 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4">
              <div className="mb-10">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary-purple">
                  {category.category}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="group relative border border-border bg-background/50 p-6 transition-all duration-300 hover:border-primary-purple/40 hover:bg-muted/30"
                  >
                    <div className="mb-4">
                      <div className="w-10 h-10 border border-border bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary-purple group-hover:border-primary-purple/40 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
                          <path d="M12 7v14"></path>
                          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-purple transition-colors">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {resource.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary-purple opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore
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
