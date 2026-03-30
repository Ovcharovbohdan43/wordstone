import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — wordstone",
  description: "Get in touch with wordstone via email or Reddit.",
};

const SUPPORT_EMAIL = "support@wordstone.app";
const REDDIT_URL = "https://www.reddit.com/user/SpiritualAd8605/";

export default function ContactPage() {
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
            Contact
          </h1>
          <p className="leading-relaxed">
            Questions about wordstone, early access, or feedback? Reach us here.
          </p>
        </header>

        <hr className="border-border/60" />

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-foreground">Email</h2>
          <p className="leading-relaxed">
            <a
              className="font-medium text-yellow-400 underline-offset-4 hover:underline"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>

        <hr className="border-border/60" />

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-foreground">Reddit</h2>
          <p className="leading-relaxed">
            You can also find us on Reddit:{" "}
            <a
              className="font-medium text-yellow-400 underline-offset-4 hover:underline"
              href={REDDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              u/SpiritualAd8605
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
