"use client";

import { useEffect, useState } from "react";

const csCourses = [
  "Algorithms",
  "Neural Networks",
  "Data Analytics & Visualization",
  "Computer Systems (C)",
  "Data Structures (Java)",
  "Intro to CS (Python)",
  "Discrete & Functional Programming",
  "Mobile Robotics (C++)",
];

const mathCourses = [
  "Linear Algebra",
  "Combinatorics",
  "Operations Research",
  "Differential Equations",
  "Calculus II & III",
  "Probability",
  "Computational Statistics",
  "Biostatistics (R)",
];

type OpenCourse = { section: "cs" | "math"; index: number } | null;

export default function CourseworkGrid() {
  const [openCS, setOpenCS] = useState(false);
  const [openMath, setOpenMath] = useState(false);

  const [openCourse, setOpenCourse] = useState<OpenCourse>(null);
  const [showItems, setShowItems] = useState(false);

  // Trigger stagger reveal ONLY when a folder opens
  useEffect(() => {
    if (openCS || openMath) {
      setTimeout(() => setShowItems(true), 180);
    } else {
      setShowItems(false); // instant hide when closing
    }
  }, [openCS, openMath]);

  const renderCourses = (courses: string[], section: "cs" | "math") => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 pb-2">
      {courses.map((course, index) => {
        const isOpen = openCourse?.section === section && openCourse?.index === index;

        return (
          <div
            key={index}
            onClick={() => setOpenCourse(isOpen ? null : { section, index })}
            className={`
              cursor-pointer select-none rounded-xl p-4 
              transition-all duration-300 ease-in-out
              transform hover:scale-[1.02] hover:translate-y-[-2px]

              bg-gray-400/20 backdrop-blur-md border border-gray-300/20
              shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_4px_rgba(255,255,255,0.05)]
              hover:bg-gray-400/30 hover:border-gray-300/30
              hover:shadow-[0_4px_12px_rgba(0,0,0,0.15),0_0_8px_rgba(255,255,255,0.1)]

              ${isOpen ? "bg-gray-400/35 border-gray-300/40 shadow-[0_6px_16px_rgba(0,0,0,0.2),0_0_12px_rgba(255,255,255,0.15)] scale-[1.02]" : ""}

              ${showItems ? "animate-fadeInUp" : "opacity-0"}
              ${showItems ? `animation-delay-[${index * 60}ms]` : ""}
            `}
          >
            <p className={`
              font-semibold transition-all duration-300
              ${isOpen ? "text-zinc-100 text-base mb-2" : "text-zinc-200 text-lg"}
            `}>
              {course}
            </p>

            {isOpen && (
              <p className="text-zinc-300 text-sm leading-snug animate-fadeIn">
                Placeholder description for {course}.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-6">

      {/* CS Folder */}
      <div>
        <button
          onClick={() => setOpenCS(!openCS)}
          className={`
            w-full text-left p-4 rounded-xl 
            bg-gray-400/20 backdrop-blur-md border border-gray-300/20
            transition-all duration-300 font-semibold text-xl
            flex items-center justify-between
            hover:bg-gray-400/30 hover:border-gray-300/30
            hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            transform hover:scale-[1.01]
            ${openCS ? "bg-gray-400/30 border-gray-300/40 shadow-[0_6px_16px_rgba(0,0,0,0.2)]" : ""}
          `}
        >
          <span>Computer Science</span>
          <svg
            className={`
              w-5 h-5 transition-transform duration-300
              ${openCS ? "rotate-180" : ""}
            `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          className={`
            overflow-hidden transition-[max-height] duration-500 ease-in-out
            ${openCS ? "max-h-[2000px]" : "max-h-0"}
          `}
        >
          {renderCourses(csCourses, "cs")}
        </div>
      </div>

      {/* Math Folder */}
      <div>
        <button
          onClick={() => setOpenMath(!openMath)}
          className={`
            w-full text-left p-4 rounded-xl 
            bg-gray-400/20 backdrop-blur-md border border-gray-300/20
            transition-all duration-300 font-semibold text-xl
            flex items-center justify-between
            hover:bg-gray-400/30 hover:border-gray-300/30
            hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            transform hover:scale-[1.01]
            ${openMath ? "bg-gray-400/30 border-gray-300/40 shadow-[0_6px_16px_rgba(0,0,0,0.2)]" : ""}
          `}
        >
          <span>Mathematics</span>
          <svg
            className={`
              w-5 h-5 transition-transform duration-300
              ${openMath ? "rotate-180" : ""}
            `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          className={`
            overflow-hidden transition-[max-height] duration-500 ease-in-out
            ${openMath ? "max-h-[2000px]" : "max-h-0"}
          `}
        >
          {renderCourses(mathCourses, "math")}
        </div>
      </div>
    </div>
  );
}
