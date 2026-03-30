# Wordstone Landing

## Purpose

Wordstone is a landing page for an app that helps people learn English by reading real books with context-aware translation.

## Detailed Description

The project is built with Next.js App Router and includes:

- SEO-focused homepage content and heading structure.
- Metadata API configuration for title, description, canonical URL, and Open Graph.
- Technical SEO endpoints via `app/robots.ts` and `app/sitemap.ts`.
- A blog article route designed to target long-tail search intent.
- Waitlist API (`POST /api/waitlist`) saves emails to Supabase and sends a confirmation email via [Resend](https://resend.com/) when `RESEND_API_KEY` is set.

## How to Use

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Copy `.env.example` to `.env.local` and set Supabase URL/key plus `RESEND_API_KEY` (and `RESEND_FROM` with your verified domain in production).

4. Open `http://localhost:3000`.

## Examples

- Homepage SEO title: `Learn English by Reading Books | Wordstone`
- Blog article URLs:
  - `/blog/how-to-read-books-in-english-without-translating-every-word`
  - `/blog/why-learning-language-through-reading-works-research`
- Generated SEO routes:
  - `/robots.txt`
  - `/sitemap.xml`

## How to Test

1. Run lint:

```bash
npm run lint
```

2. Validate generated SEO files in browser:
- `http://localhost:3000/robots.txt`
- `http://localhost:3000/sitemap.xml`

3. Validate metadata with page source and social preview tools:
- Open Graph tags should include title, description, image, and type.

4. Waitlist email: submit the early-access form; if `RESEND_API_KEY` is set, the address should receive “You're on the Wordstone early access list”. Duplicate emails in the DB do not trigger another message.

## Limitations

- `metadataBase`, sitemap, and robots currently use placeholder domain `https://yourdomain.com`.
- Replace with production domain before release.
- Blog posts are static routes in `app/blog/`, not a full CMS.
- Without `RESEND_API_KEY`, waitlist signup still works (Supabase insert), but no confirmation email is sent (warning in server logs).
- Production: verify your domain in Resend and set `RESEND_FROM` to an address on that domain (avoid `onboarding@resend.dev` in production).
- **Email not arriving:** API returns `emailSent` in the JSON response. Check server logs for `[waitlist] Resend error:` — common causes: missing/invalid `RESEND_API_KEY`, unverified `RESEND_FROM`, or Resend test mode only allowing mail to your Resend account address. Confirm in [Resend Dashboard → Logs](https://resend.com/emails).

## Affected Modules

- `app/layout.tsx`
- `app/page.tsx`
- `components/hero-screens.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/blog/how-to-read-books-in-english-without-translating-every-word/page.tsx`
- `app/blog/why-learning-language-through-reading-works-research/page.tsx`
- `app/api/waitlist/route.ts`
- `lib/email/waitlist-confirmation.ts`
- `public/email/wordstone-logo.png` (waitlist email header)

## Version / Update Date

- Version: `0.1.0`
- Updated: `2026-03-30`

## Changelog

- [2026-03-30] - Added: SEO metadata (title, description, canonical, OG, robots meta).
- [2026-03-30] - Added: `robots.txt` and `sitemap.xml` generation via App Router metadata files.
- [2026-03-30] - Changed: Homepage heading structure to SEO-targeted H1/H2.
- [2026-03-30] - Added: Long-tail SEO content block on homepage.
- [2026-03-30] - Added: ALT text for key homepage images.
- [2026-03-30] - Added: Blog article for long-tail search acquisition.
- [2026-03-30] - Changed: Moved long-tail SEO content block from homepage to dedicated `/blog` section.
- [2026-03-30] - Changed: Removed hero images from blog article pages (text-only layout). Asset `public/images/blog.png` may remain unused.
- [2026-03-30] - Changed: Rewrote body copy for blog article “How to Read Books in English Without Translating Every Word” (flow, context, Wordstone CTA).
- [2026-03-30] - Added: “Back to landing” button on `/blog` and blog article page (links to `/`).
- [2026-03-30] - Added: Research-backed blog article `/blog/why-learning-language-through-reading-works-research` (Krashen, extensive reading, Nation, references); updated `/blog` index and sitemap.
- [2026-03-30] - Changed: `/blog` is index only (two post cards); full text only on article routes; article pages link back to `/blog`.
- [2026-03-30] - Added: Resend confirmation email after new waitlist signup (`RESEND_API_KEY`, optional `RESEND_FROM`, `RESEND_REPLY_TO`).
- [2026-03-30] - Changed: Waitlist email copy (welcome + onboarding narrative); inline logo from `public/email/wordstone-logo.png` (CID attachment).
- [2026-03-30] - Changed: Waitlist API returns `emailSent` / `emailIssue`; success UI warns if email was not sent; improved Resend logging.
