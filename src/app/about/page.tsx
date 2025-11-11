"use client";
import Image from "next/image";

import CourseworkGrid from "../components/courseWorkGrid";
import ProjectShowcase from "../components/projectShowcase";
import TableOfContents from "../components/TableOfContents";

export default function AboutPage() {
  return (
    <>
      {/* LEFT-SIDE TABLE OF CONTENTS */}
      <TableOfContents />

      {/* MAIN CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-15">
        {/* HEADER */}
        <div className="mb-1">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
            <span className="block pl-4 sm:pl-16">Hello! I'm Francisco X. </span>
            <span className="block pl-8 sm:pl-44">Morales Puente</span>

        </h1>
        </div>
        
        {/* INTRO */}
        <section id="intro" className="space-y-6 mt-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            
            {/* Profile Image (Left) */}
            <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-zinc-800/30 backdrop-blur-md flex items-center justify-center shrink-0">
                <Image
                    src="/about/me_face.jpg"
                    alt="Profile photo of Francisco Xavier Morales Puente"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover object-bottom"
                    priority
                />
            </div>

            {/* Text Content (Right) */}
            <div className="flex flex-col space-y-4">
                <p className="text-lg text-zinc-300 leading-8">
                I’m a 22-year-old first-generation, low-income Latino in STEM, and a
                software engineer and academic researcher born and raised in Austin, Texas,
                now based in Claremont, California.
                <br /><br />
                Growing up, I watched my family work tirelessly to give me every
                opportunity. As the strongest people I knew began to age, face injuries,
                and lose mobility, I realized how fragile independence can be. That
                awareness drives my passion for assistive technologies. I’m especially
                interested in robotics as a way to support and empower individuals by
                reducing the physical burdens that limit their daily lives.
                </p>
            </div>

          </div>
        </section>


        {/* EDUCATION */}
        <section id="education" className="space-y-4">
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
        </section>


        {/* PROJECTS */}
        <section id="projects" className="space-y-10">
          <h2 className="text-4xl font-semibold text-foreground">Projects</h2>

          {/* INTERACTIVE PROJECT CIRCLES */}
          <ProjectShowcase />
        </section>


        {/* EXPERIENCE */}
        <section id="experience" className="space-y-4">
          <h2 className="text-4xl font-semibold">Experience</h2>
          <p className="text-zinc-300 leading-8">
            Placeholder for experience.
          </p>
        </section>


        {/* AWARDS */}
        <section id="awards" className="space-y-4">
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
        </section>


        {/* GALLERY */}
        <section id="gallery" className="space-y-4">
          <h2 className="text-4xl font-semibold">Gallery</h2>
          <p className="text-zinc-300">Images will go here.</p>
        </section>


        {/* PERSONAL STORY */}
        <section id="about-me" className="space-y-4">
          <h2 className="text-4xl font-semibold">More About Me</h2>
          <p className="text-zinc-300 leading-8">
            Placeholder for personal story or extended biography.
          </p>
        </section>

      </div>
    </>
  );
}
