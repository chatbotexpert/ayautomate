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
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
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

      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
