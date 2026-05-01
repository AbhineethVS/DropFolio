import Anthropic from "@anthropic-ai/sdk";

const CLAUDE_MODEL = "claude-sonnet-4-20250514";

let anthropicClient;

function getAnthropicClient() {
  if (anthropicClient) return anthropicClient;

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not configured.");
  }

  anthropicClient = new Anthropic({ apiKey });
  return anthropicClient;
}

function getTextContentFromMessage(message) {
  if (!Array.isArray(message?.content)) return "";

  return message.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n");
}

function parseClaudeJson(text) {
  const normalized = text.trim();

  try {
    return JSON.parse(normalized);
  } catch {
    // Fall through to fenced/raw-object parsing.
  }

  const fencedMatch = normalized.match(/```json\s*([\s\S]*?)\s*```/i);
  if (fencedMatch?.[1]) {
    return JSON.parse(fencedMatch[1]);
  }

  const firstBrace = normalized.indexOf("{");
  const lastBrace = normalized.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1 || firstBrace >= lastBrace) {
    throw new Error("Claude response did not contain valid JSON.");
  }

  const objectCandidate = normalized.slice(firstBrace, lastBrace + 1);
  return JSON.parse(objectCandidate);
}

function coerceToRawShape(rawValue, polishedValue) {
  if (Array.isArray(rawValue)) {
    const incoming = Array.isArray(polishedValue) ? polishedValue : [];
    return rawValue.map((item, index) => coerceToRawShape(item, incoming[index]));
  }

  if (rawValue && typeof rawValue === "object") {
    const incoming = polishedValue && typeof polishedValue === "object" ? polishedValue : {};

    return Object.keys(rawValue).reduce((acc, key) => {
      acc[key] = coerceToRawShape(rawValue[key], incoming[key]);
      return acc;
    }, {});
  }

  if (typeof rawValue === "string") {
    return typeof polishedValue === "string" ? polishedValue.trim() : rawValue;
  }

  if (typeof rawValue === "boolean") {
    return typeof polishedValue === "boolean" ? polishedValue : rawValue;
  }

  if (typeof rawValue === "number") {
    return Number.isFinite(polishedValue) ? polishedValue : rawValue;
  }

  return rawValue;
}

export async function polishPortfolioData(rawData) {
  if (!rawData || typeof rawData !== "object" || Array.isArray(rawData)) {
    throw new Error("Invalid rawData payload for Claude polishing.");
  }

  const client = getAnthropicClient();

  const response = await client.messages.create({
    model: CLAUDE_MODEL,
    max_tokens: 3500,
    temperature: 0.2,
    system:
      "You are an expert portfolio writing assistant for CS/IT students. Rewrite text to sound clear, concise, professional, and impact-oriented while keeping facts unchanged. Return JSON only.",
    messages: [
      {
        role: "user",
        content: `Rewrite the following portfolio JSON while preserving the exact same structure and keys.

Rules:
- Return only valid JSON (no markdown, no explanation).
- Keep every key from the input JSON.
- Keep arrays at the same length and order.
- Do not invent achievements, metrics, awards, links, or technologies.
- Improve writing quality for bio, title, project descriptions, and honor descriptions.
- Keep URLs and email values unchanged.

Input JSON:
${JSON.stringify(rawData, null, 2)}`,
      },
    ],
  });

  const rawText = getTextContentFromMessage(response);
  const parsed = parseClaudeJson(rawText);

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Claude response JSON is not an object.");
  }

  return coerceToRawShape(rawData, parsed);
}
