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
    const handleScroll = () => {
      let current = active;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const height = rect.height;

        // Section is considered active when near top of viewport
        if (top <= 200 && top + height >= 200) {
          current = section.id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
     <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-52 px-6 py-32 backdrop-blur-md bg-black/20 border-r border-white/10">

      <nav className="space-y-4 text-sm">
        {sections.map(sec => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`
              block transition-colors 
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
