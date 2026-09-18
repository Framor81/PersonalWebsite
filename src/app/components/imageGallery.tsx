"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

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
    { src: "/about/RockClimbing.JPG", alt: "Rock Climbing" },
    { src: "/about/Pickup.jpg", alt: "Pickup" },
    { src: "/about/Sequoia2.JPG", alt: "Image 10" },
    { src: "/about/Sequoia3.JPG", alt: "Image 11" },
    { src: "/about/Sequoia1.JPG", alt: "Image 12" },
  ],
  // Add more sets as needed
];

// Flatten every image so the lightbox can page through all of them.
const allImages = imageSets.flat();

export default function ImageGallery() {
  const [currentSet, setCurrentSet] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % imageSets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + imageSets.length) % imageSets.length);
  };

  // Offset of the current set within the flattened list, so a grid click maps
  // to the right lightbox index even if sets have different lengths.
  const setOffset = imageSets
    .slice(0, currentSet)
    .reduce((total, set) => total + set.length, 0);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % allImages.length)),
    []
  );
  const showPrev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + allImages.length) % allImages.length
      ),
    []
  );

  // Keyboard controls + lock background scroll while the lightbox is open.
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  const activeImage = lightboxIndex !== null ? allImages[lightboxIndex] : null;

  return (
    <div className="flex items-center gap-6">
      {/* Previous set Button */}
      {imageSets.length > 1 && (
        <button
          onClick={prevSet}
          className="shrink-0 w-12 h-12 rounded-lg bg-gray-400/20 backdrop-blur-md border border-gray-300/20 hover:bg-gray-400/30 hover:border-gray-300/30 transition-all flex items-center justify-center group"
          aria-label="Previous images"
        >
          <svg className="w-6 h-6 text-zinc-300 group-hover:text-zinc-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
        {imageSets[currentSet].map((image, index) => (
          <button
            key={`${currentSet}-${index}`}
            onClick={() => setLightboxIndex(setOffset + index)}
            aria-label={`Expand ${image.alt}`}
            className="aspect-square rounded-lg bg-gray-400/20 backdrop-blur-md border border-gray-300/20 overflow-hidden hover:bg-gray-400/30 hover:border-gray-300/30 transition-all group cursor-pointer relative"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Hover hint */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors opacity-0 group-hover:opacity-100">
              <svg className="w-7 h-7 text-white/90" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Next set Button */}
      {imageSets.length > 1 && (
        <button
          onClick={nextSet}
          className="shrink-0 w-12 h-12 rounded-lg bg-gray-400/20 backdrop-blur-md border border-gray-300/20 hover:bg-gray-400/30 hover:border-gray-300/30 transition-all flex items-center justify-center group"
          aria-label="Next images"
        >
          <svg className="w-6 h-6 text-zinc-300 group-hover:text-zinc-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image view"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Full image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {lightboxIndex! + 1} / {allImages.length}
          </span>
        </div>
      )}
    </div>
  );
}
