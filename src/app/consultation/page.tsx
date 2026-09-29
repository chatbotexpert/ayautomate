"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Check, Clock, Reply, Users } from "lucide-react";
import Link from "next/link";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real implementation, this might proceed to the calendar step
  };

  return (
    <div className="min-h-screen bg-[#0d0d12] text-foreground font-sans selection:bg-primary-purple/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Trusted By Faces */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="flex -space-x-2">
              <img
                src="/images/clients/faces/face1.jpg"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-[#0d0d12] object-cover bg-gray-800"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=J+D&background=random";
                }}
              />
              <img
                src="/images/clients/faces/face2.jpg"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-[#0d0d12] object-cover bg-gray-700"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=S+M&background=random";
                }}
              />
              <img
                src="/images/clients/faces/face3.jpg"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-[#0d0d12] object-cover bg-gray-800"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=A+L&background=random";
                }}
              />
              <img
                src="/images/clients/faces/wytze-de-haan.jpg"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-[#0d0d12] object-cover bg-gray-700"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=W+H&background=random";
                }}
              />
            </div>
            <span className="text-sm font-semibold text-gray-200 tracking-wide">
              Trusted by 30+ companies
            </span>
          </div>

          <h1 className="text-5xl md:text-[64px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
            See What Your Team Can
            <br />
            Hand to{" "}
            <span className="text-[#a1a1ff] italic font-serif">AI Agents</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
            Book a free 30-minute call. You keep the roadmap, whether we work
            together or not.
          </p>

          {/* 3 Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-[#15151c] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-[#a1a1ff]" />
                <h3 className="font-semibold text-white text-[15px]">
                  A free 30-minute
                  <br />
                  strategy call
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                We walk through your workflows and where AI agents can take over
                real work.
              </p>
            </div>

            <div className="bg-[#15151c] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Check className="w-5 h-5 text-[#a1a1ff]" />
                <h3 className="font-semibold text-white text-[15px]">
                  A scoped automation
                  <br />
                  roadmap
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                You keep it, whether we work together or not.
              </p>
            </div>

            <div className="bg-[#15151c] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-[#a1a1ff]" />
                <h3 className="font-semibold text-white text-[15px]">
                  A same-day response
                  <br />
                  &nbsp;
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                No slow pipeline before you get a real answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded border border-[#2a2a35] bg-[#1a1a24] text-[10px] uppercase tracking-widest text-[#a1a1ff] font-bold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a1a1ff] mr-2"></span>
            CLIENT REVIEWS
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Real Results from{" "}
            <span className="text-[#a1a1ff] italic font-serif">
              30+ Companies
            </span>
          </h2>
          <p className="text-gray-400 mb-16 text-lg">
            Hear directly from the businesses we've transformed with AI
            automation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-end justify-center">
            {/* These would be actual video components in reality */}
            <div className="aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80"
                className="w-full h-full object-cover"
                alt="Review 1"
              />
            </div>
            <div className="aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                className="w-full h-full object-cover"
                alt="Review 2"
              />
            </div>
            {/* Center video is larger */}
            <div className="aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden relative group transform scale-110 z-10 shadow-2xl border-2 border-[#2a2a35]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
                className="w-full h-full object-cover"
                alt="Review 3"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-14 h-14 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                className="w-full h-full object-cover"
                alt="Review 4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row bg-[#111116] border border-white/5 rounded-3xl overflow-hidden">
            {/* Left side text */}
            <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Book a Free 30-Minute Call
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We'll map your workflows and show you exactly what a fleet of AI
                agents, run by one senior engineer, could take off your team's
                plate. No slide deck, no sales pitch. Just a working session,
                and a plan you can use whether we work together or not.
              </p>

              <p className="text-sm text-gray-500 mb-8">
                Don't want a call? Email{" "}
                <a
                  href="mailto:walid@ayautomate.com"
                  className="text-[#a1a1ff] hover:underline"
                >
                  walid@ayautomate.com
                </a>
              </p>

              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#a1a1ff]" />
                  <span className="text-gray-300 font-medium text-[15px]">
                    Free 30-Minute Strategy Call
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#a1a1ff]" />
                  <span className="text-gray-300 font-medium text-[15px]">
                    Scoped Automation Roadmap
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#a1a1ff]" />
                  <span className="text-gray-300 font-medium text-[15px]">
                    Same-Day Response
                  </span>
                </div>
              </div>

              <blockquote className="border-l-2 border-[#2a2a35] pl-6 text-xl text-gray-300 font-serif italic relative">
                <span className="absolute -left-3 -top-2 text-4xl text-[#2a2a35]">
                  "
                </span>
                "We asked AY to build our MVP, and they did it in one month.
                Very responsive, very quick in their delivery."
              </blockquote>
            </div>

            {/* Right side form */}
            <div className="flex-1 bg-gradient-to-br from-[#1a1c29] to-[#0f111a] p-6 md:p-12 relative overflow-hidden flex items-center justify-center min-h-[500px]">
              {/* Background texture simulation */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    'url("https://www.transparenttextures.com/patterns/cubes.png")',
                }}
              ></div>

              {/* Form Card */}
              <div className="w-full max-w-md bg-[#0f1115] border border-white/5 rounded-2xl p-6 shadow-2xl relative z-10">
                {!submitted ? (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src="https://ui-avatars.com/api/?name=W+B&background=random"
                        className="w-12 h-12 rounded-full border border-white/10"
                        alt="Walid"
                      />
                      <div>
                        <h4 className="text-white font-semibold">
                          Walid Boulanouar
                        </h4>
                        <a
                          href="#"
                          className="text-xs text-blue-400 hover:underline flex items-center gap-1"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          View LinkedIn
                        </a>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#1a1a24] border border-white/10 text-[10px] font-medium text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                          LIVE
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Free Strategy Call
                    </h3>
                    <p className="text-[11px] text-gray-500 font-semibold tracking-wider uppercase mb-6 flex items-center gap-2">
                      <span>30 MINUTES</span>
                      <span>•</span>
                      <span>GOOGLE MEET</span>
                      <span>•</span>
                      <span>FREE</span>
                    </p>

                    <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                      No fixed packages, no sales pitch.{" "}
                      <span className="text-white font-semibold">
                        You leave with a scoped plan, call or not.
                      </span>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        className="w-full bg-[#15171e] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#a1a1ff]/50 transition-colors"
                      />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Work email"
                        className="w-full bg-[#15171e] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#a1a1ff]/50 transition-colors"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#3d3d52] hover:bg-[#4d4d62] text-white font-medium rounded-xl px-4 py-3 text-sm transition-colors mt-2 flex items-center justify-center gap-2"
                      >
                        Continue to pick a time
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Thanks for your interest!
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      We would normally redirect you to our calendar booking
                      page now.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#a1a1ff] hover:underline text-sm font-medium"
                    >
                      Book another session
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center mb-12">
          <p className="text-[11px] font-bold text-[#a1a1ff] tracking-widest uppercase mb-4">
            BEFORE YOU BOOK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Questions About the Call
          </h2>
        </div>

        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-0 rounded-2xl overflow-hidden border border-[#2a2a35] bg-[#111116]">
            {/* FAQ Item 1 */}
            <div className="border-b border-[#2a2a35] p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-3">
                Is the AI automation consultation actually free?
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Yes. It's a free 30-minute strategy call, no card required and
                no obligation to buy anything afterward. We map your highest-ROI
                automation and AI agent opportunities and you keep the notes
                either way.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-[#2a2a35] p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-3">
                Will there be a sales pitch on the call?
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                No pitch, no slides. The call is spent on your workflows: what's
                manual today, where an AI agent or automation could take it
                over, and roughly what that would take. If it makes sense to
                work together we'll say so, but the roadmap is yours regardless.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-[#2a2a35] p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-3">
                What do I need to prepare before the call?
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Nothing formal. Come ready to describe the process that eats the
                most time on your team, whether that's lead qualification,
                invoice processing, customer onboarding, or something else.
                We'll ask the follow-up questions.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-3">
                What happens after the consultation call?
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                You get a same-day response with the scoped automation roadmap
                we talked through. No slow pipeline. From there it's your call
                whether to move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
