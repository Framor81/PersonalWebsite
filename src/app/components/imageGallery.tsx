"use client";

import Image from "next/image";
import { useState } from "react";

// Placeholder image sets - replace with your actual images
const imageSets = [
  [
    { src: "/about/Tapia3.jpg", alt: "Image 1" },
    { src: "/about/Tapia4.jpg", alt: "Image 2" },
    { src: "/about/Tapia1.jpeg", alt: "Image 3" },
    { src: "/about/Tapia5.JPG", alt: "Image 4" },
    { src: "/about/Tapia2.jpg", alt: "Image 5" },
    { src: "/about/Tapia7.PNG", alt: "Image 6" },
  ],
  [
    { src: "/about/Ara.jpeg", alt: "Image 7" },
    { src: "/about/RockClimbing.JPG", alt: "Image 8" },
    { src: "/about/Pickup.jpg", alt: "Image 9" },
    { src: "/about/Sequoia2.JPG", alt: "Image 10" },
    { src: "/about/Sequoia3.JPG", alt: "Image 11" },
    { src: "/about/Sequoia1.JPG", alt: "Image 12" },
  ],
  // Add more sets as needed
];

export default function ImageGallery() {
  const [currentSet, setCurrentSet] = useState(0);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % imageSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + imageSets.length) % imageSets.length);
  };

  return (
    <div className="flex items-center gap-6">
      {/* Previous Button */}
      {imageSets.length > 1 && (
        <button
          onClick={prevSet}
          className="shrink-0 w-12 h-12 rounded-lg bg-gray-400/20 backdrop-blur-md border border-gray-300/20 hover:bg-gray-400/30 hover:border-gray-300/30 transition-all flex items-center justify-center group"
          aria-label="Previous images"
        >
          <svg
            className="w-6 h-6 text-zinc-300 group-hover:text-zinc-200 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
        {imageSets[currentSet].map((image, index) => (
          <div
            key={`${currentSet}-${index}`}
            className="aspect-square rounded-lg bg-gray-400/20 backdrop-blur-md border border-gray-300/20 overflow-hidden hover:bg-gray-400/30 hover:border-gray-300/30 transition-all group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Next Button */}
      {imageSets.length > 1 && (
        <button
          onClick={nextSet}
          className="shrink-0 w-12 h-12 rounded-lg bg-gray-400/20 backdrop-blur-md border border-gray-300/20 hover:bg-gray-400/30 hover:border-gray-300/30 transition-all flex items-center justify-center group"
          aria-label="Next images"
        >
          <svg
            className="w-6 h-6 text-zinc-300 group-hover:text-zinc-200 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

