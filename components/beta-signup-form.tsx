"use client";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type BetaSignupFormProps = {
  submitLabel?: string;
  className?: string;
};

export function BetaSignupForm({
  submitLabel = "👉 Get Early Access",
  className,
}: BetaSignupFormProps) {
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailNote, setEmailNote] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");

    setPending(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const payload = (await res.json()) as {
        ok?: boolean;
        error?: string;
        duplicate?: boolean;
        emailSent?: boolean;
        emailIssue?: "no_api_key" | "resend";
      };

      if (!res.ok || !payload.ok) {
        setError(
          typeof payload.error === "string"
            ? payload.error
            : "Something went wrong. Please try again.",
        );
        return;
      }

      if (
        !payload.duplicate &&
        payload.emailSent === false &&
        payload.emailIssue
      ) {
        setEmailNote(
          payload.emailIssue === "no_api_key"
            ? "You are on the list, but the server has no RESEND_API_KEY — confirmation email was not sent."
            : "You are on the list, but the confirmation email could not be sent. Check spam; with Resend test sender you can usually only send to your Resend account email — add a verified domain for production.",
        );
      } else {
        setEmailNote(null);
      }

      setDone(true);
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div
        className={`flex w-full max-w-md flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8 text-center backdrop-blur-sm ${className ?? ""}`}
        role="status"
        aria-live="polite"
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircleIcon className="size-8" aria-hidden />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-medium text-foreground">
            You&apos;re on the list
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Thanks for signing up. We&apos;ll email you when early access opens.
          </p>
          {emailNote ? (
            <p className="text-left text-sm leading-relaxed text-amber-400/95">
              {emailNote}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex w-full max-w-md flex-col gap-2 ${className ?? ""}`}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch"
      >
        <Input
          type="email"
          name="email"
          required
          disabled={pending}
          autoComplete="email"
          placeholder="you@example.com"
          aria-label="Email for early access"
          aria-invalid={error ? true : undefined}
          className="h-11 flex-1 rounded-lg bg-background/80 text-base backdrop-blur-sm sm:min-w-0"
        />
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-11 shrink-0 rounded-lg px-6 text-base font-medium"
        >
          {pending ? "Sending…" : submitLabel}
        </Button>
      </form>
      {error ? (
        <p className="text-center text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
