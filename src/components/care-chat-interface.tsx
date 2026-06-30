"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const TEAL = "#0D9488";
const TEAL_DARK = "#0a7a6e";
const PURPLE = "#6B1F8A";
const STONE = "#E8E3DC";
const TEXT = "#1C1C1E";
const TEXT_MUTED = "#6E6E73";

const STARTER_PROMPTS = [
  "How do I know if Mum needs nursing care?",
  "What's the difference between residential and nursing care?",
  "How much does care cost?",
  "Which Prime Care home is right for us?",
];

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi, I'm PrimeCare AI 👋 I can help you understand the different types of care available and which of our homes — St John's or Gibson's Lodge — might be the right fit. What would you like to know?",
};

export function CareChatInterface({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/care-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      if (!response.ok) throw new Error("Request failed");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("[care-chat] Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again in a moment, or feel free to call us directly — St John's on 020 8688 3053 or Gibson's Lodge on 020 8670 4098.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
      }}
    >
      {/* Messages */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: compact ? "20px 20px 12px" : "24px 28px 12px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          minHeight: 0,
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: m.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            {m.role === "assistant" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "6px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={11} style={{ color: "#ffffff" }} />
                </div>
                <span
                  style={{ fontSize: "12px", fontWeight: 700, color: TEAL }}
                >
                  PrimeCare AI
                </span>
              </div>
            )}
            <div
              style={{
                maxWidth: "85%",
                padding: "12px 16px",
                borderRadius:
                  m.role === "user"
                    ? "16px 16px 4px 16px"
                    : "16px 16px 16px 4px",
                background: m.role === "user" ? PURPLE : "#F4F2F7",
                color: m.role === "user" ? "#ffffff" : TEXT,
                fontSize: "14px",
                lineHeight: 1.65,
                whiteSpace: "pre-wrap",
              }}
            >
              {m.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "6px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sparkles size={11} style={{ color: "#ffffff" }} />
              </div>
              <span style={{ fontSize: "12px", fontWeight: 700, color: TEAL }}>
                PrimeCare AI
              </span>
            </div>
            <div
              style={{
                padding: "14px 16px",
                borderRadius: "16px 16px 16px 4px",
                background: "#F4F2F7",
                display: "flex",
                gap: "5px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: TEAL,
                    animation: `bounceDot 1.2s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Starter prompt chips — only show before the conversation gets going */}
        {messages.length === 1 && !isLoading && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "4px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: TEXT_MUTED,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Try asking
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {STARTER_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  style={{
                    padding: "9px 14px",
                    borderRadius: "999px",
                    border: `1.5px solid ${STONE}`,
                    background: "#ffffff",
                    color: TEXT,
                    fontSize: "12.5px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 200ms ease",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = TEAL;
                    e.currentTarget.style.background = "#E6F7F6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = STONE;
                    e.currentTarget.style.background = "#ffffff";
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        style={{
          borderTop: `1px solid ${STONE}`,
          padding: compact ? "14px 20px" : "16px 28px",
          display: "flex",
          gap: "10px",
          alignItems: "flex-end",
          flexShrink: 0,
        }}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about care options, costs, our homes..."
          rows={1}
          style={{
            flex: 1,
            resize: "none",
            border: `1.5px solid ${STONE}`,
            borderRadius: "14px",
            padding: "11px 14px",
            fontSize: "14px",
            color: TEXT,
            outline: "none",
            fontFamily: "inherit",
            maxHeight: "100px",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = TEAL)}
          onBlur={(e) => (e.currentTarget.style.borderColor = STONE)}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          aria-label="Send message"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            border: "none",
            background: input.trim() && !isLoading ? TEAL : STONE,
            color: input.trim() && !isLoading ? "#ffffff" : TEXT_MUTED,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: input.trim() && !isLoading ? "pointer" : "not-allowed",
            flexShrink: 0,
            transition: "background 200ms ease",
          }}
        >
          {isLoading ? (
            <Loader2
              size={17}
              style={{ animation: "spin 1s linear infinite" }}
            />
          ) : (
            <Send size={16} />
          )}
        </button>
      </form>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounceDot { 0%, 60%, 100% { transform: translateY(0); opacity: 0.5; } 30% { transform: translateY(-4px); opacity: 1; } }
      `}</style>
    </div>
  );
}
