"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import CourseworkGrid from "../components/courseWorkGrid";
import ProjectShowcase from "../components/projectShowcase";
import TableOfContents from "../components/TableOfContents";

export default function AboutPage() {
  const [snapMode, setSnapMode] = useState(false);

  useEffect(() => {
    if (snapMode) {
      document.documentElement.style.scrollSnapType = "y mandatory";
    } else {
      document.documentElement.style.scrollSnapType = "none";
    }
    return () => {
      document.documentElement.style.scrollSnapType = "none";
    };
  }, [snapMode]);

  return (
    <>
      {/* LEFT-SIDE TABLE OF CONTENTS */}
      <TableOfContents />

      {/* Toggle Button */}
      <button
        onClick={() => setSnapMode(!snapMode)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-gray-400/20 backdrop-blur-md border border-gray-300/20 text-zinc-300 hover:bg-gray-400/30 hover:text-zinc-200 transition-all text-sm font-medium"
        title={snapMode ? "Switch to continuous scroll" : "Switch to page snap mode"}
      >
        {snapMode ? "📄 Continuous" : "📑 Page Snap"}
      </button>

      {/* MAIN CONTENT */}
      <div className={`w-full lg:ml-52 ${snapMode ? "snap-y snap-mandatory" : ""}`}>
        
        {/* INTRO */}
        <section 
          id="intro" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 ${snapMode ? "snap-start" : ""}`}
        >
          <div className="max-w-3xl w-full" style={{ marginLeft: 'var(--content-offset-left)' }}>
            {!snapMode && (
              <div className="mb-8">
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                  <span className="block pl-4 sm:pl-16">Hello! I&apos;m Francisco X.</span>
                  <span className="block pl-8 sm:pl-44">Morales Puente</span>
                </h1>
              </div>
            )}
            {snapMode && (
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-12">
                <span className="block pl-4 sm:pl-16">Hello! I&apos;m Francisco X.</span>
                <span className="block pl-8 sm:pl-44">Morales Puente</span>
              </h1>
            )}

            {/* Image and Text Layout */}
            <div className="flex flex-col sm:flex-row items-center gap-8 mt-8">
              {/* Profile Image - Larger Square, on the left, centered between paragraphs */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-zinc-800/30 backdrop-blur-md flex items-center justify-center shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="/about/me_face.jpg"
                  alt="Profile photo of Francisco Xavier Morales Puente"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-bottom"
                  priority
                />
              </div>

              {/* Text Content - Two paragraphs on the right */}
              <div className="flex flex-col space-y-6 flex-1">
                {/* First Paragraph */}
                <p className="text-lg text-zinc-300 leading-8">
                  I&apos;m a 22-year-old first-generation, low-income Latino in STEM, and a
                  software engineer and academic researcher born and raised in Austin, Texas,
                  now based in Claremont, California.
                </p>

                {/* Second Paragraph */}
                <p className="text-lg text-zinc-300 leading-8">
                  Growing up, I watched my family work tirelessly to give me every
                  opportunity. As the strongest people I knew began to age, face injuries,
                  and lose mobility, I realized how fragile independence can be. That
                  awareness drives my passion for assistive technologies. I&apos;m especially
                  interested in robotics as a way to support and empower individuals by
                  reducing the physical burdens that limit their daily lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section 
          id="education" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 ${snapMode ? "snap-start" : ""}`}
        >
          <div className={`max-w-3xl w-full space-y-4`} style={{ marginLeft: 'var(--content-offset-left)' }}>
            <h2 className="text-4xl font-semibold text-foreground">Education</h2>
            <p className="text-zinc-300 leading-8">
              <strong>Pomona College — Claremont, CA</strong><br />
              B.A. in Computer Science & Mathematics (General Track)<br />
              Expected Graduation: May 2026<br />
              GPA: 3.986
            </p>

            <div className="text-zinc-300 leading-7 mt-4 space-y-1">
              <h3 className="text-2xl font-semibold text-foreground">Relevant Coursework</h3>
              <CourseworkGrid />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section 
          id="projects" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 ${snapMode ? "snap-start" : ""}`}
        >
          <div className={`max-w-3xl w-full space-y-10`} style={{ marginLeft: 'var(--content-offset-left)' }}>
            <h2 className="text-4xl font-semibold text-foreground">Projects</h2>
            <ProjectShowcase />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section 
          id="experience" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 ${snapMode ? "snap-start" : ""}`}
        >
          <div className={`max-w-3xl w-full space-y-4`} style={{ marginLeft: 'var(--content-offset-left)' }}>
            <h2 className="text-4xl font-semibold">Experience</h2>
            <p className="text-zinc-300 leading-8">
              Placeholder for experience.
            </p>
          </div>
        </section>

        {/* AWARDS */}
        <section 
          id="awards" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 ${snapMode ? "snap-start" : ""}`}
        >
          <div className={`max-w-3xl w-full space-y-4`} style={{ marginLeft: 'var(--content-offset-left)' }}>
            <h2 className="text-4xl font-semibold">Awards & Honors</h2>
            <ul className="list-disc list-inside text-zinc-300 leading-7 space-y-2">
              <li>
                <strong>ACM Student Research Competition (Undergraduate Division), 3rd Place</strong> — Tapia Conference 2025
              </li>
              <li><strong>Pomona College Scholar Designation</strong> (3 semesters)</li>
              <li><strong>QuestBridge Match Scholar</strong></li>
              <li><strong>Dell Scholar</strong> (2020–present)</li>
              <li><strong>Summer Undergraduate Research Project Fellow</strong></li>
              <li><strong>Society of Hispanic Professional Engineers (SHPE) Member</strong></li>
            </ul>
          </div>
        </section>

        {/* GALLERY */}
        <section 
          id="gallery" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 ${snapMode ? "snap-start" : ""}`}
        >
          <div className={`max-w-3xl w-full space-y-4`} style={{ marginLeft: 'var(--content-offset-left)' }}>
            <h2 className="text-4xl font-semibold">Gallery</h2>
            <p className="text-zinc-300">Images will go here.</p>
          </div>
        </section>

        {/* PERSONAL STORY */}
        <section 
          id="about-me" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 pb-32 ${snapMode ? "snap-start" : ""}`}
        >
          <div className={`max-w-3xl w-full space-y-4`} style={{ marginLeft: 'var(--content-offset-left)' }}>
            <h2 className="text-4xl font-semibold">More About Me</h2>
            <p className="text-zinc-300 leading-8">
              Placeholder for personal story or extended biography.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
