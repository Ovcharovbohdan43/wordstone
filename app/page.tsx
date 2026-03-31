import Image from "next/image";
import {
  AcademicCapIcon,
  ArrowsRightLeftIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  SparklesIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

import { BetaSignupForm } from "@/components/beta-signup-form";
import { HeroScreens } from "@/components/hero-screens";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const nav = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#features", label: "Features" },
  { href: "#final-cta", label: "Early access" },
];

const problems = [
  {
    text: "You translate every word - and lose the meaning",
    accent: "meaning",
    icon: ArrowsRightLeftIcon,
  },
  {
    text: "You forget everything after a few days",
    accent: "few days",
    icon: CpuChipIcon,
  },
  {
    text: "You can't read real books without frustration",
    accent: "frustration",
    icon: BookOpenIcon,
  },
];

const features = [
  {
    title: "Tap a word - get the answer",
    desc: "Tap any word and keep reading. No dictionaries. No switching tabs.",
    icon: CursorArrowRaysIcon,
  },
  {
    title: "You remember words because you used them",
    desc: "Words come back automatically - right before you forget them.",
    icon: BookOpenIcon,
  },
  {
    title: "Only the help you need",
    desc: "Translations appear only when you're stuck. The rest stays clean.",
    icon: Squares2X2Icon,
  },
  {
    title: "Hard sentence? Plain explanation",
    desc: "Get a simple explanation in seconds - without breaking your flow.",
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <a
            href="#"
            className="flex shrink-0 items-center text-foreground transition-opacity hover:opacity-80"
            aria-label="wordstone home"
          >
            <Image
              src="/logo.png"
              alt="Learn English by reading books app interface"
              width={723}
              height={345}
              className="h-[2.6rem] w-auto max-w-[min(260px,55vw)] object-contain object-left"
              priority
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-yellow-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            nativeButton={false}
            render={<a href="#final-cta" />}
            className="h-9 rounded-full px-4 text-sm font-medium shadow-md shadow-primary/10"
          >
            Get Early Access
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pb-12 pt-[1.2rem] md:pb-16 md:pt-[1.8rem]">
          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16 lg:gap-y-10">
            <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-1000 text-center lg:text-left">
              <p className="mb-6 inline-flex items-center rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-sm lg:mb-8">
                Limited beta access
              </p>
              <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.05]">
                Learn English by Reading Books
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0 lg:mt-8">
                Understand real books instantly - without translating every word.
              </p>
              <div className="mt-10 flex flex-col items-center gap-3 lg:items-start">
                <Button
                  nativeButton={false}
                  render={<a href="#final-cta" />}
                  size="lg"
                  className="h-12 rounded-full px-8 text-base font-medium shadow-md shadow-primary/15 active:scale-[0.98] motion-reduce:active:scale-100"
                >
                  Get Early Access
                </Button>
                <p className="text-sm text-muted-foreground">
                  Free early access - Takes 10 seconds
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs text-foreground/90 backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="size-4 fill-current text-foreground/90"
                    >
                      <path d="M4.8 3.2a1 1 0 0 0-.5.9v15.8a1 1 0 0 0 1.5.9l12.6-7.9a1 1 0 0 0 0-1.7L5.8 3.3a1 1 0 0 0-1 0z" />
                    </svg>
                    <span>Google Play</span>
                    <span className="rounded-full bg-yellow-400/15 px-1.5 py-0.5 text-[10px] font-medium text-yellow-300">
                      Coming soon
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs text-foreground/90 backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="size-4 fill-current text-foreground/90"
                    >
                      <path d="M16.2 12.4c0-1.8 1.5-2.7 1.5-2.7a3.1 3.1 0 0 0-2.4-1.4c-1-.1-2 .6-2.6.6-.7 0-1.5-.6-2.4-.5-1.2 0-2.3.7-2.9 1.7-1.2 2.1-.3 5.2.9 6.9.6.8 1.3 1.8 2.2 1.7.9 0 1.2-.5 2.2-.5 1.1 0 1.4.5 2.3.5.9 0 1.5-.8 2.1-1.6.7-.9 1-1.8 1-1.9-.1 0-1.9-.8-1.9-2.8zm-1.6-5.1c.4-.5.7-1.2.6-1.9-.6 0-1.3.4-1.7.9-.4.4-.7 1.1-.6 1.8.7.1 1.3-.3 1.7-.8z" />
                    </svg>
                    <span>App Store</span>
                    <span className="rounded-full bg-yellow-400/15 px-1.5 py-0.5 text-[10px] font-medium text-yellow-300">
                      Coming soon
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-150 duration-1000 motion-reduce:delay-0">
              <HeroScreens />
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-6xl text-center text-sm font-medium tracking-wide text-foreground/90 md:mt-14">
            Join 200+ early users
          </p>
        </section>

        {/* Problem */}
        <section
          id="problem"
          className="scroll-mt-20 px-6 pt-12 pb-24 md:pt-16 md:pb-32"
        >
          <Reveal className="mx-auto max-w-3xl">
            <div className="flex items-start gap-4 md:gap-6">
              <AcademicCapIcon
                className="mt-1 size-8 shrink-0 text-muted-foreground md:size-10"
                aria-hidden
              />
              <div>
                <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                  Why language learning is broken
                </h2>
                <div className="mt-10 space-y-4">
                  {problems.map(({ text, accent, icon: Icon }, idx) => (
                    <Reveal
                      key={text}
                      delayMs={idx * 110}
                      className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/25 hover:shadow-lg hover:shadow-primary/20 motion-reduce:hover:scale-100"
                    >
                      <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground/90 transition-colors group-hover:text-foreground">
                        <Icon className="size-5" aria-hidden />
                      </div>
                      <p className="text-lg leading-relaxed text-foreground/90">
                        {text.split(accent)[0]}
                        <span className="font-semibold text-foreground">
                          {accent}
                        </span>
                        {text.split(accent)[1]}
                      </p>
                    </Reveal>
                  ))}
                </div>
                <p className="mt-6 text-lg font-medium text-foreground/95">
                  Language learning feels hard because it&apos;s broken.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Solution */}
        <section
          id="solution"
          className="scroll-mt-20 px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-[680px] text-center">
            <Reveal delayMs={0}>
              <div className="mx-auto mb-7 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-foreground drop-shadow-[0_0_18px_rgba(255,255,255,0.18)]">
                <SparklesIcon className="size-6 animate-pulse" aria-hidden />
              </div>
              <h2 className="mt-0 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                Learn naturally through reading
              </h2>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="mx-auto mt-10 max-w-[620px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <p className="text-xl leading-relaxed text-foreground md:text-2xl">
                  You don&apos;t memorize.
                  <br />
                  <span className="font-bold text-primary/95">You understand.</span>
                </p>
                <p className="mt-5 text-xl leading-relaxed text-foreground md:text-2xl">
                  You don&apos;t study.
                  <br />
                  <span className="font-bold text-primary/95">You read.</span>
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={240}>
              <div className="mx-auto mt-10 max-w-[620px] space-y-3">
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Learn a language the way you learned your first one - through
                  context.
                </p>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                  No drills. No memorization. Just reading and understanding.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="scroll-mt-20 px-6 py-24 md:py-32"
        >
          <Reveal>
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-medium tracking-tight md:text-4xl">
                Everything you need to read in English
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/80">
                Read real books. Get help only when you need it.
              </p>
              <div className="mt-16 grid gap-8 sm:grid-cols-2">
                {features.map(({ title, desc, icon: Icon }) => (
                  <Card
                    key={title}
                    className="group border-border/50 bg-card/40 p-1.5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/30 hover:bg-card/85 hover:shadow-lg hover:shadow-primary/20 motion-reduce:hover:scale-100"
                  >
                    <CardHeader className="pt-6 pb-5">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-muted/50 ring-1 ring-border/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-muted group-hover:shadow-md group-hover:shadow-primary/30 group-hover:ring-white/30 motion-reduce:group-hover:scale-100">
                          <Icon className="size-7 text-foreground/90 transition-colors group-hover:text-foreground" />
                        </div>
                        <CardTitle className="text-lg font-medium">{title}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-foreground/85">
                        {desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="mt-12 flex flex-col items-center gap-4 text-center">
                <p className="text-lg font-medium text-foreground">
                  Ready to try it yourself?
                </p>
                <Button
                  nativeButton={false}
                  render={<a href="#final-cta" />}
                  size="lg"
                  className="h-11 rounded-full px-8 text-base font-medium"
                >
                  Get Early Access
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Final CTA */}
        <section
          id="final-cta"
          className="scroll-mt-20 px-6 py-24 md:py-32"
        >
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Start learning differently.
            </h2>
            <p className="mt-6 text-lg text-foreground/85">
              Get early access and be the first to experience the future of
              language learning.
            </p>
            <div className="mx-auto mt-10 flex flex-col items-center gap-3">
              <BetaSignupForm submitLabel="Get Early Access" />
              <p className="text-center text-sm font-medium text-foreground/90">
                Limited beta - only 100 spots available
              </p>
              <p className="text-sm text-muted-foreground">
                Free early access - Takes 10 seconds
              </p>
            </div>
          </Reveal>
        </section>

      </main>

      <footer className="px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <span className="font-medium text-foreground/90">wordstone</span>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="/privacy" className="transition-colors hover:text-yellow-400">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-yellow-400">
              Terms
            </a>
            <a href="/contact" className="transition-colors hover:text-yellow-400">
              Contact
            </a>
            <a href="/blog" className="transition-colors hover:text-yellow-400">
              Blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


