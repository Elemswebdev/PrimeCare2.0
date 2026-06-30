"use client";

import { Sparkles, ShieldCheck, Clock3, Users2 } from "lucide-react";
import { CareChatInterface } from "./care-chat-interface";

const trustIndicators = [
  { icon: ShieldCheck, label: "CQC Registered Homes" },
  { icon: Clock3, label: "Instant Answers, Anytime" },
  { icon: Users2, label: "Trusted by 100s of Families" },
];

export function AICareAdvisorSection() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--color-prime-cream)" }}
    >
      <div className="container-prime">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center">
            <div
              className="section-label"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <Sparkles size={14} style={{ color: "#0D9488" }} />
              AI Care Advisor
            </div>
            <h2
              className="text-display-lg mb-6"
              style={{ color: "#0D5450", fontFamily: "var(--font-display)" }}
            >
              Not sure what care is{" "}
              <span style={{ color: "#6B1F8A" }}>right for your family?</span>
            </h2>
            <p className="text-body-lg mb-5">
              Ask our AI Care Advisor anything — from the difference between
              residential and nursing care to which of our homes might suit your
              loved one best. It&apos;s free, instant, and available any time of
              day.
            </p>
            <p className="text-body-lg mb-8">
              It&apos;s a great starting point before speaking with our team,
              who are always on hand to talk through your specific situation in
              more detail.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustIndicators.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-prime-blush)" }}
                  >
                    <Icon size={16} style={{ color: "#6B1F8A" }} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#1C1C1E" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Chat widget */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
              border: "1px solid #F0EDF5",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: "560px",
              maxHeight: "640px",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #0D9488, #0a7a6e)",
                padding: "20px 28px",
                flexShrink: 0,
              }}
            >
              <h3
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "0 0 4px",
                }}
              >
                PrimeCare AI
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.85)",
                  margin: 0,
                }}
              >
                Ask me anything about care at Prime Care Group
              </p>
            </div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <CareChatInterface />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
