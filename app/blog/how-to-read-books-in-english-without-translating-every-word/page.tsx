import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Read Books in English Without Translating Every Word",
  description:
    "A practical method to understand English books through context and build vocabulary naturally with less translation.",
  alternates: {
    canonical: "/blog/how-to-read-books-in-english-without-translating-every-word",
  },
};

export default function BlogPostPage() {
  return (
    <main className="px-6 py-20 md:py-24">
      <article className="mx-auto max-w-3xl">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Button
            nativeButton={false}
            render={<Link href="/" />}
            variant="outline"
            size="sm"
            className="h-9 gap-2 rounded-full border-white/15 bg-background/40 px-4 text-foreground backdrop-blur-sm hover:bg-muted/30"
          >
            <ArrowLeftIcon className="size-4" aria-hidden />
            Back to landing
          </Button>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            All posts
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">Wordstone blog</p>
        <h1 className="mt-3 text-balance text-3xl font-medium tracking-tight md:text-5xl">
          How to Read Books in English Without Translating Every Word
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
          <p>
            Most learners try to translate every sentence. It feels safe, but it
            slows you down and breaks the story. A better approach is to read for
            meaning first, then look up only the words that actually block
            understanding.
          </p>
          <p>
            Start with a book that interests you and sits slightly below your
            maximum level. If you can follow roughly 80–90% of a page, you are
            in the right zone. Keep moving through the text and resist stopping
            for every unknown word. Your goal is flow, not perfection.
          </p>
          <p>
            Context is what makes vocabulary stick over the long term. When you
            meet a word in a real scene—with emotion, action, and dialogue—your
            brain encodes it far more deeply than from isolated flashcards. With
            repeated exposure across chapters, passive recognition turns into
            genuine understanding.
          </p>
          <p>
            Another shift that matters is letting go of the need to control every
            line. You do not have to understand everything to improve. Progress
            often comes when your mind bridges gaps on its own. Children learn
            this way, and the same mechanism works for adults.
          </p>
          <p>
            This is how Wordstone fits into the picture. Tap a difficult word for
            quick help and keep reading—no dictionary tab, no context switch. Your
            attention stays on the story, so learning feels continuous instead of
            chopped into fragments.
          </p>
          <p>
            Rather than interrupting your reading, the app supports your flow. You
            stay inside the book while vocabulary, comprehension, and confidence
            build in the background.
          </p>
          <p>
            If you want to learn English by reading books, keep the habit simple:
            read 15–20 minutes a day, note phrases that matter, and prioritize
            overall meaning. Short, steady sessions beat occasional marathon
            sessions every time.
          </p>
          <p>
            Over time, you will notice something important: you stop translating in
            your head. You start understanding directly. That is when reading
            feels natural—and your progress speeds up.
          </p>
          <p>
            Ready to try this in practice? Visit the{" "}
            <Link href="/" className="underline underline-offset-4">
              Wordstone landing page
            </Link>{" "}
            and join the beta.
          </p>
        </div>
      </article>
    </main>
  );
}
