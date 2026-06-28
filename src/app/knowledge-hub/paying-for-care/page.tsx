"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  CreditCard,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import FadeUp from "@/components/FadeUp";

const fundingOptions = [
  {
    id: "costs",
    title: "Costs & Responsibilities",
    number: "01",
    accent: "#0D5450",
    bg: "#E6F7F6",
    content: [
      "Currently, if — subject to a health assessment — it is decided that you require care in England, social services will need to carry out a financial assessment to determine whether you have the means to cover the costs yourself.",
      "This assessment will consider your income (including interest on savings, pension and benefit payments) and any capital you may have (including savings, investments and owned property).",
      "If you have capital of less than £14,250 you will pay nothing for your care from your own capital and savings, regardless of whether the care is in your own home or in a residential setting.",
      "If you have capital between £14,250 and £23,250, you will be deemed eligible for financial support from your local authority, but you will still need to make some contribution. If your assets exceed this threshold, you will have to cover the full cost of your care.",
    ],
    bullets: [
      "Under £14,250 in capital — pay nothing from savings",
      "£14,250–£23,250 — eligible for partial local authority support",
      "Over £23,250 — self-fund the full cost of care",
      "Once assets drop below £14,250, only income-based contributions apply",
    ],
  },
  {
    id: "deferred",
    title: "Deferred Payment Agreements",
    number: "02",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
    content: [
      "You may be able to enter into what is known as a 'Deferred Payment Agreement' if you own residential property but are moving away from this property permanently to go and live in a care home.",
      "A Deferred Payment Agreement is essentially a loan from a local authority set against your home, which will enable you to pay for your care. Interest will be applied to the loan, but you will not need to sell your home immediately.",
      "It is always sensible to seek an independent legal opinion based on your circumstances prior to entering into such an agreement.",
    ],
    bullets: [],
  },
  {
    id: "cap",
    title: "The Care Costs Cap",
    number: "03",
    accent: "#0D9488",
    bg: "#E6F7F6",
    content: [
      "The Government has acknowledged that the number of people having to pay for their own care is on the rise — figures suggest that one in ten of these people will pay in excess of £100,000 in fees.",
      "In September 2021, the Government committed to a new framework with plans to introduce a new £86,000 cap on the amount anyone in England will need to spend on their personal care over their lifetime from October 2023.",
      "We will provide updates on the capped fees system when further details become available. We recommend speaking to an independent financial adviser about how this may affect your planning.",
    ],
    bullets: [],
  },
  {
    id: "nhs",
    title: "NHS Continuing Care",
    number: "04",
    accent: "#0D5450",
    bg: "#E6F7F6",
    content: [
      "Everyone is entitled to free nursing care irrespective of their capital and savings.",
      "Under existing rules, you may be eligible to receive what is known as 'NHS Continuing Care' if you are being transferred to a nursing home from a hospital or are living with a serious health condition. If so, the health service will pay for all your needs — including the aspects of social care and the hotel costs of residential care — irrespective of your financial circumstances.",
      "Even if you are not initially eligible for funding when an assessment is first carried out, it is worth noting that a fresh assessment may be requested if your health deteriorates over time.",
    ],
    bullets: [],
  },
  {
    id: "deprivation",
    title: "Deprivation of Assets",
    number: "05",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
    content: [
      "Some families may be tempted to give away assets in order to qualify for help with funding, but this can be a risky tactic.",
      "If the local authority finds that you have deliberately deprived yourself of assets in order to avoid care costs — for example, giving away savings or signing over your house to a relative — then these assets will be considered 'notional capital'.",
      "This means that the authorities will still be able to take them into account when deciding on the level of assets available. The local authority may also seek to reclaim those assets which have been transferred.",
    ],
    bullets: [],
  },
  {
    id: "mental",
    title: "Care Following Loss of Mental Capacity",
    number: "06",
    accent: "#0D9488",
    bg: "#E6F7F6",
    content: [
      "Conditions such as dementia are growing increasingly common across the UK and can all too easily lead to a loss of decision-making capability and mental capacity.",
      "Fortunately, there are steps that can be followed early on in order to alleviate some of the problems which may arise. You may wish to communicate your wishes clearly through a Lasting Power of Attorney for Health and Welfare or Finances (LPA) or a Will.",
      "An LPA is a legally binding document which can grant your relatives, carers or close family members the authority to handle your property and financial affairs in the event that you lose the mental capacity to do so yourself.",
      "Planning ahead, with the help of a solicitor who specialises in older client legal matters, will provide both you and your family with peace of mind that your affairs are dealt with and your wishes are known.",
    ],
    bullets: [],
  },
];

export default function PayingForCarePage() {
  const [openSection, setOpenSection] = useState<string>("costs");

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative min-h-80 flex items-center overflow-hidden"
        style={{
          paddingTop: "4.5rem",
          background: "linear-gradient(135deg, #083D3A 0%, #0D5450 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-5 bg-dots" />
        <FadeUp className="container-prime relative z-10 py-16">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/knowledge-hub">Knowledge Hub</Link>
            <span>/</span>
            <span style={{ color: "#28B2A1" }}>Paying for Care</span>
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
              <CreditCard size={20} style={{ color: "#ffffff" }} />
            </div>
            <span
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.7)",
                fontWeight: 500,
              }}
            >
              Funding & Finance
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
              6 min read
            </span>
          </div>
          <h1
            className="text-display-lg text-white mt-2"
            style={{ maxWidth: "600px" }}
          >
            Paying for{" "}
            <span className="italic" style={{ color: "#28B2A1" }}>
              Care
            </span>
          </h1>
        </FadeUp>
      </section>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
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
                  Overview
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
                <span style={{ color: "#0D5450" }}>costs of care</span>
              </h2>
              {[
                "Currently, around one fifth of people in England are aged 65 or over — and of these, around 1.6 million are over 85. Because the UK's population is rising fast and people are living for much longer, more and more people are finding that they need care in later life.",
                "The rules which determine how elderly care is funded are notoriously complicated. Here, we outline the rules currently in place and some of the main issues that you may need to consider.",
                "The information that follows should be taken as a general introduction only and we recommend that you seek expert professional advice about how the law relates to your own particular circumstances.",
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
                alt="Prime Care Group nursing care"
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

      {/* ── FUNDING OPTIONS ACCORDION ──────────────────────────────── */}
      <section style={{ background: "#FAFAFA", padding: "80px 0" }}>
        <FadeUp
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
                Funding Options
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
              What you need to know
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#6E6E73",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              Click each section to read the full explanation. We recommend
              reading all sections for a complete picture.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            {fundingOptions.map((item) => {
              const isOpen = openSection === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    border: isOpen
                      ? `2px solid ${item.accent}`
                      : "1px solid #F0EDF5",
                    overflow: "hidden",
                    boxShadow: isOpen
                      ? `0 8px 32px rgba(0,0,0,0.08)`
                      : "0 2px 8px rgba(0,0,0,0.04)",
                    transition: "all 250ms ease",
                  }}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenSection(isOpen ? "" : item.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "14px",
                        background: isOpen ? item.accent : item.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 250ms ease",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: isOpen ? "#ffffff" : item.accent,
                          fontFamily:
                            "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                        }}
                      >
                        {item.number}
                      </span>
                    </div>
                    <span
                      style={{
                        flex: 1,
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#1C1C1E",
                        fontFamily:
                          "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                      }}
                    >
                      {item.title}
                    </span>
                    {isOpen ? (
                      <ChevronUp
                        size={18}
                        style={{ color: item.accent, flexShrink: 0 }}
                      />
                    ) : (
                      <ChevronDown
                        size={18}
                        style={{ color: "#6E6E73", flexShrink: 0 }}
                      />
                    )}
                  </button>

                  {/* Body */}
                  {isOpen && (
                    <div style={{ padding: "0 24px 28px 84px" }}>
                      {item.content.map((p, i) => (
                        <p
                          key={i}
                          style={{
                            fontSize: "15px",
                            lineHeight: 1.8,
                            color: "#3A3A3C",
                            marginBottom: "14px",
                          }}
                        >
                          {p}
                        </p>
                      ))}
                      {item.bullets.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            marginTop: "16px",
                            padding: "20px",
                            borderRadius: "14px",
                            background: item.bg,
                          }}
                        >
                          {item.bullets.map((b) => (
                            <div
                              key={b}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "10px",
                              }}
                            >
                              <CheckCircle
                                size={15}
                                style={{
                                  color: item.accent,
                                  flexShrink: 0,
                                  marginTop: "2px",
                                }}
                              />
                              <span
                                style={{
                                  fontSize: "14px",
                                  color: "#3A3A3C",
                                  lineHeight: 1.6,
                                }}
                              >
                                {b}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeUp>
      </section>

      {/* ── DISCLAIMER BANNER ──────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "48px 0" }}>
        <FadeUp style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              background: "#FFF8E7",
              borderRadius: "16px",
              padding: "24px 28px",
              border: "1px solid #F5D97A",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ fontSize: "24px", flexShrink: 0 }}>⚠️</div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#92710A",
                  marginBottom: "6px",
                }}
              >
                Important notice
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#92710A",
                  margin: 0,
                }}
              >
                The information on this page should be taken as a general
                introduction only. We strongly recommend that you seek expert
                professional advice from an Independent Financial Adviser (IFA)
                who specialises in later life planning, as well as a solicitor
                who specialises in older client legal matters.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── LPA LINK ───────────────────────────────────────────────── */}
      <section style={{ background: "#E9F7F5", padding: "64px 0" }}>
        <FadeUp
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--lpa-cols, 1fr)",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <style>{`@media(min-width:768px){:root{--lpa-cols:1fr 1fr}}`}</style>
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
                  Related Guide
                </span>
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(22px,3vw,32px)",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                Planning ahead with a{" "}
                <span style={{ color: "#6B1F8A" }}>
                  Lasting Power of Attorney
                </span>
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#3A3A3C",
                  marginBottom: "24px",
                }}
              >
                If a resident's care needs change over time due to conditions
                like dementia, there is no need to move to another home. Both
                our homes support residents through changing needs — avoiding
                the upheaval and stress that such changes often bring. Planning
                ahead with an LPA can also help families manage financial
                decisions effectively.
              </p>
              <Link
                href="/knowledge-hub/making-a-lasting-power-of-attorney"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  background: "#6B1F8A",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "opacity 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.88";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                Read our LPA Guide <ArrowRight size={14} />
              </Link>
            </div>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/lpa.jpg"
                alt="Lasting Power of Attorney"
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

      {/* ── OUR HOMES ──────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <FadeUp
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
              Care homes in South London
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
        </FadeUp>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "96px 24px",
          background: "linear-gradient(135deg, #083D3A 0%, #0D5450 100%)",
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
            Need help understanding your options?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            Our team is happy to talk you through the funding options and help
            you take the next steps. Get in touch today — no obligation.
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
                color: "#0D5450",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 250ms ease",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E6F7F6";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact Us <ArrowRight size={16} />
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
