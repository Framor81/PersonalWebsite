"use client";

import { useState } from "react";

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

export default function CourseworkGrid() {
  const [openFolder, setOpenFolder] = useState<"cs" | "math" | null>(null);
  const [openCourse, setOpenCourse] = useState<number | null>(null);

  const renderCourses = (courses: string[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {courses.map((course, index) => {
        const isOpen = openCourse === index;

        return (
          <div
            key={index}
            onClick={() => setOpenCourse(isOpen ? null : index)}
            className={`
              cursor-pointer select-none rounded-xl p-4 
              transition-all duration-300 ease-in-out
              bg-white/15 backdrop-blur-lg border border-white/10
              shadow-[0_0_8px_rgba(255,255,255,0.08)]
              ${isOpen ? "bg-white/25 border-white/30 shadow-[0_0_12px_rgba(255,255,255,0.15)]" : ""}
            `}
          >
            <p className={`
              font-semibold transition-all duration-300
              ${isOpen ? "text-zinc-100 text-base mb-2" : "text-zinc-200 text-lg"}
            `}>
              {course}
            </p>

            {isOpen && (
              <p className="text-zinc-300 text-sm leading-snug">
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
          onClick={() => setOpenFolder(openFolder === "cs" ? null : "cs")}
          className={`
            w-full text-left p-4 rounded-xl 
            bg-white/20 backdrop-blur-lg border border-white/10
            transition-all duration-300 font-semibold text-xl
            ${openFolder === "cs" ? "bg-white/30 border-white/30 shadow-lg" : ""}
          `}
        >
          Computer Science
        </button>

        {/* folder expands content */}
        <div
          className={`
            overflow-hidden transition-[max-height,opacity] duration-500
            ${openFolder === "cs" ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {renderCourses(csCourses)}
        </div>
      </div>

      {/* Math Folder */}
      <div>
        <button
          onClick={() => setOpenFolder(openFolder === "math" ? null : "math")}
          className={`
            w-full text-left p-4 rounded-xl 
            bg-white/20 backdrop-blur-lg border border-white/10
            transition-all duration-300 font-semibold text-xl
            ${openFolder === "math" ? "bg-white/30 border-white/30 shadow-lg" : ""}
          `}
        >
          Mathematics
        </button>

        <div
          className={`
            overflow-hidden transition-[max-height,opacity] duration-500
            ${openFolder === "math" ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {renderCourses(mathCourses)}
        </div>
      </div>
    </div>
  );
}
