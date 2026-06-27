"use client";

import Link from "next/link";
import { X as XIcon, Mail, Globe, Camera } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: XIcon, href: "#", label: "X (Twitter)" },
    { icon: Mail, href: "mailto:info@primecaregroup.co.uk", label: "Email" },
    { icon: Globe, href: "#", label: "LinkedIn" },
    { icon: Camera, href: "#", label: "Instagram" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Sitemap", href: "/sitemap" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer style={{ background: "#0A5A56", color: "#ffffff" }}>
      {/* Row 1: Social icons and navigation */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            padding: "40px 0",
          }}
        >
          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    color: "#ffffff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 200ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Icon size={20} strokeWidth={1.75} />
                  <span
                    style={{
                      position: "absolute",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                      clip: "rect(0,0,0,0)",
                    }}
                  >
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Navigation links */}
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.15)" }} />

      {/* Row 2: Copyright and legal */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "28px 0",
          }}
        >
          {/* Copyright */}
          <p
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.75)",
              margin: 0,
            }}
          >
            &copy;{new Date().getFullYear()} Prime Care Group. All rights
            reserved.
          </p>

          {/* Right side */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "6px 20px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <p style={{ margin: 0 }}>
              We use cookies on this website — find out more{" "}
              <a
                href="/privacy-policy"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "underline",
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
              >
                here
              </a>
              .
            </p>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
            <p style={{ margin: 0 }}>
              Website by{" "}
              <a
                href="#"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "underline",
                  fontWeight: 500,
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
              >
                Promise Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
