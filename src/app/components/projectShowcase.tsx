"use client";
import { useState } from "react";

const projects = [
  { id: 1, title: "Placeholder" },
  { id: 2, title: "Placeholder" },
  { id: 3, title: "Placeholder" },
];

export default function ProjectsShowcase() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex justify-center gap-16">
      {projects.map((proj) => {
        const isActive = proj.id === active;
        const isDimmed = active !== null && !isActive;

        // Larger sizes (feel better)
        const startSize = 200; // circle
        const endSize = 400;   // expanded square

        const size = isActive ? endSize : startSize;

        // Morph progression (0 → 1)
        const progress = isActive ? 1 : 0;

        // Radius shrinks proportionally to size
        const startRadius = startSize / 2; // perfect circle
        const endRadius = 12;              // square softness

        // Interpolated radius during expansion
        const radius = startRadius + (endRadius - startRadius) * progress;

        return (
          <div
            key={proj.id}
            onMouseEnter={() => setActive(proj.id)}
            onMouseLeave={() => setActive(null)}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: `${radius}px`,

              // KEY FIX:
              // SAME transition for size + radius
              transition:
                "width 0.6s ease, height 0.6s ease, border-radius 0.6s ease",
            }}
            className={`
              flex items-center justify-center cursor-pointer
              text-center font-medium select-none
              ${
                isActive
                  ? "bg-foreground text-background shadow-2xl"
                  : "bg-zinc-700/40 text-zinc-300"
              }
              ${isDimmed ? "opacity-30 scale-70 translate-y-4" : ""}
            `}
          >
            {isActive ? "Placeholder v2" : proj.title}
          </div>
        );
      })}
    </div>
  );
}
