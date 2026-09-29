"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import DeployAutomationSection from "@/components/DeployAutomationSection";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Zap,
  CheckCircle2,
  MessageSquare,
  Shield,
  Star,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function BookACallPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "",
    budget: "",
    message: "",
    services: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    "AI Agent Development",
    "Custom Workflow Automation",
    "AI Strategy Consulting",
    "RAG Pipeline Architecture",
    "SaaS MVP Development",
    "Team Augmentation",
    "Claude Code Security Audit",
    "Custom Training",
  ];

  const benefits = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "30-Minute Strategy Session",
      description:
        "A focused call to understand your challenges and identify quick wins.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Custom AI Roadmap",
      description:
        "Walk away with a clear plan for implementing AI in your workflow.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "No Obligation",
      description:
        "Zero pressure. If we're not the right fit, we'll tell you.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Fast Turnaround",
      description:
        "Most projects go from call to kickoff in under 48 hours.",
    },
  ];

  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "40+", label: "Enterprise Clients" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "< 48h", label: "Average Response Time" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "60px",
          background:
            "radial-gradient(ellipse at 30% 20%, color-mix(in srgb, var(--primary-purple) 15%, transparent) 0%, transparent 60%)",
        }}
      >
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                }}
              >
                <Calendar className="h-4 w-4 text-primary-purple" />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--primary-purple)",
                  }}
                >
                  Free Strategy Session
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "20px",
                }}
              >
                Book a Call
                <br />
                <span style={{ color: "var(--primary-purple)" }}>
                  with Our Team
                </span>
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                  marginBottom: "40px",
                }}
              >
                Schedule a free 30-minute strategy session with our AI
                automation experts. We&apos;ll discuss your challenges, explore
                opportunities, and create a custom roadmap for your business.
              </p>

              {/* Benefits */}
              <div
                className="flex flex-col gap-5"
                style={{ marginBottom: "40px" }}
              >
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background:
                          "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))",
                        border: "1px solid rgba(139, 92, 246, 0.15)",
                        color: "var(--primary-purple)",
                      }}
                    >
                      {benefit.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          marginBottom: "2px",
                        }}
                      >
                        {benefit.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--muted-foreground)",
                          lineHeight: 1.5,
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        color: "var(--primary-purple)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--muted-foreground)",
                        marginTop: "2px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              {!submitted ? (
                <>
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      marginBottom: "4px",
                    }}
                  >
                    Schedule Your Free Call
                  </h2>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--muted-foreground)",
                      marginBottom: "28px",
                    }}
                  >
                    Fill in your details and we&apos;ll get back to you within
                    24 hours.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "16px" }}>
                      <div>
                        <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground)", display: "block", marginBottom: "6px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" style={{ width: "100%", padding: "10px 14px", fontSize: "14px", background: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--foreground)", outline: "none" }} />
                      </div>
                      <div>
                        <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground)", display: "block", marginBottom: "6px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" style={{ width: "100%", padding: "10px 14px", fontSize: "14px", background: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--foreground)", outline: "none" }} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "16px" }}>
                      <div>
                        <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground)", display: "block", marginBottom: "6px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Company</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Inc." style={{ width: "100%", padding: "10px 14px", fontSize: "14px", background: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--foreground)", outline: "none" }} />
                      </div>
                      <div>
                        <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground)", display: "block", marginBottom: "6px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" style={{ width: "100%", padding: "10px 14px", fontSize: "14px", background: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--foreground)", outline: "none" }} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "16px" }}>
                      <div>
                        <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground)", display: "block", marginBottom: "6px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Team Size</label>
                        <select name="teamSize" value={formData.teamSize} onChange={handleChange} style={{ width: "100%", padding: "10px 14px", fontSize: "14px", background: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--foreground)", outline: "none", cursor: "pointer" }}>
                          <option value="">Select...</option>
                          <option value="1-5">1-5 employees</option>
                          <option value="6-20">6-20 employees</option>
                          <option value="21-50">21-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="200+">200+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground)", display: "block", marginBottom: "6px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Monthly Budget</label>
                        <select name="budget" value={formData.budget} onChange={handleChange} style={{ width: "100%", padding: "10px 14px", fontSize: "14px", background: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--foreground)", outline: "none", cursor: "pointer" }}>
                          <option value="">Select...</option>
                          <option value="< $5k">&lt; $5,000</option>
                          <option value="$5k-$15k">$5,000 - $15,000</option>
                          <option value="$15k-$50k">$15,000 - $50,000</option>
                          <option value="$50k+">$50,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Services */}
                    <div style={{ marginBottom: "16px" }}>
                      <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground)", display: "block", marginBottom: "10px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Services Interested In</label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            style={{
                              padding: "6px 14px",
                              fontSize: "12px",
                              fontWeight: 500,
                              borderRadius: "6px",
                              border: formData.services.includes(service)
                                ? "1px solid var(--primary-purple)"
                                : "1px solid var(--border)",
                              background: formData.services.includes(service)
                                ? "rgba(139, 92, 246, 0.15)"
                                : "transparent",
                              color: formData.services.includes(service)
                                ? "var(--primary-purple)"
                                : "var(--muted-foreground)",
                              cursor: "pointer",
                              transition: "all 0.2s",
                            }}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: "24px" }}>
                      <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground)", display: "block", marginBottom: "6px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Tell Us About Your Project</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe what you're looking to automate or build..."
                        style={{ width: "100%", padding: "10px 14px", fontSize: "14px", background: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--foreground)", outline: "none", resize: "vertical", minHeight: "100px", fontFamily: "inherit" }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "14px 24px",
                        fontSize: "15px",
                        fontWeight: 600,
                        background: "linear-gradient(135deg, var(--primary-purple), #6d28d9)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        transition: "all 0.3s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <Calendar className="h-5 w-5" />
                      Book Your Free Strategy Call
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    <p style={{ fontSize: "11px", color: "var(--muted-foreground)", textAlign: "center", marginTop: "12px", lineHeight: 1.5 }}>
                      By submitting, you agree to our privacy policy. We&apos;ll never share your information.
                    </p>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center" style={{ padding: "40px 20px" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.05))", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>Request Submitted!</h2>
                  <p style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.6, maxWidth: "380px", marginBottom: "24px" }}>
                    Thank you, {formData.name || "there"}! Our team will review your request and reach out within 24 hours to schedule your strategy call.
                  </p>
                  <Link href="/" style={{ padding: "10px 24px", fontSize: "14px", fontWeight: 600, background: "var(--primary-purple)", color: "#fff", borderRadius: "8px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    Back to Home
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After */}
      <section style={{ paddingTop: "60px", paddingBottom: "60px", borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "1200px" }}>
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "12px" }}>What Happens After You Book</h2>
            <p style={{ fontSize: "15px", color: "var(--muted-foreground)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 }}>
              Our streamlined process ensures you get maximum value from every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: <MessageSquare className="h-6 w-6" />, title: "Discovery Call", description: "We listen to your challenges, goals, and current tech stack. No sales pitch — just understanding." },
              { step: "02", icon: <Target className="h-6 w-6" />, title: "Custom Proposal", description: "Within 48 hours, you receive a detailed proposal with timelines, pricing, and expected ROI." },
              { step: "03", icon: <Zap className="h-6 w-6" />, title: "Rapid Kickoff", description: "Once approved, we assign a forward-deployed engineer and start building immediately." },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "48px", fontWeight: 900, color: "rgba(139, 92, 246, 0.08)", lineHeight: 1 }}>{item.step}</div>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))", border: "1px solid rgba(139, 92, 246, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-purple)", marginBottom: "16px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ paddingTop: "40px", paddingBottom: "60px" }}>
        <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "800px" }}>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "32px", textAlign: "center" }}>
            <div className="flex items-center justify-center gap-1" style={{ marginBottom: "16px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5" style={{ fill: "#f59e0b", color: "#f59e0b" }} />
              ))}
            </div>
            <blockquote style={{ fontSize: "16px", lineHeight: 1.7, fontStyle: "italic", color: "var(--foreground)", maxWidth: "600px", margin: "0 auto 16px" }}>
              &ldquo;AY Automate transformed our operations. Within 2 weeks, they built AI agents that replaced 3 full-time roles and saved us $180K annually. The ROI was immediate.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <img src="/images/clients/faces/wytze-de-haan.jpg" alt="Client" width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover" }} />
              <div className="text-left">
                <p style={{ fontSize: "13px", fontWeight: 600 }}>Wytze de Haan</p>
                <p style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>CTO, Enterprise Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
