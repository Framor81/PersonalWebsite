"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Stat = { value: string; label: string };
type Shot = { src: string; alt: string; caption: string };
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
  // Wide screenshots shown across the top of the card, first one is the main image.
  gallery?: Shot[];
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
    gallery: [
      {
        src: "/projects/openarena-combat.jpg",
        alt: "OpenArena four-player Commander game during the declare attackers step",
        caption: "Four-player combat: attackers drawn to the opponents they target",
      },
      {
        src: "/projects/openarena-stack.jpg",
        alt: "OpenArena showing the spell stack with a counterspell targeting another spell",
        caption: "The stack, with each spell's target drawn on the board",
      },
      {
        src: "/projects/openarena-2p.jpg",
        alt: "OpenArena two-player Commander game in the main phase",
        caption: "A two-player game in the main phase",
      },
    ],
  },
  {
    title: "Cenzis",
    badges: [{ kind: "live", text: "Live demo" }],
    pitch:
      "An embeddable product-feedback widget I'm co-building, where reporters earn credibility across companies so teams know whose reports to trust.",
    stats: [
      { value: "~68 KB", label: "one-script-tag widget" },
      { value: "~160 ms", label: "AI triage per report" },
      { value: "5", label: "sealed evaluation tests" },
    ],
    highlights: [
      "Built the widget in vanilla TypeScript with Web Components and Shadow DOM, so it drops onto any site with a single script tag and no CSS clashes. Visitors can screenshot and annotate the page or record their interaction, with sensitive fields masked.",
      "Designed a multi-tenant Supabase backend: Postgres row-level security, a Deno edge function that checks each site's allowed origins, private screenshot storage, and a trigger that recomputes every reporter's credibility.",
      "Built a demo where TypeSafe's Jev model sorts incoming reports in about 160 ms while the routing stays in ordinary code the site owner controls, then measured it with five sealed tests and published every miss.",
    ],
    tags: ["TypeScript", "Web Components", "Supabase", "Postgres", "Next.js", "AI evaluation"],
    links: [{ label: "Try the live demo", href: "https://cenzis-jev-demo.vercel.app/", primary: true }],
    gallery: [
      {
        src: "/projects/cenzis-overview.jpg",
        alt: "Cenzis and Jev demo overview page",
        caption: "The demo: Jev reads a report's note and screenshot in about 160 ms",
      },
      {
        src: "/projects/cenzis-jev-answers.jpg",
        alt: "Jev's answers to the small yes or no questions about one report",
        caption: "Jev's answers for one report, filed as a bug by plain code",
      },
      {
        src: "/projects/cenzis-widget.jpg",
        alt: "The Cenzis widget embedded on a mock checkout page",
        caption: "The real widget, embedded with one script tag on a mock checkout",
      },
      {
        src: "/projects/cenzis-inbox.jpg",
        alt: "The Cenzis owner inbox that explains why each report was sorted",
        caption: "The owner inbox shows the reason behind every sort",
      },
    ],
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

function Lightbox({
  shots,
  index,
  onClose,
  onMove,
}: {
  shots: Shot[];
  index: number;
  onClose: () => void;
  onMove: (step: number) => void;
}) {
  // Keyboard controls + lock background scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onMove(1);
      else if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onMove]);

  const shot = shots[index]!;
  const navButton =
    "absolute w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Expanded screenshot"
    >
      <button onClick={onClose} aria-label="Close" className={`${navButton} top-4 right-4`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {shots.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMove(-1);
            }}
            aria-label="Previous screenshot"
            className={`${navButton} left-3 sm:left-5 top-1/2 -translate-y-1/2`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMove(1);
            }}
            aria-label="Next screenshot"
            className={`${navButton} right-3 sm:right-5 top-1/2 -translate-y-1/2`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      <div
        className="relative w-full max-w-6xl h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={shot.src} alt={shot.alt} fill sizes="100vw" className="object-contain" priority />
      </div>
      <p className="mt-4 text-sm text-white/80 text-center max-w-2xl">
        {shot.caption} <span className="text-white/50">· {index + 1} / {shots.length}</span>
      </p>
    </div>
  );
}

function ProjectGallery({ shots, title }: { shots: Shot[]; title: string }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const shot = shots[active]!;

  const close = useCallback(() => setOpen(false), []);
  const move = useCallback(
    (step: number) => setActive((i) => (i + step + shots.length) % shots.length),
    [shots.length]
  );

  return (
    <div className="p-4 pb-0 space-y-3">
      <button
        onClick={() => setOpen(true)}
        aria-label={`Expand ${title} screenshot`}
        className="group relative block w-full aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-black/40"
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes="(max-width: 768px) 100vw, 1000px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pt-10 pb-3 text-left text-sm text-white/90">
          {shot.caption}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-black/60 border border-white/15 px-2.5 py-1 text-xs text-white/85 opacity-0 group-hover:opacity-100 transition-opacity">
          Click to expand
        </span>
      </button>

      {shots.length > 1 && (
        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${shots.length}, minmax(0, 1fr))` }}>
          {shots.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setActive(i)}
              aria-label={`Show screenshot: ${s.caption}`}
              aria-pressed={i === active}
              className={`relative aspect-[16/9] overflow-hidden rounded-md border transition-all ${
                i === active
                  ? "border-[#ff753e] ring-1 ring-[#ff753e]/60"
                  : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={s.src} alt="" fill sizes="200px" className="object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      {/* Portal to <body>: the card's backdrop-blur would otherwise trap a fixed overlay inside it. */}
      {open && createPortal(<Lightbox shots={shots} index={active} onClose={close} onMove={move} />, document.body)}
    </div>
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
            className={`${cardBase} overflow-hidden hover:border-gray-300/30 flex flex-col ${
              project.gallery ? "" : "md:flex-row"
            }`}
          >
            {project.gallery && <ProjectGallery shots={project.gallery} title={project.title} />}

            {!project.gallery && project.imageSrc && (
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
