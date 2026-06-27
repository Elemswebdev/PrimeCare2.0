"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const leaders = [
  {
    name: "Sandra Bond",
    role: "Senior Management",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2023/05/Sandra.png",
    href: "/our-team/sandra-bond",
  },
  {
    name: "Innocent Anokute",
    role: "Registered Manager at St Johns Nursing Home",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2023/05/Innocent.png",
    href: "/our-team/innocent-anokute",
  },
  {
    name: "Don McCleod",
    role: "Gibson's Lodge Nursing Home Manager",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2023/05/Don-Mcleod.png",
    href: "/our-team/don-mcleod",
  },
];

const teamCategories = [
  {
    category: "Nursing Team",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
    members: [
      {
        name: "Registered Nurses (RGN/RMN)",
        role: "Clinical Care",
        desc: "Our highly qualified registered nurses lead the clinical care in both homes, providing expert nursing care and managing complex health needs with professionalism and compassion.",
      },
    ],
  },
  {
    category: "Care Team",
    accent: "#0D9488",
    bg: "#E6F7F6",
    members: [
      {
        name: "Senior Care Assistants",
        role: "Senior Care",
        desc: "Our senior care assistants support the nursing team and lead their colleagues, bringing experience, skill and warmth to every shift.",
      },
      {
        name: "Care Assistants",
        role: "Personal Care",
        desc: "The heart of our homes — our care assistants build the day-to-day relationships that make residents feel at home, safe and truly valued.",
      },
    ],
  },
  {
    category: "Support Teams",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
    members: [
      {
        name: "Catering Team",
        role: "Nutrition & Dining",
        desc: "Our chefs and catering staff prepare nutritious, home-cooked meals that are a highlight of each resident's day — adapting to dietary needs and personal preferences.",
      },
      {
        name: "Activities Coordinators",
        role: "Wellbeing & Engagement",
        desc: "Our activities teams run enriching programmes that keep residents mentally and physically engaged — from music and art to gardening and reminiscence sessions.",
      },
      {
        name: "Housekeeping Team",
        role: "Comfort & Cleanliness",
        desc: "Our housekeeping team maintains a clean, comfortable and welcoming environment in every corner of our homes.",
      },
    ],
  },
];

export default function OurTeamClient() {
  return (
    <>
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
            <span style={{ color: "#28B2A1" }}>Our Team</span>
          </nav>
          <div className="section-label" style={{ color: "#45C9B8" }}>
            The People Behind the Care
          </div>
          <h1
            className="text-display-lg text-white mt-2"
            style={{ maxWidth: "600px" }}
          >
            Meet our{" "}
            <span className="italic" style={{ color: "#28B2A1" }}>
              team
            </span>
          </h1>
          <p
            className="mt-4 text-lg max-w-xl"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Exceptional care is delivered by exceptional people. Our team is the
            heart of Prime Care Group.
          </p>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "48px",
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
              Leadership
            </span>
            <div
              style={{ width: "32px", height: "2px", background: "#0D9488" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "40px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {leaders.map((person) => (
              <div
                key={person.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "260px",
                    aspectRatio: "3/4",
                    borderRadius: "20px",
                    overflow: "hidden",
                    background: "#f0f0f0",
                    marginBottom: "20px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                  }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                      transition: "transform 400ms ease",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0D5450",
                    margin: "0 0 6px",
                  }}
                >
                  {person.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#0D9488",
                    fontStyle: "italic",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#E9F7F5", padding: "80px 0" }}>
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
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
              Who We Are
            </span>
          </div>
          <h2
            style={{
              fontFamily:
                "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 700,
              color: "#0D5450",
              marginBottom: "32px",
              lineHeight: 1.2,
            }}
          >
            The people who make{" "}
            <span style={{ color: "#6B1F8A" }}>the difference</span>
          </h2>
          {[
            "At Prime Care Group, we believe that the quality of care we provide is only as good as the quality of the people who deliver it. That is why we invest heavily in recruiting the right people — individuals who are not only highly skilled and qualified, but who genuinely care about the people they look after.",
            "Our teams across both St John's Nursing Home and Gibson's Lodge are made up of registered nurses, senior care assistants, care assistants, activity coordinators, catering staff and support teams — all working together with a shared purpose: to provide exceptional, person-centred care that makes a real difference every day.",
            "Many of our team members have been with us for years, even decades. That continuity matters enormously — it means residents and their families build deep, trusting relationships with the people who care for them.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#3A3A3C",
                marginBottom: "20px",
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      <section style={{ background: "#FAFAFA", padding: "96px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
                Our People
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#0D9488" }}
              />
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 700,
                color: "#1C1C1E",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Roles across our homes
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "56px" }}
          >
            {teamCategories.map((cat) => (
              <div key={cat.category}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "28px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "32px",
                      borderRadius: "99px",
                      background: cat.accent,
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1C1C1E",
                      margin: 0,
                    }}
                  >
                    {cat.category}
                  </h3>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {cat.members.map((m) => (
                    <div
                      key={m.name}
                      style={{
                        background: "#ffffff",
                        borderRadius: "20px",
                        padding: "32px 28px",
                        border: "1px solid #F0EDF5",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                        transition:
                          "transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.transform = "translateY(-6px)";
                        el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.10)";
                        el.style.borderColor = cat.accent;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.transform = "translateY(0)";
                        el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                        el.style.borderColor = "#F0EDF5";
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background: cat.accent,
                          borderRadius: "20px 20px 0 0",
                        }}
                      />
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "14px",
                          background: cat.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "16px",
                          fontSize: "18px",
                          fontWeight: 800,
                          color: cat.accent,
                          fontFamily:
                            "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                        }}
                      >
                        {m.name.charAt(0)}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#0D9488",
                          marginBottom: "8px",
                        }}
                      >
                        {m.role}
                      </div>
                      <h4
                        style={{
                          fontFamily:
                            "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#1C1C1E",
                          marginBottom: "12px",
                          lineHeight: 1.3,
                        }}
                      >
                        {m.name}
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.7,
                          color: "#6E6E73",
                          margin: 0,
                        }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Want to join our team?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            We are always looking for passionate, compassionate people to join
            the Prime Care family. Explore our current opportunities.
          </p>
          <Link
            href="/careers"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 40px",
              borderRadius: "999px",
              background: "#ffffff",
              color: "#6B1A8A",
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
            View Careers <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
