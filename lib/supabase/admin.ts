import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client for the waitlist API.
 *
 * Prefer `SUPABASE_SERVICE_ROLE_KEY` (secret, server-only) — bypasses RLS.
 * Otherwise uses the public anon/publishable key — requires RLS policy
 * `waitlist_allow_insert_anon` from `supabase/waitlist.sql`.
 */
export function createWaitlistClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const publishableOrAnon =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  const key = serviceRole || publishableOrAnon;

  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or a Supabase key (SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_* anon/publishable key)",
    );
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
