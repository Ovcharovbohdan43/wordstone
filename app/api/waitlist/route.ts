import { NextResponse } from "next/server";

import { sendWaitlistConfirmationEmail } from "@/lib/email/waitlist-confirmation";
import { createWaitlistClient } from "@/lib/supabase/admin";

const EMAIL_MAX = 254;
const EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim().toLowerCase();
  if (!trimmed || trimmed.length > EMAIL_MAX) return null;
  if (!EMAIL_RE.test(trimmed)) return null;
  return trimmed;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const email =
    body &&
    typeof body === "object" &&
    "email" in body
      ? normalizeEmail((body as { email: unknown }).email)
      : null;

  if (!email) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const supabase = createWaitlistClient();
    const { error } = await supabase.from("waitlist_emails").insert({ email });

    if (error) {
      // Unique violation: email already registered — same success UX, no leak
      if (error.code === "23505") {
        return NextResponse.json({
          ok: true,
          duplicate: true,
          emailSent: false,
        });
      }
      console.error("[waitlist]", error.message);
      return NextResponse.json(
        { ok: false, error: "Something went wrong. Please try again." },
        { status: 500 },
      );
    }

    const emailResult = await sendWaitlistConfirmationEmail(email);

    return NextResponse.json({
      ok: true,
      duplicate: false,
      emailSent: emailResult.sent,
      ...(emailResult.sent === false
        ? {
            emailIssue:
              emailResult.reason === "no_api_key" ? "no_api_key" : "resend",
          }
        : {}),
    });
  } catch (e) {
    if (
      e instanceof Error &&
      (e.message.includes("Missing NEXT_PUBLIC") ||
        e.message.includes("Supabase key"))
    ) {
      console.error("[waitlist] Supabase env not configured");
      return NextResponse.json(
        { ok: false, error: "Server is not configured. Try again later." },
        { status: 503 },
      );
    }
    console.error("[waitlist]", e);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
