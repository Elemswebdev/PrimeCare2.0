"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { X as XIcon, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

const quickLinks = [
  {
    heading: "About Us",
    links: [
      { label: "About Prime Care Group", href: "/about-prime-care-group" },
      { label: "Our Team", href: "/our-team" },
      {
        label: "Recent Events",
        href: "/about-prime-care-group/our-recent-events",
      },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Our Homes",
    links: [
      { label: "Our Homes Overview", href: "/our-homes" },
      {
        label: "St John's Nursing Home",
        href: "/our-homes/st-johns-nursing-home",
      },
      {
        label: "Gibson's Lodge Nursing Home",
        href: "/our-homes/gibsons-lodge-nursing-home",
      },
    ],
  },
  {
    heading: "Knowledge Hub",
    links: [
      { label: "Dementia Care Guide", href: "/knowledge-hub/dementia" },
      { label: "Paying for Care", href: "/knowledge-hub/paying-for-care" },
      {
        label: "Lasting Power of Attorney",
        href: "/knowledge-hub/making-a-lasting-power-of-attorney",
      },
    ],
  },
];

const homes = [
  {
    name: "St John's Nursing Home",
    address: "129 Haling Park Road",
    city: "South Croydon CR2 6NN",
    phone: "020 8688 3053",
    tel: "02086883053",
  },
  {
    name: "Gibson's Lodge Nursing Home",
    address: "Gibson's Hill",
    city: "London SW16 3ES",
    phone: "020 8670 4098",
    tel: "02086704098",
  },
];

const socialLinks = [
  {
    icon: XIcon,
    href: "https://twitter.com/PrimeCareGroup_",
    label: "X (Twitter)",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/prime-care-group/",
    label: "LinkedIn",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/primecaregroup/",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:info@primecaregroup.co.uk", label: "Email" },
];

const legalLinks = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#083D3A", color: "#ffffff" }}>
      {/* ── TOP BAND: Book a visit CTA ────────────────────────────── */}
      <div style={{ background: "#6B1F8A", padding: "28px 24px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 4px",
                fontFamily:
                  "var(--font-display,'Plus Jakarta Sans',sans-serif)",
              }}
            >
              Ready to arrange a visit?
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.8)",
                margin: 0,
              }}
            >
              We&apos;d love to show you around one of our homes.
            </p>
          </div>
          <Link
            href="/contact-us"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              borderRadius: "999px",
              background: "#ffffff",
              color: "#6B1F8A",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 200ms ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F5EEF9";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book a Visit <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ─────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "var(--footer-cols, 1fr)",
            gap: "48px",
          }}
        >
          <style>{`
            @media(min-width:768px){ :root{ --footer-cols: 1.4fr 1fr 1fr 1fr; } }
          `}</style>

          {/* ── Col 1: Logo + About + Social ── */}
          <div>
            {/* Logo */}
            <Link
              href="/"
              style={{ display: "inline-block", marginBottom: "20px" }}
            >
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/11/Prime_Care_Group_Residentia_and_nursing_care_homes-2.svg"
                alt="Prime Care Group"
                style={{ height: "48px", filter: "brightness(0) invert(1)" }}
              />
            </Link>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.65)",
                marginBottom: "28px",
                maxWidth: "260px",
              }}
            >
              Providing exceptional nursing and residential care across two
              homes in South London — with a truly personal touch.
            </p>

            {/* Contact quick links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "28px",
              }}
            >
              {homes.map((home) => (
                <div key={home.name}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#45C9B8",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      margin: "0 0 4px",
                    }}
                  >
                    {home.name}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginBottom: "2px",
                    }}
                  >
                    <MapPin
                      size={12}
                      style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {home.address}, {home.city}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Phone
                      size={12}
                      style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}
                    />
                    <a
                      href={`tel:${home.tel}`}
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        transition: "color 150ms",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#ffffff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                      }
                    >
                      {home.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.7)",
                      transition: "all 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#0D9488";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderColor = "#0D9488";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.12)";
                    }}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Cols 2–4: Quick links ── */}
          {quickLinks.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#45C9B8",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "20px",
                }}
              >
                {col.heading}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        transition: "color 150ms ease",
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#ffffff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── DIVIDER ──────────────────────────────────────────────── */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.1)",
          margin: "0 24px",
        }}
      />

      {/* ── BOTTOM BAR ───────────────────────────────────────────── */}
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px 24px" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Prime Care Group. All rights
            reserved.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "6px 20px",
            }}
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                }
              >
                {link.label}
              </Link>
            ))}
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>
              •
            </span>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                margin: 0,
              }}
            >
              Website by{" "}
              <a
                href="https://elems-portfolio.vercel.app/"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "underline",
                  transition: "color 150ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                }
              >
                Elemswebdev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
