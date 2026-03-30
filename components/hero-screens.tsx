"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const ASSET_V = "20260330b";

const SLIDES = [
  "ws-hero1.png",
  "ws-main2.png",
  "ws-main3.png",
] as const;

/** Убрать фон даёт лишнюю прозрачную «поля» в PNG — при object-contain телефон визуально меньше остальных. */
const SLIDE_INNER_SCALE: Partial<Record<(typeof SLIDES)[number] | string, number>> = {
  "ws-main2.png": 1.16,
  "main2-removebg-preview.png": 1.16,
};

const N = SLIDES.length;

function innerScaleFor(filename: string) {
  return SLIDE_INNER_SCALE[filename] ?? 1;
}

function slideSrc(name: string) {
  return `/images/${name}?v=${ASSET_V}`;
}

/**
 * Положение слайда i относительно текущего center:
 * 0 — главный (центр), 1 — справа, 2 — слева (цикл из трёх).
 */
function ringDelta(i: number, center: number) {
  return (i - center + N) % N;
}

/** Только изображения: тройка слева / центр / справа, плавная автосмена без UI. */
export function HeroScreens() {
  const [center, setCenter] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  const next = useCallback(() => setCenter((c) => (c + 1) % N), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(next, 6000);
    return () => window.clearInterval(id);
  }, [reduceMotion, next]);

  const dragRef = useRef<{ x: number } | null>(null);
  const prev = useCallback(() => setCenter((c) => (c + N - 1) % N), []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { x: e.clientX };
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const start = dragRef.current;
    dragRef.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    if (dx > 56) prev();
    else if (dx < -56) next();
  };

  const ease = "cubic-bezier(0.45, 0, 0.2, 1)";
  const duration = reduceMotion ? "0ms" : "1000ms";

  return (
    <div
      className="relative mx-auto w-full max-w-[min(100%,620px)] select-none lg:ml-auto lg:mr-0"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={() => {
        dragRef.current = null;
      }}
    >
      <div className="relative mx-auto px-2 md:px-3">
        <div className="relative mx-auto w-full max-w-[580px] md:max-w-[620px]">
          <div
            className="pointer-events-none mx-auto invisible aspect-[9/19] w-[50%] max-w-[300px] md:w-[52%]"
            aria-hidden
          />
          {SLIDES.map((filename, i) => {
            const delta = ringDelta(i, center);
            const isCenter = delta === 0;

            const txPercent = delta === 0 ? 0 : delta === 1 ? 40 : -40;
            const scale = isCenter ? 1 : 0.88;
            const tyPx = isCenter ? 0 : 5;
            const opacity = isCenter ? 1 : 0.94;
            const zIndex = isCenter ? 30 : 10 + (delta === 1 ? 1 : 0);

            return (
              <div
                key={i}
                className="pointer-events-none absolute left-1/2 top-0 w-[50%] max-w-[300px] will-change-transform md:w-[52%]"
                style={{
                  zIndex,
                  opacity,
                  transform: `translate(-50%, 0) translateX(${txPercent}%) translateY(${tyPx}px) scale(${scale})`,
                  transition: `transform ${duration} ${ease}, opacity ${duration} ${ease}`,
                }}
              >
                <div
                  className={
                    isCenter
                      ? "relative aspect-[9/19] w-full overflow-hidden rounded-[1.85rem] shadow-[0_32px_70px_-6px_rgba(0,0,0,0.58)]"
                      : "relative aspect-[9/19] w-full overflow-hidden rounded-2xl shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5)]"
                  }
                >
                  <Image
                    src={slideSrc(filename)}
                    alt="Learn English by reading books app interface"
                    fill
                    unoptimized
                    priority={isCenter}
                    draggable={false}
                    className="object-contain object-center [transform-origin:center]"
                    style={{
                      transform: `scale(${innerScaleFor(filename)})`,
                    }}
                    sizes="(max-width: 768px) 50vw, 320px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
