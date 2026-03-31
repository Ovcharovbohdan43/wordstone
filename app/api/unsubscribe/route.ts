import { NextResponse } from "next/server";

import { createWaitlistClient } from "@/lib/supabase/admin";
import { verifyUnsubscribeToken } from "@/lib/email/unsubscribe";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(raw: string | null): string | null {
  if (!raw) return null;
  const email = raw.trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) return null;
  return email;
}

async function unsubscribeByEmail(email: string, source: "link" | "one_click") {
  const supabase = createWaitlistClient();
  const { error } = await supabase
    .from("waitlist_emails")
    .update({
      unsubscribed_at: new Date().toISOString(),
      unsubscribe_source: source,
    })
    .eq("email", email);

  if (error) {
    console.error("[unsubscribe]", error.message);
    throw new Error("unsubscribe_failed");
  }
}

function isTokenValid(email: string, token: string | null): boolean {
  const secret = process.env.UNSUBSCRIBE_SECRET?.trim();
  if (!secret) return true;
  if (!token) return false;
  return verifyUnsubscribeToken(email, token, secret);
}

function htmlResponse(status: "success" | "invalid" | "error") {
  const content =
    status === "success"
      ? {
          title: "You are unsubscribed",
          text: "You will no longer receive waitlist emails from Wordstone.",
        }
      : status === "invalid"
        ? {
            title: "Invalid unsubscribe link",
            text: "The unsubscribe link is invalid or expired.",
          }
        : {
            title: "Something went wrong",
            text: "Please try again later or contact support@wordstone.space.",
          };

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${content.title} | Wordstone</title>
  </head>
  <body style="margin:0;padding:0;background:#0b0b0f;color:#f4f4f5;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;">
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;">
      <div style="max-width:520px;width:100%;background:#18181b;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px;">
        <h1 style="margin:0 0 12px 0;font-size:28px;line-height:1.2;">${content.title}</h1>
        <p style="margin:0 0 20px 0;color:#a1a1aa;font-size:16px;line-height:1.6;">${content.text}</p>
        <p style="margin:0;font-size:13px;color:#71717a;">
          <a href="https://wordstone.space/" style="color:#a1a1aa;text-decoration:underline;">wordstone.space</a>
        </p>
      </div>
    </div>
  </body>
</html>`;

  return new NextResponse(html, {
    status: status === "success" ? 200 : status === "invalid" ? 400 : 500,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const email = normalizeEmail(url.searchParams.get("email"));
    const token = url.searchParams.get("token");
    if (!email || !isTokenValid(email, token)) return htmlResponse("invalid");

    await unsubscribeByEmail(email, "link");
    return htmlResponse("success");
  } catch (error) {
    console.error("[unsubscribe] GET", error);
    return htmlResponse("error");
  }
}

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    let email = normalizeEmail(url.searchParams.get("email"));
    let token = url.searchParams.get("token");

    const contentType = request.headers.get("content-type") || "";
    if (!email && contentType.includes("application/x-www-form-urlencoded")) {
      const body = await request.text();
      const form = new URLSearchParams(body);
      email = normalizeEmail(form.get("email"));
      token = token || form.get("token");
    }

    if (!email || !isTokenValid(email, token)) {
      return new NextResponse("", { status: 400 });
    }

    await unsubscribeByEmail(email, "one_click");
    return new NextResponse("", { status: 202 });
  } catch (error) {
    console.error("[unsubscribe] POST", error);
    return new NextResponse("", { status: 500 });
  }
}
