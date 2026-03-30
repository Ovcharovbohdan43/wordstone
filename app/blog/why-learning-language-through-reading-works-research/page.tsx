import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "Why Learning a Language Through Reading Works (Research) | Wordstone",
  description:
    "Learn English by reading books: what research says about comprehensible input, extensive reading, and vocabulary from context—and how Wordstone fits.",
  alternates: {
    canonical: "/blog/why-learning-language-through-reading-works-research",
  },
};

export default function ResearchBlogPostPage() {
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
          Why Learning a Language Through Reading Actually Works (Backed by
          Research)
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
          For decades, learners were pushed toward vocabulary lists and grammar
          drills. Second-language acquisition research points elsewhere: we
          grow when we understand meaningful input—not when we cram isolated
          rules.
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
          <p>
            Most learners try to translate every sentence. It feels safe, but
            it slows you down and breaks the story. A better method is to read
            for meaning first, then check only the words that block
            understanding.
          </p>
          <p>
            Start with a book that is interesting and slightly below your
            maximum level. If you can understand 80–90% of the page, you are in
            the right zone. Keep moving through the text and avoid stopping for
            every unknown word. Your goal is flow, not perfection.
          </p>
          <p>
            Context is the key to long-term vocabulary memory. When you see a
            word in a real scene—with emotion, action, and dialogue—your brain
            stores it much deeper than from isolated flashcards. Over time,
            repeated exposure across chapters turns passive recognition into real
            understanding.
          </p>
          <p>
            Another important shift is letting go of control. You do not need to
            understand everything to improve. Progress often happens when your
            brain fills gaps naturally. This is how children learn—and it works
            for adults too.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            1. Comprehensible input (Krashen and later work)
          </h2>
          <p>
            Linguist Stephen Krashen argued that we acquire language when we
            understand messages—reading or listening we can mostly follow—not
            when we consciously &quot;study&quot; rules in isolation. His
            input hypothesis (see{" "}
            <cite className="not-italic">
              Principles and Practice in Second Language Acquisition
            </cite>
            , 1982, and related summaries) remains a backbone idea: meaning comes
            first; form follows when input is understood.
          </p>
          <p>
            In simple terms: if you understand what you read, your brain can map
            patterns and vocabulary without forced memorization sessions.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            2. Extensive reading: what classroom studies find
          </h2>
          <p>
            &quot;Extensive reading&quot; means reading a lot of text that is
            largely understandable—volume and enjoyment matter. Day and
            Bamford (
            <cite className="not-italic">
              Extensive Reading in the Second Language Classroom
            </cite>
            , 1998) helped systematize this as a teaching approach; follow-up
            work and reviews describe gains in reading fluency, vocabulary, and
            confidence when learners read widely at the right level.
          </p>
          <p>
            Learners who read extensively often improve faster on reading and
            vocabulary measures than peers who only do traditional exercises—an
            outcome reported across multiple classroom and program studies
            summarized in the extensive-reading literature.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            3. Vocabulary from context (incidental learning)
          </h2>
          <p>
            Research on incidental vocabulary acquisition shows that people pick
            up words from reading real texts, especially with repeated
            encounters. Program-level studies such as Elley &amp; Mangubhai
            (1983) on sustained reading, and many follow-ups, support the idea
            that context beats isolated lists for durable recognition.
          </p>
          <p>
            Nation&apos;s work on vocabulary in second language learning (e.g.{" "}
            <cite className="not-italic">
              Learning Vocabulary in Another Language
            </cite>
            ) emphasizes that knowing a word means knowing its contexts,
            collocations, and meanings—not a single translation.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            4. Syntheses and meta-analyses
          </h2>
          <p>
            Large-scale reviews that pool many studies generally find positive
            effects for reading-rich approaches on vocabulary and reading
            outcomes, though exact effect sizes vary by program length and
            measurement. The pattern is consistent: reading with understanding is
            not a niche hack—it is one of the most replicated findings in
            applied linguistics.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            5. Why lists feel hard—and reading feels lighter
          </h2>
          <p>
            Traditional study often forces the brain to recall words without
            situation or story. Reading ties words to characters, tension, and
            emotion, which reduces pointless cognitive load and supports
            memory. Contextualized input is exactly what comprehension-based
            theories predict works best.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            6. How Wordstone maps to this science
          </h2>
          <p>
            This is exactly how Wordstone helps. You can tap a difficult word to
            get instant support and continue reading without opening a
            dictionary tab. That keeps your attention on the story and makes
            learning feel effortless instead of fragmented.
          </p>
          <p>
            Instead of interrupting your reading, the app supports your flow.
            You stay immersed in the book while gradually improving vocabulary,
            comprehension, and confidence—aligned with comprehensible input,
            extensive reading, and context-based vocabulary learning.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            7. Habits that match the research
          </h2>
          <p>
            If you want to learn English by reading books, build a simple habit:
            read 15–20 minutes daily, track useful phrases, and focus on overall
            meaning. Small, consistent sessions will always outperform occasional
            long study sessions.
          </p>
          <p>
            Over time, you will notice something important: you stop translating
            in your head. You begin to understand directly. That is the moment
            when reading becomes natural—and learning accelerates.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Conclusion
          </h2>
          <p>
            Research is clear: the most effective path is understanding
            meaningful language in context—not endless memorization. Reading
            gives you that path. Wordstone is built to keep you on it.
          </p>
          <p>
            Ready to try this method in practice? Visit the{" "}
            <Link href="/" className="underline underline-offset-4">
              Wordstone landing page
            </Link>{" "}
            and join beta access.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Further reading (primary sources)
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-foreground/85">
            <li>
              Krashen, S. D. (1982).{" "}
              <span className="italic">
                Principles and Practice in Second Language Acquisition
              </span>
              . (Input hypothesis / comprehensible input.)
            </li>
            <li>
              Day, R. R., &amp; Bamford, J. (1998).{" "}
              <span className="italic">
                Extensive Reading in the Second Language Classroom
              </span>
              .
            </li>
            <li>
              Nation, I. S. P. (2001).{" "}
              <span className="italic">
                Learning Vocabulary in Another Language
              </span>
              . Cambridge University Press.
            </li>
            <li>
              Elley, W. B., &amp; Mangubhai, F. (1983). The impact of reading on
              second language learning.{" "}
              <span className="italic">Reading Research Quarterly</span>, 19(1),
              53–67.
            </li>
            <li>
              Grabe, W. (2009).{" "}
              <span className="italic">
                Reading in a Second Language: Moving from Theory to Practice
              </span>
              . Cambridge University Press.
            </li>
          </ul>
          <p className="pt-2 text-sm text-muted-foreground">
            Wordstone does not conduct academic studies; this article summarizes
            widely cited work in second language acquisition. For medical or
            clinical claims, consult peer-reviewed sources in your field.
          </p>

          <p className="pt-6">
            <Link
              href="/blog/how-to-read-books-in-english-without-translating-every-word"
              className="underline underline-offset-4"
            >
              Related: How to read in English without translating every word
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
