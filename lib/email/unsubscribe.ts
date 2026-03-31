import { createHmac, timingSafeEqual } from "crypto";

const TOKEN_DELIMITER = ".";

function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

function toBase64Url(input: Buffer | string): string {
  const buffer = typeof input === "string" ? Buffer.from(input, "utf8") : input;
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64Url(input: string): Buffer {
  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  const padding = (4 - (normalized.length % 4)) % 4;
  return Buffer.from(normalized + "=".repeat(padding), "base64");
}

function signPayload(payload: string, secret: string): string {
  return toBase64Url(createHmac("sha256", secret).update(payload).digest());
}

export function buildUnsubscribeToken(email: string, secret: string): string {
  const normalizedEmail = normalizeEmail(email);
  const payload = toBase64Url(normalizedEmail);
  const signature = signPayload(payload, secret);
  return `${payload}${TOKEN_DELIMITER}${signature}`;
}

export function verifyUnsubscribeToken(
  email: string,
  token: string,
  secret: string,
): boolean {
  const [payload, providedSignature] = token.split(TOKEN_DELIMITER);
  if (!payload || !providedSignature) return false;

  const expectedPayload = toBase64Url(normalizeEmail(email));
  if (payload !== expectedPayload) return false;

  const expectedSignature = signPayload(payload, secret);
  const expectedBuf = fromBase64Url(expectedSignature);
  const providedBuf = fromBase64Url(providedSignature);

  if (expectedBuf.length !== providedBuf.length) return false;
  return timingSafeEqual(expectedBuf, providedBuf);
}
