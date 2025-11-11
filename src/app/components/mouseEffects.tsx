"use client";
import { useEffect, useRef } from "react";

export default function MouseEffects() {
  // Reference to the fullscreen container that will hold the trailing dots.
  const trailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Access the actual DOM element backing the ref.
    const trailContainer = trailRef.current;

    // Runs every time the mouse moves.
    const handleMove = (e: MouseEvent) => {
      if (!trailContainer) return;

      // --- Create a particle at the cursor position ---
      const dot = document.createElement("div");
      dot.className = "pointer-dot";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      trailContainer.appendChild(dot);

      // Remove the particle after its fade-out animation finishes.
      setTimeout(() => {
        dot.remove();
      }, 600);

      // --- Update ripple coordinates for the background ---
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    };

    // Add mousemove listener on mount.
    window.addEventListener("mousemove", handleMove);

    // Remove listener on unmount to avoid memory leaks or duplicate listeners.
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Transparent fullscreen div where trail particles will be placed.
  return (
    <div
      ref={trailRef}
      className="pointer-trail fixed inset-0 pointer-events-none"
    ></div>
  );
}
