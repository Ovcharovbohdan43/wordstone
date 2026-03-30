import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — wordstone",
  description: "Terms of Service for using wordstone.",
};

const LAST_UPDATED = "March 30, 2026";
const CONTACT_EMAIL = "privacy@wordstone.space";
const GOVERNING_LAW_COUNTRY = "your country";

export default function TermsPage() {
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
            Terms of Service for wordstone
          </h1>
          <p className="text-sm">
            <span className="font-medium text-foreground/90">Last updated:</span>{" "}
            {LAST_UPDATED}
          </p>
        </header>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            1. Acceptance of Terms
          </h2>
          <p className="leading-relaxed">
            By accessing or using wordstone (&quot;the Service&quot;), you agree
            to be bound by these Terms of Service.
          </p>
          <p className="leading-relaxed">
            If you do not agree with these Terms, please do not use the Service.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            2. Description of Service
          </h2>
          <p className="leading-relaxed">
            wordstone provides a platform for language learning through reading,
            including features such as text translation, vocabulary tracking, and
            content interaction.
          </p>
          <p className="leading-relaxed">
            The Service is currently in beta and may change over time.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">3. Eligibility</h2>
          <p className="leading-relaxed">
            You must be at least 13 years old to use the Service.
          </p>
          <p className="leading-relaxed">
            By using wordstone, you represent that you meet this requirement.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">4. User Accounts</h2>
          <p className="leading-relaxed">
            To access certain features, you may be required to provide your email
            address.
          </p>
          <p className="leading-relaxed">You agree to:</p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Provide accurate information</li>
            <li>Not impersonate others</li>
            <li>Keep your access secure</li>
          </ul>
          <p className="leading-relaxed">
            We reserve the right to suspend or terminate access if misuse is
            detected.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            5. Acceptable Use
          </h2>
          <p className="leading-relaxed">You agree not to:</p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Use the Service for illegal purposes</li>
            <li>Attempt to gain unauthorized access to systems</li>
            <li>Interfere with the operation of the Service</li>
            <li>Upload harmful or malicious content</li>
          </ul>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            6. Intellectual Property
          </h2>
          <p className="leading-relaxed">
            All content, branding, and features of wordstone are the property of
            wordstone or its licensors.
          </p>
          <p className="leading-relaxed">You may not:</p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Copy</li>
            <li>Modify</li>
            <li>Distribute</li>
            <li>Reverse engineer</li>
          </ul>
          <p className="leading-relaxed">
            any part of the Service without permission.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">7. User Content</h2>
          <p className="leading-relaxed">
            If you upload content (e.g., texts or documents):
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>You retain ownership of your content</li>
            <li>
              You grant us a limited license to process and display it to provide
              the Service
            </li>
          </ul>
          <p className="leading-relaxed">
            You are responsible for ensuring you have rights to any content you
            upload.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            8. Beta Disclaimer
          </h2>
          <p className="leading-relaxed">
            The Service is provided as a beta product.
          </p>
          <p className="leading-relaxed">This means:</p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Features may change or be removed</li>
            <li>Bugs may occur</li>
            <li>Performance is not guaranteed</li>
          </ul>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            9. Disclaimer of Warranties
          </h2>
          <p className="leading-relaxed">
            The Service is provided &quot;as is&quot; and &quot;as available.&quot;
          </p>
          <p className="leading-relaxed">We do not guarantee that:</p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>The Service will be error-free</li>
            <li>The Service will be uninterrupted</li>
            <li>The results will meet your expectations</li>
          </ul>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            10. Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            To the maximum extent permitted by law, wordstone shall not be liable
            for:
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>Indirect or consequential damages</li>
            <li>Loss of data</li>
            <li>Loss of profits</li>
          </ul>
          <p className="leading-relaxed">
            arising from your use of the Service.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">11. Termination</h2>
          <p className="leading-relaxed">
            We may suspend or terminate your access at any time if:
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-relaxed">
            <li>You violate these Terms</li>
            <li>We discontinue the Service</li>
          </ul>
          <p className="leading-relaxed">
            You may stop using the Service at any time.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            12. Changes to the Service
          </h2>
          <p className="leading-relaxed">
            We reserve the right to modify or discontinue any part of the Service
            at any time without notice.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            13. Changes to Terms
          </h2>
          <p className="leading-relaxed">
            We may update these Terms from time to time.
          </p>
          <p className="leading-relaxed">
            Continued use of the Service means you accept the updated Terms.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">
            14. Governing Law
          </h2>
          <p className="leading-relaxed">
            These Terms shall be governed by and interpreted in accordance with
            the laws of {GOVERNING_LAW_COUNTRY}.
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-3">
          <h2 className="text-xl font-medium text-foreground">15. Contact</h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms, contact us at:
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
      </article>
    </div>
  );
}
