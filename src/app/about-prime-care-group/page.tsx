"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Heart, Shield, Users, Star, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Warmth & Compassion",
    desc: "Every resident is welcomed as a member of the Prime family. Warmth, empathy and genuine kindness are at the heart of everything we do.",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
  },
  {
    icon: Shield,
    title: "Clinical Excellence",
    desc: "Our nursing and care teams are highly qualified and deeply experienced, providing the highest standards of clinical and personal care.",
    accent: "#0D9488",
    bg: "#E6F7F6",
  },
  {
    icon: Users,
    title: "A Home from Home",
    desc: "We create environments where residents feel at home – safe, comfortable, and free to be themselves.",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
  },
  {
    icon: Star,
    title: "Truly Personal Care",
    desc: "Every care plan is built around the individual – their preferences, routines, personality and wishes.",
    accent: "#0D9488",
    bg: "#E6F7F6",
  },
  {
    icon: Award,
    title: "Transparent & Honest",
    desc: "We believe families deserve clear, open communication. We keep you informed and involved every step of the way.",
    accent: "#6B1F8A",
    bg: "#F5EEF9",
  },
  {
    icon: Users,
    title: "Family Welcome",
    desc: "Friends and family are always welcome to visit, join for meals, or simply share a moment over a cup of tea.",
    accent: "#0D9488",
    bg: "#E6F7F6",
  },
];

const featuresData = [
  {
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/prime-care-group-bedroom.jpg",
    alt: "Prime Care Group bedroom",
    text: "Each bedroom is attractively furnished with its own en-suite but we encourage each of our residents to decorate and personalise their rooms and bring furniture, pictures, and lots of their belongings with them to create a homely space where they can feel they truly belong.",
  },
  {
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/prime-care-group-residents.jpg",
    alt: "Prime Care residents",
    text: "Our residents have the freedom to be themselves and to take each day as it comes. We try not to have strict rules and policies — if a resident would like a lie-in and breakfast in bed, that's absolutely fine – we are happy to make it happen!",
  },
  {
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/prime-care-group-chefs.jpg",
    alt: "Prime Care Group chefs",
    text: "Our chefs really go out of their way to cater for each and every resident's tastes. Nothing is too much trouble – we prepare all our food from scratch each day and if someone has a particular fancy – whether its sausages, smoked salmon or strawberries – that's not a problem.",
  },
  {
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/prime-care-group-activity.jpg",
    alt: "Prime Care Group activity",
    text: "Each of our homes has its own activity co-ordinator. We provide a full and varied programme of activities. We also encourage our residents to help us with ideas for activities they would like to get involved with.",
  },
  {
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/prime-care-group-staff.jpg",
    alt: "Prime Care Group staff",
    text: "Our home from home approach extends to our residents' nearest and dearest. You will always receive a warm welcome. There are no set visiting times — wherever our residents wish to meet, is fine by us.",
  },
];

const subPages = [
  {
    title: "Meet Our Team",
    desc: "The dedicated professionals behind the Prime Care name.",
    href: "/our-team",
    emoji: "👥",
  },
  {
    title: "Recent Events",
    desc: "News, celebrations and activities from our homes.",
    href: "/about-prime-care-group/our-recent-events",
    emoji: "🎉",
  },
  {
    title: "Testimonials",
    desc: "Hear what residents and their families have to say.",
    href: "/testimonials",
    emoji: "💬",
  },
];

// ── Nav arrow button ──────────────────────────────────────────────────────────
function NavBtn({
  onClick,
  label,
  direction,
}: {
  onClick: () => void;
  label: string;
  direction: "left" | "right";
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        border: "1.5px solid #b0ccc9",
        background: "#EAF4F3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#0D5450",
        transition: "all 200ms ease",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#0D9488";
        e.currentTarget.style.color = "#ffffff";
        e.currentTarget.style.borderColor = "#0D9488";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#EAF4F3";
        e.currentTarget.style.color = "#0D5450";
        e.currentTarget.style.borderColor = "#b0ccc9";
      }}
    >
      {direction === "left" ? (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      ) : (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </button>
  );
}

// ── Features slider ───────────────────────────────────────────────────────────
function FeaturesSlider() {
  const [current, setCurrent] = useState(0);
  const total = featuresData.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const rightIndex = (current + 1) % total;

  return (
    <section style={{ background: "#ffffff", padding: "48px 0 56px" }}>
      <style>{`
        .features-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
          border-radius: 16px;
          transition: transform 400ms ease;
        }
        .features-img:hover { transform: scale(1.03); }
        @media (min-width: 768px) {
          .features-img { height: 320px; }
        }
        @media (min-width: 1024px) {
          .features-img { height: 360px; }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* ── DESKTOP (md and above) ── */}
        <div className="hidden md:block">
          {/* Images + nav row — nav sits below LEFT image only, matching live site */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px",
              alignItems: "start",
            }}
          >
            {/* Left column: image + nav underneath */}
            <div>
              <div style={{ overflow: "hidden", borderRadius: "16px" }}>
                <img
                  src={featuresData[current].image}
                  alt={featuresData[current].alt}
                  className="features-img"
                />
              </div>
              {/* Nav buttons sit directly under left image */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "16px",
                }}
              >
                <NavBtn
                  onClick={prev}
                  label="Previous feature"
                  direction="left"
                />
                <NavBtn onClick={next} label="Next feature" direction="right" />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0D5450",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginLeft: "6px",
                  }}
                >
                  Features
                </span>
              </div>
            </div>

            {/* Right column: image only */}
            <div style={{ overflow: "hidden", borderRadius: "16px" }}>
              <img
                src={featuresData[rightIndex].image}
                alt={featuresData[rightIndex].alt}
                className="features-img"
              />
            </div>
          </div>

          {/* Text row — below both images */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#3A3A3C",
                margin: 0,
              }}
            >
              {featuresData[current].text}
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#3A3A3C",
                margin: 0,
              }}
            >
              {featuresData[rightIndex].text}
            </p>
          </div>
        </div>

        {/* ── MOBILE (below md) ── */}
        <div className="md:hidden">
          <div style={{ overflow: "hidden", borderRadius: "16px" }}>
            <img
              src={featuresData[current].image}
              alt={featuresData[current].alt}
              className="features-img"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "16px",
            }}
          >
            <NavBtn onClick={prev} label="Previous feature" direction="left" />
            <NavBtn onClick={next} label="Next feature" direction="right" />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#0D5450",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginLeft: "6px",
              }}
            >
              Features
            </span>
          </div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#3A3A3C",
              marginTop: "16px",
            }}
          >
            {featuresData[current].text}
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
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
            <span style={{ color: "#28B2A1" }}>About Us</span>
          </nav>
          <div className="section-label" style={{ color: "#45C9B8" }}>
            Our Story
          </div>
          <h1
            className="text-display-lg text-white mt-2"
            style={{ maxWidth: "600px" }}
          >
            About{" "}
            <span className="italic" style={{ color: "#28B2A1" }}>
              Prime Care Group
            </span>
          </h1>
        </div>
      </section>

      {/* ── BRIEF HISTORY ──────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "64px 0 80px" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--about-cols, 1fr)",
              gap: "var(--about-gap, 32px)",
              alignItems: "start",
            }}
          >
            <style>{`
              @media (min-width: 1024px) {
                :root { --about-cols: 1fr 2fr; --about-gap: 64px; }
              }
            `}</style>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 800,
                color: "#5B1A8A",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Brief History{" "}
              <span style={{ color: "#28B2A1" }}>of Prime Care Group</span>
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {[
                "Prime Care Group was established just over 30 years ago by our founder, Nizar Baloo.",
                "As a youngster, Nizar had cared for his elderly relative and was disappointed at the lack of homely local care services.",
                "He set up Prime Care, initially with one facility in Sutton. Today, Prime Care operates two care homes in South Croydon and Streatham, employing around 500 staff and providing nursing and residential care for more than 150 older people in these local communities.",
                "We are proud to be one of the leading small homely independent care providers in these areas and we have won a series of prestigious awards for our commitment to care quality and people development.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.75,
                    color: "#3A3A3C",
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ─────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#E9F7F5" }}>
        <div className="container-prime">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Who We Are</div>
              <h2
                className="text-display-md mb-6"
                style={{ color: "#0D5450", fontFamily: "var(--font-display)" }}
              >
                Doing things{" "}
                <span style={{ color: "#6B1F8A" }}>a little differently</span>
              </h2>
              <br />
              <div className="prime-prose">
                <p>
                  At Prime Care Group we have always set out to do things a
                  little differently. We are intentionally small – and proud of
                  our commitment to providing exceptional nursing and
                  residential care across our two care homes in South London.
                </p>
                <p>
                  Our size is a strength. It means we can focus on what matters
                  most: getting to know every resident as a unique individual,
                  understanding their personal history, preferences and needs,
                  and building care around them — not the other way around.
                </p>
                <p>
                  Whether it is knowing that Mrs Smith likes two sugars in her
                  tea, or that Mr Jones finds Tuesdays hard because it&apos;s
                  the anniversary of his wife&apos;s passing — these details
                  matter enormously to us.
                </p>
                <p>
                  We believe that great care begins with genuine human
                  connection. Our teams are not just clinically skilled — they
                  are warm, attentive, curious and deeply caring people who
                  consider it a privilege to serve the residents in their homes.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care4.jpg"
                alt="Prime Care Group team"
                className="w-full rounded-3xl object-cover"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES SLIDER ────────────────────────────────────────── */}
      <FeaturesSlider />

      {/* ── VALUES ─────────────────────────────────────────────────── */}
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
                Our Values
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#0D9488" }}
              />
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#1C1C1E",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              The Prime Care difference
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {values.map(({ icon: Icon, title, desc, accent, bg }) => (
              <div
                key={title}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "36px 28px",
                  border: "1px solid #F0EDF5",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition:
                    "transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.10)";
                  el.style.borderColor = accent;
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
                    background: accent,
                    borderRadius: "20px 20px 0 0",
                  }}
                />
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#1C1C1E",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#6E6E73",
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB-PAGE NAV ───────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily:
                  "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 700,
                color: "#1C1C1E",
                margin: 0,
              }}
            >
              Explore more about us
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {subPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #F9F6FD 0%, #EEF9F8 100%)",
                    borderRadius: "20px",
                    padding: "40px 32px",
                    border: "1px solid #EDE8F5",
                    transition: "transform 280ms ease, box-shadow 280ms ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = "0 20px 48px rgba(107,31,138,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "20px" }}>
                    {item.emoji}
                  </div>
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1C1C1E",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.65,
                      color: "#6E6E73",
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "24px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#6B1F8A",
                    }}
                  >
                    Explore <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
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
            Want to find out more?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            We&apos;d love to chat about your loved one&apos;s care
            requirements. Get in touch with us today.
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
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
