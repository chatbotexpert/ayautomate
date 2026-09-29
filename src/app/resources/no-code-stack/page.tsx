import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import DeployAutomationSection from "@/components/DeployAutomationSection";
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

export default function NoCodeStackPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary-purple/30">
      <Navbar />
      <main className="flex-1">
        <div className="min-h-screen bg-background">
          <section className="relative overflow-hidden border-b border-border/40">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/5 via-transparent to-transparent"></div>
            <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8 xl:px-4">
              <a
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                href="/resources/claude-code-challenge"
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
                  className="lucide lucide-arrow-left h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to Resources
              </a>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Discover the best startup tools to{" "}
                <span className="text-primary-purple">Launch</span>,{" "}
                <span className="text-primary-purple">Automate</span>,{" "}
                <span className="text-primary-purple">Grow</span> and{" "}
                <span className="text-primary-purple">Scale</span>.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                A curated collection of 90+ no-code tools across 21 categories
                to help you build and scale without writing code.
              </p>
            </div>
          </section>
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 xl:px-4">
            <div className="flex flex-col gap-8 lg:flex-row">
              <aside className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-24">
                  <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Categories
                  </h2>
                  <nav className="space-y-0.5">
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all bg-primary-purple/10 text-primary-purple">
                      All Tools
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-globe h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Landing Page Builders
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-database h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                      Forms &amp; Databases
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-kanban h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M5 3v14"></path>
                        <path d="M12 3v8"></path>
                        <path d="M19 3v18"></path>
                      </svg>
                      Product Management
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-headphones h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      Customer Support
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-mail h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                      Blogs &amp; Newsletters
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-video h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                      </svg>
                      Screen Capture &amp; Video
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-palette h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                        <circle
                          cx="13.5"
                          cy="6.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="17.5"
                          cy="10.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="6.5"
                          cy="12.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="8.5"
                          cy="7.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                      </svg>
                      Design
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-zap h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                      Automation
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-code-xml h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="m18 16 4-4-4-4"></path>
                        <path d="m6 8-4 4 4 4"></path>
                        <path d="m14.5 4-5 16"></path>
                      </svg>
                      Low-Code App Builders
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-code-xml h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="m18 16 4-4-4-4"></path>
                        <path d="m6 8-4 4 4 4"></path>
                        <path d="m14.5 4-5 16"></path>
                      </svg>
                      Vibe Coding
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-bot h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                      LLMs &amp; AI Chatbots
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-megaphone h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                        <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                        <path d="M8 6v8"></path>
                      </svg>
                      Sales &amp; Outreach
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-layout-grid h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                      CMS
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-message-square h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      </svg>
                      CRMs
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-credit-card h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                      Payments
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-users h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      SMM
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-search h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      SEO
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-chart-column h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="M18 17V9"></path>
                        <path d="M13 17V5"></path>
                        <path d="M8 17v-3"></path>
                      </svg>
                      Analytics
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-users h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      Community Building
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-megaphone h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                        <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                        <path d="M8 6v8"></path>
                      </svg>
                      Marketing &amp; Growth
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all text-muted-foreground hover:bg-muted/50 hover:text-foreground">
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
                        className="lucide lucide-camera h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
                        <circle cx="12" cy="13" r="3"></circle>
                      </svg>
                      AI Fashion &amp; Product Imagery
                    </button>
                  </nav>
                </div>
              </aside>
              <div className="flex flex-wrap gap-2 lg:hidden">
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-primary-purple text-white">
                  All
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Landing Page Builders
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Forms &amp; Databases
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Product Management
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Customer Support
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Blogs &amp; Newsletters
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Screen Capture &amp; Video
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Design
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Automation
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Low-Code App Builders
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Vibe Coding
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  LLMs &amp; AI Chatbots
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Sales &amp; Outreach
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  CMS
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  CRMs
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Payments
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  SMM
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  SEO
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Analytics
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Community Building
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  Marketing &amp; Growth
                </button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium transition-all bg-muted/50 text-muted-foreground hover:bg-muted">
                  AI Fashion &amp; Product Imagery
                </button>
              </div>
              <main className="flex-1 min-w-0">
                <div className="space-y-10">
                  <section id="landing-page-builders">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-globe h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Landing Page Builders
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        6
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/webflow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1758377332646-image.png"
                              alt="Webflow"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Webflow
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Visual web development that produces clean code
                              without writing a single line
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Landing Page Builders
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/framer"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767878999482-image.png"
                              alt="Framer"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Framer
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Ship pixel-perfect sites with Figma-like design
                              and top-tier performance
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Landing Page Builders
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/carrd"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767878986683-image.png"
                              alt="Carrd"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Carrd
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Get a polished one-page site live in under an hour
                              for $19/year
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Landing Page Builders
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/typedream"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070384507-image.png"
                              alt="Typedream"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Typedream
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Write pages like Notion docs and let AI generate
                              the rest
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Landing Page Builders
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/unicorn-platform"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://unicorn-images.b-cdn.net/c47f2c1b-5308-4884-bcce-7723d3e71a18"
                              alt="Unicorn Platform"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Unicorn Platform
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              SaaS-focused landing page builder with AI
                              copywriting baked in
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Landing Page Builders
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/tilda"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767881004837-image.png"
                              alt="Tilda"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Tilda
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Assemble professional pages from 550+
                              designer-crafted content blocks
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Landing Page Builders
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="forms-databases">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-database h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Forms &amp; Databases
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        5
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/airtable"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070456256-image.png"
                              alt="Airtable"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Airtable
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Flexible database that powers custom workflows,
                              CRMs, and ops systems
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Forms &amp; Databases
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/tally"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070917469-image.png"
                              alt="Tally"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Tally
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Create unlimited forms for free by typing, not
                              dragging and dropping
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Forms &amp; Databases
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/typeform"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://cdn.brandfetch.io/typeform.com/theme/dark/h/128/w/128/icon.png"
                              alt="Typeform"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Typeform
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              One-question-at-a-time forms that boost completion
                              rates 2-3x
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Forms &amp; Databases
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/jotform"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767813827122-image.png"
                              alt="Jotform"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Jotform
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              10,000+ form templates with built-in payment
                              collection and e-signatures
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Forms &amp; Databases
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/rows"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070528745-image.png"
                              alt="Rows"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Rows
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Ask your data questions in plain English instead
                              of writing formulas
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Forms &amp; Databases
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="product-management">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-kanban h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M5 3v14"></path>
                        <path d="M12 3v8"></path>
                        <path d="M19 3v18"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Product Management
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        6
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/notion"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070638531-image.png"
                              alt="Notion"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Notion
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              The default operating system for startup teams:
                              docs, databases, and projects in one place
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Product Management
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/linear"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768065942340-image.png"
                              alt="Linear"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Linear
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              The issue tracker engineering teams actually enjoy
                              using, built for speed
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Product Management
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/clickup"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070617287-image.png"
                              alt="ClickUp"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              ClickUp
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              One app to replace your task manager, docs, chat,
                              and goal tracker
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Product Management
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/slack"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070554151-image.png"
                              alt="Slack"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Slack
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              The connective tissue between your team, tools,
                              and automated workflows
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Product Management
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/miro"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://framerusercontent.com/images/6FBG66PBxjV2QFaDfIdUi5mi9A.png"
                              alt="Miro"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Miro
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Infinite canvas where distributed teams brainstorm
                              and plan visually together
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Product Management
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/trello"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico"
                              alt="Trello"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Trello
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Drag-and-drop Kanban boards that anyone
                              understands in seconds
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Product Management
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="customer-support">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-headphones h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Customer Support
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        5
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/intercom"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071097206-image.png"
                              alt="Intercom"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Intercom
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              AI agent resolves most tickets instantly while
                              humans handle the rest
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Customer Support
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/crisp"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767881602046-image.png"
                              alt="Crisp"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Crisp
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Manage chat, email, and WhatsApp support from one
                              clean inbox
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Customer Support
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/tawk"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071218287-image.png"
                              alt="Tawk"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Tawk
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Completely free live chat with no per-agent fees
                              or hidden costs
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Customer Support
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/zendesk"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767805014073-image.png"
                              alt="Zendesk"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Zendesk
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Enterprise-grade support platform that scales from
                              Series A to Fortune 500
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Customer Support
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/featurebase"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767799274294-image.png"
                              alt="Featurebase"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Featurebase
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Let users vote on features, track your roadmap,
                              and ship changelogs
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Customer Support
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="blogs-newsletters">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-mail h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Blogs &amp; Newsletters
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        5
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/beehiiv"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://beehiiv-marketing-images.s3.amazonaws.com/Redesign2023/favicon.png"
                              alt="beehiiv"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              beehiiv
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Grow and monetize your newsletter with referrals,
                              ads, and paid tiers
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Blogs &amp; Newsletters
                          </span>
                        </div>
                      </a>
                      <div className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://substackcdn.com/icons/substack/icon.svg"
                              alt="Substack"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Substack
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Write, publish, and earn from a built-in audience
                              discovery network
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Blogs &amp; Newsletters
                          </span>
                        </div>
                      </div>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/mailerlite"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767880892553-image.png"
                              alt="MailerLite"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              MailerLite
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Full email marketing automation at a fraction of
                              what competitors charge
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Blogs &amp; Newsletters
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/ghost"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767805547702-image.png"
                              alt="Ghost"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Ghost
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Own your publishing stack with open-source
                              newsletters and memberships
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Blogs &amp; Newsletters
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/kit"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767881077819-image.png"
                              alt="Kit (ConvertKit)"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Kit (ConvertKit)
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Sell digital products and courses directly through
                              your email list
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Blogs &amp; Newsletters
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="screen-capture-video">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-video h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Screen Capture &amp; Video
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <div className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071477801-image.png"
                              alt="Loom"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Loom
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Replace unnecessary meetings with quick screen
                              recordings that share via link
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Screen Capture &amp; Video
                          </span>
                        </div>
                      </div>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/descript"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071504440-image.png"
                              alt="Descript"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Descript
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Edit video and podcasts by editing the transcript
                              text instead of a timeline
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Screen Capture &amp; Video
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/capcut"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767879184521-image.png"
                              alt="CapCut"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              CapCut
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Auto-caption, edit, and format social videos with
                              AI for free
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Screen Capture &amp; Video
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/screen-studio"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071424435-image.png"
                              alt="Screen Studio"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Screen Studio
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Turn raw screen recordings into polished product
                              demos automatically
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Screen Capture &amp; Video
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="design">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-palette h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                        <circle
                          cx="13.5"
                          cy="6.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="17.5"
                          cy="10.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="6.5"
                          cy="12.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="8.5"
                          cy="7.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Design
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        5
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/figma"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768067227023-image.png"
                              alt="Figma"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Figma
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Where teams design together in real-time with
                              components and prototypes
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Design
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/canva"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767879012851-image.png"
                              alt="Canva"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Canva
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Give anyone on your team the power to create
                              professional marketing visuals
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Design
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/relume"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070788690-image.png"
                              alt="Relume"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Relume
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Generate complete website wireframes with AI and
                              export to Figma or Webflow
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Design
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/spline"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071452277-image.png"
                              alt="Spline"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Spline
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Add interactive 3D elements to your website
                              without WebGL expertise
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Design
                          </span>
                        </div>
                      </a>
                      <div className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768067390751-image.png"
                              alt="Pitch"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Pitch
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Build pitch decks collaboratively and track who
                              views which slides
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Design
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="automation">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-zap h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Automation
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        5
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/zapier"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://zapier.com/l/favicon-128.png"
                              alt="Zapier"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Zapier
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Glue 8,000+ apps together with automations anyone
                              can build
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Automation
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/make"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768067827765-image.png"
                              alt="Make"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Make
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Visual canvas for complex automations that need
                              precise data control
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Automation
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/n8n"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767878907168-image.png"
                              alt="n8n"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              n8n
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Self-host your automations with open-source visual
                              workflows and custom code
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Automation
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/cal-com"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://framerusercontent.com/images/yBP2bxRn6dRgikoDZjkgAk2v0.png"
                              alt="Cal.com"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Cal.com
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Open-source scheduling with unlimited bookings and
                              full API control
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Automation
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/calendly"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071895642-image.png"
                              alt="Calendly"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Calendly
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Share a link, let people pick a time, skip the
                              back-and-forth emails
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Automation
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="low-code-app-builders">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-code-xml h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="m18 16 4-4-4-4"></path>
                        <path d="m6 8-4 4 4 4"></path>
                        <path d="m14.5 4-5 16"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Low-Code App Builders
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/bubble"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071931798-image.png"
                              alt="Bubble"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Bubble
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Build real web applications with databases, auth,
                              and APIs, all visually
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Low-Code App Builders
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/retool"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767880431162-image.png"
                              alt="Retool"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Retool
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Assemble internal admin panels and dashboards in
                              hours, not weeks
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Low-Code App Builders
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/flutterflow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767880400630-image.png"
                              alt="FlutterFlow"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              FlutterFlow
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Design native iOS and Android apps visually,
                              export real Flutter code
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Low-Code App Builders
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/appsmith"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767880361477-image.png"
                              alt="Appsmith"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Appsmith
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Open-source Retool alternative you can self-host
                              on your own servers
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Low-Code App Builders
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="vibe-coding">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-code-xml h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="m18 16 4-4-4-4"></path>
                        <path d="m6 8-4 4 4 4"></path>
                        <path d="m14.5 4-5 16"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Vibe Coding
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/lovable"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://lovable.dev/favicon-192x192.png"
                              alt="Lovable"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Lovable
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Describe your app in plain English and get a
                              working full-stack product
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Vibe Coding
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/v0"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071989338-image.png"
                              alt="v0"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              v0
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Generate production-ready React UI components from
                              text descriptions
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Vibe Coding
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/replit"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://replit.com/public/icons/favicon-prompt-192.png"
                              alt="Replit"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Replit
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Code, deploy, and collaborate in a browser tab
                              with AI assistance
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Vibe Coding
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/google-ai-studio"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768072060126-image.png"
                              alt="Google AI Studio"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Google AI Studio
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Prototype and deploy AI apps with Gemini models at
                              zero cost
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Vibe Coding
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="llms-ai-chatbots">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-bot h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        LLMs &amp; AI Chatbots
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/claude"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768072119402-image.png"
                              alt="Claude"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Claude
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Best-in-class reasoning and coding with 200K+
                              token context for deep work
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            LLMs &amp; AI Chatbots
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/chatgpt"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768072153370-image.png"
                              alt="ChatGPT"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              ChatGPT
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              The Swiss Army knife of AI: writing, images, web
                              search, and custom GPTs
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            LLMs &amp; AI Chatbots
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/perplexity"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767807622764-image.png"
                              alt="Perplexity"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Perplexity
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Get cited, synthesized answers instead of a page
                              of blue links
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            LLMs &amp; AI Chatbots
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/google-gemini"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://cdn.brandfetch.io/gemini.google.com/theme/dark/h/128/w/128/icon.png"
                              alt="Google Gemini"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Google Gemini
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Multimodal AI woven into Gmail, Docs, and your
                              entire Google workflow
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            LLMs &amp; AI Chatbots
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="sales-outreach">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-megaphone h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                        <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                        <path d="M8 6v8"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Sales &amp; Outreach
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        5
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/apollo"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://apollo.io/icon.svg"
                              alt="Apollo"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Apollo
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Search 270M+ contacts, build lists, and run
                              outreach from one platform
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Sales &amp; Outreach
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/instantly"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070014193-image.png"
                              alt="Instantly"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Instantly
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Send cold emails at scale with unlimited accounts
                              and smart deliverability
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Sales &amp; Outreach
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/lemlist"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070174935-image.png"
                              alt="lemlist"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              lemlist
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Orchestrate sales outreach across email, LinkedIn,
                              and phone in one sequence
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Sales &amp; Outreach
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/clay"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070261285-image.png"
                              alt="Clay"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Clay
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Auto-research every prospect across 100+ data
                              sources before you reach out
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Sales &amp; Outreach
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/hunter"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768070087539-image.png"
                              alt="Hunter"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Hunter
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Find anyone's professional email and verify it
                              delivers before you send
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Sales &amp; Outreach
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="cms">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-layout-grid h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">CMS</h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        2
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/sanity"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767897469936-image.png"
                              alt="Sanity"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Sanity
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Structured content as data, delivered through APIs
                              to any frontend you choose
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            CMS
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/strapi"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767808174517-image.png"
                              alt="Strapi"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Strapi
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Self-host your headless CMS and own your content
                              infrastructure completely
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            CMS
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="crms">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-message-square h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        CRMs
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        3
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/hubspot"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png"
                              alt="HubSpot"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              HubSpot
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Start with a free CRM and add marketing, sales,
                              and service as you grow
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            CRMs
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/attio"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768069772387-image.png"
                              alt="Attio"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Attio
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Modern CRM that bends to your workflow instead of
                              forcing you into one
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            CRMs
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/pipedrive"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://cdn.fra-1.pipedriveassets.com/www-main-renderer/_next/static/media/favicon-196x196.98c71512.png"
                              alt="Pipedrive"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Pipedrive
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Visual deal pipeline that keeps your sales team
                              focused on closing
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            CRMs
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="payments">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-credit-card h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Payments
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/stripe"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://images.stripeassets.com/fzn2n1nzq965/4vVgZi0ZMoEzOhkcv7EVwK/8cce6fdcf2733b2ec8e99548908847ed/favicon.png"
                              alt="Stripe"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Stripe
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              The payment infrastructure trusted by millions of
                              businesses worldwide
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Payments
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/paddle"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767808738196-image.png"
                              alt="Paddle"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Paddle
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              They handle global sales tax and compliance so you
                              can focus on product
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Payments
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/gumroad"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767808717892-image.png"
                              alt="Gumroad"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Gumroad
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Upload a file, set a price, share a link, and
                              start earning in minutes
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Payments
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/chargebee"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767808733611-image.png"
                              alt="Chargebee"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Chargebee
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Handle complex subscription billing as your
                              pricing model evolves
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Payments
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="smm">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-users h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">SMM</h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        3
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/buffer"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767898836946-image.png"
                              alt="Buffer"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Buffer
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Schedule and analyze social posts across platforms
                              without the complexity
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            SMM
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/typefully"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767809384143-image.png"
                              alt="Typefully"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Typefully
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Distraction-free writing environment purpose-built
                              for X and LinkedIn creators
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            SMM
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/taplio"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767881215640-image.png"
                              alt="Taplio"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Taplio
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Grow your LinkedIn following with AI-generated
                              posts and engagement tools
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            SMM
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="seo">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-search h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">SEO</h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/ahrefs"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768067010570-image.png"
                              alt="Ahrefs"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Ahrefs
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              The SEO toolkit with the second-largest web
                              crawler after Google
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            SEO
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/ubersuggest"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768067183808-image.png"
                              alt="Ubersuggest"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Ubersuggest
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Startup-friendly SEO at a fraction of what premium
                              tools cost
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            SEO
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/lowfruits"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768071611969-image.png"
                              alt="LowFruits"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              LowFruits
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Find keywords where weak pages rank so your new
                              site can actually compete
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            SEO
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/fonzy"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://www.fonzy.ai/favicon.ico"
                              alt="Fonzy"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Fonzy
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              AI SEO agent that researches keywords, writes
                              articles monthly, and publishes them to your site
                              automatically
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            SEO
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="analytics">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-chart-column h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="M18 17V9"></path>
                        <path d="M13 17V5"></path>
                        <path d="M8 17v-3"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Analytics
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/posthog"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://posthog.com/favicon.svg"
                              alt="PostHog"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              PostHog
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Analytics, session replay, and feature flags in
                              one open-source platform
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Analytics
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/mixpanel"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768072235715-image.png"
                              alt="Mixpanel"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Mixpanel
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Understand what users actually do inside your
                              product with event tracking
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Analytics
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/plausible"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768072251956-image.png"
                              alt="Plausible"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Plausible
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Simple, cookie-free website analytics that respect
                              user privacy
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Analytics
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/amplitude"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767881248883-image.png"
                              alt="Amplitude"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Amplitude
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Enterprise product analytics for teams scaling
                              data-driven decisions
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Analytics
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="community-building">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-users h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Community Building
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/skool"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767810417712-image.png"
                              alt="Skool"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Skool
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Launch a paid community with courses and
                              gamification for $99/mo flat
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Community Building
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/circle"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767810401388-image.png"
                              alt="Circle"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Circle
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Build branded community spaces with custom domains
                              and headless API access
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Community Building
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/discord"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1768066391498-image.png"
                              alt="Discord"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Discord
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Real-time text and voice channels that make
                              communities feel alive
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Community Building
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/mighty-networks"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767810412972-image.png"
                              alt="Mighty Networks"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Mighty Networks
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              AI matches members based on shared interests for
                              meaningful connections
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Community Building
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="marketing-growth">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-megaphone h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                        <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                        <path d="M8 6v8"></path>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        Marketing &amp; Growth
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/senja"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767810157665-image.png"
                              alt="Senja"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Senja
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Collect testimonials from happy customers and
                              display them as conversion widgets
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Marketing &amp; Growth
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/storylane"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767899082482-image.png"
                              alt="Storylane"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Storylane
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Let prospects click through your product before
                              they ever talk to sales
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Marketing &amp; Growth
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/rewardful"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767810164288-image.png"
                              alt="Rewardful"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Rewardful
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Launch affiliate and referral programs that plug
                              directly into Stripe
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Marketing &amp; Growth
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/supademo"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://momentumpage.b-cdn.net/1767899048218-image.png"
                              alt="Supademo"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Supademo
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Record your product flow once, AI turns it into an
                              interactive walkthrough
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            Marketing &amp; Growth
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                  <section id="ai-fashion-product-imagery">
                    <div className="mb-4 flex items-center gap-2">
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
                        className="lucide lucide-camera h-5 w-5 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
                        <circle cx="12" cy="13" r="3"></circle>
                      </svg>
                      <h2 className="text-lg font-bold text-foreground">
                        AI Fashion &amp; Product Imagery
                      </h2>
                      <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        4
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/wearview"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://www.wearview.co/favicon.ico"
                              alt="WearView"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              WearView
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Put your actual garment on a consistent AI model
                              for product photos, ghost mannequin shots, and
                              short fashion video
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            AI Fashion &amp; Product Imagery
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/pixelcut"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://www.pixelcut.ai/favicon.ico"
                              alt="Pixelcut"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Pixelcut
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              AI product photo and ad-creative generator built
                              for ecommerce sellers
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            AI Fashion &amp; Product Imagery
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/pebblely"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://pebblely.com/favicon.ico"
                              alt="Pebblely"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              Pebblely
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Generate branded product backgrounds and lifestyle
                              scenes from a single photo
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            AI Fashion &amp; Product Imagery
                          </span>
                        </div>
                      </a>
                      <a
                        className="group relative rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary-purple/5 block"
                        href="/resources/no-code-stack/remove-bg"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/30">
                            <img
                              src="https://www.remove.bg/favicon.ico"
                              alt="remove.bg"
                              width="28"
                              height="28"
                              className="h-7 w-7 rounded object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              remove.bg
                            </h3>
                            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              Strip backgrounds from product photos in seconds
                              with one-click precision
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            AI Fashion &amp; Product Imagery
                          </span>
                        </div>
                      </a>
                    </div>
                  </section>
                </div>
              </main>
            </div>
          </div>
          <section className="border-t border-border/40 bg-gradient-to-b from-transparent to-primary-purple/5">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 xl:px-4">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Need help choosing the right{" "}
                <span className="text-primary-purple">stack</span>?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                We help startups and businesses pick, integrate, and automate
                the best no-code tools for their workflows.
              </p>
              <a
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary-purple px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-purple/90 hover:shadow-lg hover:shadow-primary-purple/20"
                href="/contact"
              >
                Book a Free Consultation
              </a>
            </div>
          </section>
        </div>
      </main>
      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
