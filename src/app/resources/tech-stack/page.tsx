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

export default function TechStackPage() {
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
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    <span className="font-mono">stack</span>
                    <span className="text-primary-purple">_</span>
                  </h1>
                  <p className="mt-3 max-w-xl text-lg text-muted-foreground">
                    Modern dev tools and platforms for building startups
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 xl:px-4">
            <div className="mb-6 flex justify-end">
              <div className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-card/30 p-1">
                <button
                  className="rounded-md p-1.5 transition-all bg-primary-purple/10 text-primary-purple"
                  title="Grid view"
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
                    className="lucide lucide-layout-grid h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                  </svg>
                </button>
                <button
                  className="rounded-md p-1.5 transition-all text-muted-foreground hover:text-foreground"
                  title="List view"
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
                    className="lucide lucide-list h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M3 5h.01"></path>
                    <path d="M3 12h.01"></path>
                    <path d="M3 19h.01"></path>
                    <path d="M8 5h13"></path>
                    <path d="M8 12h13"></path>
                    <path d="M8 19h13"></path>
                  </svg>
                </button>
              </div>
            </div>
            <a
              className="group mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl border border-border/60 bg-card/30 p-6 transition-all hover:border-primary-purple/40"
              href="/ai-tools"
            >
              <div>
                <p className="text-[11px] uppercase tracking-wider text-primary-purple font-semibold mb-2">
                  Looking for business AI tools instead?
                </p>
                <h2 className="text-lg font-bold text-foreground leading-snug">
                  Browse our AI Tools Directory
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  346+ AI tools across sales, marketing, support, and more — a
                  separate directory from this dev/infra stack.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors group-hover:border-primary-purple/40">
                View AI Tools
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Client Frameworks
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Frontend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The library for web and native user interfaces"
                      href="/resources/tech-stack/react"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/react.dev/theme/dark/h/128/w/128/icon.png"
                          alt="React"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        React
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Cybernetically enhanced web apps"
                      href="/resources/tech-stack/svelte"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/svelte.dev/theme/dark/h/128/w/128/icon.png"
                          alt="Svelte"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Svelte
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The Progressive JavaScript Framework"
                      href="/resources/tech-stack/vue"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774354971339-image.png"
                          alt="Vue"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Vue
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Simple and performant reactivity for building UIs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/solidjs.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="SolidJS"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        SolidJS
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Instant-loading web apps without effort"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/qwik.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Qwik"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Qwik
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fast 3kB alternative to React with the same modern API"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/preactjs.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Preact"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Preact
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Meta-Frameworks
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Frontend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The React Framework for the Web"
                      href="/resources/tech-stack/nextjs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/nextjs.org/theme/dark/h/128/w/128/icon.png"
                          alt="Next.js"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Next.js
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Web development, streamlined"
                      href="/resources/tech-stack/sveltekit"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/kit.svelte.dev/theme/dark/h/128/w/128/icon.png"
                          alt="SvelteKit"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        SvelteKit
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The web framework for content-driven websites"
                      href="/resources/tech-stack/astro"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/astro.build/theme/dark/h/128/w/128/icon.png"
                          alt="Astro"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Astro
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Full-stack React framework powered by TanStack Router"
                      href="/resources/tech-stack/tanstack-start"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774354456845-image.png"
                          alt="TanStack Start"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        TanStack Start
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Full-stack web framework focused on web standards"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/remix.run?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Remix"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Remix
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The intuitive Vue framework"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/nuxt.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Nuxt"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Nuxt
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The minimal React framework, Server Components first"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/waku.gg?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Waku"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Waku
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      UI Libraries
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Frontend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="A utility-first CSS framework for rapid UI development"
                      href="/resources/tech-stack/tailwindcss"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774308274902-image.png"
                          alt="Tailwind CSS"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Tailwind CSS
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Beautifully designed components you copy and paste into your apps"
                      href="/resources/tech-stack/shadcn"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/ui.shadcn.com/theme/dark/h/128/w/128/icon.png"
                          alt="shadcn/ui"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        shadcn/ui
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Unstyled accessible primitives for React"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/radix-ui.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Radix UI"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Radix UI
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fully featured React components library"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/mantine.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Mantine"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Mantine
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Modular, accessible component library for React"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/chakra-ui.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Chakra UI"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Chakra UI
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Unstyled, accessible UI components by Tailwind Labs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/headlessui.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Headless UI"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Headless UI
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Beautifully designed components built on Ark UI"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/park-ui.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Park UI"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Park UI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      State Management
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Frontend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Bear-minimum state management for React"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/zustand-demo.pmnd.rs?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Zustand"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Zustand
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Primitive and flexible state management for React"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/jotai.org?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Jotai"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Jotai
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The official, opinionated toolset for efficient Redux development"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/redux.js.org?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Redux Toolkit"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Redux Toolkit
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Powerful asynchronous state management for server data"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/tanstack.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="TanStack Query"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        TanStack Query
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Proxy-state made simple"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/valtio.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Valtio"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Valtio
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="State machines and statecharts for the modern web"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/xstate.js.org?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="XState"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        XState
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Forms &amp; Validation
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Frontend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Performant, flexible, and extensible forms with easy validation"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/react-hook-form.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="React Hook Form"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        React Hook Form
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="TypeScript-first schema validation with static type inference"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/zod.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Zod"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Zod
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Type-safe form validation library with progressive enhancement"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/conform.guide?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Conform"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Conform
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The modular and type-safe schema library"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/valibot.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Valibot"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Valibot
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Headless, performant, and type-safe forms for React"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/tanstack.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="TanStack Form"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        TanStack Form
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Animation &amp; Motion
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Frontend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="A modern animation library for JavaScript and React"
                      href="/resources/tech-stack/motion"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/motion.dev/theme/dark/h/128/w/128/icon.png"
                          alt="Motion"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Motion
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Professional-grade animation for the modern web"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/gsap.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="GSAP"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        GSAP
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Animations as code, exported from After Effects"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/lottiefiles.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Lottie"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Lottie
                      </span>
                    </div>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="JavaScript library for creating 3D graphics in the browser"
                      href="/resources/tech-stack/threejs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774308311822-image.png"
                          alt="Three.js"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Three.js
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="React renderer for Three.js"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/docs.pmnd.rs?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="React Three Fiber"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        React Three Fiber
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Lightweight JavaScript animation library"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/animejs.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Anime.js"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Anime.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Build Tools
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Frontend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Next-generation frontend tooling. Fast dev, lean prod"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/vitejs.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Vite"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Vite
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Incremental bundler optimized for JavaScript and TypeScript"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/turbo.build?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Turbopack"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Turbopack
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Extremely fast bundler for the web"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/esbuild.github.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="esbuild"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        esbuild
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Rust-based platform for the web, 20x faster than Babel"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/swc.rs?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="SWC"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        SWC
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Incredibly fast JavaScript runtime, bundler, test runner"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/bun.sh?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Bun"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Bun
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fast Rust-based bundler for JavaScript, replacing Rollup"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/rolldown.rs?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Rolldown"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Rolldown
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Testing
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Frontend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="A Vite-native unit test framework"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/vitest.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Vitest"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Vitest
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="End-to-end testing for modern web apps"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/playwright.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Playwright"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Playwright
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Build, test, and document UI components in isolation"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/storybook.js.org?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Storybook"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Storybook
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="End-to-end testing framework for the web"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/cypress.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Cypress"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Cypress
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Simple and complete testing utilities for the DOM"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/testing-library.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Testing Library"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Testing Library
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      HTTP Frameworks
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Ultrafast web framework for the edge"
                      href="/resources/tech-stack/hono"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774355060413-image.png"
                          alt="Hono"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Hono
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fast and low overhead web framework for Node.js"
                      href="/resources/tech-stack/fastify"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774355113706-image.png"
                          alt="Fastify"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Fastify
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Ergonomic Framework for Humans"
                      href="/resources/tech-stack/elysia"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774355210041-image.png"
                          alt="Elysia"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Elysia
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Typesafe APIs made simple"
                      href="/resources/tech-stack/orpc"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://orpc.dev/logo.webp"
                          alt="oRPC"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        oRPC
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="End-to-end typesafe APIs made easy"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/trpc.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="tRPC"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        tRPC
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Progressive Node.js framework for scalable server-side apps"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/nestjs.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="NestJS"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        NestJS
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fast, unopinionated, minimalist web framework for Node.js"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/expressjs.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Express"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Express
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Backend framework with built-in DevOps and infrastructure"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/encore.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Encore"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Encore
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Databases
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The world's most advanced open source relational database"
                      href="/resources/tech-stack/postgresql"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/postgresql.org/theme/dark/h/128/w/128/icon.png"
                          alt="PostgreSQL"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        PostgreSQL
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The developer data platform"
                      href="/resources/tech-stack/mongodb"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/www.mongodb.com/theme/dark/h/128/w/128/icon.png"
                          alt="MongoDB"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        MongoDB
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Small, fast, reliable SQL database engine"
                      href="/resources/tech-stack/sqlite"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774308237991-image.png"
                          alt="SQLite"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        SQLite
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="In-memory data store for caching, messaging, and real-time data"
                      href="/resources/tech-stack/redis"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/redis.io/theme/dark/h/128/w/128/icon.png"
                          alt="Redis"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Redis
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fast columnar database for real-time analytics"
                      href="/resources/tech-stack/clickhouse"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/clickhouse.com/theme/dark/h/128/w/128/icon.png"
                          alt="ClickHouse"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        ClickHouse
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="An in-process SQL OLAP database management system"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/duckdb.org?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="DuckDB"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        DuckDB
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Graph-relational database designed for SaaS and complex domains"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/edgedb.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="EdgeDB"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        EdgeDB
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="SQLite for production, edge-replicated globally"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/turso.tech?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Turso"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Turso
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      ORMs &amp; Query Builders
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="TypeScript ORM that lets you love SQL"
                      href="/resources/tech-stack/drizzle"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/orm.drizzle.team/theme/dark/h/128/w/128/icon.png"
                          alt="Drizzle ORM"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Drizzle ORM
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Next-generation Node.js and TypeScript ORM"
                      href="/resources/tech-stack/prisma"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/prisma.io/theme/dark/h/128/w/128/icon.png"
                          alt="Prisma"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Prisma
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Type-safe SQL query builder for TypeScript"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/kysely.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Kysely"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Kysely
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="ORM for TypeScript and JavaScript"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/typeorm.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="TypeORM"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        TypeORM
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Elegant MongoDB object modeling for Node.js"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/mongoosejs.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Mongoose"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Mongoose
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">Auth</h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Complete user management with authentication and SSO"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/clerk.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Clerk"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Clerk
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Identity platform for application builders"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/auth0.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Auth0"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Auth0
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Authentication for Next.js applications"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/authjs.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="NextAuth"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        NextAuth
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The most comprehensive authentication library for TypeScript"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/better-auth.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Better Auth"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Better Auth
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Enterprise-ready features as APIs: SSO, SCIM, audit logs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/workos.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="WorkOS"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        WorkOS
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source Clerk alternative for Next.js"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/stack-auth.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Stack Auth"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Stack Auth
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Drag and drop auth and identity for any app"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/descope.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Descope"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Descope
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">Email</h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Email API for developers with React Email integration"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/resend.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Resend"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Resend
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Reliable transactional email service for app developers"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/postmarkapp.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Postmark"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Postmark
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Email delivery and marketing platform by Twilio"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/sendgrid.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="SendGrid"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        SendGrid
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Email platform built for modern SaaS companies"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/loops.so?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Loops"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Loops
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Build and send emails using React"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/react.email?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="React Email"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        React Email
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Payments
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Payment infrastructure for the internet"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/stripe.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Stripe"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Stripe
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="All-in-one platform for selling digital products with built-in tax"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/lemonsqueezy.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Lemon Squeezy"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Lemon Squeezy
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Merchant of record for selling digital products and subscriptions"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/polar.sh?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Polar"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Polar
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Payments and tax compliance for SaaS, all-in-one"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/paddle.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Paddle"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Paddle
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Merchant of record payment platform for global SaaS"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/dodopayments.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Dodo Payments"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Dodo Payments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      File Storage
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="File uploads for modern web developers, dead simple"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/uploadthing.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="UploadThing"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        UploadThing
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Zero-egress S3-compatible object storage"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/cloudflare.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Cloudflare R2"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Cloudflare R2
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Object storage built to store and retrieve any amount of data"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/aws.amazon.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="AWS S3"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        AWS S3
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Globally distributed S3-compatible object storage"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/tigrisdata.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Tigris"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Tigris
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="S3-compatible cloud storage at one-fifth the cost"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/backblaze.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Backblaze B2"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Backblaze B2
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fast object storage for the Vercel platform"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/vercel.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Vercel Blob"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Vercel Blob
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Realtime
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Multiplayer collaboration as a service"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/liveblocks.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Liveblocks"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Liveblocks
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Building real-time multiplayer apps without infrastructure"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/partykit.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="PartyKit"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        PartyKit
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Realtime infrastructure as a service"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/ably.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Ably"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Ably
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Hosted APIs for real-time features and notifications"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/pusher.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Pusher"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Pusher
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source Pusher-compatible WebSocket server"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/soketi.app?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Soketi"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Soketi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Jobs &amp; Workflows
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Event-driven durable functions for any framework"
                      href="/resources/tech-stack/inngest"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/inngest.com/theme/dark/h/128/w/128/icon.png"
                          alt="Inngest"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Inngest
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Background jobs with no infrastructure"
                      href="/resources/tech-stack/trigger-dev"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/trigger.dev/theme/dark/h/128/w/128/icon.png"
                          alt="Trigger.dev"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Trigger.dev
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Redis-based queue for Node.js background jobs"
                      href="/resources/tech-stack/bullmq"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774308024210-image.png"
                          alt="BullMQ"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        BullMQ
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Durable execution platform for long-running workflows"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/temporal.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Temporal"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Temporal
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="TypeScript framework for building AI agents and workflows"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/mastra.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Mastra"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Mastra
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Distributed, fault-tolerant task queue for developers"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/hatchet.run?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Hatchet"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Hatchet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Backend Platforms
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Backend Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The reactive backend that keeps your app in sync"
                      href="/resources/tech-stack/convex"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/convex.dev/theme/dark/h/128/w/128/icon.png"
                          alt="Convex"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Convex
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source backend platform for web and mobile apps"
                      href="/resources/tech-stack/appwrite"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/appwrite.io/theme/dark/h/128/w/128/icon.png"
                          alt="Appwrite"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Appwrite
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Google's app development platform for web and mobile"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/firebase.google.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Firebase"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Firebase
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source Firebase alternative with GraphQL"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/nhost.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Nhost"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Nhost
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source backend in a single file"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/pocketbase.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Pocketbase"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Pocketbase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Deployment
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Infrastructure Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The frontend cloud for deploying web applications"
                      href="/resources/tech-stack/vercel"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/vercel.com/theme/dark/h/128/w/128/icon.png"
                          alt="Vercel"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Vercel
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Global cloud platform for security and edge computing"
                      href="/resources/tech-stack/cloudflare"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774355291947-image.png"
                          alt="Cloudflare"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Cloudflare
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Instant deployments, effortless scaling"
                      href="/resources/tech-stack/railway"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774355267719-image.png"
                          alt="Railway"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Railway
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Cloud application hosting for developers"
                      href="/resources/tech-stack/render"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/render.com/theme/dark/h/128/w/128/icon.png"
                          alt="Render"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Render
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Cloud infrastructure for developers"
                      href="/resources/tech-stack/digitalocean"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774355329124-image.png"
                          alt="DigitalOcean"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        DigitalOcean
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source, self-hostable Heroku/Vercel alternative"
                      href="/resources/tech-stack/coolify"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://momentumpage.b-cdn.net/1774307877281-image.png"
                          alt="Coolify"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Coolify
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Run your full-stack apps close to your users globally"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/fly.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Fly.io"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Fly.io
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Self-serve cloud platform for full-stack apps and databases"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/northflank.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Northflank"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Northflank
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Database Platforms
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Infrastructure Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Serverless Postgres built for the cloud"
                      href="/resources/tech-stack/neon"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/neon.tech/theme/dark/h/128/w/128/icon.png"
                          alt="Neon"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Neon
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Dedicated PostgreSQL hosting with auth and storage"
                      href="/resources/tech-stack/supabase-db"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/supabase.com/theme/dark/h/128/w/128/icon.png"
                          alt="Supabase"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Supabase
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Serverless database platform with branching and Vitess"
                      href="/resources/tech-stack/planetscale"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/planetscale.com/theme/dark/h/128/w/128/icon.png"
                          alt="PlanetScale"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        PlanetScale
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Multi-cloud developer data platform"
                      href="/resources/tech-stack/mongodb-atlas"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/www.mongodb.com/theme/dark/h/128/w/128/icon.png"
                          alt="MongoDB Atlas"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        MongoDB Atlas
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Serverless data platform for Redis, Kafka, and QStash"
                      href="/resources/tech-stack/upstash"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/upstash.com/theme/dark/h/128/w/128/icon.png"
                          alt="Upstash"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Upstash
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Real-time analytics APIs from raw data"
                      href="/resources/tech-stack/tinybird"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/tinybird.co/theme/dark/h/128/w/128/icon.png"
                          alt="Tinybird"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Tinybird
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Observability
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Infrastructure Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Application monitoring and error tracking"
                      href="/resources/tech-stack/sentry"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/sentry.io/theme/dark/h/128/w/128/icon.png"
                          alt="Sentry"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Sentry
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Log management and analytics at any scale"
                      href="/resources/tech-stack/axiom"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/axiom.co/theme/dark/h/128/w/128/icon.png"
                          alt="Axiom"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Axiom
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Uptime monitoring, logs, and incident management"
                      href="/resources/tech-stack/betterstack"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/betterstack.com/theme/dark/h/128/w/128/icon.png"
                          alt="Better Stack"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Better Stack
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source product analytics, session replay, and feature flags"
                      href="/resources/tech-stack/posthog"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/posthog.com/theme/dark/h/128/w/128/icon.png"
                          alt="PostHog"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        PostHog
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Cloud monitoring as a service for the modern enterprise"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/datadoghq.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Datadog"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Datadog
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open observability platform for metrics, logs, and traces"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/grafana.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Grafana"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Grafana
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Vendor-neutral observability framework, CNCF standard"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/opentelemetry.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="OpenTelemetry"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        OpenTelemetry
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      CDN &amp; Edge
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Infrastructure Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Serverless code at the edge in 300+ cities"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/workers.cloudflare.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Cloudflare Workers"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Cloudflare Workers
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="CDN, edge storage, and DNS built for speed"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/bunny.net?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Bunny.net"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Bunny.net
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Edge cloud platform for instant content delivery"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/fastly.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Fastly"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Fastly
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fast, highly secure, and programmable CDN by AWS"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/aws.amazon.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="AWS CloudFront"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        AWS CloudFront
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div
                  id="coding-agents"
                  className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Coding Agents
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      AI Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Anthropic's agentic coding CLI"
                      href="/resources/tech-stack/claude-code"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/anthropic.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Claude Code"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Claude Code
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The AI code editor"
                      href="/resources/tech-stack/cursor"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/cursor.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Cursor"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Cursor
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="AI pair programmer by GitHub"
                      href="/resources/tech-stack/github-copilot"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/github.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="GitHub Copilot"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        GitHub Copilot
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="OpenAI's coding agent for CLI, cloud, IDE, and SDK"
                      href="/resources/tech-stack/codex"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/openai.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Codex"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Codex
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Google's agentic coding CLI powered by Gemini"
                      href="/resources/tech-stack/gemini-cli"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/gemini.google.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Gemini CLI"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Gemini CLI
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Run parallel Claude Code agents on Mac, in one workspace"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/conductor.build?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Conductor"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Conductor
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Multi-agent coding workspace for orchestrating LLM coders"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/cmux.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="cmux"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        cmux
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="AI pair programming in your terminal with Git-aware edits"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/aider.chat?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Aider"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Aider
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Autonomous coding agent inside your IDE"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/cline.bot?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Cline"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Cline
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source AI code assistant for VS Code and JetBrains"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/continue.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Continue"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Continue
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Autonomous AI software engineer from Cognition"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/devin.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Devin"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Devin
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Agentic IDE by Codeium that flows with the AI"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/windsurf.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Windsurf"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Windsurf
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fast collaborative code editor with native AI agents"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/zed.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Zed"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Zed
                      </span>
                    </div>
                  </div>
                  <a
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary-purple hover:text-primary-700 transition-colors"
                    href="/ai-tools/category/ai-coding-agents"
                  >
                    See more coding agents in our AI Tools Directory
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
                      className="lucide lucide-arrow-right h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      AI App Builders
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      AI Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Vercel's generative UI tool for shipping React apps from prompts"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/v0.app?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="v0"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        v0
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Prompt, run, edit, and deploy full-stack apps in the browser"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/bolt.new?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Bolt.new"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Bolt.new
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="AI software engineer that builds, edits, and ships full apps"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/lovable.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Lovable"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Lovable
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="AI agent that builds and deploys apps directly in Replit"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/replit.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Replit Agent"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Replit Agent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      LLM Gateways
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      AI Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Unified API for routing between 100+ AI models"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/vercel.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Vercel AI Gateway"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Vercel AI Gateway
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Unified interface for LLMs with smart routing"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/openrouter.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="OpenRouter"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        OpenRouter
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="AI gateway with observability, caching, and fallbacks"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/portkey.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Portkey"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Portkey
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Call all LLM APIs using the OpenAI format"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/litellm.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="LiteLLM"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        LiteLLM
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source observability and gateway for LLMs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/helicone.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Helicone"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Helicone
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      LLM Providers
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      AI Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Claude family of models for safe, capable AI"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/anthropic.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Anthropic"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Anthropic
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="GPT models and the OpenAI platform"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/openai.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="OpenAI"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        OpenAI
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Gemini models, multimodal and grounded in search"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/ai.google.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Google AI"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Google AI
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source and commercial frontier-grade models from Europe"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/mistral.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Mistral"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Mistral
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fastest LLM inference, powered by LPU hardware"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/groq.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Groq"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Groq
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Enterprise LLMs and embeddings for production"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/cohere.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Cohere"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Cohere
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      AI SDKs
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      AI Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="TypeScript-first SDK for building AI apps with any model"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/ai-sdk.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Vercel AI SDK"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Vercel AI SDK
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Framework for developing applications powered by LLMs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/langchain.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="LangChain"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        LangChain
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Data framework for building LLM apps over your data"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/llamaindex.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="LlamaIndex"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        LlamaIndex
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="TypeScript framework for AI agents and workflows"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/mastra.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Mastra"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Mastra
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Agentic platform built on TypeScript and MCP"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/inkeep.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Inkeep"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Inkeep
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div
                  id="agent-frameworks"
                  className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Agent Frameworks
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      AI Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Anthropic's official SDK for building production-grade Claude agents"
                      href="/resources/tech-stack/claude-agent-sdk"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/anthropic.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Claude Agent SDK"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Claude Agent SDK
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="OpenAI's framework for multi-agent workflows and tool use"
                      href="/resources/tech-stack/openai-agents-sdk"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/openai.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="OpenAI Agents SDK"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        OpenAI Agents SDK
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Stateful, graph-based orchestration for long-running agents"
                      href="/resources/tech-stack/langgraph"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/langchain.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="LangGraph"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        LangGraph
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Multi-agent collaboration framework with role-based crews"
                      href="/resources/tech-stack/crewai"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/crewai.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="CrewAI"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        CrewAI
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Microsoft's framework for multi-agent conversation systems"
                      href="/resources/tech-stack/autogen"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/microsoft.github.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="AutoGen"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        AutoGen
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Type-safe agent framework from the Pydantic team"
                      href="/resources/tech-stack/pydantic-ai"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/pydantic.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Pydantic AI"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Pydantic AI
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Agents with stateful memory (formerly MemGPT)"
                      href="/resources/tech-stack/letta"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/letta.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Letta"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Letta
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Declarative framework for programming foundation models"
                      href="/resources/tech-stack/dspy"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/dspy.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="DSPy"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        DSPy
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Tool-use platform that gives agents access to 250+ apps"
                      href="/resources/tech-stack/composio"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/composio.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Composio"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Composio
                      </span>
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Durable workflows and background jobs for agents at scale"
                      href="/resources/tech-stack/inngest"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/inngest.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Inngest"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Inngest
                      </span>
                    </a>
                  </div>
                  <a
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary-purple hover:text-primary-700 transition-colors"
                    href="/ai-tools/category/ai-agent-builders"
                  >
                    See more agent frameworks in our AI Tools Directory
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
                      className="lucide lucide-arrow-right h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Vector DBs
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      AI Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Managed vector database for AI applications"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/pinecone.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Pinecone"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Pinecone
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source vector database with built-in ML modules"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/weaviate.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Weaviate"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Weaviate
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Vector database for the next generation of AI apps"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/qdrant.tech?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Qdrant"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Qdrant
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source embedding database for AI applications"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/trychroma.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Chroma"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Chroma
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Object storage as a serverless vector database"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/turbopuffer.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Turbopuffer"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Turbopuffer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Code Sandboxes
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Sandboxes &amp; Dev Envs
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Ephemeral Firecracker microVMs for running untrusted code safely"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/vercel.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Vercel Sandbox"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Vercel Sandbox
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Secure cloud sandboxes for AI agents to run code"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/e2b.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="E2B"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        E2B
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Cloud development sandboxes for instant prototyping"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/codesandbox.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="CodeSandbox"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        CodeSandbox
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Instant in-browser dev environments with WebContainers"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/stackblitz.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="StackBlitz"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        StackBlitz
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source dev environment manager, secure sandboxes for agents"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/daytona.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Daytona"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Daytona
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Serverless cloud functions for AI, batch jobs, and sandboxes"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/modal.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Modal"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Modal
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Sandboxes-as-a-service for AI coding agents"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/runloop.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Runloop"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Runloop
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Cloud IDEs
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Sandboxes &amp; Dev Envs
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Instant dev environments in the cloud, configured for your repo"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/github.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="GitHub Codespaces"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        GitHub Codespaces
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Automated, ready-to-code dev environments in the cloud"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/gitpod.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Gitpod"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Gitpod
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Build, deploy, and host all in one place, with AI"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/replit.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Replit"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Replit
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Self-hosted cloud development environments at enterprise scale"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/coder.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Coder"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Coder
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Dev Containers
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Sandboxes &amp; Dev Envs
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open spec for development containers, supported in VS Code + JetBrains"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/containers.dev?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Devcontainers"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Devcontainers
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Container platform for building, sharing, and running apps"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/docker.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Docker"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Docker
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Reproducible builds and deployments via pure functions"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/nixos.org?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Nix"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Nix
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Full-Text Search
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Search &amp; Discovery
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Search and discovery API for websites and apps"
                      href="/resources/tech-stack/algolia"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://cdn.brandfetch.io/algolia.com/theme/dark/h/128/w/128/icon.png"
                          alt="Algolia"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Algolia
                      </span>
                    </a>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Lightning-fast, open-source search engine"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/meilisearch.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Meilisearch"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Meilisearch
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fast, typo-tolerant, open-source search engine"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/typesense.org?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Typesense"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Typesense
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Distributed search and analytics engine"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/elastic.co?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Elasticsearch"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Elasticsearch
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source search, analytics, and observability suite"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/opensearch.org?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="OpenSearch"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        OpenSearch
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      AI Search
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Search &amp; Discovery
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Search API for AI: semantic search over the web"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/exa.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Exa"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Exa
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="LLM-powered answer engine with citations as an API"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/perplexity.ai?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Perplexity API"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Perplexity API
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Search API optimized for AI agents"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/tavily.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Tavily"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Tavily
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Search API designed for AI agents with structured outputs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/linkup.so?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Linkup"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Linkup
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Site Search
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Search &amp; Discovery
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Fully static search engine for static sites"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/pagefind.app?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Pagefind"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Pagefind
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Next-generation full-text search library for browsers"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/github.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="FlexSearch"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        FlexSearch
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Edge-native search engine with vector + full-text"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/orama.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Orama"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Orama
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Documents &amp; Wikis
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Collab &amp; Productivity
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="All-in-one workspace for notes, docs, wikis, and projects"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/notion.so?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Notion"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Notion
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="The issue tracking tool you'll enjoy using"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/linear.app?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Linear"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Linear
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="All-in-one doc that combines docs, spreadsheets, and apps"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/coda.io?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Coda"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Coda
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Open-source team wiki and knowledge base"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/getoutline.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Outline"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Outline
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Communication
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Collab &amp; Productivity
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Workplace messaging and channels"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/slack.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Slack"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Slack
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Real-time chat, voice, and video for communities"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/discord.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Discord"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Discord
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Async video messaging for work"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/loom.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Loom"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Loom
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 break-inside-avoid">
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 scroll-mt-28">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground">
                      Design &amp; Whiteboards
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                      Collab &amp; Productivity
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Collaborative interface design tool"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/figma.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Figma"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Figma
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Virtual whiteboard for sketching hand-drawn diagrams"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/excalidraw.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="Excalidraw"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        Excalidraw
                      </span>
                    </div>
                    <div
                      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 transition-all duration-200 hover:border-primary-purple/40 hover:bg-card/80 hover:shadow-sm cursor-pointer"
                      title="Infinite canvas as a library, with AI-powered drawing"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                        <img
                          src="https://img.logo.dev/tldraw.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=128&amp;format=png&amp;retina=true"
                          alt="tldraw"
                          width="20"
                          height="20"
                          className="h-5 w-5 rounded object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary-purple transition-colors">
                        tldraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="border-t border-border/40 bg-gradient-to-b from-transparent to-primary-purple/5">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 xl:px-4">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Need help building with this{" "}
                <span className="text-primary-purple">stack</span>?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Our engineers build production apps with these exact tools every
                day. Let us help you ship faster.
              </p>
              <a
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary-purple px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-purple/90 hover:shadow-lg hover:shadow-primary-purple/20"
                href="/contact"
              >
                Talk to Our Engineers
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
