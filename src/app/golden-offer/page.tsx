"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function GoldenOfferPage() {
  return (
    <div className="bg-[#0f0f15] selection:bg-primary-purple/30 text-white min-h-screen">
      <Navbar />
      <main className="min-h-screen">
        <div className="min-h-screen bg-background text-foreground">
          <section className="relative overflow-hidden bg-background border-b border-border-strong">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 [background:radial-gradient(900px_500px_at_75%_40%,var(--primary-100),transparent_65%)] opacity-70"
            ></div>
            <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 border border-border-strong bg-card px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-text-soft">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    </span>
                    <span>Open for new client teams</span>
                  </div>
                  <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-bold leading-[0.95] tracking-[-0.03em] text-foreground">
                    Looking to{" "}
                    <span className="italic text-primary-purple">
                      Hire AI Developers
                    </span>
                    <span className="text-primary-purple">?</span>
                  </h1>
                  <p className="mt-7 max-w-xl text-lg md:text-xl text-text-muted leading-snug">
                    One senior AI engineer, orchestrating a fleet of AI agents,
                    ships what a{" "}
                    <strong className="text-foreground font-semibold">
                      Dedicated AI Development Team
                    </strong>{" "}
                    of five would take months to build. Live in days. Led by
                    ex-IBM founders, not recruiters.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <button className="group relative inline-flex items-center gap-3 bg-primary-purple px-8 py-4 text-base font-bold text-white shadow-[0_14px_40px_-12px_rgba(128,130,193,0.7)] ring-1 ring-inset ring-white/15 transition-all duration-200 hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-12px_rgba(128,130,193,0.85)]">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
                      ></span>
                      <span>Build Your Team Now</span>
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
                        className="lucide lucide-arrow-right size-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      </span>
                      Available for immediate deployment
                    </div>
                  </div>
                  <div className="mt-14 pt-8 border-t border-border-subtle">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-6">
                      Trusted by teams at
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-8 gap-y-7 items-center max-w-2xl">
                      <div className="relative h-10 md:h-12 w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                        <img
                          alt="IBM"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain object-left"
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
                          src="/clients/ibm.svg"
                        />
                      </div>
                      <div className="relative h-10 md:h-12 w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                        <img
                          alt="Sage"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain object-left"
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
                          sizes="(min-width: 640px) 160px, 120px"
                          srcSet="/_next/image?url=%2Fclients%2Fsage.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fsage.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fsage.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div className="relative h-10 md:h-12 w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                        <img
                          alt="Wonderbox"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain object-left"
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
                          sizes="(min-width: 640px) 160px, 120px"
                          srcSet="/_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fwonderbox.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div className="relative h-10 md:h-12 w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                        <img
                          alt="Neoday"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain object-left"
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
                          sizes="(min-width: 640px) 160px, 120px"
                          srcSet="/_next/image?url=%2Fclients%2Fneoday.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fneoday.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fneoday.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div className="relative h-10 md:h-12 w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                        <img
                          alt="XGrowth"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain object-left"
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
                          sizes="(min-width: 640px) 160px, 120px"
                          srcSet="/_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fxgrowth.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div className="relative h-10 md:h-12 w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                        <img
                          alt="Arcads"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain object-left"
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
                          sizes="(min-width: 640px) 160px, 120px"
                          srcSet="/_next/image?url=%2Fclients%2Farcads.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Farcads.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Farcads.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div className="relative h-10 md:h-12 w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                        <img
                          alt="Argil"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain object-left"
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
                          src="/clients/argil.svg"
                        />
                      </div>
                      <div className="relative h-10 md:h-12 w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                        <img
                          alt="Earleads"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain object-left"
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
                          sizes="(min-width: 640px) 160px, 120px"
                          srcSet="/_next/image?url=%2Fclients%2Fearleads.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fearleads.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fearleads.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div className="relative h-10 md:h-12 w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                        <img
                          alt="Just Russel"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain object-left"
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
                          src="/clients/justrussel.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative">
                    <div className="absolute -top-3 left-4 z-20 inline-flex items-center gap-2 bg-foreground text-background px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase shadow-lg">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400"></span>
                      </span>
                      Live demo
                    </div>
                    <div className="relative bg-card border border-border-strong shadow-[0_30px_80px_-30px_rgba(35,36,59,0.35)]">
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
                        <span className="size-2.5 bg-red-500/70"></span>
                        <span className="size-2.5 bg-yellow-500/70"></span>
                        <span className="size-2.5 bg-green-500/70"></span>
                        <span className="ml-3 text-[11px] text-text-soft font-mono tracking-tight">
                          ayautomate.dev/team-01
                        </span>
                      </div>
                      <div className="relative aspect-[4/3] bg-bg-700 overflow-hidden">
                        <video
                          src="/cursor-agent.webm"
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 h-full w-full object-cover"
                        ></video>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 bg-card border border-border-strong p-3 transition-colors hover:border-primary-purple/40">
                        <div className="relative size-11 overflow-hidden bg-bg-700 shrink-0">
                          <img
                            alt="Walid"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
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
                            sizes="44px"
                            srcSet="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=3840&amp;q=75 3840w"
                            src="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=3840&amp;q=75"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-foreground leading-tight">
                            Walid
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-text-soft mt-0.5 truncate">
                            Co-Founder · CEO
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-card border border-border-strong p-3 transition-colors hover:border-primary-purple/40">
                        <div className="relative size-11 overflow-hidden bg-bg-700 shrink-0">
                          <img
                            alt="Adel"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
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
                            sizes="44px"
                            srcSet="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=3840&amp;q=75 3840w"
                            src="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=3840&amp;q=75"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-foreground leading-tight">
                            Adel
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-text-soft mt-0.5 truncate">
                            Co-Founder · CTO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 px-5 md:px-8 bg-bg-800 border-b border-border-strong">
            <div className="max-w-6xl mx-auto">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-6">
                The hiring grind · By the numbers
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[120px] md:text-[160px] font-extrabold leading-none tracking-[-0.06em] text-primary-purple">
                      95
                    </span>
                    <span className="text-5xl md:text-7xl font-bold text-primary-purple tracking-tight">
                      %
                    </span>
                  </div>
                  <p className="mt-5 text-lg md:text-xl text-foreground max-w-md leading-snug">
                    of recurring tasks automated for one client in weeks, not
                    quarters.
                  </p>
                  <p className="mt-3 text-sm text-text-muted">
                    From our{" "}
                    <a
                      className="underline underline-offset-2 hover:text-foreground transition-colors"
                      href="/case-studies/omnichannel-marketing-automation"
                    >
                      omnichannel marketing automation case study
                    </a>
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mb-10">
                    Why hiring AI developers the{" "}
                    <span className="italic text-primary-purple">
                      traditional way
                    </span>{" "}
                    is broken.
                  </h2>
                  <ul className="divide-y divide-border-strong">
                    <li className="py-7 grid grid-cols-[auto_1fr] gap-6 items-start">
                      <span className="text-2xl md:text-3xl font-extrabold text-text-soft tabular-nums tracking-tight">
                        01
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                          Finding talent is slow &amp; competitive
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-text-muted leading-relaxed">
                          The average time to fill a senior tech role is now 3-6
                          months. By the time you find a candidate, your roadmap
                          is already delayed.
                        </p>
                      </div>
                    </li>
                    <li className="py-7 grid grid-cols-[auto_1fr] gap-6 items-start">
                      <span className="text-2xl md:text-3xl font-extrabold text-text-soft tabular-nums tracking-tight">
                        02
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                          Managing a bench of freelancers eats your time
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-text-muted leading-relaxed">
                          Founders waste hours coordinating contractors and
                          chasing status updates. One senior AI engineer running
                          a fleet of agents removes that overhead, so you get a
                          dedicated AI development team without becoming the
                          project manager.
                        </p>
                      </div>
                    </li>
                    <li className="py-7 grid grid-cols-[auto_1fr] gap-6 items-start">
                      <span className="text-2xl md:text-3xl font-extrabold text-text-soft tabular-nums tracking-tight">
                        03
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                          Consistency is rare &amp; risky
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-text-muted leading-relaxed">
                          Freelancers ghost. Skills vary. You need proven AI
                          Development Company standards, not guesses.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 px-5 md:px-8 bg-background border-b border-border-strong">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                <div className="lg:col-span-7">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-5">
                    The shift
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.02em]">
                    What if you could{" "}
                    <span className="italic text-primary-purple">skip</span> the
                    hiring grind?
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:pt-10">
                  <p className="text-base md:text-lg text-text-muted leading-snug">
                    Stop searching for unicorns or building an AI dev team from
                    scratch. Hire AI developers who run a{" "}
                    <strong className="text-foreground font-semibold">
                      fleet of AI agents
                    </strong>{" "}
                    instead of a bench of freelancers.
                  </p>
                </div>
              </div>
              <ul className="border-y border-border-strong">
                <li className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-baseline py-8 md:py-10 ">
                  <span className="text-3xl md:text-5xl font-extrabold tabular-nums text-text-soft tracking-tight">
                    01
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                      Immediate Access
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-text-muted max-w-2xl leading-relaxed">
                      Don&#x27;t wait 3 months to hire AI developers. One senior
                      AI engineer and a fleet of AI agents deploy within days
                      and start shipping from Day 1.
                    </p>
                  </div>
                  <span className="hidden md:block text-[10px] uppercase tracking-[0.18em] text-primary-purple font-semibold whitespace-nowrap">
                    Pillar 01
                  </span>
                </li>
                <li className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-baseline py-8 md:py-10 border-t border-border-subtle">
                  <span className="text-3xl md:text-5xl font-extrabold tabular-nums text-text-soft tracking-tight">
                    02
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                      Plug-and-Play Excellence
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-text-muted max-w-2xl leading-relaxed">
                      Every engagement runs on proven agent orchestration
                      systems. You get the delivery standard of a dedicated AI
                      development team, built by ex-IBM founders.
                    </p>
                  </div>
                  <span className="hidden md:block text-[10px] uppercase tracking-[0.18em] text-primary-purple font-semibold whitespace-nowrap">
                    Pillar 02
                  </span>
                </li>
                <li className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-baseline py-8 md:py-10 border-t border-border-subtle">
                  <span className="text-3xl md:text-5xl font-extrabold tabular-nums text-text-soft tracking-tight">
                    03
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                      Zero Overhead Scaling
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-text-muted max-w-2xl leading-relaxed">
                      Add agents to the fleet or scale back instantly. No
                      payroll, no long-term contracts, just results from your
                      dedicated AI development team.
                    </p>
                  </div>
                  <span className="hidden md:block text-[10px] uppercase tracking-[0.18em] text-primary-purple font-semibold whitespace-nowrap">
                    Pillar 03
                  </span>
                </li>
              </ul>
              <div className="mt-20">
                <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-6">
                  How a team lands · 4 steps · ~5 days end to end
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tabular-nums text-text-soft">
                      01
                    </span>
                    <span className="text-base md:text-lg font-semibold text-foreground">
                      Assign
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
                      className="lucide lucide-arrow-right size-4 text-text-soft"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tabular-nums text-primary-purple">
                      02
                    </span>
                    <span className="text-base md:text-lg font-semibold text-primary-purple">
                      Dedicate (100% Focus)
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
                      className="lucide lucide-arrow-right size-4 text-text-soft"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tabular-nums text-text-soft">
                      03
                    </span>
                    <span className="text-base md:text-lg font-semibold text-foreground">
                      Manage &amp; Oversight
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
                      className="lucide lucide-arrow-right size-4 text-text-soft"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tabular-nums text-text-soft">
                      04
                    </span>
                    <span className="text-base md:text-lg font-semibold text-foreground">
                      Deliver
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 px-5 md:px-8 bg-background border-b border-border-strong">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
                <div className="lg:col-span-7">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-5">
                    How our engineers actually work
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.02em]">
                    They don&#x27;t arrive alone.{" "}
                    <span className="italic text-primary-purple">
                      They arrive with their agents.
                    </span>
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-base md:text-lg text-text-muted leading-snug">
                    25 AI-native engineers, trained in-house by{" "}
                    <strong className="text-foreground font-semibold">
                      Walid
                    </strong>
                    . Every one of them ships with the same agent stack we use
                    ourselves - that&#x27;s why one of our engineers ships like
                    three normal hires.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 mb-20">
                <div className="">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-primary-purple font-semibold mb-3">
                    01 · Design
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight tracking-[-0.01em] mb-3">
                    Architecture before code.
                  </h3>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    We audit your stack, decide what runs as an agent, what runs
                    as n8n, what stays manual. Roadmap locked in week one.
                  </p>
                </div>
                <div className="md:border-l md:border-border-subtle md:pl-10">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-primary-purple font-semibold mb-3">
                    02 · Build
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight tracking-[-0.01em] mb-3">
                    Live in 10 days, not 10 weeks.
                  </h3>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    Engineer embeds in your Slack, gets repo access, ships the
                    first working automation in week two. No decks, real output.
                  </p>
                </div>
                <div className="md:border-l md:border-border-subtle md:pl-10">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-primary-purple font-semibold mb-3">
                    03 · Operate
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight tracking-[-0.01em] mb-3">
                    We run it with you, not at you.
                  </h3>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    Weekly tuning, new automations, performance dashboards. The
                    wedge. We don&#x27;t hand over and walk away.
                  </p>
                </div>
              </div>
              <div className="border-t border-border-strong pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-4">
                      The spine · 5 tools, zero glue code
                    </p>
                    <p className="text-base md:text-lg text-foreground leading-snug">
                      <span className="italic text-primary-purple font-semibold">
                        Claude Code
                      </span>{" "}
                      is the brain. Everything else plugs in through MCP. The
                      same opinionated stack across every engagement - from
                      bootstrapped founders to publicly listed enterprise.
                    </p>
                  </div>
                  <ul className="lg:col-span-8 divide-y divide-border-subtle">
                    <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                      <span className="text-xs tabular-nums text-text-soft font-semibold">
                        01
                      </span>
                      <div className="relative h-7 w-7 shrink-0 opacity-90">
                        <img
                          alt="Claude Code"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=%2Fclients%2Fclaude.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fclaude.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fclaude.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <span className="text-base md:text-lg font-bold text-foreground">
                        Claude Code
                      </span>
                      <span className="text-xs md:text-sm text-text-muted text-right">
                        the brain · subagents · hooks · MCP
                      </span>
                    </li>
                    <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                      <span className="text-xs tabular-nums text-text-soft font-semibold">
                        02
                      </span>
                      <div className="relative h-7 w-7 shrink-0 opacity-90">
                        <img
                          alt="Anthropic SDK"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=%2Fclients%2Fanthropic.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fanthropic.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fanthropic.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <span className="text-base md:text-lg font-bold text-foreground">
                        Anthropic SDK
                      </span>
                      <span className="text-xs md:text-sm text-text-muted text-right">
                        managed agents · runtime
                      </span>
                    </li>
                    <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                      <span className="text-xs tabular-nums text-text-soft font-semibold">
                        03
                      </span>
                      <div className="relative h-7 w-7 shrink-0 opacity-90">
                        <img
                          alt="Cursor"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=%2Fclients%2Fcursor.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fcursor.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fcursor.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <span className="text-base md:text-lg font-bold text-foreground">
                        Cursor
                      </span>
                      <span className="text-xs md:text-sm text-text-muted text-right">
                        IDE pair-programming with agents
                      </span>
                    </li>
                    <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                      <span className="text-xs tabular-nums text-text-soft font-semibold">
                        04
                      </span>
                      <div className="relative h-7 w-7 shrink-0 opacity-90">
                        <img
                          alt="n8n"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=%2Fclients%2Fn8n.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fn8n.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fn8n.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <span className="text-base md:text-lg font-bold text-foreground">
                        n8n
                      </span>
                      <span className="text-xs md:text-sm text-text-muted text-right">
                        cron · webhooks · integration glue
                      </span>
                    </li>
                    <li className="py-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-5">
                      <span className="text-xs tabular-nums text-text-soft font-semibold">
                        05
                      </span>
                      <div className="relative h-7 w-7 shrink-0 opacity-90">
                        <img
                          alt="E2B"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=%2Fclients%2Fe2b.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fclients%2Fe2b.png&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=%2Fclients%2Fe2b.png&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <span className="text-base md:text-lg font-bold text-foreground">
                        E2B
                      </span>
                      <span className="text-xs md:text-sm text-text-muted text-right">
                        sandboxed compute for tool calls
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="relative size-7 overflow-hidden border-2 border-background bg-bg-700">
                    <img
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
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
                      sizes="28px"
                      srcSet="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=3840&amp;q=75 3840w"
                      src="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-walid.webp&amp;w=3840&amp;q=75"
                    />
                  </div>
                  <div className="relative size-7 overflow-hidden border-2 border-background bg-bg-700">
                    <img
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
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
                      sizes="28px"
                      srcSet="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=3840&amp;q=75 3840w"
                      src="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-adel.webp&amp;w=3840&amp;q=75"
                    />
                  </div>
                  <div className="relative size-7 overflow-hidden border-2 border-background bg-bg-700">
                    <img
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
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
                      sizes="28px"
                      srcSet="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=16&amp;q=75 16w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=32&amp;q=75 32w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=48&amp;q=75 48w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=64&amp;q=75 64w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=96&amp;q=75 96w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=128&amp;q=75 128w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=3840&amp;q=75 3840w"
                      src="/_next/image?url=%2Fimages%2Fdownloaded%2Fteam-vetted-engineers.webp&amp;w=3840&amp;q=75"
                    />
                  </div>
                </div>
                <p className="text-sm md:text-base text-text-muted leading-snug">
                  <strong className="text-foreground font-semibold">
                    25 engineers
                  </strong>{" "}
                  on the bench.{" "}
                  <strong className="text-foreground font-semibold">1</strong>{" "}
                  dedicated per client. Same stack, same standard, every
                  engagement.
                </p>
              </div>
            </div>
          </section>
          <section className="py-24 px-5 bg-muted/30 dark:bg-black border-b border-border">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
                  We&#x27;re not a staffing agency.
                  <br />
                  We&#x27;re{" "}
                  <span className="text-primary-purple">
                    Automation Architects
                  </span>
                  .
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We are a specialized <strong>AI Development Company</strong>{" "}
                  led by engineers, for engineers.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-10 mb-20">
                <div className="bg-card border-2 border-border hover:border-primary-purple/50 transition-colors p-10 shadow-sm">
                  <h3 className="text-3xl font-bold mb-1 text-foreground">
                    Walid
                  </h3>
                  <div className="text-sm text-primary-purple uppercase tracking-widest mb-5">
                    Co-Founder &amp; CEO
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    The Architect: An n8n automation expert with deep expertise
                    in product engineering.
                  </p>
                  <ul className="space-y-3">
                    <li className="text-muted-foreground text-sm border-l-2 border-primary-purple pl-3">
                      Architect of 500+ scalable workflows
                    </li>
                    <li className="text-muted-foreground text-sm border-l-2 border-primary-purple pl-3">
                      Expert in Workflow Automation Services
                    </li>
                    <li className="text-muted-foreground text-sm border-l-2 border-primary-purple pl-3">
                      Relentless execution speed
                    </li>
                  </ul>
                </div>
                <div className="bg-card border-2 border-border hover:border-primary-purple/50 transition-colors p-10 shadow-sm">
                  <h3 className="text-3xl font-bold mb-1 text-foreground">
                    Adel
                  </h3>
                  <div className="text-sm text-primary-purple uppercase tracking-widest mb-5">
                    Co-Founder &amp; CTO
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    The Strategist: A former AI Engineer at IBM with specialized
                    expertise in GenAI and MLOps.
                  </p>
                  <ul className="space-y-3">
                    <li className="text-muted-foreground text-sm border-l-2 border-primary-purple pl-3">
                      Leader in Generative AI Integration
                    </li>
                    <li className="text-muted-foreground text-sm border-l-2 border-primary-purple pl-3">
                      Modular AI Agent design specialist
                    </li>
                    <li className="text-muted-foreground text-sm border-l-2 border-primary-purple pl-3">
                      Ensures systems scale from Day 1
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
                  Powering automation for industry leaders
                </p>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-foreground">
                      yoyaba.com
                    </span>
                    <span className="text-xs uppercase tracking-widest text-primary-purple">
                      #1 in Germany
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-foreground">
                      argil.ai
                    </span>
                    <span className="text-xs uppercase tracking-widest text-primary-purple">
                      YC Backed
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-foreground">
                      roninglobal.io
                    </span>
                    <span className="text-xs uppercase tracking-widest text-primary-purple">
                      Global Leader
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-foreground">
                      humanoidz.ai
                    </span>
                    <span className="text-xs uppercase tracking-widest text-primary-purple">
                      AI Robotics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 px-5 md:px-8 bg-background border-b border-border-strong">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
                <div className="lg:col-span-7">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-5">
                    The new AI software engineering
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.02em]">
                    Coding changed.{" "}
                    <span className="italic text-primary-purple">
                      Engineers stopped being the bottleneck.
                    </span>
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-base md:text-lg text-text-muted leading-snug">
                    The bottleneck moved to{" "}
                    <strong className="text-foreground font-semibold">
                      orchestration
                    </strong>{" "}
                    - who can wire agents, subagents, MCP connectors, and
                    sandboxed compute into a system that ships. Our engineers
                    were trained for exactly that.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-3">
                <span
                  className="inline-flex items-center gap-2 bg-card border border-border-strong px-4 py-2.5 text-sm transition-colors hover:border-primary-purple/40"
                  title="One engineer drives five workstreams. Subagents scaffold, test, and deploy simultaneously - the multiplier behind 3× output."
                >
                  <span className="size-1.5 bg-primary-purple inline-block"></span>
                  <span className="font-semibold text-foreground">
                    Subagents shipping in parallel
                  </span>
                  <span className="text-text-muted hidden md:inline">
                    - One engineer drives five workstreams. Subagents scaffold,
                    test, and deploy simultaneously - the multiplier behind 3×
                    output.
                  </span>
                </span>
                <span
                  className="inline-flex items-center gap-2 bg-card border border-border-strong px-4 py-2.5 text-sm transition-colors hover:border-primary-purple/40"
                  title="Slack, Linear, GitHub, your DB, your analytics - every tool plugs into the agent through MCP. Nothing for your team to maintain."
                >
                  <span className="size-1.5 bg-primary-purple inline-block"></span>
                  <span className="font-semibold text-foreground">
                    MCP connectors, not glue code
                  </span>
                  <span className="text-text-muted hidden md:inline">
                    - Slack, Linear, GitHub, your DB, your analytics - every
                    tool plugs into the agent through MCP. Nothing for your team
                    to maintain.
                  </span>
                </span>
                <span
                  className="inline-flex items-center gap-2 bg-card border border-border-strong px-4 py-2.5 text-sm transition-colors hover:border-primary-purple/40"
                  title="Repeatable work runs as installable skills. Your conventions, safety rules, and review gates become code the agents respect."
                >
                  <span className="size-1.5 bg-primary-purple inline-block"></span>
                  <span className="font-semibold text-foreground">
                    Hooks + Skills, not playbooks
                  </span>
                  <span className="text-text-muted hidden md:inline">
                    - Repeatable work runs as installable skills. Your
                    conventions, safety rules, and review gates become code the
                    agents respect.
                  </span>
                </span>
                <span
                  className="inline-flex items-center gap-2 bg-card border border-border-strong px-4 py-2.5 text-sm transition-colors hover:border-primary-purple/40"
                  title="Agents run tool calls inside isolated micro-VMs. Real execution, zero blast radius on your production environment."
                >
                  <span className="size-1.5 bg-primary-purple inline-block"></span>
                  <span className="font-semibold text-foreground">
                    Sandboxed compute via E2B
                  </span>
                  <span className="text-text-muted hidden md:inline">
                    - Agents run tool calls inside isolated micro-VMs. Real
                    execution, zero blast radius on your production environment.
                  </span>
                </span>
              </div>
            </div>
          </section>
          <section className="py-24 px-5 bg-background border-b border-border">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
                  We raise your{" "}
                  <span className="text-primary-purple">Engineering Bar</span>.
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We provide &quot;Multiplier Workshops&quot; to ensure your
                  internal culture evolves alongside our code.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-gradient-to-b from-card to-background p-10 border border-border border-t-4 border-t-primary-purple">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Full-Stack Best Practices
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Structuring projects for speed and maintainability. Clean
                    architecture is the standard.
                  </p>
                </div>
                <div className="bg-gradient-to-b from-card to-background p-10 border border-border border-t-4 border-t-primary-purple">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Generative AI Integration
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Embed Generative AI deeply into everyday workflows to
                    automate the &quot;boring stuff.&quot;
                  </p>
                </div>
                <div className="bg-gradient-to-b from-card to-background p-10 border border-border border-t-4 border-t-primary-purple">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Scaling Agile Processes
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Instilling the discipline of a Managed AI Development Team
                    into your company DNA.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 px-5 md:px-8 bg-bg-800 border-b border-border-strong">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                <div className="lg:col-span-7">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-5">
                    Three roles · one standard
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.02em]">
                    The bench{" "}
                    <span className="italic text-primary-purple">
                      you can deploy
                    </span>{" "}
                    on Monday.
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:pt-10">
                  <p className="text-base md:text-lg text-text-muted leading-snug">
                    Whether you need to{" "}
                    <strong className="text-foreground font-semibold">
                      Hire AI Developers
                    </strong>{" "}
                    or automate operations, we have the precise skill set.
                  </p>
                </div>
              </div>
              <div className="border-y border-border-strong">
                <article className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 ">
                  <div className="md:col-span-3 md:pl-6 flex md:flex-col gap-4 md:gap-3 items-baseline md:items-start">
                    <span className="text-4xl md:text-6xl font-extrabold tabular-nums tracking-tight leading-none text-text-soft">
                      01
                    </span>
                    <div className="flex items-center gap-2">
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
                        className="lucide lucide-rocket size-4 text-text-soft"
                        aria-hidden="true"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-text-soft">
                        The Embed
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-[-0.01em]">
                      Forward Deployed Engineer
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed max-w-xl">
                      Sits inside your team. Owns features end to end. Joins
                      your standups, ships in your repo, debugs against real
                      users on day one.
                    </p>
                  </div>
                  <div className="md:col-span-3 flex flex-col gap-4 md:items-end">
                    <ul className="space-y-1.5 md:text-right">
                      <li className="text-xs md:text-sm text-text-muted leading-snug">
                        Product features end to end
                      </li>
                      <li className="text-xs md:text-sm text-text-muted leading-snug">
                        Embedded in your Slack + repo
                      </li>
                      <li className="text-xs md:text-sm text-text-muted leading-snug">
                        Real users, real telemetry
                      </li>
                    </ul>
                    <div className="flex flex-wrap md:justify-end gap-2 pt-2 border-t border-border-subtle md:border-t-0">
                      <div
                        title="Claude Code"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Claude Code"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Codex"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Codex"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Cursor"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Cursor"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Conductor"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Conductor"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="cmux"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="cmux"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="GitHub"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="GitHub"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgithub.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Linear"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Linear"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Flinear.app%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Supabase"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Supabase"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fsupabase.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </article>
                <article className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-border-subtle">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-primary-purple"
                  ></div>
                  <div className="md:col-span-3 md:pl-6 flex md:flex-col gap-4 md:gap-3 items-baseline md:items-start">
                    <span className="text-4xl md:text-6xl font-extrabold tabular-nums tracking-tight leading-none text-primary-purple">
                      02
                    </span>
                    <div className="flex items-center gap-2">
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
                        className="lucide lucide-trending-up size-4 text-primary-purple"
                        aria-hidden="true"
                      >
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-primary-purple">
                        The Multiplier (Most Popular)
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-[-0.01em]">
                      GTM Engineer
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed max-w-xl">
                      Automates the boring side of growth. Outbound pipelines,
                      lead enrichment, CRM hygiene, signal scoring. Your sales
                      team wakes up to qualified meetings.
                    </p>
                  </div>
                  <div className="md:col-span-3 flex flex-col gap-4 md:items-end">
                    <ul className="space-y-1.5 md:text-right">
                      <li className="text-xs md:text-sm text-text-muted leading-snug">
                        Outbound + enrichment pipelines
                      </li>
                      <li className="text-xs md:text-sm text-text-muted leading-snug">
                        Signal scoring + CRM sync
                      </li>
                      <li className="text-xs md:text-sm text-text-muted leading-snug">
                        Meetings booked while you sleep
                      </li>
                    </ul>
                    <div className="flex flex-wrap md:justify-end gap-2 pt-2 border-t border-border-subtle md:border-t-0">
                      <div
                        title="n8n"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="n8n"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Clay"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Clay"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fclay.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="HubSpot"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="HubSpot"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fhubspot.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Apollo"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Apollo"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapollo.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Slack"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Slack"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fslack.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Make"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Make"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Zapier"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Zapier"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fzapier.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </article>
                <article className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-border-subtle">
                  <div className="md:col-span-3 md:pl-6 flex md:flex-col gap-4 md:gap-3 items-baseline md:items-start">
                    <span className="text-4xl md:text-6xl font-extrabold tabular-nums tracking-tight leading-none text-text-soft">
                      03
                    </span>
                    <div className="flex items-center gap-2">
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
                        className="lucide lucide-network size-4 text-text-soft"
                        aria-hidden="true"
                      >
                        <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                        <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                        <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                        <path d="M12 12V8"></path>
                      </svg>
                      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-text-soft">
                        The Orchestrator
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-[-0.01em]">
                      AI Automation Architect
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed max-w-xl">
                      Wires agentic systems. Subagents, MCP connectors, hooks,
                      skills. Builds the internal AI infrastructure your team
                      will compound on for years.
                    </p>
                  </div>
                  <div className="md:col-span-3 flex flex-col gap-4 md:items-end">
                    <ul className="space-y-1.5 md:text-right">
                      <li className="text-xs md:text-sm text-text-muted leading-snug">
                        Agentic workflows + subagents
                      </li>
                      <li className="text-xs md:text-sm text-text-muted leading-snug">
                        MCP connectors to your stack
                      </li>
                      <li className="text-xs md:text-sm text-text-muted leading-snug">
                        Sandboxed compute for tool calls
                      </li>
                    </ul>
                    <div className="flex flex-wrap md:justify-end gap-2 pt-2 border-t border-border-subtle md:border-t-0">
                      <div
                        title="Claude Code"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Claude Code"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fanthropic.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Codex"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Codex"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fopenai.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Cursor"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Cursor"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcursor.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Conductor"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Conductor"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fconductor.build%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="cmux"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="cmux"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fcmux.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="n8n"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="n8n"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fn8n.io%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="Make"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="Make"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmake.com%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                      <div
                        title="E2B"
                        className="relative size-7 opacity-90 transition-opacity hover:opacity-100"
                      >
                        <img
                          alt="E2B"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain"
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
                          sizes="28px"
                          srcSet="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fe2b.dev%3Ftoken%3Dpk_fBi0irWDRaSuFNlLgKDnvQ%26size%3D128%26format%3Dpng%26retina%3Dtrue&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <p className="mt-8 text-sm text-text-muted leading-relaxed">
                Already know you want one role specifically? See{" "}
                <a
                  className="text-primary-purple underline hover:no-underline"
                  href="/services/forward-deployed-engineers"
                >
                  Forward Deployed Engineers
                </a>{" "}
                or{" "}
                <a
                  className="text-primary-purple underline hover:no-underline"
                  href="/services/engineer-placement"
                >
                  Engineer Placement
                </a>{" "}
                for the full detail on process, timeline, and guarantee.
                Comparing your hiring options first? See{" "}
                <a
                  className="text-primary-purple underline hover:no-underline"
                  href="/services/hire-ai-developers"
                >
                  how to hire an AI developer
                </a>{" "}
                for a side-by-side of one hire vs. a team.
              </p>
            </div>
          </section>
          <section className="bg-bg-800 border-y border-border-strong">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                <div className="lg:col-span-7">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-5">
                    Don&#x27;t take it from us
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.02em]">
                    Hear it from the{" "}
                    <span className="italic text-primary-purple">
                      operators we shipped for
                    </span>
                    .
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-base md:text-lg text-text-muted leading-snug">
                    Real founders. Real cameras. No scripts. Click any card to
                    play. Elie, Wytze, Ana María, Roald, Jim, Othmane, Connor -
                    different scales, same model.
                  </p>
                </div>
              </div>
            </div>
            <section className="w-full transition-colors duration-500 bg-transparent py-8 sm:py-12">
              <div className="sm:hidden overflow-hidden w-full">
                <div
                  className="flex"
                  style={{
                    transform: "translateX(calc(12vw - 0 * 78vw))",
                    transition:
                      "transform 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  <div
                    className="flex-shrink-0 mr-[2vw] aspect-[9/16] cursor-pointer"
                    style={{
                      width: "76vw",
                      opacity: "1",
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Elie Salame - COO at Adstronaut.io"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=3840&amp;q=75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <button
                          className="absolute inset-0 flex items-center justify-center"
                          aria-label="Play Elie Salame&#x27;s review"
                        >
                          <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:scale-110 hover:bg-black/60 transition-all duration-300 shadow-xl">
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
                              className="lucide lucide-play w-6 h-6 text-white fill-white ml-0.5"
                              aria-hidden="true"
                            >
                              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                            </svg>
                          </div>
                        </button>
                        <div className="absolute bottom-3 left-3 pointer-events-none">
                          <p className="text-white font-semibold text-xs sm:text-sm leading-tight drop-shadow">
                            Elie Salame
                          </p>
                          <p className="text-white/75 text-[10px] sm:text-xs leading-tight drop-shadow">
                            COO · Adstronaut.io
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 mr-[2vw] aspect-[9/16] cursor-pointer"
                    style={{
                      width: "76vw",
                      opacity: "0.55",
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Wytze de Haan - Co-Founder at Narrative"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 mr-[2vw] aspect-[9/16] cursor-pointer"
                    style={{
                      width: "76vw",
                      opacity: "0.55",
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Ana María Martínez - CEO at EasyClick"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 mr-[2vw] aspect-[9/16] cursor-pointer"
                    style={{
                      width: "76vw",
                      opacity: "0.55",
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Roald Larsen - CEO at Untaylored"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-untaylored-roald-larsen-ceo.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-untaylored-roald-larsen-ceo.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-untaylored-roald-larsen-ceo.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-untaylored-roald-larsen-ceo.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-untaylored-roald-larsen-ceo.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-untaylored-roald-larsen-ceo.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-untaylored-roald-larsen-ceo.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-untaylored-roald-larsen-ceo.jpg&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-untaylored-roald-larsen-ceo.jpg&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 mr-[2vw] aspect-[9/16] cursor-pointer"
                    style={{
                      width: "76vw",
                      opacity: "0.55",
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Jim Adams - CEO at MeetLexi"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-meetlexi-jim-adams-ceo.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-meetlexi-jim-adams-ceo.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-meetlexi-jim-adams-ceo.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-meetlexi-jim-adams-ceo.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-meetlexi-jim-adams-ceo.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-meetlexi-jim-adams-ceo.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-meetlexi-jim-adams-ceo.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-meetlexi-jim-adams-ceo.jpg&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-meetlexi-jim-adams-ceo.jpg&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 mr-[2vw] aspect-[9/16] cursor-pointer"
                    style={{
                      width: "76vw",
                      opacity: "0.55",
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Othmane Khadri - Founder at Earleads"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 mr-[2vw] aspect-[9/16] cursor-pointer"
                    style={{
                      width: "76vw",
                      opacity: "0.55",
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Connor Miller - Technical Director at Uniworx"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:hidden flex flex-col items-center gap-4 mt-6">
                <div className="flex gap-3">
                  <button
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary-purple hover:text-primary-purple transition-colors"
                    aria-label="Previous"
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
                      className="lucide lucide-chevron-left w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <button
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary-purple hover:text-primary-purple transition-colors"
                    aria-label="Next"
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
                      className="lucide lucide-chevron-right w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    className="rounded-full transition-all duration-300 w-6 h-2 bg-primary-purple"
                    aria-label="Go to testimonial 1"
                  ></button>
                  <button
                    className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                    aria-label="Go to testimonial 2"
                  ></button>
                  <button
                    className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                    aria-label="Go to testimonial 3"
                  ></button>
                  <button
                    className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                    aria-label="Go to testimonial 4"
                  ></button>
                  <button
                    className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                    aria-label="Go to testimonial 5"
                  ></button>
                  <button
                    className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                    aria-label="Go to testimonial 6"
                  ></button>
                  <button
                    className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                    aria-label="Go to testimonial 7"
                  ></button>
                </div>
              </div>
              <div className="hidden sm:flex relative items-center justify-center h-[500px] lg:h-[560px] overflow-x-clip">
                <div className="absolute" style={{ zIndex: "20" }}>
                  <div className="w-[240px] lg:w-[280px] aspect-[9/16]">
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Elie Salame - COO at Adstronaut.io"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-adstronaut-elie-salame-coo.jpg&amp;w=3840&amp;q=75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <button
                          className="absolute inset-0 flex items-center justify-center"
                          aria-label="Play Elie Salame&#x27;s review"
                        >
                          <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:scale-110 hover:bg-black/60 transition-all duration-300 shadow-xl">
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
                              className="lucide lucide-play w-6 h-6 text-white fill-white ml-0.5"
                              aria-hidden="true"
                            >
                              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                            </svg>
                          </div>
                        </button>
                        <div className="absolute bottom-3 left-3 pointer-events-none">
                          <p className="text-white font-semibold text-xs sm:text-sm leading-tight drop-shadow">
                            Elie Salame
                          </p>
                          <p className="text-white/75 text-[10px] sm:text-xs leading-tight drop-shadow">
                            COO · Adstronaut.io
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute cursor-pointer"
                  style={{ zIndex: "10" }}
                >
                  <div className="w-[240px] lg:w-[280px] aspect-[9/16]">
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Wytze de Haan - Co-Founder at Narrative"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-narrative-wytze-de-haan-cofounder.webp&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute cursor-pointer"
                  style={{ zIndex: "5" }}
                >
                  <div className="w-[240px] lg:w-[280px] aspect-[9/16]">
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Ana María Martínez - CEO at EasyClick"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-easyclick-ana-maria-martinez-ceo.webp&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute cursor-pointer"
                  style={{ zIndex: "5" }}
                >
                  <div className="w-[240px] lg:w-[280px] aspect-[9/16]">
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Othmane Khadri - Founder at Earleads"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-earleads-othmane-khadri-founder.webp&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute cursor-pointer"
                  style={{ zIndex: "10" }}
                >
                  <div className="w-[240px] lg:w-[280px] aspect-[9/16]">
                    <div className="relative flex flex-col h-full">
                      <span className="absolute top-0 left-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute top-0 right-0 z-20 pointer-events-none w-5 h-5 border-t-2 border-r-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 left-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-l-2 border-[#8082C1]"></span>
                      <span className="absolute bottom-0 right-0 z-20 pointer-events-none w-5 h-5 border-b-2 border-r-2 border-[#8082C1]"></span>
                      <div className="relative overflow-hidden bg-black flex-1 min-h-0">
                        <img
                          alt="Connor Miller - Technical Director at Uniworx"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover"
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
                          sizes="(max-width: 768px) 90vw, 65vw"
                          srcSet="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=3840&amp;q=75 3840w"
                          src="/_next/image?url=https%3A%2F%2Fcdn.ayautomate.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fvideo-testimonials%2Fposter-uniworx-connor-miller-technical-director.jpg&amp;w=3840&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex justify-center gap-2 mt-8">
                <button
                  className="rounded-full transition-all duration-300 w-6 h-2 bg-primary-purple"
                  aria-label="Go to testimonial 1"
                ></button>
                <button
                  className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                  aria-label="Go to testimonial 2"
                ></button>
                <button
                  className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                  aria-label="Go to testimonial 3"
                ></button>
                <button
                  className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                  aria-label="Go to testimonial 4"
                ></button>
                <button
                  className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                  aria-label="Go to testimonial 5"
                ></button>
                <button
                  className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                  aria-label="Go to testimonial 6"
                ></button>
                <button
                  className="rounded-full transition-all duration-300 w-2 h-2 bg-border hover:bg-muted-foreground"
                  aria-label="Go to testimonial 7"
                ></button>
              </div>
            </section>
          </section>
          <section className="py-24 px-5 bg-background border-b border-border">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
                  The <span className="text-primary-purple">AY Automate</span>{" "}
                  Advantage.
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Why leading tech firms switch from freelancers to our{" "}
                  <strong>Dedicated Development Team</strong> model.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="flex gap-5 items-start">
                  <div className="text-primary-purple text-2xl font-bold">
                    -
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Zero Onboarding Waste
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our engineers are ready to deliver from Day One.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="text-primary-purple text-2xl font-bold">
                    -
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Engineers Who Stay
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mentored directly by our founders, ensuring long-term
                      stability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="text-primary-purple text-2xl font-bold">
                    -
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Senior Engineers Only
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No junior bench learning on your project. Every engineer
                      is vetted for production-grade delivery before they touch
                      your roadmap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 px-5 md:px-8 bg-bg-800 border-b border-border-strong">
            <div className="max-w-4xl mx-auto">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft mb-6">
                Questions from teams hiring AI developers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mb-10">
                Everything you need to know before you{" "}
                <span className="italic text-primary-purple">
                  hire AI developers
                </span>
                .
              </h2>
              <div className="divide-y divide-border-strong border-t border-border-strong">
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    How fast can I hire AI developers?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    Most teams are live within days. Once we align on your stack
                    and roadmap on the kickoff call, your senior AI engineer and
                    the agent fleet start shipping in your repo the same week.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    What is the difference between hiring AI developers here and
                    a marketplace like Upwork?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    Marketplaces connect you to individual freelancers you still
                    have to vet, manage, and coordinate. We assign one senior AI
                    engineer who orchestrates a fleet of AI agents, so you get
                    the output of a dedicated AI development team without the
                    sourcing, interviewing, or day-to-day management.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Do I get a dedicated AI development team?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    Yes. Your engineer works exclusively on your roadmap, backed
                    by a fleet of agents handling scaffolding, testing, and
                    deployment in parallel. It functions as a dedicated AI
                    development team, run by one accountable engineer instead of
                    a rotating bench.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Can one engineer really replace a 5-person team?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    One engineer plus a coordinated fleet of AI agents can cover
                    the ground a 5-person team used to: feature work, QA,
                    deployment, and monitoring running in parallel instead of in
                    sequence. The engineer directs the fleet and owns the
                    output.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    What can your AI agents build?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    Product features end to end, internal tools, workflow
                    automations, GTM pipelines, and agentic systems wired into
                    your existing stack through MCP connectors. See the roles
                    above for the exact skill sets we deploy.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Who are the founders?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    Walid and Adel, ex-IBM engineers who built AY Automate after
                    running production-grade automation and AI agent systems for
                    enterprise clients. They oversee every engagement directly,
                    not through account managers.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Do I need to manage the AI agents myself?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    No. Your senior AI engineer directs the fleet. You get
                    status updates and shipped work, not a queue of agents to
                    configure.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    What does hiring a dedicated AI development team cost?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    Pricing depends on scope and the number of engineers you
                    need. Book a kickoff call and we will scope your roadmap and
                    quote a plan before any work starts.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    How is this different from Engineer Placement or Forward
                    Deployed Engineers?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    This is the flagship offer: choose 1 to 5 engineers across
                    three role types (Forward Deployed Engineer, GTM Engineer,
                    AI Automation Architect) and we assemble the team. Engineer
                    Placement is the deep dive on the staffing process itself,
                    timeline, and the 90-day replacement guarantee. Forward
                    Deployed Engineers is the deep dive on that specific
                    embedded-engineer role. If you already know you want one
                    embedded engineer, start on whichever of those two matches
                    your need; if you want a multi-role team or are not sure
                    which role fits, start here.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Where can I find AI developers for hire?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    Most &quot;AI developers for hire&quot; searches lead to a
                    marketplace of individual freelancers you still have to vet,
                    interview, and manage yourself. We&#x27;re the alternative:
                    one senior AI engineer, backed by a fleet of AI agents,
                    hired the same way you&#x27;d hire a dedicated team member,
                    not sourced from a freelancer pool.
                  </p>
                </div>
                <div className="py-7">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Can I hire your team for AI automation specifically?
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed">
                    Yes, if automation is the whole need rather than a broader
                    embedded engineer, see our AI Automation Agency and Custom
                    Automation pages, which cover n8n workflows and agent-driven
                    automation directly. This flagship offer is the right
                    starting point when you want an AI developer covering
                    automation plus everything else on your roadmap, not
                    automation alone.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="booking-section"
            className="relative overflow-hidden bg-gradient-to-b from-background to-card border-t border-border-strong"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 [background:radial-gradient(800px_400px_at_50%_0%,var(--primary-100),transparent_70%)] opacity-80"
            ></div>
            <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-20 text-center">
              <div className="inline-flex items-center gap-2 border border-border-strong bg-card px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-text-soft mb-10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                </span>
                <span>Open for new client teams</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-[-0.03em] mb-8">
                Ready to{" "}
                <span className="italic text-primary-purple">
                  Hire AI Developers
                </span>
                <br />
                this month?
              </h2>
              <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-14 leading-snug">
                Stop the hiring grind. Start scaling your{" "}
                <strong className="text-foreground font-semibold">
                  Dedicated Development Team
                </strong>{" "}
                with AY Automate.
              </p>
              <div className="mb-14 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base md:text-lg">
                <span className="inline-flex items-center gap-2">
                  <span className="tabular-nums font-extrabold text-text-soft">
                    01
                  </span>
                  <span className="font-semibold text-foreground">
                    Choose Your Team
                  </span>
                  <span className="text-text-soft mx-1">→</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="tabular-nums font-extrabold text-primary-purple">
                    02
                  </span>
                  <span className="font-semibold text-foreground">
                    Strategy Kickoff
                  </span>
                  <span className="text-text-soft mx-1">→</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="tabular-nums font-extrabold text-text-soft">
                    03
                  </span>
                  <span className="font-semibold text-foreground">
                    Deploy &amp; Scale
                  </span>
                </span>
              </div>
              <div className="mb-14">
                <div className="flex flex-col items-center gap-5 ">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    Trusted by founders and CEOs
                  </p>
                  <div className="flex items-center">
                    <div className="flex -space-x-3">
                      <span
                        title="Wytze de Haan - Co-founder at Part of Narrative"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/wytze-de-haan.jpg"
                          alt="Wytze de Haan - Part of Narrative"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        title="Mohamed El Hannaoui - Founder at Kateb.ma"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/mohamed-el-hannaoui.jpg"
                          alt="Mohamed El Hannaoui - Kateb.ma"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        title="Connor Miller - Systems Engineer / Founder at Uniworx"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/connor-miller.jpg"
                          alt="Connor Miller - Uniworx"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        title="Jurgen Swaans - Founder &amp; Owner at Neoday &amp; Magneds"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/jurgen-swaans.jpg"
                          alt="Jurgen Swaans - Neoday &amp; Magneds"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        title="Othmane Khadri - Founder at Earleads.com"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/othmane-khadri.jpg"
                          alt="Othmane Khadri - Earleads.com"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        title="Ana Maria Martinez - Founder at EasyClickWeb"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/ana-maria-martinez.webp"
                          alt="Ana Maria Martinez - EasyClickWeb"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        title="Pablo Smolders - Founder &amp; Managing Director at ArtOfYou"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/pablo-smolders.jpg"
                          alt="Pablo Smolders - ArtOfYou"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        title="Zyad Mouniri - Founder at Addictest"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/zyad-mouniri.png"
                          alt="Zyad Mouniri - Addictest"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        title="Elie Salame - COO at Adstronaut.io"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/elie-salame.png"
                          alt="Elie Salame - Adstronaut.io"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span
                        title="Jim Adams - CEO at MeetLexi"
                        className="relative inline-block h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-primary-purple/10 ring-2 ring-background shadow-sm"
                      >
                        <img
                          src="/images/clients/faces/jim-adams.webp"
                          alt="Jim Adams - MeetLexi"
                          width="48"
                          height="48"
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                    </div>
                    <p className="ml-4 text-sm font-semibold text-foreground">
                      +45{" "}
                      <span className="font-normal text-muted-foreground">
                        founders and operators
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="https://cal.com/walidboulanouar/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 bg-primary-purple px-12 py-6 text-xl md:text-2xl font-bold text-white shadow-[0_20px_60px_-15px_rgba(128,130,193,0.7)] ring-1 ring-inset ring-white/15 transition-all duration-200 hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-15px_rgba(128,130,193,0.9)]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
                  ></span>
                  <span>Schedule Your Kickoff Call</span>
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
                    className="lucide lucide-arrow-right size-5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <p className="mt-6 text-sm text-text-muted">
                  Limited spots for new dedicated teams this quarter.
                </p>
              </div>
              <div className="mt-20">
                <div className="flex flex-col items-center gap-6 ">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    Official partners
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Verify Clay Enterprise Partner"
                      className="block"
                      href="https://www.clay.com/agencies"
                    >
                      <div className="group flex flex-col items-center gap-3 text-center">
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src="/images/certifications/clay-enterprise-partner.png"
                            alt="Clay Enterprise Partner - Clay"
                            width="112"
                            height="112"
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="max-w-[140px]">
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            Clay Enterprise Partner
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Clay
                          </p>
                        </div>
                      </div>
                    </a>
                    <div>
                      <div className="group flex flex-col items-center gap-3 text-center">
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src="/images/certifications/google-partner.png"
                            alt="Google Partner - Google"
                            width="112"
                            height="112"
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="max-w-[140px]">
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            Google Partner
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Google
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="group flex flex-col items-center gap-3 text-center">
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src="/images/certifications/make-certified-partner.webp"
                            alt="Make Certified Partner - Make"
                            width="112"
                            height="112"
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="max-w-[140px]">
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            Make Certified Partner
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Make
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="group flex flex-col items-center gap-3 text-center">
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src="/images/certifications/n8n-certified-expert-partner.png"
                            alt="n8n Certified Expert Partner - n8n"
                            width="112"
                            height="112"
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="max-w-[140px]">
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            n8n Certified Expert Partner
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            n8n
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="group flex flex-col items-center gap-3 text-center">
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src="https://img.logo.dev/aws.amazon.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=256&amp;format=png&amp;retina=true"
                            alt="AWS Partner - Amazon Web Services"
                            width="112"
                            height="112"
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="max-w-[140px]">
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            AWS Partner
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Amazon Web Services
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="group flex flex-col items-center gap-3 text-center">
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src="https://img.logo.dev/azure.microsoft.com?token=pk_fBi0irWDRaSuFNlLgKDnvQ&amp;size=256&amp;format=png&amp;retina=true"
                            alt="Azure Partner - Microsoft Azure"
                            width="112"
                            height="112"
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="max-w-[140px]">
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            Azure Partner
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Microsoft Azure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16">
                <div className="flex flex-col items-center gap-6 ">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    Our engineers are certified
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
                    <div>
                      <div className="group flex flex-col items-center gap-3 text-center">
                        <div className="relative h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src="/images/certifications/anthropic-claude-certified-architect.png"
                            alt="Claude Certified Architect - Anthropic"
                            width="112"
                            height="112"
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="max-w-[140px]">
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            Claude Certified Architect
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Anthropic
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="group flex flex-col items-center gap-3 text-center">
                        <div className="relative h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src="/images/certifications/microsoft-ai-industry-leader.png"
                            alt="AI Industry Leader Certified - Microsoft"
                            width="112"
                            height="112"
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="max-w-[140px]">
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            AI Industry Leader Certified
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Microsoft
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="group flex flex-col items-center gap-3 text-center">
                        <div className="relative h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src="/images/certifications/microsoft-certified-fundamentals.png"
                            alt="Certified: Fundamentals - Microsoft"
                            width="112"
                            height="112"
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="max-w-[140px]">
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            Certified: Fundamentals
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Microsoft
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="relative border-t border-border-strong bg-background">
              <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 pb-10">
                <div className="flex flex-col md:flex-row justify-center gap-12 mb-16 text-sm text-center">
                  <div>
                    <strong className="text-foreground block text-base">
                      Walid
                    </strong>
                    <span className="block mb-1 text-text-soft text-xs uppercase tracking-widest">
                      Co-Founder · CEO
                    </span>
                    <a
                      href="mailto:walid@ayautomate.com"
                      className="text-primary-purple hover:underline"
                    >
                      walid@ayautomate.com
                    </a>
                  </div>
                  <div>
                    <strong className="text-foreground block text-base">
                      Adel
                    </strong>
                    <span className="block mb-1 text-text-soft text-xs uppercase tracking-widest">
                      Co-Founder · CTO
                    </span>
                    <a
                      href="mailto:adel@ayautomate.com"
                      className="text-primary-purple hover:underline"
                    >
                      adel@ayautomate.com
                    </a>
                  </div>
                </div>
                <div className="mb-12 text-sm text-center">
                  <a
                    href="https://linkedin.com/in/walid-boulanouar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary-purple transition-colors mx-3"
                  >
                    Walid LinkedIn
                  </a>
                  <span className="text-text-soft">·</span>
                  <a
                    href="https://linkedin.com/in/adeldahani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary-purple transition-colors mx-3"
                  >
                    Adel LinkedIn
                  </a>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
