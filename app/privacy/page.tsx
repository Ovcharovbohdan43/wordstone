import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — wordstone",
  description:
    "How wordstone collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "March 30, 2026";
const CONTACT_EMAIL = "privacy@wordstone.app";

export default function PrivacyPage() {
  return (
    <div className="mx-auto min-h-full max-w-3xl px-6 py-16 md:py-24">
      <p className="mb-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-yellow-400"
        >
          ← Back to home
        </Link>
      </p>

      <article className="space-y-8 text-muted-foreground">
        <header className="space-y-2">
          <h1 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Privacy Policy for wordstone
          </h1>
          <p className="text-sm">
            <span className="font-medium text-foreground/90">Last updated:</span>{" "}
            {LAST_UPDATED}
          </p>
        </header>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">1. Introduction</h2>
          <p className="leading-relaxed">
            Welcome to wordstone. We respect your privacy and are committed to
            protecting your personal data. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our
            website or sign up for early access.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-foreground">
            2. Information We Collect
          </h2>
          <p className="leading-relaxed">
            We may collect the following types of information:
          </p>

          <div className="space-y-2">
            <h3 className="text-lg font-medium text-foreground/95">
              a) Personal Information
            </h3>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed">
              <li>Email address (when you sign up for beta access)</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium text-foreground/95">
              b) Usage Data
            </h3>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed">
              <li>Pages visited</li>
              <li>Time spent on the website</li>
              <li>Clicks and interactions</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium text-foreground/95">
              c) Technical Data
            </h3>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
            </ul>
          </div>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            3. How We Use Your Information
          </h2>
          <p className="leading-relaxed">We use your data to:</p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Provide access to the wordstone beta</li>
            <li>Notify you about updates and product launches</li>
            <li>Improve our website and user experience</li>
            <li>Analyze usage to better understand user behavior</li>
          </ul>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            4. Legal Basis (GDPR)
          </h2>
          <p className="leading-relaxed">
            If you are located in the European Economic Area (EEA), we process
            your data based on:
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Your consent (when you submit your email)</li>
            <li>Legitimate interest (to improve our product and service)</li>
          </ul>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            5. Data Storage and Security
          </h2>
          <p className="leading-relaxed">
            We take reasonable steps to protect your data from unauthorized
            access, misuse, or disclosure. Your data may be stored on secure
            servers provided by third-party services.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            6. Third-Party Services
          </h2>
          <p className="leading-relaxed">We may use third-party tools such as:</p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Email services (for communication)</li>
            <li>Hosting providers</li>
          </ul>
          <p className="leading-relaxed">
            These services may process your data in accordance with their own
            privacy policies.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">7. Data Retention</h2>
          <p className="leading-relaxed">
            We retain your personal data only as long as necessary to:
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Provide the service</li>
            <li>Comply with legal obligations</li>
            <li>Improve our product</li>
          </ul>
          <p className="leading-relaxed">
            You may request deletion of your data at any time.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">8. Your Rights</h2>
          <p className="leading-relaxed">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent</li>
            <li>Object to processing</li>
          </ul>
          <p className="leading-relaxed">
            To exercise your rights, contact us at:{" "}
            <a
              className="font-medium text-yellow-400 underline-offset-4 hover:underline"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">9. Cookies</h2>
          <p className="leading-relaxed">
            We may use cookies and similar technologies to:
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Improve user experience</li>
            <li>Analyze traffic</li>
          </ul>
          <p className="leading-relaxed">
            You can disable cookies in your browser settings.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            10. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised date.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">11. Contact</h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, contact us at:
          </p>
          <p className="leading-relaxed">
            <span className="font-medium text-foreground">Email:</span>{" "}
            <a
              className="font-medium text-yellow-400 underline-offset-4 hover:underline"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            12. Children&apos;s Privacy
          </h2>
          <p className="leading-relaxed">
            wordstone is not intended for children under 13, and we do not
            knowingly collect personal data from children.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            13. International Transfers
          </h2>
          <p className="leading-relaxed">
            Your information may be transferred to and processed in countries
            outside your jurisdiction. We ensure appropriate safeguards are in
            place.
          </p>
        </section>
      </article>
    </div>
  );
}
