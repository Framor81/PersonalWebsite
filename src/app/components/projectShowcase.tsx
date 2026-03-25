"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProjectsShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: "pickup",
      title: "P-ickup",
      href: "https://p-ickup.com/",
      imageSrc: "/about/p-ickupDashboard.jpg",
      imageAlt: "P-ickup Dashboard",
      description:
        "Why pay $100+ for a ride to the airport? We help you split the cost and share the journey with fellow travelers.",
      subtext:
        "Utilized by Pomona College for coordinating transportation for over 1200 students",
      inProgress: false,
    },
    {
      id: "3dmuseum",
      title: "3DMuseum",
      href: "/projects/3dmuseum",
      imageSrc: "/about/Pickup.jpg",
      imageAlt: "3DMuseum preview",
      description:
        "Interactive 3D museum experience currently under development. Public preview will be available through this path.",
      subtext: "In Progress",
      inProgress: true,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {projects.map((project) => {
        const isHovered = hoveredProject === project.id;
        const isExternal = project.href.startsWith("http");

        return (
          <a
            key={project.id}
            href={project.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="relative group"
          >
            <div
              className={`
                relative overflow-hidden rounded-xl
                transition-all duration-500 ease-in-out
                ${isHovered ? "w-[460px] h-[360px]" : "w-[280px] h-[280px]"}
                bg-gray-400/20 backdrop-blur-md border border-gray-300/20
                shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_4px_rgba(255,255,255,0.05)]
                hover:bg-gray-400/25 hover:border-gray-300/30
                hover:shadow-[0_4px_12px_rgba(0,0,0,0.15),0_0_8px_rgba(255,255,255,0.1)]
              `}
            >
              {isHovered && (
                <div className="absolute inset-0">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
              )}

              <div className="relative h-full flex items-center justify-center p-6">
                {isHovered ? (
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {project.title}
                      {project.inProgress && (
                        <span className="ml-2 text-base text-zinc-300">
                          {"<In Progress>"}
                        </span>
                      )}
                    </h3>
                    <p className="text-zinc-200 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-zinc-300 text-sm mt-4">
                      {project.subtext}
                    </p>
                  </div>
                ) : (
                  <h3 className="text-2xl font-semibold text-foreground text-center">
                    {project.title}
                    {project.inProgress && (
                      <span className="block text-base text-zinc-300 mt-2">
                        {"<In Progress>"}
                      </span>
                    )}
                  </h3>
                )}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
