"use client";

import Image from "next/image";

type Stat = { value: string; label: string };
type ProjectLinkItem = { label: string; href: string; primary?: boolean };
type Badge = "live" | "award" | "research" | "side" | "progress";

type FeaturedProject = {
  title: string;
  badges: { kind: Badge; text: string }[];
  pitch: string;
  stats: Stat[];
  highlights: string[];
  tags: string[];
  links: ProjectLinkItem[];
  imageSrc?: string;
  imageAlt?: string;
};

type SideProject = {
  title: string;
  badge: { kind: Badge; text: string };
  pitch: string;
  highlights?: string[];
  tags: string[];
  links?: ProjectLinkItem[];
  wide?: boolean;
};

// Flagship work, ordered by what a hiring manager should see first.
const featured: FeaturedProject[] = [
  {
    title: "OpenArena",
    badges: [{ kind: "live", text: "Live playtest" }],
    pitch:
      "A free, browser-based Magic: The Gathering Commander platform where 2 to 4 players get fully rules-enforced games with an Arena-style interface.",
    stats: [
      { value: "2 to 4", label: "players per table" },
      { value: "100-card", label: "validated decks" },
      { value: "Live", label: "public deployment" },
    ],
    highlights: [
      "Integrated a pinned XMage Java rules engine behind a React and TypeScript client through a custom adapter, so triggers, the stack, commander tax, and commander damage are enforced end to end. Full 2- and 4-player games run through it.",
      "Built seat reconnect so a browser refresh or brief network drop keeps a player in a live game.",
      "Automates routine actions without ever making strategic choices for the player, while keeping manual payment and full control available.",
      "Shipped deck import from Moxfield-style exports, optional Supabase accounts with cloud decks and game history, and a production host on an Oracle Cloud VM behind Caddy HTTPS.",
    ],
    tags: ["TypeScript", "React", "Java", "XMage", "Supabase", "Cloud deployment"],
    links: [{ label: "Play the live demo", href: "https://openarena-jack.duckdns.org/", primary: true }],
  },
  {
    title: "P-ickup",
    badges: [{ kind: "live", text: "Real users" }],
    pitch:
      "Cofounded and led engineering on a ride-matching platform that groups Claremont Colleges students into shared airport rides.",
    stats: [
      { value: "900+", label: "unique student users" },
      { value: "1,600+", label: "matches generated" },
      { value: "~88%", label: "match rate" },
    ],
    highlights: [
      "Wrote a Python matching engine for an NP-hard grouping problem, turning time windows, airports, terminals, group size, and luggage limits into automated groups of 2 to 4 riders with a rule-based multi-pass approach.",
      "Built operations tooling in Next.js, React, and TypeScript with role-based access and explainable failures, so every unmatched request is classified as a time, terminal, or capacity conflict.",
      "Processed 500+ submissions in a single Spring Break cycle, with Pomona College and ASPC relying on it during major travel periods.",
    ],
    tags: ["Python", "TypeScript", "Next.js", "Supabase", "Docker", "Optimization"],
    links: [{ label: "Visit P-ickup", href: "https://p-ickup.com/", primary: true }],
    imageSrc: "/about/p-ickupDashboard.jpg",
    imageAlt: "P-ickup dashboard",
  },
  {
    title: "Eyes in Motion",
    badges: [{ kind: "award", text: "3rd Place, ACM SRC" }],
    pitch:
      "A hands-free control system that turns an ordinary webcam into a gaze interface for assistive mobility.",
    stats: [
      { value: "3rd", label: "ACM Student Research Competition" },
      { value: "6", label: "eye states classified" },
      { value: "1", label: "webcam, no special hardware" },
    ],
    highlights: [
      "Built real-time gaze tracking in Python with OpenCV and Dlib facial landmarks, classifying left, right, up, down, center, and closed.",
      "Engineered a low-latency, human-in-the-loop control pipeline with stabilization, blink-aware commands, and safeguards for noisy input.",
      "Drove a JetBot as a small-scale mobility platform, and presented the work at the 2025 Tapia Conference.",
    ],
    tags: ["Python", "OpenCV", "Dlib", "Computer Vision", "Robotics", "Accessibility"],
    links: [
      { label: "Read the paper", href: "/publications/EyesInMotionPoster.pdf", primary: true },
      { label: "Code", href: "https://github.com/Framor81/2024-SURP--Eyes-In-Motion-" },
    ],
    imageSrc: "/about/Robot.jpeg",
    imageAlt: "JetBot mobility platform used to test the gaze interface",
  },
  {
    title: "Robot Learning in Simulation",
    badges: [{ kind: "research", text: "Published research" }],
    pitch:
      "Simulation and data-generation tools at Pomona's ARCS Lab for training indoor robot navigation before touching real hardware.",
    stats: [
      { value: "61.2%", label: "model accuracy, up from 22%" },
      { value: "2", label: "symposium papers" },
      { value: "C++", label: "UnrealCV extension" },
    ],
    highlights: [
      "Built Unreal Engine 5 and Blender environments plus a Python to Unreal OSC bridge for real-time control and data collection.",
      "Extended UnrealCV in C++ with domain randomization for computer-vision training environments.",
      "Raised an image-classification model from 22% to 61.2% accuracy through iterative experiments, contributing to papers at the 2023 and 2024 Southern California Robotics Symposiums.",
    ],
    tags: ["Unreal Engine 5", "C++", "Python", "PyTorch", "FastAI", "Simulation"],
    links: [
      { label: "Read the paper", href: "/publications/SCR2024Submission.pdf", primary: true },
      { label: "Code", href: "https://github.com/Framor81/ue5osc" },
    ],
    imageSrc: "/publications/2023Poster.jpg",
    imageAlt: "ARCS Lab research poster on Unreal Engine 5 robot simulation",
  },
];

// Things I build for fun. Add new entries here as they mature.
const sideProjects: SideProject[] = [
  {
    title: "Strum Coach",
    badge: { kind: "side", text: "Side project" },
    pitch:
      "A browser guitar coach that listens through your mic, grades your strumming timing, and tells you whether you played the right chord.",
    highlights: [
      "Hand-built all the signal processing in plain TypeScript with zero runtime dependencies: onset detection, grid-informed strum detection, and chord recognition that fits each string's harmonics with non-negative least squares.",
      "Keeps sample-accurate timing on the Web Audio clock and measures latency automatically from the metronome click.",
      "Uses MediaPipe hand tracking and a fretboard homography to check finger placement, plus a physically modeled guitar synth. Covered by 95 tests on synthesized audio, and everything runs locally in the browser.",
    ],
    tags: ["TypeScript", "Web Audio", "DSP", "MediaPipe"],
    wide: true,
  },
  {
    title: "3DMuseum",
    badge: { kind: "progress", text: "In progress" },
    pitch: "An interactive 3D museum experience I'm building to explore spatial interfaces on the web.",
    tags: ["3D", "WebGL", "Interaction"],
    links: [{ label: "Visit", href: "/projects/3dmuseum" }],
  },
];

const cardBase =
  "rounded-xl bg-gray-400/20 backdrop-blur-md border border-gray-300/20 shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_4px_rgba(255,255,255,0.05)] transition-all duration-300";

const badgeStyles: Record<Badge, string> = {
  live: "border-emerald-400/40 text-emerald-300 bg-emerald-400/10",
  award: "border-amber-400/40 text-amber-300 bg-amber-400/10",
  research: "border-sky-400/40 text-sky-300 bg-sky-400/10",
  side: "border-fuchsia-400/40 text-fuchsia-300 bg-fuchsia-400/10",
  progress: "border-amber-400/30 text-amber-300/90 bg-transparent",
};

function BadgePill({ kind, text }: { kind: Badge; text: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide rounded-full border px-2.5 py-0.5 ${badgeStyles[kind]}`}
    >
      {kind === "live" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />}
      {text}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs rounded-full border border-gray-300/20 bg-white/5 px-2.5 py-1 text-zinc-300">
      {children}
    </span>
  );
}

function LinkButton({ link }: { link: ProjectLinkItem }) {
  const external = link.href.startsWith("http") || link.href.endsWith(".pdf");
  return (
    <a
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={
        link.primary
          ? "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-white bg-[#b3261e]/80 hover:bg-[#c8352b] border border-[#ff753e]/30 transition-colors"
          : "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-gray-300/20 transition-colors"
      }
    >
      {link.label}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-zinc-300 leading-relaxed">
          <span className="text-[#ff753e] mt-0.5 shrink-0" aria-hidden="true">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <div className="w-full space-y-10">
      {/* Flagship projects */}
      <div className="space-y-6">
        {featured.map((project) => (
          <article
            key={project.title}
            className={`${cardBase} overflow-hidden hover:border-gray-300/30 flex flex-col md:flex-row`}
          >
            {project.imageSrc && (
              <div className="relative w-full h-52 md:h-auto md:w-56 lg:w-64 shrink-0 bg-zinc-800/40">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            )}

            <div className="flex-1 p-6 space-y-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                  {project.badges.map((b) => (
                    <BadgePill key={b.text} kind={b.kind} text={b.text} />
                  ))}
                </div>
                <p className="text-zinc-200 leading-relaxed">{project.pitch}</p>
              </div>

              {/* Headline numbers, for a fast skim */}
              <div className="grid grid-cols-3 gap-3">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-black/20 border border-white/10 px-3 py-2.5">
                    <p className="text-lg sm:text-xl font-bold text-[#ff8a5c] leading-none">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs text-zinc-400 mt-1.5 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Highlights items={project.highlights} />

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <LinkButton key={link.label} link={link} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Side projects */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">Side projects</h3>
          <p className="text-sm text-zinc-400">Things I build because I want them to exist.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sideProjects.map((project) => (
            <div
              key={project.title}
              className={`${cardBase} p-5 space-y-4 hover:border-gray-300/30 ${project.wide ? "md:col-span-2" : ""}`}
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h4 className="text-lg font-semibold text-[#ff8a5c] tracking-tight">{project.title}</h4>
                  <BadgePill kind={project.badge.kind} text={project.badge.text} />
                </div>
                <p className="text-sm text-zinc-200 leading-relaxed">{project.pitch}</p>
              </div>
              {project.highlights && <Highlights items={project.highlights} />}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {project.links && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <LinkButton key={link.label} link={link} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
