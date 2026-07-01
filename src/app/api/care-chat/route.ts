import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const MODEL = process.env.OPENAI_MODEL?.trim() || "gpt-4o";

const SYSTEM_PROMPT = `You are PrimeCare AI, a warm and knowledgeable care advisor for Prime Care Group — a small, family-run provider of nursing and residential care with two homes in South London.

ABOUT PRIME CARE GROUP:
- Founded just over 30 years ago by Nizar Baloo, who set up the first home in Sutton after struggling to find homely local care for his own elderly relative.
- Today Prime Care Group operates two homes: St John's Nursing Home (129 Haling Park Road, South Croydon CR2 6NN, 58 beds, 48 single rooms + 5 shared rooms, 18 with en-suite WC) and Gibson's Lodge Nursing Home (Gibson's Hill, Streatham, London SW16 3ES, 52 beds, 41 single + 6 shared, 31 en-suite).
- Care types offered across both homes: Nursing Care, Residential Care, Dementia Care, Respite Care, Palliative/End of Life Care. Gibson's Lodge also specialises in complex mental health conditions and challenging behaviour.
- Both homes are CQC registered, intentionally small, and pride themselves on person-centred care, home-cooked meals, daily activities, and family involvement with no fixed visiting hours.
- Contact: St John's 020 8688 3053, Gibson's Lodge 020 8670 4098, general enquiries via the Contact Us page.

GUIDELINES:
- Be warm, empathetic, and conversational — like a knowledgeable friend, not a corporate chatbot.
- Help people understand the difference between care types (residential vs nursing vs dementia vs respite) in plain language.
- Where relevant, naturally point toward Prime Care Group's two homes and their specific strengths.
- NEVER give medical advice or diagnose. If asked something clinical, gently redirect toward speaking with a GP or the home's nursing team.
- If asked about exact pricing, explain that costs vary by care type, room and funding route, and encourage them to contact the team directly or read the Paying for Care guide on the website — do not invent specific numbers.
- Keep answers concise and easy to read — short paragraphs, no walls of text. Use a friendly, human tone.
- If you don't know something specific to Prime Care Group, say so honestly rather than inventing details.
- Always end with a natural next step where appropriate (e.g. suggesting a call, a visit, or a relevant page).`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function buildFallbackReply(messages: ChatMessage[]) {
  const latestUserMessage =
    [...messages].reverse().find((message) => message.role === "user")
      ?.content ?? "";
  const query = latestUserMessage.toLowerCase();

  if (
    query.includes("cost") ||
    query.includes("price") ||
    query.includes("pay")
  ) {
    return "Costs can vary depending on the level of care, room type and funding route. The best next step is to speak to our team directly so we can guide you through the options.";
  }

  if (query.includes("home") || query.includes("which")) {
    return "We offer residential and nursing care across St John's and Gibson's Lodge. The best next step is to contact our team directly so we can help you find the right home for your family.";
  }

  if (query.includes("dementia")) {
    return "We can talk you through the support available for dementia care, and our team can help you understand which setting would feel most comfortable and suitable.";
  }

  return "I’m here to help with questions about care options, home suitability and next steps. If you’d like a more personal conversation, please contact our team directly.";
}

function isValidMessages(value: unknown): value is ChatMessage[] {
  if (!Array.isArray(value)) return false;
  return value.every(
    (m) =>
      typeof m === "object" &&
      m !== null &&
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim().length > 0,
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: "Malformed request",
        message: "Request body must be valid JSON",
      },
      { status: 400 },
    );
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("messages" in body) ||
    !isValidMessages((body as { messages: unknown }).messages)
  ) {
    return NextResponse.json(
      {
        error: "Malformed request",
        message: "Request must include a non-empty 'messages' array",
      },
      { status: 400 },
    );
  }

  const { messages } = body as { messages: ChatMessage[] };

  if (!process.env.OPENAI_API_KEY?.trim()) {
    console.warn("[care-chat] OPENAI_API_KEY is not set, using fallback reply");
    return NextResponse.json(
      { reply: buildFallbackReply(messages), fallback: true },
      { status: 200 },
    );
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: MODEL,
      max_tokens: 600,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    });

    const reply = completion.choices[0]?.message?.content ?? "";

    if (!reply) {
      console.warn(
        "[care-chat] OpenAI returned an empty response, using fallback reply",
      );
      return NextResponse.json(
        { reply: buildFallbackReply(messages), fallback: true },
        { status: 200 },
      );
    }

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("[care-chat] Unexpected error:", error);
    return NextResponse.json(
      {
        reply: buildFallbackReply(messages),
        fallback: true,
      },
      { status: 200 },
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Care Chat API is running" },
    { status: 200 },
  );
}
