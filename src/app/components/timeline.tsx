type TimelineEntry = {
  year: string;
  items: { title: string; body: string }[];
};

const timeline: TimelineEntry[] = [
  {
    year: "2026 → Now",
    items: [
      {
        title: "Started my next chapter at Accenture",
        body: "Joined Accenture as an AI Native Software Engineer after graduating from Pomona. I now bring together software engineering, AI, data, and product thinking to solve real-world problems.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Turned gaze into an accessible control system",
        body: "Presented Eyes in Motion at the Tapia Conference and placed third in the undergraduate ACM Student Research Competition.",
      },
      {
        title: "Built production-minded observability systems",
        body: "During my second Accenture internship, designed monitoring dashboards and architecture using Grafana, Prometheus, Loki, and InfluxDB.",
      },
      {
        title: "Helped campus travel work better",
        body: "Co-developed P-ickup's matching platform for coordinating student airport rides at scale.",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Went deeper into teaching and applied software",
        body: "Supported students learning Java, data structures, Haskell, and discrete mathematics while completing my first technology consulting internship at Accenture.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Entered robotics research",
        body: "Joined Pomona's ARCS Lab and began building simulated environments, data pipelines, and navigation tools for autonomous robots.",
      },
    ],
  },
  {
    year: "College years",
    items: [
      {
        title: "Built the community I wanted to see",
        body: "Founded and led the 5C Robotics Club, mentored first-year and Latinx students in STEM, and helped make technical spaces more welcoming across the Claremont Colleges.",
      },
    ],
  },
  {
    year: "Where it started",
    items: [
      {
        title: "From an FTC programmer to a human-centered engineer",
        body: "Robotics first pulled me into engineering in high school. Watching people in my family face injuries and reduced mobility gave that interest a purpose: building technology that protects independence and removes everyday barriers.",
      },
    ],
  },
];

export default function Timeline() {
  return (
    <div className="relative w-full">
      {/* Vertical line */}
      <div className="absolute left-2 sm:left-32 top-2 bottom-2 w-px bg-gradient-to-b from-[#ff753e]/50 via-gray-300/20 to-transparent" />

      <div className="space-y-10">
        {timeline.map((entry) => (
          <div key={entry.year} className="relative flex flex-col sm:flex-row gap-3 sm:gap-6">
            {/* Year (pinned left on desktop) */}
            <div className="sm:w-32 sm:pr-6 sm:text-right shrink-0 pl-8 sm:pl-0">
              <span className="text-sm font-semibold text-[#ff753e] whitespace-nowrap">{entry.year}</span>
            </div>

            {/* Node dot */}
            <div className="absolute left-2 sm:left-32 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ff753e] ring-4 ring-[#320000]" />

            {/* Story cards */}
            <div className="flex-1 space-y-3 pl-8 sm:pl-4">
              {entry.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-gray-400/20 backdrop-blur-md border border-gray-300/20 shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_4px_rgba(255,255,255,0.05)] p-4 hover:bg-gray-400/25 hover:border-gray-300/30 transition-all"
                >
                  <h3 className="text-base font-semibold text-foreground leading-snug">{item.title}</h3>
                  <p className="text-sm text-zinc-300 leading-snug mt-1">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
