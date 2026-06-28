"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  {
    label: "About us",
    href: "/about-prime-care-group",
    children: [
      { label: "Our team", href: "/our-team" },
      {
        label: "Recent events",
        href: "/about-prime-care-group/our-recent-events",
      },
      { label: "What our residents and families say", href: "/testimonials" },
    ],
  },
  {
    label: "Our homes",
    href: "/our-homes",
    children: [
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
    label: "Knowledge Hub",
    href: "/knowledge-hub",
    children: [
      { label: "Dementia", href: "/knowledge-hub/dementia" },
      { label: "Paying for Care", href: "/knowledge-hub/paying-for-care" },
      {
        label: "Lasting Power of Attorney",
        href: "/knowledge-hub/making-a-lasting-power-of-attorney",
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact us", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  const keepOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
        style={{
          background: "#ffffff",
          boxShadow: isScrolled
            ? "0 2px 16px rgba(0,0,0,0.10)"
            : "0 1px 0 rgba(0,0,0,0.07)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pl-[76px] lg:pl-[76px]">
          <div className="flex items-end justify-between" style={{ height: '72px', paddingBottom: '16px' }}>

            {/* Logo */}
            <Link
              href="/"
              aria-label="Prime Care Group Home"
              className="flex-shrink-0"
              style={{ marginLeft: "76px" }}
            >
              <img
                src="/logo.svg"
                alt="Prime Care Group"
                style={{ height: "40px", width: "auto" }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center ml-auto" style={{ gap: '4px', marginBottom: '-4px' }}>
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                const isOpen = activeDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      item.children && openDropdown(item.label)
                    }
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 transition-colors duration-150"
                      style={{
                        color: "#5B1A8A",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        padding: "6px 14px",
                        borderBottom:
                          isActive || isOpen
                            ? "3px solid #5B1A8A"
                            : "3px solid transparent",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          size={14}
                          style={{
                            color: "#5B1A8A",
                            transform: isOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 200ms ease",
                            marginLeft: "1px",
                          }}
                        />
                      )}
                    </Link>

                    {/* Dropdown panel */}
                    {item.children && isOpen && (
                      <div
                        className="absolute left-0 top-full"
                        style={{ paddingTop: "2px", zIndex: 100 }}
                        onMouseEnter={keepOpen}
                        onMouseLeave={closeDropdown}
                      >
                        {/* Purple header accent bar */}
                        <div style={{ height: "6px", background: "#5B1A8A" }} />
                        <div
                          style={{
                            background: "#0D6B5E",
                            minWidth: "260px",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                          }}
                        >
                          {item.children.map((child, idx) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              style={{
                                display: "block",
                                padding: "14px 20px",
                                color: "#ffffff",
                                fontFamily: "Inter, system-ui, sans-serif",
                                fontSize: "15px",
                                fontWeight: 400,
                                textDecoration: "none",
                                borderBottom:
                                  idx < item.children!.length - 1
                                    ? "1px solid rgba(255,255,255,0.08)"
                                    : "none",
                                transition: "background 150ms ease",
                              }}
                              onMouseEnter={(e) => {
                                (
                                  e.currentTarget as HTMLAnchorElement
                                ).style.background = "rgba(255,255,255,0.1)";
                              }}
                              onMouseLeave={(e) => {
                                (
                                  e.currentTarget as HTMLAnchorElement
                                ).style.background = "transparent";
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center"
              style={{
                width: "40px",
                height: "40px",
                color: "#5B1A8A",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden"
            style={{
              background: "#ffffff",
              borderTop: "2px solid #5B1A8A",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <div style={{ padding: "16px 0 24px" }}>
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label,
                          )
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          padding: "13px 24px",
                          color: "#5B1A8A",
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "15px",
                          fontWeight: 600,
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          style={{
                            color: "#5B1A8A",
                            transform:
                              mobileExpanded === item.label
                                ? "rotate(180deg)"
                                : "rotate(0)",
                            transition: "transform 200ms ease",
                          }}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div style={{ background: "#0D6B5E" }}>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              style={{
                                display: "block",
                                padding: "13px 32px",
                                color: "#ffffff",
                                fontFamily: "Inter, system-ui, sans-serif",
                                fontSize: "14px",
                                fontWeight: 400,
                                textDecoration: "none",
                                borderBottom:
                                  "1px solid rgba(255,255,255,0.08)",
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "13px 24px",
                        color: "#5B1A8A",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
