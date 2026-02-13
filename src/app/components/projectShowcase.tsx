"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProjectsShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center">
      <a
        href="https://p-ickup.com/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
      >
        <div
          className={`
            relative overflow-hidden rounded-xl
            transition-all duration-500 ease-in-out
            ${isHovered ? "w-[600px] h-[400px]" : "w-[300px] h-[300px]"}
            bg-gray-400/20 backdrop-blur-md border border-gray-300/20
            shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_4px_rgba(255,255,255,0.05)]
            hover:bg-gray-400/25 hover:border-gray-300/30
            hover:shadow-[0_4px_12px_rgba(0,0,0,0.15),0_0_8px_rgba(255,255,255,0.1)]
          `}
        >
          {/* Background Image */}
          {isHovered && (
            <div className="absolute inset-0">
              <Image
                src="/about/p-ickupDashboard.jpg"
                alt="P-ickup Dashboard"
                fill
                className="object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/60" />
            </div>
          )}

          {/* Content */}
          <div className="relative h-full flex items-center justify-center p-6">
            {isHovered ? (
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  P-ickup
                </h3>
                <p className="text-zinc-200 leading-relaxed">
                  Why pay $100+ for a ride to the airport? We help you split the cost and share the journey with fellow travelers.
                </p>
                <p className="text-zinc-300 text-sm mt-4">
                  Utilized by Pomona College for coordinating transportation for over 1200 students
                </p>
              </div>
            ) : (
              <h3 className="text-2xl font-semibold text-foreground">
                P-ickup
              </h3>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
