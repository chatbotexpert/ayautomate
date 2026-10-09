import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CallToActionSection from '@/components/CallToActionSection';
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  Users,
  Zap,
  Mail,
  Bot,
  LineChart,
  Target,
  Building2,
  CheckCircle2,
  Settings2,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function LeadQualificationPlaybookPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary-purple/30">
      <Navbar />
      <main className="flex-1">
        <main className="min-h-screen bg-background">
          <section className="relative border-b border-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/10 via-primary-purple/[0.02] to-transparent pointer-events-none"></div>
            <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4 pt-28 pb-16">
              <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                <a
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                  href="/resources"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-left h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                  Resources
                </a>
                <span>/</span>
                <span className="text-foreground">
                  Lead Qualification Playbook
                </span>
              </div>
              <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary-purple/10 border border-primary-purple/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-purple">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-book-open h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                    Playbook
                  </span>
                  <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                    Lead Qualification Playbook
                  </h1>
                  <p className="mt-5 max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Score every inbound in &lt;2 minutes. Route ICP fits to AEs.
                    Send the rest to nurture, all on autopilot.
                  </p>
                  <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border max-w-lg">
                    <div className="bg-background px-4 py-4 text-left">
                      <dt className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        &lt;2min
                      </dt>
                      <dd className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground line-clamp-2">
                        score-to-route time
                      </dd>
                    </div>
                    <div className="bg-background px-4 py-4 text-left">
                      <dt className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        3x
                      </dt>
                      <dd className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground line-clamp-2">
                        qualified-meeting rate
                      </dd>
                    </div>
                    <div className="bg-background px-4 py-4 text-left">
                      <dt className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        0
                      </dt>
                      <dd className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground line-clamp-2">
                        leads lost to slow follow-up
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <div className="rounded-2xl border border-border bg-card shadow-xl shadow-primary-purple/5 overflow-hidden">
                    <div
                      className="aspect-[4/5] w-full flex items-center justify-center"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 40%, color-mix(in srgb, var(--primary-purple) 22%, transparent), transparent 65%), linear-gradient(135deg, color-mix(in srgb, var(--primary-purple) 8%, var(--card)), var(--card))",
                      }}
                    >
                      <div className="text-center px-8">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-primary-purple/70 mb-3">
                          AY.Playbook
                        </p>
                        <h3 className="text-2xl font-bold text-foreground leading-tight">
                          Lead Qualification Playbook
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4 py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-16 max-w-[680px]">
                <article>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary-purple">
                    The problem
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
                    Most inbound leads die in a queue
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The fastest team to respond wins 78% of B2B deals. Your
                      competitors respond in 5 minutes. You take 17 hours.
                    </p>
                    <p>
                      The fix is not more SDRs. It's a{" "}
                      <strong className="font-semibold text-foreground">
                        scoring agent that runs before a human sees the lead
                      </strong>
                      , the kind of system our{" "}
                      <a
                        href="/services/ai-agent-development"
                        className="text-primary-purple font-medium hover:underline"
                      >
                        AI agent development
                      </a>{" "}
                      team wires directly into your CRM.
                    </p>
                  </div>
                </article>
                <article>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary-purple">
                    The framework
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
                    Enrich → Score → Route → Backfill
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Four steps. Each takes under 30 seconds. Total time-to-AE:
                      under 2 minutes.
                    </p>
                  </div>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    <li className="rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-sparkles h-4 w-4 text-primary-purple"
                          aria-hidden="true"
                        >
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                          <path d="M20 2v4"></path>
                          <path d="M22 4h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                        <h3 className="text-sm font-semibold text-foreground">
                          Enrich
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Pull company, team size, tech stack, recent fundraises
                        from Clay.
                      </p>
                    </li>
                    <li className="rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bot h-4 w-4 text-primary-purple"
                          aria-hidden="true"
                        >
                          <path d="M12 8V4H8"></path>
                          <rect
                            width="16"
                            height="12"
                            x="4"
                            y="8"
                            rx="2"
                          ></rect>
                          <path d="M2 14h2"></path>
                          <path d="M20 14h2"></path>
                          <path d="M15 13v2"></path>
                          <path d="M9 13v2"></path>
                        </svg>
                        <h3 className="text-sm font-semibold text-foreground">
                          Score
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Claude agent rates ICP fit 1-10 with reasoning. Stored
                        on the lead record.
                      </p>
                    </li>
                    <li className="rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-workflow h-4 w-4 text-primary-purple"
                          aria-hidden="true"
                        >
                          <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                          <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                          <rect
                            width="8"
                            height="8"
                            x="13"
                            y="13"
                            rx="2"
                          ></rect>
                        </svg>
                        <h3 className="text-sm font-semibold text-foreground">
                          Route
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Score ≥ 8 → AE Slack. Score 5-7 → AE inbox digest. Score
                        &lt; 5 → nurture sequence.
                      </p>
                    </li>
                    <li className="rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-up h-4 w-4 text-primary-purple"
                          aria-hidden="true"
                        >
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        <h3 className="text-sm font-semibold text-foreground">
                          Backfill
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Push score + reasoning back to HubSpot for AE context.
                      </p>
                    </li>
                  </ul>
                </article>
                <article>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary-purple">
                    The agent prompt
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-5">
                    What we tell the scoring agent
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Specificity wins. We give the agent the ICP, the
                      disqualifiers, and 3 concrete scoring examples. Confidence
                      &gt; 90% on real leads.
                    </p>
                  </div>
                  <pre className="mt-6 overflow-x-auto rounded-2xl bg-[#13131a] p-6 text-[13px] font-mono text-[#a1a1aa] leading-[1.8]"><code>You are a B2B lead scorer for AY Automate.{"\n"}
ICP: SaaS teams 10-500 employees, has eng team, Stripe MRR.{"\n"}
Disqualifiers: agencies, freelancers, students, &lt;10 ppl.{"\n"}
Score 1-10 with one-sentence reasoning. Cite which signal matched.{"\n"}
Examples:{"\n"}
  - 50-person SaaS, Stripe, eng team -&gt; 9. "Clear ICP + clear payment signal."{"\n"}
  - 2-person agency -&gt; 2. "Disqualifier: agency under 10 ppl."</code></pre>
                </article>
              </div>
              <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-primary-purple mb-3">
                    Tools we use
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-purple/10 text-primary-purple text-[11px] font-bold">
                        C
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          Clay
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Multi-source enrichment in one call
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-purple/10 text-primary-purple text-[11px] font-bold">
                        C
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          Claude Code
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Scoring agent + reasoning
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-purple/10 text-primary-purple text-[11px] font-bold">
                        H
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          HubSpot
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Source of truth for the AE
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-purple/10 text-primary-purple text-[11px] font-bold">
                        S
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          Slack
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Real-time AE alerts
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-purple/10 text-primary-purple text-[11px] font-bold">
                        n
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          n8n
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Glue, retry, audit trail
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-primary-purple/30 bg-primary-purple/5 p-5">
                  <h3 className="text-sm font-bold text-foreground mb-2">
                    Need help with this?
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Our engineers ship this stack into production every week.
                    Talk to us if you want one of your own.
                  </p>
                  <a
                    className="inline-flex w-full items-center justify-center rounded-md bg-primary-purple px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-purple/90 transition-all"
                    href="/contact"
                  >
                    Book a 30-min call
                  </a>
                </div>
              </aside>
            </div>
          </section>
          <section className="border-y border-border bg-primary-purple/[0.03]">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4 py-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Want the full setup?
              </h2>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                Includes the agent prompt, the Clay + HubSpot field map, and the
                n8n flow JSON.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-primary-purple px-6 py-3 text-sm font-semibold text-white hover:bg-primary-purple/90 transition-all shadow-sm hover:shadow-md hover:shadow-primary-purple/20"
                  href="/contact?topic=lead-qualification"
                >
                  Get the kit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary-purple/40 transition-all"
                  href="/contact"
                >
                  Book a strategy call
                </a>
              </div>
            </div>
          </section>
          <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-4 py-16">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-purple mb-6">
              Keep reading
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all"
                href="/resources/ai-automation-playbook"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">
                  The AI Automation Playbook
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right h-4 w-4 text-muted-foreground group-hover:text-primary-purple group-hover:translate-x-0.5 transition-all"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
              <a
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 hover:border-primary-purple/40 transition-all"
                href="/resources/customer-support-workflow"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-primary-purple transition-colors">
                  Customer Support Workflow
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right h-4 w-4 text-muted-foreground group-hover:text-primary-purple group-hover:translate-x-0.5 transition-all"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
          </section>
        </main>
      </main>
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
