import Image from "next/image";

import CourseworkGrid from "./components/courseWorkGrid";
import ImageGallery from "./components/imageGallery";
import Projects from "./components/projects";
import Publications from "./components/publications";
import Timeline from "./components/timeline";
import TableOfContents from "./components/TableOfContents";

const glassCard =
  "rounded-xl bg-gray-400/20 backdrop-blur-md border border-gray-300/20 shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_4px_rgba(255,255,255,0.05)] transition-all";

const atAGlance = [
  { label: "Now", value: "AI Native Software Engineer at Accenture" },
  { label: "Education", value: "B.A. in Computer Science & Mathematics, Pomona College '26" },
  { label: "Research", value: "Assistive technology, robotics, and human-computer interaction" },
  { label: "Recognition", value: "3rd Place, ACM Student Research Competition at Tapia 2025" },
  { label: "Community", value: "Co-builder of P-ickup" },
];

const experience = [
  {
    company: "Accenture",
    role: "AI Native Software Engineer",
    meta: "August 2026 to Present · Austin, TX",
    bullets: [
      "Build AI agents and multi-step agentic workflows, applying tool use, reasoning, planning, prompt design, and workflow automation.",
      "Apply Python, TypeScript, LLMs, and AI-assisted development tools to software engineering and automation-focused technical work.",
      "Completed Udacity training in Building Agents, Agentic Workflows, and Prompting for LLM Reasoning and Planning.",
    ],
  },
  {
    company: "Assistive Technology Research",
    role: "Independent Researcher",
    meta: "May 2024 to August 2026 · Claremont, CA",
    bullets: [
      "Developed a real-time gaze-controlled assistive system in Python, OpenCV, and Dlib that translated webcam eye tracking into hands-free robotic control.",
      "Engineered low-latency perception and human-in-the-loop control pipelines with stabilization, failure handling, and safeguards for noisy sensor inputs.",
      "Presented the system at the ACM Student Research Competition, earning 3rd place in the Undergraduate Division.",
    ],
  },
  {
    company: "Pomona College, ARCS Laboratory",
    role: "Research Assistant",
    meta: "June 2023 to May 2026 · Claremont, CA",
    bullets: [
      "Built robotic simulation and data-generation systems in Unreal Engine 5, Python, and Blender, integrating a custom OSC interface for real-time data collection and model training.",
      "Extended UnrealCV in C++ with new domain-randomization functionality for computer-vision training environments.",
    ],
  },
  {
    company: "Pomona College",
    role: "Teaching Assistant",
    meta: "January 2024 to May 2026 · Claremont, CA",
    bullets: [
      "Facilitated code reviews and reinforced core concepts in object-oriented programming and data structures for 85+ students across multiple course offerings.",
      "Supported students in Discrete and Functional Programming (CSCI054) by teaching Haskell fundamentals, leading study sessions, and guiding them through complex theoretical material.",
    ],
  },
  {
    company: "Accenture",
    role: "Tech Architecture Summer Analyst",
    meta: "June 2025 to August 2025 · Austin, TX",
    bullets: [
      "Engineered real-time observability dashboards using Prometheus, Grafana, Loki, and InfluxDB to monitor application health, infrastructure metrics, API traffic, and failures.",
      "Designed centralized telemetry pipelines across 5+ services, consolidating logs and metrics while reducing information retrieval time by roughly 50%.",
      "Diagnosed failures across Linux, Spring Boot, Tomcat, and Cassandra environments using SSH, grep, tail, systemctl, logs, and telemetry.",
    ],
  },
];

const additionalHonors = [
  "Pomona College Scholar, three semesters",
  "QuestBridge Match Scholar",
  "Dell Scholar",
  "Summer Undergraduate Research Project Fellow",
];

const quickFacts = [
  "Based in Austin",
  "English and Spanish",
  "Soccer player and rock climber",
  "Light-novel reader",
  "Magic: The Gathering player",
  "Usually building a side project",
];

export default function AboutPage() {
  return (
    <>
      <TableOfContents />

      <main className="w-full lg:w-[calc(100%-13rem)] lg:ml-52">
        {/* ---------- HERO ---------- */}
        <section
          id="intro"
          className="min-h-screen scroll-mt-20 flex items-center justify-center px-6 py-28 lg:py-24"
        >
          <div className="max-w-5xl w-full flex flex-col-reverse sm:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 text-center sm:text-left">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Hello, I&apos;m Francisco.
                </h1>
                <p className="text-xl sm:text-2xl text-zinc-200 font-medium text-balance">
                  Software engineer into AI, robotics, and accessible tech. Building tools people actually use every day.
                </p>
              </div>
              <p className="text-base sm:text-lg text-zinc-300 leading-8 max-w-2xl mx-auto sm:mx-0">
                I&apos;m an AI Native Software Engineer at Accenture and a recent Pomona College
                graduate in Computer Science and Mathematics. My work spans full-stack development,
                applied AI, robotics, and human-centered technology.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-1">
                <a
                  href="#projects"
                  className={`${glassCard} px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-gray-400/30 hover:border-gray-300/40`}
                >
                  View my work
                </a>
                <a
                  href="/about/FranciscoResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${glassCard} px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-gray-400/30 hover:border-gray-300/40`}
                >
                  Download résumé
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:text-foreground transition-colors"
                >
                  Connect with me →
                </a>
              </div>
            </div>

            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shrink-0 rounded-2xl overflow-hidden bg-zinc-800/30 backdrop-blur-md border border-gray-300/20">
              <Image
                src="/about/me_face.jpg"
                alt="Profile photo of Francisco Xavier Morales Puente"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-bottom"
                priority
              />
            </div>
          </div>
        </section>

        {/* ---------- AT A GLANCE ---------- */}
        <section id="at-a-glance" className="scroll-mt-20 flex justify-center px-6 py-20">
          <div className="max-w-5xl w-full space-y-6">
            <h2 className="text-4xl font-semibold text-foreground">At a glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {atAGlance.map((fact) => (
                <div key={fact.label} className={`${glassCard} p-4 hover:bg-gray-400/25`}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#ff753e] mb-2">
                    {fact.label}
                  </p>
                  <p className="text-sm text-zinc-200 leading-snug">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section id="projects" className="scroll-mt-20 flex justify-center px-6 py-20">
          <div className="max-w-5xl w-full space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold text-foreground">Projects</h2>
              <p className="text-zinc-400">A few things I&apos;ve built, from research to production.</p>
            </div>
            <Projects />
          </div>
        </section>

        {/* ---------- TIMELINE / ABOUT ---------- */}
        <section id="about" className="scroll-mt-20 flex justify-center px-6 py-20">
          <div className="max-w-5xl w-full space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold text-foreground">The short version</h2>
              <p className="text-zinc-400">How I got from a high-school robotics team to human-centered engineering.</p>
            </div>
            <Timeline />
          </div>
        </section>

        {/* ---------- EXPERIENCE ---------- */}
        <section id="experience" className="scroll-mt-20 flex justify-center px-6 py-20">
          <div className="max-w-5xl w-full space-y-6">
            <h2 className="text-4xl font-semibold text-foreground">Experience</h2>
            <div className="space-y-4">
              {experience.map((job) => (
                <div key={`${job.company}-${job.role}`} className={`${glassCard} p-5 hover:bg-gray-400/25`}>
                  <h3 className="text-xl font-semibold !text-yellow-600">{job.role}</h3>
                  <p className="text-zinc-200 font-medium">{job.company}</p>
                  <p className="text-zinc-400 text-sm italic">{job.meta}</p>
                  <ul className="list-disc list-inside text-zinc-300 leading-snug space-y-1 mt-2 text-sm">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- PUBLICATIONS ---------- */}
        <section id="publications" className="scroll-mt-20 flex justify-center px-6 py-20">
          <div className="max-w-5xl w-full space-y-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold text-foreground">Publications</h2>
              <p className="text-zinc-400">Peer-reviewed research, posters, and an in-progress thesis.</p>
            </div>
            <Publications />
          </div>
        </section>

        {/* ---------- AWARDS & RECOGNITION ---------- */}
        <section id="awards" className="scroll-mt-20 flex justify-center px-6 py-20">
          <div className="max-w-5xl w-full space-y-6">
            <h2 className="text-4xl font-semibold text-foreground">Awards and recognition</h2>

            <div className={`${glassCard} p-5 border-amber-400/30`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">🏆</span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    3rd Place, ACM Student Research Competition, Undergraduate Division
                  </h3>
                  <p className="text-sm text-zinc-300 mt-1">
                    2025 Tapia Conference · Eyes in Motion: Utilizing Eye Tracking for Assistive Technology
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-3">Additional honors</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-zinc-300 leading-7 list-disc list-inside">
                {additionalHonors.map((honor) => (
                  <li key={honor}>{honor}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- EDUCATION ---------- */}
        <section id="education" className="scroll-mt-20 flex justify-center px-6 py-20">
          <div className="max-w-5xl w-full space-y-6">
            <h2 className="text-4xl font-semibold text-foreground">Education</h2>
            <div className={`${glassCard} p-5`}>
              <h3 className="text-xl font-semibold text-foreground">Pomona College, Claremont, CA</h3>
              <p className="text-zinc-300 mt-1">
                B.A. in Computer Science &amp; Mathematics, 2026
                <br />
                GPA: 3.99 / 4.00
              </p>
            </div>

            <details className="group">
              <summary className="cursor-pointer list-none inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-foreground transition-colors">
                <svg
                  className="w-4 h-4 transition-transform group-open:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                Relevant coursework
              </summary>
              <div className="mt-4">
                <CourseworkGrid />
              </div>
            </details>
          </div>
        </section>

        {/* ---------- BEYOND THE CODE ---------- */}
        <section id="beyond" className="scroll-mt-20 flex justify-center px-6 py-20">
          <div className="max-w-5xl w-full space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold text-foreground">Beyond the code</h2>
              <p className="text-zinc-400">I like building communities too.</p>
            </div>

            <p className="text-zinc-300 leading-8">
              I&apos;m a first-generation Mexican American engineer from Austin, Texas. I founded the
              5C Robotics Club, mentored first-year and Latinx students in STEM, and spent three
              years helping students work through everything from Haskell proofs to Java data
              structures.
            </p>
            <p className="text-zinc-300 leading-8">
              Away from a keyboard, you&apos;ll usually find me playing soccer, rock climbing, reading
              light novels, trying a new game, or convincing friends to join a board-game night.
            </p>

            <div className="flex flex-wrap gap-2">
              {quickFacts.map((fact) => (
                <span
                  key={fact}
                  className="text-sm rounded-full border border-gray-300/20 bg-white/5 px-3 py-1.5 text-zinc-300"
                >
                  {fact}
                </span>
              ))}
            </div>

            <div className="pt-4 overflow-hidden">
              <ImageGallery />
            </div>
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="min-h-screen scroll-mt-20 flex items-center justify-center px-6 py-24">
          <div className="max-w-5xl w-full space-y-6">
            <h2 className="text-4xl font-semibold text-foreground">Let&apos;s build something useful.</h2>
            <p className="text-lg text-zinc-300 leading-8 max-w-2xl">
              I&apos;m especially interested in software engineering, applied AI, robotics, accessible
              technology, and products that make complicated systems feel simple.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/francisco-morales-puente-a93479259/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${glassCard} px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-gray-400/30 hover:border-gray-300/40`}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Framor81"
                target="_blank"
                rel="noopener noreferrer"
                className={`${glassCard} px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-gray-400/30 hover:border-gray-300/40`}
              >
                GitHub
              </a>
              <a
                href="/about/FranciscoResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${glassCard} px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-gray-400/30 hover:border-gray-300/40`}
              >
                Résumé
              </a>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
              <div className={`${glassCard} p-4`}>
                <dt className="text-[#ff753e] font-semibold mb-1">Current status</dt>
                <dd className="text-zinc-300">Working at Accenture as an AI Native Software Engineer in Austin, Texas.</dd>
              </div>
              <div className={`${glassCard} p-4`}>
                <dt className="text-[#ff753e] font-semibold mb-1">My favorite kind of problem</dt>
                <dd className="text-zinc-300">Messy in the real world, elegant once understood.</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </>
  );
}
