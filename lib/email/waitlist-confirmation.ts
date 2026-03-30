import { readFile } from "fs/promises";
import path from "path";

import { Resend } from "resend";

const LOGO_CID = "wordstone-logo";
const LOGO_FILENAME = "wordstone-logo.png";

export type WaitlistEmailResult =
  | { sent: true; messageId?: string }
  | {
      sent: false;
      reason: "no_api_key" | "resend_error";
      detail?: string;
    };

/**
 * Sends a confirmation email after a new waitlist signup via Resend.
 * If RESEND_API_KEY is missing, logs a warning and returns sent:false (signup still succeeds).
 * Does not throw — callers should not fail the HTTP response if email fails.
 */
export async function sendWaitlistConfirmationEmail(
  to: string,
): Promise<WaitlistEmailResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn(
      "[waitlist] RESEND_API_KEY is not set; skipping confirmation email",
    );
    return { sent: false, reason: "no_api_key" };
  }

  const from =
    process.env.RESEND_FROM?.trim() || "Wordstone <onboarding@resend.dev>";
  const replyTo = process.env.RESEND_REPLY_TO?.trim();

  const subject = "You're in — welcome to Wordstone";

  const text = [
    "Hey,",
    "",
    "You're in. Welcome to Wordstone.",
    "",
    "You're now on the early access list — which means you'll be among the first to try a completely different way of learning a language.",
    "",
    "Most people try to memorize words and rules.",
    "It feels productive, but it rarely works long-term.",
    "",
    "Wordstone is built on a different idea:",
    "",
    "→ You don't memorize.",
    "→ You understand.",
    "",
    "Instead of switching between apps, translating every word, and losing the flow — you stay inside the story and learn naturally.",
    "",
    "That's what we're building.",
    "",
    "---",
    "",
    "Right now, we're preparing the first version for early users.",
    "",
    "When it's ready, you'll get access before everyone else.",
    "",
    "---",
    "",
    "Quick question (just reply to this email):",
    "",
    "What's your biggest struggle when trying to read in English?",
    "",
    "I read every reply — and it helps shape the product.",
    "",
    "---",
    "",
    "Talk soon,",
    "Wordstone",
    "",
    "P.S. You're early. We'll keep it that way.",
  ].join("\n");

  let logoBuffer: Buffer | null = null;
  try {
    const logoPath = path.join(
      process.cwd(),
      "public",
      "email",
      LOGO_FILENAME,
    );
    logoBuffer = await readFile(logoPath);
  } catch {
    console.warn(
      `[waitlist] Logo not found at public/email/${LOGO_FILENAME}; sending email without image`,
    );
  }

  const logoBlock = logoBuffer
    ? `<div style="margin:0 0 28px 0;">
  <img src="cid:${LOGO_CID}" alt="Wordstone" width="200" style="display:block;max-width:200px;height:auto;border:0;" />
</div>`
    : `<p style="margin:0 0 24px 0;font-size:22px;font-weight:600;color:#111;">Wordstone</p>`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#f6f6f6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f6f6;padding:24px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:12px;padding:32px 28px;font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:16px;line-height:1.65;color:#1a1a1a;">
          <tr>
            <td>
              ${logoBlock}
              <p style="margin:0 0 16px 0;">Hey,</p>
              <p style="margin:0 0 16px 0;"><strong>You're in. Welcome to Wordstone.</strong></p>
              <p style="margin:0 0 16px 0;">You're now on the early access list — which means you'll be among the first to try a completely different way of learning a language.</p>
              <p style="margin:0 0 8px 0;">Most people try to memorize words and rules.<br />It feels productive, but it rarely works long-term.</p>
              <p style="margin:20px 0 12px 0;">Wordstone is built on a different idea:</p>
              <p style="margin:0 0 6px 0;">→ You don't memorize.<br />→ You understand.</p>
              <p style="margin:16px 0 16px 0;">Instead of switching between apps, translating every word, and losing the flow — you stay inside the story and learn naturally.</p>
              <p style="margin:0 0 24px 0;">That's what we're building.</p>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;" />
              <p style="margin:0 0 12px 0;">Right now, we're preparing the first version for early users.</p>
              <p style="margin:0 0 24px 0;">When it's ready, you'll get access before everyone else.</p>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;" />
              <p style="margin:0 0 8px 0;">Quick question (just reply to this email):</p>
              <p style="margin:0 0 16px 0;font-size:18px;">👉 What's your biggest struggle when trying to read in English?</p>
              <p style="margin:0 0 24px 0;">I read every reply — and it helps shape the product.</p>
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;" />
              <p style="margin:0 0 4px 0;">Talk soon,<br /><strong>Wordstone</strong></p>
              <p style="margin:20px 0 0 0;font-size:14px;color:#555;">P.S. You're early. We'll keep it that way.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject,
    text,
    html,
    tags: [{ name: "category", value: "waitlist" }],
    ...(replyTo ? { replyTo } : {}),
    ...(logoBuffer
      ? {
          attachments: [
            {
              filename: LOGO_FILENAME,
              content: logoBuffer,
              contentId: LOGO_CID,
            },
          ],
        }
      : {}),
  });

  if (error) {
    const detail =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message: unknown }).message)
        : String(error);
    console.error("[waitlist] Resend error:", JSON.stringify(error));
    return { sent: false, reason: "resend_error", detail };
  }

  if (data?.id) {
    console.log("[waitlist] Resend email queued:", data.id, "→", to);
  }
  return { sent: true, messageId: data?.id };
}
