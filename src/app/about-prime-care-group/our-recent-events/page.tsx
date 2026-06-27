"use client";

// Move metadata to a separate layout.tsx or metadata.ts in the same folder:
// export const metadata = { title: "Recent Events | Prime Care Group", description: "..." }

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const events = [
  {
    category: "Community",
    date: "June 2023",
    title: "Celebrating the Coronation",
    desc: "Prime Care Group joined thousands of organisations across the country in celebrating the coronation of King Charles III. Residents and staff came together for a wonderful occasion filled with patriotic spirit, decorations and festivities.",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
    images: [
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/Prime-Care-Coronation-1-225x300.jpg",
        alt: "Celebrating the Coronation",
      },
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/Prime-Care-Coronation-2-225x300.jpg",
        alt: "Celebrating the Coronation",
      },
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/Prime-Care-Coronation-3-225x300.jpg",
        alt: "Celebrating the Coronation",
      },
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/Prime-Care-Coronation-4-225x300.jpg",
        alt: "Celebrating the Coronation",
      },
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/Prime-Care-Coronation-5-225x300.jpg",
        alt: "Celebrating the Coronation",
      },
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/Prime-Care-Coronation-6-225x300.jpg",
        alt: "Celebrating the Coronation",
      },
    ],
  },
  {
    category: "Celebrations",
    date: "June 2023",
    title: "Celebrating a resident's 103rd birthday",
    desc: "What a milestone! We were honoured to celebrate one of our wonderful residents reaching the incredible age of 103. The whole home joined in the birthday festivities — a truly special and joyful occasion for everyone.",
    accent: "#0D9488",
    bg: "#E6F7F6",
    images: [
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/Prime-Care-103rd-Birthday-225x300.jpg",
        alt: "Resident's 103rd birthday celebration",
      },
    ],
  },
  {
    category: "Lifestyle",
    date: "June 2023",
    title: "Residents at Gibson's Lodge enjoy cool summer treats",
    desc: "Residents at Gibson's Lodge kept cool and hydrated during the summer heatwave by enjoying refreshing slices of watermelon. A simple but delightful activity that brought lots of smiles — and stylish sunglasses!",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
    images: [
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/watermelon-selection-225x300.jpg",
        alt: "Watermelon selection",
      },
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/cool-shades-225x300.jpg",
        alt: "Cool shades",
      },
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/liverpool-watermelon-225x300.jpg",
        alt: "Liverpool watermelon",
      },
      {
        src: "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/going-down-a-treat-225x300.jpg",
        alt: "Going down a treat",
      },
    ],
  },
];

export default function EventsPage() {
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
            <span style={{ color: "#28B2A1" }}>Recent Events</span>
          </nav>
          <div className="section-label" style={{ color: "#45C9B8" }}>
            News & Activities
          </div>
          <h1
            className="text-display-lg text-white mt-2"
            style={{ maxWidth: "600px" }}
          >
            Our recent{" "}
            <span className="italic" style={{ color: "#28B2A1" }}>
              events
            </span>
          </h1>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "64px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--intro-cols, 1fr)",
              gap: "var(--intro-gap, 24px)",
              alignItems: "start",
            }}
          >
            <style>{`
              @media (min-width: 1024px) {
                :root { --intro-cols: 1fr 2fr; --intro-gap: 56px; }
              }
            `}</style>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 800,
                color: "#5B1A8A",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Engaging <span style={{ color: "#28B2A1" }}>our residents</span>
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {[
                "At Prime Care Group, we are committed to enhancing the lives of our residents through a varied range of engaging and enjoyable activities.",
                "We take every opportunity to get our residents involved, whether it be celebrating historic events or getting out for some well-needed fresh air.",
                "Take a look at some of our recent events below.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.75,
                    color: "#3A3A3C",
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS ─────────────────────────────────────────────────── */}
      <section style={{ background: "#FAFAFA", padding: "80px 0" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
          }}
        >
          {events.map((event) => (
            <div
              key={event.title}
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                border: "1px solid #F0EDF5",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  padding: "32px 36px 24px",
                  borderBottom: "1px solid #F5F5F5",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "5px 14px",
                      borderRadius: "999px",
                      background: event.bg,
                      color: event.accent,
                    }}
                  >
                    {event.category}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      color: "#6E6E73",
                    }}
                  >
                    <Calendar size={13} />
                    {event.date}
                  </div>
                </div>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: 700,
                    color: "#1C1C1E",
                    margin: "0 0 12px",
                    lineHeight: 1.25,
                  }}
                >
                  {event.title}
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#6E6E73",
                    margin: "0 auto",
                    maxWidth: "680px",
                  }}
                >
                  {event.desc}
                </p>
              </div>

              {/* Photo grid */}
              <div
                style={{
                  padding: "28px 36px 36px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                {event.images.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderRadius: "14px",
                      overflow: "hidden",
                      background: "#f0f0f0",
                      aspectRatio: "3/4",
                      maxWidth: "260px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
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
            Come and join our community
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            Life in our homes is vibrant and full. We&apos;d love to show you
            around and tell you more about the activities, events and lifestyle
            we offer.
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
