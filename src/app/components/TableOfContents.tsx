"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "awards", label: "Awards & Honors" },
  { id: "gallery", label: "Gallery" },
  { id: "about-me", label: "More About Me" },
];

export default function TableOfContents() {
  const [active, setActive] = useState<string>("intro");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const viewportHeight = window.innerHeight;
          const scrollY = window.scrollY;
          
          // Find which section is currently in the center of the viewport
          let current: string | null = null;
          let minDistance = Infinity;

          for (const section of sections) {
            const el = document.getElementById(section.id);
            if (!el) continue;

            const rect = el.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = viewportHeight / 2;
            const distance = Math.abs(sectionCenter - viewportCenter);

            // If section is mostly visible and closest to center
            if (rect.top < viewportHeight && rect.bottom > 0 && distance < minDistance) {
              minDistance = distance;
              current = section.id;
            }
          }

          if (current) {
            setActive(prev => prev !== current ? current! : prev);
          }
          ticking = false;
        });

        ticking = true;
      }
    };

    // Initial call
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-52 px-6 py-32 backdrop-blur-md bg-black/20 border-r border-white/10 z-10 pointer-events-auto">

      <nav className="space-y-4 text-sm">
        {sections.map(sec => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(sec.id);
              if (el) {
                // Scroll to section - scroll snap will handle the positioning
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });
              }
            }}
            className={`
              block transition-colors cursor-pointer relative z-20
              ${active === sec.id 
                ? "text-foreground font-semibold" 
                : "text-zinc-400 hover:text-zinc-200"}
            `}
          >
            {sec.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
