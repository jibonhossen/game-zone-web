import React, { useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { useDimensions } from "@/components/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

// Deterministic pseudo-random generator based on index to ensure 100% SSR/Client match
function getDeterministicStyle(index: number) {
  const seed1 = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  const r1 = seed1 - Math.floor(seed1);

  const seed2 = Math.sin(index * 39.346 + 11.124) * 23421.6312;
  const r2 = seed2 - Math.floor(seed2);

  const seed3 = Math.sin(index * 73.156 + 45.892) * 54321.9876;
  const r3 = seed3 - Math.floor(seed3);

  const seed4 = Math.sin(index * 91.245 + 33.678) * 12345.6789;
  const r4 = seed4 - Math.floor(seed4);

  return {
    top: `${(r1 * 40).toFixed(2)}%`,
    left: `${(r2 * 45).toFixed(2)}%`,
    tx1: (r1 - 0.5).toFixed(3),
    ty1: (r2 - 0.5).toFixed(3),
    tx2: (r3 - 0.5).toFixed(3),
    ty2: (r4 - 0.5).toFixed(3),
    tx3: (r2 - 0.5).toFixed(3),
    ty3: (r1 - 0.5).toFixed(3),
    tx4: (r4 - 0.5).toFixed(3),
    ty4: (r3 - 0.5).toFixed(3),
    sizeMult: (0.7 + r3 * 0.8).toFixed(2),
  };
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height) || 400,
    [dimensions.width, dimensions.height]
  );

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
      ? "blur-3xl"
      : "blur-[100px]";

  const circleStyles = useMemo(() => {
    return colors.map((_, i) => getDeterministicStyle(i));
  }, [colors]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => {
          const style = circleStyles[index];
          return (
            <svg
              key={index}
              className="absolute animate-background-gradient"
              style={
                {
                  top: style.top,
                  left: style.left,
                  "--background-gradient-speed": `${1 / speed}s`,
                  "--tx-1": style.tx1,
                  "--ty-1": style.ty1,
                  "--tx-2": style.tx2,
                  "--ty-2": style.ty2,
                  "--tx-3": style.tx3,
                  "--ty-3": style.ty3,
                  "--tx-4": style.tx4,
                  "--ty-4": style.ty4,
                } as React.CSSProperties
              }
              width={circleSize * Number(style.sizeMult)}
              height={circleSize * Number(style.sizeMult)}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                fill={color}
                className="opacity-45 dark:opacity-30"
              />
            </svg>
          );
        })}
      </div>
    </div>
  );
};

export { AnimatedGradient };
