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

export default function ModelsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary-purple/30">
      <Navbar />
      <main className="flex-1">
        <main
          style={{
            background: "var(--background)",
            color: "var(--foreground)",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              maxWidth: "1340px",
              margin: "0 auto",
              padding: "112px 22px 80px",
            }}
          >
            <header
              style={{
                marginBottom: "0",
                position: "relative",
                overflow: "hidden",
                paddingBottom: "4px",
              }}
            >
              <div
                aria-hidden={true}
                style={{
                  position: "absolute",
                  inset: "-40px -80px",
                  backgroundImage:
                    "radial-gradient(circle, var(--hero-dot-color) 1.2px, transparent 1.2px)",
                  backgroundSize: "22px 22px",
                  maskImage:
                    "radial-gradient(ellipse 90% 110% at 15% 50%, black 0%, transparent 65%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 90% 110% at 15% 50%, black 0%, transparent 65%)",
                  pointerEvents: "none",
                  zIndex: "0",
                }}
              ></div>
              <div
                aria-hidden={true}
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "radial-gradient(ellipse 55% 120% at 85% 40%, rgba(128,130,193,0.06) 0%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: "0",
                }}
              ></div>
              <div style={{ position: "relative", zIndex: "1" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 12px",
                      border: "1px solid rgba(128,130,193,0.3)",
                      background: "rgba(128,130,193,0.08)",
                      color: "var(--primary-purple)",
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    Leaderboard
                  </span>
                </div>
                <h1
                  style={{
                    fontFamily: "var(--font-kalnia), serif",
                    fontWeight: "600",
                    fontSize: "clamp(26px, 4vw, 40px)",
                    margin: "0 0 14px",
                    color: "var(--foreground)",
                    lineHeight: "1.2",
                  }}
                >
                  LLM Leaderboard 2026
                </h1>
                <p
                  style={{
                    color: "var(--muted-foreground)",
                    maxWidth: "680px",
                    lineHeight: "1.7",
                    margin: "0",
                    fontSize: "15px",
                  }}
                >
                  AI model comparison across 37 models: benchmark scores,
                  context windows, pricing, and speed. Every number comes from a
                  public source or provider announcement -- no guesses, no
                  missing data marked as zero. Filter by provider, task, or
                  license to find the best LLM for your workload. Updated as new
                  models ship.
                </p>
              </div>
            </header>
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "32px",
                  marginTop: "28px",
                  opacity: "1",
                  transform: "translateY(0)",
                }}
              >
                <div style={{ opacity: "1", transform: "translateY(0)" }}>
                  <p
                    style={{
                      margin: "0 0 3px",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "var(--foreground)",
                      fontFamily: "var(--font-kalnia), serif",
                      fontVariantNumeric: "tabular-nums",
                      lineHeight: "1",
                    }}
                  >
                    0
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      color: "var(--muted-foreground)",
                      fontWeight: "500",
                    }}
                  >
                    Models tracked
                  </p>
                </div>
                <div style={{ opacity: "1", transform: "translateY(0)" }}>
                  <p
                    style={{
                      margin: "0 0 3px",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "var(--foreground)",
                      fontFamily: "var(--font-kalnia), serif",
                      fontVariantNumeric: "tabular-nums",
                      lineHeight: "1",
                    }}
                  >
                    0
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      color: "var(--muted-foreground)",
                      fontWeight: "500",
                    }}
                  >
                    Providers
                  </p>
                </div>
                <div style={{ opacity: "1", transform: "translateY(0)" }}>
                  <p
                    style={{
                      margin: "0 0 3px",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "var(--foreground)",
                      fontFamily: "var(--font-kalnia), serif",
                      fontVariantNumeric: "tabular-nums",
                      lineHeight: "1",
                    }}
                  >
                    0
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      color: "var(--muted-foreground)",
                      fontWeight: "500",
                    }}
                  >
                    With benchmarks
                  </p>
                </div>
                <div style={{ opacity: "1", transform: "translateY(0)" }}>
                  <p
                    style={{
                      margin: "0 0 3px",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "var(--foreground)",
                      fontFamily: "var(--font-kalnia), serif",
                      fontVariantNumeric: "tabular-nums",
                      lineHeight: "1",
                    }}
                  >
                    0
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      color: "var(--muted-foreground)",
                      fontWeight: "500",
                    }}
                  >
                    Open source
                  </p>
                </div>
              </div>
              <div
                style={{
                  height: "1px",
                  background: "var(--border-subtle)",
                  margin: "36px 0 40px",
                }}
              ></div>
              <div style={{ opacity: "1", transform: "translateY(0)" }}>
                <section style={{ marginBottom: "56px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "14px",
                      marginBottom: "20px",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontFamily: "var(--font-kalnia), serif",
                          fontSize: "22px",
                          fontWeight: "600",
                          margin: "0 0 6px",
                          color: "var(--foreground)",
                        }}
                      >
                        Model Rankings
                      </h2>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "13.5px",
                          color: "var(--muted-foreground)",
                          maxWidth: "540px",
                        }}
                      >
                        Top models ranked by publicly reported benchmark score.
                        Every number links to its source.
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid var(--primary-purple)",
                          background: "rgba(128,130,193,0.14)",
                          color: "var(--primary-purple)",
                          fontSize: "12px",
                          fontWeight: "700",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        GPQA Diamond
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        SWE-bench Verified
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        AIME 2025
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        SWE-bench Pro
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        OSWorld
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        MMMU
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        LiveCodeBench
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        MRCR
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        Terminal-Bench 4.0
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        ExploitBench (cybersecurity)
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        ScreenSpot-Pro (desktop automation)
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        Terminal-Bench-Science 0.1
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        Humanity's Last Exam (no tools)
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        CursorBench 3.2.0
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        OSWorld 2.0 (partial)
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        ARC-AGI-3 (abstract reasoning)
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        FrontierMath Tier 4 v2
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        Humanity's Last Exam (with tools)
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        Artificial Analysis Intelligence Index
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        DeepSWE v1.1
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        Terminal-bench 2.1
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        OSWorld-2.0
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        Vals Finance Agent v2
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        HLE-Verified
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        MATH-500
                      </button>
                      <button
                        style={{
                          padding: "5px 13px",
                          border: "1px solid #ffffff1a",
                          background: "transparent",
                          color: "var(--muted-foreground)",
                          fontSize: "12px",
                          fontWeight: "400",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "all 0.15s",
                          borderRadius: "6px",
                        }}
                      >
                        AIME 2026
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ffffff1a",
                      background: "var(--card)",
                      overflowX: "auto",
                      overflowY: "hidden",
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    <div style={{ minWidth: "1012px", height: "572px" }}>
                      <div className="w-full bg-[#1c1c28] rounded-[6px] p-6 sm:p-8 mt-6 mb-4 border-0">
                        <div
                          className="flex items-end justify-between w-full h-[320px] relative"
                          style={{
                            borderBottom: "1px solid #ffffff15",
                            paddingBottom: "1px",
                          }}
                        >
                          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[11px] text-muted-foreground pb-[120px] font-sans">
                            <span>110</span>
                            <span>60</span>
                            <span>30</span>
                            <span>0</span>
                          </div>

                          <div className="absolute left-10 right-0 top-0 h-full flex flex-col justify-between pb-[120px]">
                            <div className="w-full h-[1px] border-t border-dashed border-[#ffffff15]"></div>
                            <div className="w-full h-[1px] border-t border-dashed border-[#ffffff15]"></div>
                            <div className="w-full h-[1px] border-t border-dashed border-[#ffffff15]"></div>
                            <div className="w-full h-[1px] border-t border-dashed border-transparent"></div>
                          </div>

                          <div className="flex items-end justify-between w-full h-[200px] pl-10 pr-2 z-10 gap-1 sm:gap-2 absolute bottom-[120px]">
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#ff5a5f",
                                  height: "95.5%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  95.5%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#ff8a65",
                                  height: "93.6%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  93.6%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#1a1a24",
                                  height: "93.6%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  93.6%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#5c6bc0",
                                  height: "91.2%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  91.2%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#2196f3",
                                  height: "90.4%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  90.4%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#1976d2",
                                  height: "90.1%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  90.1%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#ff7043",
                                  height: "89.9%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  89.9%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#1a1a24",
                                  height: "88.4%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  88.4%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#3f51b5",
                                  height: "88.1%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  88.1%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#1a1a24",
                                  height: "87.7%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  87.7%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#1a1a24",
                                  height: "84.6%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  84.6%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#64b5f6",
                                  height: "84%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  84%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#42a5f5",
                                  height: "82.8%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  82.8%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#1a1a24",
                                  height: "81.4%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  81.4%
                                </span>
                              </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end w-full group h-full">
                              <div
                                className="w-full rounded-[2px] transition-all flex flex-col items-center justify-start pt-2"
                                style={{
                                  backgroundColor: "#ff9800",
                                  height: "77.2%",
                                }}
                              >
                                <span className="text-[10px] font-bold text-white leading-none">
                                  77.2%
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start justify-between w-full pl-10 pr-2 z-10 gap-1 sm:gap-2 absolute bottom-0 h-[120px]">
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#ff5a5f"
                                >
                                  <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6-6.2-4.5h7.6z" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                Sakana Fugu Ultra
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#ff8a65"
                                >
                                  <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6-6.2-4.5h7.6z" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                Claude Opus 4.8
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#ffffff"
                                >
                                  <path d="M22.28 11.23a10.36 10.36 0 00-1.8-8.54 10.15 10.15 0 00-8.6-4.56c-4.22 0-7.85 2.57-9.35 6.35a10.37 10.37 0 00.35 9.17 10.2 10.2 0 008.28 4.7 10.4 10.4 0 009.12-6.12zM12 20.3a8.25 8.25 0 01-6.84-3.56L9.6 14.1l4.5 2.6v5.2c-1.34.25-2.75.14-4.08-.24M3.73 15.3c-.62-2.33-.24-4.87 1.05-6.9L9 11.02v5.22L4.5 18.8c-.85-1-1.34-2.3-1.44-3.6zM6.55 6c2-1.4 4.57-1.83 6.9-.92L11 9.4 6.5 6.8V1.62a8.34 8.34 0 00-4 4.14L6.55 6zm10.9-1.5c.87.97 1.4 2.27 1.5 3.65a8.2 8.2 0 01-1.1 4.56L15 10v-5.2l4.5-2.6c1.33-.24 2.74-.12 4.07.25M20.26 18c-2 1.4-4.58 1.83-6.9.92L13 14.6l4.5 2.6v5.18c2-.9 3.55-2.4 4.5-4.13L20.26 18z" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                GPT-5.5
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg viewBox="0 0 24 24" width="14" height="14">
                                  <rect
                                    width="24"
                                    height="24"
                                    rx="4"
                                    fill="#ffffff"
                                  />
                                  <path
                                    d="M7 7h10l-6 10h6"
                                    stroke="#5c6bc0"
                                    strokeWidth="2.5"
                                    fill="none"
                                  />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                GLM-5.2
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#2196f3"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <circle cx="12" cy="12" r="4" fill="#fff" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                Tencent Hy3
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#1976d2"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <path
                                    d="M12 6v12M8 10l8 4M8 14l8-4"
                                    stroke="#fff"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                DeepSeek V4 Pro
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#ff7043"
                                >
                                  <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6-6.2-4.5h7.6z" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                Claude Sonnet 4.6
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#ffffff"
                                >
                                  <path d="M22.28 11.23a10.36 10.36 0 00-1.8-8.54 10.15 10.15 0 00-8.6-4.56c-4.22 0-7.85 2.57-9.35 6.35a10.37 10.37 0 00.35 9.17 10.2 10.2 0 008.28 4.7 10.4 10.4 0 009.12-6.12zM12 20.3a8.25 8.25 0 01-6.84-3.56L9.6 14.1l4.5 2.6v5.2c-1.34.25-2.75.14-4.08-.24M3.73 15.3c-.62-2.33-.24-4.87 1.05-6.9L9 11.02v5.22L4.5 18.8c-.85-1-1.34-2.3-1.44-3.6zM6.55 6c2-1.4 4.57-1.83 6.9-.92L11 9.4 6.5 6.8V1.62a8.34 8.34 0 00-4 4.14L6.55 6zm10.9-1.5c.87.97 1.4 2.27 1.5 3.65a8.2 8.2 0 01-1.1 4.56L15 10v-5.2l4.5-2.6c1.33-.24 2.74-.12 4.07.25M20.26 18c-2 1.4-4.58 1.83-6.9.92L13 14.6l4.5 2.6v5.18c2-.9 3.55-2.4 4.5-4.13L20.26 18z" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                GPT-5
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#1976d2"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <path
                                    d="M12 6v12M8 10l8 4M8 14l8-4"
                                    stroke="#fff"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                DeepSeek V4 Flash
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#ffffff"
                                >
                                  <path d="M22.28 11.23a10.36 10.36 0 00-1.8-8.54 10.15 10.15 0 00-8.6-4.56c-4.22 0-7.85 2.57-9.35 6.35a10.37 10.37 0 00.35 9.17 10.2 10.2 0 008.28 4.7 10.4 10.4 0 009.12-6.12zM12 20.3a8.25 8.25 0 01-6.84-3.56L9.6 14.1l4.5 2.6v5.2c-1.34.25-2.75.14-4.08-.24M3.73 15.3c-.62-2.33-.24-4.87 1.05-6.9L9 11.02v5.22L4.5 18.8c-.85-1-1.34-2.3-1.44-3.6zM6.55 6c2-1.4 4.57-1.83 6.9-.92L11 9.4 6.5 6.8V1.62a8.34 8.34 0 00-4 4.14L6.55 6zm10.9-1.5c.87.97 1.4 2.27 1.5 3.65a8.2 8.2 0 01-1.1 4.56L15 10v-5.2l4.5-2.6c1.33-.24 2.74-.12 4.07.25M20.26 18c-2 1.4-4.58 1.83-6.9.92L13 14.6l4.5 2.6v5.18c2-.9 3.55-2.4 4.5-4.13L20.26 18z" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                o3
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#ffffff"
                                >
                                  <path
                                    d="M4 4l16 16M4 20L20 4"
                                    stroke="#fff"
                                    strokeWidth="3"
                                  />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                Grok 5
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#64b5f6"
                                >
                                  <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                Gemini 2.5 Pro
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#64b5f6"
                                >
                                  <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                Gemini 2.5 Flash
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#ffffff"
                                >
                                  <path d="M22.28 11.23a10.36 10.36 0 00-1.8-8.54 10.15 10.15 0 00-8.6-4.56c-4.22 0-7.85 2.57-9.35 6.35a10.37 10.37 0 00.35 9.17 10.2 10.2 0 008.28 4.7 10.4 10.4 0 009.12-6.12zM12 20.3a8.25 8.25 0 01-6.84-3.56L9.6 14.1l4.5 2.6v5.2c-1.34.25-2.75.14-4.08-.24M3.73 15.3c-.62-2.33-.24-4.87 1.05-6.9L9 11.02v5.22L4.5 18.8c-.85-1-1.34-2.3-1.44-3.6zM6.55 6c2-1.4 4.57-1.83 6.9-.92L11 9.4 6.5 6.8V1.62a8.34 8.34 0 00-4 4.14L6.55 6zm10.9-1.5c.87.97 1.4 2.27 1.5 3.65a8.2 8.2 0 01-1.1 4.56L15 10v-5.2l4.5-2.6c1.33-.24 2.74-.12 4.07.25M20.26 18c-2 1.4-4.58 1.83-6.9.92L13 14.6l4.5 2.6v5.18c2-.9 3.55-2.4 4.5-4.13L20.26 18z" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                o4-mini
                              </span>
                            </div>
                            <div className="flex flex-col items-center w-full mt-3 relative">
                              <div className="flex items-center justify-center mb-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14"
                                  height="14"
                                  fill="#ff9800"
                                >
                                  <polygon points="12 2 15 9 22 9 16 14 18 21 12 17 6 21 8 14 2 9 9 9" />
                                </svg>
                              </div>
                              <span
                                className="text-[10.5px] text-gray-300 whitespace-nowrap absolute top-[22px]"
                                style={{
                                  transformOrigin: "top right",
                                  transform:
                                    "rotate(-50deg) translate(-8px, -5px)",
                                  letterSpacing: "0.2px",
                                  fontWeight: "400",
                                }}
                              >
                                Qwen2.5 Max
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div style={{ opacity: "1", transform: "translateY(0)" }}>
                <section style={{ marginBottom: "48px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-kalnia), serif",
                      fontSize: "20px",
                      fontWeight: "600",
                      margin: "0 0 6px",
                      color: "var(--foreground)",
                    }}
                  >
                    Top models per task
                  </h2>
                  <p
                    style={{
                      margin: "0 0 20px",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Best-in-class per task type, ranked by publicly reported
                    benchmark scores. Rows with no verified score are omitted.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    {" "}
                    <div className="bg-[#1c1c28] rounded-[6px] p-4 sm:p-5 flex flex-col">
                      <div className="flex items-center justify-between mb-5 gap-2">
                        <h3 className="text-[13px] font-bold text-white whitespace-nowrap">
                          Coding
                        </h3>
                        <span
                          className="text-[10px] text-muted-foreground text-right"
                          style={{ color: "#888" }}
                        >
                          SWE-bench Pro
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7043"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Fable 5
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "80%",
                                  backgroundColor: "#ff7043",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              80%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7043"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Opus 4.8
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "69%",
                                  backgroundColor: "#ff7043",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              69%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7043"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Sonnet 5
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "63%",
                                  backgroundColor: "#ff7043",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              63%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#7986cb"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M4 6h16l-10 12H22" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              GLM-5.2
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "62%",
                                  backgroundColor: "#7986cb",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              62%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              GPT-5.5
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "59%",
                                  backgroundColor: "#000000",
                                  boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              59%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7043"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Sonnet 4.6
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "58%",
                                  backgroundColor: "#ff7043",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              58%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#1c1c28] rounded-[6px] p-4 sm:p-5 flex flex-col">
                      <div className="flex items-center justify-between mb-5 gap-2">
                        <h3 className="text-[13px] font-bold text-white whitespace-nowrap">
                          Reasoning
                        </h3>
                        <span
                          className="text-[10px] text-muted-foreground text-right"
                          style={{ color: "#888" }}
                        >
                          GPQA Diamond
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff5a5f"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Sakana Fugu Ultra
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "96%",
                                  backgroundColor: "#ff5a5f",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              96%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff8a65"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Opus 4.8
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "94%",
                                  backgroundColor: "#ff8a65",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              94%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              GPT-5.5
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "94%",
                                  backgroundColor: "#000000",
                                  boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              94%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#5c6bc0"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M4 6h16l-10 12H22" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              GLM-5.2
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "91%",
                                  backgroundColor: "#5c6bc0",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              91%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1976d2"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              DeepSeek V4 Pro
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "90%",
                                  backgroundColor: "#1976d2",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              90%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#2196f3"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Tencent Hy3
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "90%",
                                  backgroundColor: "#2196f3",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              90%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#1c1c28] rounded-[6px] p-4 sm:p-5 flex flex-col">
                      <div className="flex items-center justify-between mb-5 gap-2">
                        <h3 className="text-[13px] font-bold text-white whitespace-nowrap">
                          Agents
                        </h3>
                        <span
                          className="text-[10px] text-muted-foreground text-right"
                          style={{ color: "#888" }}
                        >
                          OSWorld
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7043"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Fable 5
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "85%",
                                  backgroundColor: "#ff7043",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              85%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7043"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Opus 4.8
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "83%",
                                  backgroundColor: "#ff7043",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              83%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7043"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Sonnet 5
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "81%",
                                  backgroundColor: "#ff7043",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              81%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              GPT-5.5
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "79%",
                                  backgroundColor: "#000000",
                                  boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              79%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="#42a5f5"
                                stroke="none"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Gemini 2.5 Flash
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "78%",
                                  backgroundColor: "#42a5f5",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              78%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7043"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Sonnet 4.6
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "73%",
                                  backgroundColor: "#ff7043",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              73%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#1c1c28] rounded-[6px] p-4 sm:p-5 flex flex-col">
                      <div className="flex items-center justify-between mb-5 gap-2">
                        <h3 className="text-[13px] font-bold text-white whitespace-nowrap">
                          Vision
                        </h3>
                        <span
                          className="text-[10px] text-muted-foreground text-right"
                          style={{ color: "#888" }}
                        >
                          MMMU
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="#2196f3"
                                stroke="none"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Gemini 2.5 Pro
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "82%",
                                  backgroundColor: "#2196f3",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              82%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7043"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                                <path d="m7.05 7.05 9.9 9.9" />
                                <path d="m16.95 7.05-9.9 9.9" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Claude Sonnet 4.6
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "75%",
                                  backgroundColor: "#ff7043",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              75%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Llama 4 Maverick
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "73%",
                                  backgroundColor: "#42a5f5",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              73%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Llama 4 Scout
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "69%",
                                  backgroundColor: "#42a5f5",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              69%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#1c1c28] rounded-[6px] p-4 sm:p-5 flex flex-col">
                      <div className="flex items-center justify-between mb-5 gap-2">
                        <h3 className="text-[13px] font-bold text-white whitespace-nowrap">
                          Long Context
                        </h3>
                        <span
                          className="text-[10px] text-muted-foreground text-right"
                          style={{ color: "#888" }}
                        >
                          Context window
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Llama 4 Scout
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "100%",
                                  backgroundColor: "#42a5f5",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              10M
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="#2196f3"
                                stroke="none"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Gemini 2.5 Pro
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "21%",
                                  backgroundColor: "#2196f3",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              2.1M
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Grok 4.20
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "20%",
                                  backgroundColor: "#000000",
                                  boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              2M
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="#2196f3"
                                stroke="none"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Gemini 2.5 Pro
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "10%",
                                  backgroundColor: "#2196f3",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              1.0M
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="#ff9800"
                                stroke="none"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Qwen2.5 Max
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "10%",
                                  backgroundColor: "#ff9800",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              1M
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#1c1c28] rounded-[6px] p-4 sm:p-5 flex flex-col">
                      <div className="flex items-center justify-between mb-5 gap-2">
                        <h3 className="text-[13px] font-bold text-white whitespace-nowrap">
                          Budget
                        </h3>
                        <span
                          className="text-[10px] text-muted-foreground text-right"
                          style={{ color: "#888" }}
                        >
                          Blended price per MTok, lower is better
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#3f51b5"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              DeepSeek V4 Flash
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "32%",
                                  backgroundColor: "#3f51b5",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              $0.158/MTok
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Llama 4 Scout
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "49%",
                                  backgroundColor: "#42a5f5",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              $0.245/MTok
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff9800"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M4 6h16l-10 12H22" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Mistral Small 3
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "50%",
                                  backgroundColor: "#ff9800",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              $0.250/MTok
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              GPT-6 Luna
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "80%",
                                  backgroundColor: "#000000",
                                  boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              $0.400/MTok
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex items-center justify-center shrink-0 w-3 h-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            </div>
                            <span className="text-[11px] font-medium text-gray-200 truncate pr-2">
                              Llama 4 Maverick
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ width: "50%" }}
                          >
                            <div className="flex-1 h-[10px] bg-transparent flex items-center justify-start">
                              <div
                                className="h-[10px] rounded-[1px]"
                                style={{
                                  width: "97%",
                                  backgroundColor: "#42a5f5",
                                }}
                              ></div>
                            </div>
                            <span className="text-[10.5px] font-bold text-white w-8 text-right shrink-0">
                              $0.487/MTok
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  \n \n
                </section>
              </div>
              <div style={{ opacity: "1", transform: "translateY(0)" }}>
                <section style={{ marginBottom: "48px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-kalnia), serif",
                      fontSize: "20px",
                      fontWeight: "600",
                      margin: "0 0 6px",
                      color: "var(--foreground)",
                    }}
                  >
                    Benchmark leaderboards
                  </h2>
                  <p
                    style={{
                      margin: "0 0 20px",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Top models per benchmark. Click any row to see full model
                    specs.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(320px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          SWE-bench Verified
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-fable-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Fable 5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            95%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-opus-4-8"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "93.26315789473684%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Opus 4.8
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            88.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/deepseek-v4-pro"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "84.84210526315789%",
                              background: "#4D6BFE16",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            3
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            DeepSeek V4 Pro
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            80.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-sonnet-4-6"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "83.78947368421052%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            4
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Sonnet 4.6
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            79.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/deepseek-v4-flash"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "83.15789473684211%",
                              background: "#4D6BFE16",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            5
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            DeepSeek V4 Flash
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            79%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/tencent-hy3"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "82.10526315789474%",
                              background: "#1677FF16",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            6
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=hy.tencent.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Tencent Hy3
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            78%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "78.8421052631579%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            7
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            74.9%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-haiku-4-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "77.15789473684211%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            8
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Haiku 4.5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            73.3%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          SWE-bench Pro
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-fable-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Fable 5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            80.3%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-opus-4-8"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "86.17683686176838%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Opus 4.8
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            69.2%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-sonnet-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "78.70485678704857%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            3
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Sonnet 5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            63.2%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/glm-5-2"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "77.33499377334995%",
                              background: "#5660E116",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            4
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chat.z.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GLM-5.2
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            62.1%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "72.97633872976338%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            5
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5.5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            58.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-sonnet-4-6"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "72.35367372353674%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            6
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Sonnet 4.6
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            58.1%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/tencent-hy3"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "72.10460772104608%",
                              background: "#1677FF16",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            7
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=hy.tencent.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Tencent Hy3
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            57.9%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5-4"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "71.85554171855543%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            8
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5.4
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            57.7%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          OSWorld
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-fable-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Fable 5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            85%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-opus-4-8"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "98.11764705882354%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Opus 4.8
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            83.4%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-sonnet-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "95.52941176470588%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            3
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Sonnet 5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            81.2%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "92.58823529411765%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            4
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5.5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            78.7%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gemini-3-5-flash"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "92.23529411764707%",
                              background: "#4285F416",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            5
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Gemini 3.5 Flash
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            78.4%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5-4"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "88.23529411764706%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            6
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5.4
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            75%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-sonnet-4-6"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "85.29411764705883%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            7
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Sonnet 4.6
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            72.5%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-haiku-4-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "59.64705882352942%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            8
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Haiku 4.5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            50.7%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          GPQA Diamond
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/sakana-fugu-ultra"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#F25C5416",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=sakana.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Sakana Fugu Ultra
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            95.5%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-opus-4-8"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "98.01047120418848%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Opus 4.8
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            93.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "98.01047120418848%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            3
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5.5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            93.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/glm-5-2"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "95.49738219895289%",
                              background: "#5660E116",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            4
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chat.z.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GLM-5.2
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            91.2%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/tencent-hy3"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "94.65968586387436%",
                              background: "#1677FF16",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            5
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=hy.tencent.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Tencent Hy3
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            90.4%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/deepseek-v4-pro"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "94.34554973821989%",
                              background: "#4D6BFE16",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            6
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            DeepSeek V4 Pro
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            90.1%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-sonnet-4-6"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "94.13612565445027%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            7
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Sonnet 4.6
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            89.9%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "92.56544502617801%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            8
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            88.4%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          AIME 2025
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-sonnet-4-6"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Sonnet 4.6
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            95.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "98.9539748953975%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            94.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/grok-3"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "97.59414225941423%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            3
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=grok.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Grok 3
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            93.3%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/o4-mini"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "96.96652719665273%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            4
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            o4-mini
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            92.7%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/o3"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "92.99163179916319%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            5
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            o3
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            88.9%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gemini-2-5-pro"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "90.69037656903767%",
                              background: "#4285F416",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            6
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Gemini 2.5 Pro
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            86.7%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/qwen3-7-max"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "89.64435146443516%",
                              background: "#FF6A0016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            7
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=qwen.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Qwen3.7 Max
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            85.7%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-haiku-4-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "84.4142259414226%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            8
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Haiku 4.5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            80.7%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          MMMU
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            84.2%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/o3"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "98.45605700712589%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            o3
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            82.9%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gemini-2-5-pro"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "97.03087885985748%",
                              background: "#4285F416",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            3
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Gemini 2.5 Pro
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            81.7%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/o4-mini"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "96.91211401425177%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            4
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            o4-mini
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            81.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-sonnet-4-6"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "88.47980997624703%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            5
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Sonnet 4.6
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            74.5%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/llama-4-maverick"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "87.17339667458432%",
                              background: "#0668E116",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            6
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=llama.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Llama 4 Maverick
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            73.4%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-haiku-4-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "86.93586698337292%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            7
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Haiku 4.5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            73.2%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/llama-4-scout"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "82.4228028503563%",
                              background: "#0668E116",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            8
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=llama.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Llama 4 Scout
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            69.4%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          LiveCodeBench
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/deepseek-v4-pro"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#4D6BFE16",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            DeepSeek V4 Pro
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            93.5%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/sakana-fugu-ultra"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "99.67914438502675%",
                              background: "#F25C5416",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=sakana.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Sakana Fugu Ultra
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            93.2%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/deepseek-v4-flash"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "97.96791443850267%",
                              background: "#4D6BFE16",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            3
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            DeepSeek V4 Flash
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            91.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/grok-3"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "84.91978609625669%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            4
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=grok.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Grok 3
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            79.4%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/qwen3-7-max"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "75.6149732620321%",
                              background: "#FF6A0016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            5
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=qwen.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Qwen3.7 Max
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            70.7%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gemini-2-5-pro"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "75.29411764705884%",
                              background: "#4285F416",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            6
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Gemini 2.5 Pro
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            70.4%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gemini-2-5-flash"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "63.42245989304812%",
                              background: "#4285F416",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            7
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Gemini 2.5 Flash
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            59.3%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/llama-4-scout"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "35.080213903743314%",
                              background: "#0668E116",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            8
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=llama.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Llama 4 Scout
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            32.8%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          MRCR
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gemini-2-5-pro"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#4285F416",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Gemini 2.5 Pro
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            94.5%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-sonnet-4-6"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "95.87301587301586%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Sonnet 4.6
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            90.6%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gemini-3-5-flash"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "81.7989417989418%",
                              background: "#4285F416",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            3
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Gemini 3.5 Flash
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            77.3%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5-5"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "78.3068783068783%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            4
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5.5
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            74%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5-4"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "38.730158730158735%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--muted-foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            5
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5.4
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            36.6%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          Terminal-Bench 4.0
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-mythos-5-1"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Mythos 5.1
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            60.9%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/claude-fable-5-1"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "91.62561576354679%",
                              background: "#D9775716",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            Claude Fable 5.1
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            55.8%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          ExploitBench (cybersecurity)
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-6-astra"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-6 Astra
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            100%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5-6-sol"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "78.5%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5.6 Sol
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            78.5%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          ScreenSpot-Pro (desktop automation)
                        </p>
                      </div>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-6-astra"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "1px solid var(--border-subtle)",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "100%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-6 Astra
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            92.7%
                          </span>
                        </div>
                      </a>
                      <a
                        style={{ textDecoration: "none", display: "block" }}
                        href="/models/gpt-5-6-sol"
                      >
                        <div
                          style={{
                            position: "relative",
                            padding: "9px 14px",
                            borderBottom: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                          className="ranked-list-row"
                        >
                          <div
                            aria-hidden={true}
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              bottom: "0",
                              width: "82.95577130528588%",
                              background: "#00000016",
                              pointerEvents: "none",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                          <span
                            style={{
                              position: "relative",
                              width: "20px",
                              flexShrink: "0",
                              fontSize: "12px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2
                          </span>
                          <img
                            src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                            alt=""
                            width="16"
                            height="16"
                            style={{
                              flexShrink: "0",
                              position: "relative",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              flex: "1",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              fontWeight: "500",
                              position: "relative",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              minWidth: "0",
                            }}
                          >
                            GPT-5.6 Sol
                          </span>
                          <span
                            style={{
                              position: "relative",
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--foreground)",
                              fontVariantNumeric: "tabular-nums",
                              flexShrink: "0",
                            }}
                          >
                            76.9%
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
              <div style={{ opacity: "1", transform: "translateY(0)" }}>
                <section style={{ marginBottom: "48px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-kalnia), serif",
                      fontSize: "20px",
                      fontWeight: "600",
                      margin: "0 0 6px",
                      color: "var(--foreground)",
                    }}
                  >
                    Fastest and most affordable models
                  </h2>
                  <p
                    style={{
                      margin: "0 0 20px",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Median output speed as measured by third-party benchmarks
                    (Artificial Analysis / OpenRouter); pricing as listed by the
                    provider.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      flexWrap: "wrap",
                      opacity: "1",
                      transform: "translateY(0)",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        minWidth: "0",
                        border: "1px solid #ffffff1a",
                        borderRadius: "6px",
                        overflow: "hidden",
                        background: "var(--card)",
                      }}
                    >
                      <div
                        style={{
                          padding: "12px 16px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          Fastest (tokens per second)
                        </p>
                      </div>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          fontSize: "13px",
                        }}
                      >
                        <thead>
                          <tr style={{ background: "var(--muted)" }}>
                            <th
                              style={{
                                padding: "8px 12px",
                                textAlign: "left",
                                fontWeight: "500",
                                fontSize: "12px",
                                color: "var(--muted-foreground)",
                                borderBottom: "1px solid var(--border-subtle)",
                              }}
                            >
                              Model
                            </th>
                            <th
                              style={{
                                padding: "8px 12px",
                                textAlign: "left",
                                fontWeight: "500",
                                fontSize: "12px",
                                color: "var(--muted-foreground)",
                                borderBottom: "1px solid var(--border-subtle)",
                              }}
                            >
                              Provider
                            </th>
                            <th
                              style={{
                                padding: "8px 12px",
                                textAlign: "left",
                                fontWeight: "500",
                                fontSize: "12px",
                                color: "var(--muted-foreground)",
                                borderBottom: "1px solid var(--border-subtle)",
                              }}
                            >
                              Tok/s
                            </th>
                            <th
                              style={{
                                padding: "8px 12px",
                                textAlign: "left",
                                fontWeight: "500",
                                fontSize: "12px",
                                color: "var(--muted-foreground)",
                                borderBottom: "1px solid var(--border-subtle)",
                              }}
                            >
                              In $/MTok
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                Gemini 2.5 Flash
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Google
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              222
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.30
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=qwen.ai&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                Qwen3.7 Max
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Alibaba
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              206
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $1.25
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                Gemini 3.5 Flash
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Google
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              198
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $1.50
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                o3
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              OpenAI
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              167
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $2.00
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=mistral.ai&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                Mistral Small 3
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Mistral
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              166
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.10
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                GPT-5.4
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              OpenAI
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              165
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $2.50
                            </td>
                          </tr>
                          <tr style={{ borderBottom: "none" }}>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                o4-mini
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              OpenAI
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              163
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $1.10
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      style={{
                        flex: "1",
                        minWidth: "0",
                        border: "1px solid #ffffff1a",
                        borderRadius: "6px",
                        overflow: "hidden",
                        background: "var(--card)",
                      }}
                    >
                      <div
                        style={{
                          padding: "12px 16px",
                          borderBottom: "1px solid var(--border-subtle)",
                          background: "var(--muted)",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "600",
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
                        >
                          Most affordable (input cost)
                        </p>
                      </div>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          fontSize: "13px",
                        }}
                      >
                        <thead>
                          <tr style={{ background: "var(--muted)" }}>
                            <th
                              style={{
                                padding: "8px 12px",
                                textAlign: "left",
                                fontWeight: "500",
                                fontSize: "12px",
                                color: "var(--muted-foreground)",
                                borderBottom: "1px solid var(--border-subtle)",
                              }}
                            >
                              Model
                            </th>
                            <th
                              style={{
                                padding: "8px 12px",
                                textAlign: "left",
                                fontWeight: "500",
                                fontSize: "12px",
                                color: "var(--muted-foreground)",
                                borderBottom: "1px solid var(--border-subtle)",
                              }}
                            >
                              Provider
                            </th>
                            <th
                              style={{
                                padding: "8px 12px",
                                textAlign: "left",
                                fontWeight: "500",
                                fontSize: "12px",
                                color: "var(--muted-foreground)",
                                borderBottom: "1px solid var(--border-subtle)",
                              }}
                            >
                              In $/MTok
                            </th>
                            <th
                              style={{
                                padding: "8px 12px",
                                textAlign: "left",
                                fontWeight: "500",
                                fontSize: "12px",
                                color: "var(--muted-foreground)",
                                borderBottom: "1px solid var(--border-subtle)",
                              }}
                            >
                              Out $/MTok
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=llama.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                Llama 4 Scout
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Meta
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.08
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.30
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                DeepSeek V4 Flash
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              DeepSeek
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.09
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.18
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                GPT-6 Luna
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              OpenAI
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.10
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.50
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=mistral.ai&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                Mistral Small 3
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Mistral
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.10
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.30
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=llama.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                Llama 4 Maverick
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Meta
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.15
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.60
                            </td>
                          </tr>
                          <tr
                            style={{
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=hy.tencent.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                <a
                                  href="/free-models/tencent-hy3"
                                  style={{
                                    color: "var(--primary-purple)",
                                    textDecoration: "none",
                                  }}
                                >
                                  Tencent Hy3
                                </a>
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Tencent
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.20
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.80
                            </td>
                          </tr>
                          <tr style={{ borderBottom: "none" }}>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--primary-purple)",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <img
                                  src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                  width="14"
                                  height="14"
                                  alt=""
                                  style={{
                                    borderRadius: "2px",
                                    flexShrink: "0",
                                  }}
                                />
                                Gemini 2.5 Flash
                              </span>
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Google
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $0.30
                            </td>
                            <td
                              style={{
                                padding: "9px 12px",
                                color: "var(--foreground)",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              $2.50
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
              <div style={{ opacity: "1", transform: "translateY(0)" }}>
                <section style={{ marginBottom: "48px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-kalnia), serif",
                      fontSize: "20px",
                      fontWeight: "600",
                      margin: "0 0 6px",
                      color: "var(--foreground)",
                    }}
                  >
                    Model comparison
                  </h2>
                  <p
                    style={{
                      margin: "0 0 16px",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    37 of 37 models. Sort by any column. Filter by provider,
                    license, or task.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "12px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      placeholder="Search models..."
                      style={{
                        padding: "6px 12px",
                        borderRadius: "6px",
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        color: "var(--foreground)",
                        fontSize: "13px",
                        width: "180px",
                      }}
                      value=""
                    />
                    <select
                      style={{
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        color: "var(--foreground)",
                        fontSize: "13px",
                      }}
                    >
                      <option value="all" selected={true}>
                        All providers
                      </option>
                      <option value="Alibaba">Alibaba</option>
                      <option value="Anthropic">Anthropic</option>
                      <option value="DeepSeek">DeepSeek</option>
                      <option value="Google">Google</option>
                      <option value="Meta">Meta</option>
                      <option value="Mistral">Mistral</option>
                      <option value="OpenAI">OpenAI</option>
                      <option value="Sakana AI">Sakana AI</option>
                      <option value="Tencent">Tencent</option>
                      <option value="Z.ai">Z.ai</option>
                      <option value="xAI">xAI</option>
                    </select>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid var(--primary-purple)",
                        background: "rgba(128,130,193,0.12)",
                        color: "var(--primary-purple)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      All licenses
                    </button>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid #ffffff1a",
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Open source
                    </button>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid #ffffff1a",
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Closed
                    </button>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid var(--primary-purple)",
                        background: "rgba(128,130,193,0.12)",
                        color: "var(--primary-purple)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      All tasks
                    </button>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid #ffffff1a",
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Code
                    </button>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid #ffffff1a",
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Reasoning
                    </button>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid #ffffff1a",
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Agents
                    </button>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid #ffffff1a",
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Budget
                    </button>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid #ffffff1a",
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Long Ctx
                    </button>
                    <button
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        border: "1px solid #ffffff1a",
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Vision
                    </button>
                  </div>
                  <div
                    style={{
                      overflowX: "auto",
                      border: "1px solid #ffffff1a",
                      borderRadius: "10px",
                    }}
                  >
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "13px",
                      }}
                    >
                      <thead>
                        <tr style={{ background: "var(--muted)" }}>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            Model{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            Provider{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "center",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            Open
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            Context{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            In $/MTok{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            Out $/MTok
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            Tok/s{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            Released{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            Best for
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/claude-opus-5-5"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Claude Opus 5.5
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $4.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $20.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gpt-6-sol"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                GPT-6 Sol
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gpt-6-luna"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                GPT-6 Luna
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.10
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.50
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gpt-6-astra"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                GPT-6 Astra
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $50.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8082C122",
                                  color: "var(--primary-purple)",
                                }}
                              >
                                research
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gemini-3-8-flash"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Gemini 3.8 Flash
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.75
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $3.75
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/claude-fable-5-1"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Claude Fable 5.1
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $50.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8082C122",
                                  color: "var(--primary-purple)",
                                }}
                              >
                                research
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/claude-mythos-5-1"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Claude Mythos 5.1
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $50.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8082C122",
                                  color: "var(--primary-purple)",
                                }}
                              >
                                research
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/claude-opus-5"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Claude Opus 5
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $25.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            52.3
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-07
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gemini-3-5-pro"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Gemini 3.5 Pro
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-07
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#ec489922",
                                  color: "#ec4899",
                                }}
                              >
                                Long Ctx
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#06b6d422",
                                  color: "#06b6d4",
                                }}
                              >
                                Vision
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gpt-5-6-sol"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                GPT-5.6 Sol
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $4.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $20.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-07
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=hy.tencent.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/tencent-hy3"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Tencent Hy3
                              </a>
                              <a
                                href="/free-models/tencent-hy3"
                                style={{
                                  color: "var(--primary-purple)",
                                  fontSize: "11px",
                                  textDecoration: "none",
                                }}
                              >
                                Free
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Tencent
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>✓</span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            262K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.20
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.80
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-07
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/claude-sonnet-5"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Claude Sonnet 5
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            79
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-06
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=sakana.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/sakana-fugu-ultra"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Sakana Fugu Ultra
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Sakana AI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $30.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-06
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chat.z.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/glm-5-2"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                GLM-5.2
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Z.ai
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>✓</span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.90
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $2.86
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-06
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/claude-fable-5"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Claude Fable 5
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $50.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            70
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-06
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/claude-opus-4-8"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Claude Opus 4.8
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $25.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            65
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-05
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gemini-3-5-flash"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Gemini 3.5 Flash
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $1.50
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $9.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            198
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-05
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/deepseek-v4-pro"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                DeepSeek V4 Pro
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            DeepSeek
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>✓</span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.43
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.87
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            72
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-04
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/deepseek-v4-flash"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                DeepSeek V4 Flash
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            DeepSeek
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>✓</span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.18
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            113
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-04
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gpt-5-5"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                GPT-5.5
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $30.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            89
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-04
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=qwen.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/qwen3-7-max"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Qwen3.7 Max
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Alibaba
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>✓</span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $1.25
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $3.75
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            206
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-04
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#ec489922",
                                  color: "#ec4899",
                                }}
                              >
                                Long Ctx
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=grok.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/grok-4-20"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Grok 4.20
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            xAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $6.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-03
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#ec489922",
                                  color: "#ec4899",
                                }}
                              >
                                Long Ctx
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gpt-5-4"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                GPT-5.4
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $2.50
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $15.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            165
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-03
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#06b6d422",
                                  color: "#06b6d4",
                                }}
                              >
                                Vision
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/claude-sonnet-4-6"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Claude Sonnet 4.6
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $3.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $15.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            47
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2026-02
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#06b6d422",
                                  color: "#06b6d4",
                                }}
                              >
                                Vision
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/claude-haiku-4-5"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Claude Haiku 4.5
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            200K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $1.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            98
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-10
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=mistral.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/mistral-small-3"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Mistral Small 3
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Mistral
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.10
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.30
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            166
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gpt-5"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                GPT-5
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            400K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.63
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            107
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-08
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gemini-2-5-pro"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Gemini 2.5 Pro
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $1.25
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            151
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-06
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#ec489922",
                                  color: "#ec4899",
                                }}
                              >
                                Long Ctx
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#06b6d422",
                                  color: "#06b6d4",
                                }}
                              >
                                Vision
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/gemini-2-5-flash"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Gemini 2.5 Flash
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.30
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $2.50
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            222
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-05
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#f59e0b22",
                                  color: "#f59e0b",
                                }}
                              >
                                Agents
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=qwen.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/qwen3-max"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Qwen3 Max
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Alibaba
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>✓</span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            262K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.78
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $3.90
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            66
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-04
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/o4-mini"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                o4-mini
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            200K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $1.10
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $4.40
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            163
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-04
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/o3"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                o3
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            200K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $8.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            167
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-04
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=llama.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/llama-4-maverick"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Llama 4 Maverick
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Meta
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>✓</span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.15
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.60
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            118
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-04
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#06b6d422",
                                  color: "#06b6d4",
                                }}
                              >
                                Vision
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=llama.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/llama-4-scout"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Llama 4 Scout
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Meta
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>✓</span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            10.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.08
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.30
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            109
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-04
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#ec489922",
                                  color: "#ec4899",
                                }}
                              >
                                Long Ctx
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#10b98122",
                                  color: "#10b981",
                                }}
                              >
                                Budget
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#06b6d422",
                                  color: "#06b6d4",
                                }}
                              >
                                Vision
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=grok.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/grok-3"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Grok 3
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            xAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            131K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $3.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $15.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-02
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/deepseek-r1"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                DeepSeek R1
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            DeepSeek
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>✓</span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $0.55
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $2.19
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2025-01
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ transition: "background 0.1s" }}>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=mistral.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "2px", flexShrink: "0" }}
                              />
                              <a
                                href="/models/mistral-large-2"
                                style={{
                                  color: "var(--foreground)",
                                  textDecoration: "none",
                                }}
                              >
                                Mistral Large 2
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            Mistral
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}></span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            $6.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            55
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--muted-foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            2024-07
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              color: "var(--foreground)",
                              fontSize: "13px",
                              borderBottom: "1px solid var(--border-subtle)",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "4px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#3b82f622",
                                  color: "#3b82f6",
                                }}
                              >
                                Code
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 7px",
                                  borderRadius: "20px",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  background: "#8b5cf622",
                                  color: "#8b5cf6",
                                }}
                              >
                                Reasoning
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
              <div style={{ opacity: "1", transform: "translateY(0)" }}>
                <section style={{ marginBottom: "48px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-kalnia), serif",
                      fontSize: "20px",
                      fontWeight: "600",
                      margin: "0 0 6px",
                      color: "var(--foreground)",
                    }}
                  >
                    Context window, cost and speed
                  </h2>
                  <p
                    style={{
                      margin: "0 0 16px",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Full specs side by side. Click a column header to sort.
                  </p>
                  <div
                    style={{
                      overflowX: "auto",
                      border: "1px solid #ffffff1a",
                      borderRadius: "6px",
                    }}
                  >
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "13px",
                      }}
                    >
                      <thead>
                        <tr style={{ background: "var(--muted)" }}>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              userSelect: "none",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Model{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              userSelect: "none",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Provider
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              userSelect: "none",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Context{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              userSelect: "none",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Max output
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              userSelect: "none",
                              whiteSpace: "nowrap",
                            }}
                          >
                            In $/MTok{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              userSelect: "none",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Out $/MTok
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              userSelect: "none",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Tok/s{" "}
                            <span
                              style={{
                                marginLeft: "4px",
                                opacity: "1",
                                fontSize: "10px",
                              }}
                            >
                              ▼
                            </span>
                          </th>
                          <th
                            style={{
                              padding: "9px 12px",
                              textAlign: "left",
                              fontWeight: "500",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              userSelect: "none",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Pricing note
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=llama.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Llama 4 Scout
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Meta
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            10.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.08
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.30
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            109
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Via third-party inference providers; Meta does not
                            operate a paid API
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Gemini 3.5 Pro
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            GA expected Jul 17 2026; pricing not confirmed as of
                            2026-07-06
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=grok.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Grok 4.20
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            xAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            2.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $6.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              GPT-6 Astra
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $50.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Cached input $1/MTok, cache writes $12.50/MTok.
                            Prompts over 272K input tokens are billed at 2x the
                            input/cache rates and 1.5x the output rate for the
                            entire request, not just the excess.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              GPT-6 Sol
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Cached input $0.20/MTok. Prompts over 272K input
                            tokens cost 2x input and cache rates and 1.5x output
                            for the full request. Source:
                            developers.openai.com/api/docs/models/gpt-6-sol,
                            checked 2026-09-26.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              GPT-6 Luna
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.10
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.50
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Cached input $0.01/MTok. Prompts over 272K input
                            tokens cost 2x input and cache rates and 1.5x
                            output. Source:
                            developers.openai.com/api/docs/models/gpt-6-luna,
                            checked 2026-09-26.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              GPT-5.6 Sol
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.1M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $4.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $20.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI cut pricing from launch $5/$30 to $4/$20 per
                            MTok on Aug 21 2026, a promotion running at least
                            through Nov 21 2026. Prompts over 272K input tokens
                            are billed at 2x the input/cache rates and 1.5x the
                            output rate for the entire request, not just the
                            excess; cache writes are 1.25x the uncached input
                            rate.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Claude Fable 5.1
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $50.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Cache reads cut to $0.25/MTok, a 75% reduction from
                            Fable 5's $1.00/MTok. 5-minute cache writes
                            $12.50/MTok, 1-hour cache writes $20/MTok. Batch API
                            is 50% off. Anthropic reports this brings
                            typical-workload cost down about 25% and highly
                            agentic workload cost down up to about 45% versus
                            Fable 5 at the same prices.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Claude Mythos 5.1
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $50.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Identical pricing to Claude Fable 5.1: cache reads
                            $0.25/MTok (2.5% of base input), 5-minute cache
                            writes $12.50/MTok, 1-hour cache writes $20/MTok,
                            Batch API 50% off.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Claude Opus 5.5
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $4.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $20.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Cache reads $0.20/MTok (5% of input), 5-min cache
                            writes $5, 1-hour $8, Batch API 50% off. Source:
                            platform.claude.com/docs/en/about-claude/pricing,
                            checked 2026-09-26.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Claude Opus 5
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $25.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            52.3
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Claude Fable 5
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $50.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            70
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Claude Sonnet 5
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            79
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Launch intro price of $2/$10 is now the standard
                            price; the planned Sep 1 2026 rise to $3/$15 will
                            not occur. Source:
                            platform.claude.com/docs/en/about-claude/pricing,
                            checked 2026-09-26.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Claude Opus 4.8
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $25.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            65
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Claude Sonnet 4.6
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $3.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $15.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            47
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              GPT-5.5
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $30.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            89
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              GPT-5.4
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $2.50
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $15.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            165
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Gemini 3.5 Flash
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            66K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $1.50
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $9.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            198
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Gemini 3.8 Flash
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            66K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.75
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $3.75
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            $0.75/$3.75 through Dec 31 2026, then $1.50/$7.50
                            from Jan 1 2027 (same schedule as Gemini 3.7 Flash).
                            Source: ai.google.dev/gemini-api/docs/pricing,
                            checked 2026-09-26.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Gemini 2.5 Pro
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $1.25
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $10.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            151
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            $2.50/$15 per MTok for prompts over 200K tokens
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Gemini 2.5 Flash
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Google
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            66K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.30
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $2.50
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            222
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chat.z.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              GLM-5.2
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Z.ai
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            131K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.90
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $2.86
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Via OpenRouter (model ID z-ai/glm-5.2); SiliconFlow
                            lists $1.40/$4.40 per MTok
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=llama.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Llama 4 Maverick
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Meta
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.15
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.60
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            118
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Via third-party inference providers; Meta does not
                            operate a paid API
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              DeepSeek V4 Pro
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            DeepSeek
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            384K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.43
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.87
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            72
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            75% launch promo made permanent 2026-05-22 (original
                            list was $1.74/$3.48 per MTok); $0.435 is now the
                            standard rate.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              DeepSeek V4 Flash
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            DeepSeek
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            384K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.09
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.18
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            113
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Cached input $0.0028/MTok
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=qwen.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Qwen3.7 Max
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Alibaba
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $1.25
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $3.75
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            206
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=sakana.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Sakana Fugu Ultra
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Sakana AI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            1.0M
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            131K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $30.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            $10/$45 per MTok for contexts over 272K tokens;
                            cached input $0.50/MTok (standard), $1.00/MTok (over
                            272K)
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              GPT-5
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            400K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.63
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            107
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Succeeded by GPT-5.5 (official OpenAI replacement);
                            no longer on pricing page. API shutdown Dec 11 2026.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=qwen.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Qwen3 Max
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Alibaba
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            262K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.78
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $3.90
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            66
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=hy.tencent.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              <a
                                href="/free-models/tencent-hy3"
                                style={{
                                  color: "var(--primary-purple)",
                                  textDecoration: "none",
                                }}
                              >
                                Tencent Hy3
                              </a>
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Tencent
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            262K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.20
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.80
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Free via OpenRouter for ~2 weeks from 2026-07-07
                            (model ID tencent/hy3:free); paid tier $0.20/$0.80
                            per MTok via OpenRouter
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Claude Haiku 4.5
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Anthropic
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            200K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $1.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $5.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            98
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              o4-mini
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            200K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $1.10
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $4.40
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            163
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              o3
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            OpenAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            200K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $8.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            167
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=grok.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Grok 3
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            xAI
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            131K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $3.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $15.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=deepseek.com&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              DeepSeek R1
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            DeepSeek
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.55
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $2.19
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            deepseek-reasoner API alias now routes to V4 Flash
                            thinking mode
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=mistral.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Mistral Large 2
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Mistral
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $2.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $6.00
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            55
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontWeight: "500",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <img
                                src="https://www.google.com/s2/favicons?domain=mistral.ai&amp;sz=128"
                                width="14"
                                height="14"
                                alt=""
                                style={{ borderRadius: "6px", flexShrink: "0" }}
                              />
                              Mistral Small 3
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          >
                            Mistral
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            128K
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            --
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.10
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            $0.30
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "13px",
                              color: "var(--foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            166
                          </td>
                          <td
                            style={{
                              padding: "9px 12px",
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              borderBottom: "1px solid var(--border-subtle)",
                            }}
                          ></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
              <div style={{ opacity: "1", transform: "translateY(0)" }}>
                <section style={{ marginBottom: "48px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-kalnia), serif",
                      fontSize: "20px",
                      fontWeight: "600",
                      margin: "0 0 6px",
                      color: "var(--foreground)",
                    }}
                  >
                    Benchmark glossary
                  </h2>
                  <p
                    style={{
                      margin: "0 0 20px",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    What each benchmark actually measures and why it matters.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(300px, 1fr))",
                      gap: "14px",
                    }}
                  >
                    <div
                      style={{
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        transition: "border-color 0.2s",
                        opacity: "1",
                        transform: "translateY(0)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 6px",
                          fontWeight: "600",
                          fontSize: "13.5px",
                          color: "var(--foreground)",
                        }}
                      >
                        SWE-bench Verified
                      </p>
                      <p
                        style={{
                          margin: "0 0 8px",
                          fontSize: "13px",
                          color: "var(--muted-foreground)",
                          lineHeight: "1.55",
                        }}
                      >
                        Real GitHub issues from popular Python repos. The model
                        must write code that passes the existing test suite.
                        "Verified" means a human checked that each issue is
                        solvable. Scores range 0-100%.
                      </p>
                      <a
                        href="https://www.swebench.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "12px",
                          color: "var(--primary-purple)",
                          textDecoration: "none",
                        }}
                      >
                        swebench.com
                      </a>
                    </div>
                    <div
                      style={{
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        transition: "border-color 0.2s",
                        opacity: "1",
                        transform: "translateY(0)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 6px",
                          fontWeight: "600",
                          fontSize: "13.5px",
                          color: "var(--foreground)",
                        }}
                      >
                        MMLU
                      </p>
                      <p
                        style={{
                          margin: "0 0 8px",
                          fontSize: "13px",
                          color: "var(--muted-foreground)",
                          lineHeight: "1.55",
                        }}
                      >
                        Massive Multitask Language Understanding. 57 academic
                        subjects from high-school to professional level (law,
                        medicine, STEM). Tests breadth of knowledge. Scores are
                        % correct.
                      </p>
                      <a
                        href="https://arxiv.org/abs/2009.03300"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "12px",
                          color: "var(--primary-purple)",
                          textDecoration: "none",
                        }}
                      >
                        Hendrycks et al.
                      </a>
                    </div>
                    <div
                      style={{
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        transition: "border-color 0.2s",
                        opacity: "1",
                        transform: "translateY(0)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 6px",
                          fontWeight: "600",
                          fontSize: "13.5px",
                          color: "var(--foreground)",
                        }}
                      >
                        HumanEval
                      </p>
                      <p
                        style={{
                          margin: "0 0 8px",
                          fontSize: "13px",
                          color: "var(--muted-foreground)",
                          lineHeight: "1.55",
                        }}
                      >
                        OpenAI benchmark: 164 hand-crafted Python programming
                        problems. Measures functional code generation (pass@1).
                        Widely used but considered dated for frontier models.
                      </p>
                      <a
                        href="https://github.com/openai/human-eval"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "12px",
                          color: "var(--primary-purple)",
                          textDecoration: "none",
                        }}
                      >
                        OpenAI
                      </a>
                    </div>
                    <div
                      style={{
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        transition: "border-color 0.2s",
                        opacity: "1",
                        transform: "translateY(0)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 6px",
                          fontWeight: "600",
                          fontSize: "13.5px",
                          color: "var(--foreground)",
                        }}
                      >
                        MMMU
                      </p>
                      <p
                        style={{
                          margin: "0 0 8px",
                          fontSize: "13px",
                          color: "var(--muted-foreground)",
                          lineHeight: "1.55",
                        }}
                      >
                        Massive Multidisciplinary Multimodal Understanding.
                        11.5K questions requiring images (charts, diagrams,
                        photos) plus text. Standard for vision-language model
                        evaluation.
                      </p>
                      <a
                        href="https://mmmu-benchmark.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "12px",
                          color: "var(--primary-purple)",
                          textDecoration: "none",
                        }}
                      >
                        mmmu-benchmark.github.io
                      </a>
                    </div>
                    <div
                      style={{
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        transition: "border-color 0.2s",
                        opacity: "1",
                        transform: "translateY(0)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 6px",
                          fontWeight: "600",
                          fontSize: "13.5px",
                          color: "var(--foreground)",
                        }}
                      >
                        RULER
                      </p>
                      <p
                        style={{
                          margin: "0 0 8px",
                          fontSize: "13px",
                          color: "var(--muted-foreground)",
                          lineHeight: "1.55",
                        }}
                      >
                        Ruler for Long-Context Evaluation. Tests retrieval,
                        multi-hop reasoning, and aggregation over very long
                        documents (up to 128K tokens). Better signal than
                        "needle in haystack" for long-context claims.
                      </p>
                      <a
                        href="https://arxiv.org/abs/2404.06654"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "12px",
                          color: "var(--primary-purple)",
                          textDecoration: "none",
                        }}
                      >
                        Hsieh et al.
                      </a>
                    </div>
                    <div
                      style={{
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        transition: "border-color 0.2s",
                        opacity: "1",
                        transform: "translateY(0)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 6px",
                          fontWeight: "600",
                          fontSize: "13.5px",
                          color: "var(--foreground)",
                        }}
                      >
                        GPQA Diamond
                      </p>
                      <p
                        style={{
                          margin: "0 0 8px",
                          fontSize: "13px",
                          color: "var(--muted-foreground)",
                          lineHeight: "1.55",
                        }}
                      >
                        Graduate-Level Google-Proof Q&amp;A, Diamond split.
                        Expert-level science questions that Google cannot
                        directly answer. High signal for deep scientific
                        reasoning. Human experts score ~65%.
                      </p>
                      <a
                        href="https://arxiv.org/abs/2311.12022"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "12px",
                          color: "var(--primary-purple)",
                          textDecoration: "none",
                        }}
                      >
                        Rein et al.
                      </a>
                    </div>
                    <div
                      style={{
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: "1px solid #ffffff1a",
                        background: "var(--card)",
                        transition: "border-color 0.2s",
                        opacity: "1",
                        transform: "translateY(0)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 6px",
                          fontWeight: "600",
                          fontSize: "13.5px",
                          color: "var(--foreground)",
                        }}
                      >
                        MATH
                      </p>
                      <p
                        style={{
                          margin: "0 0 8px",
                          fontSize: "13px",
                          color: "var(--muted-foreground)",
                          lineHeight: "1.55",
                        }}
                      >
                        Competition mathematics (AMC, AIME, Olympiad). 12,500
                        problems across 7 difficulty levels. Tests symbolic
                        reasoning and multi-step derivation. Scores are %
                        correct.
                      </p>
                      <a
                        href="https://github.com/hendrycks/math"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "12px",
                          color: "var(--primary-purple)",
                          textDecoration: "none",
                        }}
                      >
                        Hendrycks et al.
                      </a>
                    </div>
                  </div>
                </section>
              </div>
              <div style={{ opacity: "1", transform: "translateY(0)" }}>
                <section
                  style={{
                    borderRadius: "6px",
                    border: "1px solid rgba(128,130,193,0.2)",
                    background:
                      "linear-gradient(135deg, rgba(128,130,193,0.06) 0%, var(--card) 60%)",
                    padding: "28px 32px",
                    marginBottom: "48px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-kalnia), serif",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "var(--foreground)",
                    }}
                  >
                    Not sure which model fits your project?
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "14px",
                      color: "var(--muted-foreground)",
                      lineHeight: "1.65",
                      maxWidth: "560px",
                    }}
                  >
                    We evaluate models against your actual use case, run
                    cost-to-quality tests across providers, and build the
                    integration. No vendor lock-in, no guesswork.
                  </p>
                  <div
                    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                  >
                    <a
                      href="/consultation"
                      style={{
                        display: "inline-block",
                        padding: "9px 22px",
                        borderRadius: "6px",
                        background: "var(--primary-purple)",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "14px",
                        textDecoration: "none",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Book a free consultation
                    </a>
                    <a
                      href="/free-models"
                      style={{
                        display: "inline-block",
                        padding: "9px 22px",
                        borderRadius: "6px",
                        border: "1px solid var(--border-strong)",
                        background: "transparent",
                        color: "var(--foreground)",
                        fontWeight: "500",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      Browse free models
                    </a>
                  </div>
                </section>
              </div>
            </div>
            <section
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "28px",
                marginBottom: "36px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-kalnia), serif",
                  fontSize: "18px",
                  margin: "0 0 18px",
                  color: "var(--foreground)",
                }}
              >
                Frequently asked questions
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: "0 0 5px",
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "var(--foreground)",
                    }}
                  >
                    What is an LLM leaderboard?
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                      lineHeight: "1.65",
                    }}
                  >
                    An LLM leaderboard ranks AI language models by benchmark
                    scores, speed, pricing, and context window so developers can
                    pick the best model for their use case without reading every
                    provider's documentation separately.
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0 0 5px",
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "var(--foreground)",
                    }}
                  >
                    Which AI model scores highest on benchmarks in 2026?
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                      lineHeight: "1.65",
                    }}
                  >
                    Claude Fable 5 leads on SWE-bench Verified (95.0%) for
                    coding. GPT-5-5 and Gemini 2.5 Pro are competitive on
                    general reasoning. Use the filter above to sort by the
                    benchmark most relevant to your workload.
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0 0 5px",
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "var(--foreground)",
                    }}
                  >
                    How do I compare AI models side by side?
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                      lineHeight: "1.65",
                    }}
                  >
                    Use the leaderboard filters on this page, or go to the
                    Compare tool to select up to four models and view their
                    specs and benchmarks in a single table.
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0 0 5px",
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "var(--foreground)",
                    }}
                  >
                    Which AI model API is the cheapest?
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13.5px",
                      color: "var(--muted-foreground)",
                      lineHeight: "1.65",
                    }}
                  >
                    Open-weight models like Llama 4 Scout and Qwen3 are
                    available free through several providers. Among paid APIs,
                    DeepSeek V4 Pro offers strong reasoning at a lower cost per
                    token than GPT-5 or Claude Fable 5. See the full pricing
                    breakdown at{" "}
                    <a
                      href="/models/pricing"
                      style={{ color: "var(--primary-purple)" }}
                    >
                      /models/pricing
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
            <section
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "22px",
                marginBottom: "26px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-kalnia), serif",
                  fontSize: "18px",
                  margin: "0 0 12px",
                  color: "var(--foreground)",
                }}
              >
                Related guides
              </h2>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <li>
                  <a
                    href="/models/pricing"
                    style={{ color: "var(--foreground)", fontSize: "14px" }}
                  >
                    Live AI model pricing index
                  </a>
                </li>
                <li>
                  <a
                    href="/models/compare"
                    style={{ color: "var(--foreground)", fontSize: "14px" }}
                  >
                    Compare AI models side by side
                  </a>
                </li>
                <li>
                  <a
                    href="/free-models"
                    style={{ color: "var(--foreground)", fontSize: "14px" }}
                  >
                    Free AI Models Directory -- genuinely free LLMs and APIs
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/best-ai-recruiting-software"
                    style={{ color: "var(--foreground)", fontSize: "14px" }}
                  >
                    Best AI recruiting software in 2026
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/best-rag-frameworks"
                    style={{ color: "var(--foreground)", fontSize: "14px" }}
                  >
                    Best RAG frameworks for production
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/best-typescript-ai-agent-frameworks"
                    style={{ color: "var(--foreground)", fontSize: "14px" }}
                  >
                    Best TypeScript AI agent frameworks
                  </a>
                </li>
              </ul>
            </section>
            <section
              style={{
                color: "var(--text-soft)",
                fontSize: "12.5px",
                lineHeight: "1.7",
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "18px",
              }}
            >
              <p style={{ margin: "0 0 6px" }}>
                <strong style={{ color: "var(--foreground)" }}>
                  How we verify.
                </strong>{" "}
                Benchmark scores are taken from official provider pages,
                third-party leaderboards, or peer-reviewed papers. Where a
                number could not be independently confirmed it is shown as a
                dash. Pricing reflects the public API rate at the time of last
                update; check the provider for current pricing.
              </p>
              <p style={{ margin: "0" }}>
                <strong style={{ color: "var(--foreground)" }}>
                  Affiliate disclosure.
                </strong>{" "}
                AY Automate has no affiliate relationship with any model
                provider listed here. Rankings are editorial, not commercial.
              </p>
            </section>
          </div>
        </main>
      </main>
      <DeployAutomationSection />
      <FooterSection />
    </div>
  );
}
