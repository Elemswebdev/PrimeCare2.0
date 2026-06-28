"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  MapPin,
  Bed,
  Clock,
  Star,
  CheckCircle,
  Mail,
} from "lucide-react";

const careTypes = [
  "Nursing Care",
  "Residential Care",
  "Dementia Care",
  "Palliative Care",
  "Respite Care",
  "Parkinson's Care",
  "Convalescence Care",
  "Mental Health",
  "Physical Disability",
  "Sensory Impairment",
  "Alzheimer's",
  "Challenging Behaviour",
];

const facilities = [
  "Close to local shops",
  "Secure landscaped gardens",
  "Lift & stair lift",
  "Wheelchair access",
  "Minibus & near public transport",
  "Residents can bring own furniture",
  "Phone & TV point in room",
  "Residents internet access",
  "Hairdressing salon",
  "Grand ground floor dining room",
  "Patio lounge",
  "Family visiting rooms",
];

const activities = [
  "Bowling, balloon badminton & basketball",
  "Light exercise & armchair exercises",
  "Reminiscence days with old photos",
  "Arts & crafts sessions",
  "Quizzes & regular sing-alongs",
  "Celebrations of special days",
  "Beautiful secure landscaped garden",
  "Seasonal & cultural celebrations",
];

const galleryImages = [
  {
    src: "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/stjohn-slide3.jpg",
    alt: "St John's lounge",
  },
  {
    src: "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/stjohn-slide4.jpg",
    alt: "St John's dining",
  },
  {
    src: "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/stjohn-slide2.jpg",
    alt: "St John's corridor",
  },
  {
    src: "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/prime-care-group-bedroom.jpg",
    alt: "St John's bedroom",
  },
  {
    src: "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/prime-care-group-residents.jpg",
    alt: "Residents enjoying activities",
  },
  {
    src: "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/stjohn-slide1.jpg",
    alt: "St John's garden",
  },
];

const testimonials = [
  {
    quote:
      "The carers have treated the residents with good care and support. The activities have been varied and excellent. The place is very secure, which is good for residents with dementia.",
    author: "M G",
    relation: "Daughter of Resident",
  },
  {
    quote:
      "I am forever grateful for the love, care, and compassion the staff of St John's gave my mother-in-law. I cannot praise this nursing home enough.",
    author: "John E",
    relation: "Son-in-law of Resident",
  },
  {
    quote:
      "It was a great comfort to know she was safe and well looked after. She was treated with kindness, respect and dignity and she was always clean and well dressed.",
    author: "Clare A",
    relation: "Daughter of Resident",
  },
  {
    quote:
      "I still can't express how good St John's is. I came every day and could see how loved she was. I mean 'loved'; it was touching.",
    author: "John B",
    relation: "Husband of Resident",
  },
];

export default function StJohnsPage() {
  const [activeGallery, setActiveGallery] = useState(0);

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "4.5rem",
          minHeight: "70vh",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/St-Johns-Nursing-Home-london.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,61,58,0.95) 0%, rgba(13,84,80,0.7) 55%, rgba(13,84,80,0.2) 100%)",
          }}
        />
        <div className="container-prime relative z-10 py-20">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/our-homes">Our Homes</Link>
            <span>/</span>
            <span style={{ color: "#28B2A1" }}>
              St John&apos;s Nursing Home
            </span>
          </nav>
          <div className="section-label" style={{ color: "#45C9B8" }}>
            South Croydon, Surrey
          </div>
          <h1
            className="text-display-xl text-white mt-2 mb-4"
            style={{ maxWidth: "700px" }}
          >
            St John&apos;s
            <br />
            <span className="italic" style={{ color: "#28B2A1" }}>
              Nursing Home
            </span>
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px",
              }}
            >
              <MapPin size={15} style={{ color: "#28B2A1" }} />
              129 Haling Park Road, South Croydon CR2 6NN
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px",
              }}
            >
              <Bed size={15} style={{ color: "#28B2A1" }} />
              58 Beds
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px",
              }}
            >
              <Clock size={15} style={{ color: "#28B2A1" }} />
              24/7 Care
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#0D5450",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 250ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E6F7F6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
              }}
            >
              Book a Visit <ArrowRight size={16} />
            </Link>
            <a
              href="tel:02086883053"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
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
              <Phone size={15} /> 020 8688 3053
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK INFO BAR ─────────────────────────────────────────── */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #E8E3DC",
          padding: "20px 0",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { icon: Bed, label: "58 Beds", sub: "48 single, 5 shared" },
              {
                icon: Clock,
                label: "24/7 Nursing",
                sub: "Round the clock care",
              },
              { icon: Star, label: "CQC Registered", sub: "Regulated care" },
              { icon: MapPin, label: "South Croydon", sub: "CR2 6NN, Surrey" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#F5EEF9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} style={{ color: "#6B1F8A" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#1C1C1E",
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: "12px", color: "#6E6E73" }}>
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OVERVIEW ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-prime-cream, #FAF8F5)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--overview-cols, 1fr)",
              gap: "var(--overview-gap, 40px)",
              alignItems: "center",
            }}
          >
            <style>{`@media(min-width:1024px){:root{--overview-cols:1fr 1fr;--overview-gap:64px}}`}</style>
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
                  About the Home
                </span>
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(26px,4vw,40px)",
                  fontWeight: 700,
                  color: "#0D5450",
                  marginBottom: "28px",
                  lineHeight: 1.2,
                }}
              >
                A warm home in the heart of{" "}
                <span style={{ color: "#6B1F8A" }}>South Croydon</span>
              </h2>
              {[
                "St John's Nursing Home is a well-established 58-bed nursing home located in a quiet residential area in South Croydon, Surrey. Our aim is to provide a safe and comfortable environment for residents, with a happy and homely atmosphere.",
                "Our care workers are committed to providing each resident with an individual care plan to suit their specific needs. We are also very committed to providing a range of activities and outings for clients to stimulate both the mind and body.",
                "Our beautiful home from home is set on 3 floors, with a large landscaped garden. We pride ourselves on our nutritious home-cooked meals which can be enjoyed in the grand ground floor dining room, in the patio lounge or in the privacy of residents' own rooms.",
                "Our passion at St John's is to allow our residents the choice of how to live their lives. We treat everyone as individuals and focus on their individual needs — building long-term relationships based on happiness, openness and respect.",
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
            {/* Image grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div
                style={{
                  gridColumn: "span 2",
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src="https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/St-Johns-Nursing-Home-london.jpg"
                  alt="St John's Nursing Home"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src="https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/stjohn-slide3.jpg"
                  alt="St John's lounge"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src="https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/prime-care-group-bedroom.jpg"
                  alt="St John's bedroom"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARE PROVIDED ──────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div
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
                Care Services
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
                lineHeight: 1.2,
              }}
            >
              Comprehensive care for every need
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#6E6E73",
                marginTop: "16px",
                maxWidth: "560px",
                margin: "16px auto 0",
              }}
            >
              We provide 24-hour care on either a permanent or respite basis,
              fully personalised to each resident's needs.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {careTypes.map((care) => (
              <div
                key={care}
                style={{
                  background: "#FAFAFA",
                  borderRadius: "16px",
                  padding: "20px 20px",
                  border: "1px solid #F0EDF5",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "all 250ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "#F5EEF9";
                  el.style.borderColor = "#6B1F8A";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "#FAFAFA";
                  el.style.borderColor = "#F0EDF5";
                }}
              >
                <CheckCircle
                  size={16}
                  style={{ color: "#28B2A1", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1C1C1E",
                  }}
                >
                  {care}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES & ACTIVITIES ────────────────────────────────── */}
      <section style={{ background: "#E9F7F5", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--fac-cols, 1fr)",
              gap: "48px",
            }}
          >
            <style>{`@media(min-width:1024px){:root{--fac-cols:1fr 1fr}}`}</style>

            {/* Facilities */}
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
                  Facilities
                </span>
              </div>
              <h3
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(22px,3vw,32px)",
                  fontWeight: 700,
                  color: "#0D5450",
                  marginBottom: "28px",
                  lineHeight: 1.2,
                }}
              >
                A comfortable home for everyday living
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {facilities.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: "rgba(40,178,161,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle size={12} style={{ color: "#28B2A1" }} />
                    </div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#3A3A3C",
                        lineHeight: 1.4,
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
              {/* Room info */}
              <div
                style={{
                  marginTop: "32px",
                  padding: "24px",
                  borderRadius: "16px",
                  background: "#ffffff",
                  border: "1px solid #E0F0EE",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#0D5450",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Room Information
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {[
                    "48 single rooms",
                    "5 shared rooms",
                    "18 rooms with en-suite WC",
                  ].map((r) => (
                    <div
                      key={r}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        color: "#3A3A3C",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#28B2A1",
                          flexShrink: 0,
                        }}
                      />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activities */}
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
                  Activities
                </span>
              </div>
              <h3
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(22px,3vw,32px)",
                  fontWeight: 700,
                  color: "#0D5450",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                Keeping minds & bodies active
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "#3A3A3C",
                  marginBottom: "24px",
                }}
              >
                Kreena is our dedicated activities coordinator, who organises a
                varied programme of hobbies, pastimes and physical activities
                for our residents to enjoy every day.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {activities.map((a) => (
                  <div
                    key={a}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      background: "#ffffff",
                      border: "1px solid #E8E3DC",
                    }}
                  >
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: "#F5EEF9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <CheckCircle size={12} style={{ color: "#6B1F8A" }} />
                    </div>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#3A3A3C",
                        lineHeight: 1.5,
                      }}
                    >
                      {a}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU SECTION ───────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--menu-cols, 1fr)",
              gap: "56px",
              alignItems: "center",
            }}
          >
            <style>{`@media(min-width:1024px){:root{--menu-cols:1fr 1fr}}`}</style>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                aspectRatio: "2/3",
              }}
            >
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/St-Johns-Nursing-Home-london-banner-m.jpg"
                alt="St John's dining"
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
                  Our Menu
                </span>
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(26px,4vw,40px)",
                  fontWeight: 700,
                  color: "#0D5450",
                  marginBottom: "24px",
                  lineHeight: 1.2,
                }}
              >
                Good food at the heart of life at{" "}
                <span style={{ color: "#6B1F8A" }}>St John&apos;s</span>
              </h2>
              {[
                "All our dishes are made using fresh ingredients and we can cater for all dietary and cultural requirements. Our resident chef likes to be visible during meal times to receive feedback and ideas for future menus.",
                "He regularly introduces recipes from all over the world, taking into consideration the nutritional and health values of the meals we serve. Our menus are aimed at being intriguing and stimulating to encourage residents' appetites.",
                "There are always a range of alternatives on our menu and snacks are available throughout the day. We also enjoy celebrating our residents' birthdays with personalised birthday cakes.",
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
          </div>
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────────────── */}
      <section style={{ background: "#FAFAFA", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
                Gallery
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
              A glimpse inside St John&apos;s
            </h2>
          </div>
          {/* Main image */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              aspectRatio: "16/7",
              marginBottom: "16px",
            }}
          >
            <img
              src={galleryImages[activeGallery].src}
              alt={galleryImages[activeGallery].alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "opacity 300ms ease",
              }}
            />
          </div>
          {/* Thumbnails */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "10px",
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveGallery(i)}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  aspectRatio: "1/1",
                  cursor: "pointer",
                  border:
                    i === activeGallery
                      ? "3px solid #6B1F8A"
                      : "3px solid transparent",
                  transition: "border 200ms ease",
                  opacity: i === activeGallery ? 1 : 0.65,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #083D3A 0%, #0D5450 100%)",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            pointerEvents: "none",
          }}
        />
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
                style={{ width: "32px", height: "2px", background: "#45C9B8" }}
              />
              <span
                style={{
                  color: "#45C9B8",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Reviews
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#45C9B8" }}
              />
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                fontSize: "clamp(26px,4vw,40px)",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              What families say about St John&apos;s
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div
                  style={{ display: "flex", gap: "3px", marginBottom: "16px" }}
                >
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      style={{ color: "#28B2A1", fill: "#28B2A1" }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    fontSize: "52px",
                    lineHeight: 1,
                    color: "#28B2A1",
                    opacity: 0.2,
                    fontFamily: "Georgia,serif",
                    marginBottom: "-8px",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.88)",
                    fontStyle: "italic",
                    marginBottom: "20px",
                  }}
                >
                  {t.quote}
                </p>
                <div
                  style={{
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {t.author}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.6)",
                      marginTop: "2px",
                    }}
                  >
                    {t.relation}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link
              href="/testimonials"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 32px",
                borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.4)",
                color: "rgba(255,255,255,0.9)",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Read All Reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MANAGER CONTACT ────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "64px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--mgr-cols, 1fr)",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <style>{`@media(min-width:768px){:root{--mgr-cols:1fr 1fr}}`}</style>
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
                  Home Manager
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
                Get in touch with Innocent Anokute
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {[
                  {
                    icon: MapPin,
                    text: "129 Haling Park Road, South Croydon CR2 6NN",
                  },
                  {
                    icon: Phone,
                    text: "020 8688 3053",
                    href: "tel:02086883053",
                  },
                  {
                    icon: Mail,
                    text: "manager@stjohnsnursinghome.co.uk",
                    href: "mailto:manager@stjohnsnursinghome.co.uk",
                  },
                ].map(({ icon: Icon, text, href }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        background: "#F5EEF9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} style={{ color: "#6B1F8A" }} />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontSize: "15px",
                          color: "#6B1F8A",
                          fontWeight: 500,
                          textDecoration: "none",
                          alignSelf: "center",
                        }}
                      >
                        {text}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontSize: "15px",
                          color: "#3A3A3C",
                          alignSelf: "center",
                        }}
                      >
                        {text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* CTA card */}
            <div
              style={{
                background: "linear-gradient(135deg, #6B1F8A 0%, #4E166A 100%)",
                borderRadius: "24px",
                padding: "48px 36px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  pointerEvents: "none",
                }}
              />
              <h3
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "12px",
                }}
              >
                Arrange a visit
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "28px",
                  lineHeight: 1.6,
                }}
              >
                We&apos;d love to welcome you to St John&apos;s. Come and meet
                our team and enjoy a cup of tea.
              </p>
              <Link
                href="/contact-us"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  background: "#ffffff",
                  color: "#6B1F8A",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 250ms ease",
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
          </div>
        </div>
      </section>
    </>
  );
}
