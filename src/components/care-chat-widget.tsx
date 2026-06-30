"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { CareChatInterface } from "./care-chat-interface";

export function CareChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open care advisor chat"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 40,
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 20px",
            borderRadius: "999px",
            border: "none",
            background: "linear-gradient(135deg, #0D9488, #0a7a6e)",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(13,148,136,0.35)",
            transition: "transform 200ms ease, box-shadow 200ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
            e.currentTarget.style.boxShadow =
              "0 12px 32px rgba(13,148,136,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
              "0 8px 24px rgba(13,148,136,0.35)";
          }}
        >
          <MessageCircle size={19} />
          <span className="hidden sm:inline">Need Help Finding Care?</span>
        </button>
      )}

      {/* Backdrop + Drawer */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 40,
            }}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "420px",
              background: "#ffffff",
              boxShadow: "-8px 0 40px rgba(0,0,0,0.2)",
              zIndex: 50,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #0D9488, #0a7a6e)",
                padding: "20px 24px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: "0 0 4px",
                  }}
                >
                  PrimeCare AI
                </h2>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.85)",
                    margin: 0,
                  }}
                >
                  Find the right care for your family
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "none",
                  borderRadius: "10px",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#ffffff",
                  flexShrink: 0,
                  transition: "background 200ms ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.25)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
                }
              >
                <X size={17} />
              </button>
            </div>

            {/* Chat */}
            <div style={{ flex: 1, minHeight: 0 }}>
              <CareChatInterface compact />
            </div>
          </div>
        </>
      )}
    </>
  );
}
