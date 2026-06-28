import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  CreditCard,
  Heart,
  FileText,
  ShieldAlert,
  Sparkles,
  BookOpenText,
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

        .kh-featured-cta { transition: gap 0.25s ease, background 0.25s ease; }
        .kh-featured-cta:hover { gap: 0.85rem; background: #0A2F2B; }

        .kh-reveal {
          opacity: 0; transform: translateY(16px);
          animation: khFadeUp 0.7s ease forwards;
        }
        @keyframes khFadeUp { to { opacity: 1; transform: translateY(0); } }

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

        {/* ============ WHERE TO START (centred editorial) ============ */}
        <section
          style={{
            padding: "6rem 1.5rem 5rem",
            background: "#FAF7F0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "1px",
              height: "64px",
              background: "linear-gradient(180deg, transparent, #D8CFE0)",
            }}
          />
          <div
            style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#5B2E63",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "1px",
                  background: "#5B2E63",
                  display: "inline-block",
                }}
              />
              Where to start
              <span
                style={{
                  width: "20px",
                  height: "1px",
                  background: "#5B2E63",
                  display: "inline-block",
                }}
              />
            </div>

            <h2
              className="kh-serif"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.7rem)",
                fontWeight: 500,
                color: "#0D3D38",
                lineHeight: 1.18,
                marginBottom: "1.5rem",
              }}
            >
              Five guides, written by people
              <br />
              who actually answer the phone.
            </h2>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.85,
                color: "#4A453E",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Every guide below comes from questions our own families have asked
              us — about dementia care, paying for a place, legal planning, and
              keeping residents safe. Read at your own pace, or call and we'll
              talk it through.
            </p>

            <div
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                marginTop: "2.5rem",
                color: "#A88FAE",
              }}
            >
              <BookOpenText size={18} />
            </div>
          </div>
        </section>

        {/* ============ MAIN CONTENT ============ */}
        <section style={{ padding: "0 1.5rem 6rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
            {/* Article grid — featured card sits first, same size as the rest */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                gap: "1.75rem",
              }}
            >
              {/* Featured article */}
              <Link
                href={featured.href}
                aria-label={`Read guide: ${featured.title}`}
                className="kh-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  position: "relative",
                  background: "#0D3D38",
                  border: "1px solid #0D3D38",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div
                  className="kh-img-zoom"
                  style={{
                    aspectRatio: "16/10",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={featured.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(13,61,56,0) 0%, rgba(13,61,56,0.25) 70%, rgba(10,30,27,0.7) 100%)",
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
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                        textTransform: "uppercase",
                        background: "rgba(255,255,255,0.14)",
                        color: "#FAF7F0",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "999px",
                      }}
                    >
                      Featured guide
                    </span>
                    <span
                      style={{
                        fontSize: "0.76rem",
                        color: "rgba(250,247,240,0.65)",
                      }}
                    >
                      {featured.readTime}
                    </span>
                  </div>
                  <h3
                    className="kh-serif"
                    style={{
                      fontSize: "1.18rem",
                      fontWeight: 600,
                      color: "#FAF7F0",
                      lineHeight: 1.3,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {featured.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.86rem",
                      lineHeight: 1.65,
                      color: "rgba(250,247,240,0.78)",
                      marginBottom: "1.25rem",
                      flex: 1,
                    }}
                  >
                    {featured.excerpt}
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
                        color: "#FAF7F0",
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
                        background: "rgba(255,255,255,0.14)",
                        color: "#FAF7F0",
                      }}
                    >
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>

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
                        <span style={{ fontSize: "0.76rem", color: "#9A938A" }}>
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
        </section>
      </div>
    </>
  );
}
