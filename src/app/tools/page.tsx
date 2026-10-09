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
  Download,
  Code2,
  Database,
} from "lucide-react";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary-purple/30">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-4 pt-28 pb-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Free AI &amp; Automation Tools
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculators, assessments, and generators to help you make smarter
              AI decisions - all free, no credit card required.
            </p>
          </div>
          <div className="relative overflow-hidden border border-border bg-card p-5 sm:p-6 mb-10">
            <div
              aria-hidden={true}
              className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-primary-purple"
            ></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-purple">
              Free weekly brief
            </p>
            <p className="mt-2 text-lg sm:text-xl font-bold text-foreground leading-tight">
              Steal our production automations
            </p>
            <p className="mt-1.5 mb-4 text-sm text-muted-foreground leading-relaxed max-w-xl">
              The exact n8n flows, Claude Code setups, and prompts we ship for
              clients, broken down step by step. No spam, unsubscribe anytime.
            </p>
            <form className="flex w-full gap-2 flex-col sm:flex-row">
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                required={true}
                placeholder="you@company.com"
                aria-label="Email address"
                className="min-w-0 flex-1 border border-border bg-background px-3 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-purple/30 focus:border-primary-purple"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-primary-purple px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-purple/90 disabled:opacity-70 whitespace-nowrap"
              >
                Get the teardowns
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
                  className="lucide lucide-arrow-down-right h-4 w-4 group-hover:rotate-45 transition-transform"
                  aria-hidden={true}
                >
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </button>
            </form>
          </div>
          <div dir="ltr" data-orientation="horizontal" className="w-full">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="inline-flex items-center p-1 text-muted-foreground w-full justify-start mb-8 bg-muted/50 rounded-none h-auto flex-wrap"
              tabIndex={-1}
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="radix-_R_75fiumelb_-content-All"
                data-state="active"
                id="radix-_R_75fiumelb_-trigger-All"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-none data-[state=active]:bg-primary-purple data-[state=active]:text-white text-xs uppercase tracking-widest px-4 py-2"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                All
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-_R_75fiumelb_-content-Calculators"
                data-state="inactive"
                id="radix-_R_75fiumelb_-trigger-Calculators"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-none data-[state=active]:bg-primary-purple data-[state=active]:text-white text-xs uppercase tracking-widest px-4 py-2"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Calculators
                <span className="ml-1.5 text-[10px] opacity-60">11</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-_R_75fiumelb_-content-Assessments"
                data-state="inactive"
                id="radix-_R_75fiumelb_-trigger-Assessments"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-none data-[state=active]:bg-primary-purple data-[state=active]:text-white text-xs uppercase tracking-widest px-4 py-2"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Assessments
                <span className="ml-1.5 text-[10px] opacity-60">6</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-_R_75fiumelb_-content-Generators"
                data-state="inactive"
                id="radix-_R_75fiumelb_-trigger-Generators"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-none data-[state=active]:bg-primary-purple data-[state=active]:text-white text-xs uppercase tracking-widest px-4 py-2"
                tabIndex={-1}
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Generators
                <span className="ml-1.5 text-[10px] opacity-60">3</span>
              </button>
            </div>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-_R_75fiumelb_-trigger-All"
              id="radix-_R_75fiumelb_-content-All"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ animationDuration: "0s" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  className="group block"
                  href="/tools/n8n-vs-zapier-vs-make-cost-calculator"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="n8n vs Zapier vs Make Cost Calculator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/n8n-vs-zapier-vs-make-cost-calculator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-scale w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                            <path d="M7 21h10"></path>
                            <path d="M12 3v18"></path>
                            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            n8n vs Zapier vs Make Cost Calculator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Compare monthly subscription cost on n8n, Zapier and
                            Make from your run volume, using vendor pricing
                            checked on 2026-09-20.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              2 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/build-vs-buy-ai-calculator"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="Build vs Buy AI Calculator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/build-vs-buy-ai-calculator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-wrench w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            Build vs Buy AI Calculator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Compare the total cost of building a custom AI
                            system with buying a product, with the breakeven
                            month.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              3 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/automation-payback-calculator"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="Automation Payback Calculator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/automation-payback-calculator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-clock w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            Automation Payback Calculator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Find how many months an automation takes to pay for
                            itself from task volume, time saved and build cost.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              2 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/ai-agent-cost-calculator"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI Agent Cost Calculator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-agent-cost-calculator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-dollar-sign w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <line x1="12" x2="12" y1="2" y2="22"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI Agent Cost Calculator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Estimate monthly and per-run cost of an AI agent
                            from token volume, retries, hosting and human
                            review.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              3 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="group block" href="/tools/roi-calculator">
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="absolute top-0 right-0 z-10">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 rounded-none bg-primary-purple text-white text-[10px] uppercase tracking-widest"
                      >
                        Popular
                      </span>
                    </div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="Automation ROI Calculator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/roi-calculator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-calculator w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <rect
                              width="16"
                              height="20"
                              x="4"
                              y="2"
                              rx="2"
                            ></rect>
                            <line x1="8" x2="16" y1="6" y2="6"></line>
                            <line x1="16" x2="16" y1="14" y2="18"></line>
                            <path d="M16 10h.01"></path>
                            <path d="M12 10h.01"></path>
                            <path d="M8 10h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M8 14h.01"></path>
                            <path d="M12 18h.01"></path>
                            <path d="M8 18h.01"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            Automation ROI Calculator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Calculate your potential savings from automating
                            repetitive workflows. Get a personalized ROI
                            breakdown.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              2 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/ai-team-cost-calculator"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI Team Cost Calculator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-team-cost-calculator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-dollar-sign w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <line x1="12" x2="12" y1="2" y2="22"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI Team Cost Calculator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Compare the cost of building an in-house AI team vs
                            outsourcing. Get a total cost of ownership
                            breakdown.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              3 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/meeting-automation-calculator"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="Meeting Automation Calculator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/meeting-automation-calculator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-clock w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            Meeting Automation Calculator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Discover how much time and money your company wastes
                            in unnecessary meetings and how to reclaim it.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              2 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/staffing-model-calculator"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="Staffing Model Calculator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/staffing-model-calculator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-users w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            Staffing Model Calculator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Compare in-house hiring vs staff augmentation vs
                            outsourcing for AI talent with full cost analysis.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              3 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/ai-vs-human-employee-cost"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="absolute top-0 right-0 z-10">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 rounded-none bg-primary-purple text-white text-[10px] uppercase tracking-widest"
                      >
                        Popular
                      </span>
                    </div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI vs Human Employee Cost Calculator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-vs-human-employee-cost.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-scale w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                            <path d="M7 21h10"></path>
                            <path d="M12 3v18"></path>
                            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI vs Human Employee Cost Calculator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Compare the monthly cost of an AI agent against the
                            loaded cost of human hours for the same task, with a
                            break-even month and an honest augment-vs-replace
                            note.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              2 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="group block" href="/tools/fde-salary-explorer">
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="Forward Deployed Engineer Salary Explorer preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/fde-salary-explorer.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-search w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx="11" cy="11" r="8"></circle>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            Forward Deployed Engineer Salary Explorer
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            A filterable table and honest range estimator for
                            FDE compensation. Every figure is a reported range
                            with its source, never asserted.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              2 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="group block" href="/tools/ai-budget-planner">
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI Implementation Budget Planner preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-budget-planner.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-dollar-sign w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <line x1="12" x2="12" y1="2" y2="22"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Calculators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI Implementation Budget Planner
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Plan your AI budget with a month-by-month breakdown
                            covering tools, talent, infrastructure, training,
                            and contingency.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              5 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/ai-readiness-assessment"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="absolute top-0 right-0 z-10">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 rounded-none bg-primary-purple text-white text-[10px] uppercase tracking-widest"
                      >
                        Popular
                      </span>
                    </div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI Readiness Assessment preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-readiness-assessment.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-clipboard-check w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <rect
                              width="8"
                              height="4"
                              x="8"
                              y="2"
                              rx="1"
                              ry="1"
                            ></rect>
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <path d="m9 14 2 2 4-4"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Assessments
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI Readiness Assessment
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Evaluate your organization's AI readiness across 5
                            pillars - data, technology, people, process, and
                            strategy. Get a personalized roadmap.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              10 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="group block" href="/tools/workflow-audit">
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="Workflow Automation Audit preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/workflow-audit.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-wrench w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Assessments
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            Workflow Automation Audit
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Map your business processes and identify which
                            workflows are automatable. Get savings estimates and
                            a prioritized roadmap.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              8 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/digital-transformation-scorecard"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="absolute top-0 right-0 z-10">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 rounded-none bg-primary-purple text-white text-[10px] uppercase tracking-widest"
                      >
                        Popular
                      </span>
                    </div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="Digital Transformation Scorecard preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/digital-transformation-scorecard.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-radar w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                            <path d="M4 6h.01"></path>
                            <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                            <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                            <path d="M12 18h.01"></path>
                            <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                            <circle cx="12" cy="12" r="2"></circle>
                            <path d="m13.41 10.59 5.66-5.66"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Assessments
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            Digital Transformation Scorecard
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Score your digital transformation maturity across
                            strategy, technology, data, talent, and culture with
                            a visual radar chart.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              10 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="group block" href="/tools/ai-maturity-quiz">
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI Maturity Assessment Quiz preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-maturity-quiz.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-chart-column w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Assessments
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI Maturity Assessment Quiz
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Quick 10-question quiz that places your company on a
                            5-level AI maturity scale with industry benchmarks.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              5 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/ai-governance-maturity-assessment"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI Governance Maturity Assessment preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-governance-maturity-assessment.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-shield-check w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Assessments
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI Governance Maturity Assessment
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Score your AI governance maturity, level 0 to 4,
                            across 6 pillars: accountability, transparency,
                            risk, data, lifecycle, and oversight.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              4 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/process-automation-finder"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="Process Automation Opportunity Finder preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/process-automation-finder.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-search w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx="11" cy="11" r="8"></circle>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Assessments
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            Process Automation Opportunity Finder
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Describe your department and daily tasks, get the
                            top 10 automatable processes ranked by impact,
                            effort, and ROI.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              8 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="group block" href="/tools/ai-tool-selector">
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI Automation Tool Selector preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-tool-selector.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-lightbulb w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                            <path d="M9 18h6"></path>
                            <path d="M10 22h4"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Generators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI Automation Tool Selector
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Answer questions about your needs and get a
                            personalized recommendation: Zapier vs Make vs n8n
                            vs custom, with a side-by-side comparison.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              5 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group block"
                  href="/tools/ai-job-description-generator"
                >
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="absolute top-0 right-0 z-10">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 rounded-none bg-primary-purple text-white text-[10px] uppercase tracking-widest"
                      >
                        Popular
                      </span>
                    </div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI Job Description Generator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-job-description-generator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-file-text w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Generators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI Job Description Generator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Generate professional job descriptions for AI
                            Engineer, ML Engineer, Data Scientist, and other AI
                            roles with interview questions and evaluation
                            rubrics.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              3 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="group block" href="/tools/ai-use-case-generator">
                  <div
                    data-slot="card"
                    className="text-card-foreground shadow-sm bg-card rounded-none border border-border hover:border-primary-purple/50 transition-colors h-full relative overflow-hidden flex flex-col py-0 gap-0"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
                      <div
                        aria-hidden={true}
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(128,130,193,0.18) 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <div
                        aria-hidden={true}
                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(circle, #b3b7f6 0%, transparent 70%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-end justify-center px-8 pt-10">
                        <div className="relative w-full aspect-[16/9] shadow-[0_25px_50px_-12px_rgba(35,36,59,0.35)] ring-1 ring-primary-200/60 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                          <img
                            alt="AI Use Case Generator preview"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              color: "transparent",
                            }}
                            src="https://www.ayautomate.com/images/tools/ai-use-case-generator.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div data-slot="card-content" className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary-purple/10 rounded-none">
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
                            className="lucide lucide-sparkles w-5 h-5 text-primary-purple"
                            aria-hidden={true}
                          >
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                            <path d="M20 2v4"></path>
                            <path d="M22 4h-4"></path>
                            <circle cx="4" cy="20" r="2"></circle>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground rounded-none text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                          >
                            Generators
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-purple transition-colors leading-tight">
                            AI Use Case Generator
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            Generate personalized AI use cases for your business
                            with feasibility scoring, ROI projections, and
                            implementation roadmaps.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
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
                                className="lucide lucide-clock w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M12 6v6l4 2"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              5 min
                            </span>
                            <span className="text-sm text-primary-purple inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              Try it{" "}
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
                                className="lucide lucide-arrow-right w-3 h-3"
                                aria-hidden={true}
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-_R_75fiumelb_-trigger-Calculators"
              hidden={true}
              id="radix-_R_75fiumelb_-content-Calculators"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            ></div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-_R_75fiumelb_-trigger-Assessments"
              hidden={true}
              id="radix-_R_75fiumelb_-content-Assessments"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            ></div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-_R_75fiumelb_-trigger-Generators"
              hidden={true}
              id="radix-_R_75fiumelb_-content-Generators"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            ></div>
          </div>
        </div>
      </main>
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
