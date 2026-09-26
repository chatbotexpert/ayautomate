import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import DeployAutomationSection from '@/components/DeployAutomationSection';
import Link from 'next/link';

export const metadata = {
  title: 'Playbooks | AY Automate - AI & Automation Guides',
  description: 'Comprehensive frameworks, guides, and resources to help you master AI-powered development and automation workflows.',
};

const playbooks = [
  {
    href: '/playbooks/outbound-agent-for-your-company',
    title: 'Outbound Agent for your Company',
    desc: 'Deploy an automated outbound agent for your company. Set up AI-powered sales and outreach using Vapi.ai and Make.com step by step.',
    category: 'AI',
    difficulty: 'Beginner',
    difficultyColor: 'emerald',
  },
  {
    href: '/playbooks/steps-to-create-your-gpt-that-stop-you-from-overthinking',
    title: 'Create a GPT to Stop Overthinking',
    desc: 'A step-by-step guide to creating a GPT that helps you stop overthinking and take decisive action.',
    category: 'AI Engineering',
    difficulty: 'Beginner',
    difficultyColor: 'emerald',
  },
  {
    href: '/playbooks/how-to-make-your-app-suggested-by-chatgpt',
    title: 'How to Make Your App Suggested by ChatGPT',
    desc: 'Learn the strategies and techniques to get your application recommended by ChatGPT and other AI assistants.',
    category: 'AI Engineering',
    difficulty: 'Intermediate',
    difficultyColor: 'blue',
  },
  {
    href: '/playbooks/breaking-down-context-engineering',
    title: 'Breaking Down Context Engineering',
    desc: 'A comprehensive guide to understanding and implementing context engineering for better AI interactions.',
    category: 'AI Engineering',
    difficulty: 'Advanced',
    difficultyColor: 'red',
  },
  {
    href: '/playbooks/tips-for-ai-coding-part-1',
    title: 'Playbook of Tips For AI Coding #1',
    desc: 'Essential tips and best practices for coding with AI assistants to maximize productivity.',
    category: 'AI Coding',
    difficulty: 'Beginner',
    difficultyColor: 'emerald',
  },
  {
    href: '/playbooks/vibe-coding-saas-mvps-ultimate-guide',
    title: 'Vibe Coding SaaS MVPs: The Ultimate Guide',
    desc: 'The complete guide to building SaaS MVPs using vibe coding methodology for rapid development.',
    category: 'SaaS Development',
    difficulty: 'Intermediate',
    difficultyColor: 'blue',
  },
];

const difficultyStyles: Record<string, string> = {
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  red: 'bg-red-500/10 text-red-400 border-red-500/30',
};

const categories = ['All', 'AI Engineering', 'AI Coding', 'SaaS Development', 'AI'];

export default function PlaybooksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden border-t border-border">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 text-center">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-primary-purple/30 bg-primary-purple/10 text-xs font-medium text-primary-purple uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full" />
                <span className="relative inline-flex h-2 w-2 bg-primary-purple rounded-full" />
              </span>
              AI &amp; Automation Playbooks
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50">
              Step-by-Step Guides
            </span>
            <br />
            <span className="text-primary-purple italic">to Master Automation</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            Comprehensive frameworks, guides, and resources to help you master AI-powered development and automation workflows.
          </p>
        </div>
      </section>

      {/* FILTER + CARDS SECTION */}
      <section className="relative py-12 border-t border-border overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
          {/* Top Bar: Filters + Search + Layout Toggles */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-none border ${
                    i === 0
                      ? 'bg-muted border-primary-purple/50 text-foreground'
                      : 'bg-background border-border text-muted-foreground hover:text-foreground hover:border-primary-purple/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search and Toggles */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.34-4.34" />
                </svg>
                <input
                  type="text"
                  placeholder="Search playbooks..."
                  className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-purple/50 focus:border-primary-purple/50 transition-all"
                />
              </div>
              <div className="flex items-center border border-border">
                <button className="p-2.5 transition-colors bg-muted text-foreground border-r border-border">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                </button>
                <button className="p-2.5 transition-colors bg-background text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                    <line x1="8" x2="21" y1="6" y2="6" />
                    <line x1="8" x2="21" y1="12" y2="12" />
                    <line x1="8" x2="21" y1="18" y2="18" />
                    <line x1="3" x2="3.01" y1="6" y2="6" />
                    <line x1="3" x2="3.01" y1="12" y2="12" />
                    <line x1="3" x2="3.01" y1="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playbooks.map((pb) => (
              <div key={pb.href}>
                <Link
                  href={pb.href}
                  className="group block bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary-purple/50 relative"
                >
                  {/* Corner accents on hover */}
                  <div className="absolute top-0 left-0 w-[3px] h-[3px] border-t border-l border-primary-purple/50 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                  <div className="absolute bottom-0 right-0 w-[3px] h-[3px] border-b border-r border-primary-purple/50 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary-purple/5 blur-[80px] pointer-events-none group-hover:bg-primary-purple/10 transition-colors opacity-0 group-hover:opacity-100" />

                  {/* Card thumbnail */}
                  <div className="relative overflow-hidden bg-muted h-32 w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 via-primary-purple/10 to-primary-purple/20" />
                    {/* Category tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 text-xs font-medium bg-card/80 backdrop-blur-sm text-foreground border border-border">
                        {pb.category}
                      </span>
                    </div>
                    {/* Book icon */}
                    <div className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-purple" aria-hidden="true">
                        <path d="M12 7v14" />
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="relative z-10 p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-purple transition-colors line-clamp-2">
                      {pb.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed font-medium">
                      {pb.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 text-xs font-medium border rounded-none ${difficultyStyles[pb.difficultyColor]}`}>
                        {pb.difficulty}
                      </span>
                      <div className="flex items-center text-primary-purple text-sm font-medium">
                        Read Playbook
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 1: Rather have us build... */}
      <section className="bg-background/50 py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
          <div className="border border-border bg-card p-6 sm:p-8 text-center">
            <p className="text-foreground text-base sm:text-lg font-medium">
              Rather have us build one of these into your stack?{' '}
              <Link href="/services/custom-workflow-automation" className="text-primary-purple hover:underline font-semibold">
                See our workflow automation service
              </Link>{' '}
              or{' '}
              <Link href="/consultation" className="text-primary-purple hover:underline font-semibold">
                book a free consultation
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA 2: Free Weekly Brief */}
      <section className="bg-background border-t border-border py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
          <div className="relative overflow-hidden border border-border bg-card p-5 sm:p-6">
            <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-primary-purple"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-purple">Free weekly brief</p>
            <p className="mt-2 text-lg sm:text-xl font-bold text-foreground leading-tight">The production automations we build for clients, documented</p>
            <p className="mt-1.5 mb-4 text-sm text-muted-foreground leading-relaxed max-w-xl">
              The exact n8n flows, Claude Code setups, and prompts we ship, broken down step by step. No spam, unsubscribe anytime.
            </p>
            <form className="flex w-full gap-2 flex-col sm:flex-row">
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="min-w-0 flex-1 border border-border bg-background px-3 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-purple/30 focus:border-primary-purple"
              />
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 bg-primary-purple px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-purple/90 whitespace-nowrap"
              >
                Get the teardowns
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 group-hover:rotate-45 transition-transform" aria-hidden="true">
                  <path d="m7 7 10 10" />
                  <path d="M17 7v10H7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
