"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import CourseworkGrid from "../components/courseWorkGrid";
import ImageGallery from "../components/imageGallery";
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
      <div className={`w-full lg:w-[calc(100%-13rem)] lg:ml-52 ${snapMode ? "snap-y snap-mandatory" : ""}`}>
        
        {/* INTRO */}
        <section 
          id="intro" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 ${snapMode ? "snap-start" : ""}`}
        >
          <div className="max-w-5xl w-full" style={{ marginLeft: 'var(--content-offset-left)' }}>
            {!snapMode && (
              <div className="mb-8">
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight pr-22 text-center">
                  <span className="block pl-4 sm:pl-16">Hello!</span>
                </h1>
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                  <span className="block pl-8 sm:pl-8"> I&apos;m Francisco X. Morales Puente</span>
                </h1>
              </div>
            )}
            {snapMode && (
              <div className="mb-8">
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight pr-22 text-center">
                  <span className="block pl-4 sm:pl-16">Hello!</span>
                </h1>
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                  <span className="block pl-8 sm:pl-8">I&apos;m Francisco X. Morales Puente</span>
                </h1>
              </div>
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
          <div className={`max-w-5xl w-full space-y-4`} style={{ marginLeft: 'var(--content-offset-left)' }}>
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
          <div className={`max-w-5xl w-full flex flex-col items-center`} style={{ marginLeft: 'var(--content-offset-left)' }}>
            <h2 className="text-4xl font-semibold text-foreground mb-16">Projects</h2>
            <div className="flex-1 flex items-center justify-center">
              <ProjectShowcase />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section 
          id="experience" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 ${snapMode ? "snap-start" : ""}`}
        >
          <div className={`max-w-5xl w-full space-y-4`} style={{ marginLeft: 'var(--content-offset-left)' }}>
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
          <div className={`max-w-5xl w-full space-y-4`} style={{ marginLeft: 'var(--content-offset-left)' }}>
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
          <div className={`max-w-5xl w-full space-y-6`} style={{ marginLeft: 'var(--content-offset-left)' }}>
            <h2 className="text-4xl font-semibold">Gallery</h2>
            <ImageGallery />
          </div>
        </section>

        {/* PERSONAL STORY */}
        <section 
          id="about-me" 
          className={`min-h-screen flex items-center justify-center px-6 py-20 ${snapMode ? "snap-start" : ""}`}
        >
  <div
  className={`max-w-5xl w-full space-y-4`}
  style={{ marginLeft: 'var(--content-offset-left)' }}
>
  <h2 className="text-4xl font-semibold">More About Me</h2>
  <p className="text-zinc-300 leading-8">
  My interest in robotics began in high school, where I served as the lead
  programmer for my FTC team. At Pomona, I joined the Autonomous Robots and
  Complex Systems (ARCS) Lab under Anthony J. Clark, contributing to synthetic
  data generation, autonomous navigation, and sim-to-real systems. This work
  led to two posters at the Southern California Robotics Symposium (SCR 2023 &
  SCR 2024), where I presented simulation environments built in Blender and
  Unreal Engine 5 for low-cost robot training.
  <br /><br />
  I now work on <em>Eyes in Motion</em>, a SURP-funded project I am continuing
  as my senior project. Motivated by personal experiences with disability in my
  family, I am building a real-time webcam-based gaze-tracking interface for
  assistive mobility control. My work earned 3rd place at the 2025 ACM TAPIA
  Celebration of Diversity in Computing and focuses on eye segmentation,
  calibration pipelines, teleoperation feedback, and rule-based navigation for
  accessible human–robot interaction.
  <br /><br />
  I am also the founder and president of the 5C Robotics Club (PORO), where I
  mentor students across the Claremont Colleges and lead VEX U competition
  efforts. For the past three years, I’ve served as a TA for Discrete &
  Functional Programming (Haskell) and Data Structures & Advanced Programming
  (Java), while supporting first-generation and Latinx students in STEM.
  <br /><br />
  I also co-develop <em>P-ickup</em>, a rideshare-matching platform used by
  Pomona College and ASPC during major travel periods. Built with TypeScript,
  Python, Pandas, Docker, TailwindCSS, and Supabase, P-ickup uses a custom
  rule-based, multi-pass matching system to handle a complex NP-hard grouping
  problem for over 1,200 students seeking airport rides. It has become a
  reliable campus-scale solution for large travel coordination.
  <br /><br />
  Outside of research, 
  I’m an extrovert who loves soccer, reading light novels, video games,and board game nights.
  I enjoy making people laugh and bringing people together.
  Above all, I want to build technologies that make life easier for those who need it most.
</p>
</div>
        </section>

      </div>
    </>
  );
}
