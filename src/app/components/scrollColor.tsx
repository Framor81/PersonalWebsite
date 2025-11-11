"use client";

import { useEffect } from "react";

export default function ScrollColor() {
  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / total;

      // Clamp to 0–1
      const P = Math.min(Math.max(progress, 0), 1);

      document.documentElement.style.setProperty(
        "--scroll-progress",
        P.toString()
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
