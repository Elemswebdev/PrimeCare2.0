"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const homes = [
  {
    name: "St John's Nursing Home",
    address: "129 Haling Park Road, South Croydon CR2 6NN",
    beds: 58,
    href: "/our-homes/st-johns-nursing-home",
    description:
      "St John's Nursing Home is a well-established 58-bed nursing home located in a quiet residential area in South Croydon, Surrey. We provide exceptional nursing and residential care in a warm, homely environment.",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/St-Johns-Nursing-Home-Croydon-2.jpg",
    services: [
      "Nursing Care",
      "Residential Care",
      "Dementia Care",
      "Respite Care",
      "Palliative Care",
    ],
    color: "#6B1F8A",
  },
  {
    name: "Gibson's Lodge Nursing Home",
    address: "Gibson's Hill, London SW16 3ES",
    beds: 52,
    href: "/our-homes/gibsons-lodge-nursing-home",
    description:
      "Gibson's Lodge is a 52-bed nursing home located in Streatham, situated in a quiet, leafy suburban street close to the park. Our dedicated team provides compassionate, expert care in a warm and welcoming home environment.",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Gibsons-Lodge-Nursing-Home-London.jpg",
    services: [
      "Nursing Care",
      "Residential Care",
      "Dementia Care",
      "Respite Care",
      "End of Life Care",
    ],
    color: "#0D5450",
  },
];

export default function HomesPage() {
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
            <span style={{ color: "#28B2A1" }}>Our Homes</span>
          </nav>
          <div className="section-label" style={{ color: "#45C9B8" }}>
            South London
          </div>
          <h1
            className="text-display-lg text-white mt-2"
            style={{ maxWidth: "600px" }}
          >
            Our{" "}
            <span className="italic" style={{ color: "#28B2A1" }}>
              care homes
            </span>
          </h1>
        </div>
      </section>

      {/* ── HOMES CARDS ────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-prime-mist, #E9F7F5)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Section label */}
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
                Our Homes
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
              Two exceptional care homes
              <br />
              in South London
            </h2>
          </div>

          {/* 2-col card grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {homes.map((home) => (
              <div
                key={home.name}
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  border: "1px solid #F0EDF5",
                  display: "flex",
                  flexDirection: "column",
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
                  el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
                }}
              >
                {/* Image with gradient overlay */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                  }}
                >
                  <img
                    src={home.image}
                    alt={home.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 600ms ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to top, ${home.color}CC 0%, transparent 60%)`,
                    }}
                  />
                  {/* Beds badge */}
                  {home.beds && (
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#ffffff",
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      {home.beds} Beds
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: "32px 32px 36px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#1C1C1E",
                      marginBottom: "8px",
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    {home.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6E6E73",
                      textAlign: "center",
                      marginBottom: "16px",
                    }}
                  >
                    {home.address}
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "#3A3A3C",
                      marginBottom: "24px",
                      flex: 1,
                    }}
                  >
                    {home.description}
                  </p>

                  {/* Service badges */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "28px",
                    }}
                  >
                    {home.services.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          padding: "5px 12px",
                          borderRadius: "999px",
                          background:
                            home.color === "#6B1F8A" ? "#F5EEF9" : "#E6F7F6",
                          color: home.color,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div
                    style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                  >
                    <Link
                      href={home.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "12px 24px",
                        borderRadius: "999px",
                        background: home.color,
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "opacity 200ms ease",
                        flex: 1,
                        justifyContent: "center",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.88")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                    >
                      View Home <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/contact-us"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "12px 20px",
                        borderRadius: "999px",
                        border: `1.5px solid ${home.color}`,
                        color: home.color,
                        fontSize: "14px",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 200ms ease",
                        justifyContent: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = home.color;
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = home.color;
                      }}
                    >
                      <Phone size={14} /> Enquire
                    </Link>
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
            Not sure which home is right?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            Our team will be happy to talk through your loved one&apos;s needs
            and help guide you to the right choice.
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
            Speak to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
