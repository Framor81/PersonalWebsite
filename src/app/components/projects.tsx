"use client";

import Image from "next/image";

type FeaturedProject = {
  title: string;
  tagline: string;
  description: string;
  proofPoints: string[];
  tags: string[];
  linkLabel: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
};

type MoreProject = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  inProgress?: boolean;
};

const featured: FeaturedProject[] = [
  {
    title: "Eyes in Motion",
    tagline: "A low-cost gaze interface for assistive mobility.",
    description:
      "I built a real-time eye-tracking system that uses an ordinary webcam to translate gaze direction into movement commands. The project grew from a personal interest in preserving independence for people whose mobility is limited.",
    proofPoints: [
      "Classified six eye states: left, right, up, down, center, and closed",
      "Combined OpenCV, facial landmarks, image processing, and blink-aware controls",
      "Tested the interface with a JetBot as a small-scale mobility platform",
      "Earned 3rd Place in the undergraduate ACM Student Research Competition at Tapia 2025",
    ],
    tags: ["Python", "OpenCV", "Computer Vision", "Robotics", "Accessibility"],
    linkLabel: "Explore the research",
    href: "/publications/EyesInMotionPoster.pdf",
    imageSrc: "/about/Robot.jpeg",
    imageAlt: "JetBot mobility platform used to test the gaze interface",
  },
  {
    title: "P-ickup",
    tagline: "Campus-scale ride matching for the trips students actually take.",
    description:
      "I co-built a rideshare coordination platform for Pomona students traveling to and from regional airports. Its matching system balances overlapping travel windows, airport and terminal constraints, group size, and luggage capacity.",
    proofPoints: [
      "Reached 900+ unique student users traveling to and from regional airports",
      "Built a Python matching engine that turns time windows, destinations, terminals, group size, and baggage limits into automated ride assignments",
      "Built operations tooling in Next.js, React, and TypeScript with role-based access and explainable failure handling",
      "Generated 1,600+ matches at roughly an 88% match rate, processing 500+ submissions in a single Spring Break cycle",
    ],
    tags: ["TypeScript", "Python", "Next.js", "Supabase", "Optimization"],
    linkLabel: "See how matching works",
    href: "https://p-ickup.com/",
    imageSrc: "/about/p-ickupDashboard.jpg",
    imageAlt: "P-ickup dashboard",
  },
  {
    title: "Robot Learning in Simulation",
    tagline: "Training navigation systems before putting robots in the real world.",
    description:
      "At Pomona's ARCS Lab, I helped create dynamic simulation environments for low-cost robot research. I connected Unreal Engine, Python, and machine-learning workflows to generate data, control simulations, and test indoor navigation models.",
    proofPoints: [
      "Built environments and control tools in Unreal Engine 5 and Blender",
      "Created real-time communication between Unreal Engine and Python using OSC",
      "Improved an image-classification model from 22% to 61.2% through iterative experiments",
      "Contributed to research presented at the 2023 and 2024 Southern California Robotics Symposiums",
    ],
    tags: ["Unreal Engine 5", "Python", "PyTorch", "FastAI", "Simulation"],
    linkLabel: "View the research",
    href: "/publications/SCR2024Submission.pdf",
    imageSrc: "/publications/2023Poster.jpg",
    imageAlt: "ARCS Lab research poster on Unreal Engine 5 robot simulation",
  },
];

// Compact cards for other valid projects. Add new entries here as they mature.
const moreProjects: MoreProject[] = [
  {
    title: "3DMuseum",
    description:
      "An interactive 3D museum experience I'm building to explore spatial interfaces on the web.",
    tags: ["3D", "WebGL", "Interaction"],
    href: "/projects/3dmuseum",
    linkLabel: "Preview",
    inProgress: true,
  },
];

const cardBase =
  "rounded-xl bg-gray-400/20 backdrop-blur-md border border-gray-300/20 shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_4px_rgba(255,255,255,0.05)] transition-all duration-300";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs rounded-full border border-gray-300/20 bg-white/5 px-2.5 py-1 text-zinc-300">
      {children}
    </span>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-foreground transition-colors"
    >
      {label}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="w-full space-y-6">
      {/* Featured projects */}
      <div className="space-y-6">
        {featured.map((project) => (
          <article
            key={project.title}
            className={`${cardBase} overflow-hidden hover:bg-gray-400/25 hover:border-gray-300/30 flex flex-col md:flex-row`}
          >
            {project.imageSrc ? (
              <div className="relative w-full h-48 md:h-auto md:w-56 lg:w-64 shrink-0 bg-zinc-800/40">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            ) : (
              <div className="relative w-full h-32 md:h-auto md:w-56 lg:w-64 shrink-0 bg-gradient-to-br from-[#5a0d0d] via-[#320000] to-black flex items-center justify-center">
                <span className="text-4xl" aria-hidden="true">🤖</span>
              </div>
            )}

            <div className="flex-1 p-6 space-y-3">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-zinc-200 font-medium">{project.tagline}</p>
              </div>
              <p className="text-zinc-300 leading-relaxed text-sm">{project.description}</p>
              <ul className="space-y-1.5">
                {project.proofPoints.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-300 leading-snug">
                    <span className="text-[#ff753e] mt-0.5 shrink-0" aria-hidden="true">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="pt-1">
                <ProjectLink href={project.href} label={project.linkLabel} />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* More projects */}
      {moreProjects.length > 0 && (
        <div className="space-y-4 pt-2">
          <h3 className="text-lg font-semibold text-zinc-200">More projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreProjects.map((project) => (
              <div
                key={project.title}
                className={`${cardBase} p-5 space-y-3 hover:bg-gray-400/25 hover:border-gray-300/30`}
              >
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                  {project.inProgress && (
                    <span className="text-[10px] uppercase tracking-wide rounded-full border border-amber-400/30 text-amber-300/90 px-2 py-0.5">
                      In progress
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-300 leading-snug">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                {project.href && (
                  <ProjectLink href={project.href} label={project.linkLabel ?? "Learn more"} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
