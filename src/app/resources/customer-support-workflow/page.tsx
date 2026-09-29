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
                  <BookOpen className="h-3 w-3" aria-hidden="true" />
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
              
              <div className="flex justify-center lg:justify-end">
                {/* Visual block instead of image */}
                <div className="aspect-[4/5] w-full max-w-[420px] rounded-[2rem] bg-card flex flex-col items-center justify-center border border-border p-8 text-center shadow-xl shadow-primary-purple/5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8082c1] mb-4">AY.WORKFLOW</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight px-4">Customer Support Workflow</h3>
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
                
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  <li className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-square h-4 w-4 text-muted-foreground"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                      <h3 className="text-sm font-bold text-foreground">Triage agent</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Tags + routes to the right queue in &lt;2s.</p>
                  </li>
                  <li className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4 text-muted-foreground"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      <h3 className="text-sm font-bold text-foreground">Draft agent</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Writes a reply in your brand voice with citations from your docs.</p>
                  </li>
                  <li className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                      <h3 className="text-sm font-bold text-foreground">Approval agent</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Auto-sends low-risk replies. Holds high-risk ones for human review.</p>
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
                
                <pre className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card p-6 text-[13px] sm:text-sm font-mono leading-[2] text-foreground"><code>// pseudo-flow{"\n"}
onTicket(ticket) {"{"}{"\n"}
  const tags = await triage(ticket){"\n"}
  if (tags.includes('billing')) return route('billing-queue'){"\n"}
  const draft = await drafter(ticket, kb.search(ticket)){"\n"}
  if (confidence(draft) &gt; 0.8) return autoSend(draft){"\n"}
  return holdForReview(draft){"\n"}
{"}"}</code></pre>
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
        <section className="border-t border-border py-20 sm:py-32 text-center">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-[2.5rem] font-bold tracking-tight text-foreground mb-6">
              Want this in your stack?
            </h2>
            <p className="text-base sm:text-[17px] text-muted-foreground max-w-[640px] mx-auto mb-10 leading-[1.6]">
              We deploy this for support teams in under a week. Refund guaranteed if<br className="hidden sm:block" /> month one doesn't land.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?topic=customer-support" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary-purple px-6 py-2.5 text-[13px] sm:text-sm font-semibold text-white transition-all hover:bg-primary-purple/90">
                Talk to us
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/case-studies" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#ffffff14] bg-[#1a1a24] px-6 py-2.5 text-[13px] sm:text-sm font-semibold text-foreground transition-all hover:bg-[#232330]">
                See the agent in action
              </Link>
            </div>
          </div>
        </section>

        {/* KEEP READING */}
        <section className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 xl:px-4 pb-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8082c1] mb-6">KEEP READING</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link className="group flex items-center justify-between rounded-2xl border border-[#ffffff14] bg-[#161622] px-6 py-5 hover:bg-[#1a1a24] transition-all" href="/resources/ai-automation-playbook">
              <span className="text-[14px] font-bold text-foreground">The AI Automation Playbook</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" aria-hidden="true" />
            </Link>
            <Link className="group flex items-center justify-between rounded-2xl border border-[#ffffff14] bg-[#161622] px-6 py-5 hover:bg-[#1a1a24] transition-all" href="/resources/lead-qualification-playbook">
              <span className="text-[14px] font-bold text-foreground">Lead Qualification Playbook</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <DeployAutomationSection />
      </main>
      <FooterSection />
    </div>
  );
}
