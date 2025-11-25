"use client";

import Image from "next/image";

type Publication = {
  type: "Poster" | "Conference" | "Conference + Poster" | "Publication" | "Thesis";
  name: string;
  authors: string;
  conference?: string;
  date: string;
  award?: string;
  note?: string;
  pdfLink?: string; // Path to PDF file in /publications folder
  posterLink?: string; // Path to poster PDF file in /publications folder
  posterImage?: string; // Path to poster image in /publications folder
};

const publications: Publication[] = [
  {
    type: "Conference + Poster",
    name: "Eyes in Motion - Utilizing Eye Tracking for Assistive Technology",
    authors: "Francisco X. Morales Puente",
    conference: "2025 CMD-IT/ACM Richard Tapia Conference of Diversity in Computing Conference, Dallas, Texas, USA",
    date: "September 2025",
    note: "Third place in the ACM Student Research Competition in the Undergraduate Division",
    pdfLink: "EyesInMotionPoster.pdf",
    posterLink: "SURP 2024 Poster.pdf",
    posterImage: "/about/Robot.jpeg",
  },
  {
    type: "Conference + Poster",
    name: "Creating Dynamic Simulation Environments With Unreal Engine 5",
    authors: "Daisy Abbott, Anjali Nuggehalli, Francisco Morales Puente, Chau Vu, Ella Zhu, Anthony J. Clark",
    conference: "Southern California Robotics Symposium (SRC 2023), Irvine, California, USA",
    date: "September 2023",
    pdfLink: "SCR2023Submission.pdf",
    posterImage: "2023Poster.jpg",
  },
  {
    type: "Conference + Poster",
    name: "Training and Deploying Deep Learning Models for Real-Time Pathfinding in Indoor Environments",
    authors: "Aser Atawya, Kellie Au, Francisco Morales Puente, Tommy Ryan, Ella Zhu, and Anthony J. Clark",
    conference: "Southern California Robotics Symposium (SRC 2024), Riverside, California, USA.",
    date: "September 2024",
    pdfLink: "SCR2024Submission.pdf",
    posterImage: "/publications/2024Poster.jpg",
  },
  {
    type: "Thesis",
    name: "Implementing Network Flows into Reinforcement Learning Rewards",
    authors: "Francisco X. Morales Puente",
    date: "2025",
    note: "Work in Progress Math Thesis",
  },
];

export default function Publications() {
  return (
    <div className="space-y-4">
      {publications.map((pub, index) => {
        const hasImageBox = pub.type !== "Thesis";
        const isWorkInProgress = pub.note?.toLowerCase().includes("work in progress") || false;
        
        return (
        <div
          key={index}
          className={`flex ${hasImageBox ? 'gap-4' : ''} ${isWorkInProgress ? 'p-3' : 'p-4'} rounded-xl bg-gray-400/20 backdrop-blur-md ${isWorkInProgress ? 'border border-gray-300/3' : 'border border-gray-300/20'} shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_4px_rgba(255,255,255,0.05)] hover:bg-gray-400/25 ${isWorkInProgress ? 'hover:border-gray-300/5' : 'hover:border-gray-300/30'} transition-all duration-300`}
        >
          {/* Image placeholder on the left - only show if not Thesis */}
          {pub.type !== "Thesis" && (
            <div 
              className={`w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-800/30 border border-gray-300/20 flex items-center justify-center ${pub.pdfLink ? 'cursor-pointer hover:bg-zinc-800/40 transition-colors' : ''}`}
              onClick={pub.pdfLink ? () => window.open(`/publications/${pub.pdfLink}`, '_blank') : undefined}
              title={pub.pdfLink ? 'Click to view PDF' : undefined}
            >
              {pub.posterImage ? (
                <Image
                  src={pub.posterImage.startsWith('/') ? pub.posterImage : `/publications/${pub.posterImage}`}
                  alt={`${pub.name} poster thumbnail`}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-zinc-500 text-xs text-center px-2">
                  {pub.pdfLink ? 'PDF Available' : 'Poster Image'}
                </div>
              )}
            </div>
          )}

          {/* Main content */}
          <div className="flex-1 space-y-1">
            {/* Type badge */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                {pub.type}
              </span>
              {pub.pdfLink && (
                <a
                  href={`/publications/${pub.pdfLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-500 hover:text-foreground transition-colors"
                  title="View PDF"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    className="w-4 h-4 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs underline transition-colors">PDF</span>
                </a>
              )}
              {pub.posterLink && (
                <a
                  href={`/publications/${pub.posterLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-500 hover:text-foreground transition-colors"
                  title="View Poster"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    className="w-4 h-4 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19M19,19H5V5H19V19Z" />
                    <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5L8.5,13.5Z" />
                  </svg>
                  <span className="text-xs underline transition-colors">Poster</span>
                </a>
              )}
            </div>

            {/* Name/Title */}
            <h3 className="text-xl font-semibold text-foreground leading-tight">
              {pub.name}
            </h3>

            {/* Authors */}
            <p className="text-zinc-300 text-sm leading-snug">
              <span className="font-medium">Authors:</span> {pub.authors}
            </p>

            {/* Conference - only show if it exists */}
            {pub.conference && (
              <p className="text-zinc-300 text-sm leading-snug">
                <span className="font-medium">Conference:</span> {pub.conference}
              </p>
            )}

            {/* Date */}
            <p className="text-zinc-300 text-sm leading-snug">
              <span className="font-medium">Date:</span> {pub.date}
            </p>

            {/* Award or Note */}
            {(pub.award || pub.note) && (
              <div className="flex items-start gap-2 pt-0.5">
                {pub.award && (
                  <span className="text-amber-400" title="Award">
                    🏆
                  </span>
                )}
                {pub.note && !isWorkInProgress && (
                  <span className="text-amber-400" title="Award">
                    🏆
                  </span>
                )}
                <p className="text-zinc-300 text-sm leading-snug flex-1">
                  <span className="font-medium">
                    {pub.award ? "Award:" : "Note:"}
                  </span>{" "}
                  {pub.award || pub.note}
                </p>
              </div>
            )}
          </div>
        </div>
        );
      })}
    </div>
  );
}

