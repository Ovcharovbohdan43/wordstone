-- Run this in Supabase: SQL Editor → New query → Run
-- Table for landing page beta / waitlist signups

create table if not exists public.waitlist_emails (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  constraint waitlist_emails_email_key unique (email)
);

alter table public.waitlist_emails enable row level security;

-- If you use SUPABASE_SERVICE_ROLE_KEY in the API route, RLS is bypassed — no policy needed for inserts.
-- If you use only the public anon/publishable key (NEXT_PUBLIC_*), allow INSERT for the anon role:
drop policy if exists "waitlist_allow_insert_anon" on public.waitlist_emails;
create policy "waitlist_allow_insert_anon"
on public.waitlist_emails
for insert
to anon, authenticated
with check (true);

comment on table public.waitlist_emails is 'Emails collected from the public landing waitlist form.';
