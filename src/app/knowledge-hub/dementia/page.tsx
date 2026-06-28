"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Phone, Brain, Heart, CheckCircle } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const dementiaTypes = [
  {
    name: "Alzheimer's Disease",
    desc: "The most commonly recognised form of dementia. Caused by brain cells gradually dying, which results in cognitive impairment including memory loss and difficulty with thinking and communication.",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
  },
  {
    name: "Vascular Dementia",
    desc: "Caused by reduced blood flow to the brain, often following a stroke or series of mini-strokes. Results in difficulties with thinking, planning and understanding.",
    accent: "#0D9488",
    bg: "#E6F7F6",
  },
  {
    name: "Dementia with Lewy Bodies",
    desc: "Characterised by abnormal protein deposits that disrupt brain chemistry. Symptoms include visual hallucinations, movement difficulties and fluctuating alertness.",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
  },
  {
    name: "Frontotemporal Dementia",
    desc: "Affects the front and side parts of the brain, which control behaviour and language. Often diagnosed in younger people and can cause significant personality changes.",
    accent: "#0D9488",
    bg: "#E6F7F6",
  },
];

const environments = [
  {
    id: "wayfinding",
    title: "Wayfinding",
    icon: "🗺️",
    desc: "Wayfinding helps our residents find their way around the home, retaining a level of independence. This includes memorabilia in memory boxes next to each resident's bedroom door, windows along paths and corridors, and stimulating views to ensure resident wellbeing.",
  },
  {
    id: "hallways",
    title: "Hallways & Corridors",
    icon: "🚶",
    desc: "We make our hallways and corridors as clear and unwinding as possible, avoiding dead ends. Where corridors are long, we provide areas of interest as familiar markers so residents can clearly identify where the dining room or toilet is situated. We use contrasting handrails and paint staff doors to blend into walls.",
  },
  {
    id: "bedrooms",
    title: "Bedrooms & Individual Spaces",
    icon: "🛏️",
    desc: "Personal living spaces are important to everybody. We encourage our residents to add personal touches — objects, photographs or personal furniture — to help prompt memories. Bedrooms are warm and welcoming, and we actively encourage residents to bring in anything that helps them feel at home.",
  },
  {
    id: "privacy",
    title: "Individual Privacy",
    icon: "🔒",
    desc: "We have created rooms where residents and their families can have private time together. Each individual's environment is arranged and adapted to encourage freedom and safety while minimising situations that could cause distress. Our trained staff always remain mindful of balancing privacy with safety.",
  },
  {
    id: "communal",
    title: "Communal Spaces",
    icon: "🏡",
    desc: "Community space provides an opportunity for social interaction, mental stimulation and familiarity. Our community spaces are clearly identified with distinct signage and with safety in mind. We ensure that communal areas do not feel crowded, which can sometimes be a cause of distress for residents with dementia.",
  },
  {
    id: "outdoors",
    title: "Outdoors",
    icon: "🌿",
    desc: "Access to the outdoors is a fantastic way for residents to enjoy fresh air. The familiarity of a garden, birdsong, and sensory plants and flowers stimulates memories and provides great pleasure. Our secure outdoor areas have clear pathways, creating a feeling of freedom while remaining sensitive to practical needs.",
  },
];

const stages = [
  {
    stage: "Early Stage",
    title: "Mild Cognitive Impairment",
    desc: "Memory lapses, difficulty finding words, mood changes. The person remains largely independent but may need occasional support and reminders.",
    color: "#6B1F8A",
  },
  {
    stage: "Middle Stage",
    title: "Moderate Dementia",
    desc: "Increasing memory loss, confusion, difficulty with daily tasks, changes in behaviour. Supervision and support with daily activities becomes important.",
    color: "#0D9488",
  },
  {
    stage: "Later Stage",
    title: "Severe Dementia",
    desc: "Significant cognitive decline, limited verbal communication, full-time care required. Focus is on comfort, dignity and quality of life.",
    color: "#083D3A",
  },
];

export default function DementiaPage() {
  const [activeEnv, setActiveEnv] = useState("wayfinding");
  const activeItem = environments.find((e) => e.id === activeEnv)!;

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative min-h-80 flex items-center overflow-hidden"
        style={{
          paddingTop: "4.5rem",
          background: "linear-gradient(135deg, #6B1F8A 0%, #4E166A 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-5 bg-dots" />
        <FadeUp className="container-prime relative z-10 py-16">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/knowledge-hub">Knowledge Hub</Link>
            <span>/</span>
            <span style={{ color: "#28B2A1" }}>Dementia</span>
          </nav>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Brain size={20} style={{ color: "#ffffff" }} />
            </div>
            <span
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.7)",
                fontWeight: 500,
              }}
            >
              Knowledge Hub
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
              9 min read
            </span>
          </div>
          <h1
            className="text-display-lg text-white mt-2"
            style={{ maxWidth: "600px" }}
          >
            Dementia{" "}
            <span className="italic" style={{ color: "#28B2A1" }}>
              friendly care
            </span>
          </h1>
        </FadeUp>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <FadeUp
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--intro-cols, 1fr)",
              gap: "var(--intro-gap, 40px)",
              alignItems: "center",
            }}
          >
            <style>{`@media(min-width:1024px){:root{--intro-cols:1fr 1fr;--intro-gap:64px}}`}</style>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "#6B1F8A",
                  }}
                />
                <span
                  style={{
                    color: "#6B1F8A",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  What is Dementia?
                </span>
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(26px,4vw,40px)",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  marginBottom: "28px",
                  lineHeight: 1.2,
                }}
              >
                Understanding the{" "}
                <span style={{ color: "#6B1F8A" }}>condition</span>
              </h2>
              {[
                "Dementia is a term used to describe a wide range of symptoms. There are many different types of dementia, but the most commonly recognised types include Alzheimer's disease, fronto-temporal dementia, vascular dementia and dementia with Lewy bodies.",
                "Typical symptoms associated with dementia include memory loss, difficulty with thinking, problem-solving and communicating. Dementia is caused by brain cells gradually dying, which results in cognitive impairment.",
                "Although there are drugs and other medical interventions which can slow down the progression of dementia or lessen the symptoms, there is no cure for the condition. The specific symptoms that someone with dementia experiences will depend on the parts of the brain that are damaged — and as everyone is unique, so will be the experience of living with dementia.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#3A3A3C",
                    marginBottom: "16px",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/Prime-Care-Group-Residential-and-nursing-care-london-Croydon-Surrey-5.png"
                alt="Prime Care Group dementia care"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── TYPES OF DEMENTIA ──────────────────────────────────────── */}
      <section style={{ background: "#FAFAFA", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{ width: "32px", height: "2px", background: "#6B1F8A" }}
              />
              <span
                style={{
                  color: "#6B1F8A",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Types of Dementia
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#6B1F8A" }}
              />
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                fontSize: "clamp(26px,4vw,40px)",
                fontWeight: 700,
                color: "#1C1C1E",
                margin: 0,
              }}
            >
              Understanding the different forms
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {dementiaTypes.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "28px",
                  border: "1px solid #F0EDF5",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 280ms ease, box-shadow 280ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: t.accent,
                    borderRadius: "20px 20px 0 0",
                  }}
                />
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: t.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Brain size={20} style={{ color: t.accent }} />
                </div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#1C1C1E",
                    marginBottom: "10px",
                  }}
                >
                  {t.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.75,
                    color: "#6E6E73",
                    margin: 0,
                  }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAGES ─────────────────────────────────────────────────── */}
      <section style={{ background: "#E9F7F5", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{ width: "32px", height: "2px", background: "#0D9488" }}
              />
              <span
                style={{
                  color: "#0D9488",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Stages of Dementia
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#0D9488" }}
              />
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                fontSize: "clamp(26px,4vw,40px)",
                fontWeight: 700,
                color: "#1C1C1E",
                margin: "0 0 12px",
              }}
            >
              How dementia progresses
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#6E6E73",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              Dementia typically progresses through stages, though the speed and
              experience varies greatly between individuals.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {stages.map((s, i) => (
              <div
                key={s.stage}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "28px 32px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: s.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: "18px",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: s.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {s.stage}
                  </span>
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1C1C1E",
                      margin: "6px 0 8px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "#6E6E73",
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NATIONAL DEMENTIA STRATEGY ─────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <FadeUp style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{ width: "32px", height: "2px", background: "#6B1F8A" }}
            />
            <span
              style={{
                color: "#6B1F8A",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              National Strategy
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display,'Plus Jakarta Sans',sans-serif)",
              fontSize: "clamp(24px,3.5vw,36px)",
              fontWeight: 700,
              color: "#1C1C1E",
              marginBottom: "24px",
              lineHeight: 1.2,
            }}
          >
            The National Dementia Strategy
          </h2>
          {[
            "In 2009, the Government published the National Dementia Strategy, which sets out standards for dementia care. The purpose of this strategy was to provide better care and support for people suffering with dementia as well as support for their families.",
            "It has resulted in a marked increase of diagnoses made each year, which means that appropriate care and support can be provided when it is needed. Each of our homes are suitable for people living with dementia, with dementia-qualified and experienced staff who are on duty 24 hours a day.",
            "We understand that moving to a care home can be particularly challenging for people with dementia, who may find changes to familiar routines, surroundings or people confusing and frustrating. Our extensive experience enables us to make the transition as stress-free and reassuring as possible.",
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#3A3A3C",
                marginBottom: "16px",
              }}
            >
              {p}
            </p>
          ))}
        </FadeUp>
      </section>

      {/* ── DEMENTIA FRIENDLY ENVIRONMENTS ────────────────────────── */}
      <section style={{ background: "#FAFAFA", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{ width: "32px", height: "2px", background: "#6B1F8A" }}
              />
              <span
                style={{
                  color: "#6B1F8A",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Dementia Friendly Homes
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#6B1F8A" }}
              />
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                fontSize: "clamp(26px,4vw,40px)",
                fontWeight: 700,
                color: "#1C1C1E",
                margin: "0 0 12px",
              }}
            >
              Providing safe environments
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#6E6E73",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              We place the emphasis on friendly, warm and person-centred care,
              delivered by trained, supportive staff who understand dementia.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--env-cols, 1fr)",
              gap: "24px",
            }}
          >
            <style>{`@media(min-width:1024px){:root{--env-cols:280px 1fr}}`}</style>

            {/* Tab buttons */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {environments.map((env) => (
                <button
                  key={env.id}
                  onClick={() => setActiveEnv(env.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 20px",
                    borderRadius: "14px",
                    textAlign: "left",
                    cursor: "pointer",
                    border: "none",
                    background: activeEnv === env.id ? "#6B1F8A" : "#ffffff",
                    color: activeEnv === env.id ? "#ffffff" : "#3A3A3C",
                    boxShadow:
                      activeEnv === env.id
                        ? "0 8px 24px rgba(107,31,138,0.25)"
                        : "0 2px 8px rgba(0,0,0,0.05)",
                    transition: "all 220ms ease",
                    fontFamily:
                      "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{env.icon}</span>
                  {env.title}
                </button>
              ))}
            </div>

            {/* Active content */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                border: "1px solid #F0EDF5",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>
                {activeItem.icon}
              </div>
              <h3
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#6B1F8A",
                  marginBottom: "16px",
                }}
              >
                {activeItem.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "#3A3A3C",
                  margin: 0,
                }}
              >
                {activeItem.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSONALISED CARE PLANS ────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--care-cols, 1fr)",
              gap: "56px",
              alignItems: "center",
            }}
          >
            <style>{`@media(min-width:1024px){:root{--care-cols:1fr 1fr}}`}</style>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/Dementia-friendly-care.jpg"
                alt="Dementia friendly care"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "#6B1F8A",
                  }}
                />
                <span
                  style={{
                    color: "#6B1F8A",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Person-Centred Care
                </span>
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(24px,3.5vw,36px)",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  marginBottom: "24px",
                  lineHeight: 1.2,
                }}
              >
                Personalised care plans
              </h2>
              {[
                "Delivering personalised care, tailored to each resident's individual needs, wishes and preferences, is at the heart of everything we do. A key priority is getting to know each resident.",
                "It is very important that we gain as much life history about each person we care for as possible. We take time to understand what makes each individual tick and what is important to them.",
                "Wherever possible, we involve our dementia residents in drawing up their own personal care plan and we also consult with family members so that the care we provide is completely tailored to each individual's needs.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#3A3A3C",
                    marginBottom: "16px",
                  }}
                >
                  {p}
                </p>
              ))}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                {[
                  "Life history and personal interests recorded",
                  "Family involvement in care planning",
                  "Regular reviews and care plan updates",
                  "Stimulating activities tailored to the individual",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <CheckCircle
                      size={16}
                      style={{ color: "#28B2A1", flexShrink: 0 }}
                    />
                    <span style={{ fontSize: "14px", color: "#3A3A3C" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOD & HEALTHCARE ──────────────────────────────────────── */}
      <section style={{ background: "#E9F7F5", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--food-cols, 1fr)",
              gap: "56px",
              alignItems: "center",
            }}
          >
            <style>{`@media(min-width:1024px){:root{--food-cols:1fr 1fr}}`}</style>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "#0D9488",
                  }}
                />
                <span
                  style={{
                    color: "#0D9488",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Our Food
                </span>
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(24px,3.5vw,36px)",
                  fontWeight: 700,
                  color: "#0D5450",
                  marginBottom: "24px",
                  lineHeight: 1.2,
                }}
              >
                Mealtimes as a{" "}
                <span style={{ color: "#6B1F8A" }}>highlight of the day</span>
              </h2>
              {[
                "We know how important good food is to our residents, which is why we try to make each mealtime the highlight of the day. All of our chefs work hard to produce home-cooked food which is not only nutritious but really tasty.",
                "We recognise that residents with dementia often become confused or frustrated at mealtimes. We protect our mealtimes so that our residents are not interrupted by any unnecessary noise or disruption, creating a positive social experience.",
                "We also understand that some residents may wish to eat in other areas of the home and we encourage individual choice. Our patient staff are trained to offer gentle encouragement, ensuring that each resident's nutritional needs are met.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#3A3A3C",
                    marginBottom: "16px",
                  }}
                >
                  {p}
                </p>
              ))}
              <div
                style={{
                  marginTop: "8px",
                  padding: "20px 24px",
                  borderRadius: "16px",
                  background: "#ffffff",
                  border: "1px solid #E0F0EE",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#0D5450",
                    fontWeight: 600,
                    margin: "0 0 8px",
                  }}
                >
                  Healthcare at Prime Care Group
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6E6E73",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  All of our residents are able to continue to see their own GP
                  where practical. We can also arrange visits to see other
                  health professionals as required — including an optician,
                  dentist, chiropodist or physiotherapist.
                </p>
              </div>
            </div>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/prime-care-group-chefs-l.jpg"
                alt="Prime Care Group chefs"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR HOMES ──────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{ width: "32px", height: "2px", background: "#0D9488" }}
              />
              <span
                style={{
                  color: "#0D9488",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Our Homes
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#0D9488" }}
              />
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                fontSize: "clamp(26px,4vw,40px)",
                fontWeight: 700,
                color: "#1C1C1E",
                margin: 0,
              }}
            >
              Dementia care across our two homes
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                name: "St John's Nursing Home",
                address: "129 Haling Park Road, South Croydon CR2 6NN",
                href: "/our-homes/st-johns-nursing-home",
                image:
                  "https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/St-Johns-Nursing-Home-Croydon-2.jpg",
                color: "#6B1F8A",
              },
              {
                name: "Gibson's Lodge Nursing Home",
                address: "Gibson's Hill, London SW16 3ES",
                href: "/our-homes/gibsons-lodge-nursing-home",
                image:
                  "https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Gibsons-Lodge-Nursing-Home-London.jpg",
                color: "#0D5450",
              },
            ].map((home) => (
              <div
                key={home.name}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #F0EDF5",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  transition: "transform 280ms ease, box-shadow 280ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 48px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                  <img
                    src={home.image}
                    alt={home.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1C1C1E",
                      marginBottom: "8px",
                    }}
                  >
                    {home.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6E6E73",
                      marginBottom: "20px",
                    }}
                  >
                    {home.address}
                  </p>
                  <Link
                    href={home.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 22px",
                      borderRadius: "999px",
                      background: home.color,
                      color: "#ffffff",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    View Home <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "96px 24px",
          background: "linear-gradient(135deg, #6B1F8A 0%, #4E166A 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <FadeUp
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
          <Heart
            size={36}
            style={{ color: "#28B2A1", margin: "0 auto 20px" }}
          />
          <h2
            style={{
              fontFamily: "var(--font-display,'Plus Jakarta Sans',sans-serif)",
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Speak to our specialist team
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            If you have a loved one with dementia and would like to discuss care
            options, our experienced team is here to help guide you.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 40px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#6B1F8A",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 250ms ease",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F5EEF9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <a
              href="tel:02086883053"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.5)",
                color: "rgba(255,255,255,0.9)",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 250ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Phone size={15} /> Call Us
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
