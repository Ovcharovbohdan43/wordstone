import type { CSSProperties } from "react";

/**
 * Decorative flying streaks (red / blue / violet). Pure markup + CSS in globals.
 */
export function FlightLinesBackground() {
  const streaks = [
    { color: "flight-streak--red" as const, angle: -22, top: "8%", delay: "0s", duration: "14s" },
    { color: "flight-streak--blue" as const, angle: -18, top: "22%", delay: "2s", duration: "16s" },
    { color: "flight-streak--violet" as const, angle: -26, top: "38%", delay: "1s", duration: "17s" },
    { color: "flight-streak--blue" as const, angle: -28, top: "68%", delay: "7s", duration: "20s" },
    { color: "flight-streak--violet" as const, angle: -24, top: "45%", delay: "3.2s", duration: "22s" },
    { color: "flight-streak--red" as const, angle: -20, top: "88%", delay: "9s", duration: "21s" },
  ];

  return (
    <div
      className="bg-flight-lines pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {streaks.map((s, i) => (
        <div
          key={i}
          className={`flight-streak ${s.color}`}
          style={
            {
              top: s.top,
              "--flight-angle": `${s.angle}deg`,
              animationDelay: s.delay,
              animationDuration: s.duration,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
