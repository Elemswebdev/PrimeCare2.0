import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Brain,
  CreditCard,
  Heart,
  FileText,
  ShieldAlert,
  Sparkles,
  Phone,
  Mail,
  Compass,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Hub — Care Guides & Resources | Prime Care Group",
  description:
    "Expert guides on dementia care, paying for care, lasting power of attorney, safeguarding and more — helping families navigate care decisions with confidence.",
};

type Article = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  category: string;
  icon: typeof Brain;
  readTime: string;
};

const featured: Article = {
  title: "Dementia friendly care",
  excerpt:
    "At Prime Care Group, we aim to provide a secure, relaxed and homely environment where care, well-being and comfort is of prime importance. Our guide explores what dementia-friendly design and daily routine actually look like in practice.",
  href: "/knowledge-hub/dementia",
  image:
    "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/Dementia-friendly-care.jpg",
  category: "Health & Care",
  icon: Brain,
  readTime: "8 min read",
};

const articles: Article[] = [
  {
    title: "Paying for care",
    excerpt:
      "Currently, around one fifth of people in England are aged 65 or over — and, of these, around 1.6 million are over 85. Understanding the funding landscape early makes every later decision easier.",
    href: "/knowledge-hub/paying-for-care",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care4.jpg",
    category: "Funding & Finance",
    icon: CreditCard,
    readTime: "10 min read",
  },
  {
    title: "Our response to Covid-19",
    excerpt:
      "The Covid-19 pandemic created unprecedented challenges to the way we all live our lives — arguably none more so than those living and working in residential care homes.",
    href: "/knowledge-hub/our-response-to-covid-19",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/covid-responsive.jpg",
    category: "Health & Safety",
    icon: Heart,
    readTime: "5 min read",
  },
  {
    title: "Making a Lasting Power of Attorney and Will",
    excerpt:
      "By making a Lasting Power of Attorney, you are able to choose who is to have the legal authority to manage your affairs — a decision best made before it becomes urgent.",
    href: "/knowledge-hub/making-a-lasting-power-of-attorney",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/lpa.jpg",
    category: "Legal & Planning",
    icon: FileText,
    readTime: "7 min read",
  },
  {
    title: "Do you have a safeguarding concern?",
    excerpt:
      "We do our utmost to ensure the safety, health and well-being of everyone in our care. Here is how to raise a concern, and exactly what happens after you do.",
    href: "/knowledge-hub/do-you-have-a-safeguarding-concern",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2023/06/Sanderstead-Care-Centre-s-1-e1686048116410.jpg",
    category: "Health & Safety",
    icon: ShieldAlert,
    readTime: "4 min read",
  },
];

const topics = [
  { label: "Health & Care", count: 1 },
  { label: "Funding & Finance", count: 1 },
  { label: "Health & Safety", count: 2 },
  { label: "Legal & Planning", count: 1 },
];

export default function KnowledgeHubPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');

        .kh-serif { font-family: 'Fraunces', Georgia, serif; }
        .kh-sans { font-family: 'Inter', system-ui, sans-serif; }

        .kh-link-underline { position: relative; text-decoration: none; }
        .kh-link-underline::after {
          content: ''; position: absolute; left: 0; bottom: -2px; width: 100%; height: 1px;
          background: currentColor; transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s ease;
        }
        .kh-link-underline:hover::after { transform: scaleX(1); }

        .kh-card { transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease; }
        .kh-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px -12px rgba(13,61,56,0.18); border-color: #D8CFE0 !important; }

        .kh-img-zoom { overflow: hidden; }
        .kh-img-zoom img { transition: transform 0.7s cubic-bezier(.2,.8,.2,1); }
        .kh-card:hover .kh-img-zoom img { transform: scale(1.08); }

        .kh-arrow-btn { transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease; }
        .kh-card:hover .kh-arrow-btn { background: #0D3D38; color: #FAF7F0; transform: translateX(3px); }

        .kh-cta-primary { transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease; }
        .kh-cta-primary:hover { background: #5B2E63; transform: translateY(-2px); box-shadow: 0 12px 28px -6px rgba(91,46,99,0.4); }

        .kh-cta-ghost { transition: background 0.25s ease, border-color 0.25s ease; }
        .kh-cta-ghost:hover { background: rgba(255,255,255,0.12); }

        .kh-featured-cta { transition: gap 0.25s ease, background 0.25s ease; }
        .kh-featured-cta:hover { gap: 0.85rem; background: #0A2F2B; }

        .kh-reveal {
          opacity: 0; transform: translateY(16px);
          animation: khFadeUp 0.7s ease forwards;
        }
        @keyframes khFadeUp { to { opacity: 1; transform: translateY(0); } }

        .kh-sidebar-link { transition: color 0.2s ease, padding-left 0.2s ease; }
        .kh-sidebar-link:hover { color: #0D3D38; padding-left: 4px; }

        .kh-topic-chip { transition: background 0.2s ease, border-color 0.2s ease; }
        .kh-topic-chip:hover { background: #0D3D38; border-color: #0D3D38; }
        .kh-topic-chip:hover span, .kh-topic-chip:hover svg { color: #FAF7F0 !important; }

        @media (prefers-reduced-motion: reduce) {
          .kh-reveal { animation: none; opacity: 1; transform: none; }
          .kh-card, .kh-img-zoom img, .kh-arrow-btn { transition: none; }
        }
      `}</style>

      <div
        className="kh-sans"
        style={{ background: "#FAF7F0", color: "#1C1C1E" }}
      >
        {/* ============ HERO ============ */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#0D3D38",
          }}
        >
          {/* decorative background shapes */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-120px",
              right: "-80px",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(91,46,99,0.35), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-160px",
              left: "-100px",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(40,178,161,0.18), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "7rem 1.5rem 6rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <nav
              aria-label="Breadcrumb"
              className="kh-reveal"
              style={{
                fontSize: "13px",
                color: "rgba(250,247,240,0.55)",
                marginBottom: "2rem",
              }}
            >
              <Link
                href="/"
                className="kh-link-underline"
                style={{ color: "rgba(250,247,240,0.55)" }}
              >
                Home
              </Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#E8A77E" }}>Knowledge Hub</span>
            </nav>

            <div
              className="kh-reveal"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "999px",
                padding: "0.45rem 1rem",
                marginBottom: "1.75rem",
                animationDelay: "0.05s",
              }}
            >
              <Sparkles size={13} style={{ color: "#E8A77E" }} />
              <span
                style={{
                  fontSize: "12.5px",
                  color: "rgba(250,247,240,0.85)",
                  letterSpacing: "0.02em",
                }}
              >
                Trusted care resources
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
                gap: "3rem",
                alignItems: "end",
              }}
            >
              <div>
                <h1
                  className="kh-serif kh-reveal"
                  style={{
                    fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                    fontWeight: 500,
                    lineHeight: 1.04,
                    color: "#FAF7F0",
                    maxWidth: "640px",
                    animationDelay: "0.1s",
                  }}
                >
                  Care decisions, made with confidence.
                </h1>
                <p
                  className="kh-reveal"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "rgba(250,247,240,0.75)",
                    maxWidth: "480px",
                    marginTop: "1.5rem",
                    animationDelay: "0.18s",
                  }}
                >
                  Navigating care for a loved one can feel overwhelming. Our
                  knowledge hub brings together honest, practical guides — on
                  dementia, funding, legal planning and safeguarding — written
                  to help, not to sell.
                </p>
              </div>

              {/* floating info card */}
              <div
                className="kh-reveal"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: "20px",
                  padding: "1.75rem",
                  backdropFilter: "blur(8px)",
                  animationDelay: "0.26s",
                }}
              >
                <div style={{ display: "flex", gap: "1.25rem" }}>
                  <div style={{ flex: 1 }}>
                    <div
                      className="kh-serif"
                      style={{
                        fontSize: "2rem",
                        color: "#E8A77E",
                        fontWeight: 500,
                      }}
                    >
                      5
                    </div>
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "rgba(250,247,240,0.65)",
                        marginTop: "0.25rem",
                      }}
                    >
                      Guides covering care, funding & legal planning
                    </div>
                  </div>
                  <div
                    style={{
                      width: "1px",
                      background: "rgba(255,255,255,0.16)",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      className="kh-serif"
                      style={{
                        fontSize: "2rem",
                        color: "#E8A77E",
                        fontWeight: 500,
                      }}
                    >
                      2
                    </div>
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "rgba(250,247,240,0.65)",
                        marginTop: "0.25rem",
                      }}
                    >
                      Homes our team can talk you through
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="kh-featured-cta"
                  style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    background: "#0D3D38",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "#FAF7F0",
                    padding: "0.8rem 1rem",
                    borderRadius: "999px",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Talk to our team <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INTRO + SEARCH ============ */}
        <section
          style={{ padding: "4.5rem 1.5rem 3rem", background: "#FAF7F0" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr) minmax(0,0.85fr)",
                gap: "3rem",
                alignItems: "center",
                marginBottom: "3rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#5B2E63",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  Where to start
                </div>
                <h2
                  className="kh-serif"
                  style={{
                    fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                    fontWeight: 500,
                    color: "#0D3D38",
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                  }}
                >
                  Five guides, written by people who actually answer the phone.
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "#4A453E",
                    maxWidth: "560px",
                  }}
                >
                  Every guide below comes from questions our own families have
                  asked us — about dementia care, paying for a place, legal
                  planning, and keeping residents safe. Read at your own pace,
                  or call and we'll talk it through.
                </p>
              </div>

              {/* search (visual only) */}
              <div>
                <div
                  role="search"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    background: "#FFFFFF",
                    border: "1px solid #E8E1D2",
                    borderRadius: "999px",
                    padding: "0.85rem 1.25rem",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
                  }}
                >
                  <Search
                    size={17}
                    style={{ color: "#9A938A", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    placeholder="Search guides — try funding or dementia"
                    aria-label="Search the knowledge hub"
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontSize: "0.92rem",
                      width: "100%",
                      color: "#1C1C1E",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    marginTop: "0.9rem",
                  }}
                >
                  {topics.map((t) => (
                    <button
                      key={t.label}
                      type="button"
                      className="kh-topic-chip"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.78rem",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "999px",
                        border: "1px solid #E8E1D2",
                        background: "#FFFFFF",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ color: "#3A352D" }}>{t.label}</span>
                      <span style={{ color: "#9A938A", fontSize: "0.74rem" }}>
                        {t.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MAIN CONTENT + SIDEBAR ============ */}
        <section style={{ padding: "0 1.5rem 6rem" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) 300px",
              gap: "3.5rem",
              alignItems: "start",
            }}
          >
            {/* -------- Main column -------- */}
            <div style={{ minWidth: 0 }}>
              {/* Featured article */}
              <Link
                href={featured.href}
                aria-label={`Read guide: ${featured.title}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  marginBottom: "3.5rem",
                  minHeight: "460px",
                }}
                className="kh-card"
              >
                <div
                  className="kh-img-zoom"
                  style={{ position: "absolute", inset: 0 }}
                >
                  <img
                    src={featured.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(13,61,56,0.15) 0%, rgba(13,61,56,0.55) 55%, rgba(10,30,27,0.92) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "2.75rem",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    minHeight: "460px",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        background: "rgba(255,255,255,0.16)",
                        color: "#FAF7F0",
                        padding: "0.35rem 0.8rem",
                        borderRadius: "999px",
                      }}
                    >
                      Featured guide
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(250,247,240,0.7)",
                      }}
                    >
                      {featured.readTime}
                    </span>
                  </div>
                  <h3
                    className="kh-serif"
                    style={{
                      fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                      fontWeight: 500,
                      color: "#FAF7F0",
                      lineHeight: 1.12,
                      maxWidth: "620px",
                      marginBottom: "0.9rem",
                    }}
                  >
                    {featured.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.98rem",
                      lineHeight: 1.7,
                      color: "rgba(250,247,240,0.82)",
                      maxWidth: "560px",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <span
                    className="kh-featured-cta"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      background: "rgba(255,255,255,0.95)",
                      color: "#0D3D38",
                      padding: "0.85rem 1.5rem",
                      borderRadius: "999px",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      width: "fit-content",
                    }}
                  >
                    Read the guide <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Article grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                  gap: "1.75rem",
                }}
              >
                {articles.map((article, i) => {
                  const Icon = article.icon;
                  return (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="kh-card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textDecoration: "none",
                        background: i % 2 === 0 ? "#FFFFFF" : "#EEF5F3",
                        border: "1px solid #E8E1D2",
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="kh-img-zoom"
                        style={{ aspectRatio: "16/10", overflow: "hidden" }}
                      >
                        <img
                          src={article.image}
                          alt=""
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
                          padding: "1.5rem",
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            marginBottom: "0.85rem",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              letterSpacing: "0.03em",
                              color: "#5B2E63",
                              background: "#F3EEE3",
                              padding: "0.3rem 0.7rem",
                              borderRadius: "999px",
                            }}
                          >
                            <Icon size={12} /> {article.category}
                          </span>
                          <span
                            style={{ fontSize: "0.76rem", color: "#9A938A" }}
                          >
                            {article.readTime}
                          </span>
                        </div>
                        <h3
                          className="kh-serif"
                          style={{
                            fontSize: "1.18rem",
                            fontWeight: 600,
                            color: "#1C1C1E",
                            lineHeight: 1.3,
                            marginBottom: "0.6rem",
                          }}
                        >
                          {article.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.86rem",
                            lineHeight: 1.65,
                            color: "#6E6E73",
                            marginBottom: "1.25rem",
                            flex: 1,
                          }}
                        >
                          {article.excerpt}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              color: "#0D3D38",
                            }}
                          >
                            Read guide
                          </span>
                          <span
                            className="kh-arrow-btn"
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "#F3EEE3",
                              color: "#0D3D38",
                            }}
                          >
                            <ArrowUpRight size={15} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* -------- Sidebar -------- */}
            <aside
              style={{
                position: "sticky",
                top: "6.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8E1D2",
                  borderRadius: "18px",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1.1rem",
                  }}
                >
                  <Compass size={16} style={{ color: "#5B2E63" }} />
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#1C1C1E",
                    }}
                  >
                    Browse by topic
                  </span>
                </div>
                <nav
                  aria-label="Browse guides by topic"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {topics.map((t) => (
                    <a
                      key={t.label}
                      href="#"
                      className="kh-sidebar-link"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.87rem",
                        color: "#3A352D",
                        textDecoration: "none",
                      }}
                    >
                      <span>{t.label}</span>
                      <span style={{ color: "#9A938A" }}>{t.count}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8E1D2",
                  borderRadius: "18px",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#1C1C1E",
                    marginBottom: "1.1rem",
                  }}
                >
                  Quick links
                </div>
                <nav
                  aria-label="Quick links"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                  }}
                >
                  {[
                    {
                      label: "St John's Nursing Home",
                      href: "/our-homes/st-johns-nursing-home",
                    },
                    {
                      label: "Gibson's Lodge Nursing Home",
                      href: "/our-homes/gibsons-lodge-nursing-home",
                    },
                    {
                      label: "Read family testimonials",
                      href: "/testimonials",
                    },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="kh-sidebar-link"
                      style={{
                        fontSize: "0.87rem",
                        color: "#3A352D",
                        textDecoration: "none",
                      }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8E1D2",
                  borderRadius: "18px",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.9rem",
                  }}
                >
                  <Download size={16} style={{ color: "#5B2E63" }} />
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#1C1C1E",
                    }}
                  >
                    Downloadable resources
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#6E6E73",
                    lineHeight: 1.6,
                  }}
                >
                  We're putting together printable versions of our most-read
                  guides. Call our team if you'd like a paper copy posted to you
                  in the meantime.
                </p>
              </div>

              <div
                style={{
                  background: "#0D3D38",
                  borderRadius: "18px",
                  padding: "1.75rem",
                  color: "#FAF7F0",
                }}
              >
                <div
                  className="kh-serif"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "0.6rem",
                  }}
                >
                  Speak to our team
                </div>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "rgba(250,247,240,0.75)",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  Have a question that isn't covered here? We're happy to talk
                  it through.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}
                >
                  <a
                    href="tel:02086883053"
                    className="kh-link-underline"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "#FAF7F0",
                      fontSize: "0.86rem",
                    }}
                  >
                    <Phone size={14} style={{ color: "#E8A77E" }} /> 020 8688
                    3053
                  </a>
                  <a
                    href="mailto:info@primecaregroup.co.uk"
                    className="kh-link-underline"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "#FAF7F0",
                      fontSize: "0.86rem",
                    }}
                  >
                    <Mail size={14} style={{ color: "#E8A77E" }} />{" "}
                    info@primecaregroup.co.uk
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
