import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface FlipCardProps {
  digit: number | string;
  label: string;
}

export const FlipCard = ({ digit, label }: FlipCardProps) => {
  const formattedVal = String(digit).padStart(2, "0");
  const [current, setCurrent] = useState(formattedVal);
  const [next, setNext] = useState(formattedVal);

  const containerRef = useRef<HTMLDivElement>(null);
  const topFlipRef = useRef<HTMLDivElement>(null);
  const bottomFlipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formattedVal !== current) {
      setNext(formattedVal);
    }
  }, [formattedVal, current]);

  useGSAP(
    () => {
      if (current === next) return;

      const topCard = topFlipRef.current;
      const bottomCard = bottomFlipRef.current;
      if (!topCard || !bottomCard) return;

      // Set initial rotation and hinges
      gsap.set(topCard, { rotationX: 0, transformOrigin: "bottom center" });
      gsap.set(bottomCard, { rotationX: 90, transformOrigin: "top center" });

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrent(next);
        },
      });

      // 1. Fold top flap down
      tl.to(topCard, {
        rotationX: -90,
        duration: 0.3,
        ease: "power2.in",
      })
      // 2. Unfold bottom flap down
      .to(bottomCard, {
        rotationX: 0,
        duration: 0.3,
        ease: "bounce.out",
      });
    },
    { dependencies: [next], scope: containerRef }
  );

  return (
    <div className="flex flex-col items-center">
      {/* 3D Perspective Card Container */}
      <div
        ref={containerRef}
        className="relative w-20 h-24 sm:w-28 sm:h-32 rounded-lg bg-zinc-900 text-amber-100 font-mono text-4xl sm:text-6xl font-bold shadow-2xl select-none"
        style={{ perspective: "1000px" }}
      >
        {/* UPPER HALF - STATIC (Displays 'next' value underneath) */}
        <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-lg bg-zinc-800 border-b border-black/40">
          <div className="absolute inset-x-0 top-0 h-24 sm:h-32 flex items-center justify-center">
            {next}
          </div>
        </div>

        {/* LOWER HALF - STATIC (Displays 'current' value until flip completes) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-lg bg-zinc-900 border-t border-white/5">
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 flex items-center justify-center">
            {current}
          </div>
        </div>

        {/* UPPER HALF - ANIMATING (Flips down) */}
        <div
          ref={topFlipRef}
          className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-lg bg-zinc-800 border-b border-black/40 z-20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-x-0 top-0 h-24 sm:h-32 flex items-center justify-center">
            {current}
          </div>
        </div>

        {/* LOWER HALF - ANIMATING (Unfolds into position) */}
        <div
          ref={bottomFlipRef}
          className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-lg bg-zinc-900 border-t border-white/5 z-10"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 flex items-center justify-center">
            {next}
          </div>
        </div>

        {/* Center Split Horizontal Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-[1px] h-[2px] bg-black/60 z-30" />
      </div>

      <span className="mt-3 text-xs sm:text-sm tracking-widest text-zinc-400 uppercase font-medium">
        {label}
      </span>
    </div>
  );
};