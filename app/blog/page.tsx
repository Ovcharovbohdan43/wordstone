import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog | Wordstone",
  description:
    "Guides on learning English through reading, context-based vocabulary, and practical methods with Wordstone.",
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    href: "/blog/why-learning-language-through-reading-works-research",
    title:
      "Why Learning a Language Through Reading Actually Works (Backed by Research)",
    excerpt:
      "What research says about comprehensible input, extensive reading, and learning vocabulary in context—and how Wordstone fits.",
  },
  {
    href: "/blog/how-to-read-books-in-english-without-translating-every-word",
    title: "How to Read Books in English Without Translating Every Word",
    excerpt:
      "A practical method to understand English books through context and build vocabulary with less translation.",
  },
] as const;

export default function BlogPage() {
  return (
    <main className="px-6 py-20 md:py-24">
      <section className="mx-auto max-w-3xl">
        <Button
          nativeButton={false}
          render={<Link href="/" />}
          variant="outline"
          size="sm"
          className="mb-8 h-9 gap-2 rounded-full border-white/15 bg-background/40 px-4 text-foreground backdrop-blur-sm hover:bg-muted/30"
        >
          <ArrowLeftIcon className="size-4" aria-hidden />
          Back to landing
        </Button>
        <p className="text-sm text-muted-foreground">Wordstone blog</p>
        <h1 className="mt-3 text-balance text-3xl font-medium tracking-tight md:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Two articles on learning English by reading books. Open a post to read
          the full text.
        </p>

        <ul className="mt-12 space-y-6" aria-label="Blog articles">
          {posts.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <h2 className="text-xl font-medium tracking-tight text-foreground group-hover:text-primary md:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-sm font-medium text-primary">
                  Read article →
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
