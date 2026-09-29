import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, CircleGauge, Settings2, ShieldCheck, Wrench, FileText, CheckCircle2, Workflow } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import DeployAutomationSection from '@/components/DeployAutomationSection';

export default function CustomerSupportWorkflowPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="min-h-screen">
        {/* HERO SECTION */}
        <section className="relative border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/10 via-primary-purple/[0.02] to-transparent pointer-events-none"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4 pt-28 pb-16">
            <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Link className="hover:text-foreground transition-colors inline-flex items-center gap-1" href="/resources">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Resources
              </Link>
              <span>/</span>
              <span className="text-foreground">Customer Support Workflow</span>
            </div>
            
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-purple/10 border border-primary-purple/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-purple">
                  <Settings2 className="h-3 w-3" aria-hidden="true" />
                  Workflow
                </span>
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                  Customer Support Workflow
                </h1>
                <p className="mt-5 max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Triage, draft, and resolve 80% of tickets with a Claude-powered agent, without changing your helpdesk.
                </p>
                
                <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border max-w-lg">
                  <div className="bg-background px-4 py-4 text-left">
                    <dt className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">80%</dt>
                    <dd className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground line-clamp-2">tickets auto-handled</dd>
                  </div>
                  <div className="bg-background px-4 py-4 text-left">
                    <dt className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">2x</dt>
                    <dd className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground line-clamp-2">first-response speed</dd>
                  </div>
                  <div className="bg-background px-4 py-4 text-left">
                    <dt className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">1 day</dt>
                    <dd className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground line-clamp-2">to deploy</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                {/* Visual block instead of image */}
                <div className="rounded-2xl border border-border bg-card shadow-xl shadow-primary-purple/5 overflow-hidden">
                  <div 
                    className="aspect-[4/5] w-full flex items-center justify-center p-8"
                    style={{ background: 'radial-gradient(ellipse at 50% 40%, color-mix(in srgb, var(--primary-purple) 22%, transparent), transparent 65%), linear-gradient(135deg, color-mix(in srgb, var(--primary-purple) 8%, var(--card)), var(--card))' }}
                  >
                    <div className="w-full h-full rounded-xl border border-[#ffffff14] bg-[#0c0c12] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-purple/20 blur-3xl rounded-full"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-purple/10 blur-3xl rounded-full"></div>
                      
                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-lg bg-primary-purple/20 flex items-center justify-center border border-primary-purple/30 mb-6">
                          <Workflow className="h-5 w-5 text-primary-purple" />
                        </div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-primary-purple/80 mb-2">AY.Workflow</p>
                        <h3 className="text-2xl font-bold text-white leading-tight">Customer<br/>Support<br/>Workflow</h3>
                      </div>
                      
                      <div className="relative z-10 w-full bg-[#1a1a24] border border-[#ffffff14] rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <p className="text-xs font-mono text-muted-foreground">system.status</p>
                        </div>
                        <p className="text-xs font-mono text-white">active: <span className="text-primary-purple">triage_agent</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-16 max-w-[680px]">
              
              <article>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary-purple">The problem</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
                  Support teams scale linearly. Your AI doesn't have to
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Every new customer adds new tickets. The traditional solution: hire more agents. The cost compounds.</p>
                  <p>Modern support agents handle classification, draft generation, and resolution suggestion in <strong className="font-semibold text-foreground">the same workflow</strong>, without replacing your helpdesk. It's the same pattern our <Link href="/services/ai-agent-development" className="text-primary-purple font-medium hover:underline">AI agent development</Link> team builds for production support, sales, and ops teams.</p>
                </div>
              </article>

              <article>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary-purple">The architecture</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
                  Three Claude agents working together
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Plug into your existing helpdesk via webhook. Three specialized agents take over.</p>
                </div>
                
                <ul className="mt-8 grid gap-4">
                  <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-purple/10 border border-primary-purple/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-merge h-5 w-5 text-primary-purple"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">Triage agent</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Tags + routes to the right queue in &lt;2s.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-purple/10 border border-primary-purple/20">
                      <FileText className="h-5 w-5 text-primary-purple" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">Draft agent</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Writes a reply in your brand voice with citations from your docs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-purple/10 border border-primary-purple/20">
                      <ShieldCheck className="h-5 w-5 text-primary-purple" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">Approval agent</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Auto-sends low-risk replies. Holds high-risk ones for human review.</p>
                    </div>
                  </li>
                </ul>
              </article>

              <article>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary-purple">Production setup</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
                  Inside the agent loop
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>We use Claude's tool calling + a vector index of your help docs. Each ticket runs through this pipeline.</p>
                </div>
                
                <pre className="mt-8 overflow-x-auto rounded-2xl border border-[#ffffff14] bg-[#0c0c12] p-6 text-[13px] sm:text-sm font-mono leading-[2]"><code><span className="text-[#a89db0] italic">// pseudo-flow</span>{"\n"}
<span className="text-[#61afef]">onTicket</span><span className="text-foreground">(ticket) {"{"}</span>{"\n"}
<span className="text-foreground">  </span><span className="text-[#c678dd]">const</span><span className="text-foreground"> tags = </span><span className="text-[#c678dd]">await</span><span className="text-foreground"> </span><span className="text-[#61afef]">triage</span><span className="text-foreground">(ticket)</span>{"\n"}
<span className="text-foreground">  </span><span className="text-[#c678dd]">if</span><span className="text-foreground"> (tags.</span><span className="text-[#61afef]">includes</span><span className="text-[#e5c07b]">('billing')</span><span className="text-foreground">) </span><span className="text-[#c678dd]">return</span><span className="text-foreground"> </span><span className="text-[#61afef]">route</span><span className="text-[#e5c07b]">('billing-queue')</span>{"\n"}
<span className="text-foreground">  </span><span className="text-[#c678dd]">const</span><span className="text-foreground"> draft = </span><span className="text-[#c678dd]">await</span><span className="text-foreground"> </span><span className="text-[#61afef]">drafter</span><span className="text-foreground">(ticket, kb.</span><span className="text-[#61afef]">search</span><span className="text-foreground">(ticket))</span>{"\n"}
<span className="text-foreground">  </span><span className="text-[#c678dd]">if</span><span className="text-foreground"> (</span><span className="text-[#61afef]">confidence</span><span className="text-foreground">(draft) &gt; </span><span className="text-[#d19a66]">0.8</span><span className="text-foreground">) </span><span className="text-[#c678dd]">return</span><span className="text-foreground"> </span><span className="text-[#61afef]">autoSend</span><span className="text-foreground">(draft)</span>{"\n"}
<span className="text-foreground">  </span><span className="text-[#c678dd]">return</span><span className="text-foreground"> </span><span className="text-[#61afef]">holdForReview</span><span className="text-foreground">(draft)</span>{"\n"}
<span className="text-foreground">{"}"}</span></code></pre>
              </article>
            </div>
            
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-primary-purple mb-3">Tools we use</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-purple/10 text-primary-purple text-[11px] font-bold">C</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">Claude Code</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">Agent orchestration + draft generation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-purple/10 text-primary-purple text-[11px] font-bold">I</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">Intercom</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">Webhook source + reply target</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-purple/10 text-primary-purple text-[11px] font-bold">P</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">Pinecone</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">Vector search over help docs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-purple/10 text-primary-purple text-[11px] font-bold">n</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">n8n</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">Glue + retry logic</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-2xl border border-primary-purple/30 bg-primary-purple/5 p-5">
                <h3 className="text-sm font-bold text-foreground mb-2">Need help with this?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">Our engineers ship this stack into production every week. Talk to us if you want one of your own.</p>
                <Link className="inline-flex w-full items-center justify-center rounded-md bg-primary-purple px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-purple/90 transition-all" href="/contact">
                  Book a 30-min call
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* CUSTOM CTA SECTION */}
        <section className="border-y border-border bg-primary-purple/[0.03]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4 py-16 sm:py-20">
            <section className="relative w-full overflow-hidden rounded-3xl bg-primary-purple/10 px-6 py-12 sm:px-10 sm:py-16 border border-primary-purple/20">
              <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Want this in your stack?
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
                  We deploy this for support teams in under a week. Refund guaranteed if month one doesn't land.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                  <Link href="/contact?topic=customer-support" className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg bg-primary-purple px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-purple/90">
                    Talk to us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/case-studies" className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary-purple/40">
                    See the agent in action
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* KEEP READING */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4 py-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-purple mb-6">Keep reading</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all" href="/resources/ai-automation-playbook">
              <span className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">The AI Automation Playbook</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary-purple group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
            </Link>
            <Link className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all" href="/resources/lead-qualification-playbook">
              <span className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">Lead Qualification Playbook</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary-purple group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
            </Link>
          </div>
        </section>

      </main>
      <FooterSection />
    </div>
  );
}
