"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";

const stjohns = [
  {
    quote:
      "The carers have treated the residents with good care and support. The activities for the residents have been varied and excellent, and have a yearly barbeque for them and their family with live entertainment. Cleanliness has improved, with no smells while entering the building. The place is very secure, which is good for residents with dementia. The carers have also shown kindness and friendliness. It is good value for money compared to the cost of other nursing homes around the area.",
    author: "M G",
    relation: "Daughter of Resident",
  },
  {
    quote:
      "I am forever grateful for the love, care, and compassion the staff of St John's gave my mother-in-law. I cannot praise this nursing home enough. They treated my mother-in-law so very, very well. The staff are always friendly, polite, and professional. I always felt they were treating my mother-in-law as they would like to be treated, with genuine love and respect, as if she were their own mother.",
    author: "John E",
    relation: "Son-in-law of Resident",
  },
  {
    quote:
      "Staff always very friendly and caring. Mum always looked clean and well cared for.",
    author: "C P",
    relation: "Daughter of Resident",
  },
  {
    quote:
      "My mother was a resident here for three years until she passed away in December 2019. All the staff, from the nurses to the carers, to the cleaning staff were all excellent. It was a great comfort to know she was safe and well looked after. She was treated with kindness, respect and dignity and she was always clean and well dressed.",
    author: "Clare A",
    relation: "Daughter of Resident",
  },
  {
    quote:
      "I have found the caring staff and management genuine and competent. The level of care and cleanliness is commendable. I am pleased that my Mother is in trained and skilled hands.",
    author: "M B",
    relation: "Son of Resident",
  },
  {
    quote:
      "It has taken a huge weight off my mind to know that my husband is being so well looked after. All the staff are very kind and friendly towards me and all my family.",
    author: "Barbara E",
    relation: "Wife of Resident",
  },
  {
    quote:
      "My cousin seems to be very happy here and has, after 1 year, settled in very nicely. The staff couldn't be nicer. The staff give a variety of entertainment which is appreciated by all. All year activities are carried out with many visits outside for day trips.",
    author: "Maggie A",
    relation: "Cousin of Resident",
  },
  {
    quote:
      "I still can't express how good St John's is. They looked after my wife very well, but that's not half of it. I came every day and could see how loved she was. I mean 'loved'; it was touching. There's very little staff turnover which is a key measure in my book and the range of activities is so important and so well prepared.",
    author: "John B",
    relation: "Husband of Resident",
  },
  {
    quote:
      "Staff here are very friendly and helpful. Very kind to my mother. The management team are very good, always asking us if everything is OK and are we happy with mother's care. If there was anything we weren't happy about we feel confident that it would be rectified.",
    author: "Michael G",
    relation: "Son of Resident",
  },
  {
    quote:
      "I have always found the place welcoming and the staff pleasant. A good atmosphere. I just wish my mother had been in St John's when it was her time to enter a home.",
    author: "F T",
    relation: "Nephew of Resident",
  },
];

const gibsons = [
  {
    quote:
      "My husband has been a dementia patient at Gibson's Lodge for eight years. He is always clean and well-shaven. The staff are always helpful and caring. The home is regularly decorated and the staff try to put on entertainment for special days — it is a multicultural environment without friction. There is usually a Christmas party, visiting entertainers, Valentine's Day celebrations, trips to the seaside, a summer BBQ, and a lounge with a large screen for videos.",
    author: "Marion S",
    relation: "Wife of Resident",
  },
];

type Tab = "stjohns" | "gibsons";

function StarRow() {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} style={{ color: "#28B2A1", fill: "#28B2A1" }} />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("stjohns");
  const list = activeTab === "stjohns" ? stjohns : gibsons;

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
        <div className="container-prime relative z-10 py-16">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/about-prime-care-group">About Us</Link>
            <span>/</span>
            <span style={{ color: "#28B2A1" }}>Testimonials</span>
          </nav>
          <div className="section-label" style={{ color: "#45C9B8" }}>
            Reviews & Stories
          </div>
          <h1
            className="text-display-lg text-white mt-2"
            style={{ maxWidth: "600px" }}
          >
            What our residents &{" "}
            <span className="italic" style={{ color: "#28B2A1" }}>
              families say
            </span>
          </h1>
        </div>
      </section>

      {/* ── TAB FILTER ─────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "48px 0 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "32px",
              justifyContent: "center",
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

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {(["stjohns", "gibsons"] as Tab[]).map((tab) => {
              const active = activeTab === tab;
              const label =
                tab === "stjohns"
                  ? "St John's Nursing Home"
                  : "Gibson's Lodge Nursing Home";
              const count = tab === "stjohns" ? stjohns.length : gibsons.length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "12px 28px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 200ms ease",
                    border: active ? "none" : "1.5px solid #E0E0E0",
                    background: active
                      ? tab === "stjohns"
                        ? "#6B1F8A"
                        : "#0D5450"
                      : "#ffffff",
                    color: active ? "#ffffff" : "#6E6E73",
                    boxShadow: active ? "0 4px 16px rgba(0,0,0,0.15)" : "none",
                  }}
                >
                  {label}
                  <span
                    style={{
                      marginLeft: "8px",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "2px 7px",
                      borderRadius: "999px",
                      background: active ? "rgba(255,255,255,0.25)" : "#F0F0F0",
                      color: active ? "#ffffff" : "#6E6E73",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active home bar */}
          <div
            style={{
              height: "3px",
              marginTop: "32px",
              background: activeTab === "stjohns" ? "#6B1F8A" : "#0D5450",
              borderRadius: "999px",
              transition: "background 300ms ease",
            }}
          />
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ──────────────────────────────────────── */}
      <section style={{ background: "#FAFAFA", padding: "64px 0 96px" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {list.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  border: "1px solid #F0EDF5",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
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
                {/* Top accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: activeTab === "stjohns" ? "#6B1F8A" : "#0D5450",
                    borderRadius: "20px 20px 0 0",
                  }}
                />

                {/* Stars */}
                <StarRow />

                {/* Large quote mark */}
                <div
                  style={{
                    fontSize: "64px",
                    lineHeight: 1,
                    color: "#28B2A1",
                    opacity: 0.15,
                    fontFamily: "Georgia, serif",
                    marginBottom: "-16px",
                    marginTop: "-8px",
                  }}
                >
                  &ldquo;
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "#3A3A3C",
                    fontStyle: "italic",
                    flex: 1,
                    margin: "0 0 24px",
                  }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div
                  style={{
                    paddingTop: "20px",
                    borderTop: "1px solid #F0EDF5",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* Avatar initial */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background:
                        activeTab === "stjohns" ? "#F5EEF9" : "#E6F7F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: activeTab === "stjohns" ? "#6B1F8A" : "#0D5450",
                      flexShrink: 0,
                    }}
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#1C1C1E",
                      }}
                    >
                      {t.author}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6E6E73",
                        marginTop: "2px",
                      }}
                    >
                      {t.relation}
                    </div>
                  </div>
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
        <div
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
              fontFamily:
                "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            See it for yourself
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            We would love to welcome you to one of our homes for a visit. Come
            and meet our team and see the care we provide first-hand.
          </p>
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
            Book a Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
